import { useId } from 'react'

/**
 * Marca de Avanza (logo aprobado por Pedro el 2026-09-28): la A con la flecha naranja que la cruza
 * y sale por la derecha ("avanza" es verbo de movimiento), "AVANZA" en mayúsculas anchas y el sello
 * "FREIGHT · TMS" para que no se confunda con una empresa de logística.
 *
 * Geometría fija (no la retoques a ojo): la A mide 142 × 120; la flecha es gruesa (14) y su punta
 * arranca fuera de la pierna derecha, con aire, para que no se encime. El hueco alrededor de la
 * flecha es una máscara, así el símbolo funciona sobre cualquier fondo sin saber su color.
 * Los archivos sueltos (favicon, public/marca/) usan la misma geometría.
 */
const A = '70,8 122,112 98,112 70,54 42,112 18,112'
const FLECHA = 'M16 108 C 50 84, 80 70, 117 67'
const HUECO = 'M16 108 C 50 84, 80 70, 121 67'
const PUNTA = '113,52 136.1,67 113,82'

type Tono = 'claro' | 'oscuro'

/** Solo el símbolo. `alto` en px; en tono oscuro la A es blanca (para el riel o fondos marinos). */
export function Simbolo({ alto = 32, tono = 'claro' }: { alto?: number; tono?: Tono }) {
  const mascara = `hueco-${useId().replace(/:/g, '')}`
  return (
    <svg width={(alto * 142) / 120} height={alto} viewBox="0 0 142 120" aria-hidden="true" className="shrink-0">
      <mask id={mascara} maskUnits="userSpaceOnUse" x="0" y="0" width="142" height="120">
        <rect width="142" height="120" fill="#fff" />
        <path d={HUECO} fill="none" stroke="#000" strokeWidth={26} strokeLinecap="round" />
      </mask>
      <polygon points={A} mask={`url(#${mascara})`} style={{ fill: tono === 'oscuro' ? '#ffffff' : 'var(--primary)' }} />
      <path d={FLECHA} fill="none" strokeWidth={14} strokeLinecap="round" style={{ stroke: 'var(--accent)' }} />
      <polygon points={PUNTA} style={{ fill: 'var(--accent)' }} />
    </svg>
  )
}

const TAMANOS = {
  sm: { simbolo: 32, nombre: 21, sello: 8.5, hueco: 10 },
  md: { simbolo: 44, nombre: 28, sello: 10.5, hueco: 13 },
  lg: { simbolo: 58, nombre: 38, sello: 13, hueco: 16 },
} as const

/** Logo completo, horizontal: símbolo + AVANZA + FREIGHT [TMS]. */
export function Logo({ tamano = 'md', tono = 'claro' }: { tamano?: keyof typeof TAMANOS; tono?: Tono }) {
  const t = TAMANOS[tamano]
  const oscuro = tono === 'oscuro'
  return (
    <span className="inline-flex items-center" style={{ gap: t.hueco }} role="img" aria-label="Avanza Freight TMS">
      <Simbolo alto={t.simbolo} tono={tono} />
      <span className="flex flex-col" style={{ gap: t.sello * 0.55 }} aria-hidden="true">
        <span
          className="font-marca leading-none"
          style={{ fontSize: t.nombre, fontWeight: 800, fontStretch: '118%', color: oscuro ? '#ffffff' : 'var(--primary)' }}
        >
          AVANZA
        </span>
        <span className="font-marca flex items-center leading-none" style={{ fontSize: t.sello, gap: t.sello * 0.8, letterSpacing: '0.3em' }}>
          <span style={{ fontWeight: 600, color: oscuro ? 'rgb(255 255 255 / 0.7)' : 'var(--text-muted)' }}>FREIGHT</span>
          <span
            style={{
              fontWeight: 800,
              letterSpacing: '0.2em',
              padding: `${t.sello * 0.22}px ${t.sello * 0.35}px ${t.sello * 0.22}px ${t.sello * 0.55}px`,
              borderRadius: t.sello * 0.4,
              background: 'var(--accent)',
              color: 'var(--primary)',
            }}
          >
            TMS
          </span>
        </span>
      </span>
    </span>
  )
}
