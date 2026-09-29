/** JSON-LD que usan varias páginas (CLAUDE.md § SEO y GEO). */
import type { Idioma } from '../i18n/rutas';

/** FAQPage con el MISMO texto que se ve en la página. */
export const faqJsonLd = (lista: { p: string; r: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: lista.map((q) => ({ '@type': 'Question', name: q.p, acceptedAnswer: { '@type': 'Answer', text: q.r } })),
});

/** La aplicación. Solo Coordina lleva precio (0): los planes de pago no llevan precio hasta que Pedro lo defina. */
export const aplicacionJsonLd = (idioma: Idioma, descripcion: string) => ({
  '@type': 'SoftwareApplication',
  name: 'Avanza',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  inLanguage: idioma === 'es' ? 'es-MX' : 'en-US',
  description: descripcion,
  offers: { '@type': 'Offer', name: idioma === 'es' ? 'Coordina' : 'Coordinate', price: '0', priceCurrency: 'USD' },
});
