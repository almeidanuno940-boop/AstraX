import Image from 'next/image'
import { requireChallenge, finisherRewards, survivalIncludes } from '@/lib/site-data'
import { ButtonLink } from './button-link'
import { Reveal, RevealLines } from './reveal'

export function FinisherSection() {
  const survival = requireChallenge('survival')
  const backyard = requireChallenge('backyard')

  return (
    <section className="bg-card" aria-labelledby="finisher-heading">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal className="mb-6 eyebrow">A recompensa</Reveal>
            <RevealLines
              id="finisher-heading"
              lines={['Conquista o teu', 'estatuto de', 'Finisher.']}
              className="font-display text-[12vw] uppercase leading-[0.88] sm:text-8xl lg:text-9xl"
            />
          </div>
          <Reveal delay={200} className="max-w-xs text-pretty leading-relaxed text-muted-foreground">
            Não se oferece. Não se compra. Só o conquista quem chega ao fim.
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-4 md:mt-24 md:grid-cols-3 md:gap-6">
          {finisherRewards.map((reward, i) => (
            <li key={reward.title} className="group">
              <Reveal variant="image" delay={i * 120} className="relative aspect-[4/5] overflow-hidden bg-background">
                <Image
                  src={reward.image}
                  alt={reward.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1.6s] group-hover:scale-105"
                />
              </Reveal>
              <div className="flex items-baseline justify-between border-b border-white/15 py-5">
                <span className="font-display text-2xl uppercase md:text-3xl">{reward.title}</span>
                <span className="text-xs tracking-[0.25em] text-muted-foreground">0{i + 1}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid gap-12 border border-white/15 p-6 sm:p-10 md:mt-28 lg:grid-cols-2 lg:p-16">
          <Reveal>
            <p className="eyebrow">{survival.number} — Survival</p>
            <p className="mt-6 font-display text-5xl uppercase leading-[0.9] sm:text-6xl lg:text-7xl">
              Completa os
              <br />
              quatro dias.
            </p>
            <p className="mt-10 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">E recebe</p>
            <ul className="mt-4 flex flex-col gap-2">
              {survival.finisher.map((item) => (
                <li key={item} className="flex items-center gap-4 font-display text-2xl uppercase md:text-3xl">
                  <span className="h-px w-6 shrink-0 bg-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold uppercase tracking-[0.2em] text-white/80">{backyard.title}</span> —{' '}
              {backyard.finisher[0]}.
            </p>
            <ButtonLink href={survival.href} variant="outline" className="mt-8">
              Ver o Survival
            </ButtonLink>
          </Reveal>

          <Reveal delay={150} className="flex flex-col justify-end">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              O que está incluído no Survival
            </p>
            <ul className="border-t border-white/15">
              {survivalIncludes.map((item, i) => (
                <li
                  key={item}
                  className="flex items-center justify-between gap-4 border-b border-white/15 py-4 text-sm font-medium uppercase tracking-[0.2em] md:text-base"
                >
                  {item}
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
