/** Nosotros: copia de disenos/Nosotros.dc.html (ES, primera persona de Pedro). El inglés es adaptación: a revisión. */
import type { Idioma } from './rutas';

type Punto = { titulo: string; texto: string };

export const NOSOTROS: Record<
  Idioma,
  {
    meta: { titulo: string; descripcion: string };
    etiqueta: string;
    titulo: string;
    bajada: string;
    cargo: string;
    porQue: string;
    parrafos: string[];
    cita: string;
    prometemos: { titulo: string; bajada: string; puntos: Punto[] };
    frontera: { titulo: string; texto: string; contesta: string };
    cuidamos: { titulo: string; puntos: Punto[] };
    habla: { titulo: string; texto: string; datos: [string, string][] };
  }
> = {
  es: {
    meta: {
      titulo: 'Nosotros · Avanza',
      descripcion: 'Avanza lo hizo alguien que coordinó embarques por más de diez años en la frontera Tijuana–San Diego. Esta es la herramienta que nos hubiera gustado tener.',
    },
    etiqueta: 'NOSOTROS',
    titulo: 'Avanza lo hizo alguien que coordinó embarques por más de diez años.',
    bajada:
      'No venimos de vender software. Venimos del teléfono que suena a las nueve de la noche porque falta un documento para cruzar. Esta es la herramienta que nos hubiera gustado tener.',
    cargo: 'Fundador de Avanza · Tijuana, B.C.',
    porQue: 'Por qué existe Avanza',
    parrafos: [
      'Durante más de diez años coordiné embarques en la frontera entre Tijuana y San Diego, y también rutas largas dentro de Estados Unidos con carriers externos. Aprendí que casi nunca falla el camión. Falla la cadena: el chofer que no recibió la caja correcta, el carrier que no confirmó la cita, el documento que nadie pidió a tiempo.',
      'Casi todo eso se resolvía con hojas de cálculo, WhatsApp y memoria. Así se coordina reactivo: te enteras cuando alguien te pregunta. Yo quería coordinar proactivo: saber qué sigue, quién lo hace y para cuándo, y resolverlo antes de que nadie tenga que preguntar.',
      'Por eso Avanza gira alrededor de una idea simple: el mejor embarque es el que nadie pregunta por él.',
    ],
    cita: '"Coordiné embarques por más de diez años y me hubiera encantado tener una aplicación como ésta."',
    prometemos: {
      titulo: 'Lo que prometemos, y lo que no hacemos',
      bajada: 'Antes de meter tu operación en una herramienta, tienes derecho a saber cómo piensa quien la hace.',
      puntos: [
        {
          titulo: 'Tus datos son tuyos',
          texto: 'Cada empresa vive separada de las demás. Nadie más ve tus clientes, tus carriers ni tus precios, y no los vendemos ni los usamos para competirte.',
        },
        {
          titulo: 'No somos broker',
          texto: 'Avanza no mueve carga ni ofrece fletes. Si lo hiciéramos, le competiríamos a quienes usan la herramienta. Hacemos software, y ya.',
        },
        { titulo: 'No somos financiera', texto: 'No prestamos ni hacemos factoraje con tus facturas. Tu cobranza es tuya.' },
        { titulo: 'Con GPS o sin GPS, igual de bien', texto: 'Todo se puede capturar a mano, siempre. El GPS ayuda, pero nunca es requisito para coordinar.' },
        {
          titulo: 'Te decimos lo que todavía no hace',
          texto: 'Lo que está en camino lo marcamos como "próximamente". Si algo no lo tenemos, te lo decimos antes de que lo descubras.',
        },
      ],
    },
    frontera: {
      titulo: 'Desde la frontera, para los dos lados',
      texto:
        'Estamos en Tijuana, Baja California. Avanza está hecho para quien opera solo en México, solo en Estados Unidos, o de los dos lados: en español o inglés, en pesos o dólares, en kilómetros o millas.',
      contesta: 'Cuando nos escribes, te contesta alguien que sabe qué es una carta porte, un BOL y una cita de descarga.',
    },
    cuidamos: {
      titulo: 'Cómo cuidamos tu información',
      puntos: [
        { titulo: 'Cada empresa, separada', texto: 'La separación entre cuentas se revisa en la base de datos y con pruebas automáticas en cada cambio.' },
        { titulo: 'Nadie ve tu contraseña', texto: 'Ni el administrador de tu empresa ni nosotros. Cada persona pone la suya desde su propio correo.' },
        { titulo: 'Cada quien ve lo suyo', texto: 'Los precios y los costos se muestran solo a quien tiene permiso, y todo cambio queda en la bitácora.' },
      ],
    },
    habla: {
      titulo: 'Habla con nosotros',
      texto: '¿Quieres saber si Avanza sirve para tu operación? Cuéntanos cómo coordinas hoy. Si no es para ti, también te lo decimos.',
      datos: [
        ['CORREO', '[hola@avanzafreight.com]'],
        ['WHATSAPP', '[POR DEFINIR]'],
        ['UBICACIÓN', 'Tijuana, Baja California, México'],
        ['HORARIO', '[POR DEFINIR]'],
      ],
    },
  },
  en: {
    meta: {
      titulo: 'About · Avanza',
      descripcion: 'Avanza was built by someone who ran freight for over ten years on the Tijuana–San Diego border. It’s the tool we wish we’d had.',
    },
    etiqueta: 'ABOUT',
    titulo: 'Avanza was built by someone who ran freight for over ten years.',
    bajada:
      "We don't come from selling software. We come from the phone ringing at 9 PM because a document is missing to cross. This is the tool we wish we'd had.",
    cargo: 'Founder of Avanza · Tijuana, B.C.',
    porQue: 'Why Avanza exists',
    parrafos: [
      "For more than ten years I coordinated freight on the Tijuana–San Diego border, plus long hauls inside the US with outside carriers. I learned the truck almost never fails. The chain does: the driver who didn't get the right trailer, the carrier who didn't confirm the appointment, the document nobody asked for in time.",
      "Almost all of it ran on spreadsheets, WhatsApp and memory. That's reactive coordination: you find out when someone asks. I wanted to coordinate proactively: know what's next, who owns it and by when, and handle it before anyone has to ask.",
      'That’s why Avanza is built around one simple idea: the best load is the one nobody calls about.',
    ],
    cita: '"I ran freight for more than ten years and I would have loved to have an app like this."',
    prometemos: {
      titulo: "What we promise, and what we don't do",
      bajada: 'Before you put your operation in a tool, you have a right to know how the people behind it think.',
      puntos: [
        { titulo: 'Your data is yours', texto: 'Every company lives apart from the rest. Nobody else sees your customers, carriers or rates, and we never sell them or use them to compete with you.' },
        { titulo: "We're not a broker", texto: "Avanza doesn't move freight or sell capacity. If we did, we'd be competing with the people who use it. We build software, period." },
        { titulo: "We're not a lender", texto: "We don't lend or factor your invoices. Your collections are yours." },
        { titulo: 'With or without GPS, just as well', texto: 'Everything can be entered by hand, always. GPS helps, but it’s never required to coordinate.' },
        { titulo: "We tell you what it doesn't do yet", texto: "What's on the way is marked \"coming soon\". If we don't have something, we'll tell you before you find out." },
      ],
    },
    frontera: {
      titulo: 'From the border, for both sides',
      texto:
        "We're in Tijuana, Baja California. Avanza is built for Mexico-only, US-only or cross-border operations: in Spanish or English, pesos or dollars, kilometers or miles.",
      contesta: 'When you write to us, the person answering knows what a Carta Porte, a BOL and a delivery appointment are.',
    },
    cuidamos: {
      titulo: 'How we protect your data',
      puntos: [
        { titulo: 'Every company, kept apart', texto: 'Account separation is enforced in the database and checked by automated tests on every change.' },
        { titulo: 'Nobody sees your password', texto: 'Not your company admin, not us. Everyone sets their own from their own email.' },
        { titulo: 'Everyone sees their own', texto: 'Rates and costs only show for people with permission, and every change is logged.' },
      ],
    },
    habla: {
      titulo: 'Talk to us',
      texto: "Want to know if Avanza fits your operation? Tell us how you run freight today. If it's not a fit, we'll tell you that too.",
      datos: [
        ['EMAIL', '[hola@avanzafreight.com]'],
        ['WHATSAPP', '[TBD]'],
        ['LOCATION', 'Tijuana, Baja California, Mexico'],
        ['HOURS', '[TBD]'],
      ],
    },
  },
};
