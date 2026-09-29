/**
 * Nosotros. "Por qué existe Avanza", la tira y los nombres: revision-22 (copia aprobada por Pedro, ES y EN, tal cual;
 * sin fotos). Lo demás sigue del diseño (disenos/Nosotros.dc.html); su inglés es adaptación.
 */
import type { Idioma } from './rutas';

type Punto = { titulo: string; texto: string };

export const NOSOTROS: Record<
  Idioma,
  {
    meta: { titulo: string; descripcion: string };
    etiqueta: string;
    titulo: string;
    bajada: string;
    /** revision-22 §5: en lugar de la foto, la tira de datos y los nombres. */
    tira: string[];
    nombres: string;
    porQue: string;
    /** Con **negritas** tal cual las marcó Pedro (revision-22 §3–§4: copia aprobada, para pegar). */
    parrafos: string[];
    cierre: string;
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
    tira: ['+25 años', 'Tijuana–San Diego, México y EUA', 'Ensenada y Long Beach, aéreo y marítimo', 'FTL, LTL y paquetería', 'Unidades propias y transportistas'],
    nombres: 'Pedro y Carlos Valdés · Tijuana, B.C.',
    porQue: 'Por qué existe Avanza',
    parrafos: [
      'Somos Pedro y Carlos Valdés, hermanos. Entre los dos llevamos más de veinticinco años moviendo carga: el cruce Tijuana–San Diego, rutas largas por todo México y Estados Unidos, el puerto de Ensenada y Long Beach, aéreo y marítimo, LTL y paquetería. Hemos despachado y dirigido despachos, con unidades propias y con transportistas, y hemos estado del otro lado del teléfono con brokers y con departamentos de logística.',
      'Y lo que aprendimos es que **mover la carga es la parte fácil. Lo difícil es organizar a la gente.**',
      'En un solo embarque están el almacén, el guardia de la caseta, el chofer, el owner, el agente aduanal, el departamento de logística del cliente, contabilidad. Cada uno con su horario, su prisa y su forma de avisar. Que todo eso corra en tiempo no pasa solo: **pasa porque alguien se la vive persiguiendo a todos.**',
      'Y cuando hay una urgencia —y siempre hay una urgencia— esa persecución es bajo presión. **Operar así desgasta.** No por la carga: por la coordinación.',
      'Por eso Avanza parte el embarque en actividades: quién hace qué, para cuándo, y con el documento o el mensaje ya listo. Para que fluya sin que nadie tenga que perseguir.',
    ],
    cierre: 'El mejor embarque es el que nadie pregunta por él.',
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
    tira: ['25+ years', 'Tijuana–San Diego, Mexico and the U.S.', 'Ensenada and Long Beach, air and ocean', 'FTL, LTL and parcel', 'Own trucks and outside carriers'],
    nombres: 'Pedro and Carlos Valdés · Tijuana, B.C.',
    porQue: 'Why Avanza exists',
    parrafos: [
      "We're Pedro and Carlos Valdés, brothers. Between us we've spent more than twenty-five years moving freight: the Tijuana–San Diego crossing, long hauls across Mexico and the United States, the ports of Ensenada and Long Beach, air and ocean, LTL and parcel. We've dispatched and run dispatch teams, with our own trucks and with outside carriers, and we've sat on the other end of the phone from brokers and logistics departments.",
      'What we learned is that **moving the freight is the easy part. Organizing the people is the hard part.**',
      "One shipment involves the warehouse, the gate guard, the driver, the owner-operator, the customs broker, the customer's logistics department, accounting. Each with their own hours, their own hurry, their own way of getting word to you. Getting all of that to run on time doesn't just happen: **it happens because somebody spends the day chasing everyone.**",
      'And when something is urgent — and something is always urgent — that chasing happens under pressure. **Operating that way wears you down.** Not the freight: the coordination.',
      "That's why Avanza breaks a shipment into activities: who does what, by when, with the document or the message already written. So it flows without anyone having to chase.",
    ],
    cierre: 'The best load is the one nobody has to ask about.',
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
