# -*- coding: utf-8 -*-
"""测绘英才网（cehuiyc.com）定向采集脚本。

抓取多个关键词的列表页 → 过滤近期岗位（近 3 周）→ 抓详情页解析字段 → 输出规范格式 JSON。
礼貌爬取：请求间隔 0.6s，只抓列表前 2 页。
"""
import json
import os
import re
import sys
import time

import requests

sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = 'https://wap.cehuiyc.com'
LIST_URL = BASE_URL + '/Per_Search_Base.asp'
# 近期窗口：2026-09-20 之后的岗位才收（列表日期格式 MM-DD，跨年的旧帖月份会变小）
CUTOFF = (9, 20)
YEAR = 2026
DETAIL_SLEEP = 0.6

# 省份简称前缀（按长度优先匹配）
PROVINCES = ['黑龙江', '内蒙古', '北京', '天津', '上海', '重庆', '河北', '山西', '辽宁',
             '吉林', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北',
             '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西',
             '甘肃', '青海', '宁夏', '新疆', '香港', '澳门', '台湾']

LI_RE = re.compile(r'<a href="(/Job_Detail\.asp\?ComId=\w+&Param=\d+)">.*?'
                   r'<dt class="tit">(.*?)</dt>.*?'
                   r'<dd class="attr">\s*<span class="mr10">(.*?)</span><span>(.*?)</span>.*?'
                   r'<dd class="attr mb10">\s*<span>(\d{2}-\d{2})</span>', re.S)
FIELD_RE = re.compile(r'<li>(地点|学历|月薪|人数|经验)：<span>(.*?)</span></li>')
DESC_RE = re.compile(r'<div class="detail">(.*?)</div>\s*<div class="detail" id="DetailDiv">', re.S)
TAG_RE = re.compile(r'<[^>]+>')


def gbk_search_url(keyword, page):
    return LIST_URL + '?PageNo=%d&btnSltArea1=&funtype_big=&funtype=&industrytype=&issuedate=&Key=%s&KeyClass=1' % (
        page, requests.utils.quote(keyword.encode('gbk'), safe=''))


def is_fresh(md):
    try:
        m, d = map(int, md.split('-'))
    except ValueError:
        return False
    return (m, d) >= CUTOFF


def parse_location(loc):
    """'陕西西安' → (province_full, city)；直辖市/无省份前缀时城市=全文。"""
    loc = loc.strip()
    for p in sorted(PROVINCES, key=len, reverse=True):
        if loc.startswith(p):
            rest = loc[len(p):]
            if not rest:
                return p, p  # 直辖市
            return p, rest
    return '', loc


def parse_detail(path):
    r = s.get(BASE_URL + path, timeout=20)
    r.encoding = 'gbk'
    html = r.text
    fields = dict(FIELD_RE.findall(html))
    desc_m = DESC_RE.search(html)
    desc = TAG_RE.sub('\n', desc_m.group(1)).strip() if desc_m else ''
    desc = re.sub(r'\n{2,}', '\n', desc)
    nature_m = re.search(r'职位性质：<span>(.*?)</span>', html)
    return fields, desc, nature_m.group(1) if nature_m else ''


def infer_job_type(title, nature, desc):
    text = title + desc
    if '实习' in title or '实习' in nature:
        return 'intern'
    if '实习' in text:
        return 'intern'
    if any(k in text for k in ('校招', '应届', '届毕业生', '校园招聘')):
        return 'campus'
    return 'social'


s = requests.Session()
s.headers.update({'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})


def collect(keywords, out_file, max_pages=2):
    seen = {}
    for kw in keywords:
        for page in range(1, max_pages + 1):
            r = s.get(gbk_search_url(kw, page), timeout=20)
            r.encoding = 'gbk'
            items = LI_RE.findall(r.text)
            fresh = 0
            for path, title, loc, company, date in items:
                if not is_fresh(date) or path in seen:
                    continue
                seen[path] = (title.strip(), loc.strip(), company.strip(), date)
                fresh += 1
            print(f'  [{kw}] p{page}: {len(items)} 条，新增 {fresh}')
            if not fresh:
                break
            time.sleep(DETAIL_SLEEP)

    print(f'列表共 {len(seen)} 条近期岗位，开始抓详情…')
    out = []
    for i, (path, (title, loc, company, date)) in enumerate(seen.items(), 1):
        try:
            fields, desc, nature = parse_detail(path)
        except requests.RequestException as e:
            print(f'  [{i}] 请求失败 {path}: {e}')
            continue
        # 详情页「地点」字段最准（如“陕西西安”），列表页的城市名做兜底
        loc_field = fields.get('地点', '') or loc
        province, city = parse_location(loc_field)
        out.append({
            'company': company,
            'title': title,
            'city': city,
            'province': province,
            'address': fields.get('地点', ''),
            'job_type': infer_job_type(title, nature, desc),
            'requirements': desc[:2000],
            'skills': extract_skills(title + ' ' + desc),
            'salary': fields.get('月薪', ''),
            'source_url': BASE_URL + path,
            'source_site': '测绘英才网',
            'collected_date': '2026-10-06',
            'notes': f'发布日期 {date}；学历{fields.get("学历", "")}；经验{fields.get("经验", "")}；{fields.get("人数", "")}',
        })
        if i % 10 == 0:
            print(f'  详情 {i}/{len(seen)}')
        time.sleep(DETAIL_SLEEP)

    os.makedirs(os.path.dirname(out_file), exist_ok=True)
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(out, f, ensure_ascii=False, indent=1)
    print(f'完成 {len(out)} 条 → {out_file}')


SKILL_WORDS = ['ArcGIS', 'ArcGIS Pro', 'ArcPy', 'QGIS', 'SuperMap', 'MapGIS', 'ArcGIS Engine', 'CASS',
               'ENVI', 'ERDAS', 'PIE', '遥感解译', '摄影测量', 'ContextCapture', 'Pix4D', '无人机', 'LiDAR',
               '点云', 'Python', 'JavaScript', 'TypeScript', 'Java', 'C#', 'C++', 'SQL', 'MySQL', 'Oracle',
               'OpenLayers', 'Leaflet', 'Mapbox', 'MapLibre', 'Cesium', 'Three.js', 'WebGL', 'Vue', 'React',
               'PostGIS', 'PostgreSQL', 'GeoServer', 'GeoTools', 'GDAL', 'Spring Boot', 'Django', 'Flask',
               'FastAPI', 'Node.js', 'Docker', '空间分析', '空间数据库', '坐标', '投影', '专题制图',
               '矢量切片', 'CAD', 'Git', 'Linux', 'GeoPandas', '深度学习', '机器学习', 'InSAR', '实景三维']


def extract_skills(text):
    found = []
    for w in SKILL_WORDS:
        if w.lower() in text.lower() and w not in found:
            found.append(w)
    return found


if __name__ == '__main__':
    which = sys.argv[1] if len(sys.argv) > 1 else 'webgis'
    CONFIG = {
        'webgis': (['GIS开发工程师', 'WebGIS', 'GIS开发', '地图开发', '三维GIS', 'Cesium'],
                   os.path.join('batch1', 'webgis-dev.json')),
        'rs': (['遥感', '摄影测量', '无人机测绘', '点云', '实景三维', 'InSAR'],
               os.path.join('batch1', 'remote-sensing.json')),
        'survey': (['国土空间规划', 'GIS数据处理', '测绘技术员', '数据建库', '地理信息', '测绘工程师'],
                   os.path.join('batch1', 'gis-data-survey.json')),
        'batch2': (['无人机', '测量员', '内业', '不动产', '导航', 'GIS运维', '空间规划', '测绘内业',
                    '遥感应用', '卫星', '地理信息开发', '地图数据', '勘测', '地信'],
                   os.path.join('batch2', 'cehuiyc-extra.json')),
    }
    kws, out = CONFIG[which]
    collect(kws, out)
