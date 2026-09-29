import type { APIRoute } from 'astro';
import sharp from 'sharp';

/**
 * Imagen para compartir (1200×630), generada al construir: el símbolo sobre marino. Sin texto por ahora (el texto en SVG
 * necesitaría las fuentes instaladas en la máquina que construye); la imagen por página con su título es un paso posterior.
 */
const SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#0F1B2D"/>
<g transform="translate(422 150) scale(2.6)">
<mask id="h" maskUnits="userSpaceOnUse" x="0" y="0" width="142" height="120"><rect width="142" height="120" fill="#fff"/><path d="M16 108 C 50 84, 80 70, 121 67" fill="none" stroke="#000" stroke-width="26" stroke-linecap="round"/></mask>
<polygon points="70,8 122,112 98,112 70,54 42,112 18,112" fill="#fff" mask="url(#h)"/>
<path d="M16 108 C 50 84, 80 70, 117 67" fill="none" stroke="#E8702A" stroke-width="14" stroke-linecap="round"/>
<polygon points="113,52 136.1,67 113,82" fill="#E8702A"/>
</g></svg>`;

export const GET: APIRoute = async () => {
  const png = await sharp(Buffer.from(SVG)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
