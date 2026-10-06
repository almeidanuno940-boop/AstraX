import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Parallax } from '@/components/parallax'
import { Reveal, RevealLines } from '@/components/reveal'
import { survivalApplyHref } from '@/lib/survival-data'

export function SurvivalCTA() {
  return (
    <section id="apply" className="grain relative isolate scroll-mt-16 overflow-hidden" aria-labelledby="apply-heading">
      <Parallax speed={0.18} className="absolute inset-0 -z-20 scale-125">
        <Image src="/images/final-cta.png" alt="" fill sizes="100vw" className="object-cover" />
      </Parallax>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/50 to-background" />

      <div className="mx-auto flex min-h-[90svh] max-w-[1600px] flex-col items-center justify-center px-5 py-32 text-center md:px-10">
        <Reveal className="mb-8 text-xs font-medium uppercase tracking-[0.35em] text-white/70">
          Survival — 4 days in the wild
        </Reveal>
        <RevealLines
          id="apply-heading"
          lines={['Only 12', 'spots.']}
          className="font-display text-[22vw] uppercase leading-[0.86] sm:text-[17vw] lg:text-[12vw] 2xl:text-[200px]"
        />
        <Reveal delay={300} className="mt-8 font-display text-6xl uppercase text-primary md:text-8xl">
          €299
        </Reveal>
        <Reveal delay={400} className="mt-12">
          <a
            href={survivalApplyHref}
            className="group inline-flex items-center gap-8 bg-primary px-10 py-6 text-sm font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-white"
          >
            Apply for Survival
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
