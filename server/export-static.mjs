// 把 API 各端点导出为静态 JSON，供 GitHub Pages 离线模式使用。
// 前置：API 服务已启动（node index.js / start_dashboard.bat）
// 用法：node export-static.mjs   （产物：web/public/static-data/*.json）
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API = process.env.API_BASE || 'http://localhost:3111';
const OUT = path.join(__dirname, '..', 'web', 'public', 'static-data');

const TARGETS = [
  ['jobs', '/api/jobs'],
  ['overview', '/api/stats/overview'],
  ['salary-city', '/api/stats/salary?group_by=city'],
  ['salary-job-type', '/api/stats/salary?group_by=job_type'],
  ['skills', '/api/stats/skills?top=30'],
  ['city-rank', '/api/stats/city_rank'],
  ['timeline', '/api/stats/timeline'],
  ['region-heat-province', '/api/region-heat?level=province'],
  ['flows', '/api/flows'],
];

mkdirSync(OUT, { recursive: true });
for (const [name, apiPath] of TARGETS) {
  const res = await fetch(API + apiPath);
  if (!res.ok) throw new Error(`${apiPath} -> HTTP ${res.status}`);
  const data = await res.json();
  writeFileSync(path.join(OUT, `${name}.json`), JSON.stringify(data));
  console.log(`  ${name}.json  (${Math.round(JSON.stringify(data).length / 1024)} KB)`);
}
console.log(`static export done -> ${OUT}`);
