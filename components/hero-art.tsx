import { cn } from '@/lib/utils'

export type HeroArtVariant = 'default' | 'track' | 'topo' | 'urban' | 'circle'

/**
 * Ilustrações técnicas, puramente decorativas, que dão a cada desafio a sua linguagem visual.
 * Não representam locais, percursos ou dados reais.
 */
export function HeroArt({ variant, className }: { variant: HeroArtVariant; className?: string }) {
  if (variant === 'default') return null
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 800 800"
      preserveAspectRatio="xMidYMid slice"
      className={cn('pointer-events-none absolute text-white', className)}
      fill="none"
    >
      {variant === 'track' && <Track />}
      {variant === 'topo' && <Topo />}
      {variant === 'urban' && <Urban />}
      {variant === 'circle' && <Circle />}
    </svg>
  )
}

/** Pista de atletismo: faixas concêntricas e um arco de progresso. */
function Track() {
  return (
    <g>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x={80 + i * 34}
          y={200 + i * 34}
          width={640 - i * 68}
          height={400 - i * 68}
          rx={200 - i * 34}
          stroke="currentColor"
          strokeOpacity={0.14 - i * 0.012}
          strokeWidth={1}
        />
      ))}
      <path d="M 280 200 H 520 A 200 200 0 0 1 720 400" stroke="var(--primary)" strokeWidth={2.5} strokeLinecap="round" />
      <circle cx={720} cy={400} r={6} fill="var(--primary)" />
      <line x1={400} y1={190} x2={400} y2={400} stroke="currentColor" strokeOpacity={0.2} />
    </g>
  )
}

/** Curvas de nível. */
function Topo() {
  return (
    <g stroke="currentColor" strokeWidth={1}>
      {Array.from({ length: 11 }).map((_, i) => (
        <path
          key={i}
          d={`M ${400 - 330 + i * 24} ${420 + Math.sin(i) * 14}
              C ${150 + i * 12} ${120 + i * 16}, ${520 - i * 8} ${70 + i * 18}, ${650 - i * 22} ${300 + i * 8}
              S ${690 - i * 28} ${620 - i * 20}, ${420 + i * 4} ${700 - i * 24}
              S ${90 + i * 26} ${600 - i * 12}, ${400 - 330 + i * 24} ${420 + Math.sin(i) * 14} Z`}
          strokeOpacity={0.07 + (i % 4 === 0 ? 0.09 : 0)}
        />
      ))}
      <circle cx={420} cy={400} r={4} fill="var(--primary)" />
      <circle cx={420} cy={400} r={14} stroke="var(--primary)" strokeOpacity={0.6} />
    </g>
  )
}

/** Malha urbana com checkpoints genéricos. */
function Urban() {
  const nodes = [
    { x: 190, y: 250, l: 'A' },
    { x: 430, y: 380, l: 'B' },
    { x: 610, y: 560, l: 'C' },
  ]
  return (
    <g>
      <g stroke="currentColor" strokeOpacity={0.09}>
        {Array.from({ length: 14 }).map((_, i) => (
          <g key={i}>
            <line x1={i * 60} y1={0} x2={i * 60} y2={800} />
            <line x1={0} y1={i * 60} x2={800} y2={i * 60} />
          </g>
        ))}
      </g>
      <g stroke="currentColor" strokeOpacity={0.2} strokeWidth={1.5}>
        <path d="M 0 180 L 300 300 L 420 260 L 800 420" />
        <path d="M 120 800 L 260 520 L 600 480 L 800 700" />
        <path d="M 540 0 L 480 300 L 640 560" />
      </g>
      <path d="M 190 250 L 430 380 L 610 560" stroke="var(--primary)" strokeWidth={2} strokeDasharray="6 8" />
      {nodes.map((n) => (
        <g key={n.l}>
          <circle cx={n.x} cy={n.y} r={22} stroke="var(--primary)" strokeOpacity={0.45} />
          <circle cx={n.x} cy={n.y} r={6} fill="var(--primary)" />
          <text x={n.x + 30} y={n.y + 5} fill="currentColor" fillOpacity={0.6} fontSize={14} fontFamily="var(--font-mono)" letterSpacing={3}>
            CP.{n.l}
          </text>
        </g>
      ))}
    </g>
  )
}

/** O círculo: anéis concêntricos e um ponto central. */
function Circle() {
  return (
    <g>
      {[340, 270, 200, 130].map((r, i) => (
        <circle
          key={r}
          cx={400}
          cy={400}
          r={r}
          stroke={i === 0 ? 'var(--primary)' : 'currentColor'}
          strokeOpacity={i === 0 ? 0.7 : 0.14}
          strokeWidth={i === 0 ? 1.5 : 1}
        />
      ))}
      <line x1={400} y1={20} x2={400} y2={780} stroke="currentColor" strokeOpacity={0.08} />
      <line x1={20} y1={400} x2={780} y2={400} stroke="currentColor" strokeOpacity={0.08} />
      <circle cx={400} cy={400} r={5} fill="var(--primary)" />
    </g>
  )
}
