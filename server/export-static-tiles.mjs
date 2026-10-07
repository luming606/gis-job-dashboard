// 把 MBTiles 里 z≤6 的中国区域矢量瓦片烘焙成静态 pbf 文件 + tiles.json 清单，
// 供 GitHub Pages 纯静态部署使用（无需瓦片服务）。
// 注意：planetiler 在 MBTiles 里存的是 gzip 压缩的 MVT；静态托管无法发 Content-Encoding: gzip 头，
// 必须在此解压成裸 pbf，否则 MapLibre 解析会报 Error。
// 用法：node export-static-tiles.mjs   （产物：web/public/static-tiles/）
import { DatabaseSync } from 'node:sqlite';
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MBTILES = path.join(__dirname, '..', 'tiles', 'china.mbtiles');
const OUT = path.join(__dirname, '..', 'web', 'public', 'static-tiles');
const MAX_ZOOM = 6;
// 中国粗边界（含南海诸岛余量），减少无关瓦片
const BBOX = { minLng: 72, minLat: 2, maxLng: 136, maxLat: 55 };

const db = new DatabaseSync(MBTILES, { readOnly: true });

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const rows = db.prepare(
  'SELECT zoom_level z, tile_column x, tile_row y, tile_data d FROM tiles WHERE zoom_level <= ?')
  .all(MAX_ZOOM);

const tiles = [];
let bytes = 0;
for (const r of rows) {
  // TMS 行号 → XYZ 行号；纬度换算必须用 XYZ 行号（此前误用 TMS 行号导致纬度南北翻转、全部被滤掉）
  const yXyz = 2 ** r.z - 1 - r.y;
  const n = 2 ** r.z;
  const lngMin = (r.x / n) * 360 - 180;
  const lngMax = ((r.x + 1) / n) * 360 - 180;
  const latMax = Math.atan(Math.sinh(Math.PI * (1 - 2 * yXyz / n))) * 180 / Math.PI;
  const latMin = Math.atan(Math.sinh(Math.PI * (1 - 2 * (yXyz + 1) / n))) * 180 / Math.PI;
  if (lngMax < BBOX.minLng || lngMin > BBOX.maxLng || latMax < BBOX.minLat || latMin > BBOX.maxLat) continue;

  const dir = path.join(OUT, String(r.z), String(r.x));
  mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${yXyz}.pbf`);
  let buf = Buffer.from(r.d);
  if (buf[0] === 0x1f && buf[1] === 0x8b) buf = gunzipSync(buf); // gzip → 裸 MVT
  writeFileSync(file, buf);
  bytes += buf.length;
  tiles.push(`./static-tiles/${r.z}/${r.x}/${yXyz}.pbf`);
}

writeFileSync(path.join(OUT, 'tiles.json'), JSON.stringify({ tiles }));
console.log(`烘焙完成：${tiles.length} 块瓦片（z≤${MAX_ZOOM}），共 ${(bytes / 1024 / 1024).toFixed(1)} MB → ${OUT}`);
