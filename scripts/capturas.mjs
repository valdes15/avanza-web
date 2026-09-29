// Capturas de página completa de cada página del sitemap, a 390 y a 1440 px, en capturas/ (fuera de git).
import { mkdirSync } from 'node:fs';
import { chromium } from 'playwright-core';
import { BASE, levantarPreview, navegador, rutasDelSitemap } from './navegador.mjs';

mkdirSync('capturas', { recursive: true });
const apagar = await levantarPreview();
const browser = await chromium.launch({ executablePath: navegador(), headless: true });
try {
  for (const ancho of [390, 1440]) {
    const page = await browser.newPage({ viewport: { width: ancho, height: 900 } });
    for (const ruta of rutasDelSitemap()) {
      await page.goto(BASE + ruta, { waitUntil: 'networkidle' });
      const nombre = (ruta === '/' ? 'inicio' : ruta.replace(/^\/|\/$/g, '').replace(/\//g, '_')) + `-${ancho}.png`;
      await page.screenshot({ path: `capturas/${nombre}`, fullPage: true });
      console.log(`capturas/${nombre}`);
    }
    await page.close();
  }
} finally {
  await browser.close();
  apagar();
}
