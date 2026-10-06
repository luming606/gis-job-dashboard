// GCJ-02 ↔ WGS-84 坐标转换（与 etl/gcj02.py 同一套国测局算法，迭代法逆转换）
// 用途：自托管 OSM 底图是 WGS-84，看板数据是 GCJ-02，切底图时把数据转到 WGS-84 保持对齐。
const A = 6378245.0;
const EE = 0.00669342162296594323;

function outOfChina(lng, lat) {
  return !(lng > 73.66 && lng < 135.05 && lat > 3.86 && lat < 53.55);
}

function transformLat(x, y) {
  let ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
  ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
  ret += (20.0 * Math.sin(y * Math.PI) + 40.0 * Math.sin(y / 3.0 * Math.PI)) * 2.0 / 3.0;
  ret += (160.0 * Math.sin(y / 12.0 * Math.PI) + 320.0 * Math.sin(y * Math.PI / 30.0)) * 2.0 / 3.0;
  return ret;
}

function transformLng(x, y) {
  let ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
  ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
  ret += (20.0 * Math.sin(x * Math.PI) + 40.0 * Math.sin(x / 3.0 * Math.PI)) * 2.0 / 3.0;
  ret += (150.0 * Math.sin(x / 12.0 * Math.PI) + 300.0 * Math.sin(x / 30.0 * Math.PI)) * 2.0 / 3.0;
  return ret;
}

export function wgs84ToGcj02(lng, lat) {
  if (outOfChina(lng, lat)) return [lng, lat];
  let dLat = transformLat(lng - 105.0, lat - 35.0);
  let dLng = transformLng(lng - 105.0, lat - 35.0);
  const radLat = (lat / 180.0) * Math.PI;
  let magic = Math.sin(radLat);
  magic = 1 - EE * magic * magic;
  const sqrtMagic = Math.sqrt(magic);
  dLat = (dLat * 180.0) / (((A * (1 - EE)) / (magic * sqrtMagic)) * Math.PI);
  dLng = (dLng * 180.0) / ((A / sqrtMagic) * Math.cos(radLat) * Math.PI);
  return [lng + dLng, lat + dLat];
}

export function gcj02ToWgs84(lng, lat) {
  if (outOfChina(lng, lat)) return [lng, lat];
  let wlng = lng, wlat = lat;
  for (let i = 0; i < 3; i++) {
    const [glng, glat] = wgs84ToGcj02(wlng, wlat);
    wlng += lng - glng;
    wlat += lat - glat;
  }
  return [Number(wlng.toFixed(6)), Number(wlat.toFixed(6))];
}

// 就地转换任意 GeoJSON 的坐标数组（Point / LineString / Polygon / Multi* 都覆盖）
function convertCoords(coords, depth) {
  if (depth === 0) return gcj02ToWgs84(coords[0], coords[1]);
  return coords.map((c) => convertCoords(c, depth - 1));
}

export function gcj02GeoJsonToWgs84(geojson) {
  const walk = (geom) => {
    if (!geom) return geom;
    switch (geom.type) {
      case 'Point':
        return { ...geom, coordinates: gcj02ToWgs84(geom.coordinates[0], geom.coordinates[1]) };
      case 'MultiPoint':
      case 'LineString':
        return { ...geom, coordinates: convertCoords(geom.coordinates, 1) };
      case 'MultiLineString':
      case 'Polygon':
        return { ...geom, coordinates: convertCoords(geom.coordinates, 2) };
      case 'MultiPolygon':
        return { ...geom, coordinates: convertCoords(geom.coordinates, 3) };
      case 'GeometryCollection':
        return { ...geom, geometries: geom.geometries.map(walk) };
      default:
        return geom;
    }
  };
  return {
    ...geojson,
    features: geojson.features.map((f) => ({ ...f, geometry: walk(f.geometry) })),
  };
}
