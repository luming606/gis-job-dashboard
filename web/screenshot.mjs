// 仪表盘截图工具：headless Chrome 打开本地看板 → 等瓦片就绪 → 截图 + 收集前端错误
// 用法：node screenshot.mjs [url] [outfile] [waitMs]
import { chromium } from 'playwright-core';

const url = process.argv[2] ?? 'http://localhost:5173';
const out = process.argv[3] ?? 'shot-dashboard.png';
const waitMs = Number(process.argv[4] ?? 14000);
const exePath = process.env.BROWSER_PATH
  ?? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const browser = await chromium.launch({ executablePath: exePath, headless: true });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

const consoleErrors = [];
page.on('console', (m) => {
  if (m.type() === 'error') consoleErrors.push(m.text().slice(0, 300));
});
page.on('pageerror', (e) => consoleErrors.push('PAGEERROR: ' + String(e).slice(0, 300)));

await page.goto(url, { waitUntil: 'load', timeout: 45000 });
await page.waitForTimeout(waitMs); // 等矢量瓦片与图表渲染

const pageErrs = await page.evaluate(() => window.__errs ?? []);
const tileRequests = await page.evaluate(() =>
  performance.getEntriesByType('resource')
    .filter((r) => r.name.includes(':3112'))
    .map((r) => ({ url: r.name.split('/tiles/')[1] ?? r.name, status: r.responseStatus ?? 0, size: r.transferSize }))
    .slice(0, 8));

console.log('JS errors:', JSON.stringify(pageErrs));
console.log('console errors:', JSON.stringify(consoleErrors.slice(0, 5)));
console.log('tile requests (from page):', JSON.stringify(tileRequests));

await page.screenshot({ path: out });
console.log('screenshot saved:', out);
await browser.close();
