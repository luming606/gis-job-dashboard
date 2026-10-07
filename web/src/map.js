// L7 地图初始化：自托管 OSM 矢量瓦片底图（MapLibre 引擎）优先，不可用时退回 L7 内置引擎。
// 坐标系：底图 OSM 是 WGS-84，看板数据是 GCJ-02 —— 用瓦片底图时数据统一逆转换到 WGS-84。
import { HeatmapLayer, LineLayer, PointLayer, PolygonLayer, Popup, Scene } from '@antv/l7';
import { Map, MapLibre } from '@antv/l7-maps';
import { getJson } from './api';
import { gcj02GeoJsonToWgs84, gcj02ToWgs84 } from './gcj02';

// 分级色带：Linear 薰衣草阶梯（岗位少=深灰蓝 → 岗位多=亮薰衣草），与石墨底图同语言
const CHORO_COLORS = ['#1d1f2b', '#2c2f4a', '#3d4173', '#565cc0', '#7b81e8', '#aab0f5'];

// 自托管矢量瓦片服务（planetiler 切片的 MBTiles 由 server/tile-server.mjs 发布）
const TILE_SERVER = import.meta.env.VITE_TILE_SERVER ?? 'http://localhost:3112';

// 深色 OpenMapTiles 主题：与看板深海蓝背景统一；不含文字图层，因此不依赖字形服务
function omtDarkStyle() {
  return {
    version: 8,
    name: 'gisjobs-dark',
    // 规范要求：使用文字图层必须声明 glyphs。中文由本地字体渲染，此处仅满足校验。
    glyphs: `${TILE_SERVER}/fonts/{fontstack}/{range}.pbf`,
    sources: {
      omt: {
        type: 'vector',
        tiles: [`${TILE_SERVER}/tiles/{z}/{x}/{y}.pbf`],
        minzoom: 0,
        maxzoom: 14,
        attribution: '© OpenStreetMap contributors',
      },
    },
    layers: [
      { id: 'bg', type: 'background', paint: { 'background-color': '#0a0b0d' } },
      { id: 'water', type: 'fill', source: 'omt', 'source-layer': 'water', paint: { 'fill-color': '#0f151c' } },
      // ---- 土地类型：石墨基调下的微弱色相区分 ----
      {
        id: 'landcover', type: 'fill', source: 'omt', 'source-layer': 'landcover',
        paint: {
          'fill-color': ['match', ['get', 'class'],
            'wood', '#111613',
            'grass', '#131812',
            'sand', '#171614',
            'ice', '#12161c',
            '#111613'],
          'fill-opacity': 0.9,
        },
      },
      {
        id: 'landuse', type: 'fill', source: 'omt', 'source-layer': 'landuse',
        paint: {
          'fill-color': ['match', ['get', 'class'],
            'residential', '#121316',
            ['industrial', 'railway', 'airport'], '#14161b',
            ['commercial', 'retail', 'school', 'hospital'], '#16181d',
            '#121316'],
          'fill-opacity': 0.9,
        },
      },
      {
        id: 'park', type: 'fill', source: 'omt', 'source-layer': 'park',
        paint: { 'fill-color': '#121a14', 'fill-opacity': 0.9 },
      },
      {
        id: 'waterway', type: 'line', source: 'omt', 'source-layer': 'waterway',
        paint: { 'line-color': '#1b2530', 'line-width': ['interpolate', ['linear'], ['zoom'], 6, 0.8, 12, 2.2] },
      },
      {
        id: 'building', type: 'fill', source: 'omt', 'source-layer': 'building', minzoom: 13,
        paint: { 'fill-color': '#15161a', 'fill-opacity': 0.9 },
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

export async function initMap(layers) {
  // 自托管瓦片可用 → MapLibre 引擎 + OSM 矢量瓦片底图；不可用（静态部署）→ L7 内置引擎
  const useTiles = await tileServerAvailable();
  const mapEngine = useTiles
    ? new MapLibre({
      center: [112.5, 33.5],
      zoom: 4.2,
      style: omtDarkStyle(),
      // 中文地名用浏览器本地字体现场生成 SDF，无需字形服务器（MapLibre 专为 CJK 设计的能力）
      localIdeographFontFamily: "'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', sans-serif",
    })
    : new Map({ center: [112.5, 33.5], zoom: 4.2, style: { background: '#0b1026' } });
  const scene = new Scene({ id: 'map', map: mapEngine, logoVisible: false });

  // 底图坐标系为 WGS-84 时，所有 GCJ-02 数据统一逆转换后再上图
  const toDisplayCoords = (geojson) => (useTiles ? gcj02GeoJsonToWgs84(geojson) : geojson);
  const toDisplayPoint = ([lng, lat]) => (useTiles ? gcj02ToWgs84(lng, lat) : [lng, lat]);

  // ---- 分级统计图：省面着色（岗位越多越亮/越深色带） ----
  const [bounds, region] = await Promise.all([
    fetch(import.meta.env.BASE_URL + 'china-provinces.json').then((r) => r.json()),
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
      .setHTML(`<div style="font-size:13px;line-height:1.8;color:#1a1a2e;max-width:260px">
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
    .color('count', ['#3d4173', '#5e6ad2', '#aab0f5'])
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
        colors: ['rgba(94,106,210,0.0)', 'rgba(94,106,210,0.5)', 'rgba(130,143,255,0.8)', 'rgba(196,200,255,1.0)'],
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
      .setHTML(`<div style="font-size:13px;line-height:1.7;color:#1a1a2e">
        <b>${p.title}</b> — ${p.company}<br/>
        ${p.city} · ${p.salary_raw || '薪资面议'}<br/>
        ${(p.skills || []).join(' / ') || '无技能标签'}
      </div>`)
      .addTo(scene);
  });

  // ---- 时间线：按采集日期重放岗位"生长"过程 ----
  const tl = await getJson('/api/stats/timeline');
  const dates = tl.map((t) => t.date);
  const apply = (idx) => {
    const cutoff = dates[idx];
    const sub = {
      ...geojson,
      features: geojson.features.filter(
        (f) => (f.properties.collected_date || dates[dates.length - 1]) <= cutoff),
    };
    heatmap.setData(sub);
    points.setData(sub);
    return sub.features.length;
  };
  apply(dates.length - 1); // 初始显示全量

  scene.on('loaded', () => console.log('L7 scene loaded'));
  return { scene, timeline: { dates, apply, total: geojson.features.length } };
}
