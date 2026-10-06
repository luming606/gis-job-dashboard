import express from 'express';
import cors from 'cors';
import pg from 'pg';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 简易 .env 加载（DATABASE_URL 等），避免引入 dotenv 依赖
const envPath = path.join(__dirname, '..', '.env');
try {
  for (const line of readFileSync(envPath, 'utf-8').split(/\r?\n/)) {
    const m = line.match(/^([A-Z_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
} catch { /* .env 不存在时用环境变量 */ }

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const query = (text, params) => pool.query(text, params);

const app = express();
app.use(cors());

// Express 4 的 async 路由抛错不会进错误中间件，统一包一层
const wrap = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
const route = (path, fn) => app.get(path, wrap(fn));

// 岗位打点/热力源（GCJ-02，与高德底图/DataV 边界一致）
route('/api/jobs', async (req, res) => {
  const { city, job_type } = req.query;
  const { rows } = await query(
    `SELECT j.company, j.title, c.name AS city, c.province, j.job_type,
            j.salary_raw, j.salary_daily, j.skills, j.geo_level,
            j.collected_date::text, j.lng, j.lat
       FROM jobs j JOIN cities c ON c.id = j.city_id
      WHERE ($1::text IS NULL OR c.name = $1)
        AND ($2::text IS NULL OR j.job_type = $2)`,
    [city || null, job_type || null]);
  res.json({
    type: 'FeatureCollection',
    features: rows.map((r) => ({
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [Number(r.lng), Number(r.lat)] },
      properties: {
        company: r.company, title: r.title, city: r.city, province: r.province,
        job_type: r.job_type, salary_raw: r.salary_raw,
        salary_daily: r.salary_daily && Number(r.salary_daily),
        skills: r.skills, geo_level: r.geo_level, collected_date: r.collected_date,
      },
    })),
  });
});

// 顶部指标牌
route('/api/stats/overview', async (req, res) => {
  const { rows: [o] } = await query(
    `SELECT count(*)::int total, count(j.geom)::int geocoded,
            count(DISTINCT c.name)::int city_count,
            count(DISTINCT c.province)::int province_count,
            round(avg(j.salary_daily))::int avg_daily_salary,
            max(j.collected_date)::text last_collected
       FROM jobs j JOIN cities c ON c.id = j.city_id`);
  res.json(o);
});

// 薪资箱线数据（分城市/岗位类型）：分位数用 PostgreSQL percentile_cont 在库内计算
route('/api/stats/salary', async (req, res) => {
  const col = req.query.group_by === 'job_type' ? 'j.job_type' : 'c.name';
  const { rows } = await query(
    `SELECT ${col} AS key,
            min(j.salary_daily)::float8 min, max(j.salary_daily)::float8 max,
            percentile_cont(ARRAY[0.25, 0.5, 0.75]) WITHIN GROUP
              (ORDER BY j.salary_daily) AS q,
            count(*)::int count
       FROM jobs j JOIN cities c ON c.id = j.city_id
      WHERE j.salary_daily IS NOT NULL
      GROUP BY 1`);
  const out = {};
  for (const r of rows) {
    out[r.key] = { min: r.min, q1: r.q[0], median: r.q[1], q3: r.q[2], max: r.max, count: r.count };
  }
  res.json(out);
});

// 技能词频 + 共现（同岗位技能两两组合，数组自连接）
route('/api/stats/skills', async (req, res) => {
  const top = Math.min(parseInt(req.query.top) || 30, 100);
  const [{ rows: freqRows }, { rows: coocRows }] = await Promise.all([
    query(
      `SELECT skill, count(*)::int cnt
         FROM (SELECT unnest(skills) AS skill FROM jobs) t
        GROUP BY 1 ORDER BY 2 DESC LIMIT $1`, [top]),
    query(
      `SELECT a || '|' || b AS pair, count(*)::int cnt
         FROM jobs j, unnest(skills) a, unnest(skills) b
        WHERE a < b
        GROUP BY 1 ORDER BY 2 DESC LIMIT 100`),
  ]);
  res.json({
    freq: Object.fromEntries(freqRows.map((r) => [r.skill, r.cnt])),
    cooc: Object.fromEntries(coocRows.map((r) => [r.pair, r.cnt])),
  });
});

// 城市岗位数排行
route('/api/stats/city_rank', async (req, res) => {
  const { rows } = await query(
    `SELECT c.name AS city, count(*)::int count
       FROM jobs j JOIN cities c ON c.id = j.city_id
      GROUP BY 1 ORDER BY 2 DESC`);
  res.json(rows);
});

// 按采集日期的时间线
route('/api/stats/timeline', async (req, res) => {
  const { rows } = await query(
    `SELECT collected_date::text date, count(*)::int count
       FROM jobs WHERE collected_date IS NOT NULL
      GROUP BY 1 ORDER BY 1`);
  res.json(rows);
});

// 区域分级统计（省级/市级计数）
route('/api/region-heat', async (req, res) => {
  const level = req.query.level === 'city' ? 'city' : 'province';
  const col = level === 'city' ? 'c.name' : 'c.province';
  const { rows } = await query(
    `SELECT ${col} AS region, count(*)::int count
       FROM jobs j JOIN cities c ON c.id = j.city_id
      GROUP BY 1`);
  res.json({ level, counts: Object.fromEntries(rows.map((r) => [r.region, r.count])) });
});

// 城市间岗位流向示意：非头部城市 → 省内最大集聚地（无则最近的全国头部城市）
function haversine(a, b) {
  const R = 6371, rad = (d) => (d * Math.PI) / 180;
  const dLat = rad(b[1] - a[1]), dLng = rad(b[0] - a[0]);
  const h = Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(a[1])) * Math.cos(rad(b[1])) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

route('/api/flows', async (req, res) => {
  const { rows } = await query(
    `SELECT c.name, c.province, c.lng::float8 lng, c.lat::float8 lat, count(*)::int count
       FROM cities c JOIN jobs j ON j.city_id = c.id
      WHERE c.lng IS NOT NULL
      GROUP BY c.id, c.name, c.province, c.lng, c.lat
      ORDER BY count DESC`);
  const hubs = rows.slice(0, 5);
  const features = [];
  for (const c of rows.slice(5)) {
    const inProvince = hubs.find((h) => h.province === c.province);
    let target = inProvince;
    if (!target) {
      let best = Infinity;
      for (const h of hubs) {
        const d = haversine([c.lng, c.lat], [h.lng, h.lat]);
        if (d < best) { best = d; target = h; }
      }
    }
    features.push({
      type: 'Feature',
      geometry: { type: 'LineString', coordinates: [[c.lng, c.lat], [target.lng, target.lat]] },
      properties: { from: c.name, to: target.name, count: c.count },
    });
  }
  res.json({ type: 'FeatureCollection', features });
});

// 统一错误处理
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: String(err.message || err) });
});

const PORT = process.env.PORT || 3111;
pool.query('SELECT count(*) FROM jobs').then(
  ({ rows: [c] }) => console.log(`API ready: http://localhost:${PORT} (${c.count} jobs from PostGIS)`),
  (e) => console.error('DB not reachable:', e.message));
app.listen(PORT);
