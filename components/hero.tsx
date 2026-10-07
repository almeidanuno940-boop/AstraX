import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { ButtonLink } from './button-link'
import { heroStats } from '@/lib/site-data'
import { brand } from '@/lib/site-config'
import { Parallax } from './parallax'
import { Reveal, RevealLines } from './reveal'
import { Stats } from './stats'

export function Hero() {
  return (
    <section id="top" className="grain relative isolate flex min-h-svh flex-col overflow-hidden" aria-labelledby="hero-title">
      <Parallax speed={0.25} className="absolute inset-0 -z-20 scale-110">
        <Image
          src="/images/hero.png"
          alt="Corredor solitário numa crista de montanha, ao anoitecer, acima das nuvens"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[35%_center]"
        />
      </Parallax>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/20 to-background" />

      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-5 pb-10 pt-32 md:px-10 md:pb-14">
        <Reveal className="mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-white/80">
          <span className="h-px w-10 bg-primary" aria-hidden />
          <span className="text-white">{brand.name}</span>
          <span className="text-white/40" aria-hidden>
            /
          </span>
          {brand.tagline}
        </Reveal>

        <RevealLines
          as="h1"
          id="hero-title"
          lines={['Desafia', 'os teus limites.']}
          className="font-display text-[13.5vw] uppercase leading-[0.88] tracking-tight sm:text-[12vw] lg:text-[10.5vw] 2xl:text-[170px]"
        />

        <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
          <Reveal delay={300} className="max-w-md text-base leading-relaxed text-white/80 md:text-lg">
            Quatro desafios. Um objetivo. Descobre até onde és capaz de ir.
          </Reveal>
          <Reveal delay={420} className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#challenges" variant="primary">
              Explorar desafios
            </ButtonLink>
            <ButtonLink href="/next-event" variant="outline" arrow={false}>
              Próximo desafio
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={550} className="mt-14 md:mt-20">
          <Stats stats={heroStats} size="lg" />
        </Reveal>
      </div>

      <a
        href="#challenges"
        className="absolute bottom-8 right-5 hidden flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/70 md:right-10 lg:flex"
        aria-label="Descer até aos desafios"
      >
        <span className="[writing-mode:vertical-rl]">Descer</span>
        <span className="relative h-14 w-px overflow-hidden bg-white/15" aria-hidden>
          <span className="scroll-cue absolute inset-x-0 top-0 h-1/2 bg-white" />
        </span>
        <ArrowDown className="size-3" aria-hidden />
      </a>
    </section>
  )
}
