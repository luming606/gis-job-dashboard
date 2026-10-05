"""ETL 主流程：collector 下的采集 JSON → 校验/去重/薪资解析/地理编码/坐标转换 → data/staged_jobs.json

用法:
  set AMAP_KEY=你的高德Key && python pipeline.py     # 全流程
  python pipeline.py --no-geocode                    # 跳过地理编码（快速验证数据用）
"""
import argparse
import glob
import json
import os
from collections import Counter

from salary_parser import parse_salary
from gcj02 import gcj02_to_wgs84

BASE = os.path.dirname(os.path.abspath(__file__))

# 简称→全称，与 DataV GeoAtlas 的 name 字段对齐（区域面 join 键）
PROVINCE_FULL = {
    '北京': '北京市', '天津': '天津市', '上海': '上海市', '重庆': '重庆市',
    '内蒙古': '内蒙古自治区', '广西': '广西壮族自治区', '西藏': '西藏自治区',
    '宁夏': '宁夏回族自治区', '新疆': '新疆维吾尔自治区',
    '香港': '香港特别行政区', '澳门': '澳门特别行政区', '台湾': '台湾省',
}
JOB_TYPES = ('intern', 'campus', 'social')
# 直辖市的区（大兴/海淀/浦东）不应作独立城市，统一归到直辖市
MUNICIPALITIES = ('北京市', '上海市', '天津市', '重庆市')


def norm_province(p):
    p = (p or '').strip()
    if not p:
        return ''
    if p in PROVINCE_FULL:
        return PROVINCE_FULL[p]
    if p.endswith(('省', '市', '自治区', '特别行政区')):
        return p
    return p + '省'


def infer_job_type(raw, title):
    """兼容实习雷达 legacy 数据：job_type 缺失时按岗位名推断。"""
    jt = (raw.get('job_type') or '').strip().lower()
    if jt in JOB_TYPES:
        return jt
    if '实习' in title or 'intern' in title.lower():
        return 'intern'
    if any(k in title for k in ('校招', '应届', '校园')):
        return 'campus'
    return 'social'


def load_files(src):
    files = sorted(glob.glob(os.path.join(src, 'batch*', '*.json')))
    files += sorted(glob.glob(os.path.join(src, 'legacy', '*.json')))
    out = []
    for fp in files:
        try:
            with open(fp, encoding='utf-8') as f:
                data = json.load(f)
            out.extend(data)
            print(f'  读取 {os.path.relpath(fp, src)}: {len(data)} 条')
        except (json.JSONDecodeError, OSError) as e:
            print(f'  [跳过坏文件] {os.path.basename(fp)}: {e}')
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--src', default=os.path.join(BASE, '..', 'collector'))
    ap.add_argument('--out', default=os.path.join(BASE, '..', 'data', 'staged_jobs.json'))
    ap.add_argument('--no-geocode', action='store_true')
    args = ap.parse_args()

    geocoder = None
    amap_key = os.environ.get('AMAP_KEY', '')
    if not args.no_geocode and amap_key:
        from geocode import AmapGeocoder
        geocoder = AmapGeocoder(amap_key)
    elif not args.no_geocode:
        print('[警告] 未设置 AMAP_KEY，本次不地理编码（坐标为空，之后带 Key 重跑即可补上）')

    raws = load_files(args.src)
    print(f'共读取 {len(raws)} 条原始记录，开始清洗…')

    jobs, dropped = [], Counter()
    seen_url, seen_key = set(), set()
    for raw in raws:
        company = (raw.get('company') or '').strip()
        title = (raw.get('title') or '').strip()
        city = (raw.get('city') or '').strip()
        url = (raw.get('source_url') or '').strip()
        if not all((company, title, city, url)):
            dropped['缺必填字段'] += 1
            continue
        key = f'{company}|{title}|{city}'
        if url in seen_url or key in seen_key:
            dropped['重复'] += 1
            continue
        seen_url.add(url)
        seen_key.add(key)
        jobs.append({
            'company': company, 'title': title, 'city': city,
            'province': norm_province(raw.get('province')),
            'address': (raw.get('address') or '').strip(),
            'job_type': infer_job_type(raw, title),
            'requirements': (raw.get('requirements') or '').strip(),
            'skills': [s.strip() for s in (raw.get('skills') or []) if s and s.strip()],
            'salary_raw': (raw.get('salary') or '').strip(),
            'source_url': url,
            'source_site': (raw.get('source_site') or '').strip(),
            'collected_date': (raw.get('collected_date') or '').strip(),
            'notes': (raw.get('notes') or '').strip(),
            'lng': None, 'lat': None, 'geo_level': 'none',
            'wgs_lng': None, 'wgs_lat': None,
        })

    for j in jobs:
        j.update(parse_salary(j['salary_raw']))
        if j['province'] in MUNICIPALITIES:
            j['city'] = j['province']
        elif norm_province(j['city']) == j['province']:
            # 城市字段填的是省名（如 city=浙江），归一为省级全称
            j['city'] = j['province']

    if geocoder:
        prov_cache = {}
        for j in jobs:
            loc = geocoder.smart_locate(j['address'], j['company'], j['city'])
            if loc:
                j['lng'], j['lat'], j['geo_level'] = loc
                j['wgs_lng'], j['wgs_lat'] = gcj02_to_wgs84(j['lng'], j['lat'])
            if not j['province']:
                if j['city'] not in prov_cache:
                    cc = geocoder.city_center(j['city']) or []
                    prov_cache[j['city']] = cc[3] if len(cc) > 3 else ''
                if prov_cache[j['city']]:
                    j['province'] = norm_province(prov_cache[j['city']])
        geocoder.save_cache()

    no_prov_count = sum(1 for j in jobs if not j['province'])
    jobs = [j for j in jobs if j['province']]
    if no_prov_count:
        dropped['无省份且无法反查'] = no_prov_count

    type_dist = Counter(j['job_type'] for j in jobs)
    provs = {j['province'] for j in jobs}
    sal_ok = sum(1 for j in jobs if j['status'] == 'ok')
    sal_total = sum(1 for j in jobs if j['status'] in ('ok', 'fail'))
    geo_dist = Counter(j['geo_level'] for j in jobs)
    city_ratio = geo_dist.get('city', 0) / max(len(jobs), 1)

    print('=' * 46)
    print('ETL 报告')
    print(f'有效岗位: {len(jobs)}   丢弃: {dict(dropped) or "无"}')
    print(f'岗位类型: {dict(type_dist)}')
    print(f'覆盖省级: {len(provs)} 个 → {sorted(provs)}')
    if sal_total:
        print(f'薪资解析成功率: {sal_ok}/{sal_total} = {sal_ok / sal_total:.0%}')
    fails = [j['salary_raw'] for j in jobs if j['status'] == 'fail'][:5]
    if fails:
        print('解析失败样例（人工确认）:', fails)
    print(f'定位级别: {dict(geo_dist)}   城市兜底占比: {city_ratio:.0%}')
    print(f'输出: {os.path.abspath(args.out)}')

    os.makedirs(os.path.dirname(args.out), exist_ok=True)
    with open(args.out, 'w', encoding='utf-8') as f:
        json.dump(jobs, f, ensure_ascii=False, indent=1)


if __name__ == '__main__':
    main()
