# 全国县域高速可达性图谱

哪些县上高速最难？本项目用 2874 个县级单位与最新路网数据回答这个问题。

**在线查看：https://luming606.github.io/highway-accessibility/**

## 结论

| 指标 | 数值 |
| --- | --- |
| 县均到高速距离 | 12.7 km |
| 中位距离 | 4.4 km |
| 10 公里内的县 | 85.4%（2455 县） |
| 50 公里以上的县 | 132 县（4.6%） |

最远的 10 个县（不含南海海岛区县）：西藏普兰 713.8 km、札达 657.2 km、改则 564.9 km、噶尔 531.7 km、革吉 531.6 km、黑龙江漠河 461.5 km、仲巴 451.0 km、日土 433.1 km、措勤 403.1 km、尼玛 342.8 km。南沙区 1025.6 km 为海岛、无陆路，单独标注。

## 口径

- **主指标**：县城（DataV center 点）到最近高速（motorway）线的直线距离，分四档：<10 km 通达、10–30 km、30–50 km、>50 km 困难。直线距离，不是驾车距离与时间；“到高速线”不是“到高速出入口”。
- **县内高速密度**：县界内高速里程 / 面积；**全路网密度**：县界内 motorway + trunk + primary + secondary 里程 / 面积。高速里程按分离式双向车道线计，密度仅用于县际比较。
- 计算统一投影到自定义 Albers 等面积投影（`+proj=aea +lat_1=15 +lat_2=65 +lat_0=30 +lon_0=105 +datum=WGS84 +units=m`）。

## 数据

- 区县边界：DataV GeoAtlas，2874 个县级单位（GCJ-02 转 WGS-84）。
- 路网：Geofabrik 中国 OSM（2026-11-10 构建），motorway / trunk / primary / secondary。OSM 高速总长（车道线计）约 40.5 万公里，折半中线约 20.3 万公里，与官方约 19 万公里吻合。
- 底图：OpenMapTiles 矢量瓦片（z0–z9），本地暖陶土样式；境外用中国域遮罩压暗，只显示中国境内。

## 文件

- `index.html`：单页前端（MapLibre GL + 玻璃拟态 UI：液态胶囊、水滴分裂筛选、命令面板、停靠栏）。
- `data/counties.json`：2874 县指标表；`data/boundaries-*.geojson`：县界（6 个分片）；`data/china-mask.geojson`：中国域遮罩。
- `vendor/`：MapLibre GL JS 与 Inter 字体（本地化，字体已内嵌）。
- `scripts/`：数据准备与计算（`fetch_counties.py`、`extract_osm.py`、`compute.py`、`spotcheck.py`）。
- `static-tiles/`：底图矢量瓦片，仅发布分支（gh-pages）包含，不在 main 分支。

## 本地运行

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000/
```

> 本仓库前身为 GIS 求职大屏（gis-job-dashboard），2026-11-12 起完全替换为高速可达性图谱。旧求职大屏源码保留在 git 历史中，可按需恢复。
