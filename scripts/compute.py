"""M2b（内存优化版）: 逐县算三个指标，输出 counties.json + 简化县界 GeoJSON。
- 县界/县城中心：DataV（GCJ-02）-> 转 WGS-84（标准算法，逐顶点变换）。
- 道路线：Geofabrik 中国 OSM 提取（WGS-84），流式读入，不整文件 json.load（上一版整文件加载后 OOM）。
- 度量：统一投影到 Asia North Albers 等面积投影（米制）再算距离/长度/面积。
- 指标：dist_motorway_km（县城中心到最近高速线）、motorway 密度、全部道路密度。
- 分档：<10 通达 / 10-30 / 30-50 / >50 困难。
"""
import json, math, os
import numpy as np
import shapely
from shapely import STRtree
from shapely.geometry import shape, LineString
from pyproj import Transformer

ROOT = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(ROOT, "data")

# ---------- GCJ-02 -> WGS-84（标准算法，numpy 向量化） ----------
A = 6378245.0
EE = 0.00669342162296594323

def _transformlat(lng, lat):
    ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * np.sqrt(np.abs(lng))
    ret += (20.0 * np.sin(6.0 * lng * np.pi) + 20.0 * np.sin(2.0 * lng * np.pi)) * 2.0 / 3.0
    ret += (20.0 * np.sin(lat * np.pi) + 40.0 * np.sin(lat / 3.0 * np.pi)) * 2.0 / 3.0
    ret += (160.0 * np.sin(lat / 12.0 * np.pi) + 320 * np.sin(lat * np.pi / 30.0)) * 2.0 / 3.0
    return ret

def _transformlng(lng, lat):
    ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * np.sqrt(np.abs(lng))
    ret += (20.0 * np.sin(6.0 * lng * np.pi) + 20.0 * np.sin(2.0 * lng * np.pi)) * 2.0 / 3.0
    ret += (20.0 * np.sin(lng * np.pi) + 40.0 * np.sin(lng / 3.0 * np.pi)) * 2.0 / 3.0
    ret += (150.0 * np.sin(lng / 12.0 * np.pi) + 300.0 * np.sin(lng / 30.0 * np.pi)) * 2.0 / 3.0
    return ret

def gcj02_to_wgs84_arr(lng, lat):
    lng = np.asarray(lng, dtype=float)
    lat = np.asarray(lat, dtype=float)
    dlat = _transformlat(lng - 105.0, lat - 35.0)
    dlng = _transformlng(lng - 105.0, lat - 35.0)
    radlat = lat / 180.0 * math.pi
    magic = np.sin(radlat)
    magic = 1 - EE * magic * magic
    sqrtmagic = np.sqrt(magic)
    dlat = (dlat * 180.0) / ((A * (1 - EE)) / (magic * sqrtmagic) * math.pi)
    dlng = (dlng * 180.0) / (A / sqrtmagic * np.cos(radlat) * math.pi)
    return lng - dlng, lat - dlat

# ---------- 流式读 GeoJSON（ijson 真流式，不整文件进内存） ----------
def iter_features(path):
    import ijson
    with open(path, encoding="utf-8") as fh:
        yield from ijson.items(fh, "features.item")

# ---------- 投影 ----------
PROJ = Transformer.from_crs(
    "EPSG:4326",
    "+proj=aea +lat_1=15 +lat_2=65 +lat_0=30 +lon_0=105 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
    always_xy=True)

def project_coords(coords):
    arr = np.asarray(coords, dtype=float)
    x, y = PROJ.transform(arr[:, 0], arr[:, 1])
    return np.column_stack([x, y])

def to_projected_linestring(geom):
    if geom["type"] == "LineString":
        return LineString(project_coords(geom["coordinates"]))
    # MultiLineString：取最长的那条（OSM way 正常是单线；多线时拆不开，取最长）
    parts = [LineString(project_coords(c)) for c in geom["coordinates"]]
    return max(parts, key=lambda g: g.length)

def main():
    import shapely.geometry
    counties_gcj = json.load(open(os.path.join(DATA, "counties_gcj02.geojson"), encoding="utf-8"))
    meta = {m["adcode"]: m for m in json.load(open(os.path.join(DATA, "counties_meta.json"), encoding="utf-8"))}
    print("counties:", len(counties_gcj["features"]), flush=True)

    polys, centers, recs = [], [], []
    for f in counties_gcj["features"]:
        p = f["properties"]
        m = meta.get(p["adcode"])
        if not m:
            continue
        g = shape(f["geometry"])
        # GCJ-02 -> WGS-84（逐顶点）
        g = shapely.transform(g, lambda c: np.column_stack(gcj02_to_wgs84_arr(c[:, 0], c[:, 1])))
        if not g.is_valid:
            g = shapely.make_valid(g)
        if g.is_empty:
            continue
        clng, clat = gcj02_to_wgs84_arr([m["center"][0]], [m["center"][1]])
        polys.append(g)
        centers.append((float(clng[0]), float(clat[0])))
        recs.append({"adcode": p["adcode"], "name": p["name"],
                     "province": m["province"], "city": m["city"],
                     "center": [round(float(clng[0]), 5), round(float(clat[0]), 5)]})
    print("usable counties:", len(polys), flush=True)
    assert len({r["adcode"] for r in recs}) == len(recs), "duplicate adcode!"

    polys_m = [shapely.transform(g, lambda c: np.column_stack(PROJ.transform(c[:, 0], c[:, 1]))) for g in polys]
    centers_m = shapely.points([PROJ.transform(c[0], c[1]) for c in centers])
    poly_arr = np.array(polys_m, dtype=object)
    areas_km2 = shapely.area(poly_arr) / 1e6
    poly_tree = STRtree(poly_arr)

    # ---------- 高速线（全量进内存，建 STRtree 供最近点查询） ----------
    motorway = []
    for feat in iter_features(os.path.join(DATA, "roads_osm_motorway.geojson")):
        g = to_projected_linestring(feat["geometry"])
        if not g.is_empty:
            motorway.append(g)
    print("motorway segments:", len(motorway), flush=True)
    mw_arr = np.array(motorway, dtype=object)
    del motorway
    mw_tree = STRtree(mw_arr)
    nearest_idx = mw_tree.nearest(np.array(centers_m, dtype=object))
    nearest_geoms = mw_arr[nearest_idx]
    dist_km = shapely.distance(np.array(centers_m, dtype=object), nearest_geoms) / 1000.0
    del centers_m, nearest_geoms, nearest_idx

    # 高速在县界内的长度（分块算，避免一次建 46 万条的相交对）
    mw_km = np.zeros(len(poly_arr))
    chunk, total = [], 0
    for i, g in enumerate(mw_arr):
        chunk.append(g)
        if len(chunk) >= 50000:
            _accum_lengths(chunk, poly_tree, poly_arr, mw_km)
            total += len(chunk)
            chunk = []
            print(f"  motorway clip {total}...", flush=True)
    if chunk:
        _accum_lengths(chunk, poly_tree, poly_arr, mw_km)
    print("motorway in-county done", flush=True)
    del mw_arr, mw_tree

    # ---------- 全部道路在县界内的长度（流式分块，不全量进内存） ----------
    road_km = np.zeros(len(poly_arr))
    chunk, total = [], 0
    for feat in iter_features(os.path.join(DATA, "roads_osm_all.geojson")):
        g = to_projected_linestring(feat["geometry"])
        if g.is_empty:
            continue
        chunk.append(g)
        if len(chunk) >= 50000:
            _accum_lengths(chunk, poly_tree, poly_arr, road_km)
            total += len(chunk)
            chunk = []
            print(f"  all-roads clip {total}...", flush=True)
    if chunk:
        _accum_lengths(chunk, poly_tree, poly_arr, road_km)
    print("all-roads in-county done", flush=True)

    # ---------- 输出 ----------
    def band(d):
        return 1 if d < 10 else (2 if d < 30 else (3 if d < 50 else 4))
    rows = []
    for i, r in enumerate(recs):
        rows.append({
            **r,
            "area_km2": round(float(areas_km2[i]), 1),
            "dist_motorway_km": round(float(dist_km[i]), 1),
            "motorway_km": round(float(mw_km[i]), 1),
            "motorway_density": round(float(mw_km[i] / areas_km2[i] * 100), 2) if areas_km2[i] > 0 else 0,
            "road_km": round(float(road_km[i]), 1),
            "road_density": round(float(road_km[i] / areas_km2[i] * 100), 2) if areas_km2[i] > 0 else 0,
            "band": band(float(dist_km[i])),
            "is_island": r["name"] in ("南沙区", "西沙区"),
        })
    with open(os.path.join(DATA, "counties.json"), "w", encoding="utf-8") as fh:
        json.dump(rows, fh, ensure_ascii=False)
    print("wrote counties.json:", len(rows), flush=True)

    bfeats = []
    for i, r in enumerate(recs):
        g = shapely.simplify(polys[i], 0.005)
        bfeats.append({"type": "Feature",
                       "properties": {"adcode": r["adcode"], "name": r["name"],
                                      "province": r["province"], "band": rows[i]["band"],
                                      "dist": rows[i]["dist_motorway_km"]},
                       "geometry": shapely.geometry.mapping(g)})
    with open(os.path.join(DATA, "counties_boundaries_wgs84.geojson"), "w", encoding="utf-8") as fh:
        json.dump({"type": "FeatureCollection", "features": bfeats}, fh, ensure_ascii=False)
    print("wrote counties_boundaries_wgs84.geojson", flush=True)

    d = np.array([r["dist_motorway_km"] for r in rows])
    print(f"\n全国：县数 {len(rows)}，到高速距离 均值 {d.mean():.1f}km，中位 {np.median(d):.1f}km，最大 {d.max():.1f}km")
    for b, label in [(1, "<10km 通达"), (2, "10-30km"), (3, "30-50km"), (4, ">50km 困难")]:
        n = int(sum(1 for r in rows if r["band"] == b))
        print(f"  band{b} {label}: {n} 县 ({n/len(rows)*100:.1f}%)")
    print("\n到高速最远的 10 个县（不含南海海岛区县）：")
    for r in sorted([x for x in rows if not x.get("is_island")], key=lambda r: -r["dist_motorway_km"])[:10]:
        print(f"  {r['province']}{r['name']}: {r['dist_motorway_km']}km（面积 {r['area_km2']}km²）")
    print("\n高速密度最高的 10 个县（面积>=50km²）：")
    for r in sorted([x for x in rows if x["area_km2"] >= 50], key=lambda r: -r["motorway_density"])[:10]:
        print(f"  {r['province']}{r['name']}: {r['motorway_density']}km/100km²（高速 {r['motorway_km']}km）")
    print("\n各省县均到高速距离（最差 8 省）：")
    prov = {}
    for r in rows:
        prov.setdefault(r["province"], []).append(r["dist_motorway_km"])
    for p, v in sorted(prov.items(), key=lambda kv: -np.mean(kv[1]))[:8]:
        print(f"  {p}: 均值 {np.mean(v):.1f}km，中位 {np.median(v):.1f}km，{len(v)} 县")

def _accum_lengths(segments, poly_tree, poly_arr, out):
    seg_arr = np.array(segments, dtype=object)
    si, pi = poly_tree.query(seg_arr, predicate="intersects")
    if len(si) == 0:
        return
    inter = shapely.intersection(seg_arr[si], poly_arr[pi])
    lens = shapely.length(inter) / 1000.0
    np.add.at(out, pi, lens)

if __name__ == "__main__":
    main()
