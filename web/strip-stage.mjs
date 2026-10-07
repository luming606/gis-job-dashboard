// 移除 App.vue / map.js 中的 window.__stage 调试标记行
import { readFileSync, writeFileSync } from 'node:fs';

for (const file of ['src/App.vue', 'src/map.js']) {
  const lines = readFileSync(file, 'utf8').split('\n');
  const cleaned = lines.filter((l) => !l.includes('window.__stage'));
  writeFileSync(file, cleaned.join('\n'));
  console.log(file, ':', lines.length - cleaned.length, 'marker lines removed');
}
