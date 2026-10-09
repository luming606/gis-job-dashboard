# GIS 人才求职市场大屏 —— 项目交接文档（给接手的 Agent）

> 更新：2026-10-07 ｜ 本文档目标：任何 Agent 读完即可无缝接手
> 用户：GIS 专业学生 Luming（GitHub: luming606），求职方向 WebGIS

## 〇、本次会话（v1 → v4）做了什么

一条主线：把"地信人才求职市场可视化大屏"从零做成可写进简历、已上线公网的作品。

| 阶段 | 内容 | 状态 |
|---|---|---|
| W1 数据层 | 采集规范 + 定向爬虫（测绘英才网）+ AI 辅助采集校招岗；Python ETL（去重/薪资结构化/高德地理编码/GCJ02→WGS84/手机号脱敏）；246 条入库 PostGIS | ✅ |
| W2 服务+大屏 | Express API（9 端点，percentile_cont 箱线、unnest 技能共现）；Vue3+L7(WebGL)+ECharts 大屏：分级统计图/点位热力/流向飞线/聚合点/省份下钻/时间线动画/技能共现网络 | ✅ |
| W2.5 上线 | 静态化导出 + 前端双模式（全栈/纯静态）+ GitHub Pages 发布 | ✅ |
| W3 数据+打磨 | 二轮采集（286 条/29 省）；真箱线图、省份下钻、图例、打包分包 | ✅ |
| v3 底图 | 全国 OSM → planetiler 切片（442 万瓦片）→ 自研瓦片服务（node:sqlite）→ MapLibre 引擎底图 + GCJ-02→WGS-84 对齐 + 分级中文地名标注 | ✅ |
| **v5 设计语言** | **Linear DESIGN.md（VoltAgent awesome-design-md）重构：近黑画布/四级表面阶梯/发丝线/单一薰衣草强调色/Inter 字体栈；地图改石墨中性底图+薰衣草数据色；ECharts 单色化** | ✅ |
| **v6 交互升级** | **城市榜改棒棒糖图（末端数值标签）；技能榜改极坐标圆形图；共现网络改自研 canvas 3D 技能球（拖拽惯性旋转/悬停看共现，替换坏掉的 echarts-gl graphGL）；箱线图工具提示** | ✅ |
| **v7/v8 静态底图修复** | **烘焙瓦片解压（gzip→裸 MVT）+ 绝对 URL + tiles 模板池修复——GitHub Pages 拥有对齐的真底图**；极坐标轴纠正（技能绕圆周） | ✅ |
| **v9 地图细节** | **土地/建筑色块提亮一档（房区/街区可见）、补铁路/机场/山峰/道路名/机场名图层、分级图随缩放淡出（城市级不再有省级蒙层）、线上烘焙 z6→z9（5939 块/137MB）** | ✅ 本次会话完成 |

**关键成果数字**：442 万矢量瓦片 / 1.2 亿要素 / 4.3GB MBTiles / 切片刻时 7 分 47 秒 /
286 条岗位 / 29 省 / 线上地址 https://luming606.github.io/gis-job-dashboard/

## 一、用户是谁、要什么

- GIS 学生，正在做求职作品集。已定两个简历项目（清单见 `E:\coding\zcode\webgis-repos-collection.md`）：
  1. **本项目**：地信人才求职市场可视化大屏（v1-v3 已完成并上线）
  2. 主题 4：three.js 自制迷你数字地球（**未开工**，用户愿从基础学起、需要带教；v3 的 OSM 瓦片源正是它的地基）
  3. 主题 5：GIS Agent 入口（备选，做完可投 AI 应用类实习）
- **用户偏好（重要）**：
  - 所有工具装 E 盘（C 盘紧张）
  - **不要响铃/蜂鸣提醒**（会吵到他人）——需要用户操作时对话里文字说明即可
  - 不要自动化定时任务（需要采集时手动跑）
  - 中文交流；说话直接、给推荐而非罗列选项；关键节点主动汇报
  - 用户会用"继续"来推进任务，期望 agent 自主完成一大段工作再汇报

## 二、项目现状（已完成、已上线）

- **仓库**：https://github.com/luming606/gis-job-dashboard （main 分支，gh CLI 已授权在 `E:\tools\gh\bin\gh.exe`）
- **在线演示**：https://luming606.github.io/gis-job-dashboard/ （gh-pages 分支；纯静态，自动回退内置引擎无底图）
- **本地全栈版**：双击 `start_dashboard.bat`（需先起瓦片服务，见下）
- **三个服务端口**：API `3111`（server/index.js）、瓦片 `3112`（server/tile-server.mjs）、前端 `5173`（vite dev）
- **数据**：286 条真实岗位 / 29 省 / 平均日薪 ¥317，存于 PostGIS `gisjobs` 库 + `data/staged_jobs.json`
- **本地启动瓦片服务**：`cd server && node tile-server.mjs`（依赖 `tiles/china.mbtiles`，4.3GB）

## 三、关键环境事实（接手必读）

1. **数据库**：`E:\PostgreSQL` 是完整 PG16.13 + PostGIS 3.6.2 套装（Windows 服务 `postgresql-x64-16` 自动运行）。
   密码在项目根 `.env` 的 DATABASE_URL 里（已 gitignore，勿外泄）
2. **高德 Key**：`.env` 的 AMAP_KEY（Web 服务类型，只用于 REST 地理编码）
3. **网络**：境外源直连不通，需用户代理 mihomo（**系统代理 127.0.0.1:9674，用户会随手关掉，用前必探测**：
   `curl -s -m 8 -x http://127.0.0.1:9674 -o NUL -w "%{http_code}" https://www.google.com`）。
   大文件下载模板：`curl.exe -sL -C - -x http://127.0.0.1:9674 -o <file> <url>`；
   **单连接慢时可 8 分片并行**（Start-Process 起多个 curl 带 `-r start-end`，最后 copy /b 合并，实测 297KB/s → 并行后 60 秒下完 888MB）
4. **gh CLI**：`E:\tools\gh\bin\gh.exe`（已登录 luming606；GitHub API 查询/下载用它最稳）
5. **切片工具链**：`E:\tools\planetiler\`（jdk-21.0.12.1+1 便携版 + planetiler.jar 89MB）。
   切片命令见 v3 复现章节。切片需要三个辅助数据源（已下载在 `tiles/data/sources/`：water-polygons 888MB、
   natural_earth 414MB、lake_centerline 77MB），**缺任何一个 planetiler 会要求 --download（需代理）**
6. **npm**：走 npmmirror（`--registry=https://registry.npmmirror.com`）；esbuild 装后需 `npm install-scripts approve esbuild`
7. **浏览器自动化**：本机没装 bsk（browser-skill CLI），已装 **playwright-core**（`web/node_modules`），
   截图脚本：`cd web && node screenshot.mjs <url> <outfile> <waitMs>`（用系统 Chrome headless）；`screenshot-zoom.mjs` 会额外放大到武汉截城市级图
8. **Windows 坑**：写配置文件须 UTF-8 无 BOM（PS 的 `Set-Content -Encoding UTF8` 带 BOM，会毁 pg_hba.conf）；
   cmd 会吞管道符；Vite 偶发 EBUSY 崩溃（编辑工具原子写 vs 文件监视器），重启即可

## 四、v3 自托管瓦片链路（已打通，含复现步骤）

```
E:\coding\zcode\projects\gis-job-dashboard\tiles\osm\china-latest.osm.pbf (1.5GB)
  → planetiler 切片 → tiles\china.mbtiles (4.3GB, 442 万瓦片, zoom 0-14)
  → server/tile-server.mjs (端口 3112: /tiles/{z}/{x}/{y}.pbf + tilejson + /fonts 空字形端点)
  → web/src/map.js 自动探测（/health 1.5s 超时）：可用 → MapLibre 引擎 + 深色 OMT 主题；否则内置引擎
```

**复现切片**：
```powershell
& 'E:\tools\planetiler\jdk\jdk-21.0.12.1+1\bin\java.exe' -Xmx4g `
  "-Djava.io.tmpdir=<tiles>\tmp" -jar 'E:\tools\planetiler\planetiler.jar' `
  "--osm-path=<tiles>\osm\china-latest.osm.pbf" --area=china "--output=<tiles>\china.mbtiles"
```
（工作目录设为 tiles/，planetiler 会在其下建 data/ 读写临时文件；三个辅助源已在 data/sources/）

**坐标系**：OSM 是 WGS-84，看板数据是 GCJ-02 → `web/src/gcj02.js`（迭代法逆转换）在挂瓦片底图时
把省界/点位/流向统一转了 WGS-84，保证严丝合缝（放大到武汉可见热力点正落在长江边）。

**地名标注**（本次最后完成）：style 里四个 symbol 图层按 minzoom 分层（省 z3 / 主城 z5 / 地市 z8 / 区县 z11）。
中文渲染用 MapLibre `localIdeographFontFamily`（浏览器本地字体现场生成 SDF，零字体文件）；
但**规范要求 style.glyphs 字段必须存在**，遂由 tile-server 提供 `/fonts/{fontstack}/{range}.pbf` 返回
手工构造的"合法空 fontstack PBF"过校验（CJK 不会真的请求它）。`style.css` 里隐藏了 `.l7-logo`，
Scene 构造也传了 `logoVisible: false`。

## 五、踩坑实录（勿重复试错）

1. **L7 版本坑三连**：热力色带键是 `style.rampColors={colors,positions}`（不是 colorsRamp）；
   弹窗方法 `setHTML`（大写）；`unnest(skills) a` 的别名是**列**不是表（写 `a < b`，没有 a.skill）
2. **L7 内置引擎栅格/矢量瓦片均不可靠**：`'raster'` parser 是单幅全幅影像；`rasterTile`+TileLayer 请求正常但
   不渲染还连累热力层——**底图别走 L7，已定案用 MapLibre**（`@antv/l7-maps` 自带 `MapLibre` 包装类，实测可用）
3. **非交互图层要 `pickingEnabled:false`**：热力层会拦截省面点击
4. **Express 4 async 路由**必须包 wrap（catch→next），否则查询报错直接杀进程
5. **planetiler**：无 Windows 二进制（tilemaker 也没有）；必须 JDK 17+；缺辅助数据源会拒绝启动；
   `-Dhttps.proxyHost` 对它的下载器**无效**（要用 curl 预下载）
6. **MapLibre**：text-field 必须有 style.glyphs 字段否则整个 style 加载失败（底图全没）；CJK 用本地字体
   `localIdeographFontFamily` 可免字体服务器；省名 class 是 `state`（中国省级 admin_level=4）不是 province
6b. **样式表达式红线**：一个 paint 属性只允许**一个** zoom 插值表达式——道路分级宽度不能在 match 分支里各写
   interpolate（报 "Only one zoom-based interpolate"），拆成两个图层（road-major/road-minor）各自一条曲线；
   配色不受限（match 纯常量输出可以）
6c. **中国域遮罩**：用 L7 PolygonLayer 实现（zIndex 0.5，渲染在 MapLibre 画布之上、分级图之下），**不要**往
   MapLibre style 里加第二个 geojson source——实测加了会让整个 omt 矢量瓦片源不渲染（原因未查明，绕坑即可）。
   遮罩洞必须强制顺时针（RFC 7946；DataV 省界环方向不统一，不修正会把全图盖死），代码在 map.js 的 buildChinaMaskSource
6d. **静态底图烘焙三坑**（`server/export-static-tiles.mjs`）：① planetiler 在 MBTiles 存的是 **gzip 压缩 MVT**，
   静态托管无法发 `Content-Encoding: gzip` 头，烘焙时必须 gunzip 成裸 pbf，否则 MapLibre 解析报 `Error`；
   ② 瓦片 URL 必须是**绝对路径**（`new URL(t, location.href)`），相对路径触发 `Request` 构造 TypeError；
   ③ MBTiles 的 tile_row 是 TMS 行号，算纬度必须先转 XYZ 行号
6e. **图表库三坑**：① echarts-gl 的 graphGL 力导向把主线程卡死（本机实测），3D 网络图改用自研 canvas（web/src/skillSphere.js）；
   ② echarts-wordcloud 注册在 'echarts/lib/echarts' 子路径，Vite 分包产生双实例静默失效（别名修复又会破坏 echarts 内部循环依赖），已弃用；
   ③ ECharts 极坐标：**angleAxis 放类目**（技能绕圆周）才可读，radiusAxis 放类目会变成同心环且标签重叠
6f. **无头截图竞态**：initMap 全链路在本机要 25-40 秒（瓦片+转换+图表），截图等待 <30 秒会拍到空白图表；
   用 `web/screenshot-debug.mjs <url> <out> <waitMs>`（带 stage 与错误输出）。Vite dev 偶发 EBUSY 崩溃，重启即可
6g. **静态瓦片 URL 必须是「单个模板」而非文件清单**（2026-10-07 线上事故根因，用户报「OSM 叠加完全不对」）：
   MapLibre 的 tiles 数组是模板池，对每个瓦片按 `urls[(x+y) % urls.length]` 挑一个模板再替换 {z}/{x}/{y}。
   传入 149 个具体文件 URL（无占位符）时，每个瓦片位置会错拿清单里另一个瓦片的内容 → 底图整体错位乱拼。
   正确写法：返回单元素数组 ``[`${base}static-tiles/{z}/{x}/{y}.pbf`]``；且必须用字符串拼接，
   不能用 new URL()（会把 { } 编码成 %7B%7D 破坏占位符）。tiles.json 仅作「烘焙是否就绪」探测，不再用作 URL 来源。
6h. **GitHub camo CDN 缓存**：README 图片替换同名文件后线上仍显示旧图，换文件名（如 dashboard-national.png →
   screenshot-national.png）破缓存才生效。社交预览图无 API，只能网页手动传（Settings → Social preview）
6i. **分级图（choropleth）在城市级是负资产**（v9 修复）：省级整屏同色蒙层在放大进省内部后既无信息量、
   又把底图细节（街区/水系/路网）洗白。解法 = 随缩放淡出（map.js 的 applyChoroFade：z≤6 全强度 0.5，
   z6→9 线性淡出，z≥9 为 0），用 `scene.map.on('zoom')` + `scene.map.getZoom()`（L7 的 IMapService 转发）+
   `choropleth.style({opacity})` 动态更新；加 0.08 变化阈值避免高频重建。
6j. **L7 固有的 console 噪音**：静态模式下会出现若干 `console.error('Error', Promise)`（L7 内部吞掉的
   rejected promise），经 v8/v9 对照实验确认为 L7 既有行为、非项目回归；页面 `window.__errs` 为 0、
   渲染正常，**不需要追查**（曾误判为 zoom-fade 引起，浪费一轮排查）。
6k. **静态瓦片烘焙深度**（2026-10-07 由 z6 提升到 z9）：解码 MPV 实测——z6 瓦片已含 residential/suburb/quarter
   土地利用与公园；z8 起有铁路与耕地/林地；z9 起有工业/商业/大学等丰富类别；z13+ 才有建筑轮廓，z10+ 才有机场跑道。
   z9 烘焙产物 5939 块 / 137MB：*.pbf 被 .gitignore 排除故不进 main（main 只追踪 tiles.json），
   全部体积只存在于 gh-pages 分支与本地磁盘。**注意 gh-pages 分支历史会随每次部署累积**，必要时可压缩其历史。
7. **git 误提交大文件**：曾把 1.5GB pbf 加进索引（.gitignore 漏了 tiles/），修复 = `git rm -r --cached tiles/`
   + amend + `git reflog expire --expire=now --all` + `git gc --prune=now`（仓库 1.49GB → 738KB）。
   **tiles/、*.pbf、*.mbtiles 现已在 .gitignore**
8. **DSH 沙箱 ACL**：工作区曾因缺 WRITE_OWNER 导致所有 pwsh 失败，用 `diagnose-windows-sandbox-acl` 技能
   脚本修好（报告与回滚脚本在 `E:\dsh-acl-recovery\`）。会话后来切到 danger-full-access
9. 隐私：requirements/notes 手机号入库前自动脱敏；source_url 里形似手机号的数字是站点岗位 ID（保留）
10. `.env` 永不上传；全历史已扫描无密钥泄漏

## 六、安全红线（用户明确交代）

- `.env`（DB 密码、高德 Key）永不入库；新密钥只进 `.env`
- 数据只采公开招聘信息、保留 source_url 溯源、个人信息脱敏、README 免责声明——勿破坏
- 发布前做密钥扫描；大文件/数据目录勿进仓库

## 七、交接：待办与建议

**数据更新流程（维护手册）**：
爬虫 → `cd etl && AMAP_KEY=<见.env> python pipeline.py` → `DATABASE_URL=<见.env> python load_db.py`
→ `cd server && node export-static.mjs` → `cd web && npm run build && npx gh-pages -d dist`

**待办（优先级从高到低）**：
1. **batch4 采集**：过几天（建议 10-09 后）跑一轮让时间线有真多期数据。
   在 `collector/cehuiyc_scraper.py` 的 CONFIG 里加 `batch4` 关键词组，输出到 `collector/batch4/`。
   用户说"需要时再爬"，别自动跑
2. **主题 4 数字地球**（用户的下一个简历项目）：v3 的 `china.mbtiles` + tile-server 直接复用作瓦片源；
   引导用户从 three.js 基础学起（用户明确要带教）。可参考 `E:\coding\zcode\webgis-repos-collection.md` 里的
   three-tile / tellux / 3DTilesRendererJS
3. 主题 5 Agent 入口 / Docker Compose / README GIF（当前是静态截图）
4. 可选：把瓦片服务也做 Docker 化；或做中国域外遮罩（用户明确说不要，勿加）

**新 Agent 上手建议**：先读本文件 → 再读 `docs/PLAN.md`（技术方案）与 `docs/项目意义与简历价值.md`（面试预演）→
起三个服务看效果（`server/node index.js`、`server/node tile-server.mjs`、`web/npm run dev`）→
需要截图时用 `web/screenshot.mjs`。
