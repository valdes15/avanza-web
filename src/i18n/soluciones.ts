/**
 * Soluciones (revision-20 §4): el índice y una página por perfil, cada una con el problema de ESE perfil.
 * - Brokers: disenos/SolucionBrokers.dc.html, sin "gratis" ni planes (§6) y con "rate con" cambiado por "confirmación de
 *   tarifa" (CLAUDE.md del sitio lo pedía confirmar con Pedro: va en el reporte).
 * - Logística, Transportistas y Transportista y broker: copia NUESTRA con la estructura de Brokers; va a revisión de Pedro.
 * - "Lo que se apaga" sale de los preajustes reales del producto (apps/api/src/negocio/modulos.ts).
 * Toda afirmación sobre lo que Avanza hace está verificada en el repo del producto.
 */
import type { ClaveRuta, Idioma } from './rutas';

export type ClavePerfil = 'soluciones-logistica' | 'soluciones-brokers' | 'soluciones-transportistas' | 'soluciones-carrier-broker';

export type Perfil = {
  meta: { titulo: string; descripcion: string };
  etiqueta: string;
  titulo: string;
  bajada: string;
  tarjeta: { titulo: string; filas: { texto: string; estado: string; tono: 'ok' | 'alerta' | 'neutro' }[] };
  hoy: { titulo: string; hoy: string; con: string; filas: [string, string][] };
  usa: { titulo: string; cosas: { titulo: string; texto: string }[] };
  apaga: { titulo: string; texto: string; lista: string[] };
  cuesta: { titulo: string; texto: string };
  preguntas: { titulo: string; lista: { p: string; r: string }[] };
};

type Indice = {
  meta: { titulo: string; descripcion: string };
  etiqueta: string;
  titulo: string;
  bajada: string;
  porLoQueHaces: string;
  perfiles: { clave: ClavePerfil; etiqueta: string; titulo: string; texto: string; enlace: string }[];
  porDonde: { titulo: string; bajada: string; casos: { titulo: string; texto: string }[] };
};

export const SOLUCIONES: Record<Idioma, { indice: Indice; perfiles: Record<ClavePerfil, Perfil> }> = {
  es: {
    indice: {
      meta: {
        titulo: 'Soluciones · Avanza',
        descripcion: 'Avanza para el dueño de la mercancía, el broker, el transportista y quien es las dos cosas: cada uno con su problema y sin pantallas que le sobren.',
      },
      etiqueta: 'SOLUCIONES',
      titulo: 'Si coordinas embarques, Avanza es para ti.',
      bajada:
        'No importa si eres dueño de la mercancía, broker o transportista: todos coordinan embarques. Elige tu caso y ve cómo se ve tu día con Avanza.',
      porLoQueHaces: 'Por lo que haces',
      perfiles: [
        {
          clave: 'soluciones-logistica',
          etiqueta: 'LOGÍSTICA · DUEÑO DE LA MERCANCÍA',
          titulo: 'Deja de perseguir estatus a tus carriers.',
          texto: 'Coordinas varios carriers y brokers para tu planta o almacén. Avanza te dice dónde va cada embarque sin tener que preguntar, y vive al lado de tu ERP.',
          enlace: 'Ver Avanza para logística →',
        },
        {
          clave: 'soluciones-brokers',
          etiqueta: 'BROKERS',
          titulo: 'Tu cliente pregunta. Tu carrier no contesta.',
          texto: 'Quedas en medio de los dos. Avanza le manda al carrier todo lo que necesita, registra su confirmación y te avisa antes de que tu cliente tenga que preguntar.',
          enlace: 'Ver Avanza para brokers →',
        },
        {
          clave: 'soluciones-transportistas',
          etiqueta: 'TRANSPORTISTAS',
          titulo: 'Del despacho al pago, sin perder el hilo.',
          texto: 'Unidades, choferes, cajas, documentos y PODs en un lugar. El chofer recibe el mensaje completo y la factura sale con sus comprobantes.',
          enlace: 'Ver Avanza para transportistas →',
        },
        {
          clave: 'soluciones-carrier-broker',
          etiqueta: 'TRANSPORTISTA Y BROKER',
          titulo: 'Tus unidades y las de tus carriers, sin revolverlas.',
          texto: 'Mueves carga con tu flota y subcontratas lo que no alcanzas. Cada tramo dice quién lo llevó, y cada embarque, cuánto dejó.',
          enlace: 'Ver Avanza para transportista y broker →',
        },
      ],
      porDonde: {
        titulo: 'Por dónde operas',
        bajada: 'Avanza funciona igual para operación nacional o de cruce. Lo que cambia es lo que se activa.',
        casos: [
          {
            titulo: 'Cruce México – Estados Unidos',
            texto: 'Tramos de cada lado, pesos y dólares por separado, carta porte y las actividades del cruce en la misma ruta.',
          },
          { titulo: 'Solo en México', texto: 'IVA y retenciones calculadas por cada cargo, franja fronteriza incluida, y carta porte cuando la necesitas.' },
          { titulo: 'Solo en Estados Unidos', texto: 'En dólares y en millas, con invoices en inglés. Sin pantallas de impuestos mexicanos que no usas.' },
        ],
      },
    },
    perfiles: {
      'soluciones-brokers': {
        meta: {
          titulo: 'Avanza para brokers',
          descripcion: 'Para el broker que queda en medio: el carrier confirma con un enlace, el tender se revisa concepto por concepto y el margen se ve por carga.',
        },
        etiqueta: 'SOLUCIONES · BROKERS',
        titulo: 'Tu cliente pregunta. Tu carrier no contesta.',
        bajada:
          'Como broker quedas en medio de los dos. Avanza le manda al carrier todo lo que necesita desde el principio, registra cada confirmación y te avisa antes de que tu cliente tenga que preguntar.',
        tarjeta: {
          titulo: 'TUS CARGAS DE HOY',
          filas: [
            { texto: 'SRV-204 · Laredo → Dallas', estado: 'Confirmada 7:02', tono: 'ok' },
            { texto: 'SRV-205 · Otay → Phoenix', estado: 'En tránsito', tono: 'neutro' },
            { texto: 'SRV-206 · Monterrey → Houston', estado: 'Sin confirmar · 15 min', tono: 'alerta' },
            { texto: 'SRV-207 · Querétaro → Laredo', estado: 'Programada', tono: 'neutro' },
          ],
        },
        hoy: {
          titulo: 'Lo que te quita el día hoy, y cómo lo resuelve Avanza.',
          hoy: 'HOY',
          con: 'CON AVANZA',
          filas: [
            ['Mandas la confirmación de tarifa por correo y no sabes si el carrier la leyó.', 'La carta de instrucción sale en PDF y el carrier confirma con un enlace. Queda la hora.'],
            ['El cliente te pregunta y tú todavía estás marcándole al carrier.', 'La confirmación sin respuesta se vuelve actividad vencida y se escala antes de que el cliente pregunte.'],
            ['El tender del cliente trae una tarifa distinta a la que pactaron.', 'Avanza compara el tender contra lo pactado y decides concepto por concepto.'],
            ['La factura del carrier llega semanas después y no sabes cuánto ganaste.', 'El costo cuenta desde el mes del embarque; la utilidad se ve sin esperar la factura.'],
            ['Facturas tarde porque falta un POD.', 'La factura sale con los PODs adjuntos cuando el embarque está completo.'],
          ],
        },
        usa: {
          titulo: 'Lo que más usa un broker en Avanza',
          cosas: [
            {
              titulo: 'Carta de instrucción y confirmación por enlace',
              texto: 'El carrier recibe todo lo del viaje y confirma sin crear cuenta. Si el embarque se cancela, también se le avisa.',
            },
            {
              titulo: 'Margen por carga',
              texto: 'Precio y costo de cada embarque, en pesos o dólares, con la utilidad en tu moneda. Solo lo ve quien tiene permiso.',
            },
            {
              titulo: 'Tarifas del carrier y del cliente',
              texto: 'La tarifa del proveedor prellena el costo, y la referencia de precio sale de lo que ya cobraste en esa zona.',
            },
            { titulo: 'Cobrar y pagar', texto: 'Facturas con PODs, cuentas por cobrar con antigüedad y facturas de carrier contra lo que pactaste.' },
          ],
        },
        apaga: {
          titulo: 'No te van a sobrar pantallas.',
          texto: 'Sin unidades propias, lo de flota se queda apagado. Si mañana compras un tractor, se prende con un interruptor y nada se pierde.',
          lista: ['Flota, cajas y mantenimiento', 'Inventario de cajas como activo'],
        },
        cuesta: {
          titulo: '¿Cuánto cuesta para un broker?',
          texto: 'Depende del tamaño de tu operación. En la demo vemos tu caso y te decimos cómo se cobraría. Nunca por usuario.',
        },
        preguntas: {
          titulo: 'Preguntas de brokers',
          lista: [
            { p: '¿Mis carriers tienen que usar Avanza?', r: 'No. Reciben la carta de instrucción y confirman con un enlace, sin crear cuenta.' },
            {
              p: '¿Mi cliente puede ver mis costos o mis carriers?',
              r: 'No. Tu información vive en tu cuenta y nada se comparte sin tu permiso. Dentro de tu equipo, precios y costos solo los ve quien tiene permiso.',
            },
            { p: '¿Avanza me va a competir consiguiendo cargas?', r: 'No. Avanza es un TMS: no mueve carga ni hace brokerage. No competimos con nuestros clientes.' },
            { p: '¿Funciona para cargas dentro de EUA?', r: 'Sí. Con cruce o sin cruce, en dólares y en millas.' },
          ],
        },
      },
      'soluciones-logistica': {
        meta: {
          titulo: 'Avanza para logística',
          descripcion: 'Para el equipo de logística del dueño de la mercancía: tu ERP no sabe dónde va el embarque; Avanza sí, al lado de tu ERP.',
        },
        etiqueta: 'SOLUCIONES · LOGÍSTICA',
        titulo: 'Tu ERP no sabe dónde va el embarque.',
        bajada:
          'Tu ERP vende y factura. Lo que pasa entre que la carga sale de tu andén y llega con tu cliente vive en correos, llamadas y una hoja de cálculo. Avanza se pone al lado de tu ERP y se encarga de eso.',
        tarjeta: {
          titulo: 'TUS EMBARQUES DE HOY',
          filas: [
            { texto: 'SRV-311 · Planta Otay → Almacén San Diego', estado: 'Cita 1:00 PM', tono: 'ok' },
            { texto: 'SRV-312 · Planta Otay → Laredo', estado: 'Sin carrier asignado', tono: 'alerta' },
            { texto: 'SRV-313 · Almacén Tijuana → Monterrey', estado: 'En tránsito', tono: 'neutro' },
          ],
        },
        hoy: {
          titulo: 'Lo que te quita el día hoy, y cómo lo resuelve Avanza.',
          hoy: 'HOY',
          con: 'CON AVANZA',
          filas: [
            ['Le preguntas a cada carrier por WhatsApp dónde va tu carga.', 'Cada embarque dice en qué fase va, qué sigue y quién lo tiene que hacer.'],
            ['La cita de descarga cambió y te enteraste cuando el camión ya estaba en la puerta.', 'Las citas viven en el embarque, con cada reprogramación y su motivo.'],
            ['El carrier dice que no le llegó el documento.', 'La carta de instrucción sale con todo el viaje y el carrier confirma con un enlace. Queda la hora.'],
            ['La factura del carrier no cuadra con lo que acordaron.', 'Cada factura de proveedor se revisa contra lo acordado en ese embarque, antes de pagarla.'],
            ['El POD llega semanas después, si llega.', 'El POD se sube en foto desde el celular y el embarque sabe si le falta.'],
          ],
        },
        usa: {
          titulo: 'Lo que más usa un equipo de logística',
          cosas: [
            { titulo: 'Asignar transportistas', texto: 'Cada tramo con su carrier, y la carta de instrucción lista para mandar.' },
            { titulo: 'Citas de carga y entrega', texto: 'Folio, ventana, reprogramaciones con motivo y lo que falta antes de la cita.' },
            { titulo: 'Documentos del embarque', texto: 'BOL, POD y lo que pida cada lugar, dentro del embarque y no en un correo.' },
            { titulo: 'Aprobar lo que cobran', texto: 'Las facturas de tus carriers contra lo acordado, y cuánto te costó cada embarque.' },
          ],
        },
        apaga: {
          titulo: 'No te van a sobrar pantallas.',
          texto: 'Tú no vendes flete: controlas su costo. Lo que es de quien cobra por mover carga se queda apagado.',
          lista: ['Cotizaciones y perfiles de tarifa', 'Facturación al cliente y cuentas por cobrar', 'Flota, cajas y mantenimiento'],
        },
        cuesta: {
          titulo: '¿Cuánto cuesta para un equipo de logística?',
          texto: 'Depende del tamaño de tu operación. En la demo vemos tu caso y te decimos cómo se cobraría. Nunca por usuario.',
        },
        preguntas: {
          titulo: 'Preguntas de logística',
          lista: [
            {
              p: '¿Se conecta con mi ERP?',
              r: 'Todavía no. Mientras llega, Avanza trabaja al lado de tu ERP: coordina el embarque y te deja la información lista para pasarla.',
            },
            { p: '¿Mis carriers tienen que usar Avanza?', r: 'No. Reciben la carta de instrucción y confirman con un enlace, sin crear cuenta.' },
            { p: '¿Sirve si trabajo con brokers y no con carriers?', r: 'Sí. A Avanza le da igual quién lleva la carga: el tramo dice a quién se la diste.' },
          ],
        },
      },
      'soluciones-transportistas': {
        meta: {
          titulo: 'Avanza para transportistas',
          descripcion: 'Para el transportista con unidades propias: del despacho al pago, con el mensaje completo al chofer y saber qué viaje dejó dinero.',
        },
        etiqueta: 'SOLUCIONES · TRANSPORTISTAS',
        titulo: 'Del despacho al pago, sin perder el hilo.',
        bajada:
          'Tus unidades, tus choferes y tus cajas se mueven todo el día, y el que sabe dónde está cada cosa es el despachador de turno. Avanza lo deja escrito en el embarque, para todos.',
        tarjeta: {
          titulo: 'TU FLOTA HOY',
          filas: [
            { texto: 'T-14 · Juan · Otay → San Diego', estado: 'En tránsito', tono: 'neutro' },
            { texto: 'T-09 · Mantenimiento preventivo', estado: 'Fuera hoy', tono: 'alerta' },
            { texto: 'Caja 5321 · Patio Otay', estado: '3 días en sitio', tono: 'alerta' },
            { texto: 'T-21 · Termina en Tecate 4:00 PM', estado: 'Disponible', tono: 'ok' },
          ],
        },
        hoy: {
          titulo: 'Lo que te quita el día hoy, y cómo lo resuelve Avanza.',
          hoy: 'HOY',
          con: 'CON AVANZA',
          filas: [
            ['El chofer te marca tres veces para preguntar la caja, la hora y con quién se reporta.', 'El mensaje al chofer sale armado con todo el viaje, listo para copiar a WhatsApp.'],
            ['Nadie sabe cuántos días lleva una caja en el patio del cliente.', 'El inventario de cajas dice dónde está cada una y desde cuándo.'],
            ['El mismo tractor se descompone por tercera vez este mes.', 'El mantenimiento de cada unidad queda registrado, con su costo.'],
            ['Facturas tarde porque el POD sigue en la cabina.', 'El POD se sube en foto desde el celular y la factura sale con sus comprobantes.'],
            ['Al final del mes no sabes qué viaje dejó dinero.', 'La utilidad se ve por embarque, con el costo en el mes del viaje.'],
          ],
        },
        usa: {
          titulo: 'Lo que más usa un transportista',
          cosas: [
            { titulo: 'Ruteo por unidad', texto: 'Dónde termina lo que trae cada tractor y qué carga le queda cerca.' },
            { titulo: 'Unidades, cajas y mantenimiento', texto: 'La ficha de cada unidad con su historial, su depreciación y su chofer habitual.' },
            { titulo: 'El mensaje completo al chofer', texto: 'Caja, cita, a quién buscar y la referencia, sin que te tenga que marcar.' },
            { titulo: 'Facturar con comprobantes', texto: 'La factura en PDF con los PODs adjuntos, y cuentas por cobrar con antigüedad.' },
          ],
        },
        apaga: {
          titulo: 'No te van a sobrar pantallas.',
          texto: 'Si no subcontratas, la pantalla de carriers y owners se queda apagada. El día que subcontrates una carga, se prende con un interruptor.',
          lista: ['Carriers / owners'],
        },
        cuesta: {
          titulo: '¿Cuánto cuesta para un transportista?',
          texto: 'Depende del tamaño de tu operación. En la demo vemos tu caso y te decimos cómo se cobraría. Nunca por usuario.',
        },
        preguntas: {
          titulo: 'Preguntas de transportistas',
          lista: [
            { p: '¿Necesito GPS?', r: 'No. Todo hito se puede capturar a mano. Si tienes GPS, es una fuente más de los mismos datos; la integración llega próximamente.' },
            { p: '¿El chofer tiene que instalar algo?', r: 'No. El mensaje le llega por WhatsApp, listo para copiar. El POD lo sube tu equipo en foto desde el navegador del celular.' },
            { p: '¿Sirve si cruzo a Estados Unidos?', r: 'Sí. Tramos de cada lado, pesos y dólares por separado, y carta porte cuando la necesitas.' },
          ],
        },
      },
      'soluciones-carrier-broker': {
        meta: {
          titulo: 'Avanza para transportista y broker',
          descripcion: 'Para quien mueve carga con su flota y subcontrata lo que no alcanza: cada tramo dice quién lo llevó y cada embarque cuánto dejó.',
        },
        etiqueta: 'SOLUCIONES · TRANSPORTISTA Y BROKER',
        titulo: 'Tus unidades y las de tus carriers, sin revolverlas.',
        bajada:
          'Mueves carga con tu flota y subcontratas lo que no alcanzas, a veces en el mismo embarque. Si todo cae en la misma hoja, no sabes qué te deja cada lado. En Avanza cada tramo dice quién lo llevó.',
        tarjeta: {
          titulo: 'SRV-418 · OTAY → DALLAS',
          filas: [
            { texto: 'Tramo 1 · Otay → San Diego', estado: 'Tu T-14', tono: 'ok' },
            { texto: 'Tramo 2 · San Diego → Dallas', estado: 'Carrier externo', tono: 'neutro' },
            { texto: 'Costo del carrier', estado: 'Acordado · sin factura', tono: 'alerta' },
          ],
        },
        hoy: {
          titulo: 'Lo que te quita el día hoy, y cómo lo resuelve Avanza.',
          hoy: 'HOY',
          con: 'CON AVANZA',
          filas: [
            ['El cruce lo haces tú y el tramo largo lo subcontratas, y cada uno vive en una hoja distinta.', 'Un embarque, con sus tramos: cada uno con su unidad o su carrier.'],
            ['El carrier del tramo largo no confirma y tu cliente ya está preguntando.', 'La carta de instrucción sale con el tramo y el carrier confirma con un enlace. Lo que no se confirma, se escala.'],
            ['No sabes cuánto te costó el carrier hasta que llega su factura.', 'El costo acordado cuenta desde el mes del embarque; la factura se revisa contra él.'],
            ['Tu flota y tus carriers se revuelven en el mismo reporte.', 'Cada costo va en su renglón, con su proveedor, y la utilidad se ve por embarque.'],
            ['Tu despachador no sabe qué tractor queda libre cerca de la siguiente carga.', 'El ruteo dice dónde termina cada unidad y qué carga le queda cerca.'],
          ],
        },
        usa: {
          titulo: 'Lo que más usa un transportista y broker',
          cosas: [
            { titulo: 'Tramos con su dueño', texto: 'Cada tramo con tu unidad o con el carrier que lo lleva, en el mismo embarque.' },
            { titulo: 'Carta de instrucción y confirmación', texto: 'Para lo que subcontratas: el carrier confirma con un enlace, sin crear cuenta.' },
            { titulo: 'Flota y ruteo', texto: 'Unidades, cajas, mantenimiento y dónde termina cada tractor.' },
            { titulo: 'Utilidad por embarque', texto: 'Ingreso y costos en el mismo mes, aunque la factura del carrier llegue después.' },
          ],
        },
        apaga: {
          titulo: 'Todo prendido, cada cosa en su lugar.',
          texto: 'Eres las dos cosas, así que usas las dos partes. Y si un día dejas de subcontratar o vendes la flota, esa parte se apaga con un interruptor y nada se pierde.',
          lista: [],
        },
        cuesta: {
          titulo: '¿Cuánto cuesta para un transportista y broker?',
          texto: 'Depende del tamaño de tu operación. En la demo vemos tu caso y te decimos cómo se cobraría. Nunca por usuario.',
        },
        preguntas: {
          titulo: 'Preguntas de transportista y broker',
          lista: [
            { p: '¿Puedo mezclar mi unidad y un carrier en el mismo embarque?', r: 'Sí. Subcontratar es por tramo: cada uno dice quién lo llevó.' },
            { p: '¿Mis carriers tienen que usar Avanza?', r: 'No. Reciben la carta de instrucción y confirman con un enlace, sin crear cuenta.' },
            {
              p: '¿Puedo anotar la caja que trae el carrier?',
              r: 'Sí. Se anota desde el tramo con su número, sus placas y de quién es, para el BOL y la carta porte, sin que entre a tu inventario de activos.',
            },
          ],
        },
      },
    },
  },
  en: {
    indice: {
      meta: {
        titulo: 'Solutions · Avanza',
        descripcion: 'Avanza for shippers, brokers, carriers and carrier-brokers: each with its own problem, and no screens you don’t need.',
      },
      etiqueta: 'SOLUTIONS',
      titulo: 'If you coordinate loads, Avanza is for you.',
      bajada: "Shipper, broker or carrier: everyone coordinates loads. Pick yours and see what your day looks like with Avanza.",
      porLoQueHaces: 'By what you do',
      perfiles: [
        {
          clave: 'soluciones-logistica',
          etiqueta: 'SHIPPERS',
          titulo: 'Stop chasing your carriers for status.',
          texto: 'You juggle carriers and brokers for your plant or warehouse. Avanza tells you where every load is without asking, and runs next to your ERP.',
          enlace: 'Avanza for shippers →',
        },
        {
          clave: 'soluciones-brokers',
          etiqueta: 'BROKERS',
          titulo: 'Your customer calls. Your carrier goes quiet.',
          texto: 'You’re stuck in the middle. Avanza sends the carrier everything up front, logs the confirmation and warns you before your customer has to ask.',
          enlace: 'Avanza for brokers →',
        },
        {
          clave: 'soluciones-transportistas',
          etiqueta: 'CARRIERS',
          titulo: 'From dispatch to payment, without losing the thread.',
          texto: 'Trucks, drivers, trailers, paperwork and PODs in one place. The driver gets the full message and the invoice goes out with its proof.',
          enlace: 'Avanza for carriers →',
        },
        {
          clave: 'soluciones-carrier-broker',
          etiqueta: 'CARRIER-BROKERS',
          titulo: 'Your trucks and your carriers’, kept apart.',
          texto: 'You haul with your fleet and broker out what you can’t cover. Every leg says who ran it, and every load what it made.',
          enlace: 'Avanza for carrier-brokers →',
        },
      ],
      porDonde: {
        titulo: 'Where you run',
        bajada: 'Avanza works the same domestic or cross-border. What changes is what gets switched on.',
        casos: [
          { titulo: 'Mexico – US cross-border', texto: 'Legs on each side, pesos and dollars kept apart, Carta Porte and the crossing tasks on the same lane.' },
          { titulo: 'Mexico only', texto: 'Mexican VAT and withholding calculated on every charge, border zone included, and Carta Porte when you need it.' },
          { titulo: 'US only', texto: 'Dollars and miles, invoices in English. No Mexican tax screens you don’t use.' },
        ],
      },
    },
    perfiles: {
      'soluciones-brokers': {
        meta: {
          titulo: 'Avanza for freight brokers',
          descripcion: 'For the broker stuck in the middle: carriers confirm by link, tenders get reviewed line by line and you see margin per load.',
        },
        etiqueta: 'SOLUTIONS · BROKERS',
        titulo: 'Your customer calls. Your carrier goes quiet.',
        bajada:
          'As a broker you’re stuck in the middle. Avanza sends the carrier everything from the start, logs every confirmation and warns you before your customer has to ask.',
        tarjeta: {
          titulo: "TODAY'S LOADS",
          filas: [
            { texto: 'SRV-204 · Laredo → Dallas', estado: 'Confirmed 7:02', tono: 'ok' },
            { texto: 'SRV-205 · Otay → Phoenix', estado: 'In transit', tono: 'neutro' },
            { texto: 'SRV-206 · Monterrey → Houston', estado: 'Unconfirmed · 15 min', tono: 'alerta' },
            { texto: 'SRV-207 · Querétaro → Laredo', estado: 'Scheduled', tono: 'neutro' },
          ],
        },
        hoy: {
          titulo: 'What eats your day today, and how Avanza handles it.',
          hoy: 'TODAY',
          con: 'WITH AVANZA',
          filas: [
            ['You email the rate con and have no idea if the carrier read it.', 'The rate confirmation goes out as a PDF and the carrier confirms with a link. Time-stamped.'],
            ['Your customer is asking and you’re still dialing the carrier.', 'An unanswered confirmation becomes an overdue task and gets escalated before the customer asks.'],
            ['The customer’s tender has a different rate than what you agreed.', 'Avanza compares the tender to what you agreed and you decide line by line.'],
            ['The carrier’s invoice shows up weeks later and you don’t know what you made.', 'Cost counts from the month of the load; you see margin without waiting for the invoice.'],
            ['You invoice late because a POD is missing.', 'The invoice goes out with the PODs attached once the load is complete.'],
          ],
        },
        usa: {
          titulo: 'What brokers use most in Avanza',
          cosas: [
            { titulo: 'Rate confirmation, confirmed by link', texto: 'The carrier gets the whole load and confirms without an account. If the load is canceled, they’re told too.' },
            { titulo: 'Margin per load', texto: 'Rate and cost on every load, in pesos or dollars, with margin in your currency. Only people with permission see it.' },
            { titulo: 'Carrier and customer rates', texto: 'The carrier’s rate pre-fills the cost, and your price reference comes from what you’ve already billed on that lane.' },
            { titulo: 'Bill and pay', texto: 'Invoices with PODs, receivables with aging, and carrier invoices checked against what you agreed.' },
          ],
        },
        apaga: {
          titulo: 'No screens you don’t need.',
          texto: 'No trucks of your own, so the fleet side stays off. Buy a tractor tomorrow and it’s one switch, nothing lost.',
          lista: ['Fleet, trailers and maintenance', 'Trailers as company assets'],
        },
        cuesta: {
          titulo: 'What does it cost a broker?',
          texto: 'It depends on the size of your operation. In the demo we look at your case and tell you how pricing would work. Never per user.',
        },
        preguntas: {
          titulo: 'Broker questions',
          lista: [
            { p: 'Do my carriers have to use Avanza?', r: 'No. They get the rate confirmation and confirm with a link, no account needed.' },
            {
              p: 'Can my customer see my costs or my carriers?',
              r: 'No. Your data lives in your account and nothing is shared without your permission. Inside your team, rates and costs are only visible with permission.',
            },
            { p: 'Will Avanza compete with me for freight?', r: 'No. Avanza is a TMS: we don’t move freight or broker loads. We don’t compete with our customers.' },
            { p: 'Does it work for US domestic loads?', r: 'Yes. Cross-border or not, in dollars and miles.' },
          ],
        },
      },
      'soluciones-logistica': {
        meta: {
          titulo: 'Avanza for shippers',
          descripcion: 'For the shipper logistics team: your ERP doesn’t know where the load is. Avanza does, running next to your ERP.',
        },
        etiqueta: 'SOLUTIONS · SHIPPERS',
        titulo: "Your ERP doesn't know where the load is.",
        bajada:
          'Your ERP sells and invoices. Everything between your dock and your customer’s door lives in emails, calls and a spreadsheet. Avanza sits next to your ERP and handles that part.',
        tarjeta: {
          titulo: "TODAY'S LOADS",
          filas: [
            { texto: 'SRV-311 · Otay Plant → San Diego Warehouse', estado: 'Appt 1:00 PM', tono: 'ok' },
            { texto: 'SRV-312 · Otay Plant → Laredo', estado: 'No carrier yet', tono: 'alerta' },
            { texto: 'SRV-313 · Tijuana Warehouse → Monterrey', estado: 'In transit', tono: 'neutro' },
          ],
        },
        hoy: {
          titulo: 'What eats your day today, and how Avanza handles it.',
          hoy: 'TODAY',
          con: 'WITH AVANZA',
          filas: [
            ['You text every carrier to ask where your freight is.', "Every load shows its stage, what's next and who owns it."],
            ['The delivery appointment moved and you found out when the truck was at the door.', 'Appointments live on the load, with every reschedule and its reason.'],
            ['The carrier says they never got the paperwork.', 'The rate confirmation goes out with the whole load and the carrier confirms with a link. Time-stamped.'],
            ["The carrier's invoice doesn't match what you agreed.", 'Every vendor invoice is checked against what was agreed on that load, before you pay it.'],
            ['The POD shows up weeks later, if at all.', 'The POD is uploaded as a phone photo and the load knows if it’s missing.'],
          ],
        },
        usa: {
          titulo: 'What shipper teams use most',
          cosas: [
            { titulo: 'Assign carriers', texto: 'Every leg with its carrier, and the rate confirmation ready to send.' },
            { titulo: 'Pickup and delivery appointments', texto: 'Number, window, reschedules with a reason, and what’s still missing before the appointment.' },
            { titulo: 'Load paperwork', texto: 'BOL, POD and whatever each location asks for, on the load and not in an email.' },
            { titulo: 'Approve what they bill', texto: 'Your carriers’ invoices against what was agreed, and what each load cost you.' },
          ],
        },
        apaga: {
          titulo: 'No screens you don’t need.',
          texto: "You don't sell freight, you control what it costs. Everything that belongs to whoever bills for hauling stays off.",
          lista: ['Quotes and rate profiles', 'Customer invoicing and receivables', 'Fleet, trailers and maintenance'],
        },
        cuesta: {
          titulo: 'What does it cost a shipper team?',
          texto: 'It depends on the size of your operation. In the demo we look at your case and tell you how pricing would work. Never per user.',
        },
        preguntas: {
          titulo: 'Shipper questions',
          lista: [
            { p: 'Does it connect to my ERP?', r: 'Not yet. Until then, Avanza runs next to your ERP: it coordinates the load and leaves the data ready to pass along.' },
            { p: 'Do my carriers have to use Avanza?', r: 'No. They get the rate confirmation and confirm with a link, no account needed.' },
            { p: 'Does it work if I use brokers instead of carriers?', r: 'Yes. Avanza doesn’t care who hauls it: the leg says who you gave it to.' },
          ],
        },
      },
      'soluciones-transportistas': {
        meta: {
          titulo: 'Avanza for carriers',
          descripcion: 'For asset-based carriers: from dispatch to payment, with the full driver message and knowing which load made money.',
        },
        etiqueta: 'SOLUTIONS · CARRIERS',
        titulo: 'From dispatch to payment, without losing the thread.',
        bajada:
          'Your trucks, drivers and trailers move all day, and the only one who knows where everything is is whoever’s on dispatch. Avanza writes it down on the load, for everyone.',
        tarjeta: {
          titulo: 'YOUR FLEET TODAY',
          filas: [
            { texto: 'T-14 · Juan · Otay → San Diego', estado: 'In transit', tono: 'neutro' },
            { texto: 'T-09 · Preventive maintenance', estado: 'Out today', tono: 'alerta' },
            { texto: 'Trailer 5321 · Otay yard', estado: '3 days on site', tono: 'alerta' },
            { texto: 'T-21 · Empties in Tecate 4:00 PM', estado: 'Available', tono: 'ok' },
          ],
        },
        hoy: {
          titulo: 'What eats your day today, and how Avanza handles it.',
          hoy: 'TODAY',
          con: 'WITH AVANZA',
          filas: [
            ['The driver calls three times: which trailer, what time, who to check in with.', 'The driver message goes out with the whole load, ready to paste into WhatsApp.'],
            ['Nobody knows how many days a trailer has been sitting at the customer.', 'Trailer inventory shows where each one is and since when.'],
            ['Same truck, third breakdown this month.', 'Every unit’s maintenance is on record, with its cost.'],
            ['You invoice late because the POD is still in the cab.', 'The POD goes in as a phone photo and the invoice goes out with its proof.'],
            ["At month-end you don't know which load made money.", 'Margin shows per load, with cost in the month of the trip.'],
          ],
        },
        usa: {
          titulo: 'What carriers use most',
          cosas: [
            { titulo: 'Routing by truck', texto: 'Where each tractor empties and which load is close by.' },
            { titulo: 'Trucks, trailers and maintenance', texto: 'Each unit’s record with its history, depreciation and usual driver.' },
            { titulo: 'The full driver message', texto: 'Trailer, appointment, who to ask for and the reference, without a phone call.' },
            { titulo: 'Invoices with proof', texto: 'The PDF invoice with PODs attached, and receivables with aging.' },
          ],
        },
        apaga: {
          titulo: 'No screens you don’t need.',
          texto: "If you don't broker out, the carriers and owner-operators screen stays off. The day you broker a load, it's one switch.",
          lista: ['Carriers / owner-operators'],
        },
        cuesta: {
          titulo: 'What does it cost a carrier?',
          texto: 'It depends on the size of your operation. In the demo we look at your case and tell you how pricing would work. Never per user.',
        },
        preguntas: {
          titulo: 'Carrier questions',
          lista: [
            { p: 'Do I need GPS?', r: 'No. Every milestone can be entered by hand. If you have GPS, it’s one more source of the same data; the integration is coming soon.' },
            { p: 'Does the driver have to install anything?', r: 'No. The message reaches them on WhatsApp, ready to paste. Your team uploads the POD photo from the phone’s browser.' },
            { p: 'Does it work if I cross into the US?', r: 'Yes. Legs on each side, pesos and dollars kept apart, and Carta Porte when you need it.' },
          ],
        },
      },
      'soluciones-carrier-broker': {
        meta: {
          titulo: 'Avanza for carrier-brokers',
          descripcion: 'For carriers who also broker: every leg says who ran it and every load what it made, without mixing your fleet and your carriers.',
        },
        etiqueta: 'SOLUTIONS · CARRIER-BROKERS',
        titulo: 'Your trucks and your carriers’, kept apart.',
        bajada:
          'You haul with your own fleet and broker out what you can’t cover, sometimes on the same load. If it all lands in one spreadsheet, you can’t tell what each side makes. In Avanza every leg says who ran it.',
        tarjeta: {
          titulo: 'SRV-418 · OTAY → DALLAS',
          filas: [
            { texto: 'Leg 1 · Otay → San Diego', estado: 'Your T-14', tono: 'ok' },
            { texto: 'Leg 2 · San Diego → Dallas', estado: 'Outside carrier', tono: 'neutro' },
            { texto: 'Carrier cost', estado: 'Agreed · not invoiced', tono: 'alerta' },
          ],
        },
        hoy: {
          titulo: 'What eats your day today, and how Avanza handles it.',
          hoy: 'TODAY',
          con: 'WITH AVANZA',
          filas: [
            ['You run the crossing and broker the long haul, and each lives in a different spreadsheet.', 'One load with its legs: each with your truck or its carrier.'],
            ["The long-haul carrier won't confirm and your customer is already asking.", "The rate confirmation goes out with the leg and the carrier confirms with a link. What doesn't get confirmed gets escalated."],
            ["You don't know what the carrier cost until the invoice arrives.", 'The agreed cost counts from the month of the load; the invoice is checked against it.'],
            ['Your fleet and your carriers get mixed in the same report.', 'Every cost is its own line, with its vendor, and margin shows per load.'],
            ["Dispatch doesn't know which tractor frees up near the next load.", 'Routing shows where each unit empties and which load is close by.'],
          ],
        },
        usa: {
          titulo: 'What carrier-brokers use most',
          cosas: [
            { titulo: 'Legs with their owner', texto: 'Every leg with your truck or the carrier running it, on the same load.' },
            { titulo: 'Rate confirmation and sign-off', texto: 'For what you broker out: the carrier confirms with a link, no account.' },
            { titulo: 'Fleet and routing', texto: 'Trucks, trailers, maintenance and where each tractor empties.' },
            { titulo: 'Margin per load', texto: "Revenue and costs in the same month, even when the carrier's invoice comes later." },
          ],
        },
        apaga: {
          titulo: 'Everything on, everything in its place.',
          texto: 'You’re both, so you use both sides. If you ever stop brokering or sell the fleet, that side switches off and nothing is lost.',
          lista: [],
        },
        cuesta: {
          titulo: 'What does it cost a carrier-broker?',
          texto: 'It depends on the size of your operation. In the demo we look at your case and tell you how pricing would work. Never per user.',
        },
        preguntas: {
          titulo: 'Carrier-broker questions',
          lista: [
            { p: 'Can I mix my truck and a carrier on the same load?', r: 'Yes. Brokering out is per leg: each one says who ran it.' },
            { p: 'Do my carriers have to use Avanza?', r: 'No. They get the rate confirmation and confirm with a link, no account needed.' },
            {
              p: "Can I log the carrier's trailer?",
              r: "Yes. You add it from the leg with its number, plates and owner, for the BOL and the Carta Porte, without it landing in your asset inventory.",
            },
          ],
        },
      },
    },
  },
};

export const CLAVES_PERFIL: ClavePerfil[] = ['soluciones-logistica', 'soluciones-brokers', 'soluciones-transportistas', 'soluciones-carrier-broker'];
export type { ClaveRuta };
