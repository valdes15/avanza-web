/** Copia de Producto: disenos/Producto.dc.html (ES) + lo de revision-20 §3. El inglés es adaptación: a revisión. */
import type { Idioma } from './rutas';

type Caso = { pasa: string; avanza?: string };
type Grupo = { nombre: string; para: string; si: string[]; pronto: string[] };

export const PRODUCTO: Record<
  Idioma,
  {
    meta: { titulo: string; descripcion: string };
    etiqueta: string;
    titulo: string;
    bajada: string;
    tarjeta: { titulo: string; filas: [string, string][] };
    recorrido: { etiqueta: string; titulo: string; tu: string; fases: { fase: string; tu: string; avanza: string }[] };
    verdad: { etiqueta: string; titulo: string; bajada: string; casos: Caso[] };
    incluye: { etiqueta: string; titulo: string; grupos: Grupo[]; precios: string };
    real: { titulo: string; puntos: { titulo: string; texto: string }[] };
    preguntas: { titulo: string; lista: { p: string; r: string }[] };
  }
> = {
  es: {
    meta: {
      titulo: 'Producto · Avanza',
      descripcion: 'Qué hace Avanza en cada embarque: sabe qué sigue, quién lo hace y para cuándo, y te lo prepara antes de que alguien lo pida.',
    },
    etiqueta: 'PRODUCTO',
    titulo: 'Todo lo que pasa en un embarque, en un solo lugar.',
    bajada:
      'Desde que se programa hasta que se cobra. Avanza sabe qué sigue en cada embarque, quién lo tiene que hacer y para cuándo, y te lo prepara antes de que alguien lo pida.',
    tarjeta: {
      titulo: 'En cada embarque, Avanza te responde:',
      filas: [
        ['¿Qué sigue?', 'Confirmar con el carrier'],
        ['¿Quién lo hace?', 'Despacho · Ana'],
        ['¿Para cuándo?', 'Hoy, 6:30 PM'],
      ],
    },
    recorrido: {
      etiqueta: 'EL RECORRIDO DE UN EMBARQUE',
      titulo: 'Cinco fases. En cada una, tú decides y Avanza prepara.',
      tu: 'TÚ',
      fases: [
        { fase: 'Programado', tu: 'Capturas cliente, ruta y fecha.', avanza: 'Arma los tramos y pone las actividades de esa ruta, cada una con su responsable.' },
        { fase: 'Confirmado', tu: 'Mandas la confirmación al carrier.', avanza: 'Escribe el mensaje y la carta de instrucción; el carrier confirma con un enlace.' },
        { fase: 'Asignado', tu: 'Asignas unidad, chofer y caja.', avanza: 'Arma el mensaje completo para el chofer y marca los documentos que falten.' },
        { fase: 'En tránsito', tu: 'Registras salida y llegada en segundos.', avanza: 'Vigila las citas y escala al equipo lo que se vence.' },
        { fase: 'Entregado', tu: 'Subes el POD en foto desde el celular.', avanza: 'Revisa que esté completo y lo deja listo para facturar.' },
      ],
    },
    verdad: {
      etiqueta: 'LO QUE PASA DE VERDAD',
      titulo: 'Hecho por alguien que ha estado ahí.',
      bajada: 'Si has coordinado carga, esto te va a sonar. Así lo resuelve Avanza.',
      casos: [
        {
          pasa: 'El tender del cliente trae el fuel calculado con otra semana de diésel, o de otra región.',
          avanza: 'lo compara contra lo pactado concepto por concepto: apruebas lo que cuadra y rechazas, con motivo, lo que no.',
        },
        {
          pasa: 'Al owner hay que mandarle todo el viaje, y que confirme.',
          avanza: 'le manda la carta de instrucción y confirma con un enlace, sin cuenta ni contraseña. Si reasignas el viaje, su enlace muere en ese momento.',
        },
        {
          pasa: 'La prueba de entrega a veces es una foto de WhatsApp, a veces la factura de exportación, a veces la trazabilidad.',
          avanza: 'cada cliente dice qué comprobante acepta, y el embarque sabe cuál le falta.',
        },
        {
          pasa: 'En paquetería casi nunca te firman nada.',
          avanza: 'el cliente que no pide comprobante queda marcado así, y eso no frena su factura.',
        },
        {
          pasa: 'La factura del carrier llega semanas después, y mientras no sabes cuánto ganaste.',
          avanza: 'el costo cuenta en el mes del embarque; cuando llega la factura y no cuadra, la diferencia se ve aparte.',
        },
        { pasa: 'La demora que no se anotó en el BOL no se cobra, por más que esté en el sistema.' },
      ],
    },
    incluye: {
      etiqueta: 'LO QUE INCLUYE',
      titulo: 'Lo que usas depende de lo que haces.',
      grupos: [
        {
          nombre: 'Coordinar',
          para: 'Para todos: logística, brokers y transportistas.',
          si: [
            'Embarques por fases, con tablero',
            'Actividades con responsable y vencimiento',
            '"Mi trabajo": lo que te toca ahora',
            'Mensajes al chofer y al carrier, listos para copiar',
            'Confirmación del carrier por enlace',
            'Citas de carga y entrega',
            'Rutas que guardan tu forma de trabajar',
            'Documentos y POD en foto',
            'Lugares con el enlace de Google Maps',
            'Búsqueda por embarque, caja o referencia',
            'Clientes y proveedores',
          ],
          pronto: [],
        },
        {
          nombre: 'Cobrar y pagar',
          para: 'Para quien cobra y paga por cada embarque.',
          si: [
            'Cotizaciones y tarifas por cliente',
            'Cargos y facturas en PDF, con PODs',
            'Cuentas por cobrar con antigüedad',
            'Facturas de proveedor y cuentas por pagar',
            'Utilidad por embarque, aunque la factura llegue después',
            'Fuel surcharge y demoras',
            'Tarifa del tender, revisada concepto por concepto',
          ],
          pronto: ['Timbrado de CFDI y carta porte · próximamente'],
        },
        {
          nombre: 'Flota',
          para: 'Para quien opera sus propias unidades.',
          si: ['Unidades, cajas y mantenimiento', 'Inventario de cajas por ubicación', 'Ruteo por unidad', 'Depreciación de unidades'],
          pronto: ['Integración con GPS · próximamente', 'Trazabilidad en vivo para tu cliente · próximamente'],
        },
      ],
      precios: 'Cómo se cobra →',
    },
    real: {
      titulo: 'Hecho para cómo se trabaja de verdad.',
      puntos: [
        { titulo: 'Con GPS o sin GPS', texto: 'Todo se puede capturar a mano. El GPS es una fuente más de los mismos datos, nunca un requisito.' },
        { titulo: 'En el celular', texto: 'Funciona en el navegador del celular, la tableta o la computadora. No hay nada que instalar.' },
        {
          titulo: 'México y Estados Unidos',
          texto: 'Pesos y dólares por separado, IVA y retenciones mexicanas calculadas, kilómetros o millas. Con cruce o sin cruce.',
        },
        { titulo: 'Tu equipo, con permisos', texto: 'Cada equipo ve lo suyo. Una persona puede trabajar en varias empresas con el mismo usuario.' },
      ],
    },
    preguntas: {
      titulo: 'Preguntas sobre el producto',
      lista: [
        { p: '¿Tengo que cargar todo mi catálogo antes de empezar?', r: 'No. Empiezas con tu próximo embarque. Clientes, lugares y rutas se van guardando con el uso.' },
        {
          p: '¿Se conecta con mi ERP o con EDI?',
          r: 'Todavía no. Mientras llega, Avanza trabaja al lado de tu ERP: coordina el embarque y te deja la información lista para pasarla.',
        },
        { p: '¿Puedo subir mis geocercas?', r: 'Sí. Además de dar de alta lugares con el enlace de Google Maps, puedes importar geocercas desde archivos .plc.' },
        { p: '¿Timbra facturas y carta porte?', r: 'Hoy Avanza arma la factura y la carta porte con todos sus datos. El timbrado ante el SAT llega próximamente.' },
      ],
    },
  },
  en: {
    meta: {
      titulo: 'Product · Avanza',
      descripcion: "What Avanza does on every load: it knows what's next, who owns it and when it's due, and gets it ready before anyone asks.",
    },
    etiqueta: 'PRODUCT',
    titulo: 'Everything that happens on a load, in one place.',
    bajada:
      "From booking to getting paid. Avanza knows what's next on every load, who has to do it and by when, and gets it ready before anyone has to ask.",
    tarjeta: {
      titulo: 'On every load, Avanza answers:',
      filas: [
        ["What's next?", 'Confirm with the carrier'],
        ['Who owns it?', 'Dispatch · Ana'],
        ['When is it due?', 'Today, 6:30 PM'],
      ],
    },
    recorrido: {
      etiqueta: 'THE LIFE OF A LOAD',
      titulo: 'Five stages. At each one, you decide and Avanza prepares.',
      tu: 'YOU',
      fases: [
        { fase: 'Scheduled', tu: 'Enter customer, lane and date.', avanza: 'Builds the legs and adds that lane’s tasks, each with an owner.' },
        { fase: 'Confirmed', tu: 'Send the confirmation to the carrier.', avanza: 'Drafts the message and the rate confirmation; the carrier confirms with a link.' },
        { fase: 'Assigned', tu: 'Assign truck, driver and trailer.', avanza: 'Drafts the full driver message and flags any missing paperwork.' },
        { fase: 'In transit', tu: 'Log departure and arrival in seconds.', avanza: 'Watches the appointments and escalates what’s coming due.' },
        { fase: 'Delivered', tu: 'Upload the POD photo from your phone.', avanza: 'Checks it’s complete and gets it ready to invoice.' },
      ],
    },
    verdad: {
      etiqueta: 'WHAT ACTUALLY HAPPENS',
      titulo: "Built by someone who's been there.",
      bajada: "If you've run freight, this will sound familiar. Here's how Avanza handles it.",
      casos: [
        {
          pasa: "The customer's tender has fuel figured on a different week's diesel, or another region's.",
          avanza: 'compares it against what you agreed, line by line: approve what matches, reject what doesn’t, with a reason.',
        },
        {
          pasa: 'The owner-operator needs the whole load, and you need them to confirm.',
          avanza: 'sends the rate confirmation and they confirm with a link, no account or password. Reassign the load and their link dies right then.',
        },
        {
          pasa: 'Proof of delivery is sometimes a WhatsApp photo, sometimes the export invoice, sometimes the tracking.',
          avanza: 'each customer says which proof they accept, and the load knows which one is missing.',
        },
        {
          pasa: 'With parcel, almost nobody signs anything.',
          avanza: 'a customer who needs no proof is marked that way, and it doesn’t hold up their invoice.',
        },
        {
          pasa: "The carrier's invoice shows up weeks later, and until then you don't know what you made.",
          avanza: 'the cost counts in the month of the load; when the invoice arrives and doesn’t match, the difference shows on its own.',
        },
        { pasa: "Detention that wasn't written on the BOL doesn't get paid, no matter what your system says." },
      ],
    },
    incluye: {
      etiqueta: "WHAT'S INCLUDED",
      titulo: 'What you use depends on what you do.',
      grupos: [
        {
          nombre: 'Coordinate',
          para: 'For everyone: shippers, brokers and carriers.',
          si: [
            'Loads by stage, with a board',
            'Tasks with owners and due times',
            '"My work": what’s on you right now',
            'Driver and carrier messages, ready to copy',
            'Carrier confirmation by link',
            'Pickup and delivery appointments',
            'Lanes that remember how you work',
            'Paperwork and POD photos',
            'Places from a Google Maps link',
            'Search by load, trailer or reference',
            'Customers and vendors',
          ],
          pronto: [],
        },
        {
          nombre: 'Bill and pay',
          para: 'For whoever bills and pays on every load.',
          si: [
            'Quotes and customer rates',
            'Charges and PDF invoices, with PODs',
            'Receivables with aging',
            'Carrier invoices and payables',
            'Margin per load, even before the invoice arrives',
            'Fuel surcharge and detention',
            'Tender rates, reviewed line by line',
          ],
          pronto: ['Mexican e-invoicing (CFDI) and Carta Porte stamping · coming soon'],
        },
        {
          nombre: 'Fleet',
          para: 'For whoever runs their own trucks.',
          si: ['Trucks, trailers and maintenance', 'Trailer inventory by location', 'Routing by truck', 'Depreciation'],
          pronto: ['GPS integration · coming soon', 'Live tracking for your customer · coming soon'],
        },
      ],
      precios: 'How pricing works →',
    },
    real: {
      titulo: 'Built for how the work really gets done.',
      puntos: [
        { titulo: 'With or without GPS', texto: 'Everything can be entered by hand. GPS is one more source of the same data, never a requirement.' },
        { titulo: 'On your phone', texto: 'Runs in the browser on your phone, tablet or computer. Nothing to install.' },
        { titulo: 'Mexico and the US', texto: 'Pesos and dollars kept apart, Mexican taxes calculated, miles or kilometers. Cross-border or not.' },
        { titulo: 'Your team, with permissions', texto: 'Each team sees its own work. One person can work across several companies with the same login.' },
      ],
    },
    preguntas: {
      titulo: 'Product questions',
      lista: [
        { p: 'Do I have to load all my data before I start?', r: 'No. Start with your next load. Customers, places and lanes get saved as you go.' },
        { p: 'Does it connect to my ERP or EDI?', r: 'Not yet. Until then, Avanza runs next to your ERP: it coordinates the load and leaves the data ready to pass along.' },
        { p: 'Can I upload my geofences?', r: 'Yes. Besides adding places from a Google Maps link, you can import geofences from .plc files.' },
        { p: 'Does it stamp invoices and Carta Porte?', r: 'Today Avanza builds the invoice and the Carta Porte with all their data. Stamping with the SAT is coming soon.' },
      ],
    },
  },
};
