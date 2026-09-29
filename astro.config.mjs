// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Sitio estático. Español en `/`, inglés en `/en/` (CLAUDE.md § Idiomas). Las URLs terminan en `/` (una sola forma de cada
// URL: la canónica, el sitemap y los enlaces dicen lo mismo; ver docs/decisiones.md).
export default defineConfig({
  site: 'https://avanzafreight.com',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-MX', en: 'en-US' } },
      // Lo que no se publica todavía (corredores sin datos verificados, borradores) no entra al sitemap.
      filter: (url) => !url.includes('/corredores/') && !url.includes('/corridors/'),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
