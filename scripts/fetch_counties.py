"""M1: 拉取 DataV GeoAtlas 区县边界（三级：省 -> 市 -> 区县），合并为全国区县 GeoJSON。
来源：https://geo.datav.aliyun.com/areas_v3/bound/{adcode}_full.json
坐标：GCJ-02（后续 M2 再转 WGS-84，与瓦片对齐）。
输出：data/counties_gcj02.geojson（全部区县面）、data/counties_meta.json（adcode/名称/归属/center/centroid）。
"""
import json, os, time
import requests
from concurrent.futures import ThreadPoolExecutor

BASE = "https://geo.datav.aliyun.com/areas_v3/bound/{}_full.json"
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data")
os.makedirs(OUT, exist_ok=True)

def fetch(adcode):
    url = BASE.format(adcode)
    for attempt in range(3):
        try:
            r = requests.get(url, timeout=30)
            if r.status_code == 200:
                return r.json()
            print(f"  HTTP {r.status_code} for {adcode}")
        except Exception as e:
            print(f"  retry {adcode}: {e}")
        time.sleep(1)
    return None

def main():
    t0 = time.time()
    root = fetch(100000)
    provinces = root["features"]
    print(f"provinces: {len(provinces)}")
    # 省 -> 市（直辖市直接返回区县）
    cities = []
    districts_direct = []
    with ThreadPoolExecutor(max_workers=16) as ex:
        for prov, doc in zip(provinces, ex.map(lambda f: fetch(f["properties"]["adcode"]), provinces)):
            if not doc:
                print("  FAIL province", prov["properties"]["name"]); continue
            for f in doc["features"]:
                lv = f["properties"].get("level")
                if lv == "city":
                    cities.append((prov["properties"]["name"], f))
                elif lv == "district":
                    districts_direct.append((prov["properties"]["name"], "", f))
    print(f"cities: {len(cities)}, districts direct from province: {len(districts_direct)}")
    # 市 -> 区县；拉不到下级文件的市（如新疆兵团直辖县级市）本身就是一个县级单位，用其自身要素补入
    counties = list(districts_direct)
    with ThreadPoolExecutor(max_workers=16) as ex:
        for (prov_name, city), doc in zip(cities, ex.map(lambda c: fetch(c[1]["properties"]["adcode"]), cities)):
            if not doc:
                print("  FAIL city, use itself as county unit:", city["properties"]["name"])
                counties.append((prov_name, city["properties"]["name"], city))
                continue
            for f in doc["features"]:
                counties.append((prov_name, city["properties"]["name"], f))
    print(f"counties/districts total: {len(counties)} in {time.time()-t0:.1f}s")
    feats, meta = [], []
    for prov_name, city_name, f in counties:
        p = f["properties"]
        feats.append(f)
        meta.append({
            "adcode": p["adcode"], "name": p["name"], "level": p.get("level"),
            "province": prov_name, "city": city_name,
            "center": p.get("center"), "centroid": p.get("centroid"),
        })
    with open(os.path.join(OUT, "counties_gcj02.geojson"), "w", encoding="utf-8") as fh:
        json.dump({"type": "FeatureCollection", "features": feats}, fh, ensure_ascii=False)
    with open(os.path.join(OUT, "counties_meta.json"), "w", encoding="utf-8") as fh:
        json.dump(meta, fh, ensure_ascii=False)
    print("wrote counties_gcj02.geojson + counties_meta.json")

if __name__ == "__main__":
    main()
