// L7 地图初始化：自托管 OSM 矢量瓦片底图（MapLibre 引擎）优先，不可用时退回 L7 内置引擎。
// 坐标系：底图 OSM 是 WGS-84，看板数据是 GCJ-02 —— 用瓦片底图时数据统一逆转换到 WGS-84。
import { HeatmapLayer, LineLayer, PointLayer, PolygonLayer, Popup, Scene } from '@antv/l7';
import { Map, MapLibre } from '@antv/l7-maps';
import { getJson } from './api';
import { gcj02GeoJsonToWgs84, gcj02ToWgs84 } from './gcj02';

// 分级色带：暖陶土阶梯（岗位少=深褐 → 岗位多=亮暖金），与玻璃壳同语言
// 由 App.vue 图例直接引用，保证图例与地图用同一套颜色
export const CHORO_COLORS = ['#3a2318', '#5a2f1c', '#7c3f22', '#a4552c', '#cf7a44', '#f2a65e'];

// 自托管矢量瓦片服务（planetiler 切片的 MBTiles 由 server/tile-server.mjs 发布）
const TILE_SERVER = import.meta.env.VITE_TILE_SERVER ?? 'http://localhost:3112';

// 深色 OpenMapTiles 主题（石墨中性 + Linear 语汇）。
// tiles/glyphs/maxzoom 参数化：全栈模式走瓦片服务，静态部署走烘焙瓦片（server/export-static-tiles.mjs）
function omtDarkStyle({ tiles, glyphs, maxzoom = 14 }) {
  return {
    version: 8,
    name: 'gisjobs-dark',
    // 规范要求：使用文字图层必须声明 glyphs。中文由本地字体渲染，此处仅满足校验。
    glyphs,
    sources: {
      omt: {
        type: 'vector',
        tiles,
        minzoom: 0,
        maxzoom,
        attribution: '© OpenStreetMap contributors',
      },
    },
    layers: [
      { id: 'bg', type: 'background', paint: { 'background-color': '#0a0b0d' } },
      { id: 'water', type: 'fill', source: 'omt', 'source-layer': 'water', paint: { 'fill-color': '#111a27' } },
      // ---- 土地类型：石墨基调 + 可辨识色相区分（v9 提亮一档，街区/林草可见但不抢数据层） ----
      {
        id: 'landcover', type: 'fill', source: 'omt', 'source-layer': 'landcover',
        paint: {
          'fill-color': ['match', ['get', 'class'],
            'wood', '#131c15',
            'grass', '#162016',
            'sand', '#1f1d16',
            'ice', '#161c26',
            '#131c15'],
          'fill-opacity': 0.9,
        },
      },
      {
        id: 'landuse', type: 'fill', source: 'omt', 'source-layer': 'landuse',
        paint: {
          'fill-color': ['match', ['get', 'class'],
            'residential', '#1a1d24',
            ['industrial', 'railway', 'airport'], '#1f232d',
            ['commercial', 'retail', 'school', 'hospital'], '#252a37',
            '#1a1d24'],
          'fill-opacity': 0.9,
        },
      },
      {
        id: 'park', type: 'fill', source: 'omt', 'source-layer': 'park',
        paint: { 'fill-color': '#16261a', 'fill-opacity': 0.9 },
      },
      // 机场停机坪（面）：与工业用地同档但稍亮，城市级可见机场轮廓
      {
        id: 'aeroway-apron', type: 'fill', source: 'omt', 'source-layer': 'aeroway',
        filter: ['==', ['get', 'class'], 'apron'],
        paint: { 'fill-color': '#21262f', 'fill-opacity': 0.9 },
      },
      {
        id: 'waterway', type: 'line', source: 'omt', 'source-layer': 'waterway',
        paint: { 'line-color': '#1b2530', 'line-width': ['interpolate', ['linear'], ['zoom'], 6, 0.8, 12, 2.2] },
      },
      {
        id: 'building', type: 'fill', source: 'omt', 'source-layer': 'building', minzoom: 13,
        paint: {
          'fill-color': '#252932',
          'fill-outline-color': '#31363f',
          'fill-opacity': 0.9,
        },
      },
      // ---- 道路分级（石墨灰阶）：高速最亮，向下递减 ----
      {
        id: 'road-minor', type: 'line', source: 'omt', 'source-layer': 'transportation',
        filter: ['in', ['get', 'class'], ['literal', ['secondary', 'tertiary', 'minor', 'service', 'track', 'path']]],
        paint: {
          'line-color': ['match', ['get', 'class'],
            'secondary', '#4c535d',
            'tertiary', '#3f4550',
            '#33383f'],
          'line-width': ['interpolate', ['linear'], ['zoom'], 6, 0.5, 10, 1, 14, 2],
        },
      },
      // 铁路（虚线）+ 机场跑道（实线略亮），压在主干道之下、次要道路之上
      {
        id: 'rail', type: 'line', source: 'omt', 'source-layer': 'transportation',
        filter: ['==', ['get', 'class'], 'rail'],
        paint: {
          'line-color': '#4a5262',
          'line-width': ['interpolate', ['linear'], ['zoom'], 6, 0.5, 10, 0.9, 14, 1.4],
          'line-dasharray': [3, 2],
        },
      },
      {
        id: 'aeroway-runway', type: 'line', source: 'omt', 'source-layer': 'aeroway',
        filter: ['in', ['get', 'class'], ['literal', ['runway', 'taxiway']]],
        paint: {
          'line-color': '#59626f',
          'line-width': ['interpolate', ['linear'], ['zoom'], 10, 1, 14, 3],
        },
      },
      {
        id: 'road-major', type: 'line', source: 'omt', 'source-layer': 'transportation',
        filter: ['in', ['get', 'class'], ['literal', ['motorway', 'trunk', 'primary']]],
        paint: {
          'line-color': ['match', ['get', 'class'],
            'motorway', '#98a2b3',
            'trunk', '#7b8494',
            '#5f6774'],
          'line-width': ['interpolate', ['linear'], ['zoom'], 4, 0.8, 7, 1.6, 10, 2.6, 14, 4.4],
        },
      },
      {
        id: 'boundary', type: 'line', source: 'omt', 'source-layer': 'boundary',
        paint: { 'line-color': '#2a2d33', 'line-width': 0.9, 'line-dasharray': [2, 2] },
      },
      // ---- 地名标注（分层：放大到不同级别自动浮现；中文由 MapLibre 本地字体渲染） ----
      // 山峰标注：从 z7 起以低对比小字浮现（比城市名低优先级，冲突时让位）
      {
        id: 'label-peak', type: 'symbol', source: 'omt', 'source-layer': 'mountain_peak',
        minzoom: 7,
        layout: {
          'text-field': ['coalesce', ['get', 'name:zh'], ['get', 'name']],
          'text-font': ['Noto Sans Regular'],
          'text-size': 10,
        },
        paint: { 'text-color': '#79808d', 'text-halo-color': '#050607', 'text-halo-width': 1 },
      },
      // 机场名（小字，与跑道配合）
      {
        id: 'label-airport', type: 'symbol', source: 'omt', 'source-layer': 'aerodrome_label',
        minzoom: 8,
        layout: {
          'text-field': ['coalesce', ['get', 'name:zh'], ['get', 'name']],
          'text-font': ['Noto Sans Regular'],
          'text-size': 11,
        },
        paint: { 'text-color': '#8f97a5', 'text-halo-color': '#050607', 'text-halo-width': 1.2 },
      },
      {
        id: 'label-province', type: 'symbol', source: 'omt', 'source-layer': 'place',
        filter: ['in', ['get', 'class'], ['literal', ['state', 'province']]],
        minzoom: 3,
        layout: {
          'text-field': ['coalesce', ['get', 'name:zh'], ['get', 'name']],
          'text-font': ['Noto Sans Regular'],
          'text-size': ['interpolate', ['linear'], ['zoom'], 3, 12, 8, 16],
          'text-letter-spacing': 0.15,
        },
        paint: { 'text-color': '#c8cdd6', 'text-halo-color': '#050607', 'text-halo-width': 1.8 },
      },
      {
        id: 'label-city-major', type: 'symbol', source: 'omt', 'source-layer': 'place',
        filter: ['all', ['==', ['get', 'class'], 'city'], ['<=', ['get', 'rank'], 8]],
        minzoom: 5,
        layout: {
          'text-field': ['coalesce', ['get', 'name:zh'], ['get', 'name']],
          'text-font': ['Noto Sans Regular'],
          'text-size': ['interpolate', ['linear'], ['zoom'], 5, 12, 10, 18],
        },
        paint: { 'text-color': '#e9ecf1', 'text-halo-color': '#050607', 'text-halo-width': 2 },
      },
      {
        id: 'label-city-town', type: 'symbol', source: 'omt', 'source-layer': 'place',
        filter: ['in', ['get', 'class'], ['literal', ['city', 'town']]],
        minzoom: 8,
        layout: {
          'text-field': ['coalesce', ['get', 'name:zh'], ['get', 'name']],
          'text-font': ['Noto Sans Regular'],
          'text-size': ['interpolate', ['linear'], ['zoom'], 8, 12, 12, 16],
        },
        paint: { 'text-color': '#c8cdd6', 'text-halo-color': '#050607', 'text-halo-width': 1.6 },
      },
      // 道路名（沿路排布，z10 起浮现）：补齐"完整地图"观感的关键一层
      {
        id: 'label-road', type: 'symbol', source: 'omt', 'source-layer': 'transportation_name',
        minzoom: 10,
        filter: ['in', ['get', 'class'], ['literal', ['motorway', 'trunk', 'primary', 'secondary', 'tertiary']]],
        layout: {
          'text-field': ['coalesce', ['get', 'name:zh'], ['get', 'name']],
          'text-font': ['Noto Sans Regular'],
          'text-size': ['interpolate', ['linear'], ['zoom'], 10, 9, 14, 12],
          'symbol-placement': 'line',
          'text-rotation-alignment': 'map',
        },
        paint: { 'text-color': '#7c8595', 'text-halo-color': '#0a0b0d', 'text-halo-width': 1.2 },
      },
      {
        id: 'label-district', type: 'symbol', source: 'omt', 'source-layer': 'place',
        filter: ['in', ['get', 'class'], ['literal', ['village', 'suburb', 'neighbourhood']]],
        minzoom: 11,
        layout: {
          'text-field': ['coalesce', ['get', 'name:zh'], ['get', 'name']],
          'text-font': ['Noto Sans Regular'],
          'text-size': 12,
        },
        paint: { 'text-color': '#9aa1ab', 'text-halo-color': '#050607', 'text-halo-width': 1.4 },
      },
    ],
  };
}

// 中国域遮罩（世界矩形挖去全部省界环）：域外压暗、中国域透出底图。
// 洞强制顺时针（RFC 7946），DataV 省界环方向不统一，不修正会被当成外环把全图盖死。
function ringSignedArea(ring) {
  let a = 0;
  for (let i = 0; i < ring.length - 1; i++) {
    a += ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1];
  }
  return a / 2;
}

function buildChinaMaskSource(boundsWgs) {
  const WORLD = [[-180, -85], [180, -85], [180, 85], [-180, 85], [-180, -85]];
  const holes = [];
  for (const f of boundsWgs.features) {
    const g = f.geometry;
    const polys = g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [];
    for (const poly of polys) {
      for (const ring of poly) {
        const r = ring.map((c) => c.slice());
        if (ringSignedArea(r) > 0) r.reverse();
        holes.push(r);
      }
    }
  }
  return {
    type: 'FeatureCollection',
    features: [{ type: 'Feature', properties: {}, geometry: { type: 'Polygon', coordinates: [WORLD, ...holes] } }],
  };
}

async function tileServerAvailable() {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 1500);
    const res = await fetch(`${TILE_SERVER}/health`, { signal: ctrl.signal });
    clearTimeout(timer);
    return res.ok;
  } catch {
    return false;
  }
}

// 静态部署兜底：构建期把 MBTiles 里 z≤6 的中国区域瓦片烘焙成静态 pbf（server/export-static-tiles.mjs），
// GitHub Pages 上也能有真底图；更高缩放由 MapLibre overzoom 放大渲染
async function staticTileUrls() {
  try {
    const res = await fetch(import.meta.env.BASE_URL + 'static-tiles/tiles.json');
    if (!res.ok) return null;
    // ⚠️ MapLibre 的 tiles 数组是「URL 模板池」：对每个瓦片它按 urls[(x+y) % urls.length]
    // 挑一个模板再替换 {z}/{x}/{y}。若传入具体文件清单（无占位符），每个瓦片会被错配到
    // 清单里任意一个文件——底图整体错乱。因此这里必须返回「单个模板」。
    // 拼字符串而非 new URL()：后者会把 { } 编码成 %7B%7D，破坏占位符。
    const base = new URL(import.meta.env.BASE_URL, window.location.href).href;
    return [`${base}static-tiles/{z}/{x}/{y}.pbf`];
  } catch {
    return null;
  }
}

export async function initMap(layers) {
  // 底图三级降级：瓦片服务（全栈）→ 烘焙静态瓦片（GitHub Pages）→ L7 内置引擎（无底图）
  const live = await tileServerAvailable();
  const staticUrls = live ? null : await staticTileUrls();
  const useTiles = live || !!staticUrls;
  const mapEngine = useTiles
    ? new MapLibre({
      center: [112.5, 33.5],
      zoom: 4.2,
      style: omtDarkStyle({
        tiles: live ? [`${TILE_SERVER}/tiles/{z}/{x}/{y}.pbf`] : staticUrls,
        glyphs: live
          ? `${TILE_SERVER}/fonts/{fontstack}/{range}.pbf`
          : './static-tiles/fonts/{fontstack}/{range}.pbf', // 静态部署无字形服务；中文走本地字体渲染
        maxzoom: live ? 14 : 9,
      }),
      // 中文地名用浏览器本地字体现场生成 SDF，无需字形服务器（MapLibre 专为 CJK 设计的能力）
      localIdeographFontFamily: "'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', sans-serif",
    })
    : new Map({ center: [112.5, 33.5], zoom: 4.2, style: { background: '#0b1026' } });
  const scene = new Scene({ id: 'map', map: mapEngine, logoVisible: false });

  // ---- 自定义比例尺：不依赖底层引擎控件，MapLibre / L7 内置两种引擎都能用 ----
  try {
    const mapEl = document.getElementById('map');
    const scaleEl = document.createElement('div');
    scaleEl.style.cssText = 'position:absolute;right:12px;bottom:12px;z-index:10;display:flex;flex-direction:column;align-items:flex-end;gap:3px;font-size:11px;color:#cfae9c;pointer-events:none;';
    const scaleLabel = document.createElement('div');
    const scaleLine = document.createElement('div');
    scaleLine.style.cssText = 'height:6px;border-bottom:2px solid #f0d9c8;border-left:2px solid #f0d9c8;border-right:2px solid #f0d9c8;';
    scaleEl.appendChild(scaleLabel);
    scaleEl.appendChild(scaleLine);
    mapEl.appendChild(scaleEl);
    const mapSvc = scene.map;
    const updateScale = () => {
      try {
        const z = mapSvc.getZoom();
        const c = mapSvc.getCenter() || {};
        const lat = c.lat ?? 33.5;
        const mpp = 156543.03392 * Math.cos((lat * Math.PI) / 180) / (2 ** z);
        const targets = [50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000, 2000000];
        let best = targets[0];
        for (const t of targets) {
          if (t / mpp <= 120) best = t; else break;
        }
        scaleLine.style.width = `${Math.round(best / mpp)}px`;
        scaleLabel.textContent = best >= 1000 ? `${best / 1000} km` : `${best} m`;
      } catch { /* 拿不到地图状态时保持上一次显示 */ }
    };
    if (mapSvc?.on) {
      mapSvc.on('zoom', updateScale);
      mapSvc.on('move', updateScale);
    }
    updateScale();
  } catch { /* 比例尺失败不影响地图主流程 */ }

  // 底图坐标系为 WGS-84 时，所有 GCJ-02 数据统一逆转换后再上图
  const toDisplayCoords = (geojson) => (useTiles ? gcj02GeoJsonToWgs84(geojson) : geojson);
  const toDisplayPoint = ([lng, lat]) => (useTiles ? gcj02ToWgs84(lng, lat) : [lng, lat]);

  // ---- 分级统计图：省面着色（岗位越多越亮/越深色带） ----
  const [bounds, region] = await Promise.all([    fetch(import.meta.env.BASE_URL + 'china-provinces.json').then((r) => r.json()),
    getJson('/api/region-heat?level=province'),
  ]);
  const countByProvince = region.counts;
  const maxCount = Math.max(...Object.values(countByProvince), 1);

  // ---- 中国域遮罩：L7 层渲染在 MapLibre 画布之上、分级图之下（zIndex 0.5） ----
  if (useTiles) {
    const maskLayer = new PolygonLayer({ zIndex: 0.5 })
      .source(buildChinaMaskSource(gcj02GeoJsonToWgs84(bounds)))
      .shape('fill')
      .color('#030304')
      .style({ opacity: 1, pickingEnabled: false });
    scene.addLayer(maskLayer);
  }

  const choropleth = new PolygonLayer({ zIndex: 1 })
    .source(toDisplayCoords(bounds)) // 用 OSM 底图时省界同步转 WGS-84
    .shape('fill')
    .color('name', (name) => {
      const c = countByProvince[name] || 0;
      return CHORO_COLORS[Math.min(Math.floor((c / maxCount) * CHORO_COLORS.length), CHORO_COLORS.length - 1)];
    })
    .style({ opacity: 0.5 })
    .active({ color: 'rgba(255,255,255,0.25)' });
  scene.addLayer(choropleth);
  layers.find((l) => l.id === 'choropleth').layer = choropleth;

  // 分级图随缩放淡出：全国视角（z≤6）是全强度分级语义；进入城市级（z≥9）后
  // 整屏同色的省级蒙层既无信息量又会盖住底图细节（街区/水系/路网），故线性淡出到 0。
  // 仅当透明度实际变化时才更新样式（zoom 事件高频触发，避免无谓的 L7 样式重建）。
  const CHORO_FULL = 0.5;
  let lastChoroOp = null;
  const applyChoroFade = (zoom) => {
    const op = zoom <= 6 ? CHORO_FULL : zoom >= 9 ? 0 : (CHORO_FULL * (9 - zoom)) / 3;
    if (lastChoroOp !== null && Math.abs(op - lastChoroOp) < 0.08) return;
    lastChoroOp = op;
    try {
      choropleth.style({ opacity: op });
    } catch { /* 忽略：保底静态透明度 */ }
  };
  try {
    // scene.map 是 L7 的 IMapService（BaseMapService 子类），on/getZoom 转发至底层引擎
    const mapService = scene.map;
    if (mapService?.on && mapService?.getZoom) {
      mapService.on('zoom', () => applyChoroFade(mapService.getZoom()));
      applyChoroFade(mapService.getZoom());
    }
  } catch { /* 拿不到地图服务时保留静态透明度 */ }

  // ---- 省级下钻：点击省面弹出该省明细 ----
  const provinceStats = await getJson('/api/stats/province-stats');
  const topEntries = (obj, n) => Object.entries(obj || {})
    .sort((a, b) => b[1] - a[1]).slice(0, n);
  choropleth.on('click', (e) => {
    const name = e.feature?.properties?.name;
    const s = provinceStats[name];
    if (!s) return;
    const cities = topEntries(s.cities, 5)
      .map(([c, n]) => `${c} ${n}`).join('、');
    const skills = topEntries(s.skills, 5)
      .map(([k]) => k).join(' / ');
    const salary = s.avg_daily ? `平均日薪 ¥${s.avg_daily}` : '薪资样本不足';
    new Popup({ anchors: 'bottom' })
      .setLnglat(e.lngLat)
      .setHTML(`<div style="font-size:13px;line-height:1.8;color:#fff6ef;max-width:260px">
        <b>${name}</b> · ${s.total} 条岗位 · ${salary}<br/>
        城市：${cities || '—'}<br/>
        热门技能：${skills || '—'}
      </div>`)
      .addTo(scene);
  });

  // ---- 流向连线：各城市 → 省内/就近集聚地（示意） ----
  const flows = toDisplayCoords(await getJson('/api/flows'));
  const arc = new LineLayer({ zIndex: 2, blend: 'additive' })
    .source(flows)
    .shape('arc')
    .size(1.2)
    .color('count', ['#7c3f22', '#e8905a', '#f2a65e'])
    .style({ opacity: 0.55, pickingEnabled: false });
  scene.addLayer(arc);
  layers.find((l) => l.id === 'flows').layer = arc;

  // 按面板初始状态同步图层显隐（默认关的图层不显示）
  for (const opt of layers) {
    if (opt.layer && !opt.on) opt.layer.hide();
  }

  // ---- 数据源：岗位点（GCJ-02，切底图时逆转换为 WGS-84） ----
  const geojson = toDisplayCoords(await getJson('/api/jobs'));

  // ---- 点位热力（样式键为此版本 L7 的 rampColors: { colors, positions }） ----
  const heatmap = new HeatmapLayer({ zIndex: 2 })
    .source(geojson)
    .shape('heatmap')
    .size(30)
    .style({
      intensity: 1.4,
      radius: 20,
      opacity: 1.0,
      pickingEnabled: false, // 不参与拾取，避免热力晕挡住省面点击
      rampColors: {
        colors: ['rgba(240,163,94,0.0)', 'rgba(240,163,94,0.5)', 'rgba(247,189,133,0.8)', 'rgba(255,222,178,1.0)'],
        positions: [0, 0.4, 0.7, 1.0],
      },
    });
  scene.addLayer(heatmap);
  layers.find((l) => l.id === 'heatmap').layer = heatmap;

  // ---- 岗位点（默认关闭，可点击看详情） ----
  const points = new PointLayer({ zIndex: 3 })
    .source(geojson)
    .shape('circle')
    .size(4)
    .color('#f7f8f8')
    .style({ stroke: '#fff', strokeWidth: 0.6, opacity: 0.9 });
  scene.addLayer(points);
  layers.find((l) => l.id === 'points').layer = points;

  points.on('click', (e) => {
    const p = e.feature?.properties || {};
    new Popup({ anchors: 'bottom' })
      .setLnglat(e.lngLat)
      .setHTML(`<div style="font-size:13px;line-height:1.7;color:#fff6ef;max-width:260px">
        <b>${p.title}</b> — ${p.company}<br/>
        ${p.city} · ${p.salary_raw || '薪资面议'}<br/>
        ${(p.skills || []).join(' / ') || '无技能标签'}
      </div>`)
      .addTo(scene);
  });

  // ---- 时间线：按采集日期重放岗位"生长"过程（叠加岗位类型筛选） ----
  const tl = await getJson('/api/stats/timeline');
  const dates = tl.map((t) => t.date);
  const lastDate = dates[dates.length - 1];
  let jobType = 'all'; // 玻璃筛选胶囊：all / campus / social / intern
  let lastIdx = dates.length - 1;
  const visible = (f, idx) =>
    (jobType === 'all' || f.properties.job_type === jobType) &&
    (f.properties.collected_date || lastDate) <= dates[idx];
  const apply = (idx) => {
    lastIdx = idx;
    const sub = { ...geojson, features: geojson.features.filter((f) => visible(f, idx)) };
    heatmap.setData(sub);
    points.setData(sub);
    return sub.features.length;
  };
  apply(dates.length - 1); // 初始显示全量

  // 每日新增：按采集日期统计（缺失日期归末日的口径与 apply 一致）
  const perDate = dates.map((d) => geojson.features.filter(
    (f) => (f.properties.collected_date || lastDate) === d).length);
  // 当日新增（当前岗位类型下）：供筛选后顶栏"当日新增"同步
  const delta = (idx) => geojson.features.filter(
    (f) => (jobType === 'all' || f.properties.job_type === jobType) &&
      (f.properties.collected_date || lastDate) === dates[idx]).length;
  // 岗位类型筛选：重算地图 + 返回该子集的顶栏指标（数字滚动复用，不整页刷新）
  const setJobType = (t) => {
    jobType = t;
    apply(lastIdx);
    const sub = geojson.features.filter((f) => jobType === 'all' || f.properties.job_type === jobType);
    const cities = new Set(sub.map((f) => f.properties.city)).size;
    const provinces = new Set(sub.map((f) => f.properties.province)).size;
    const salaries = sub.map((f) => f.properties.salary_daily).filter((v) => typeof v === 'number');
    const salary = salaries.length ? Math.round(salaries.reduce((a, b) => a + b, 0) / salaries.length) : 0;
    return { total: sub.length, cities, provinces, salary };
  };

  // 城市质心（命令面板"飞到城市"用；坐标已是底图用的 WGS-84）
  const cityCentroid = {};
  for (const f of geojson.features) {
    const c = f.properties.city;
    const [lng, lat] = f.geometry.coordinates;
    if (!cityCentroid[c]) cityCentroid[c] = { lng: 0, lat: 0, n: 0 };
    cityCentroid[c].lng += lng; cityCentroid[c].lat += lat; cityCentroid[c].n += 1;
  }
  for (const c of Object.keys(cityCentroid)) {
    const o = cityCentroid[c];
    o.lng /= o.n; o.lat /= o.n;
  }
  const flyToCity = (city) => {
    const o = cityCentroid[city];
    if (!o) return false;
    try {
      const m = scene.map;
      if (m?.map?.flyTo) { m.map.flyTo({ center: [o.lng, o.lat], zoom: 7, essential: true }); return true; }
      if (m?.flyTo) { m.flyTo({ center: [o.lng, o.lat], zoom: 7 }); return true; }
      if (m?.setCenter) m.setCenter([o.lng, o.lat]);
      if (m?.setZoom) m.setZoom(7);
      return true;
    } catch { return false; }
  };
  const resetView = () => {
    try {
      const m = scene.map;
      if (m?.setCenter) m.setCenter([112.5, 33.5]);
      if (m?.setZoom) m.setZoom(4.2);
    } catch { /* 忽略 */ }
  };

  scene.on('loaded', () => console.log('L7 scene loaded'));
  return { scene, timeline: { dates, apply, total: geojson.features.length, perDate, delta, setJobType, flyToCity, resetView } };
}
