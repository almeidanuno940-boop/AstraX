import Image from 'next/image'
import { formatSpots } from '@/lib/registration'
import type { Challenge } from '@/lib/site-data'
import { ButtonLink } from './button-link'
import { HeroArt } from './hero-art'
import { Parallax } from './parallax'
import { Reveal, RevealLines } from './reveal'
import { Container } from './section'
import { Stats } from './stats'

/** Hero partilhado pelas quatro páginas de desafio: imagem, ilustração técnica, headline, estatísticas e CTA. */
export function ChallengeHero({ challenge }: { challenge: Challenge }) {
  const { hero, registration } = challenge
  const total = '04'

  return (
    <section
      className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden"
      aria-labelledby="challenge-title"
    >
      <Parallax speed={0.2} className="absolute inset-0 -z-30 scale-110">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: hero.position }}
          className="object-cover"
        />
      </Parallax>
      <div aria-hidden className="absolute inset-0 -z-20 bg-background/35" />
      <div aria-hidden className="scrim-left absolute inset-0 -z-20" />
      <div aria-hidden className="scrim-bottom absolute inset-0 -z-20" />

      <HeroArt
        variant={hero.variant}
        className="-right-[12%] top-1/2 -z-10 h-[120vmin] w-[120vmin] -translate-y-1/2 opacity-90 md:right-[-6%] md:h-[100vmin] md:w-[100vmin]"
      />

      {/* barra técnica superior */}
      <Container className="relative pt-24 md:pt-32">
        <Reveal className="tech flex items-center justify-between gap-4 border-b border-white/15 pb-3 text-white/70">
          <span className="flex items-center gap-3">
            <span className="size-1.5 bg-primary" aria-hidden />
            AstraX
          </span>
          <span className="hidden sm:inline">{challenge.kind}</span>
          <span>
            Desafio <span className="text-white">{challenge.number}</span> / {total}
          </span>
        </Reveal>
      </Container>

      <Container className="relative flex flex-1 flex-col justify-end pb-10 pt-16 md:pb-14">
        <RevealLines
          as="h1"
          id="challenge-title"
          lines={challenge.titleLines}
          className="font-display text-[21vw] uppercase leading-[0.84] tracking-tight sm:text-[16vw] lg:text-[12.5vw] 2xl:text-[200px]"
        />

        <Reveal delay={250} className="mt-6 text-base uppercase tracking-[0.2em] text-white/85 md:text-2xl">
          {challenge.subtitle}
        </Reveal>

        <Reveal delay={400} className="mt-12 max-w-5xl md:mt-16">
          <Stats stats={challenge.stats} size="hero" />
        </Reveal>

        <Reveal delay={500} className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
          <ButtonLink href={registration.href} size="lg" className="w-full sm:w-auto sm:min-w-72">
            {challenge.ctaLabel}
          </ButtonLink>
          <p className="tech text-white/80">{formatSpots(registration.spots)}</p>
        </Reveal>
      </Container>
    </section>
  )
}
