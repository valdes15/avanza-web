/**
 * Copia del inicio. Español: disenos/Main.dc.html; inglés: disenos/HomeEN.dc.html. Es la copia aprobada: se usa tal cual
 * (sin correcciones: las dudas van al reporte para Pedro).
 */
import type { Idioma } from './rutas';

type Icono = 'telefono' | 'reloj' | 'documento' | 'globo' | 'tendencia' | 'billete';
type IconoSeg = 'empresas' | 'candado' | 'reloj' | 'persona' | 'bitacora' | 'nube';

export type CopiaInicio = {
  meta: { titulo: string; descripcion: string };
  heroe: {
    categoria: string;
    titular: string;
    bajada: string;
    comoFunciona: string;
    anclaComoFunciona: string;
    nota: string;
    chat: {
      encabezado: string;
      sub: string;
      hoy: string;
      mensajes: { lado: 'yo' | 'otro'; texto: string; hora: string }[];
      llamadas: string;
      mensajesDespues: { texto: string; hora: string }[];
      aviso: { quien: string; texto: string };
    };
  };
  dolor: {
    titulo: string;
    subtitulo: string;
    tarjetas: { icono: Icono; titulo: string; texto: string }[];
    cierre: [string, string];
  };
  dosFormas: {
    etiqueta: string;
    titulo: string;
    bajada: string;
    reactivo: { titulo: string; tipo: string; mensajeEtiqueta: string; mensaje: string; sigueEtiqueta: string; pasos: string[]; final: string; cierre: string };
    proactivo: { titulo: string; tipo: string; mensajeEtiqueta: string; mensaje: string; sigueEtiqueta: string; pasos: string[]; final: string; cierre: string };
  };
  asiSeVe: {
    etiqueta: string;
    titulo: string;
    folio: string;
    fase: string;
    trayecto: string;
    fases: string[];
    actividades: { estado: 'hecha' | 'ahora' | 'pendiente'; texto: string; detalle: string }[];
    lado: { tipo: 'ok' | 'alerta' | 'espera'; texto: string }[];
    maqueta: string;
  };
  tres: {
    titulo: string;
    uno: { titulo: string; texto: string; fases: string; ahora: string; actividad: string; vencida: string; responde: string; copiar: string; marcar: string; luego: string };
    dos: { titulo: string; texto: string; remate: string; tarjeta: string; confirmado: string; mensaje: string; enlace: string; botones: [string, string, string] };
    tres: { titulo: string; texto: string; cita: string; rutaEtiqueta: string; ruta: string; pasos: { texto: string; fase: string }[]; nota: string };
  };
  antes: { titulo: string; antes: string; con: string; filas: [string, string][] };
  paraTi: {
    titulo: string;
    perfiles: { icono: 'planta' | 'red' | 'camion'; titulo: string; texto: string; remate: string; enlace: string; clave: 'soluciones-logistica' | 'soluciones-brokers' | 'soluciones-transportistas' }[];
  };
  empieza: {
    titulo: string;
    lineas: string[];
    etiqueta: string;
    gratis: string;
    ilimitados: string;
    crear: string;
    planes: { nombre: string; texto: string }[];
    verPlanes: string;
  };
  seguridad: { etiqueta: string; titulo: string; bajada: string; tarjetas: { icono: IconoSeg; titulo: string; texto: string }[]; nunca: string; masInfo: string };
  preguntas: { titulo: string; lista: { p: string; r: string }[] };
  cierre: { antes: string; titulo: string; boton: string; nota: string; demo: string };
};

export const INICIO: Record<Idioma, CopiaInicio> = {
  es: {
    meta: {
      titulo: 'Avanza · Coordinación proactiva de embarques',
      descripcion:
        'TMS gratis para coordinar embarques en México y Estados Unidos: el mensaje al chofer, los documentos y las citas, listos antes de que pregunten.',
    },
    heroe: {
      categoria: 'COORDINACIÓN PROACTIVA DE EMBARQUES',
      titular: 'El mejor embarque es el que nadie pregunta por él.',
      bajada:
        'Avanza prepara cada paso desde que programas el embarque: el mensaje completo al chofer, los documentos, las citas. Las respuestas llegan antes que las preguntas.',
      comoFunciona: 'Ver cómo funciona',
      anclaComoFunciona: 'como-funciona',
      nota: 'Gratis para empezar · Sin tarjeta · Sin llamada de ventas',
      chat: {
        encabezado: 'Carrier · Despacho',
        sub: 'Embarque programado para las 7:00 AM',
        hoy: 'HOY',
        mensajes: [
          { lado: 'yo', texto: '¿Ya llego la unidad?', hora: '6:45' },
          { lado: 'otro', texto: 'Ya debe de estar ahi', hora: '7:04' },
          { lado: 'otro', texto: 'Déjame revisar con el chofer', hora: '7:51' },
        ],
        llamadas: '3 llamadas perdidas · 8:20',
        mensajesDespues: [
          { texto: 'Se le ponchó una llanta', hora: '8:37' },
          { texto: 'Ya casi llega', hora: '9:40' },
        ],
        aviso: {
          quien: 'Avanza · 7:05',
          texto: '«Confirmar llegada» se venció hace 5 min. Ya avisé a Despacho y te dejé el mensaje para el carrier listo para copiar.',
        },
      },
    },
    dolor: {
      titulo: 'No es el camión.',
      subtitulo: 'Es todo lo que tienes que hacer para que el camión llegue.',
      tarjetas: [
        { icono: 'telefono', titulo: 'Tres llamadas sin respuesta', texto: 'El cliente te está preguntando y tú sigues esperando al carrier.' },
        { icono: 'reloj', titulo: 'Una cita que cambió', texto: 'Todos lo sabían. Menos quien tenía que saberlo.' },
        { icono: 'documento', titulo: 'El layout de las 9:07 PM', texto: 'El embarque tardó horas en cargar. Ahora alguien necesita el documento para salir.' },
        { icono: 'globo', titulo: '“¿Con quién me reporto?”', texto: 'El chofer ya está en caseta y nadie le dijo a quién buscar.' },
        { icono: 'tendencia', titulo: '“Otra vez se descompuso”', texto: 'El mismo tractor. La tercera vez este mes.' },
        { icono: 'billete', titulo: '“Necesito pago hoy”', texto: 'Pero todavía nadie mandó el POD.' },
      ],
      cierre: ['Coordinar un embarque son decenas de pequeñas cosas.', 'Avanza hace que ninguna dependa de tu memoria.'],
    },
    dosFormas: {
      etiqueta: 'DOS FORMAS DE COORDINAR EL MISMO EMBARQUE',
      titulo: 'Hay embarques que fluyen y embarques que te persiguen.',
      bajada: 'La diferencia no es el camión. Es si las respuestas llegaron antes que las preguntas.',
      reactivo: {
        titulo: 'Te buscan',
        tipo: 'REACTIVO',
        mensajeEtiqueta: 'Mensaje al chofer',
        mensaje: 'Tienes una carga en Planta Otay.',
        sigueEtiqueta: 'Lo que sigue',
        pasos: [
          '7:02 · Chofer: ¿Qué caja? ¿A qué hora?',
          '7:40 · Chofer: ¿Con quién me reporto?',
          '8:15 · Despachador: el chofer no te localiza.',
          '8:50 · Jefe de despacho: ¿qué pasa con este viaje?',
        ],
        final: '9:30 · Tu cliente: ¿dónde viene mi carga?',
        cierre: 'Cada pregunta sin respuesta sube un nivel, y la presión se acumula.',
      },
      proactivo: {
        titulo: 'Ya estaba resuelto',
        tipo: 'PROACTIVO',
        mensajeEtiqueta: 'Mensaje al chofer, armado por Avanza',
        mensaje:
          'Carga en Planta Otay, mañana 7:00 AM. Caja 5321. Repórtate en caseta con el PO 48817 y pregunta por Laura en embarques. Entrega en Almacén San Diego a la 1:00 PM.',
        sigueEtiqueta: 'Lo que sigue',
        pasos: [
          'El día anterior · Layout de carta porte pedido y complemento listo',
          '7:02 · El carrier confirma por enlace',
          '7:05 · Salida registrada; el cliente ya sabe',
        ],
        final: 'Nadie tuvo que preguntar.',
        cierre: 'Las respuestas llegaron antes que las preguntas. Así fluye un embarque.',
      },
    },
    asiSeVe: {
      etiqueta: 'ASÍ SE VE AVANZA',
      titulo: 'Un embarque. Un lugar para saber qué pasó, qué falta y quién sigue.',
      folio: 'SRV-192',
      fase: 'Asignado',
      trayecto: 'Planta Otay → Almacén San Diego · Carga 7:00 AM',
      fases: ['Programado', 'Confirmado', 'Asignado', 'En tránsito', 'Entregado'],
      actividades: [
        { estado: 'hecha', texto: 'Confirmar con el carrier', detalle: 'Despacho · 6:58' },
        { estado: 'hecha', texto: 'Asignar unidad y chofer', detalle: 'Despacho · 7:10' },
        { estado: 'hecha', texto: 'BOL al almacén', detalle: 'Documentos · adjunto' },
        { estado: 'ahora', texto: 'Registrar salida de planta', detalle: 'Vence en 32 min' },
        { estado: 'pendiente', texto: 'POD en foto', detalle: 'Entregado' },
      ],
      lado: [
        { tipo: 'ok', texto: '✓ Carrier confirmado' },
        { tipo: 'ok', texto: '✓ Unidad asignada' },
        { tipo: 'alerta', texto: '! La salida vence en 32 min' },
        { tipo: 'ok', texto: '✓ BOL adjunto' },
        { tipo: 'espera', texto: '→ Esperando POD' },
      ],
      maqueta: 'Maqueta: se reemplaza por una captura real del sistema al construir el sitio.',
    },
    tres: {
      titulo: 'Tres cosas que hace Avanza por ti.',
      uno: {
        titulo: 'Sabes qué sigue antes de que te lo pidan.',
        texto:
          'Cada embarque sabe qué sigue. Avanza asigna actividades, responsables y tiempos; si algo no sucede cuando debería, el equipo lo sabe.',
        fases: 'Programado → Confirmado → Asignado → En tránsito → Entregado',
        ahora: 'AHORA',
        actividad: 'Confirmar salida con el carrier',
        vencida: 'Vencida hace 10 min',
        responde: 'Responde: Despacho · Escalada a las 7:05',
        copiar: 'Copiar mensaje al carrier',
        marcar: 'Marcar confirmada',
        luego: 'Luego: Asignar unidad · Cita de carga',
      },
      dos: {
        titulo: 'Deja de escribir el mismo mensaje.',
        texto:
          'Avanza prepara la comunicación con los datos del embarque: confirmaciones, instrucciones y documentos salen de la misma operación. El carrier confirma con un enlace y queda registrado.',
        remate: 'Menos copiar. Menos pegar. Menos perseguir.',
        tarjeta: 'Mensaje al carrier',
        confirmado: 'Confirmado por enlace · 7:02',
        mensaje:
          'Hola, te confirmo el viaje SRV-192: carga en Planta Otay mañana 7:00 AM, caja 5321. Entrega en Almacén San Diego a la 1:00 PM. ¿Me confirmas unidad y chofer aquí?',
        enlace: 'avanzafreight.link/c/…',
        botones: ['Copiar para WhatsApp', 'Enviar por correo', 'Carta de instrucción PDF'],
      },
      tres: {
        titulo: 'Tu mejor proceso. Cada vez.',
        texto:
          '¿Esta ruta siempre necesita cita? Avanza lo sabe. ¿Este cliente siempre pide cierto documento? Avanza lo recuerda. ¿Hay que avisarle a alguien antes de entregar? Ya está dentro del proceso.',
        cita: 'Lo que hoy vive en la cabeza de tu mejor coordinador, mañana vive en Avanza.',
        rutaEtiqueta: 'RUTA',
        ruta: 'CDMX → Monterrey',
        pasos: [
          { texto: 'Pedir cita de carga', fase: 'Programado' },
          { texto: 'Mandar BOL al almacén antes de salir', fase: 'Asignado' },
          { texto: 'Avisar llegada al cliente', fase: 'En tránsito' },
          { texto: 'POD en foto', fase: 'Entregado' },
        ],
        nota: 'Se aplica sola al siguiente embarque de esta ruta',
      },
    },
    antes: {
      titulo: 'Lo de siempre, pero ya no te toca perseguirlo.',
      antes: 'ANTES',
      con: 'CON AVANZA',
      filas: [
        ['“¿Ya confirmó?”', 'La confirmación queda registrada, con persona y hora'],
        ['Tres llamadas al carrier', 'Seguimiento y escalamiento al equipo que responde'],
        ['Excel + WhatsApp + correo', 'Todo en el embarque'],
        ['“¿Quién tenía que hacerlo?”', 'Cada actividad tiene responsable'],
        ['“¿Dónde está el BOL?”', 'Los documentos viven dentro del servicio'],
        ['“Se me pasó”', 'Actividades con tiempo y aviso antes de vencer'],
        ['Esperar el POD para facturar', 'POD en foto y factura lista cuando todo está completo'],
        ['Recordar cómo va cada ruta', 'El proceso de la ruta se repite solo'],
      ],
    },
    paraTi: {
      titulo: 'Si coordinas embarques, Avanza es para ti.',
      perfiles: [
        {
          icono: 'planta',
          titulo: 'Logística',
          texto: 'Tienes varios carriers, citas y embarques, y Avanza vive al lado de tu ERP.',
          remate: 'Deja de perseguir estatus.',
          enlace: 'Avanza para logística →',
          clave: 'soluciones-logistica',
        },
        {
          icono: 'red',
          titulo: 'Brokers',
          texto: 'Tu cliente quiere respuestas aunque tu carrier no conteste.',
          remate: 'Mantén cada carga bajo control.',
          enlace: 'Avanza para brokers →',
          clave: 'soluciones-brokers',
        },
        {
          icono: 'camion',
          titulo: 'Transportistas',
          texto: 'Unidades, choferes, cajas, documentos, PODs y facturación.',
          remate: 'Del despacho al pago.',
          enlace: 'Avanza para transportistas →',
          clave: 'soluciones-transportistas',
        },
      ],
    },
    empieza: {
      titulo: 'Empieza con tu próximo embarque.',
      lineas: ['No necesitas migrar toda tu operación.', 'No necesitas hablar con ventas.', 'No necesitas tarjeta.'],
      etiqueta: 'COORDINAR EMBARQUES',
      gratis: 'Gratis. Para siempre.',
      ilimitados: 'Usuarios ilimitados · Embarques ilimitados',
      crear: 'Crear mi cuenta',
      planes: [
        { nombre: 'Coordina', texto: 'Toda la operación · Gratis' },
        { nombre: 'Broker', texto: '+ Facturación, cuentas por cobrar y por pagar' },
        { nombre: 'Carrier', texto: '+ Unidades, GPS y trazabilidad' },
      ],
      verPlanes: 'Ver planes →',
    },
    seguridad: {
      etiqueta: 'SEGURIDAD Y PRIVACIDAD',
      titulo: 'Tus embarques, tus clientes y tus tarifas son tuyos.',
      bajada: 'Avanza está construido para que cada empresa vea solo lo suyo y cada acceso quede bajo control.',
      tarjetas: [
        {
          icono: 'empresas',
          titulo: 'Cada empresa, aislada',
          texto:
            'Tus datos viven separados de los de cualquier otra empresa. La base de datos rechaza cualquier consulta que cruce de una empresa a otra, y pruebas automáticas lo revisan en cada parte del sistema.',
        },
        {
          icono: 'candado',
          titulo: 'Contraseñas que nadie conoce',
          texto:
            'Se guardan con cifrado irreversible (scrypt): ni nosotros ni tu administrador podemos verlas. Cada persona pone la suya desde un enlace que le llega a su correo.',
        },
        {
          icono: 'reloj',
          titulo: 'Sesiones bajo control',
          texto:
            'Las sesiones vencen solas, puedes cerrar sesión en todos tus dispositivos a la vez, y tras 5 intentos fallidos la cuenta espera antes de volver a intentarlo.',
        },
        {
          icono: 'persona',
          titulo: 'Cada quien ve lo que le toca',
          texto:
            'Permisos por equipo y por pantalla. Precios y costos solo los ve quien tiene permiso: se filtran desde el servidor, no solo se esconden en la pantalla.',
        },
        {
          icono: 'bitacora',
          titulo: 'Todo queda registrado',
          texto:
            'Los cambios del embarque (fases, hitos, compuertas) quedan en su bitácora con quién y cuándo. Una factura emitida no cambia: para corregirla se cancela y se reemite.',
        },
        {
          icono: 'nube',
          titulo: 'Infraestructura en AWS',
          texto:
            'Avanza corre en Amazon Web Services. Los archivos (PODs, facturas) se guardan en almacenamiento privado y se abren con ligas que vencen, y toda conexión va cifrada (HTTPS).',
        },
      ],
      nunca: 'Tus datos nunca se comparten con nadie sin tu permiso.',
      masInfo: 'Conoce más sobre seguridad →',
    },
    preguntas: {
      titulo: 'Preguntas frecuentes',
      lista: [
        {
          p: '¿De verdad es gratis?',
          r: 'Sí. Coordinar embarques es gratis para siempre, con usuarios ilimitados y sin tarjeta. Solo pagas si quieres facturación y cobranza, o integrar tus unidades y GPS.',
        },
        { p: '¿Tengo que migrar toda mi operación?', r: 'No. Empieza con tu próximo embarque y agrega el resto cuando quieras.' },
        { p: '¿Necesito GPS?', r: 'No. Todo hito se puede capturar a mano. Si tienes GPS, es una fuente más de los mismos datos.' },
        { p: '¿Sirve si no cruzo la frontera?', r: 'Sí. Avanza funciona igual para operación solo en México, solo en Estados Unidos o de cruce.' },
        { p: '¿Funciona en el celular?', r: 'Sí, en el navegador del celular, la tableta o la computadora. No hay que instalar nada.' },
        {
          p: '¿Mis datos están separados de otras empresas?',
          r: 'Sí. Cada empresa es una cuenta aislada; nadie de fuera ve tus embarques, clientes ni precios.',
        },
      ],
    },
    cierre: {
      antes: 'Mañana a las 7 hay otro embarque.',
      titulo: 'Adelántate al embarque.',
      boton: 'Empieza gratis',
      nota: 'Sin tarjeta. Sin llamada de ventas. Empieza con tu próximo embarque. ·',
      demo: '¿Prefieres una demo?',
    },
  },
  en: {
    meta: {
      titulo: 'Avanza · Proactive freight coordination',
      descripcion:
        'Free TMS to run truckload freight in Mexico and the US: the driver message, the paperwork and the appointments, ready before anyone calls.',
    },
    heroe: {
      categoria: 'PROACTIVE FREIGHT COORDINATION',
      titular: 'The best load is the one nobody calls about.',
      bajada:
        'Avanza prepares every step from the moment you schedule the load: the full message to the driver, the paperwork, the appointments. The answers show up before the questions.',
      comoFunciona: 'See how it works',
      anclaComoFunciona: 'how-it-works',
      nota: 'Free to start · No credit card · No sales call',
      chat: {
        encabezado: 'Carrier · Dispatch',
        sub: 'Pickup scheduled for 7:00 AM',
        hoy: 'TODAY',
        mensajes: [
          { lado: 'yo', texto: 'Is the truck on its way?', hora: '6:45' },
          { lado: 'otro', texto: "Driver's almost there", hora: '7:04' },
          { lado: 'otro', texto: 'Let me check with him', hora: '7:51' },
        ],
        llamadas: '3 missed calls · 8:20',
        mensajesDespues: [
          { texto: 'Truck broke down', hora: '8:37' },
          { texto: '10 minutes out', hora: '9:40' },
        ],
        aviso: {
          quien: 'Avanza · 7:05',
          texto: '“Confirm departure” went overdue 5 min ago. I flagged Dispatch and left the carrier message ready to copy.',
        },
      },
    },
    dolor: {
      titulo: "It's not the truck.",
      subtitulo: "It's everything you have to remember to get the truck there.",
      tarjetas: [
        { icono: 'telefono', titulo: 'Three unanswered calls', texto: "Your customer is asking, and you're still waiting on the carrier." },
        { icono: 'reloj', titulo: 'An appointment that moved', texto: 'Everyone knew. Except the one person who needed to.' },
        { icono: 'documento', titulo: 'The 9:07 PM BOL', texto: 'The load left hours ago. Now someone needs the paperwork.' },
        { icono: 'globo', titulo: '“Who do I check in with?”', texto: 'The driver is at the gate and nobody told him who to ask for.' },
        { icono: 'tendencia', titulo: '“Another breakdown”', texto: 'Same truck. Third time this month.' },
        { icono: 'billete', titulo: '“Need quick pay today”', texto: 'But nobody has sent the POD yet.' },
      ],
      cierre: ['Moving one load takes dozens of small things.', 'Avanza makes sure none of them depend on your memory.'],
    },
    dosFormas: {
      etiqueta: 'TWO WAYS TO RUN THE SAME LOAD',
      titulo: 'Some loads flow. Others chase you.',
      bajada: "The difference isn't the truck. It's whether the answers showed up before the questions.",
      reactivo: {
        titulo: 'They chase you',
        tipo: 'REACTIVE',
        mensajeEtiqueta: 'Message to the driver',
        mensaje: 'You have a pickup at Otay Plant.',
        sigueEtiqueta: 'What happens next',
        pasos: [
          '7:02 · Driver: Which trailer? What time?',
          '7:40 · Driver: Who do I check in with?',
          '8:15 · Dispatcher: the driver can’t reach you.',
          '8:50 · Dispatch manager: what’s going on with this load?',
        ],
        final: '9:30 · Your customer: where’s my freight?',
        cierre: 'Every unanswered question goes one level up, and the pressure builds.',
      },
      proactivo: {
        titulo: 'Already handled',
        tipo: 'PROACTIVE',
        mensajeEtiqueta: 'Message to the driver, drafted by Avanza',
        mensaje:
          'Pickup at Otay Plant, tomorrow 7:00 AM. Trailer 5321. Check in at the gate with PO 48817 and ask for Laura in shipping. Deliver to San Diego Warehouse by 1:00 PM.',
        sigueEtiqueta: 'What happens next',
        pasos: ['The day before · Paperwork requested and ready', '7:02 · The carrier confirms by link', '7:05 · Departure logged; the customer already knows'],
        final: 'Nobody had to ask.',
        cierre: 'The answers showed up before the questions. That’s how a load flows.',
      },
    },
    asiSeVe: {
      etiqueta: 'THIS IS AVANZA',
      titulo: "One load. One place to see what happened, what's missing and who's next.",
      folio: 'SRV-192',
      fase: 'Assigned',
      trayecto: 'Otay Plant → San Diego Warehouse · Pickup 7:00 AM',
      fases: ['Scheduled', 'Confirmed', 'Assigned', 'In transit', 'Delivered'],
      actividades: [
        { estado: 'hecha', texto: 'Confirm with the carrier', detalle: 'Dispatch · 6:58' },
        { estado: 'hecha', texto: 'Assign truck and driver', detalle: 'Dispatch · 7:10' },
        { estado: 'hecha', texto: 'BOL to the warehouse', detalle: 'Documents · attached' },
        { estado: 'ahora', texto: 'Log departure from the plant', detalle: 'Due in 32 min' },
        { estado: 'pendiente', texto: 'POD photo', detalle: 'Delivered' },
      ],
      lado: [
        { tipo: 'ok', texto: '✓ Carrier confirmed' },
        { tipo: 'ok', texto: '✓ Truck assigned' },
        { tipo: 'alerta', texto: '! Departure due in 32 min' },
        { tipo: 'ok', texto: '✓ BOL attached' },
        { tipo: 'espera', texto: '→ Waiting on POD' },
      ],
      maqueta: 'Mock-up: replaced by a real product screenshot when the site is built.',
    },
    tres: {
      titulo: 'Three things Avanza does for you.',
      uno: {
        titulo: "Know what's next before anyone asks.",
        texto:
          "Every load knows what's next. Avanza assigns tasks, owners and deadlines; if something doesn't happen when it should, the team knows.",
        fases: 'Scheduled → Confirmed → Assigned → In transit → Delivered',
        ahora: 'NOW',
        actividad: 'Confirm departure with the carrier',
        vencida: 'Overdue 10 min',
        responde: 'Owner: Dispatch · Escalated at 7:05',
        copiar: 'Copy carrier message',
        marcar: 'Mark confirmed',
        luego: 'Next: Assign truck · Pickup appointment',
      },
      dos: {
        titulo: 'Stop writing the same message.',
        texto:
          "Avanza drafts the communication from the load details: confirmations, instructions and paperwork go out from the same place. The carrier confirms with a link and it's on record.",
        remate: 'Less copying. Less pasting. Less chasing.',
        tarjeta: 'Carrier message',
        confirmado: 'Confirmed by link · 7:02',
        mensaje:
          'Hi, confirming load SRV-192: pickup at Otay Plant tomorrow 7:00 AM, trailer 5321. Delivery at San Diego Warehouse by 1:00 PM. Can you confirm truck and driver here?',
        enlace: 'avanza.link/c/…',
        botones: ['Copy for text', 'Send by email', 'Rate confirmation PDF'],
      },
      tres: {
        titulo: 'Your best process. Every time.',
        texto:
          "Does this lane always need an appointment? Avanza knows. Does this customer always ask for a certain document? Avanza remembers. Someone to notify before delivery? It's already built into the process.",
        cita: "What lives in your best coordinator's head today lives in Avanza tomorrow.",
        rutaEtiqueta: 'LANE',
        ruta: 'Otay Plant → San Diego Warehouse',
        pasos: [
          { texto: 'Book pickup appointment', fase: 'Scheduled' },
          { texto: 'Send BOL to the warehouse before departure', fase: 'Assigned' },
          { texto: 'Notify customer on arrival', fase: 'In transit' },
          { texto: 'POD photo', fase: 'Delivered' },
        ],
        nota: 'Applies automatically to the next load on this lane',
      },
    },
    antes: {
      titulo: "Same old problems. You just don't have to chase them anymore.",
      antes: 'BEFORE',
      con: 'WITH AVANZA',
      filas: [
        ['“Did they confirm yet?”', 'Confirmation on record, with a timestamp'],
        ['Three calls to the carrier', 'Follow-up and escalation to the team that owns it'],
        ['Spreadsheet + texts + email', 'Everything on the load'],
        ['“Who was supposed to do that?”', 'Every task has an owner'],
        ["“Where's the BOL?”", 'Documents live inside the load'],
        ['“It slipped my mind”', "Tasks with deadlines and a heads-up before they're due"],
        ['Waiting on the POD to invoice', "POD photo in, invoice ready once everything's there"],
        ['Remembering how each lane runs', "The lane's process repeats itself"],
      ],
    },
    paraTi: {
      titulo: 'If you coordinate loads, Avanza is for you.',
      perfiles: [
        {
          icono: 'planta',
          titulo: 'Shippers',
          texto: 'Multiple carriers, appointments and loads, with Avanza running next to your ERP.',
          remate: 'Stop chasing status.',
          enlace: 'Avanza for shippers →',
          clave: 'soluciones-logistica',
        },
        {
          icono: 'red',
          titulo: 'Freight brokers',
          texto: 'Your customer wants answers even when your carrier goes quiet.',
          remate: 'Keep every load under control.',
          enlace: 'Avanza for brokers →',
          clave: 'soluciones-brokers',
        },
        {
          icono: 'camion',
          titulo: 'Carriers',
          texto: 'Trucks, drivers, trailers, paperwork, PODs and billing.',
          remate: 'From dispatch to payment.',
          enlace: 'Avanza for carriers →',
          clave: 'soluciones-transportistas',
        },
      ],
    },
    empieza: {
      titulo: 'Start with your next load.',
      lineas: ['No need to migrate your whole operation.', 'No need to talk to sales.', 'No credit card.'],
      etiqueta: 'COORDINATING LOADS',
      gratis: 'Free. Forever.',
      ilimitados: 'Unlimited users · Unlimited loads',
      crear: 'Create my account',
      planes: [
        { nombre: 'Coordinate', texto: 'Your whole operation · Free' },
        { nombre: 'Broker', texto: '+ Invoicing, receivables and payables' },
        { nombre: 'Carrier', texto: '+ Trucks, GPS and tracking' },
      ],
      verPlanes: 'See plans →',
    },
    seguridad: {
      etiqueta: 'SECURITY AND PRIVACY',
      titulo: 'Your loads, your customers and your rates are yours.',
      bajada: 'Avanza is built so every company sees only its own data and every login stays under control.',
      tarjetas: [
        {
          icono: 'empresas',
          titulo: 'Every company, isolated',
          texto:
            'Your data lives apart from every other company’s. The database rejects any query that crosses from one company to another, and automated tests check it across the whole system.',
        },
        {
          icono: 'candado',
          titulo: 'Passwords nobody knows',
          texto: 'Stored with one-way encryption (scrypt): neither we nor your admin can see them. Each person sets their own from a link sent to their email.',
        },
        {
          icono: 'reloj',
          titulo: 'Sessions under control',
          texto: 'Sessions expire on their own, you can sign out of every device at once, and after 5 failed attempts the account waits before trying again.',
        },
        {
          icono: 'persona',
          titulo: 'Everyone sees what they need',
          texto: 'Permissions by team and by screen. Rates and costs are only visible with permission: they’re filtered on the server, not just hidden on screen.',
        },
        {
          icono: 'bitacora',
          titulo: 'Everything on record',
          texto: 'Load changes (phases, milestones, sign-offs) are logged with who and when. An issued invoice never changes: to fix it, you cancel and reissue.',
        },
        {
          icono: 'nube',
          titulo: 'Built on AWS',
          texto:
            'Avanza runs on Amazon Web Services. Files (PODs, invoices) are kept in private storage and opened through links that expire, and every connection is encrypted (HTTPS).',
        },
      ],
      nunca: 'Your data is never shared with anyone without your permission.',
      masInfo: 'Learn more about security →',
    },
    preguntas: {
      titulo: 'Frequently asked questions',
      lista: [
        {
          p: 'Is it really free?',
          r: 'Yes. Coordinating loads is free forever, with unlimited users and no credit card. You only pay if you want invoicing and collections, or to connect your trucks and GPS.',
        },
        { p: 'Do I have to move my whole operation over?', r: "No. Start with your next load and bring in the rest when you're ready." },
        { p: 'Do I need GPS?', r: "No. Every milestone can be entered by hand. If you have GPS, it's one more source of the same data." },
        { p: 'Does it work if I never cross the border?', r: 'Yes. Avanza works the same for US-only, Mexico-only or cross-border operations.' },
        { p: 'Does it work on my phone?', r: 'Yes, in the browser on your phone, tablet or computer. Nothing to install.' },
        { p: 'Is my data kept apart from other companies?', r: 'Yes. Each company is its own isolated account; no outsider sees your loads, customers or rates.' },
      ],
    },
    cierre: {
      antes: "There's another load at 7 tomorrow.",
      titulo: 'Get ahead of every load.',
      boton: 'Start for free',
      nota: 'No credit card. No sales call. Start with your next load. ·',
      demo: 'Rather see a demo?',
    },
  },
};
