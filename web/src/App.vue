<template>
  <div class="dashboard">
    <!-- 顶栏 -->
    <header class="topbar">
      <h1>GIS 人才求职市场看板</h1>
      <div class="metrics">
        <div class="metric" v-for="m in metrics" :key="m.label">
          <span class="value">{{ m.value }}</span>
          <span class="label">{{ m.label }}</span>
        </div>
      </div>
      <div class="updated" v-if="overview">更新 {{ overview.last_collected }}</div>
    </header>

    <main class="grid">
      <!-- 左列 -->
      <section class="panel left">
        <h3>城市/省份岗位 TOP10</h3>
        <div ref="cityRankEl" class="chart"></div>
      </section>

      <!-- 中央地图 -->
      <section class="map-wrap">
        <div id="map"></div>
        <div class="layer-switch panel">
          <label v-for="opt in layers" :key="opt.id">
            <input type="checkbox" v-model="opt.on" @change="toggleLayer(opt)" />
            {{ opt.name }}
          </label>
        </div>
        <div class="timeline panel" v-if="tl">
          <button class="play" @click="playing ? pause() : play()">
            {{ playing ? '⏸' : '▶' }}
          </button>
          <div class="tl-dates">
            <span
              v-for="(d, i) in tl.dates"
              :key="d"
              :class="{ active: i === curIdx }"
              @click="seek(i)"
            >{{ d }}</span>
          </div>
          <div class="tl-count">累计 {{ curCount }} 条</div>
        </div>
        <div class="legend panel">
          <span class="lg-label">岗位少</span>
          <span class="lg-swatch" v-for="(c, i) in legendColors" :key="i" :style="{ background: c }"></span>
          <span class="lg-label">岗位多</span>
        </div>
      </section>

      <!-- 右列 -->
      <section class="panel right">
        <h3>技能需求 TOP15</h3>
        <div ref="skillEl" class="chart"></div>
      </section>

      <!-- 底栏 -->
      <section class="panel bottom">
        <div class="half">
          <h3>薪资日薪分布（分城市，中位数）</h3>
          <div ref="salaryEl" class="chart wide"></div>
        </div>
        <div class="half">
          <h3>技能共现网络（同一岗位出现的技能组合）</h3>
          <div ref="coocEl" class="chart wide"></div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import * as echarts from 'echarts';
import { getJson } from './api';
import { initMap } from './map';

const overview = ref(null);
const metrics = computed(() => overview.value ? [
  { label: '岗位总量', value: overview.value.total },
  { label: '覆盖城市', value: overview.value.city_count },
  { label: '覆盖省份', value: overview.value.province_count },
  { label: '平均日薪', value: '¥' + overview.value.avg_daily_salary },
] : []);

const layers = reactive([
  { id: 'choropleth', name: '省份岗位分级', on: true, layer: null },
  { id: 'heatmap', name: '点位热力', on: true, layer: null },
  { id: 'flows', name: '流向连线', on: false, layer: null },
  { id: 'points', name: '聚合点', on: false, layer: null },
]);

// 分级统计图色带图例（与 map.js 的 CHORO_COLORS 保持一致）
const legendColors = ['#12315e', '#1c4e8a', '#2e79c9', '#2fb3e8', '#2ee6e6', '#a7f3f3'];

const cityRankEl = ref(null);
const skillEl = ref(null);
const salaryEl = ref(null);
const coocEl = ref(null);

// 时间线播放状态
const tl = ref(null);
const curIdx = ref(0);
const curCount = ref(0);
const playing = ref(false);
let timer = null;
let timelineApi = null;

function step() {
  curCount.value = timelineApi.apply(curIdx.value);
  if (curIdx.value >= timelineApi.dates.length - 1) {
    pause();
  } else {
    curIdx.value += 1;
  }
}
function play() {
  if (curIdx.value >= timelineApi.dates.length - 1) curIdx.value = 0;
  playing.value = true;
  timer = setInterval(step, 1500);
  step();
}
function pause() {
  playing.value = false;
  clearInterval(timer);
}
function seek(i) {
  curIdx.value = i;
  curCount.value = timelineApi.apply(i);
}

function darkChart(title) {
  return {
    backgroundColor: 'transparent',
    grid: { left: 8, right: 20, top: 8, bottom: 8, containLabel: true },
    textStyle: { color: '#d8e4ff' },
    title: { show: false },
  };
}

async function loadCharts() {
  const rank = await getJson('/api/stats/city_rank');
  echarts.init(cityRankEl.value).setOption({
    ...darkChart(),
    xAxis: { type: 'value', splitLine: { show: false }, axisLabel: { color: '#7f92c2' } },
    yAxis: {
      type: 'category',
      data: rank.slice(0, 10).map((r) => r.city).reverse(),
      axisLabel: { color: '#d8e4ff' },
      axisLine: { show: false }, axisTick: { show: false },
    },
    series: [{
      type: 'bar',
      data: rank.slice(0, 10).map((r) => r.count).reverse(),
      barWidth: 10,
      itemStyle: { color: '#2ee6e6', borderRadius: 5 },
    }],
  });

  const skillsAll = await getJson('/api/stats/skills?top=30');
  const skills = { freq: Object.fromEntries(Object.entries(skillsAll.freq).slice(0, 15)) };
  const skillPairs = Object.entries(skills.freq).reverse();
  echarts.init(skillEl.value).setOption({
    ...darkChart(),
    xAxis: { type: 'value', splitLine: { show: false }, axisLabel: { color: '#7f92c2' } },
    yAxis: {
      type: 'category',
      data: skillPairs.map(([s]) => s),
      axisLabel: { color: '#d8e4ff' },
      axisLine: { show: false }, axisTick: { show: false },
    },
    series: [{
      type: 'bar',
      data: skillPairs.map(([, c]) => c),
      barWidth: 10,
      itemStyle: { color: '#7a7bff', borderRadius: 5 },
    }],
  });

  const salary = await getJson('/api/stats/salary?group_by=city');
  const rows = Object.entries(salary)
    .filter(([, b]) => b && b.count >= 3)
    .sort((a, b) => b[1].median - a[1].median).slice(0, 12);
  echarts.init(salaryEl.value).setOption({
    ...darkChart(),
    grid: { left: 8, right: 20, top: 16, bottom: 8, containLabel: true },
    xAxis: {
      type: 'category',
      data: rows.map(([c]) => c),
      axisLabel: { color: '#d8e4ff', rotate: 30 },
      axisLine: { lineStyle: { color: '#486eda' } },
    },
    yAxis: { type: 'value', name: '日薪(元)', nameTextStyle: { color: '#7f92c2' }, axisLabel: { color: '#7f92c2' }, splitLine: { lineStyle: { color: 'rgba(72,110,218,0.2)' } } },
    series: [{
      name: '薪资分布',
      type: 'boxplot',
      data: rows.map(([, b]) =>
        [b.min, b.q1, b.median, b.q3, b.max].map((v) => Math.round(v))),
      itemStyle: { color: 'rgba(46,230,230,0.25)', borderColor: '#2ee6e6', borderWidth: 1.2 },
      boxWidth: [10, 22],
      tooltip: {
        formatter: (p) => {
          const [mi, q1, md, q3, ma] = p.value;
          return `${p.name}<br/>最高 ${ma} ｜ Q3 ${q3}<br/>中位 ${md}<br/>Q1 ${q1} ｜ 最低 ${mi}`;
        },
      },
    }],
  });

  // 技能共现网络：节点=TOP18 技能，边=同岗位共现
  const coocData = skillsAll;
  const nodeSet = new Set(Object.keys(coocData.freq));
  const nodes = Object.entries(coocData.freq).map(([name, count]) => ({
    name, symbolSize: 10 + Math.sqrt(count) * 4,
    itemStyle: { color: '#2ee6e6' },
    label: { show: true, color: '#d8e4ff', fontSize: 10 },
  }));
  const links = Object.entries(coocData.cooc)
    .map(([pair, count]) => {
      const [s, t] = pair.split('|');
      return { source: s, target: t, count };
    })
    .filter((l) => nodeSet.has(l.source) && nodeSet.has(l.target) && l.count >= 2)
    .map((l) => ({
      ...l,
      lineStyle: { width: 1 + Math.log2(l.count), color: 'rgba(122,123,255,0.5)', curveness: 0.15 },
    }));
  echarts.init(coocEl.value).setOption({
    ...darkChart(),
    series: [{
      type: 'graph', layout: 'force', roam: false,
      data: nodes, links,
      force: { repulsion: 220, edgeLength: 60, gravity: 0.15 },
      emphasis: { focus: 'adjacency' },
    }],
  });
}

function toggleLayer(opt) {
  if (opt.layer) opt.on ? opt.layer.show() : opt.layer.hide();
}

onMounted(async () => {
  overview.value = await getJson('/api/stats/overview');
  const { timeline } = await initMap(layers);
  timelineApi = timeline;
  tl.value = timeline;
  curIdx.value = timeline.dates.length - 1;
  curCount.value = timeline.total;
  await loadCharts();
});
</script>

<style scoped>
.dashboard { display: flex; flex-direction: column; height: 100%; }
.panel { display: flex; flex-direction: column; }

.topbar {
  display: flex; align-items: center; gap: 24px;
  padding: 12px 24px;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(30, 42, 84, 0.9), rgba(15, 21, 44, 0.9));
}
.topbar h1 {
  font-size: 20px; letter-spacing: 4px; color: var(--cyan);
  text-shadow: 0 0 12px rgba(46, 230, 230, 0.6);
}
.metrics { display: flex; gap: 28px; flex: 1; justify-content: center; }
.metric { display: flex; flex-direction: column; align-items: center; }
.metric .value { font-size: 22px; font-weight: 700; color: #fff; }
.metric .label { font-size: 12px; color: var(--dim); }
.updated { font-size: 12px; color: var(--dim); }

.grid {
  flex: 1;
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  grid-template-rows: 1fr 200px;
  gap: 10px;
  padding: 10px;
}
.left { grid-row: 1; }
.right { grid-row: 1; }
.bottom { grid-column: 1 / 4; display: grid; grid-template-columns: 1fr 1fr; }
.half { display: flex; flex-direction: column; min-width: 0; border-left: 1px solid var(--border); }
.half:first-child { border-left: none; }
.chart { flex: 1; min-height: 0; }
.chart.wide { height: 150px; }

.map-wrap { position: relative; grid-row: 1; }
#map { position: absolute; inset: 0; border: 1px solid var(--border); border-radius: 6px; }

.layer-switch {
  position: absolute; right: 12px; top: 12px; z-index: 10;
  padding: 10px 14px; font-size: 12px;
  display: flex; flex-direction: column; gap: 6px;
}
.layer-switch label { display: flex; align-items: center; gap: 6px; cursor: pointer; }

.timeline {
  position: absolute; left: 12px; bottom: 12px; z-index: 10;
  display: flex; align-items: center; gap: 12px;
  padding: 8px 14px; font-size: 12px;
}
.timeline .play {
  width: 28px; height: 28px; border: 1px solid var(--border); border-radius: 50%;
  background: rgba(46, 230, 230, 0.15); color: var(--cyan);
  cursor: pointer; font-size: 12px; line-height: 1;
}
.timeline .tl-dates { display: flex; gap: 10px; }
.timeline .tl-dates span { color: var(--dim); cursor: pointer; padding: 2px 4px; }
.timeline .tl-dates span.active {
  color: var(--cyan); font-weight: 700;
  border-bottom: 2px solid var(--cyan);
}
.timeline .tl-count { color: #fff; font-weight: 600; }

.legend {
  position: absolute; left: 12px; top: 12px; z-index: 10;
  display: flex; align-items: center; gap: 4px;
  padding: 8px 12px; font-size: 11px;
}
.legend .lg-label { color: var(--dim); }
.legend .lg-swatch { width: 16px; height: 10px; border-radius: 2px; }
</style>
