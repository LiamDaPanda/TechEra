// Screenshots the built site in the installed Edge with real time, so animations actually run.
// usage: node scripts/shoot.mjs <url> <outDir>
import { chromium } from 'playwright-core';

const [url, out] = process.argv.slice(2);
const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--enable-unsafe-swiftshader'] });
const errors = [];

async function shoot(name, viewport, steps) {
	const page = await browser.newPage({ viewport });
	page.on('pageerror', (e) => errors.push(`${name}: ${e.message}`));
	page.on('console', (m) => { if (m.type() === 'error') errors.push(`${name} console: ${m.text()}`); });
	await page.goto(url, { waitUntil: 'networkidle' });
	await page.waitForTimeout(2500); // let the hero animations finish
	await page.screenshot({ path: `${out}/${name}-hero.png` });
	for (const [i, y] of steps.entries()) {
		await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y);
		await page.waitForTimeout(1600); // scroll-reveals and count-ups
		await page.screenshot({ path: `${out}/${name}-${i + 1}.png` });
	}
	const h1 = await page.evaluate(() => {
		const el = document.querySelector('h1');
		return el ? { text: el.innerText, opacity: getComputedStyle(el.querySelector('*') || el).opacity } : null;
	});
	console.log(name, 'h1:', JSON.stringify(h1));
	await page.close();
}

await shoot('desktop', { width: 1440, height: 900 }, [900, 1800, 2700, 3600, 4500]);
await shoot('mobile', { width: 390, height: 844 }, [800, 1700, 2600]);
await browser.close();
console.log(errors.length ? errors.join('\n') : 'no page errors');
