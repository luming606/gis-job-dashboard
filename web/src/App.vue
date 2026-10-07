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
          <h3>技能共现球 · 拖拽旋转 / 悬停看共现</h3>
          <div ref="coocEl" class="chart wide"></div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import * as echarts from 'echarts';
import { getJson } from './api';
import { mountSkillSphere } from './skillSphere';
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
const legendColors = ['#1d1f2b', '#2c2f4a', '#3d4173', '#565cc0', '#7b81e8', '#aab0f5'];

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
    grid: { left: 8, right: 24, top: 8, bottom: 8, containLabel: true },
    textStyle: { color: '#8a8f98' },
    title: { show: false },
    // Linear 风格 tooltip：深面板 + 发丝边框，全站图表共享
    tooltip: {
      trigger: 'item',
      backgroundColor: '#141516',
      borderColor: '#34343a',
      textStyle: { color: '#f7f8f8', fontSize: 12 },
    },
  };
}

async function loadCharts() {
  const rank = await getJson('/api/stats/city_rank');
  // 棒棒糖图：细杆 = 数值轴，圆点 = 数值，末端直接标注具体数字
  echarts.init(cityRankEl.value).setOption({
    ...darkChart(),
    xAxis: { type: 'value', splitLine: { show: false }, axisLabel: { show: false }, axisLine: { show: false } },
    yAxis: {
      type: 'category',
      data: rank.slice(0, 10).map((r) => r.city).reverse(),
      axisLabel: { color: '#d0d6e0' },
      axisLine: { show: false }, axisTick: { show: false },
    },
    series: [
      {
        type: 'bar',
        data: rank.slice(0, 10).map((r) => r.count).reverse(),
        barWidth: 2,
        itemStyle: { color: '#34343a' },
        tooltip: { show: false },
      },
      {
        type: 'scatter',
        symbolSize: 9,
        data: rank.slice(0, 10).map((r) => r.count).reverse(),
        itemStyle: { color: '#5e6ad2' },
        label: {
          show: true, position: 'right', color: '#d0d6e0', fontSize: 11,
          formatter: '{c} 条',
        },
      },
    ],
  });

  const skillsAll = await getJson('/api/stats/skills?top=30');
  const skills = { freq: Object.fromEntries(Object.entries(skillsAll.freq).slice(0, 10)) };
  // 极坐标条形图（圆形放射）：技能围一圈、条形向外延伸，与棒棒糖/箱线图形态区分
  const pairs = Object.entries(skills.freq);
  const maxS = Math.max(...pairs.map(([, c]) => c), 1);
  echarts.init(skillEl.value).setOption({
    ...darkChart(),
    polar: { radius: ['18%', '68%'], center: ['50%', '52%'] },
    angleAxis: {
      type: 'category',
      data: pairs.map(([s]) => s),
      startAngle: 90,
      axisLabel: { color: '#d0d6e0', fontSize: 10, margin: 8 },
      axisLine: { lineStyle: { color: '#23252a' } },
      axisTick: { show: false },
    },
    radiusAxis: { max: maxS * 1.12, axisLabel: { show: false }, axisLine: { show: false }, splitLine: { show: false } },
    series: [{
      type: 'bar',
      coordinateSystem: 'polar',
      data: pairs.map(([name, c]) => ({
        value: c,
        itemStyle: { color: c / maxS > 0.5 ? '#5e6ad2' : '#3a3f4b', borderRadius: 3 },
      })),
      roundCap: true,
      barWidth: '48%',
      tooltip: { formatter: (p) => `<b>${p.name}</b>：出现在 ${p.value} 条岗位要求中` },
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
      axisLabel: { color: '#8a8f98', rotate: 30 },
      axisLine: { lineStyle: { color: '#23252a' } },
    },
    yAxis: { type: 'value', name: '日薪(元)', nameTextStyle: { color: '#62666d' }, axisLabel: { color: '#8a8f98' }, splitLine: { lineStyle: { color: '#23252a' } } },
    series: [{
      name: '薪资分布',
      type: 'boxplot',
      data: rows.map(([, b]) =>
        [b.min, b.q1, b.median, b.q3, b.max].map((v) => Math.round(v))),
      itemStyle: { color: 'rgba(94,106,210,0.16)', borderColor: '#5e6ad2', borderWidth: 1.2 },
      boxWidth: [10, 22],
      tooltip: {
        formatter: (p) => {
          const [mi, q1, md, q3, ma] = p.value;
          return `${p.name}<br/>最高 ${ma} ｜ Q3 ${q3}<br/>中位 ${md}<br/>Q1 ${q1} ｜ 最低 ${mi}`;
        },
      },
    }],
  });

  // 技能共现球（自研 canvas）：拖拽旋转 / 悬停显示出现次数与常共现技能
  const coocData = skillsAll;
  const nodeSet = new Set(Object.keys(coocData.freq));
  const unmountSphere = mountSkillSphere(coocEl.value, coocData.freq, coocData.cooc);
  onBeforeUnmount(() => unmountSphere());
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

/* 顶栏：Linear top-nav —— 画布底 + 发丝底边，无渐变无发光 */
.topbar {
  display: flex; align-items: center; gap: 24px;
  padding: 0 24px; height: 56px;
  border-bottom: 1px solid var(--hairline);
  background: var(--canvas);
}
.topbar h1 {
  font-size: 15px; font-weight: 600; letter-spacing: -0.3px; color: var(--ink);
}
.metrics { display: flex; gap: 32px; flex: 1; justify-content: center; }
.metric { display: flex; flex-direction: column; align-items: flex-start; }
.metric .value {
  font-size: 18px; font-weight: 600; color: var(--ink);
  font-variant-numeric: tabular-nums; letter-spacing: -0.3px;
}
.metric .label { font-size: 12px; color: var(--ink-subtle); }
.updated { font-size: 12px; color: var(--ink-tertiary); }

.grid {
  flex: 1;
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  grid-template-rows: 1fr 200px;
  gap: 12px;
  padding: 12px;
}
.left { grid-row: 1; }
.right { grid-row: 1; }
.bottom { grid-column: 1 / 4; display: grid; grid-template-columns: 1fr 1fr; }
.half { display: flex; flex-direction: column; min-width: 0; border-left: 1px solid var(--hairline); }
.half:first-child { border-left: none; }
.chart { flex: 1; min-height: 0; }
.chart.wide { height: 150px; }

.map-wrap { position: relative; grid-row: 1; }
#map { position: absolute; inset: 0; border: 1px solid var(--hairline); border-radius: var(--radius-lg); overflow: hidden; }

/* 图层开关：surface-1 面板 + 中性勾选，选中态用墨色不用彩色 */
.layer-switch {
  position: absolute; right: 12px; top: 12px; z-index: 10;
  padding: 10px 14px; font-size: 12px;
  display: flex; flex-direction: column; gap: 6px;
}
.layer-switch label { display: flex; align-items: center; gap: 6px; cursor: pointer; color: var(--ink-muted); }
.layer-switch input { accent-color: var(--accent); }

/* 时间轴：surface-1 浮层；日期 pill 选中 = surface-2 抬升（Linear pricing-tab 语义） */
.timeline {
  position: absolute; left: 12px; bottom: 12px; z-index: 10;
  display: flex; align-items: center; gap: 12px;
  padding: 8px 14px; font-size: 12px;
}
.timeline .play {
  width: 26px; height: 26px;
  border: 1px solid var(--hairline-strong); border-radius: var(--radius-md);
  background: var(--surface-2); color: var(--ink);
  cursor: pointer; font-size: 11px; line-height: 1;
}
.timeline .play:hover { background: var(--surface-3); }
.timeline .tl-dates { display: flex; gap: 6px; }
.timeline .tl-dates span {
  color: var(--ink-subtle); cursor: pointer; padding: 3px 10px;
  border-radius: 9999px; background: var(--canvas);
}
.timeline .tl-dates span.active {
  color: var(--ink); font-weight: 500;
  background: var(--surface-2); border: 1px solid var(--hairline-strong);
}
.timeline .tl-count {
  color: var(--ink); font-weight: 500; font-variant-numeric: tabular-nums;
}

.legend {
  position: absolute; left: 12px; top: 12px; z-index: 10;
  display: flex; align-items: center; gap: 4px;
  padding: 8px 12px; font-size: 11px;
}
.legend .lg-label { color: var(--ink-subtle); }
.legend .lg-swatch { width: 16px; height: 10px; border-radius: 2px; }
</style>
