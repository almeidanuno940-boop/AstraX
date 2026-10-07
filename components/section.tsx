import { cn } from '@/lib/utils'
import { Reveal, RevealLines } from './reveal'

/** Largura máxima e gutters de todo o site. */
export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-[1600px] px-5 md:px-10', className)}>{children}</div>
}

type Tone = 'default' | 'card' | 'accent'

const tones: Record<Tone, string> = {
  default: 'bg-background',
  card: 'bg-card',
  accent: 'bg-primary text-primary-foreground',
}

export function Section({
  id,
  tone = 'default',
  border = true,
  className,
  children,
  labelledBy,
}: {
  id?: string
  tone?: Tone
  border?: boolean
  className?: string
  children: React.ReactNode
  labelledBy?: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('scroll-mt-16', tones[tone], border && 'border-t border-white/10', className)}
    >
      <Container className="py-20 md:py-32">{children}</Container>
    </section>
  )
}

const headingSizes = {
  /** Largura total (escala da homepage). */
  xl: 'text-5xl sm:text-7xl lg:text-8xl',
  /** Dentro de colunas estreitas. */
  lg: 'text-5xl sm:text-6xl lg:text-7xl',
}

export function SectionHeading({
  eyebrow,
  lines,
  id,
  size = 'lg',
  tone = 'default',
  className,
}: {
  eyebrow: string
  lines: string[]
  id: string
  size?: keyof typeof headingSizes
  tone?: Tone
  className?: string
}) {
  return (
    <div className={className}>
      <Reveal
        className={cn(
          'mb-6 text-xs font-medium uppercase tracking-[0.3em]',
          tone === 'accent' ? 'text-primary-foreground' : 'text-primary',
        )}
      >
        {eyebrow}
      </Reveal>
      <RevealLines
        id={id}
        lines={lines}
        className={cn('font-display uppercase leading-[0.92]', headingSizes[size])}
      />
    </div>
  )
}

/** Cabeçalho à esquerda + conteúdo à direita (empilha em mobile). */
export function SplitSection({
  id,
  eyebrow,
  lines,
  tone,
  border,
  lead,
  children,
}: {
  id: string
  eyebrow: string
  lines: string[]
  tone?: Tone
  border?: boolean
  /** Texto curto por baixo do título, na coluna esquerda. */
  lead?: string
  children: React.ReactNode
}) {
  return (
    <Section tone={tone} border={border} labelledBy={id}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={eyebrow} lines={lines} id={id} />
          {lead && (
            <Reveal delay={200} className="mt-8 max-w-md text-pretty leading-relaxed text-muted-foreground md:text-lg">
              {lead}
            </Reveal>
          )}
        </div>
        <div className="lg:col-span-7">{children}</div>
      </div>
    </Section>
  )
}
