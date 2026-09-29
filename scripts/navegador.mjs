// Piezas comunes de la prueba de humo y las capturas: el Chrome instalado (playwright-core no descarga navegadores; otra
// ruta con AVANZA_NAVEGADOR) y un `astro preview` sobre lo construido en dist/.
import { spawn } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';

export function navegador() {
  const candidatos = [
    process.env.AVANZA_NAVEGADOR,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
  ].filter(Boolean);
  const hallado = candidatos.find((c) => existsSync(c));
  if (!hallado) throw new Error('No encontré Chrome ni Edge; pon su ruta en AVANZA_NAVEGADOR');
  return hallado;
}

export const PUERTO = 4329;
export const BASE = `http://localhost:${PUERTO}`;

/** Levanta `astro preview` y espera a que responda. Devuelve cómo apagarlo. */
export async function levantarPreview() {
  const proc = spawn('npx', ['astro', 'preview', '--port', String(PUERTO)], { shell: true, stdio: 'ignore' });
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(`${BASE}/`);
      if (r.ok) return () => (process.platform === 'win32' ? spawn('taskkill', ['/pid', String(proc.pid), '/T', '/F'], { stdio: 'ignore' }) : proc.kill());
    } catch {
      /* todavía no */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  proc.kill();
  throw new Error('astro preview no respondió');
}

/** Las rutas del sitemap (lo que se publica). */
export function rutasDelSitemap() {
  const xml = readFileSync('dist/sitemap-0.xml', 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
}
