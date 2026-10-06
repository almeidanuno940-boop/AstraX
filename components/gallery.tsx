import Image from 'next/image'
import { ArrowUpRight, Play } from 'lucide-react'
import { socials } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { Reveal, RevealLines } from './reveal'

const media = [
  { src: '/images/gallery-3.png', alt: 'Runners crossing a misty mountain plateau at dawn', className: 'md:col-span-8 md:row-span-2 aspect-[4/3] md:aspect-auto', video: true },
  { src: '/images/gallery-1.png', alt: 'Mud-covered athlete breathing hard in the rain', className: 'md:col-span-4 aspect-[4/5]' },
  { src: '/images/gallery-2.png', alt: 'Hands tying a rope knot beside a compass and map', className: 'md:col-span-4 aspect-[4/5]' },
  { src: '/images/gallery-4.png', alt: 'Muddy trail shoes crossing a finish line at night', className: 'md:col-span-5 aspect-[4/3]' },
  { src: '/images/survival.png', alt: 'Campfire in the forest at dusk', className: 'md:col-span-7 aspect-[4/3] md:aspect-auto', video: true },
]

export function Gallery() {
  return (
    <section className="bg-background" aria-labelledby="media-heading">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-primary">Media</Reveal>
            <RevealLines
              id="media-heading"
              lines={['This is', 'the challenge.']}
              className="font-display text-6xl uppercase leading-[0.88] sm:text-8xl lg:text-9xl"
            />
          </div>
          <Reveal delay={200} as="ul" className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="group inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {s.label}
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              </li>
            ))}
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:mt-24 md:grid-cols-12 md:gap-6">
          {media.map((item, i) => (
            <Reveal
              key={item.src + i}
              variant="image"
              delay={(i % 3) * 120}
              className={cn('group relative overflow-hidden bg-card', item.className)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover grayscale-[40%] transition-[filter,transform] duration-[1.6s] group-hover:scale-105 group-hover:grayscale-0"
              />
              {item.video && (
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em]">
                  <span className="inline-flex size-12 items-center justify-center rounded-full border border-white/40 bg-background/40 backdrop-blur transition-colors group-hover:border-primary group-hover:bg-primary">
                    <Play className="size-4 fill-current" aria-hidden />
                  </span>
                  Watch film
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
