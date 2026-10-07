// 调试版：打印全部 console 消息与页面错误
// 用法：node screenshot-debug.mjs [url] [outfile] [waitMs]
import { chromium } from 'playwright-core';

const url = process.argv[2] ?? 'http://localhost:5173';
const out = process.argv[3] ?? 'shot-debug.png';
const waitMs = Number(process.argv[4] ?? 14000);
const exePath = process.env.BROWSER_PATH
  ?? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const browser = await chromium.launch({ executablePath: exePath, headless: true });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

page.on('console', (m) => {
  if (m.type() !== 'log' && m.type() !== 'debug') {
    console.log(`[console.${m.type()}] ` + m.text().slice(0, 400));
  }
});
page.on('pageerror', (e) => console.log('[pageerror] ' + String(e).slice(0, 500)));

await page.goto(url, { waitUntil: 'load', timeout: 45000 });
await page.waitForTimeout(waitMs);

const state = await page.evaluate(() => ({
  errs: window.__errs ?? [],
  stage: window.__stage ?? 'NO STAGE',
  chartCanvas: document.querySelectorAll('.chart canvas').length,
  charts: [...document.querySelectorAll('.chart')].map((el) => el.clientWidth + 'x' + el.clientHeight),
}));
console.log('page state:', JSON.stringify(state));

await page.screenshot({ path: out });
console.log('screenshot saved:', out);
await browser.close();
