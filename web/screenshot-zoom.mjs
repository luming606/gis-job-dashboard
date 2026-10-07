// README 截图生成：先截全国视角，再放大到武汉城市级（等 initMap 全链路就绪）
// 用法：node screenshot-zoom.mjs [url]
import { chromium } from 'playwright-core';

const url = process.argv[2] ?? 'http://localhost:5173';
const exePath = process.env.BROWSER_PATH
  ?? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const browser = await chromium.launch({ executablePath: exePath, headless: true });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
const errors = [];
page.on('pageerror', (e) => errors.push(String(e).slice(0, 200)));

await page.goto(url, { waitUntil: 'load', timeout: 45000 });
// initMap 全链路（瓦片服务 + 坐标转换 + 4 图表）在本机需 25-40 秒
await page.waitForTimeout(38000);
await page.screenshot({ path: 'docs/dashboard-national.png' });
console.log('national view saved (docs/dashboard-national.png)');

// 鼠标移到武汉位置（屏幕坐标约 1010,555）滚轮放大 → 城市级视角
await page.mouse.move(1010, 555);
for (let i = 0; i < 6; i++) {
  await page.mouse.wheel(0, -420);
  await page.waitForTimeout(500);
}
await page.waitForTimeout(10000); // 等城市级瓦片加载

const pageErrs = await page.evaluate(() => window.__errs ?? []);
console.log('JS errors:', JSON.stringify(pageErrs));
await page.screenshot({ path: 'docs/dashboard-city-zoom.png' });
console.log('city zoom view saved (docs/dashboard-city-zoom.png)');

await browser.close();
