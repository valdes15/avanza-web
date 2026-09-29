// Prueba de humo (CLAUDE.md § Cómo trabajar): recorre el sitemap con un Chrome sin ventana, a 390 y a 1440 px, y falla con
// 404, enlace interno roto, hreflang sin reciprocidad, error de consola, texto `undefined`/`NaN`/`[object Object]`/
// `Invalid Date`, una página sin exactamente un h1, scroll horizontal, o title/description fuera de medida.
//
// Los enlaces a páginas del mapa que todavía no se construyen (rutas.ts, `construida: false`) se listan como PENDIENTES
// y no fallan, salvo con HUMO_ESTRICTO=1 (antes de publicar).
import { existsSync } from 'node:fs';
import { chromium } from 'playwright-core';
import { BASE, levantarPreview, navegador, rutasDelSitemap } from './navegador.mjs';

const ESTRICTO = process.env.HUMO_ESTRICTO === '1';
const fallas = [];
const pendientes = new Set();
const falla = (ruta, msg) => fallas.push(`${ruta}: ${msg}`);

/** ¿Existe la página en dist/? */
const existe = (ruta) => {
  const limpia = decodeURIComponent(ruta.split('?')[0].split('#')[0]);
  if (/\.[a-z0-9]+$/i.test(limpia)) return existsSync(`dist${limpia}`);
  return existsSync(`dist${limpia.endsWith('/') ? limpia : limpia + '/'}index.html`);
};

const rutas = rutasDelSitemap();
if (rutas.length === 0) throw new Error('El sitemap no trae páginas');
const apagar = await levantarPreview();
const browser = await chromium.launch({ executablePath: navegador(), headless: true });
try {
  // robots.txt y sitemap
  for (const f of ['/robots.txt', '/sitemap-index.xml', '/og-predeterminada.png', '/favicon.svg']) {
    const r = await fetch(BASE + f);
    if (!r.ok) falla(f, `responde ${r.status}`);
  }
  const alternos = new Map(); // ruta → { hreflang: ruta }
  for (const ancho of [390, 1440]) {
    const page = await browser.newPage({ viewport: { width: ancho, height: 900 } });
    let actual = '';
    // Solo errores de NUESTRO sitio: el calendario de la demo es de Calendly y lo que pase dentro de su iframe no es nuestro.
    page.on('console', (m) => m.type() === 'error' && (m.location().url ?? '').startsWith(BASE) && falla(actual, `error de consola (${ancho}px): ${m.text()}`));
    page.on('pageerror', (e) => falla(actual, `error de JavaScript (${ancho}px): ${e.message}`));
    page.on('response', (r) => r.status() >= 400 && r.url().startsWith(BASE) && falla(actual, `${r.status()} en ${r.url()}`));
    for (const ruta of rutas) {
      actual = ruta;
      const resp = await page.goto(BASE + ruta, { waitUntil: 'load' });
      if (!resp || resp.status() !== 200) {
        falla(ruta, `responde ${resp?.status()}`);
        continue;
      }
      const d = await page.evaluate(() => ({
        texto: document.body.innerText,
        h1: document.querySelectorAll('h1').length,
        titulo: document.title,
        descripcion: document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '',
        canonica: document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? '',
        lang: document.documentElement.lang,
        alternos: [...document.querySelectorAll('link[rel="alternate"][hreflang]')].map((l) => [l.getAttribute('hreflang'), new URL(l.getAttribute('href')).pathname]),
        enlaces: [...document.querySelectorAll('a[href]')].map((a) => a.getAttribute('href')),
        desborde: document.documentElement.scrollWidth - window.innerWidth,
        imgSinAlt: [...document.querySelectorAll('img:not([alt])')].length,
        jsonld: [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => s.textContent),
      }));
      for (const malo of ['undefined', 'NaN', '[object Object]', 'Invalid Date']) if (d.texto.includes(malo)) falla(ruta, `el texto dice "${malo}"`);
      if (d.h1 !== 1) falla(ruta, `tiene ${d.h1} h1`);
      if (d.desborde > 1) falla(ruta, `scroll horizontal de ${d.desborde}px a ${ancho}px`);
      if (d.imgSinAlt) falla(ruta, `${d.imgSinAlt} imágenes sin alt`);
      if (ancho !== 1440) continue;
      // Lo que no depende del ancho, una vez.
      if (!d.titulo || d.titulo.length > 60) falla(ruta, `title de ${d.titulo.length} caracteres`);
      if (!d.descripcion || d.descripcion.length > 155) falla(ruta, `description de ${d.descripcion.length} caracteres`);
      if (new URL(d.canonica).pathname !== ruta) falla(ruta, `canónica ${d.canonica}`);
      if (!['es-MX', 'en-US'].includes(d.lang)) falla(ruta, `lang ${d.lang}`);
      for (const j of d.jsonld) {
        try {
          JSON.parse(j);
        } catch {
          falla(ruta, 'JSON-LD que no es JSON');
        }
      }
      alternos.set(ruta, Object.fromEntries(d.alternos));
      for (const href of d.enlaces) {
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;
        const u = new URL(href, BASE + ruta);
        if (u.origin !== BASE) continue; // externos (la aplicación) no se recorren
        if (u.hash && u.pathname === ruta) {
          const id = decodeURIComponent(u.hash.slice(1));
          if (!(await page.$(`[id="${id}"]`))) falla(ruta, `ancla #${id} sin destino`);
        }
        if (!existe(u.pathname)) pendientes.add(u.pathname);
      }
    }
    await page.close();
  }
  // hreflang recíproco: cada alterno apunta de regreso.
  for (const [ruta, alt] of alternos) {
    if (!alt['es-MX'] || !alt['en-US'] || !alt['x-default']) falla(ruta, 'faltan hreflang es-MX / en-US / x-default');
    for (const destino of [alt['es-MX'], alt['en-US']]) {
      if (!destino || destino === ruta) continue;
      const vuelta = alternos.get(destino);
      if (!vuelta) falla(ruta, `su gemela ${destino} no está publicada`);
      else if (!Object.values(vuelta).includes(ruta)) falla(ruta, `${destino} no la reconoce como gemela`);
    }
  }
} finally {
  await browser.close();
  apagar();
}

const pend = [...pendientes].sort();
if (pend.length) {
  console.log(`\nEnlaces a páginas que todavía no existen (${pend.length}):`);
  for (const p of pend) console.log(`  · ${p}`);
  if (ESTRICTO) fallas.push(`HUMO_ESTRICTO: ${pend.length} enlaces a páginas que no existen`);
}
if (fallas.length) {
  console.error(`\n✖ Prueba de humo: ${fallas.length} fallas`);
  for (const f of fallas) console.error(`  · ${f}`);
  process.exit(1);
}
console.log(`\n✓ Prueba de humo: ${rutas.length} páginas a 390 y 1440 px, sin fallas.`);
