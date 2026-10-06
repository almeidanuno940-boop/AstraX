import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Parallax } from '@/components/parallax'
import { Reveal, RevealLines } from '@/components/reveal'
import { Stats } from '@/components/stats'
import { survivalStats } from '@/lib/survival-data'

export function SurvivalHero() {
  return (
    <section id="top" className="grain relative isolate flex min-h-svh flex-col overflow-hidden">
      <Parallax speed={0.25} className="absolute inset-0 -z-20 scale-110">
        <Image
          src="/images/survival.png"
          alt="A small group around a campfire in a misty forest"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </Parallax>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/25 to-background" />

      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-5 pb-10 pt-32 md:px-10 md:pb-14">
        <Reveal className="mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
          <span className="h-px w-10 bg-primary" />
          Challenge 02 — Survival
        </Reveal>

        <RevealLines
          as="h1"
          lines={['Survival']}
          className="font-display text-[22vw] uppercase leading-[0.86] tracking-tight sm:text-[18vw] lg:text-[15vw] 2xl:text-[240px]"
        />
        <Reveal delay={200} className="mt-2 font-display text-3xl uppercase tracking-wide text-primary sm:text-5xl lg:text-6xl">
          4 days in the wild
        </Reveal>

        <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
          <Reveal delay={300} className="max-w-md text-base leading-relaxed text-white/75 md:text-lg">
            Learn. Adapt. Endure. A supervised wilderness experience for those ready to be tested.
          </Reveal>
          <Reveal delay={420}>
            <a
              href="#apply"
              className="group inline-flex w-full items-center justify-between gap-6 bg-primary px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-white sm:w-auto"
            >
              Apply for Survival
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
          </Reveal>
        </div>

        <Reveal delay={550} className="mt-14 md:mt-20">
          <Stats stats={survivalStats} size="lg" />
        </Reveal>
      </div>
    </section>
  )
}
