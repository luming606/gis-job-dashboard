# 主题 1 技术方案：GIS 人才求职市场可视化大屏

> 项目代号：gis-job-dashboard ｜ 创建：2026-10-05 ｜ 周期：4 周 ｜ 定位：秋招简历全栈项目
> 配套仓库清单：E:\coding\zcode\webgis-repos-collection.md

## 0. 项目一句话

基于 500+ 条真实 GIS 岗位数据的求职市场可视化大屏：PostGIS 空间数据库 + 自建瓦片服务 + AntV L7 WebGL 可视化 + DataV 大屏外壳，Docker 一键部署。

**选题差异化**：别人做职住分析用人口/通勤等大路货数据，本项目数据来自实习雷达（Flutter app）的真实采集管道——地信岗位在哪、要什么技能、给多少钱，一屏看全。

## 1. 现状摸底（2026-10-05）

实习雷达现有资产可复用：
- **采集规范**：`gis_job_finder/docs/采集规范.md`（含 skills 受控词表）+ JSON 模板，字段宽松兼容（`Job.fromJson`）
- **现有数据**：仅约 19 条，全部武汉 → **数据扩充是第一优先级**
- **薪资是自由文本**（"150-200元/天"）：ETL 需做结构化解析
- **坐标已是 GCJ-02**（高德地理编码三级策略），与 AMap 底图/L7 无缝；存 PostGIS 时转 WGS84 存 geom 字段
- `status` 字段是个人求职进度，**不属于市场数据，大屏不采集**

## 2. 总体架构

```
┌─────────────────────────── 前端大屏 (Vue3 + Vite) ───────────────────────────┐
│  DataV Vue3 外壳/边框     L7 Scene (WebGL 热力/聚合/飞线)     ECharts        │
│         │                        │                          │                │
│         └──────── 底图：高德(GCJ-02) ──升级→ MapLibre+自托管矢量瓦片 ─────────┘
└──────────────┬──────────────────────────────────────────────┬────────────────┘
               │ REST (GeoJSON/JSON)                          │ 瓦片
┌──────────────▼───────────────┐   ┌───────────────────────────▼──────────────┐
│  服务层 Node.js Express API   │   │  tileserver-gl（MBTiles 矢量/栅格瓦片）   │
│  /api/jobs /api/stats        │   └──────────────────────────▲─────────────────┘
│  /api/skills /api/flows      │                              │ MBTiles
└──────────────┬───────────────┘   ┌───────────────────────────┴─────────────────┐
               │ SQL                │  瓦片生成：ogr2ogr 导出 / 下载 OSM extract   │
┌──────────────▼───────────────────▼───────────────────────────────────────────┐
│  数据层 PostgreSQL + PostGIS（jobs / cities 表，geom 4326）                    │
└──────────────▲────────────────────────────────────────────────────────────────┘
               │ ETL (Python 脚本：清洗/薪资结构化/高德地理编码/去重)
┌──────────────┴────────────────────────────────────────────────────────────────┐
│  采集层：AI Agent 按扩展版采集规范采集（8-10 城市）→ JSON 文件                  │
└───────────────────────────────────────────────────────────────────────────────┘
```

**部署**：Docker Compose 四件套（postgres+postgis / tileserver-gl / api / nginx+前端），一键起整套。

## 3. 技术选型与理由

| 层 | 选型 | 理由 |
|---|---|---|
| 底图（P0） | 高德 GCJ-02 | 实习雷达已有 Key 与经验，零集成风险；数据坐标天然匹配 |
| 底图（P1 升级） | MapLibre GL JS + tileserver-gl 自托管矢量瓦片 | "OSM→MBTiles→自托管服务"全链路是核心简历卖点；失败可回退 P0 |
| 可视化引擎 | AntV L7（heatmap/cluster/OD 飞线） | WebGL 时空可视化利器，4.1k star |
| 底图加载 | OpenLayers 或 MapLibre | 二选一随 P1 定；OL 是国内 GIS 岗位 JD 高频词，优先 OL+ol-mapbox-style 加载矢量瓦片 |
| 大屏外壳 | DataV Vue3（@kjgl77/datav-vue3） | 边框装饰/飞线图组件，大屏观感速成 |
| 图表 | ECharts（词云、箱线图、时间线） | 生态最熟，坑最少 |
| 空间库 | PostgreSQL 16 + PostGIS 3 | 空间 SQL（ST_Within 半径统计、ST_Buffer 等时圈）是简历硬通货 |
| 服务 | Node.js Express | 轻量，GeoJSON 直出 |
| ETL | Python（pandas + requests） | 薪资文本解析、批量高德地理编码（限频 120ms，复用实习雷达策略） |
| 部署 | Docker Compose | 一键部署 = 加分项 |

## 4. 数据层设计

### 4.1 采集扩充（W1 核心任务）

- **范围：全国各地，不预设城市名单**——AI 按采集规范全网搜索，岗位出现在哪就采哪；重点保证覆盖地信岗位聚集地（北上广深武蓉西宁杭郑等），但不限于此，小城市的零星岗位同样是数据点
- 每轮目标 400-600 条（实习+校招+社招 WebGIS/GIS开发/遥感/测绘），以"W1/W3 两轮累计"为总量口径
- 复用采集规范 JSON 格式，新增字段：`job_type`（实习/校招/社招）、`source_site`、`province`（ETL 里由城市名反查补齐也可）
- ETL 对未知城市自动建 `cities` 行并地理编码，采集面扩大不需要改表结构
- 多期采集（W1/W3 各一轮）：`collected_date` 天然构成时间线，大屏的"岗位增长动画"有数据支撑

### 4.2 ETL 管道（etl/ 目录，Python）

1. **合并去重**：`source_url` + `company+title` 双键去重（对齐 app 的 importJobs 逻辑）
2. **薪资结构化**：正则解析"150-200元/天 / 2000-4000元/月 / 面议"→ `salary_min, salary_max, salary_unit`，并统一折算 `salary_daily_avg`（月÷21.75，时×8）供对比
3. **地理编码**：地址 → 高德 API（GCJ-02）；公司名 POI 搜索兜底 → 城市中心兜底，标记 `geo_level`（address/poi/city）
4. **坐标转换**：GCJ-02 → WGS84（存 PostGIS geom），GCJ-02 原值保留 `lng/lat` 列供前端
5. **技能标准化**：映射到采集规范受控词表（如 "openlayers"→"OpenLayers"）

### 4.3 PostGIS 表结构

```sql
CREATE TABLE cities (
  id       serial PRIMARY KEY,
  name     text NOT NULL UNIQUE,   -- 武汉
  province text NOT NULL,          -- 湖北（区域热力聚合键）
  adcode   text,                   -- 高德 adcode，关联区域面 GeoJSON
  lng double precision, lat double precision,   -- GCJ-02（供前端）
  geom     geometry(Point, 4326)                          -- WGS84（供空间分析）
);

CREATE TABLE jobs (
  id             serial PRIMARY KEY,
  company        text NOT NULL,
  title          text NOT NULL,
  city_id        int REFERENCES cities(id),
  address        text,
  job_type       text,            -- intern / campus / social
  salary_raw     text,
  salary_min     numeric, salary_max numeric, salary_unit text,
  salary_daily   numeric,         -- 统一折算日薪
  skills         text[],
  lng double precision, lat double precision,   -- GCJ-02
  geom           geometry(Point, 4326),
  geo_level      text,            -- address / poi / city（数据质量标记）
  source_url     text UNIQUE,
  collected_date date,
  created_at     timestamptz DEFAULT now()
);
CREATE INDEX jobs_geom_gix ON jobs USING gist(geom);
```

### 4.4 区域面图层（分级统计图，W2/W3）

"岗位越多颜色越深"的整面着色 = 分级统计图（choropleth），与点位热力图（HeatmapLayer）是两种独立图层，**都做、都可独立开关**：

- **边界数据**：阿里云 DataV GeoAtlas（`geo.datav.aliyun.com`）下载全国省级/市级 GeoJSON（基于高德边界，GCJ-02，与前端底图坐标系一致，零转换）
- **聚合方式**：按 `cities.province`（省级）或 `cities`（市级）GROUP BY 计数 → 服务端把计数 join 进 GeoJSON properties（`job_count` 字段）直出，前端用 L7 PolygonLayer 按值映射色带（浅→深）
- 图层数据由 API 返回而非前端聚合，体现"空间聚合在服务端做"的设计点
- **图层开关**：大屏加图层控制面板，分级统计图 / 点位热力 / 飞线 / 聚合点各一个 checkbox（L7 layer.show()/hide()），支持叠加组合

空间分析用例（API 背后）：光谷/张江等产业园 5km 半径岗位密度（ST_DWithin）、城市间岗位类型分布、技能共现计数。

## 5. 服务层 API

| 端点 | 返回 | 用途 |
|---|---|---|
| `GET /api/jobs?city=&job_type=` | GeoJSON FeatureCollection | 地图打点/热力源 |
| `GET /api/region-heat?level=province\|city&job_type=` | 全国面 GeoJSON，properties 含 `job_count` | 分级统计图层（颜色深浅=岗位数） |
| `GET /api/stats/overview` | 总量/城市数/均价/更新时间 | 顶部指标牌 |
| `GET /api/stats/salary?group_by=city\|job_type` | 分组箱线数据 | 薪资箱线图 |
| `GET /api/stats/skills?top=30` | 词频+共现矩阵 | 词云/弦图 |
| `GET /api/stats/city_rank` | 城市岗位数排名 | 排行榜 |
| `GET /api/stats/timeline?city=` | 按采集日期聚合 | 时间线动画 |
| `GET /api/flows` | 城市对 OD 数据 | 飞线层（岗位需求流向：供给城市→岗位聚集城市） |

## 6. 大屏布局（1920×1080 优先）

```
┌──────────────────────── 顶栏：标题 + 指标牌(岗位总量/覆盖城市/平均日薪/更新日期) ────────┐
│ ┌──────────────┐ ┌────────────────────────────────────┐ ┌──────────────────────────┐ │
│ │ 城市岗位排行   │ │        中央 L7 大地图                │ │ 技能词云 (ECharts)        │ │
│ │ (左1)         │ │  · 分级统计：省/市面着色，越深岗位越多 │ │ + Top10 技能条形图        │ │
│ ├──────────────┤ │  · 热力图：点位密度                  │ ├──────────────────────────┤ │
│ │ 薪资箱线图    │ │  · 聚合点：可点击弹详情              │ │ 技能共现弦图/矩阵          │ │
│ │ (按城市)      │ │  · 飞线：城市间需求流向              │ │ (右2)                    │ │
│ │              │ │  · 时间线播放：岗位逐期"生长"         │ │                          │ │
│ │              │ │  · 图层开关面板：各图层自由启停/叠加   │ │                          │ │
│ └──────────────┘ └────────────────────────────────────┘ └──────────────────────────┘ │
└────────────────────────── 底栏：时间轴滑块 + 城市筛选 tab ───────────────────────────────┘
```

## 7. 逐周里程碑

**W1 — 数据层（最硬的活先干）**
- 扩展采集规范（全国范围，不预设城市清单）→ AI 辅助采集 400+ 条（分 3-4 批）
- ETL 脚本全流程跑通（含未知城市自动建行、省份反查补齐），数据落 PostGIS
- 产出验收：`SELECT count(*) FROM jobs` ≥ 400，覆盖省份 ≥ 15，薪资结构化成功率 ≥ 90%，geo_level=city 兜底占比 ≤ 20%

**W2 — 服务层 + 大屏骨架**
- Docker Compose 起全栈；Express API 端点全通（含 region-heat）
- Vue3 + DataV 布局成型，L7 Scene 挂高德底图，点位热力图 + 省级分级统计图先亮起来（含图层开关）
- 产出验收：浏览器打开大屏，地图有热力 + 省份着色可切换，指标牌有真数

**W3 — 可视化全覆盖 + 底图升级**
- 全部图表上线（飞线/词云/弦图/箱线/时间线动画）
- P1 升级：尝试 OSM extract → MBTiles → tileserver-gl → OL/MapLibre 自托管底图；成功则切换，失败保留高德版并在 README 写"已验证方案"
- W3 末第二轮采集（时间线多一期数据）

**W4 — 打磨与发布**
- 大屏观感打磨（色彩/边框/加载动画）、移动端降级提示
- README：架构图 + GIF 演示 + 3 段"技术要点解析"（为什么 PostGIS / 瓦片服务链路 / L7 渲染原理）
- 部署公网演示链接（免费托管 or 本机内网穿透），GitHub 发仓库

## 8. README 框架（发布时）

1. 标题 + 一句话 + 大屏 GIF
2. 功能亮点（6 类可视化 + 空间 SQL 用例）
3. 架构图（本方案的架构图重绘）
4. 快速开始：`git clone` → 改 `.env`（高德 Key）→ `docker compose up`
5. 数据说明：采集规范、字段表、数据免责声明（公开信息、仅学习用途）
6. 技术要点解析（3 小节，面试预演）
7. Roadmap（自然语言查询 Agent 入口 = 主题 5 预留）

## 9. 简历写法（两个 bullet 预置）

- 独立设计实现"GIS 人才求职市场可视化大屏"：采集清洗 500+ 条多城市真实岗位数据，构建 PostGIS 空间数据库与 Node.js REST API，基于 AntV L7（WebGL）实现热力图、技能共现、城市飞线等 6 类时空可视化，ECharts + DataV 完成大屏工程化
- 打通地图服务全链路：OSM 数据 → MBTiles → tileserver-gl 自托管矢量瓦片服务 → 前端加载，Docker Compose 实现全栈一键部署

## 10. 风险与对策

| 风险 | 对策 |
|---|---|
| 采集数据量不足/偏科 | 分批采集+多期滚动；README 如实标注数据规模（真实比注水可信） |
| 高德 Key 配额 | ETL 限频 + 本地缓存地理编码结果；Key 走 .env 不进仓库 |
| L7 与 OL/MapLibre 集成踩坑 | P0 高德底图保底，P1 升级失败不影响主线 |
| GCJ-02/WGS84 混用出错 | 数据库双字段制（geom=4326 分析用，lng/lat=GCJ02 展示用），ETL 统一转换一次 |
| 合规 | 只采公开信息、只做学习用途展示、README 免责声明；不做登录/商业化 |

## 11. 目录规划（项目根）

```
gis-job-dashboard/
├── docs/           # PLAN.md、采集规范.md、字段表
├── collector/      # AI 采集任务书与产出 JSON（按期分目录）
├── etl/            # Python 清洗/地理编码/入库脚本
├── db/             # init.sql、迁移脚本
├── server/         # Express API
├── tiles/          # tileserver-gl 配置与 MBTiles
├── web/            # Vue3 大屏
└── docker-compose.yml
```
