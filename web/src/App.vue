<template>
  <div class="dashboard" :class="{ focusing: focused }">
    <!-- 顶栏 -->
    <header class="topbar">
      <h1>GIS 人才求职市场看板</h1>
      <div class="filter-capsule" ref="filterCapsuleEl" :class="{ open: filterOpen }">
        <button class="filter-pill" @click="toggleFilterOpts">岗位类型 · {{ jobTypeLabel }} <span class="caret">▾</span></button>
        <div class="filter-opts" v-if="filterOpen" :class="{ leaving: filterLeaving }">
          <button v-for="o in jobTypeOpts" :key="o.value" class="opt" :class="{ active: o.value === jobType }" @click="pickJobType(o)">{{ o.label }}</button>
        </div>
      </div>
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
      <section class="panel left glass-spot" data-module="city" :class="{ focused: focused === 'city' }">
        <div class="panel-head">
          <h3>城市/省份岗位 TOP10</h3>
          <button class="expand-btn" @click="focusModule('city')" title="放大查看">⤢</button>
        </div>
        <div ref="cityRankEl" class="chart"></div>
      </section>

      <!-- 中央地图 -->
      <section class="map-wrap">
        <div id="map"></div>
        <div class="layer-switch panel glass-spot">
          <div class="legend-row">
            <span class="lg-label">岗位少</span>
            <span class="lg-swatch" v-for="(c, i) in legendColors" :key="i" :style="{ background: c }"></span>
            <span class="lg-label">岗位多</span>
          </div>
          <div class="ctl-divider"></div>
          <label v-for="opt in layers" :key="opt.id">
            <input type="checkbox" v-model="opt.on" @change="toggleLayer(opt)" />
            {{ opt.name }}
          </label>
        </div>
        <div class="timeline panel glass-spot" v-if="tl">
          <button class="play" @click="playing ? pause() : play()">
            {{ playing ? '⏸' : '▶' }}
          </button>
          <div class="seg" ref="segEl">
            <span class="seg-glider" ref="gliderEl"></span>
            <button
              v-for="(d, i) in tl.dates"
              :key="d"
              :class="{ active: i === curIdx }"
              @click="seek(i)"
            >{{ d }}</button>
          </div>
          <div class="tl-count">当日新增 {{ curDelta }} 条</div>
        </div>
        <div class="dock" ref="dockEl">
          <button v-for="d in dockItems" :key="d.id" :class="{ on: d.on }" @click="d.run" :title="d.label"><span>{{ d.icon }}</span><span class="tip">{{ d.label }}</span></button>
        </div>
      </section>

      <!-- 右列 -->
      <section class="panel right glass-spot" data-module="skill" :class="{ focused: focused === 'skill' }">
        <div class="panel-head">
          <h3>技能需求 TOP10</h3>
          <button class="expand-btn" @click="focusModule('skill')" title="放大查看">⤢</button>
        </div>
        <div ref="skillEl" class="chart"></div>
      </section>

      <!-- 底栏 -->
      <section class="panel bottom">
        <div class="half glass-spot" data-module="salary" :class="{ focused: focused === 'salary' }">
          <div class="panel-head">
            <h3>薪资日薪分布（分城市，中位数）</h3>
            <button class="expand-btn" @click="focusModule('salary')" title="放大查看">⤢</button>
          </div>
          <div ref="salaryEl" class="chart wide"></div>
        </div>
        <div class="half glass-spot" data-module="sphere" :class="{ focused: focused === 'sphere' }">
          <div class="panel-head">
            <h3>技能共现球 · 拖拽旋转 / 悬停看共现</h3>
            <button class="expand-btn" @click="focusModule('sphere')" title="放大查看">⤢</button>
          </div>
          <div ref="coocEl" class="chart wide"></div>
        </div>
      </section>
    </main>

    <!-- 模块就地放大：其余缩为底部玻璃缩略条 -->
    <div class="thumb-strip" v-if="focused">
      <button v-for="m in modules" :key="m.id" class="thumb" :class="{ active: focused === m.id }" @click="focusModule(m.id)">{{ m.label }}</button>
      <button class="thumb close" @click="focusModule(null)">✕ 收起</button>
    </div>

    <!-- 命令面板 -->
    <div class="palette-backdrop" v-if="paletteOpen" @click.self="closePalette">
      <div class="palette">
        <input ref="paletteInputEl" v-model="paletteQuery" @input="onPaletteInput" @keydown.down.prevent="paletteMove(1)" @keydown.up.prevent="paletteMove(-1)" @keydown.enter.prevent="paletteEnter" @keydown.esc="closePalette" placeholder="搜索城市，或输入命令…" />
        <div class="palette-list">
          <div v-for="(it, i) in paletteItems" :key="it.key" class="palette-item" :class="{ sel: i === paletteSel }" @click="paletteRun(it)" @mouseenter="paletteSel = i">
            <span v-html="it.html"></span><span class="kind">{{ it.kind }}</span>
          </div>
          <div v-if="!paletteItems.length" class="palette-empty">没有匹配的结果</div>
        </div>
        <div class="palette-hint">↑↓ 选择 · 回车跳转 · Esc 关闭 · Ctrl/⌘ K 随时唤起</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import * as echarts from 'echarts';
import { getJson } from './api';
import { mountSkillSphere } from './skillSphere';
import { initMap, CHORO_COLORS } from './map';

const overview = ref(null);
// 指标数字滚动：加载后从 0  ease-out 到目标值（减动效偏好时直接落点）
const animated = reactive({ total: 0, cities: 0, provinces: 0, salary: 0 });
const metrics = computed(() => overview.value ? [
  { label: '岗位总量', value: animated.total },
  { label: '覆盖城市', value: animated.cities },
  { label: '覆盖省份', value: animated.provinces },
  { label: '平均日薪', value: '¥' + animated.salary },
] : []);
function animateMetrics(target) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    Object.assign(animated, target);
    return;
  }
  const start = performance.now();
  const dur = 900;
  const tick = (now) => {
    const t = Math.min(1, (now - start) / dur);
    const e = 1 - ((1 - t) ** 3);
    animated.total = Math.round(target.total * e);
    animated.cities = Math.round(target.cities * e);
    animated.provinces = Math.round(target.provinces * e);
    animated.salary = Math.round(target.salary * e);
    if (t < 1) requestAnimationFrame(tick);
    else Object.assign(animated, target); // 落点用原始值（避免浮点薪资被取整）
  };
  requestAnimationFrame(tick);
}

const layers = reactive([
  { id: 'choropleth', name: '省份岗位分级', on: true, layer: null },
  { id: 'heatmap', name: '点位热力', on: true, layer: null },
  { id: 'flows', name: '流向连线', on: false, layer: null },
  { id: 'points', name: '聚合点', on: false, layer: null },
]);

// 分级色带图例：直接引用 map.js 的 CHORO_COLORS，保证图例与地图用同一套颜色
const legendColors = CHORO_COLORS;

// ---- 玻璃壳状态（试验分支） ----
const jobType = ref('all');
const jobTypeOpts = [
  { value: 'all', label: '全部' },
  { value: 'campus', label: '校招' },
  { value: 'social', label: '社招' },
  { value: 'intern', label: '实习' },
];
const jobTypeLabel = computed(() => jobTypeOpts.find((o) => o.value === jobType.value)?.label ?? '全部');
const filterOpen = ref(false);
const filterLeaving = ref(false);
const filterCapsuleEl = ref(null);
const focused = ref(null);
const modules = [
  { id: 'city', label: '城市榜' },
  { id: 'skill', label: '技能榜' },
  { id: 'salary', label: '薪资分布' },
  { id: 'sphere', label: '技能共现球' },
];
const paletteOpen = ref(false);
const paletteQuery = ref('');
const paletteSel = ref(0);
const paletteInputEl = ref(null);
const cityList = ref([]);
const coocDataRef = ref(null);
const chartInstances = {};
let unmountSphere = null;
const segEl = ref(null);
const gliderEl = ref(null);
const dockEl = ref(null);

const dockItems = computed(() => [
  { id: 'reset', icon: '🗺️', label: '全国视图', on: false, run: () => timelineApi?.resetView?.() },
  { id: 'heatmap', icon: '🔥', label: '点位热力', on: layers.find((l) => l.id === 'heatmap')?.on, run: () => toggleLayerById('heatmap') },
  { id: 'flows', icon: '〰️', label: '流向连线', on: layers.find((l) => l.id === 'flows')?.on, run: () => toggleLayerById('flows') },
  { id: 'points', icon: '🎯', label: '聚合点', on: layers.find((l) => l.id === 'points')?.on, run: () => toggleLayerById('points') },
  { id: 'search', icon: '🔍', label: '搜索 (Ctrl+K)', on: false, run: () => openPalette() },
  { id: 'play', icon: playing.value ? '⏸' : '▶', label: playing.value ? '暂停时间线' : '播放时间线', on: playing.value, run: () => { playing.value ? pause() : play(); } },
]);
const paletteCommands = computed(() => [
  { key: 'cmd-play', name: playing.value ? '暂停时间线' : '播放时间线', kind: '命令', run: () => { playing.value ? pause() : play(); } },
  { key: 'cmd-reset', name: '回到全国视图', kind: '命令', run: () => timelineApi?.resetView?.() },
  { key: 'cmd-heat', name: '切换点位热力图层', kind: '命令', run: () => toggleLayerById('heatmap') },
  { key: 'cmd-flows', name: '切换流向连线图层', kind: '命令', run: () => toggleLayerById('flows') },
  { key: 'cmd-points', name: '切换聚合点图层', kind: '命令', run: () => toggleLayerById('points') },
  { key: 'cmd-choro', name: '切换省份分级图层', kind: '命令', run: () => toggleLayerById('choropleth') },
  { key: 'cmd-filter', name: '打开岗位类型筛选', kind: '命令', run: () => { filterOpen.value = true; } },
]);
const paletteItems = computed(() => {
  const q = paletteQuery.value.trim();
  const cities = cityList.value.map((c) => ({ key: `city-${c}`, name: c, kind: '城市', html: highlight(c, q), run: () => timelineApi?.flyToCity?.(c) }));
  const cmds = paletteCommands.value.map((c) => ({ ...c, html: highlight(c.name, q) }));
  const all = [...cities, ...cmds];
  if (!q) return all;
  return all.filter((it) => it.name.includes(q));
});

const cityRankEl = ref(null);
const skillEl = ref(null);
const salaryEl = ref(null);
const coocEl = ref(null);

// 时间线播放状态
const tl = ref(null);
const curIdx = ref(0);
const curCount = ref(0);
const curDelta = ref(0);
const playing = ref(false);
let timer = null;
let timelineApi = null;

function step() {
  curCount.value = timelineApi.apply(curIdx.value);
  curDelta.value = timelineApi.delta ? timelineApi.delta(curIdx.value) : (timelineApi.perDate?.[curIdx.value] ?? 0);
  moveGlider(curIdx.value);
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
  curDelta.value = timelineApi.delta ? timelineApi.delta(i) : (timelineApi.perDate?.[i] ?? 0);
  moveGlider(i);
}

// ---- 玻璃壳交互 ----
function moveGlider(i, stretch = true) {
  const seg = segEl.value, glider = gliderEl.value;
  if (!seg || !glider) return;
  const btn = seg.querySelectorAll('button')[i];
  if (!btn) return;
  glider.style.left = `${btn.offsetLeft}px`;
  glider.style.width = `${btn.offsetWidth}px`;
  if (stretch) {
    glider.classList.add('stretch');
    setTimeout(() => glider.classList.remove('stretch'), 200);
  }
}
function toggleFilterOpts() {
  if (filterOpen.value) closeFilterOpts();
  else { filterOpen.value = true; filterLeaving.value = false; }
}
function closeFilterOpts() {
  if (!filterOpen.value) return;
  filterLeaving.value = true;
  setTimeout(() => { filterOpen.value = false; filterLeaving.value = false; }, 240);
}
function pickJobType(o) {
  jobType.value = o.value;
  closeFilterOpts();
  if (timelineApi?.setJobType) {
    animateMetrics(timelineApi.setJobType(o.value));
    curDelta.value = timelineApi.delta ? timelineApi.delta(curIdx.value) : curDelta.value;
  }
}
function onDocClick(e) {
  if (filterOpen.value && filterCapsuleEl.value && !filterCapsuleEl.value.contains(e.target)) closeFilterOpts();
}
function onKeydown(e) {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    paletteOpen.value ? closePalette() : openPalette();
  } else if (e.key === 'Escape' && paletteOpen.value) closePalette();
  else if (e.key === 'Escape' && focused.value) focusModule(null);
}
function toggleLayerById(id) {
  const opt = layers.find((l) => l.id === id);
  if (!opt) return;
  opt.on = !opt.on;
  toggleLayer(opt);
}
async function focusModule(id) {
  const wasSphere = focused.value === 'sphere';
  document.querySelectorAll('.glass-spot').forEach((el) => { el.style.transform = ''; });
  focused.value = id;
  await nextTick();
  setTimeout(() => {
    for (const c of Object.values(chartInstances)) { try { c?.resize(); } catch { /* 忽略 */ } }
    if (id === 'sphere' || wasSphere) remountSphere();
  }, 320);
}
function remountSphere() {
  try { unmountSphere?.(); } catch { /* 忽略 */ }
  const el = coocEl.value;
  if (!el || !coocDataRef.value) return;
  unmountSphere = mountSkillSphere(el, coocDataRef.value.freq, coocDataRef.value.cooc);
}
function setupSpots() {
  document.querySelectorAll('.glass-spot').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
      if (el.classList.contains('focused')) return;
      const rx = ((x / r.width) - 0.5) * 5;
      const ry = ((y / r.height) - 0.5) * -5;
      el.style.transform = `perspective(900px) rotateX(${ry.toFixed(2)}deg) rotateY(${rx.toFixed(2)}deg)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}
function setupDock() {
  const dock = dockEl.value;
  if (!dock) return;
  dock.addEventListener('mousemove', (e) => {
    dock.querySelectorAll('button').forEach((b) => {
      const r = b.getBoundingClientRect();
      const d = Math.abs(e.clientX - (r.left + r.width / 2));
      const s = 1 + 0.55 * Math.max(0, 1 - d / 90);
      b.style.setProperty('--s', s.toFixed(2));
    });
  });
  dock.addEventListener('mouseleave', () => {
    dock.querySelectorAll('button').forEach((b) => b.style.setProperty('--s', 1));
  });
}
function highlight(text, q) {
  if (!q) return text;
  const i = text.indexOf(q);
  if (i < 0) return text;
  return `${text.slice(0, i)}<mark>${text.slice(i, i + q.length)}</mark>${text.slice(i + q.length)}`;
}
function openPalette() {
  paletteOpen.value = true;
  paletteQuery.value = '';
  paletteSel.value = 0;
  nextTick(() => paletteInputEl.value?.focus());
}
function closePalette() { paletteOpen.value = false; }
function onPaletteInput() { paletteSel.value = 0; }
function paletteMove(d) {
  const n = paletteItems.value.length;
  if (!n) return;
  paletteSel.value = (paletteSel.value + d + n) % n;
}
function paletteEnter() {
  const it = paletteItems.value[paletteSel.value];
  if (it) paletteRun(it);
}
function paletteRun(it) {
  closePalette();
  try { it.run?.(); } catch { /* 忽略 */ }
}

function darkChart(title) {
  return {
    backgroundColor: 'transparent',
    grid: { left: 8, right: 24, top: 8, bottom: 8, containLabel: true },
    textStyle: { color: '#cfae9c' },
    title: { show: false },
    // Linear 风格 tooltip：深面板 + 发丝边框，全站图表共享
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(36,22,16,0.94)',
      borderColor: 'rgba(255,255,255,0.22)',
      textStyle: { color: '#fff6ef', fontSize: 12 },
    },
  };
}

async function loadCharts() {
  const rank = await getJson('/api/stats/city_rank');
  cityList.value = rank.slice(0, 15).map((r) => r.city);
  // 棒棒糖图：细杆 = 数值轴，圆点 = 数值，末端直接标注具体数字
  chartInstances.city = echarts.init(cityRankEl.value);
  chartInstances.city.setOption({
    ...darkChart(),
    xAxis: { type: 'value', splitLine: { show: false }, axisLabel: { show: false }, axisLine: { show: false } },
    yAxis: {
      type: 'category',
      data: rank.slice(0, 10).map((r) => r.city).reverse(),
      axisLabel: { color: '#f0d9c8' },
      axisLine: { show: false }, axisTick: { show: false },
    },
    series: [
      {
        type: 'bar',
        data: rank.slice(0, 10).map((r) => r.count).reverse(),
        barWidth: 2,
        itemStyle: { color: 'rgba(255,255,255,0.16)' },
        tooltip: { show: false },
      },
      {
        type: 'scatter',
        symbolSize: 9,
        data: rank.slice(0, 10).map((r) => r.count).reverse(),
        itemStyle: { color: '#f2a65e' },
        label: {
          show: true, position: 'right', color: '#f0d9c8', fontSize: 11,
          formatter: '{c} 条',
        },
      },
    ],
  });

  const skillsAll = await getJson('/api/stats/skills?top=30');
  const skills = { freq: Object.fromEntries(Object.entries(skillsAll.freq).slice(0, 10)) };
  // 横向棒棒糖图：与左列城市榜同一种语言（细杆 + 圆点 + 末端数字），
  // 极坐标圈排的 10px 斜体标签可读性太差，形式呼应比形态猎奇重要
  const pairs = Object.entries(skills.freq);
  chartInstances.skill = echarts.init(skillEl.value);
  chartInstances.skill.setOption({
    ...darkChart(),
    xAxis: { type: 'value', splitLine: { show: false }, axisLabel: { show: false }, axisLine: { show: false } },
    yAxis: {
      type: 'category',
      data: pairs.map(([s]) => s).reverse(),
      axisLabel: { color: '#f0d9c8' },
      axisLine: { show: false }, axisTick: { show: false },
    },
    series: [
      {
        type: 'bar',
        data: pairs.map(([, c]) => c).reverse(),
        barWidth: 2,
        itemStyle: { color: 'rgba(255,255,255,0.16)' },
        tooltip: { show: false },
      },
      {
        type: 'scatter',
        symbolSize: 9,
        data: pairs.map(([, c]) => c).reverse(),
        itemStyle: { color: '#f2a65e' },
        label: {
          show: true, position: 'right', color: '#f0d9c8', fontSize: 11,
          formatter: '{c} 条',
        },
        tooltip: { formatter: (p) => `<b>${p.name}</b>：出现在 ${p.value} 条岗位要求中` },
      },
    ],
  });

  const salary = await getJson('/api/stats/salary?group_by=city');
  const rows = Object.entries(salary)
    .filter(([, b]) => b && b.count >= 3)
    .sort((a, b) => b[1].median - a[1].median).slice(0, 12);
  chartInstances.salary = echarts.init(salaryEl.value);
  chartInstances.salary.setOption({
    ...darkChart(),
    grid: { left: 8, right: 20, top: 16, bottom: 8, containLabel: true },
    xAxis: {
      type: 'category',
      data: rows.map(([c]) => c),
      axisLabel: { color: '#cfae9c', rotate: 30 },
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.10)' } },
    },
    yAxis: { type: 'value', name: '日薪(元)', nameTextStyle: { color: '#a98a78' }, axisLabel: { color: '#cfae9c' }, splitLine: { lineStyle: { color: 'rgba(255,255,255,0.10)' } } },
    series: [{
      name: '薪资分布',
      type: 'boxplot',
      data: rows.map(([, b]) =>
        [b.min, b.q1, b.median, b.q3, b.max].map((v) => Math.round(v))),
      // 薪资用克制的暗金，与薰衣草的"岗位"叙事分开：钱和岗位一眼可辨
      itemStyle: { color: 'rgba(201,162,94,0.16)', borderColor: '#c9a25e', borderWidth: 1.2 },
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
  coocDataRef.value = coocData;
  unmountSphere = mountSkillSphere(coocEl.value, coocData.freq, coocData.cooc);
}

function toggleLayer(opt) {
  if (opt.layer) opt.on ? opt.layer.show() : opt.layer.hide();
}

onMounted(async () => {
  overview.value = await getJson('/api/stats/overview');
  animateMetrics({
    total: overview.value.total,
    cities: overview.value.city_count,
    provinces: overview.value.province_count,
    salary: overview.value.avg_daily_salary,
  });
  const mapResult = await initMap(layers);
  timelineApi = mapResult.timeline;
  tl.value = mapResult.timeline;
  curIdx.value = timeline.dates.length - 1;
  curCount.value = timeline.total;
  curDelta.value = timeline.perDate?.[curIdx.value] ?? 0;
  await loadCharts();
  await nextTick();
  moveGlider(curIdx.value, false);
  setupSpots();
  setupDock();
  document.addEventListener('click', onDocClick);
  document.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick);
  document.removeEventListener('keydown', onKeydown);
  try { unmountSphere?.(); } catch { /* 忽略 */ }
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
  background: rgba(24, 12, 6, 0.55);
  -webkit-backdrop-filter: var(--glass-blur);
  backdrop-filter: var(--glass-blur);
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
  grid-template-rows: 1fr 250px;
  gap: 12px;
  padding: 12px;
}
.left { grid-row: 1; }
.right { grid-row: 1; }
.bottom { grid-column: 1 / 4; display: grid; grid-template-columns: 1fr 1fr; }
.half { display: flex; flex-direction: column; min-width: 0; border-left: 1px solid var(--hairline); }
.half:first-child { border-left: none; }
.chart { flex: 1; min-height: 0; position: relative; }
.chart.wide { flex: 1; min-height: 0; }

/* 骨架占位：图表挂载前容器为空时显示呼吸的 surface-2 色块，
   echarts/canvas 一挂载 :empty 即失效，无需 JS 状态 */
.chart:empty::before {
  content: '';
  position: absolute; inset: 0;
  border-radius: var(--radius-md);
  background: var(--surface-2);
  animation: panel-pulse 1.6s ease-in-out infinite;
}
@keyframes panel-pulse {
  0%, 100% { opacity: 0.45; }
  50% { opacity: 0.85; }
}
#map:empty { background: var(--surface-1); }

.map-wrap { position: relative; grid-row: 1; }
#map { position: absolute; inset: 0; border: 1px solid var(--hairline); border-radius: var(--radius-lg); overflow: hidden; }

/* 图层开关 + 图例合成一个右上工具组：地图浮层从 3 个减到 2 个 */
.layer-switch {
  position: absolute; right: 12px; top: 12px; z-index: 10;
  padding: 10px 14px; font-size: 12px;
  display: flex; flex-direction: column; gap: 6px;
}
.layer-switch label { display: flex; align-items: center; gap: 6px; cursor: pointer; color: var(--ink-muted); }
.layer-switch input { accent-color: var(--accent); }
.legend-row { display: flex; align-items: center; gap: 4px; font-size: 11px; }
.legend-row .lg-label { color: var(--ink-subtle); }
.legend-row .lg-swatch { width: 16px; height: 10px; border-radius: 2px; }
.ctl-divider { height: 1px; background: var(--hairline); margin: 2px 0; }

/* 时间轴：surface-1 浮层；日期 pill 选中 = surface-2 抬升（Linear pricing-tab 语义） */
.timeline {
  position: absolute; left: 12px; bottom: 12px; z-index: 10;
  display: flex; align-items: center; gap: 12px;
  padding: 8px 14px; font-size: 12px;
  max-width: calc(100% - 24px);
}
.timeline .play {
  width: 26px; height: 26px;
  border: 1px solid var(--hairline-strong); border-radius: var(--radius-md);
  background: var(--surface-2); color: var(--ink);
  cursor: pointer; font-size: 11px; line-height: 1;
}
.timeline .play:hover { background: var(--surface-3); }
/* 日期胶囊：液态滑块样式见 style.css 的 .seg */
.timeline .tl-count {
  color: var(--ink); font-weight: 500; font-variant-numeric: tabular-nums;
}

@media (max-width: 1100px) {
  .dashboard { height: auto; }
  .topbar { flex-wrap: wrap; height: auto; padding: 12px 24px; gap: 12px; }
  .metrics { gap: 20px; justify-content: flex-start; }
  .grid { grid-template-columns: 1fr; grid-template-rows: none; }
  .left, .right, .bottom, .map-wrap { grid-column: 1; grid-row: auto; }
  .map-wrap { height: 420px; }
  .bottom { grid-template-columns: 1fr; }
  .chart { height: 220px; flex: none; }
  .chart.wide { height: 200px; flex: none; }
}
</style>
