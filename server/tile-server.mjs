// 自托管矢量瓦片服务：把 planetiler 产出的 MBTiles 按 XYZ 协议发布出去。
// 只用 Node 24 内置 node:sqlite 读瓦片，无额外原生依赖。
//   GET /tiles/{z}/{x}/{y}.pbf   —— MVT 瓦片（gzip）
//   GET /tiles/tilejson.json     —— TileJSON 元数据（含 vector_layers）
//   GET /health                  —— 健康检查
import express from 'express';
import { DatabaseSync } from 'node:sqlite';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MBTILES = process.env.MBTILES ?? path.join(__dirname, '..', 'tiles', 'china.mbtiles');
const PORT = Number(process.env.TILE_PORT ?? 3112);
const PUBLIC_BASE = process.env.TILE_PUBLIC_BASE ?? `http://localhost:${PORT}`;

if (!existsSync(MBTILES)) {
  console.error(`MBTiles 不存在: ${MBTILES}`);
  process.exit(1);
}

const db = new DatabaseSync(MBTILES, { readOnly: true });
const getTile = db.prepare(
  'SELECT tile_data FROM tiles WHERE zoom_level = ? AND tile_column = ? AND tile_row = ?');
const metadata = Object.fromEntries(
  db.prepare('SELECT name, value FROM metadata').all().map((r) => [r.name, r.value]));
const vectorLayers = metadata.json ? (JSON.parse(metadata.json).vector_layers ?? []) : [];

const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/tiles/:z/:x/:file', (req, res) => {
  const z = Number(req.params.z);
  const x = Number(req.params.x);
  const m = /^(\d+)\.pbf$/.exec(req.params.file);
  if (!Number.isInteger(z) || !Number.isInteger(x) || !m) return res.status(400).end();
  const y = Number(m[1]);
  const tmsRow = 2 ** z - 1 - y; // XYZ（左上原点）→ TMS（左下原点），MBTiles 存的是 TMS 行号
  const row = getTile.get(z, x, tmsRow);
  if (!row?.tile_data) return res.status(204).end(); // 该瓦片无数据
  res.setHeader('Content-Type', 'application/x-protobuf');
  res.setHeader('Content-Encoding', 'gzip'); // planetiler 输出即为 gzip 压缩的 MVT
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.end(Buffer.from(row.tile_data));
});

app.get('/tiles/tilejson.json', (req, res) => {
  res.json({
    tilejson: '3.0.0',
    name: metadata.name ?? 'china',
    format: 'pbf',
    scheme: 'xyz',
    tiles: [`${PUBLIC_BASE}/tiles/{z}/{x}/{y}.pbf`],
    minzoom: Number(metadata.minzoom ?? 0),
    maxzoom: Number(metadata.maxzoom ?? 14),
    bounds: (metadata.bounds ?? '-180,-85,180,85').split(',').map(Number),
    vector_layers: vectorLayers,
    attribution: metadata.attribution ?? '© OpenStreetMap contributors',
  });
});

app.get('/health', (req, res) => {
  res.json({
    ok: true,
    mbtiles: path.basename(MBTILES),
    vector_layers: vectorLayers.length,
    minzoom: Number(metadata.minzoom ?? 0),
    maxzoom: Number(metadata.maxzoom ?? 14),
  });
});

// 字形端点：MapLibre 规范要求 style.glyphs 必须存在才能使用文字图层。
// 中文（CJK）由 MapLibre 的 localIdeographFontFamily 用浏览器本地字体现场生成 SDF，不会请求这里；
// 这里返回"合法但为空"的 fontstack PBF，只为满足规范校验（非中文字符将不可见）。
function emptyFontstackPbf(name, range) {
  const enc = new TextEncoder();
  const nameB = enc.encode(name);
  const rangeB = enc.encode(range);
  const buf = new Uint8Array(2 + nameB.length + 2 + rangeB.length);
  let o = 0;
  buf[o++] = 0x0a; buf[o++] = nameB.length; buf.set(nameB, o); o += nameB.length;
  buf[o++] = 0x12; buf[o++] = rangeB.length; buf.set(rangeB, o);
  return buf;
}

app.get('/fonts/:fontstack/:range', (req, res) => {
  const range = req.params.range.replace(/\.pbf$/, '');
  const name = decodeURIComponent(req.params.fontstack);
  res.setHeader('Content-Type', 'application/x-protobuf');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.end(Buffer.from(emptyFontstackPbf(name, range)));
});

app.listen(PORT, () => {
  console.log(`瓦片服务已启动: ${PUBLIC_BASE}/tiles/{z}/{x}/{y}.pbf`);
  console.log(`  MBTiles: ${MBTILES}`);
  console.log(`  图层数: ${vectorLayers.length}`);
});
