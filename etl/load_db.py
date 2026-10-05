"""staged_jobs.json → PostGIS 入库（幂等：cities 按城市名、jobs 按 source_url upsert）。

前置：docker compose up 起库（自动执行 db/init.sql），然后:
  set DATABASE_URL=postgresql://postgres:postgres@localhost:5432/gisjobs
  python load_db.py
"""
import json
import os

import psycopg2

BASE = os.path.dirname(os.path.abspath(__file__))
STAGED = os.path.join(BASE, '..', 'data', 'staged_jobs.json')
DATABASE_URL = os.environ.get(
    'DATABASE_URL', 'postgresql://postgres:postgres@localhost:5432/gisjobs')

JOB_SQL = """
INSERT INTO jobs (company, title, city_id, address, job_type,
                  salary_raw, salary_min, salary_max, salary_unit, salary_daily,
                  skills, lng, lat, geom, geo_level,
                  source_url, source_site, collected_date)
VALUES (%s, %s, %s, %s, %s,
        %s, %s, %s, %s, %s,
        %s, %s, %s, ST_SetSRID(ST_MakePoint(%s, %s), 4326), %s,
        %s, %s, %s)
ON CONFLICT (source_url, company, title) DO UPDATE SET
  company = EXCLUDED.company, title = EXCLUDED.title, city_id = EXCLUDED.city_id,
  address = EXCLUDED.address, job_type = EXCLUDED.job_type,
  salary_raw = EXCLUDED.salary_raw, salary_min = EXCLUDED.salary_min,
  salary_max = EXCLUDED.salary_max, salary_unit = EXCLUDED.salary_unit,
  salary_daily = EXCLUDED.salary_daily, skills = EXCLUDED.skills,
  lng = EXCLUDED.lng, lat = EXCLUDED.lat, geom = EXCLUDED.geom,
  geo_level = EXCLUDED.geo_level, source_site = EXCLUDED.source_site,
  collected_date = EXCLUDED.collected_date
"""

CITY_SQL = """
INSERT INTO cities (name, province, lng, lat, geom)
VALUES (%s, %s, %s, %s, ST_SetSRID(ST_MakePoint(%s, %s), 4326))
ON CONFLICT (name) DO UPDATE SET province = EXCLUDED.province
RETURNING id
"""


def main():
    with open(STAGED, encoding='utf-8') as f:
        jobs = json.load(f)
    if not jobs:
        raise SystemExit('staged_jobs.json 为空，先跑 pipeline.py')

    conn = psycopg2.connect(DATABASE_URL)
    try:
        with conn:
            with conn.cursor() as cur:
                city_ids = {}
                for j in jobs:
                    city = j['city']
                    if city not in city_ids:
                        cur.execute(CITY_SQL, (city, j['province'],
                                               j.get('lng'), j.get('lat'),
                                               j.get('wgs_lng'), j.get('wgs_lat')))
                        city_ids[city] = cur.fetchone()[0]
                    cur.execute(JOB_SQL, (
                        j['company'], j['title'], city_ids[city], j['address'],
                        j['job_type'], j['salary_raw'], j['salary_min'],
                        j['salary_max'], j['salary_unit'], j['salary_daily'],
                        j['skills'], j.get('lng'), j.get('lat'),
                        j.get('wgs_lng'), j.get('wgs_lat'), j['geo_level'],
                        j['source_url'], j['source_site'] or None,
                        j['collected_date'] or None))
        with conn.cursor() as cur:
            cur.execute('SELECT count(*) FROM jobs')
            total = cur.fetchone()[0]
            cur.execute("SELECT count(DISTINCT province) FROM cities JOIN jobs ON jobs.city_id = cities.id")
            provs = cur.fetchone()[0]
        print(f'入库完成：jobs 总数 {total}，覆盖省份 {provs}')
    finally:
        conn.close()


if __name__ == '__main__':
    main()
