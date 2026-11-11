"""M1-fix: 从 Geofabrik 中国 OSM 提取 highway=motorway/trunk/primary/secondary，
替代瓦片里缺失路段的道路网（瓦片 mbtiles 年代较旧，胶东、闽南、粤东、川西等处高速缺失）。
输出：data/roads_osm_motorway.geojson、data/roads_osm_all.geojson（WGS-84）。
注意：OSM 高速为分离式双向车道线，双向高速会算两次，密度指标仅用于县际比较。
内存控制：边读边写文件，不把全部要素攒在内存里（上一版攒 40 万条后 OOM）。
"""
import json, os
import osmium as o

ROOT = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(ROOT, "data")
PBF = os.path.join(DATA, "china-latest.osm.pbf")
WANTED = {"motorway", "trunk", "primary", "secondary"}

class RoadHandler(o.SimpleHandler):
    def __init__(self, f_mw, f_all):
        super().__init__()
        self.factory = o.geom.GeoJSONFactory()
        self.f_mw = f_mw
        self.f_all = f_all
        self.n_mw = 0
        self.n_all = 0
        self.n = 0
    def _write(self, fh, first, feat_json):
        if not first:
            fh.write(",")
        fh.write(feat_json)
    def way(self, w):
        hw = w.tags.get("highway")
        if hw not in WANTED:
            return
        if w.tags.get("area") == "yes":
            return
        try:
            geom_json = self.factory.create_linestring(w)
        except Exception:
            return
        # factory 返回 JSON 字符串，直接拼 feature，避免 json.loads 再建 dict
        props = json.dumps({"class": hw, "name": w.tags.get("name", ""),
                            "ref": w.tags.get("ref", "")}, ensure_ascii=False)
        feat = '{"type":"Feature","properties":' + props + ',"geometry":' + geom_json + "}"
        self._write(self.f_all, self.n_all == 0, feat)
        self.n_all += 1
        if hw == "motorway":
            self._write(self.f_mw, self.n_mw == 0, feat)
            self.n_mw += 1
        self.n += 1
        if self.n % 200000 == 0:
            print(f"  ...{self.n} ways (motorway {self.n_mw}, all {self.n_all})", flush=True)

def main():
    print("reading", PBF, flush=True)
    with open(os.path.join(DATA, "roads_osm_motorway.geojson"), "w", encoding="utf-8") as f_mw, \
         open(os.path.join(DATA, "roads_osm_all.geojson"), "w", encoding="utf-8") as f_all:
        f_mw.write('{"type":"FeatureCollection","features":[')
        f_all.write('{"type":"FeatureCollection","features":[')
        h = RoadHandler(f_mw, f_all)
        h.apply_file(PBF, locations=True)
        f_mw.write("]}")
        f_all.write("]}")
    print(f"done: motorway {h.n_mw}, all {h.n_all}", flush=True)

if __name__ == "__main__":
    main()
