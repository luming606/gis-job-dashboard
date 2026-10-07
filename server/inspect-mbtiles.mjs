import { DatabaseSync } from 'node:sqlite';
const db = new DatabaseSync('../tiles/china.mbtiles', { readOnly: true });
const dist = db.prepare('SELECT zoom_level z, count(*) c FROM tiles GROUP BY zoom_level ORDER BY z').all();
console.log('dist:', JSON.stringify(dist));
console.log('meta:', JSON.stringify(db.prepare("SELECT name, value FROM metadata WHERE name IN ('minzoom','maxzoom')").all()));
