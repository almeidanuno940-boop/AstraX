import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { Challenge } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { Reveal, RevealLines } from './reveal'
import { Stats } from './stats'

export function ChallengeCard({ challenge, reverse = false }: { challenge: Challenge; reverse?: boolean }) {
  return (
    <article
      id={`challenge-${challenge.id}`}
      className="group grid gap-8 border-t border-white/10 py-14 md:py-20 lg:grid-cols-12 lg:gap-12 lg:py-28"
      aria-labelledby={`${challenge.id}-title`}
    >
      <div className={cn('relative lg:col-span-7', reverse && 'lg:order-2')}>
        <Reveal variant="image" className="relative aspect-[4/5] overflow-hidden bg-card sm:aspect-[16/11]">
          <Image
            src={challenge.image}
            alt={challenge.imageAlt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover grayscale-[35%] transition-[filter,transform] duration-[1.6s] group-hover:scale-[1.03] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <span
            aria-hidden
            className="absolute bottom-3 left-4 font-display text-[28vw] leading-[0.8] text-white/25 sm:text-[18vw] lg:text-[12vw] 2xl:text-[200px]"
          >
            {challenge.number}
          </span>
          {challenge.price && (
            <span className="absolute right-4 top-4 bg-primary px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground">
              {challenge.price}
            </span>
          )}
        </Reveal>
      </div>

      <div className={cn('flex flex-col justify-between gap-10 lg:col-span-5', reverse && 'lg:order-1')}>
        <div>
          <Reveal className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-primary">{challenge.number}</span>
            <span className="h-px w-8 bg-white/25" />
            {challenge.category}
          </Reveal>
          <RevealLines
            as="h3"
            id={`${challenge.id}-title`}
            lines={[challenge.title]}
            delay={100}
            className="mt-6 text-balance font-display text-5xl uppercase leading-[0.92] sm:text-6xl xl:text-7xl"
          />
          <Reveal delay={200} className="mt-6 text-lg italic text-white/85 md:text-xl">
            {`“${challenge.motto}”`}
          </Reveal>
          <Reveal delay={260} className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {challenge.description}
          </Reveal>
        </div>

        <Reveal delay={320} className="flex flex-col gap-8">
          <Stats stats={challenge.stats} />
          <a
            href={challenge.href}
            className="group/link inline-flex w-fit items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em]"
          >
            <span className="relative">
              View Challenge
              <span className="absolute -bottom-2 left-0 h-px w-full bg-white/30" />
              <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover/link:scale-x-100" />
            </span>
            <span className="inline-flex size-10 items-center justify-center border border-white/25 transition-colors group-hover/link:border-primary group-hover/link:bg-primary group-hover/link:text-primary-foreground">
              <ArrowUpRight className="size-4" aria-hidden />
            </span>
          </a>
        </Reveal>
      </div>
    </article>
  )
}
