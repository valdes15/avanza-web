/**
 * Mapa de rutas ES ↔ EN (CLAUDE.md § Idiomas y § Mapa del sitio). Cada página conoce a su gemela por su clave; el selector
 * "ES · EN" lleva a la MISMA página en el otro idioma, nunca al inicio.
 *
 * `construida`: la página existe hoy. El menú y el pie enlazan también a las que faltan (el diseño las muestra), pero la
 * prueba de humo las lista como pendientes; antes de publicar (paso 9) no debe quedar ninguna (HUMO_ESTRICTO=1).
 */
export type Idioma = 'es' | 'en';
export const IDIOMAS: Idioma[] = ['es', 'en'];
export const LOCALE: Record<Idioma, string> = { es: 'es-MX', en: 'en-US' };

export const RUTAS = {
  inicio: { es: '/', en: '/en/', construida: true },
  producto: { es: '/producto/', en: '/en/product/', construida: false },
  soluciones: { es: '/soluciones/', en: '/en/solutions/', construida: false },
  'soluciones-logistica': { es: '/soluciones/logistica/', en: '/en/solutions/shippers/', construida: false },
  'soluciones-brokers': { es: '/soluciones/brokers/', en: '/en/solutions/brokers/', construida: false },
  'soluciones-transportistas': { es: '/soluciones/transportistas/', en: '/en/solutions/carriers/', construida: false },
  'soluciones-cruce': { es: '/soluciones/cruce-mexico-eua/', en: '/en/solutions/cross-border/', construida: false },
  'soluciones-mexico': { es: '/soluciones/mexico/', en: '/en/solutions/mexico/', construida: false },
  'soluciones-eua': { es: '/soluciones/estados-unidos/', en: '/en/solutions/united-states/', construida: false },
  precios: { es: '/precios/', en: '/en/pricing/', construida: false },
  seguridad: { es: '/seguridad/', en: '/en/security/', construida: false },
  recursos: { es: '/recursos/', en: '/en/resources/', construida: false },
  calculadoras: { es: '/recursos/calculadoras/', en: '/en/resources/calculators/', construida: false },
  plantillas: { es: '/recursos/plantillas/', en: '/en/resources/templates/', construida: false },
  glosario: { es: '/glosario/', en: '/en/glossary/', construida: false },
  blog: { es: '/blog/', en: '/en/blog/', construida: false },
  nosotros: { es: '/nosotros/', en: '/en/about/', construida: false },
  contacto: { es: '/contacto/', en: '/en/contact/', construida: false },
  preguntas: { es: '/preguntas/', en: '/en/faq/', construida: false },
  privacidad: { es: '/privacidad/', en: '/en/privacy/', construida: false },
  terminos: { es: '/terminos/', en: '/en/terms/', construida: false },
} as const satisfies Record<string, { es: string; en: string; construida: boolean }>;

export type ClaveRuta = keyof typeof RUTAS;

export const ruta = (clave: ClaveRuta, idioma: Idioma): string => RUTAS[clave][idioma];
export const otroIdioma = (idioma: Idioma): Idioma => (idioma === 'es' ? 'en' : 'es');

/**
 * Vista previa (`PUBLIC_VISTA_PREVIA=1`): el sitio se publica en la dirección de Amplify para que Pedro lo revise, sin que
 * lo indexe nadie (noindex en cada página y robots.txt que no deja entrar). Se quita al apuntar avanzafreight.com.
 */
export const VISTA_PREVIA = import.meta.env.PUBLIC_VISTA_PREVIA === '1';

/** Enlaces externos y de conversión (CLAUDE.md § Conversión). Públicos: se incrustan en el HTML al construir. */
export const URL_APP: string = import.meta.env.PUBLIC_URL_APP || 'https://app.avanzafreight.com';
/** "Empieza gratis": sin registro público, lleva a pedir acceso en Contacto. */
export const urlEmpezar = (idioma: Idioma): string =>
  import.meta.env.PUBLIC_URL_REGISTRO || `${ruta('contacto', idioma)}?intencion=empezar`;
export const urlDemo = (idioma: Idioma): string => `${ruta('contacto', idioma)}?intencion=demo`;
