// Screenshots the built site in the installed Edge with real time, so animations actually run.
// usage: node scripts/shoot.mjs <url> <outDir> [steps]
import { chromium } from 'playwright-core';

const [url, out, stepArg] = process.argv.slice(2);
const steps = Number(stepArg) || 10;
const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const errors = [];

async function shoot(name, viewport) {
	const page = await browser.newPage({ viewport });
	page.on('pageerror', (e) => errors.push(`${name}: ${e.message}`));
	page.on('console', (m) => { if (m.type() === 'error') errors.push(`${name} console: ${m.text()}`); });
	await page.goto(url, { waitUntil: 'domcontentloaded' });
	await page.waitForTimeout(700);
	await page.screenshot({ path: `${out}/${name}-0-intro.png` }); // mid time-warp
	await page.waitForTimeout(3200);
	await page.screenshot({ path: `${out}/${name}-1-hero.png` });
	const height = await page.evaluate(() => document.documentElement.scrollHeight - innerHeight);
	for (let i = 1; i <= steps; i++) {
		const y = Math.round((height * i) / steps);
		// scroll in small hops so scroll-driven animations see the movement
		await page.evaluate(async (target) => {
			const from = scrollY, n = 12;
			for (let k = 1; k <= n; k++) { scrollTo(0, from + ((target - from) * k) / n); await new Promise((r) => setTimeout(r, 40)); }
		}, y);
		await page.waitForTimeout(1300);
		await page.screenshot({ path: `${out}/${name}-${String(i + 1).padStart(2, '0')}.png` });
	}
	console.log(name, 'page height', height + viewport.height);
	await page.close();
}

await shoot('desktop', { width: 1440, height: 900 });
await shoot('mobile', { width: 390, height: 844 });
await browser.close();
console.log(errors.length ? errors.join('\n') : 'no page errors');
