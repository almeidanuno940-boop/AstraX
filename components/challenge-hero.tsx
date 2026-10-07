import Image from 'next/image'
import { formatSpots } from '@/lib/registration'
import type { Challenge } from '@/lib/site-data'
import { ButtonLink } from './button-link'
import { Parallax } from './parallax'
import { Reveal, RevealLines } from './reveal'
import { Container } from './section'
import { Stats } from './stats'

/** Hero partilhado pelas quatro páginas de desafio: imagem, headline, subtítulo, estatísticas e CTA. */
export function ChallengeHero({ challenge }: { challenge: Challenge }) {
  const { hero, registration } = challenge

  return (
    <section
      className="grain relative isolate flex min-h-[92svh] flex-col overflow-hidden"
      aria-labelledby="challenge-title"
    >
      <Parallax speed={0.2} className="absolute inset-0 -z-20 scale-110">
        <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" className="object-cover" />
      </Parallax>
      <div aria-hidden className="absolute inset-0 -z-10 bg-background/55" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/30 to-background/60" />

      {hero.variant === 'circle' && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[34%] size-[88vw] max-h-[620px] max-w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50" />
          <div className="absolute left-1/2 top-[34%] size-[62vw] max-h-[440px] max-w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
        </div>
      )}
      {hero.variant === 'urban' && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
        />
      )}

      <Container className="flex flex-1 flex-col justify-end pb-12 pt-36 md:pb-16">
        <Reveal className="mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
          <span className="h-px w-10 bg-primary" aria-hidden />
          Desafio {challenge.number}
          <span className="text-white/30" aria-hidden>
            /
          </span>
          <span className="text-primary">AstraX</span>
        </Reveal>

        <RevealLines
          as="h1"
          id="challenge-title"
          lines={challenge.titleLines}
          className="font-display text-[18vw] uppercase leading-[0.86] tracking-tight sm:text-[13vw] lg:text-[10.5vw] 2xl:text-[170px]"
        />

        <Reveal delay={250} className="mt-6 text-lg uppercase tracking-[0.16em] text-white/80 md:text-2xl">
          {challenge.subtitle}
        </Reveal>

        <Reveal delay={400} className="mt-12 max-w-5xl">
          <Stats stats={challenge.stats} size="hero" />
        </Reveal>

        <Reveal delay={500} className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
          <ButtonLink href={registration.href} size="lg" className="w-full sm:w-auto">
            {challenge.ctaLabel}
          </ButtonLink>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            {formatSpots(registration.spots)}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
