"""高德地理编码客户端（复用实习雷达的三级定位策略）。

smart_locate(address, company, city):
  1) 地址地理编码 → geo_level=address
  2) 公司名 POI 搜索（剥公司后缀）→ geo_level=poi
  3) 城市中心点兜底 → geo_level=city（同时返回该市所属省份，用于补齐 province）
坐标为 GCJ-02（高德坐标系），入库前由 pipeline 转 WGS-84。
结果落本地缓存 .geocode_cache.json，重复运行不重复请求。
"""
import json
import os
import re
import time

import requests

CACHE_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), '.geocode_cache.json')
COMPANY_SUFFIX_RE = re.compile(r'(有限责任公司|股份有限公司|有限公司|集团有限公司|集团|公司)$')

GEO_URL = 'https://restapi.amap.com/v3/geocode/geo'
POI_URL = 'https://restapi.amap.com/v3/place/text'


class AmapGeocoder:
    def __init__(self, key: str, min_interval_ms: int = 120):
        self.key = key
        self.min_interval = min_interval_ms / 1000.0
        self.session = requests.Session()
        self._last_call = 0.0
        self.cache = {}
        if os.path.exists(CACHE_PATH):
            with open(CACHE_PATH, encoding='utf-8') as f:
                self.cache = json.load(f)

    # ---- 基础请求 ----
    def _get(self, url, params):
        wait = self._last_call + self.min_interval - time.time()
        if wait > 0:
            time.sleep(wait)
        self._last_call = time.time()
        resp = self.session.get(url, params={**params, 'key': self.key}, timeout=15)
        resp.raise_for_status()
        return resp.json()

    def _cached(self, kind, query, city, fn):
        ck = f'{kind}|{city or ""}|{query}'
        if ck in self.cache:
            return self.cache[ck]
        result = fn()
        self.cache[ck] = result
        return result

    # ---- 三级定位 ----
    def geocode_addr(self, address, city=None):
        def call():
            j = self._get(GEO_URL, {'address': address, 'city': city or ''})
            if j.get('status') == '1' and j.get('geocodes'):
                lng, lat = j['geocodes'][0]['location'].split(',')
                return [float(lng), float(lat), 'address']
            return None
        return self._cached('addr', address, city, call)

    def poi_search(self, company, city=None):
        keyword = COMPANY_SUFFIX_RE.sub('', company.strip())

        def call():
            j = self._get(POI_URL, {'keywords': keyword, 'city': city or '',
                                    'citylimit': 'true' if city else 'false',
                                    'offset': 5, 'page': 1})
            if j.get('status') == '1' and j.get('pois'):
                lng, lat = j['pois'][0]['location'].split(',')
                return [float(lng), float(lat), 'poi']
            return None
        return self._cached('poi', keyword, city, call)

    def city_center(self, city):
        """返回 [lng, lat, 'city', province_full]；province 供 province 缺失时反查。"""

        def call():
            j = self._get(GEO_URL, {'address': city})
            if j.get('status') == '1' and j.get('geocodes'):
                g = j['geocodes'][0]
                lng, lat = g['location'].split(',')
                province = g.get('province') or ''
                if isinstance(province, list):
                    province = province[0] if province else ''
                return [float(lng), float(lat), 'city', province]
            return None
        return self._cached('city', city, None, call)

    def smart_locate(self, address, company, city):
        """返回 (lng, lat, geo_level) 或 None。"""
        for fn, args in ((self.geocode_addr, (address, city)),
                         (self.poi_search, (company, city)),
                         (self.city_center, (city,))):
            if not args[0]:
                continue
            hit = fn(*args)
            if hit:
                return hit[0], hit[1], hit[2]
        return None

    def save_cache(self):
        tmp = CACHE_PATH + '.tmp'
        with open(tmp, 'w', encoding='utf-8') as f:
            json.dump(self.cache, f, ensure_ascii=False)
        os.replace(tmp, CACHE_PATH)
