"""抽查：对比瓦片版与 OSM 版指标，验证道路缺失修复是否生效。
- 修复应变小的县（原先因缺路被高估）：荣成、文登、崂山、市南、诏安、云霄、东山、饶平、康定
- 应保持大的县（真实偏远）：墨脱、普兰、漠河、札达
- 应保持小的县：昆山、江岸、朝阳
同时输出新版全国统计与新旧 band 变化。
"""
import json, os
import numpy as np

DATA = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data")

def load(name):
    return {r["adcode"]: r for r in json.load(open(os.path.join(DATA, name), encoding="utf-8"))}

def find(rows, province, name):
    for r in rows.values():
        if r["province"] == province and r["name"] == name:
            return r
    return None

def main():
    old = load("counties_tile_based.json")
    new = load("counties.json")
    print(f"old {len(old)} counties, new {len(new)} counties")
    checks = [
        ("山东省", "荣成市", "应大幅变小（G18）"),
        ("山东省", "文登区", "应大幅变小（G18）"),
        ("山东省", "崂山区", "应大幅变小（G20/青银）"),
        ("山东省", "市南区", "应大幅变小（G20/青银）"),
        ("福建省", "诏安县", "应大幅变小（G15）"),
        ("福建省", "云霄县", "应大幅变小（G15）"),
        ("福建省", "东山县", "应变小（海岛，G15 在对岸）"),
        ("广东省", "饶平县", "应大幅变小（G15）"),
        ("四川省", "康定市", "应变小（雅康高速）"),
        ("西藏自治区", "墨脱县", "应保持大（真实偏远）"),
        ("西藏自治区", "普兰县", "应保持大（真实偏远）"),
        ("黑龙江省", "漠河市", "应保持大（真实偏远）"),
        ("江苏省", "昆山市", "应保持小"),
        ("湖北省", "江岸区", "应保持小"),
    ]
    print("\n抽查（旧 -> 新，到高速距离 km）：")
    for prov, name, note in checks:
        o, n = find(old, prov, name), find(new, prov, name)
        if not o or not n:
            print(f"  {prov}{name}: MISSING old={bool(o)} new={bool(n)}")
            continue
        print(f"  {prov}{name}: {o['dist_motorway_km']} -> {n['dist_motorway_km']}  {note}")
    # 新旧 band 变化
    changed = sum(1 for a in old if a in new and old[a]["band"] != new[a]["band"])
    print(f"\nband 变化的县数：{changed}/{len(new)}")
    d = np.array([r["dist_motorway_km"] for r in new.values()])
    print(f"新版全国：均值 {d.mean():.1f}km，中位 {np.median(d):.1f}km，最大 {d.max():.1f}km")
    for b, label in [(1, "<10km"), (2, "10-30km"), (3, "30-50km"), (4, ">50km")]:
        n = sum(1 for r in new.values() if r["band"] == b)
        print(f"  band{b} {label}: {n} 县 ({n/len(new)*100:.1f}%)")
    # 新版最远（不含海岛）
    print("\n新版到高速最远 10 县（不含南海海岛）：")
    for r in sorted([x for x in new.values() if not x.get("is_island")],
                    key=lambda r: -r["dist_motorway_km"])[:10]:
        print(f"  {r['province']}{r['name']}: {r['dist_motorway_km']}km")

if __name__ == "__main__":
    main()
