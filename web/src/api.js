// 数据获取层：优先请求在线 API；不可用时自动回退到构建期导出的静态 JSON。
// 这样同一份代码既能跑本地全栈（localhost:3111），也能部署为 GitHub Pages 纯静态站。
let mode = null; // 'api' | 'static'

const STATIC_BASE = import.meta.env.BASE_URL + 'static-data/';

// apiPath → 静态文件名的映射（查询参数不同的端点分开导出）
const STATIC_FILES = {
  '/api/jobs': 'jobs.json',
  '/api/stats/overview': 'overview.json',
  '/api/stats/salary?group_by=city': 'salary-city.json',
  '/api/stats/salary?group_by=job_type': 'salary-job-type.json',
  '/api/stats/skills?top=30': 'skills.json',
  '/api/stats/city_rank': 'city-rank.json',
  '/api/stats/timeline': 'timeline.json',
  '/api/region-heat?level=province': 'region-heat-province.json',
  '/api/stats/province-stats': 'province-stats.json',
  '/api/flows': 'flows.json',
};

async function detectMode() {
  if (mode) return mode;
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 1500);
    const res = await fetch('/api/stats/overview', { signal: ctrl.signal });
    clearTimeout(timer);
    mode = res.ok ? 'api' : 'static';
  } catch {
    mode = 'static';
  }
  return mode;
}

export async function getJson(apiPath) {
  if ((await detectMode()) === 'api') {
    const res = await fetch(apiPath);
    if (!res.ok) throw new Error(`${apiPath} -> HTTP ${res.status}`);
    return res.json();
  }
  const file = STATIC_FILES[apiPath];
  if (!file) throw new Error(`no static export for ${apiPath}`);
  const res = await fetch(STATIC_BASE + file);
  return res.json();
}
