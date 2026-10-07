import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { fromPrice, type Challenge } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { Parallax } from './parallax'
import { Reveal, RevealLines } from './reveal'
import { Stats } from './stats'

/**
 * Painel imersivo de um desafio na homepage: imagem a toda a largura, número gigante em contorno,
 * título enorme e informação técnica. Clicável como um todo.
 */
export function ChallengeCard({ challenge, reverse = false }: { challenge: Challenge; reverse?: boolean }) {
  return (
    <Link
      href={challenge.href}
      id={`challenge-${challenge.id}`}
      aria-labelledby={`${challenge.id}-title`}
      className="group relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden border-t border-white/10 lg:min-h-[100svh]"
    >
      <Parallax speed={0.1} className="absolute inset-0 -z-30 scale-[1.12]">
        <Image
          src={challenge.image}
          alt={challenge.imageAlt}
          fill
          sizes="100vw"
          style={{ objectPosition: challenge.hero.position }}
          className="object-cover grayscale-[30%] transition-[filter,transform] duration-[2s] ease-out group-hover:scale-[1.04] group-hover:grayscale-0 group-focus-visible:grayscale-0"
        />
      </Parallax>
      <div aria-hidden className="absolute inset-0 -z-20 bg-background/30 transition-colors duration-700 group-hover:bg-background/15" />
      <div aria-hidden className={cn('absolute inset-0 -z-20 hidden lg:block', reverse ? 'scrim-right' : 'scrim-left')} />
      <div aria-hidden className="scrim-bottom absolute inset-0 -z-20" />

      {/* número gigante em contorno */}
      <span
        aria-hidden
        className={cn(
          'text-outline pointer-events-none absolute top-16 -z-10 font-display text-[46vw] leading-none opacity-80 transition-transform duration-[1.6s] ease-out group-hover:-translate-y-2 sm:text-[34vw] lg:top-10 lg:text-[26vw]',
          reverse ? 'left-2 lg:left-10' : 'right-2 lg:right-10',
        )}
      >
        {challenge.number}
      </span>

      <div className="mx-auto w-full max-w-[1600px] px-5 pb-10 pt-40 md:px-10 md:pb-16">
        <div className={cn('flex flex-col', reverse && 'lg:items-end lg:text-right')}>
          <Reveal className="tech flex flex-wrap items-center gap-x-4 gap-y-2 text-white/80">
            <span className="text-primary">{challenge.number} / 04</span>
            <span className="h-px w-8 bg-white/40" aria-hidden />
            <span>{challenge.kind}</span>
            <span className="bg-primary px-2.5 py-1 font-semibold text-primary-foreground">{fromPrice(challenge)}</span>
          </Reveal>

          <RevealLines
            as="h3"
            id={`${challenge.id}-title`}
            lines={challenge.titleLines}
            delay={100}
            className="mt-6 font-display text-[19vw] uppercase leading-[0.86] sm:text-[14vw] lg:text-[11vw] 2xl:text-[180px]"
          />

          <Reveal delay={200} className="mt-5 text-base uppercase tracking-[0.18em] text-white/85 md:text-xl">
            {challenge.subtitle}
          </Reveal>

          <div
            className={cn(
              'mt-8 grid gap-8 lg:mt-10 lg:grid-cols-12 lg:items-end lg:gap-12',
              reverse && 'lg:[direction:rtl] lg:*:[direction:ltr]',
            )}
          >
            <Reveal delay={260} className="text-pretty leading-relaxed text-white/75 lg:col-span-5 lg:max-w-md">
              {challenge.description}
            </Reveal>
            <Reveal delay={320} className="lg:col-span-5 lg:col-start-7">
              <Stats stats={challenge.stats} />
            </Reveal>
          </div>

          <div
            className={cn(
              'mt-10 inline-flex w-full items-center justify-between gap-4 border-t border-white/25 pt-6 sm:w-fit sm:gap-10',
              reverse && 'lg:self-end',
            )}
          >
            <span className="relative text-sm font-semibold uppercase tracking-[0.24em]">
              Ver desafio
              <span aria-hidden className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
            </span>
            <span className="inline-flex size-14 items-center justify-center border border-white/40 transition-[background-color,border-color,color,transform] duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:-translate-y-1">
              <ArrowUpRight className="size-5" aria-hidden />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
