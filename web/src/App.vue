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
        <h3>城市岗位 TOP10</h3>
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
      </section>

      <!-- 右列 -->
      <section class="panel right">
        <h3>技能需求 TOP15</h3>
        <div ref="skillEl" class="chart"></div>
      </section>

      <!-- 底栏 -->
      <section class="panel bottom">
        <h3>薪资日薪分布（分城市，箱线中位数展示）</h3>
        <div ref="salaryEl" class="chart wide"></div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import * as echarts from 'echarts';
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
  { id: 'points', name: '聚合点', on: false, layer: null },
]);

const cityRankEl = ref(null);
const skillEl = ref(null);
const salaryEl = ref(null);

function darkChart(title) {
  return {
    backgroundColor: 'transparent',
    grid: { left: 8, right: 20, top: 8, bottom: 8, containLabel: true },
    textStyle: { color: '#d8e4ff' },
    title: { show: false },
  };
}

async function loadCharts() {
  const rank = await (await fetch('/api/stats/city_rank')).json();
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

  const skills = await (await fetch('/api/stats/skills?top=15')).json();
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

  const salary = await (await fetch('/api/stats/salary?group_by=city')).json();
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
    yAxis: { type: 'value', axisLabel: { color: '#7f92c2' }, splitLine: { lineStyle: { color: 'rgba(72,110,218,0.2)' } } },
    series: [{
      name: '日薪中位数',
      type: 'bar',
      data: rows.map(([, b]) => Math.round(b.median)),
      itemStyle: { color: '#39d98a', borderRadius: 4 },
      barWidth: 14,
    }],
  });
}

function toggleLayer(opt) {
  if (opt.layer) opt.on ? opt.layer.show() : opt.layer.hide();
}

onMounted(async () => {
  const res = await fetch('/api/stats/overview');
  overview.value = await res.json();
  await initMap(layers);
  await loadCharts();
});
</script>

<style scoped>
.dashboard { display: flex; flex-direction: column; height: 100%; }

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
.bottom { grid-column: 1 / 4; }
.chart { flex: 1; min-height: 0; }
.chart.wide { height: 150px; }
.panel { display: flex; flex-direction: column; }

.map-wrap { position: relative; grid-row: 1; }
#map { position: absolute; inset: 0; border: 1px solid var(--border); border-radius: 6px; }

.layer-switch {
  position: absolute; right: 12px; top: 12px; z-index: 10;
  padding: 10px 14px; font-size: 12px;
  display: flex; flex-direction: column; gap: 6px;
}
.layer-switch label { display: flex; align-items: center; gap: 6px; cursor: pointer; }
</style>
