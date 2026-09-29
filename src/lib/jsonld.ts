/** JSON-LD que usan varias páginas (CLAUDE.md § SEO y GEO). */
import type { Idioma } from '../i18n/rutas';

/** FAQPage con el MISMO texto que se ve en la página. */
export const faqJsonLd = (lista: { p: string; r: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: lista.map((q) => ({ '@type': 'Question', name: q.p, acceptedAnswer: { '@type': 'Answer', text: q.r } })),
});

/** La aplicación. Sin `offers`: el precio está por definir (revision-20 §6), y un precio en JSON-LD es una afirmación. */
export const aplicacionJsonLd = (idioma: Idioma, descripcion: string) => ({
  '@type': 'SoftwareApplication',
  name: 'Avanza',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  inLanguage: idioma === 'es' ? 'es-MX' : 'en-US',
  description: descripcion,
});
