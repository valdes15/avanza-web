/**
 * Textos del menú y del pie. Español: Nav.dc.html y Footer.dc.html (copia aprobada, tal cual). Inglés: HomeEN.dc.html donde
 * lo trae; lo que HomeEN no trae (la banda del pie y algunas columnas) es adaptación nuestra y va a revisión de Pedro.
 */
import type { ClaveRuta, Idioma } from './rutas';

// Recursos sale del menú hasta que haya algo que poner (revision-20 §2).
export type Seccion = 'producto' | 'soluciones' | 'precios' | 'recursos' | 'nosotros';

type Enlace = { etiqueta: string; clave?: ClaveRuta; app?: true };

export const COMUN: Record<
  Idioma,
  {
    menuAria: string;
    inicioAria: string;
    menu: { clave: Seccion; etiqueta: string }[];
    selector: string;
    selectorAria: string;
    abrirMenu: string;
    iniciarSesion: string;
    demo: string;
    bandaTitulo: string;
    bandaNota: string;
    pieLema: string;
    pieDerechos: string;
    columnas: { titulo: string; enlaces: Enlace[] }[];
  }
> = {
  es: {
    menuAria: 'Principal',
    inicioAria: 'Avanza Freight TMS, inicio',
    menu: [
      { clave: 'producto', etiqueta: 'Producto' },
      { clave: 'soluciones', etiqueta: 'Soluciones' },
      { clave: 'precios', etiqueta: 'Precios' },
      { clave: 'nosotros', etiqueta: 'Nosotros' },
    ],
    selector: 'ES · EN',
    selectorAria: 'English version',
    abrirMenu: 'Abrir el menú',
    iniciarSesion: 'Iniciar sesión',
    demo: 'Agenda una demo',
    bandaTitulo: 'Adelántate al embarque.',
    bandaNota: '30 minutos · Te enseñamos con datos como los tuyos',
    pieLema: 'Coordinación proactiva de embarques para México y Estados Unidos.',
    pieDerechos: '© 2026 Avanza Freight TMS · Tijuana, B.C., México',
    columnas: [
      {
        titulo: 'Producto',
        enlaces: [
          { etiqueta: 'Funciones', clave: 'producto' },
          { etiqueta: 'Precios', clave: 'precios' },
          { etiqueta: 'Seguridad', clave: 'seguridad' },
          { etiqueta: 'Iniciar sesión', app: true },
        ],
      },
      {
        titulo: 'Soluciones',
        enlaces: [
          { etiqueta: 'Logística', clave: 'soluciones-logistica' },
          { etiqueta: 'Brokers', clave: 'soluciones-brokers' },
          { etiqueta: 'Transportistas', clave: 'soluciones-transportistas' },
          { etiqueta: 'Transportista y broker', clave: 'soluciones-carrier-broker' },
        ],
      },
      {
        titulo: 'Empresa',
        enlaces: [
          { etiqueta: 'Nosotros', clave: 'nosotros' },
          { etiqueta: 'Agenda una demo', clave: 'demo' },
          { etiqueta: 'Privacidad', clave: 'privacidad' },
          { etiqueta: 'Términos', clave: 'terminos' },
        ],
      },
    ],
  },
  en: {
    menuAria: 'Main',
    inicioAria: 'Avanza Freight TMS, home',
    menu: [
      { clave: 'producto', etiqueta: 'Product' },
      { clave: 'soluciones', etiqueta: 'Solutions' },
      { clave: 'precios', etiqueta: 'Pricing' },
      { clave: 'nosotros', etiqueta: 'About' },
    ],
    selector: 'EN · ES',
    selectorAria: 'Versión en español',
    abrirMenu: 'Open menu',
    iniciarSesion: 'Log in',
    demo: 'Book a demo',
    // Adaptación (HomeEN no trae la banda del pie): a revisión de Pedro.
    bandaTitulo: 'Get ahead of every load.',
    bandaNota: "30 minutes · We'll show you with data like yours",
    pieLema: 'Proactive freight coordination for Mexico and the United States.',
    pieDerechos: '© 2026 Avanza Freight TMS · Tijuana, B.C., Mexico',
    columnas: [
      {
        titulo: 'Product',
        enlaces: [
          { etiqueta: 'Features', clave: 'producto' },
          { etiqueta: 'Pricing', clave: 'precios' },
          { etiqueta: 'Security', clave: 'seguridad' },
          { etiqueta: 'Log in', app: true },
        ],
      },
      {
        titulo: 'Solutions',
        enlaces: [
          { etiqueta: 'Shippers', clave: 'soluciones-logistica' },
          { etiqueta: 'Brokers', clave: 'soluciones-brokers' },
          { etiqueta: 'Carriers', clave: 'soluciones-transportistas' },
          { etiqueta: 'Carrier-brokers', clave: 'soluciones-carrier-broker' },
        ],
      },
      {
        titulo: 'Company',
        enlaces: [
          { etiqueta: 'About', clave: 'nosotros' },
          { etiqueta: 'Book a demo', clave: 'demo' },
          { etiqueta: 'Privacy', clave: 'privacidad' },
          { etiqueta: 'Terms', clave: 'terminos' },
        ],
      },
    ],
  },
};
