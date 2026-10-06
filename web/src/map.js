// L7 地图初始化：L7 内置引擎（无第三方 JS API 依赖）+ 四层可切换图层
// 坐标系：数据与省界 GeoJSON 均为 GCJ-02，自洽无需转换
import { HeatmapLayer, LineLayer, PointLayer, PolygonLayer, Popup, Scene } from '@antv/l7';
import { Map } from '@antv/l7-maps';
import { getJson } from './api';

const CHORO_COLORS = ['#12315e', '#1c4e8a', '#2e79c9', '#2fb3e8', '#2ee6e6', '#a7f3f3'];

export async function initMap(layers) {
  const scene = new Scene({
    id: 'map',
    map: new Map({
      center: [112.5, 33.5],
      zoom: 4.2,
      style: { background: '#0b1026' },
    }),
  });

  // ---- 分级统计图：省面着色（岗位越多越亮/越深色带） ----
  const [bounds, region] = await Promise.all([
    fetch(import.meta.env.BASE_URL + 'china-provinces.json').then((r) => r.json()),
    getJson('/api/region-heat?level=province'),
  ]);
  const countByProvince = region.counts;
  const maxCount = Math.max(...Object.values(countByProvince), 1);

  const choropleth = new PolygonLayer({ zIndex: 1 })
    .source(bounds)
    .shape('fill')
    .color('name', (name) => {
      const c = countByProvince[name] || 0;
      return CHORO_COLORS[Math.min(Math.floor((c / maxCount) * CHORO_COLORS.length), CHORO_COLORS.length - 1)];
    })
    .style({ opacity: 0.85 })
    .active({ color: 'rgba(255,255,255,0.25)' });
  scene.addLayer(choropleth);
  layers.find((l) => l.id === 'choropleth').layer = choropleth;

  // ---- 流向连线：各城市 → 省内/就近集聚地（示意） ----
  const flows = await getJson('/api/flows');
  const arc = new LineLayer({ zIndex: 2, blend: 'additive' })
    .source(flows)
    .shape('arc')
    .size(1.2)
    .color('count', ['#2ee6e6', '#7a7bff', '#ff7b50'])
    .style({ opacity: 0.55 });
  scene.addLayer(arc);
  layers.find((l) => l.id === 'flows').layer = arc;

  // 按面板初始状态同步图层显隐（默认关的图层不显示）
  for (const opt of layers) {
    if (opt.layer && !opt.on) opt.layer.hide();
  }

  // ---- 数据源：岗位点（GCJ-02） ----
  const geojson = await getJson('/api/jobs');

  // ---- 点位热力（样式键为此版本 L7 的 rampColors: { colors, positions }） ----
  const heatmap = new HeatmapLayer({ zIndex: 2 })
    .source(geojson)
    .shape('heatmap')
    .size(30)
    .style({
      intensity: 1.4,
      radius: 20,
      opacity: 1.0,
      rampColors: {
        colors: ['rgba(46,230,230,0.0)', 'rgba(46,180,230,0.5)', 'rgba(122,123,255,0.8)', 'rgba(255,120,80,1.0)'],
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
    .color('#ffd166')
    .style({ stroke: '#fff', strokeWidth: 0.6, opacity: 0.9 });
  scene.addLayer(points);
  layers.find((l) => l.id === 'points').layer = points;

  points.on('click', (e) => {
    const p = e.feature?.properties || {};
    new Popup({ anchors: 'bottom' })
      .setLnglat(e.lngLat)
      .setHtml(`<div style="font-size:13px;line-height:1.7;color:#1a1a2e">
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
