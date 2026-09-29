/** Copia de Precios sin número (revision-20 §6). Escrita por nosotros: va a revisión de Pedro. */
import type { Idioma } from './rutas';

export const PRECIOS: Record<
  Idioma,
  {
    meta: { titulo: string; descripcion: string };
    etiqueta: string;
    titulo: string;
    bajada: string;
    siempre: { titulo: string; puntos: { titulo: string; texto: string }[] };
    incluye: string;
    incluyeBajada: string;
    verProducto: string;
    como: { titulo: string; texto: string; preguntas: string[] };
    preguntas: { titulo: string; lista: { p: string; r: string }[] };
  }
> = {
  es: {
    meta: {
      titulo: 'Precios · Avanza',
      descripcion: 'Cuánto cuesta Avanza: depende del tamaño de tu operación, nunca por usuario. En una demo de 30 minutos vemos tu caso y te decimos cómo se cobraría.',
    },
    etiqueta: 'PRECIOS',
    titulo: 'El precio depende de tu operación. Te lo decimos en la demo.',
    bajada:
      'Todavía no publicamos una lista de precios. Preferimos ver cómo coordinas y darte un número que tenga sentido para tu operación, en vez de uno que tengamos que cambiar el mes que entra.',
    siempre: {
      titulo: 'Lo que no va a cambiar',
      puntos: [
        { titulo: 'Nunca por usuario', texto: 'Invita a todo tu equipo: cada quien con su usuario y sus permisos, sin que eso cambie lo que pagas.' },
        {
          titulo: 'Nunca te frenamos una carga',
          texto: 'Ningún plan te va a impedir dar de alta un embarque a las 6 de la mañana. La operación no se detiene por una cuenta.',
        },
      ],
    },
    incluye: 'Qué incluye trabajar con Avanza',
    incluyeBajada: 'Lo que usas depende de lo que haces, y lo que no usas se queda apagado.',
    verProducto: 'Ver todo lo que hace →',
    como: {
      titulo: 'Cómo llegamos a tu precio',
      texto: 'En la demo te enseñamos Avanza con un embarque como los tuyos, y con tres preguntas sabemos qué te tocaría:',
      preguntas: ['¿Qué mueves?', '¿Cuántas cargas al mes?', '¿Tienes unidades propias?'],
    },
    preguntas: {
      titulo: 'Preguntas sobre precios',
      lista: [
        { p: '¿Cobran por usuario?', r: 'No. Invita a todo tu equipo: cada quien con su usuario y sus permisos.' },
        {
          p: '¿Por qué no publican precios?',
          r: 'Porque todavía los estamos definiendo con quienes usan Avanza, y un precio que cambia el mes que entra no le sirve a nadie. En la demo te decimos cómo se cobraría en tu caso.',
        },
        { p: '¿Tengo que migrar toda mi operación para ver cuánto cuesta?', r: 'No. En 30 minutos vemos un embarque como los tuyos y te decimos cómo se cobraría.' },
      ],
    },
  },
  en: {
    meta: {
      titulo: 'Pricing · Avanza',
      descripcion: "What Avanza costs: it depends on the size of your operation, never per user. In a 30-minute demo we look at your case and tell you how pricing would work.",
    },
    etiqueta: 'PRICING',
    titulo: "Pricing depends on your operation. We'll tell you in the demo.",
    bajada:
      "We don't publish a price list yet. We'd rather see how you run freight and give you a number that makes sense for you, instead of one we'd have to change next month.",
    siempre: {
      titulo: "What won't change",
      puntos: [
        { titulo: 'Never per user', texto: 'Bring your whole team: everyone with their own login and permissions, without changing what you pay.' },
        { titulo: 'We never block a load', texto: 'No plan will stop you from booking a load at 6 AM. The operation never stops over an invoice.' },
      ],
    },
    incluye: 'What working with Avanza includes',
    incluyeBajada: "What you use depends on what you do, and what you don't use stays off.",
    verProducto: 'See everything it does →',
    como: {
      titulo: 'How we get to your price',
      texto: "In the demo we show you Avanza with a load like yours, and three questions tell us where you'd land:",
      preguntas: ['What do you haul?', 'How many loads a month?', 'Do you run your own trucks?'],
    },
    preguntas: {
      titulo: 'Pricing questions',
      lista: [
        { p: 'Do you charge per user?', r: 'No. Bring your whole team: everyone with their own login and permissions.' },
        {
          p: "Why don't you publish prices?",
          r: "Because we're still setting them with the people using Avanza, and a price that changes next month helps nobody. In the demo we tell you how pricing would work for you.",
        },
        { p: 'Do I have to move my whole operation over to find out?', r: "No. In 30 minutes we look at a load like yours and tell you how pricing would work." },
      ],
    },
  },
};
