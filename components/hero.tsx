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
      <Parallax speed={0.25} className="absolute inset-0 -z-30 scale-110">
        <Image
          src="/images/hero.jpg"
          alt="Corredor solitário numa crista de montanha, ao anoitecer, acima das nuvens"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[0%_center]"
        />
      </Parallax>
      <div aria-hidden className="absolute inset-0 -z-20 bg-background/10" />
      <div aria-hidden className="scrim-left absolute inset-0 -z-20 opacity-75" />
      <div aria-hidden className="scrim-bottom absolute inset-0 -z-20" />

      {/* linhas técnicas */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-5 -z-10 hidden w-px bg-white/10 md:left-10 lg:block" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-5 -z-10 hidden w-px bg-white/10 md:right-10 lg:block" />

      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-5 pb-10 pt-32 md:px-10 md:pb-14">
        <Reveal className="eyebrow mb-8">
          <span className="text-white">{brand.name}</span>
          <span className="text-white/40" aria-hidden>
            /
          </span>
          <span className="text-white/80">{brand.tagline}</span>
        </Reveal>

        <RevealLines
          as="h1"
          id="hero-title"
          lines={['Desafia', 'os teus', 'limites.']}
          className="font-display text-[22vw] uppercase leading-[0.84] tracking-tight sm:text-[17vw] lg:text-[13vw] 2xl:text-[220px]"
        />

        <div className="mt-8 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between">
          <Reveal delay={300} className="max-w-md text-base leading-relaxed text-white/80 md:text-xl">
            Quatro desafios. Um objetivo. Descobre até onde és capaz de ir.
          </Reveal>
          <Reveal delay={420} className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#challenges" variant="primary" size="lg">
              Explorar desafios
            </ButtonLink>
            <ButtonLink href="/next-event" variant="outline" size="lg" arrow={false}>
              Próximo evento
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
        className="tech absolute bottom-28 right-5 hidden flex-col items-center gap-3 text-[10px] text-white/70 md:right-10 lg:flex"
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
