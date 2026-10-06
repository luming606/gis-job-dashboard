// 增强截图：先截全国视角，再放大到武汉/长三角城市级验证底图与数据对齐
import { chromium } from 'playwright-core';

const url = process.argv[2] ?? 'http://localhost:5173';
const exePath = process.env.BROWSER_PATH
  ?? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const browser = await chromium.launch({ executablePath: exePath, headless: true });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
const errors = [];
page.on('pageerror', (e) => errors.push(String(e).slice(0, 200)));

await page.goto(url, { waitUntil: 'load', timeout: 45000 });
await page.waitForTimeout(14000);
await page.screenshot({ path: 'shot-1-national.png' });
console.log('national view saved');

// 鼠标移到武汉位置（屏幕坐标约 1000,550）滚轮放大 6 级 → 城市级视角
await page.mouse.move(1010, 555);
for (let i = 0; i < 6; i++) {
  await page.mouse.wheel(0, -420);
  await page.waitForTimeout(500);
}
await page.waitForTimeout(8000); // 等城市级瓦片加载

const pageErrs = await page.evaluate(() => window.__errs ?? []);
const tileMiss = await page.evaluate(() =>
  performance.getEntriesByType('resource')
    .filter((r) => r.name.includes(':3112/tiles/'))
    .length);
console.log('JS errors:', JSON.stringify(pageErrs), '| tile requests observed:', tileMiss);
await page.screenshot({ path: 'shot-2-city-zoom.png' });
console.log('city zoom view saved');

await browser.close();
