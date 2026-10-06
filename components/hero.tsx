import Image from 'next/image'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { heroStats } from '@/lib/site-data'
import { Parallax } from './parallax'
import { Reveal, RevealLines } from './reveal'
import { Stats } from './stats'

export function Hero() {
  return (
    <section id="top" className="grain relative isolate flex min-h-svh flex-col overflow-hidden">
      <Parallax speed={0.25} className="absolute inset-0 -z-20 scale-110">
        <Image
          src="/images/hero.png"
          alt="A lone trail runner on a mountain ridge at blue hour above the clouds"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[35%_center]"
        />
      </Parallax>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/20 to-background" />

      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-5 pb-10 pt-32 md:px-10 md:pb-14">
        <Reveal className="mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
          <span className="h-px w-10 bg-primary" />
          Até às estrelas — Portugal
        </Reveal>

        <RevealLines
          as="h1"
          lines={['Challenge', 'Your Limits.']}
          className="font-display text-[19vw] uppercase leading-[0.86] tracking-tight sm:text-[15vw] lg:text-[12.5vw] 2xl:text-[200px]"
        />

        <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
          <Reveal delay={300} className="max-w-md text-base leading-relaxed text-white/75 md:text-lg">
            {"Four challenges. One purpose. Discover what you're capable of."}
          </Reveal>
          <Reveal delay={420} className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#challenges"
              className="group inline-flex items-center justify-between gap-6 bg-primary px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-white"
            >
              Explore Challenges
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href="#next-event"
              className="inline-flex items-center justify-between gap-6 border border-white/30 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-white hover:bg-white/5"
            >
              Next Event
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
            </a>
          </Reveal>
        </div>

        <Reveal delay={550} className="mt-14 md:mt-20">
          <Stats stats={heroStats} size="lg" />
        </Reveal>
      </div>

      <a
        href="#challenges"
        className="absolute bottom-8 right-5 hidden flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/60 md:right-10 lg:flex"
        aria-label="Scroll to challenges"
      >
        <span className="[writing-mode:vertical-rl]">Scroll</span>
        <span className="relative h-14 w-px overflow-hidden bg-white/15">
          <span className="scroll-cue absolute inset-x-0 top-0 h-1/2 bg-white" />
        </span>
        <ArrowDown className="size-3" aria-hidden />
      </a>
    </section>
  )
}
