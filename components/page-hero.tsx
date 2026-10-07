import { Container } from './section'
import { Reveal, RevealLines } from './reveal'

/** Hero simples e coerente para páginas institucionais (sobre, FAQ, contacto, legais, próximo evento…). */
export function PageHero({
  eyebrow,
  lines,
  description,
  children,
}: {
  eyebrow: string
  lines: string[]
  description?: string
  children?: React.ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10" aria-labelledby="page-title">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_40%)]"
      />
      <Container className="pb-16 pt-36 md:pb-24 md:pt-44">
        <Reveal className="mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-10 bg-primary" aria-hidden />
          {eyebrow}
        </Reveal>
        <RevealLines
          as="h1"
          id="page-title"
          lines={lines}
          className="max-w-6xl font-display text-[15vw] uppercase leading-[0.88] sm:text-8xl lg:text-9xl"
        />
        {description && (
          <Reveal delay={250} className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 md:text-xl">
            {description}
          </Reveal>
        )}
        {children && (
          <Reveal delay={350} className="mt-10">
            {children}
          </Reveal>
        )}
      </Container>
    </section>
  )
}
