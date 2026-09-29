# avanza-web — el sitio público de Avanza (avanzafreight.com)

> Dueño del producto: Pedro Valdés. Este archivo es el punto de partida de toda sesión de Claude Code en este repo. Léelo completo antes de escribir código.
> El producto (la aplicación) vive en otro repo: `valdes15/avanza`. Este repo es **solo el sitio de marketing, el blog y los recursos gratis**.

## Qué es este sitio y para qué existe

Avanza es un TMS para quien **coordina embarques** de autotransporte en México y Estados Unidos: el dueño de la mercancía (logística de planta o almacén), el broker y el transportista. **Coordinar embarques es gratis para siempre** (usuarios y embarques ilimitados); se paga el plan **Broker** (facturación, CxC, CxP) o **Carrier** (flota, GPS, trazabilidad). Nunca se cobra por usuario.

El sitio no vende: **convence y da certeza**. El visitante tiene segundos de atención y trae una pregunta por página:

| Página | La pregunta del visitante |
|---|---|
| Inicio | ¿Qué es esto y es para mí? |
| Producto | ¿Qué hace exactamente, y hace lo que yo necesito? |
| Soluciones | ¿Sirve para alguien como yo, en mi operación? |
| Precios | ¿Cuánto me cuesta y dónde está la trampa? |
| Recursos / Blog | ¿Me ayudan aunque todavía no lo use? |
| Nosotros | ¿Puedo confiar en esta empresa? |
| Seguridad | ¿Mis datos están seguros ahí? |

Cada página responde su pregunta **arriba**, en una frase, antes de cualquier detalle.

## Mensajes de marca (fijos; no se reescriben sin Pedro)

| | Español | English |
|---|---|---|
| Titular | El mejor embarque es el que nadie pregunta por él. | The best load is the one nobody calls about. |
| Slogan | Adelántate al embarque. | Get ahead of every load. |
| Categoría | Coordinación proactiva de embarques | Proactive freight coordination |

- La categoría **nunca va sola**: "proactivo" se explica siempre con una escena concreta (reactivo = te buscan; proactivo = ya estaba resuelto). Pedro: las palabras abstractas cada quien las entiende por su propia experiencia.
- Frases vetadas: "Que nada se te pase", "Siempre un paso adelante", "10-4", "Lleva tú el embarque…", "Coordina antes de que te busquen".
- Tono: de coordinador a coordinador. Frases cortas, escenas reales ("¿Ya llegó la unidad?", "Ya debe de estar ahí", "Se le ponchó una llanta", el documento que falta a las 9 PM). Sin superlativos vacíos ("la mejor plataforma", "revolucionario").

## Regla que gana sobre todo lo demás: solo afirmaciones verdaderas

1. **Nada se afirma que la aplicación no haga hoy.** Lo que viene se marca **"próximamente" / "coming soon"**, con el mismo estilo en todo el sitio (círculo vacío ○, no palomita ✓).
2. **Sin datos inventados:** ni número de clientes, ni embarques procesados, ni testimonios, ni logos de clientes, ni porcentajes de ahorro, ni sellos de certificación que no existan. Donde el diseño dejó `[PRECIO]`, `[POR DEFINIR]`, `[FOTO]`, `[IMAGEN]`, `[hola@…]` o `[+52 …]`, **se queda como hueco visible y se reporta a Pedro**; nunca se rellena con algo plausible.
3. **Antes de agregar una afirmación nueva** sobre el producto, verifícala en el repo `valdes15/avanza` (el `README.md` del módulo en `apps/api/src/<módulo>/`) o pregúntale a Pedro. Si no puedes verificarla, no va.
4. Seguridad: se dice lo que el sistema hace (abajo), sin prometer certificaciones (SOC 2, ISO) ni "cifrado de grado militar".

### Lo que Avanza hace hoy (verificado contra el repo, 2026-09-28)

Coordinación: embarques por cinco fases (Programado · Confirmado · Asignado · En tránsito · Entregado) con tablero; actividades con responsable, vencimiento y escalamiento; "Mi trabajo"; mensajes al chofer y al carrier listos para copiar; carta de instrucción en PDF y confirmación del carrier por enlace, sin cuenta (y aviso si se cancela); citas de carga y entrega con reprogramaciones; rutas como plantilla; documentos y POD en foto; lugares con el enlace de Google Maps e importación de geocercas `.plc`; búsqueda por embarque, caja o referencia; clientes y proveedores con documentos de alta y semáforo; captura a mano de todo hito (con o sin GPS); varias empresas con el mismo usuario; permisos por equipo.
Broker: cotizaciones y perfiles de tarifa; cargos; factura en PDF (español para el emisor mexicano, invoice en inglés para el de EUA) con los POD incrustados y entrega por correo; carta porte (varias por servicio) armada con sus datos; tarifa del tender revisada concepto por concepto; fuel surcharge; demoras, almacenaje y TONU; CxC con antigüedad; CxP (facturas de proveedor contra lo acordado, diferencia de provisión); utilidad por embarque en el mes del servicio; pesos y dólares por separado; IVA y retención mexicanos calculados por cargo, franja fronteriza incluida.
Carrier: unidades, cajas, mantenimiento, depreciación; inventario de cajas por ubicación; ruteo por unidad.

### Próximamente (así se escribe siempre)

Timbrado de CFDI y carta porte ante el SAT (PAC) · integración con GPS (Motive y otros) · trazabilidad en vivo para el cliente · integración con ERP / EDI (204, 210, 214) · importación general de catálogos · app nativa (hoy funciona en el navegador del celular) · registro público de cuentas (ver **Conversión**).

### Seguridad — lo que sí se puede decir

- Cada empresa vive separada: la separación entre cuentas se revisa en la base de datos (candados) y con pruebas automáticas que recorren todas las rutas en cada cambio.
- Nadie ve tu contraseña, ni el administrador de tu empresa ni Avanza: se guarda con hash (scrypt); cada persona la pone desde un enlace a su correo.
- Sesiones cortas que se renuevan solas; salir de todos los dispositivos; espera tras varios intentos fallidos.
- Permisos por equipo y por pantalla; precios y costos solo para quien tiene permiso (se quitan en el servidor, no solo se esconden).
- Bitácora de cambios; una factura emitida es una fotografía que no cambia.
- En producción, archivos en almacenamiento privado de AWS con enlaces firmados que vencen, y base de datos en AWS.
- **No decir:** que el login es de AWS/Cognito (es propio), certificaciones, "cifrado de extremo a extremo", ni que ya está en producción hasta que Pedro lo confirme.

## Stack y hospedaje

- **Astro 5** (salida estática) + **Tailwind CSS v4** + **MDX** con *content collections* para blog, glosario, corredores y plantillas.
- JavaScript solo donde hace falta (islas): calculadoras, menú móvil, selector de idioma. Sin frameworks pesados; si una isla lo pide, Preact.
- Fuentes **autohospedadas** con `@fontsource` (Sora 600/700, IBM Plex Sans 400/500/600/700, IBM Plex Mono 500, Archivo solo si el logo se usa como texto; el logo se usa como SVG, así que normalmente no hace falta). Nada de Google Fonts en producción.
- Imágenes con `astro:assets` (AVIF/WebP, `width`/`height` siempre).
- **AWS Amplify Hosting** conectado a GitHub (rama `main` = producción; ramas de PR = vistas previas). Dominio `avanzafreight.com` en Route 53; `www` redirige 301 al dominio sin www; HTTPS forzado. El despliegue necesita la cuenta de AWS de Pedro: hasta tenerla, todo corre en local (`npm run dev`, `npm run build && npm run preview`).
- Node 22 LTS. Scripts: `dev`, `build`, `preview`, `check` (astro check + tsc), `verificar` (check + build + enlaces + pruebas de humo).

## Idiomas (ES / EN)

- Español en `/`, inglés en `/en/` (i18n de Astro, `prefixDefaultLocale: false`). Cada página conoce su gemela (mapa de rutas en `src/i18n/rutas.ts`); el selector "ES · EN" lleva a la **misma** página en el otro idioma, nunca al inicio.
- Slugs traducidos: `/producto` ↔ `/en/product`, `/soluciones/brokers` ↔ `/en/solutions/brokers`, `/precios` ↔ `/en/pricing`, `/nosotros` ↔ `/en/about`, `/recursos` ↔ `/en/resources`, `/glosario` ↔ `/en/glossary`, `/seguridad` ↔ `/en/security`, `/corredores/…` ↔ `/en/corridors/…`.
- **El inglés es nativo, no traducido.** Se escribe como lo diría un dispatcher de Texas: *load* (no *shipment* en la voz del día a día), *carrier*, *shipper*, *broker*, *driver*, *appointment*, *detention*, *lumper*, *rate con*, *POD*, *BOL*, *check call*. La página de inicio en inglés (`disenos/HomeEN.dc.html`) marca el tono. Las demás páginas en inglés se adaptan con esa voz y se le mandan a Pedro para revisión antes de publicarlas.
- Glosario mínimo de marca:

| Español | English |
|---|---|
| embarque | load |
| coordinar embarques | coordinate freight / run your loads |
| dueño de la mercancía / logística | shipper / shipper logistics team |
| transportista | carrier (asset-based carrier) |
| carta de instrucción | load confirmation (rate confirmation) |
| cita de carga / entrega | pickup / delivery appointment |
| demoras | detention |
| comprobante de entrega (POD) | proof of delivery (POD) |
| carta porte / CCP | Carta Porte (Mexico's required transport document) — sin traducir, con explicación la primera vez |
| Empieza gratis | Start free |
| Agenda una demo | Book a demo |
| próximamente | coming soon |

- `<html lang="es-MX">` y `<html lang="en-US">`; `hreflang` es-MX, en-US y `x-default` → español, en cada página, recíprocos.

## Marca y sistema visual

- Logo: la A marino con la flecha naranja gruesa que la cruza y sale por la derecha, "AVANZA" en Archivo ancho y el sello "FREIGHT [TMS]". Los SVG oficiales están en `marca/` (copiados de `valdes15/avanza/apps/web/public/marca/`) y la versión con texto en `marca/Marca.tsx` (portar a un componente `.astro` con la **misma geometría**; no se redibuja a mano). Geometría: viewBox `0 0 142 120`; A `70,8 122,112 98,112 70,54 42,112 18,112`; máscara `M16 108 C 50 84, 80 70, 121 67` trazo 26; flecha `M16 108 C 50 84, 80 70, 117 67` trazo 14; punta `113,52 136.1,67 113,82`.
- Colores (tokens en `src/styles/tokens.css`):

| Token | Valor | Uso |
|---|---|---|
| `--marino` | `#0F1B2D` | héroes, menú oscuro, botones secundarios |
| `--naranja` | `#E8702A` | botón principal, acentos, la flecha |
| `--naranja-texto` | `#B4530F` | enlaces y texto naranja sobre blanco (contraste AA) |
| `--fondo` | `#F5F6F8` | fondo general |
| `--superficie` | `#FFFFFF` | tarjetas |
| `--suave` | `#E3E6EC` | huecos de imagen, fondos |
| `--borde` | `#DEE1E7` | bordes |
| `--texto` | `#171B21` | texto |
| `--texto-2` | `#3E4652` | párrafos |
| `--apagado` | `#5D6572` | etiquetas |
| `--exito` | `#17684A` / `#1F8A5F` | "Gratis", palomitas |
| texto sobre marino | `#C9D0DB` | párrafos en héroes |

- Tipografía: Sora (títulos), IBM Plex Sans (texto), IBM Plex Mono (horas, folios, números).
- Modo oscuro: no en esta fase.

## Diseños de referencia (`disenos/`)

Los diseños están en `disenos/*.dc.html` (lienzo de 1440 px de ancho, estilos en línea). **El texto de esos archivos es la copia aprobada: se usa tal cual.** El layout se respeta en escritorio; en móvil se reacomoda (una columna, 16 px de margen, sin scroll horizontal, tablas comparativas que se vuelven tarjetas o se desplazan dentro de su caja).

| Archivo | Página |
|---|---|
| `Main.dc.html` | Inicio (ES) — importa `ChatCard` y la sección reactivo/proactivo |
| `HomeEN.dc.html` | Home (EN) |
| `Nav.dc.html`, `Footer.dc.html` | Menú y pie (componentes) |
| `Producto.dc.html` | Producto |
| `Soluciones.dc.html` | Soluciones (índice) |
| `SolucionBrokers.dc.html` | Soluciones › Brokers — **plantilla** de las páginas por perfil |
| `Precios.dc.html` | Precios |
| `Recursos.dc.html` | Recursos |
| `Nosotros.dc.html` | Nosotros |
| `ChatCard.dc.html`, `ReactivoProactivo.dc.html` | piezas del inicio |

`<dc-import name="X">` significa "aquí va el componente X". Ignora `support.js`, `x-dc`, `helmet` y el `script` de `DCLogic`: son del lienzo de diseño, no del sitio.

Correcciones de copia ya detectadas (aplicar al construir): en `ChatCard`, "se vencé" → "se vence". En `SolucionBrokers`, "Mandas la rate con por correo" → confirmar con Pedro la frase (probablemente "Mandas la confirmación de tarifa por correo").

## Mapa del sitio

```
/                                  Inicio
/producto                          Producto
/soluciones                        Soluciones (índice)
  /soluciones/logistica            Dueño de la mercancía       (plantilla de brokers; copia por escribir)
  /soluciones/brokers              Brokers                     (diseñada)
  /soluciones/transportistas       Transportistas              (plantilla; copia por escribir)
  /soluciones/cruce-mexico-eua     Operación de cruce
  /soluciones/mexico               Solo en México
  /soluciones/estados-unidos       Solo en EUA
/corredores/<slug>                 Páginas por corredor/ciudad (ver SEO local)
/precios                           Precios
/seguridad                         Seguridad y privacidad (amplía la sección del inicio)
/recursos                          Recursos (índice)
  /recursos/calculadoras/<slug>    fuel-surcharge · demoras · conversiones
  /recursos/plantillas/<slug>      mensaje-chofer · confirmacion-carrier · alta-carrier · documentos-cruce
/glosario, /glosario/<termino>     Glosario ES·EN (una página por término)
/blog, /blog/<slug>                Blog
/nosotros                          Nosotros
/contacto                          Contacto / demo
/privacidad, /terminos             Legales ([POR DEFINIR]: textos de Pedro o su abogado; no se inventan)
```
Todo con su gemelo en `/en/`. Las páginas de Soluciones por perfil siguen la estructura de `SolucionBrokers`: héroe con el dolor en una frase → "Hoy / Con Avanza" (5 filas) → lo que más usa ese perfil (4) → cuánto cuesta para ese perfil → preguntas. Escribe la copia de logística y transportistas con esa estructura y **mándasela a Pedro antes de publicar**.

Ideas de copia ya decididas para esos perfiles (de `Soluciones.dc.html`): logística — "Deja de perseguir estatus a tus carriers", vive al lado del ERP, gratis siempre; transportistas — "Del despacho al pago, sin perder el hilo", unidades, choferes, cajas, documentos y POD, el mensaje completo al chofer, la factura con sus comprobantes.

## Componentes

`Nav` (prop `activo`; en móvil, menú de hamburguesa accesible) · `Footer` (banda CTA "Adelántate al embarque." + columnas) · `Logo` · `Hero` · `BotonPrincipal` / `BotonSecundario` · `TarjetaPlan` · `TablaComparativa` · `Preguntas` (`<details>`/`<summary>` + JSON-LD FAQPage con el **mismo** texto visible) · `Pill` (estado) · `Proximamente` (etiqueta única) · `Calculadora` (isla) · `TarjetaArticulo` · `Migas` (breadcrumbs + JSON-LD).

## Conversión (botones "Empieza gratis" y "Agenda una demo")

- **Hoy la aplicación no tiene registro público** (en producción, las cuentas se crean por invitación). Hasta que Pedro diga que el registro existe, "Empieza gratis" lleva a `/contacto?intencion=empezar` ("Pide tu acceso: te abrimos tu cuenta gratis"), no a un registro que no existe. La URL del registro va en una variable (`PUBLIC_URL_REGISTRO`); cuando exista, los botones apuntan ahí sin tocar páginas.
- "Iniciar sesión" → `PUBLIC_URL_APP` ([POR DEFINIR], p. ej. `https://app.avanzafreight.com`).
- Formulario de contacto/demo: nombre, empresa, correo, teléfono/WhatsApp, "¿qué haces?" (logística · broker · transportista · otro), "¿por dónde operas?" (México · EUA · cruce), mensaje. Se manda a un **endpoint público de la API de Avanza** (Ventas › Leads) que **todavía no existe**: es una tarea aparte en el repo `valdes15/avanza` (ruta pública sin sesión, cuenta destino fija por configuración, límite por IP, honeypot + Cloudflare Turnstile, sin revelar nada). Mientras no exista, el formulario queda detrás de `PUBLIC_URL_LEADS`; sin esa variable, la página muestra el correo y WhatsApp de contacto en lugar del formulario. Nunca un servicio de formularios de terceros sin que Pedro lo apruebe.
- Analítica: [POR DEFINIR con Pedro]. Recomendación: una analítica sin cookies (Plausible o similar) para no necesitar banner; nada de píxeles de publicidad. Google Search Console y Bing Webmaster Tools desde el día uno.

## SEO y GEO (Google + ChatGPT, Claude, Gemini, Perplexity)

Objetivo: que quien pregunte "TMS gratis para brokers en México", "software para coordinar cruces Tijuana", "free TMS for small carriers", "cómo calcular demoras", "qué es la carta porte" encuentre a Avanza, y que los asistentes de IA lo describan **correctamente**.

**Técnico (todas las páginas):**
- `title` único (≤ 60 caracteres) y `meta description` (≤ 155) por idioma; canónica propia; `hreflang` recíproco + `x-default`.
- `sitemap-index.xml` (`@astrojs/sitemap` con i18n) y `robots.txt` que **permite** a los buscadores y a los rastreadores de IA (GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended). Pedro decide si alguno se bloquea; por defecto, todos entran.
- HTML semántico: un `h1` por página, jerarquía de encabezados, texto real (no texto dentro de imágenes).
- Imagen OG por página (1200×630, generada en build con el logo y el título), `twitter:card`.
- Schema.org en JSON-LD: `Organization` (nombre, logo, URL, `sameAs` con LinkedIn y demás perfiles cuando existan, `areaServed` México y Estados Unidos, domicilio Tijuana), `WebSite`, `SoftwareApplication` (categoría BusinessApplication, sistema operativo Web, `offers` con precio 0 para Coordina; los planes de pago sin precio hasta que Pedro los defina), `FAQPage` en cada bloque de preguntas, `Article` + `author` (Pedro, con su página) en el blog, `BreadcrumbList`, `DefinedTerm` en el glosario, `HowTo` solo donde el paso a paso sea real.
- `llms.txt` en la raíz (y `/en/llms.txt`): qué es Avanza en tres frases, para quién, modelo de precios, qué hace y qué no hace (la lista de próximamente), y enlaces a Producto, Precios, Seguridad, Preguntas frecuentes y glosario. Mismo contenido que el sitio, nunca más ni distinto.
- Una página `/preguntas` (y `/en/faq`) que junte las preguntas de todo el sitio: es la que los asistentes citan.

**Contenido que los asistentes de IA pueden citar:**
- Frases de hecho, cortas y autocontenidas al inicio de cada sección ("Avanza es un TMS gratis para coordinar embarques de autotransporte en México y Estados Unidos. Se paga solo facturación (plan Broker) o flota y GPS (plan Carrier).").
- Los mismos datos, con las mismas palabras, en todos lados: sitio, `llms.txt`, LinkedIn, directorios (G2, Capterra, GetApp, Software Advice) y Google Business Profile. La consistencia de la entidad es lo que hace que un modelo repita bien quién eres.
- Páginas de comparación **honestas** ("Avanza vs. Excel y WhatsApp", "TMS gratis vs. TMS por usuario"): se dice en qué gana cada uno. Comparaciones contra marcas de competidores, solo con datos públicos verificables y fecha, y con el visto bueno de Pedro.

**SEO local (México y EUA):**
- Google Business Profile de Avanza en Tijuana (lo da de alta Pedro; el sitio usa exactamente el mismo nombre, domicilio y teléfono).
- Páginas por **corredor/ciudad** (`/corredores/tijuana-otay-mesa`, `mexicali-calexico`, `nogales`, `juarez-el-paso`, `nuevo-laredo-laredo`, `reynosa-pharr`, `monterrey`, `bajio`, `guadalajara`, `ciudad-de-mexico`; en inglés su gemela). **Nada de páginas puerta** (la misma página con otro nombre de ciudad): cada una lleva contenido local real — puertos de entrada y cuáles reciben carga, horarios de las aduanas y del lado de EUA, programas (FAST, C-TPAT, OEA), lo que suele atorarse en ese cruce, distancias y tiempos típicos a los destinos comunes, y cómo se coordina ese corredor en Avanza. **Todo dato con su fuente oficial (CBP, SAT/ANAM, CANACAR, etc.) y la fecha en que se verificó**; si no hay dato verificado, no se escribe. Una página de corredor no se publica (queda `noindex` y fuera del sitemap) hasta tener ese contenido y el visto bueno de Pedro.
- `areaServed` y menciones naturales de ciudades en el texto, nunca listas de palabras clave.

**Recursos gratis como puerta de entrada:** las calculadoras (fuel surcharge con el diésel de la semana que el usuario captura, demoras con tiempo libre y tarifa por hora, conversiones km/mi, kg/lb, °C/°F), las plantillas (descargables, en ES y EN) y el glosario (una página por término: BOL, POD, carta porte, TONU, detention, lumper, deadhead, drayage, FTL, LTL, pedimento, FAST, C-TPAT…) resuelven algo **sin registrarse**, y al final dicen, en una línea, que Avanza hace eso solo.

## Blog

Colección `blog` en `src/content/blog/{es,en}/`. Esquema: `titulo`, `descripcion`, `idioma`, `traduccionDe` (slug de la gemela, opcional), `fecha`, `actualizado`, `autor` (por defecto Pedro Valdés), `categoria` (Coordinación · Guía · Carta porte · Cruce · Brokers · Transportistas · Facturación), `corredor` (opcional), `preguntas` (lista para FAQPage), `borrador`.
Cada artículo: responde la pregunta en el primer párrafo, luego el detalle; fecha de actualización visible; autor con enlace a Nosotros; enlaces internos a la calculadora, plantilla o término del glosario que corresponda; sin relleno para "llegar a X palabras".

Primeros temas (la lista completa y su orden los decide Pedro; los artículos los escribe o revisa él — **no se publican textos generados sin su revisión**):
1. "Ya voy llegando": por qué tu carrier no llega a las 7 y cómo dejar de enterarte tarde.
2. Qué es un TMS y cuándo lo necesitas, aunque no tengas camiones.
3. Carta porte para transportistas: qué pide, cuándo y los errores más comunes.
4. El mensaje completo para el chofer: lo que debe llevar para que no te vuelva a preguntar.
5. Coordinación reactiva vs. proactiva: la misma carga contada dos veces.
6. Cómo cobrar demoras (detention) sin pelearte con tu cliente.
7. Fuel surcharge: cómo se calcula y cómo explicárselo a tu cliente.
8. Qué pedirle a un carrier antes de darle la primera carga (México y EUA).
9. Documentos para cruzar por Otay Mesa: el checklist del día anterior.
10. Cuánto ganaste en esa carga si la factura del carrier todavía no llega.
11. Brokers en México: cómo dejar de ser el teléfono entre el cliente y el carrier.
12. TMS gratis vs. TMS por usuario: qué preguntar antes de elegir.
13. (EN) How to run cross-border loads from San Diego without chasing check calls.
14. (EN) Free TMS for small carriers and brokers: what you actually need.
15. (EN) What is Carta Porte, and what US shippers need to know about it.

## Rendimiento y accesibilidad

- Lighthouse ≥ 95 en Rendimiento, Accesibilidad, Mejores prácticas y SEO, en móvil, en todas las páginas.
- LCP < 2.0 s en 4G, CLS < 0.05, JS de la página < 30 KB (salvo las calculadoras).
- WCAG 2.2 AA: contraste (naranja sobre blanco solo como `#B4530F` para texto), foco visible, navegación con teclado, `alt` en toda imagen, formularios con `label`.
- Funciona sin JavaScript todo lo que no sea una calculadora.

## Cómo trabajar en este repo

- Pedro no programa hoy: explícale las decisiones en términos simples cuando cambien cómo se usa o se mantiene el sitio. Todo en español.
- Commits pequeños y frecuentes; `git push` seguido. Nunca `--no-verify`.
- Antes de commitear un cambio masivo (sed, scripts), lee su `git diff`; antes de `git add -A`, `git status` y `git diff --stat`.
- Registro de decisiones en `docs/decisiones.md` (fecha + 2-3 líneas; nunca se reescribe).
- Nada de secretos en el código; `.env` fuera de git.
- **Una página no está terminada** hasta que: pasa `npm run verificar`; se ve bien a 390 px y a 1440 px (captura con Playwright de cada página en ambos anchos, en ES y EN); su gemela en el otro idioma existe; su `title`, descripción, `hreflang` y JSON-LD validan; y no tiene huecos `[…]` sin reportar.
- Pruebas de humo (Playwright, Chromium ya instalado): recorre el sitemap, falla con 404, enlace roto, `hreflang` sin reciprocidad, error de consola, texto `undefined`/`NaN`/`[object Object]`, o una página sin `h1`.

## Orden de construcción

1. Esqueleto: Astro + Tailwind, tokens, fuentes, `Logo`, `Nav`, `Footer`, i18n con el mapa de rutas, layout base con SEO (title, description, canónica, hreflang, OG, JSON-LD base), `robots.txt`, sitemap, `verificar` y la prueba de humo.
2. Inicio ES y EN (de `Main` y `HomeEN`).
3. Producto, Precios, Nosotros, Seguridad (ES; EN adaptado y enviado a Pedro).
4. Soluciones + Brokers; Logística y Transportistas con copia nueva para revisión.
5. Contacto (con la regla de `PUBLIC_URL_LEADS`), `/preguntas`, `llms.txt`, legales como huecos.
6. Recursos: glosario, calculadoras, plantillas.
7. Blog (colección, índice, artículo, RSS) con 2-3 artículos de Pedro.
8. Corredores (plantilla + la primera: Tijuana–Otay Mesa, con datos verificados).
9. Despliegue a Amplify cuando Pedro tenga su cuenta de AWS lista.

## Pendiente de Pedro (no se inventa; se deja el hueco)

Precio de los planes Broker y Carrier y moneda · precio por timbre · cuánto historial y cuánto tiempo de fotos de POD incluye Coordina · qué pasa al dejar de pagar un plan · correo, WhatsApp y horario de contacto · foto de Pedro y fotos de Tijuana/cruce · textos legales · URL de la aplicación y fecha del registro público · analítica · perfiles oficiales (LinkedIn, directorios, Google Business Profile).
