import Image from 'next/image'
import { Reveal, RevealLines } from '@/components/reveal'
import { finisherItems } from '@/lib/survival-data'
import { cn } from '@/lib/utils'

export function SurvivalFinisher() {
  return (
    <section id="finisher" className="scroll-mt-16" aria-labelledby="finisher-heading">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-primary">05 — The Reward</Reveal>
            <RevealLines
              id="finisher-heading"
              lines={['Earn your', 'finisher status.']}
              className="font-display text-6xl uppercase leading-[0.88] sm:text-8xl lg:text-9xl"
            />
          </div>
          <Reveal delay={200} className="max-w-xs text-pretty leading-relaxed text-muted-foreground">
            Anyone who completes all four days receives:
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-4 md:mt-24 md:grid-cols-6 md:gap-6">
          {finisherItems.map((item, i) => (
            <li key={item.title} className={cn('group', item.featured ? 'md:col-span-3' : 'md:col-span-6')}>
              <Reveal
                variant="image"
                delay={i * 120}
                className={cn(
                  'relative overflow-hidden bg-card',
                  item.featured ? 'aspect-[4/5]' : 'aspect-[4/5] md:aspect-[21/9]',
                )}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes={item.featured ? '(min-width: 768px) 50vw, 100vw' : '100vw'}
                  className="object-cover transition-transform duration-[1.6s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" aria-hidden />
              </Reveal>
              <div className="flex items-baseline justify-between border-b border-white/15 py-5">
                <span
                  className={cn(
                    'font-display uppercase',
                    item.featured ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl',
                  )}
                >
                  {item.title}
                </span>
                <span className="text-xs tracking-[0.25em] text-muted-foreground">0{i + 1}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
