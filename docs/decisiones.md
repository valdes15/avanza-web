# Decisiones técnicas (log; se agrega con fecha, nunca se reescribe)

## 2026-09-28 — Esqueleto del sitio
- **Astro 7, no Astro 5.** El brief dice Astro 5; al instalar, la versión estable era la 7.3. Arrancar un sitio nuevo dos versiones atrás es arrancar sin parches de seguridad. La forma de trabajar (sitio estático, islas, colecciones, i18n) es la misma. Si Pedro prefiere fijar la 5, se cambia hoy sin costo.
- **URLs con diagonal final** (`/producto/`, `/en/product/`): una sola forma de cada URL, así la canónica, el sitemap, el hreflang y los enlaces dicen lo mismo, y Amplify sirve `index.html` de cada carpeta sin reglas extra.
- **Enlaces a páginas que todavía no existen:** el menú y el pie enlazan a todo lo que el diseño muestra; la prueba de humo los lista como "pendientes" y no falla por ellos, salvo con `HUMO_ESTRICTO=1`, que se usa antes de publicar. Un enlace que no está en el mapa de rutas (`src/i18n/rutas.ts`) sí falla siempre.
- **Prueba de humo con el Chrome instalado** (`playwright-core`, como el repo de Avanza): no descarga navegadores. Se puede usar otra ruta con `AVANZA_NAVEGADOR`.
- **Una sola página de inicio para los dos idiomas** (`src/components/Inicio.astro` + `src/i18n/inicio.ts`): Main y HomeEN tienen la misma estructura y solo cambia la copia.
- **Imagen para compartir:** por ahora una sola (el símbolo sobre marino), generada con `sharp` al construir. La de cada página con su título necesita las fuentes en la máquina que construye; es un paso posterior.
- **"Iniciar sesión"** apunta a `PUBLIC_URL_APP`, y sin ella a `https://app.avanzafreight.com`, el dominio que revision-14 §9 le da a la aplicación. **"Empieza gratis"** apunta a `/contacto/?intencion=empezar` mientras no haya registro público.

## 2026-09-30 — Primer despliegue: vista previa en Amplify
- Pedro pidió subir el sitio a AWS. Va a la **dirección de Amplify** (`https://main.d1f9c5qxhqyuch.amplifyapp.com`, app `avanza-web`, us-west-2), construido con `PUBLIC_VISTA_PREVIA=1`: noindex en cada página y robots.txt cerrado. **avanzafreight.com no se apunta** hasta que Pedro revise: "Empieza gratis" lleva a Contacto, que aún no existe, y hay afirmaciones del diseño que hoy no son ciertas (ver el reporte).
- Despliegue manual (un zip) mientras no exista el repositorio en GitHub; cuando exista, Amplify se conecta a `main` y cada push despliega solo. El zip se arma con el `tar` de Windows: `Compress-Archive` de PowerShell 5.1 guarda las rutas con diagonal invertida y Amplify no ve las subcarpetas (`/en/` y el CSS daban 404).
- revision-15 §2: el sitio **no lee ni escribe nada de la base de Avanza** y no comparte secretos. Choca con `CLAUDE.md` § Conversión (el formulario iba a un endpoint público de Ventas › Leads): queda para Pedro; mientras, Contacto mostrará correo y WhatsApp.

## 2026-09-29 — revision-20: demo, Producto, Soluciones, Precios y Nosotros
- **§1:** ningún botón dice "Empieza gratis": no hay alta. Todos llevan a `/demo/` (ES) y `/en/demo/` con el calendario de Pedro embebido (widget en línea de Calendly; su script carga solo en esa página) y el enlace directo de respaldo. La línea de abajo: "30 minutos · Te enseñamos con datos como los tuyos". El enlace vive en una constante (`CALENDARIO`, `src/i18n/rutas.ts`). **El enlace del documento da 404 en Calendly** (también el perfil `pedro-avanzabro`): falta el correcto.
- **§6 contra los diseños:** los diseños prometen "Coordinar es gratis, para siempre" y los planes Coordina/Broker/Carrier; §6 dice precio por definir. Para que el sitio no se contradiga: fuera de Inicio (tarjeta de planes, "¿De verdad es gratis?", el precio 0 del JSON-LD), de Producto ("Lo que incluye" agrupado por trabajo: Coordinar, Cobrar y pagar, Flota), de Soluciones, de Nosotros y de Precios. Precios afirma solo lo decidido en el producto: nunca por usuario, y pasarse de la banda nunca frena una carga (decisions.md de avanza, modelo comercial). Lo del §6.1 (cobrar por servicio, sin saldo) es propuesta y no se publica.
- **§3:** Producto lleva "Lo que pasa de verdad": cada frase sobre lo que Avanza HACE se verificó en el repo del producto (tender concepto por concepto, enlace del owner que muere al reasignar, comprobante que acepta cada cliente, paquetería sin comprobante, costo en el mes del embarque); la demora sin anotar en el BOL va como oficio, sin prometer nada. Quedó fuera "el sello va impreso": no está en el producto.
- **§4:** cuatro perfiles, uno nuevo ("Transportista y broker", `/soluciones/transportista-y-broker/`). "Lo que se apaga" sale de los preajustes reales (`modulos.ts`). Brokers es la copia del diseño ("rate con" → "confirmación de tarifa"); Logística, Transportistas y Transportista y broker son copia nuestra: a revisión de Pedro. El índice ya no enlaza a regiones ni corredores (no existen; un corredor no se publica sin datos verificados).
- **§2:** Recursos sale del menú y del pie.
- **§5:** Nosotros usa la copia del diseño, en primera persona, a revisión de Pedro; huecos visibles: foto, fotos de Tijuana, correo, WhatsApp, horario.
- Todo el inglés sin diseño propio (todo menos Inicio) es adaptación nuestra: a revisión.

## 2026-09-29 — revision-21 y revision-22 (copia aprobada por Pedro)
- Calendly: `https://calendly.com/avanzafreight/30min` (revision-21 §1), verificado (responde y el widget carga) antes de ponerlo.
- "Rate con" regresa en Brokers (revision-21 §5: se le pregunta a Pedro, no se corrige; ante la duda, la palabra que usan ellos).
- revision-22, pegada tal cual: "Mover la carga es la parte fácil" en lugar de "No es el camión" (Inicio, ES y EN); fuera también "La diferencia no es el camión" de "Dos formas" (queda la segunda frase del diseño); Nosotros con "Por qué existe Avanza" de Pedro y Carlos, la tira de datos en lugar de la foto, los nombres debajo y sin la cita en singular. Sin fotos: se quitaron los dos recuadros.
- Pendiente de Pedro, no se tocó por ser copia aprobada solo en su parte: el encabezado de Nosotros ("Avanza lo hizo alguien que coordinó embarques por más de diez años") sigue en singular y con diez años, y ya no cuadra con "Somos Pedro y Carlos… más de veinticinco años".
- El sitio se detiene aquí (revision-22 §7).
