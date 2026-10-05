-- GIS 求职市场大屏 建表脚本（PostGIS 3.x）
-- 坐标系约定：lng/lat = GCJ-02（前端展示，与高德底图/DataV 边界一致）
--             geom   = WGS-84 SRID 4326（空间分析，ST_DWithin 等）

CREATE TABLE IF NOT EXISTS cities (
  id       serial PRIMARY KEY,
  name     text NOT NULL UNIQUE,
  province text NOT NULL,
  adcode   text,
  lng      double precision,
  lat      double precision,
  geom     geometry(Point, 4326)
);

CREATE TABLE IF NOT EXISTS jobs (
  id             serial PRIMARY KEY,
  company        text NOT NULL,
  title          text NOT NULL,
  city_id        int REFERENCES cities(id),
  address        text,
  job_type       text CHECK (job_type IN ('intern', 'campus', 'social')),
  salary_raw     text,
  salary_min     numeric,
  salary_max     numeric,
  salary_unit    text,
  salary_daily   numeric,
  skills         text[],
  lng            double precision,
  lat            double precision,
  geom           geometry(Point, 4326),
  geo_level      text,
  source_url     text,
  source_site    text,
  collected_date date,
  created_at     timestamptz DEFAULT now(),
  -- 搜索结果常只给站点域名而非详情页链接，单独 url 不足以标识岗位，
  -- 因此唯一键放宽为 url+公司+岗位（pipeline 内另有 city 维度去重兜底）
  CONSTRAINT jobs_unique UNIQUE (source_url, company, title)
);

CREATE INDEX IF NOT EXISTS jobs_geom_gix ON jobs USING gist(geom);
CREATE INDEX IF NOT EXISTS jobs_city_idx ON jobs(city_id);
CREATE INDEX IF NOT EXISTS jobs_type_idx ON jobs(job_type);
CREATE INDEX IF NOT EXISTS jobs_skills_gin ON jobs USING gin(skills);
