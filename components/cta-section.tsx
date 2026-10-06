import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Parallax } from './parallax'
import { Reveal, RevealLines } from './reveal'

export function CTASection() {
  return (
    <section id="faq" className="grain relative isolate scroll-mt-16 overflow-hidden" aria-labelledby="cta-heading">
      <Parallax speed={0.18} className="absolute inset-0 -z-20 scale-125">
        <Image src="/images/final-cta.png" alt="" fill sizes="100vw" className="object-cover" />
      </Parallax>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/40 to-background" />

      <div className="mx-auto flex min-h-[90svh] max-w-[1600px] flex-col items-center justify-center px-5 py-32 text-center md:px-10">
        <Reveal className="mb-8 text-xs font-medium uppercase tracking-[0.35em] text-white/70">
          Ad astra — Até às estrelas
        </Reveal>
        <RevealLines
          id="cta-heading"
          lines={['Your next', 'challenge', 'starts here.']}
          className="font-display text-[16vw] uppercase leading-[0.86] sm:text-[13vw] lg:text-[10vw] 2xl:text-[180px]"
        />
        <Reveal delay={400} className="mt-14">
          <a
            href="#challenges"
            className="group inline-flex items-center gap-8 bg-primary px-10 py-6 text-sm font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-white"
          >
            Join a Challenge
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
