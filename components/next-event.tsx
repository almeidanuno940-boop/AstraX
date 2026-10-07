import Image from 'next/image'
import { getChallenge, nextEvent, nextEventDetails } from '@/lib/site-data'
import { ButtonLink } from './button-link'
import { Countdown } from './countdown'
import { Parallax } from './parallax'
import { Reveal, RevealLines } from './reveal'

/**
 * Detalhes + contagem decrescente do próximo evento.
 * Os dados vêm de `nextEvent` em `lib/site-data.ts`. Usado na homepage e em /next-event.
 */
export function NextEventPanel({ headingId = 'next-event-heading' }: { headingId?: string }) {
  const challenge = nextEvent.challengeId ? getChallenge(nextEvent.challengeId) : undefined

  return (
    <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
      <Reveal className="lg:col-span-5">
        <dl className="border-t border-white/15" aria-labelledby={headingId}>
          {nextEventDetails.map((item) => (
            <div key={item.label} className="flex items-baseline justify-between gap-6 border-b border-white/15 py-5">
              <dt className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">{item.label}</dt>
              <dd className="text-right font-display text-2xl uppercase md:text-3xl">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={150} className="flex flex-col justify-between gap-12 lg:col-span-6 lg:col-start-7">
        <div>
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">Começa em</p>
          {nextEvent.date ? (
            <Countdown target={nextEvent.date} />
          ) : (
            <div className="border-t border-white/15 pt-6">
              <p className="font-display text-5xl uppercase leading-none sm:text-7xl lg:text-8xl">Por anunciar</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                A data, o local e a contagem decrescente serão publicados assim que o evento for anunciado.
              </p>
            </div>
          )}
        </div>
        <ButtonLink
          href={challenge ? challenge.registration.href : '/challenges'}
          variant="light"
          size="lg"
        >
          {challenge ? 'Garante o teu lugar' : 'Explorar desafios'}
        </ButtonLink>
      </Reveal>
    </div>
  )
}

export function NextEvent() {
  return (
    <section
      id="next-event"
      className="grain relative isolate scroll-mt-16 overflow-hidden"
      aria-labelledby="next-event-heading"
    >
      <Parallax speed={0.15} className="absolute inset-0 -z-20 scale-125">
        <Image src="/images/next-event.png" alt="" fill sizes="100vw" className="object-cover" />
      </Parallax>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/60 to-background" />

      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <Reveal className="mb-6 flex items-center gap-4 eyebrow">
          <span className="relative flex size-2" aria-hidden>
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Em breve
        </Reveal>
        <RevealLines
          id="next-event-heading"
          lines={['O próximo', 'desafio']}
          className="font-display text-6xl uppercase leading-[0.88] sm:text-8xl lg:text-[10rem]"
        />

        <div className="mt-16 lg:mt-24">
          <NextEventPanel />
        </div>
      </div>
    </section>
  )
}
