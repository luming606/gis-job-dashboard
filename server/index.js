import express from 'express';
import cors from 'cors';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jobs = JSON.parse(
  readFileSync(path.join(__dirname, '..', 'data', 'staged_jobs.json'), 'utf-8'));

const app = express();
app.use(cors());

const valid = jobs.filter((j) => j.lng != null);
const salaryJobs = jobs.filter((j) => j.salary_daily != null);

function toFeature(j) {
  return {
    type: 'Feature',
    geometry: { type: 'Point', coordinates: [j.lng, j.lat] },
    properties: {
      company: j.company, title: j.title, city: j.city, province: j.province,
      job_type: j.job_type, salary_raw: j.salary_raw, salary_daily: j.salary_daily,
      skills: j.skills, geo_level: j.geo_level, collected_date: j.collected_date,
    },
  };
}

// 岗位打点/热力源（GCJ-02，与高德底图一致）
app.get('/api/jobs', (req, res) => {
  const { city, job_type } = req.query;
  let rows = valid;
  if (city) rows = rows.filter((j) => j.city === city);
  if (job_type) rows = rows.filter((j) => j.job_type === job_type);
  res.json({ type: 'FeatureCollection', features: rows.map(toFeature) });
});

// 顶部指标牌
app.get('/api/stats/overview', (req, res) => {
  const cities = new Set(jobs.map((j) => j.city));
  const avgDaily = salaryJobs.length
    ? salaryJobs.reduce((s, j) => s + j.salary_daily, 0) / salaryJobs.length : 0;
  const dates = jobs.map((j) => j.collected_date).filter(Boolean).sort();
  res.json({
    total: jobs.length,
    geocoded: valid.length,
    city_count: cities.size,
    province_count: new Set(jobs.map((j) => j.province)).size,
    avg_daily_salary: Math.round(avgDaily),
    last_collected: dates[dates.length - 1] || null,
  });
});

// 薪资箱线数据（分城市/岗位类型），分位数用排序取位法
function box(values) {
  const v = values.slice().sort((a, b) => a - b);
  if (!v.length) return null;
  const q = (p) => {
    const i = (v.length - 1) * p, lo = Math.floor(i), hi = Math.ceil(i);
    return v[lo] + (v[hi] - v[lo]) * (i - lo);
  };
  return {
    min: v[0], q1: q(0.25), median: q(0.5), q3: q(0.75), max: v[v.length - 1],
    count: v.length,
  };
}

app.get('/api/stats/salary', (req, res) => {
  const groupBy = req.query.group_by === 'job_type' ? 'job_type' : 'city';
  const groups = {};
  for (const j of salaryJobs) {
    (groups[j[groupBy]] ??= []).push(j.salary_daily);
  }
  res.json(Object.fromEntries(
    Object.entries(groups).map(([k, v]) => [k, box(v)])));
});

// 技能词频 + 共现
app.get('/api/stats/skills', (req, res) => {
  const top = Math.min(parseInt(req.query.top) || 30, 100);
  const freq = {}, cooc = {};
  for (const j of jobs) {
    const skills = [...new Set(j.skills || [])];
    for (const s of skills) freq[s] = (freq[s] || 0) + 1;
    for (let i = 0; i < skills.length; i++)
      for (let k = i + 1; k < skills.length; k++) {
        const key = [skills[i], skills[k]].sort().join('|');
        cooc[key] = (cooc[key] || 0) + 1;
      }
  }
  const topSkills = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, top);
  res.json({
    freq: Object.fromEntries(topSkills),
    cooc: Object.fromEntries(Object.entries(cooc).sort((a, b) => b[1] - a[1]).slice(0, 100)),
  });
});

// 城市岗位数排行
app.get('/api/stats/city_rank', (req, res) => {
  const counts = {};
  for (const j of jobs) counts[j.city] = (counts[j.city] || 0) + 1;
  res.json(Object.entries(counts).sort((a, b) => b[1] - a[1])
    .map(([city, count]) => ({ city, count })));
});

// 按采集日期的时间线
app.get('/api/stats/timeline', (req, res) => {
  const counts = {};
  for (const j of jobs) {
    if (!j.collected_date) continue;
    counts[j.collected_date] = (counts[j.collected_date] || 0) + 1;
  }
  res.json(Object.entries(counts).sort().map(([date, count]) => ({ date, count })));
});

// 区域分级统计（省级/市级计数）；面 GeoJSON 由前端 join 本地边界文件
app.get('/api/region-heat', (req, res) => {
  const level = req.query.level === 'city' ? 'city' : 'province';
  const key = level === 'city' ? 'city' : 'province';
  const counts = {};
  for (const j of jobs) {
    if (j[key]) counts[j[key]] = (counts[j[key]] || 0) + 1;
  }
  res.json({ level, counts });
});

const PORT = process.env.PORT || 3111;
app.listen(PORT, () => console.log(`API ready: http://localhost:${PORT} (${jobs.length} jobs)`));
