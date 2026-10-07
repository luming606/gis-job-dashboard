// 探针：打开静态页，列出 static-tiles 相关网络请求与控制台全部消息
import { chromium } from 'playwright-core';

const url = process.argv[2] ?? 'http://localhost:4173';
const waitMs = Number(process.argv[3] ?? 20000);
const exePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const browser = await chromium.launch({ executablePath: exePath, headless: true });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
page.on('console', (m) => console.log(`[${m.type()}] ` + m.text().slice(0, 200)));
page.on('pageerror', (e) => console.log('[pageerror] ' + String(e).slice(0, 300)));
page.on('response', (r) => {
  if (r.url().includes('static-tiles') && !r.url().endsWith('tiles.json')) {
    console.log(`[net] ${r.status()} ${r.url().split('/static-tiles/')[1]}`);
  }
});

await page.goto(url, { waitUntil: 'load', timeout: 45000 });
await page.waitForTimeout(waitMs);

const probe = await page.evaluate(() => ({
  resources: performance.getEntriesByType('resource')
    .filter((r) => r.name.includes('static-tiles')).length,
  canvases: [...document.querySelectorAll('canvas')].length,
  glyphFails: 0,
}));
console.log('probe:', JSON.stringify(probe));
await browser.close();
