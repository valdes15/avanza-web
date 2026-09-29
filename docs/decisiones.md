# Decisiones técnicas (log; se agrega con fecha, nunca se reescribe)

## 2026-09-28 — Esqueleto del sitio
- **Astro 7, no Astro 5.** El brief dice Astro 5; al instalar, la versión estable era la 7.3. Arrancar un sitio nuevo dos versiones atrás es arrancar sin parches de seguridad. La forma de trabajar (sitio estático, islas, colecciones, i18n) es la misma. Si Pedro prefiere fijar la 5, se cambia hoy sin costo.
- **URLs con diagonal final** (`/producto/`, `/en/product/`): una sola forma de cada URL, así la canónica, el sitemap, el hreflang y los enlaces dicen lo mismo, y Amplify sirve `index.html` de cada carpeta sin reglas extra.
- **Enlaces a páginas que todavía no existen:** el menú y el pie enlazan a todo lo que el diseño muestra; la prueba de humo los lista como "pendientes" y no falla por ellos, salvo con `HUMO_ESTRICTO=1`, que se usa antes de publicar. Un enlace que no está en el mapa de rutas (`src/i18n/rutas.ts`) sí falla siempre.
- **Prueba de humo con el Chrome instalado** (`playwright-core`, como el repo de Avanza): no descarga navegadores. Se puede usar otra ruta con `AVANZA_NAVEGADOR`.
- **Una sola página de inicio para los dos idiomas** (`src/components/Inicio.astro` + `src/i18n/inicio.ts`): Main y HomeEN tienen la misma estructura y solo cambia la copia.
- **Imagen para compartir:** por ahora una sola (el símbolo sobre marino), generada con `sharp` al construir. La de cada página con su título necesita las fuentes en la máquina que construye; es un paso posterior.
- **"Iniciar sesión"** apunta a `PUBLIC_URL_APP`, y sin ella a `https://app.avanzafreight.com`, el dominio que revision-14 §9 le da a la aplicación. **"Empieza gratis"** apunta a `/contacto/?intencion=empezar` mientras no haya registro público.
