# Primer mensaje para Claude Code (copiar y pegar)

Vamos a construir el sitio público de Avanza, avanzafreight.com, en este repo nuevo (`avanza-web`).

1. Lee completo `CLAUDE.md`: ahí están los mensajes de marca, la regla de solo afirmaciones verdaderas, el stack (Astro + Tailwind + MDX, AWS Amplify), los idiomas, el mapa del sitio, el plan de SEO/GEO y el orden de construcción.
2. Los diseños aprobados están en `disenos/*.dc.html`; el texto de esos archivos es la copia final. Los SVG del logo están en `marca/`.
3. Empieza por el paso 1 del orden de construcción (esqueleto, Nav, Footer, i18n, SEO base, prueba de humo) y sigue con el paso 2 (Inicio ES y EN). Al terminar cada paso: `npm run verificar`, capturas de cada página a 390 px y 1440 px, commit, push, y un resumen corto para mí de lo que quedó y de los huecos `[…]` que me tocan.
4. No inventes precios, datos, testimonios ni textos legales: deja el hueco y dímelo. Las páginas en inglés que no tienen diseño en inglés y las páginas de Soluciones de logística y transportistas me las mandas para revisión antes de publicarlas.
5. No despliegues a AWS hasta que te dé la cuenta; mientras, todo en local.
