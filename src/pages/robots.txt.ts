import type { APIRoute } from 'astro';
import { VISTA_PREVIA } from '../i18n/rutas';

// Buscadores y rastreadores de IA entran todos (CLAUDE.md § SEO y GEO); Pedro decide si alguno se bloquea.
const BOTS_IA = ['GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended'];

export const GET: APIRoute = ({ site }) => {
  if (VISTA_PREVIA) return new Response('User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  const lineas = [
    'User-agent: *',
    'Allow: /',
    '',
    ...BOTS_IA.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
    `Sitemap: ${new URL('/sitemap-index.xml', site).href}`,
    '',
  ];
  return new Response(lineas.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
