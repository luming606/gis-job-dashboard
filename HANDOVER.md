# GIS 人才求职市场大屏 —— 项目交接文档（给接手的 Agent）

> 生成：2026-10-06 ｜ 原会话因用量将尽交接 ｜ 本文档目标：任何 Agent 读完即可无缝续做
> 用户：GIS 专业学生，Luming（GitHub 账号 luming606），求职方向 WebGIS

## 一、用户是谁、要什么

- GIS 学生，正在做求职作品集。已确定两个简历项目（见 `E:\coding\zcode\webgis-repos-collection.md`）：
  1. **本项目**：地信人才求职市场可视化大屏（已完成 v1+v2 并上线）
  2. 主题 4：three.js 自制迷你数字地球（尚未开工，用户愿意从 three.js 基础学起，需要带教）
  3. 主题 5：GIS Agent 入口（备选，做完可投 AI 应用类实习）
- 用户偏好：所有工具装 E 盘（C 盘满）；不要自动化定时任务（需要采集时手动说）；关键节点和任务完成时用 PowerShell `[console]::beep()` 响铃提醒；中文交流
- 沟通风格：说实话、给推荐而非罗列选项

## 二、项目现状（重要：这些都已完成、已上线）

- **仓库**：https://github.com/luming606/gis-job-dashboard （main 分支 12 个提交，gh CLI 已授权装在 `E:\tools\gh\bin\gh.exe`）
- **在线演示**：https://luming606.github.io/gis-job-dashboard/ （Pages 从 gh-pages 分支部署）
- **技术栈**：Vue3+Vite+AntV L7(WebGL)+ECharts 大屏；Express API（9 端点）；PostgreSQL16+PostGIS3.6 空间数据库；Python ETL；采集爬虫；静态/全栈双模式部署
- **数据**：286 条真实岗位 / 29 省 / 社招235·实习34·校招17，在 PostGIS `gisjobs` 库 + `data/staged_jobs.json`
- **大屏功能**：省级分级统计图、点位热力、流向飞线（示意语义）、聚合点弹窗、省份下钻明细、时间线动画（2 期）、真箱线图、技能共现网络、色带图例、五图层开关
- **本地启动**：双击 `start_dashboard.bat`；或 server: `node index.js`(3111) + web: `npm run dev`(5173)
- **数据更新流程（维护手册）**：爬虫（`python collector/cehuiyc_scraper.py <类别>`）→ ETL（`cd etl && set AMAP_KEY=<见.env> && python pipeline.py`）→ 入库（`set DATABASE_URL=<见.env> && python load_db.py`）→ 静态导出（`cd server && node export-static.mjs`）→ 构建（`cd web && npm run build`）→ 发布（`npx gh-pages -d dist`）

## 三、关键环境事实（接手必读）

1. **数据库**：E:\PostgreSQL 是完整 PG16.13+PostGIS3.6.2 套装（Windows 服务 `postgresql-x64-16` 自动运行）。gisjobs 库已建。**postgres 密码在项目根 `.env` 的 DATABASE_URL 里**（已 gitignore，勿提交勿外泄）。pg_hba 是 scram 认证
2. **高德 Key**：`.env` 的 AMAP_KEY（Web 服务类型，只能用于 REST 地理编码，不能用于 JS API 底图）
3. **网络**：Geofabrik 等境外源直连不通，**必须走用户代理 mihomo（系统代理 127.0.0.1:9674，开机不一定开着，用前先确认进程）**。下载命令模板：`curl -sL -C - -x http://127.0.0.1:9674 -o <file> <url>`（-L 必须，Geofabrik 会 307）
4. **npm** 走 npmmirror：`npm install --registry=https://registry.npmmirror.com`；esbuild 装后需 `npm install-scripts approve esbuild`
5. **gh CLI** 在 `E:\tools\gh\bin\gh.exe`，已登录 luming606
6. **Windows 坑**：PS1/写文件须 UTF-8 无 BOM（PowerShell `Set-Content -Encoding UTF8` 会带 BOM 毁掉 PostgreSQL 配置文件）；cmd 会吃管道符；中文路径毁构建（本项目路径全英文）

## 四、当前进行中的任务：v3 OSM 瓦片全链路（进行到一半）

**目标**：OSM 原始数据 → 矢量瓦片（MBTiles）→ 自托管瓦片服务 → 前端 MapLibre 底图接入。这条链路是简历"瓦片服务全链路"卖点，且**产出的瓦片源直接复用给主题 4 数字地球**（OSM 是 WGS84，无 GCJ-02 偏移，对数字地球更纯净）。

**已完成**：
- JDK 21.0.12 便携版 → `E:\tools\planetiler\jdk\jdk-21.0.12+1\`（系统 Java 是 1.8 太老，别动它）
- planetiler.jar → `E:\tools\planetiler\planetiler.jar`（已验证可运行）
- 全国 OSM pbf **已下载完成**：`E:\coding\zcode\projects\gis-job-dashboard\tiles\osm\china-latest.osm.pbf`（1530MB，curl 正常退出）。下一步直接切片（第四节第 2 步），无需再联网下载

**下一步（按序）**：
1. **续传 pbf**（需用户开代理）：`curl -sL -C - -x http://127.0.0.1:9674 -o "E:\coding\zcode\projects\gis-job-dashboard\tiles\osm\china-latest.osm.pbf" "https://download.geofabrik.de/asia/china-latest.osm.pbf"`（后台跑，约 10-15 分钟）
2. **切片**：`"E:\tools\planetiler\jdk\jdk-21.0.12+1\bin\java.exe" -Xmx4g -jar "E:\tools\planetiler\planetiler.jar" --osm-path=<pbf路径> --area=china --output="E:\coding\zcode\projects\gis-job-dashboard\tiles\china.mbtiles"`（mmap 存储默认；机器 16GB RAM；预计 10-20 分钟）
3. **瓦片服务**：两条路选一——a) npm 装 tileserver-gl（Windows 原生依赖有风险）；b) **推荐手写**：Node + `@mapbox/mbtiles`（纯 JS）写个 50 行 Express 服务，暴露 `/tiles/{z}/{x}/{y}.pbf` + TileJSON（`/tiles/tilejson.json`），端口 3112。手写版对简历故事更好（"读懂 XYZ 协议与 MBTiles 格式"）
4. **前端接入**：⚠️ L7 内置引擎的栅格瓦片渲染已验证**不可用**（详见五-3），底图必须走 **MapLibre GL JS**。方案：maplibre 实例做底图，L7 Scene 挂其上（`@antv/l7-maps` 的 Mapbox 包装器，MapLibre 是 mapbox-gl 分支大概率兼容，需实测）；若不行则双画布同步（监听 maplibre move → L7 setCenter/setZoom，双向）。高德街道栅格瓦片 URL（GCJ-02 可选方案）：`https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}`
5. **验证后**：重跑数据更新流程发布线上版，README 的 Roadmap 勾掉对应项，git 提交推送

## 五、踩坑实录（技术决策依据，勿重复试错）

1. **L7 版本 API 三连坑**（node_modules 里实际是 2.x 系）：热力色带键是 `style.rampColors={colors,positions}`（不是 colorsRamp）；弹窗方法是 `setHTML`（大写）；`unnest(skills) a` 的别名是列不是表（比较直接写 `a < b`，没有 a.skill）——第三个在 PostGIS SQL 里踩了三次
2. **L7 栅格瓦片不可用**：`'raster'` parser 是单幅全幅影像；`'rasterTile'`+TileLayer 瓦片请求正常发出（40个）但**画面不渲染**且连带热力层消失——内置引擎底层缺陷，勿再尝试，底图直接上 MapLibre
3. **热力层会拦截省面点击**：非交互图层加 `style({ pickingEnabled: false })`
4. **Express 4 async 路由**必须包 wrap（catch→next）否则抛错杀进程；错误中间件接不住 async
5. ** percentile_cont/unnest** 的统计都在 PostGIS 库内做（前端无感），这是面试卖点
6. 直辖市清洗（区名归并）和省名误作城市清洗都在 `etl/pipeline.py`（MUNICIPALITIES 常量附近）
7. 隐私：requirements/notes 里的手机号入库前自动脱敏（PHONE_RE），source_url 里形似手机号的数字是站点岗位 ID，保留
8. git 历史已全量扫描无密钥泄漏，`.env` 永不入库

## 六、安全红线（用户明确交代过）

- `.env`（含 DB 密码、高德 Key）永不上传；新密钥只进 `.env`
- 数据只采集公开招聘信息、保留 source_url 溯源、个人信息脱敏、README 有免责声明——已有机制勿破坏
- 发布任何东西到公网前做一次密钥扫描（`git grep` 全历史）

## 七、其他待办（低优先级）

- batch4 采集（用户说需要时再爬，别自动跑）：过几天跑一轮让时间线有真多期数据
- 主题 5 Agent 入口、Docker Compose、README GIF（当前只有静态截图 docs/dashboard.png）
- 主题 4 数字地球还没开工：OSM 瓦片源是它的地基，v3 完成后正好衔接
