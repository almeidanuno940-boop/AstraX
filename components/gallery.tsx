import Image from 'next/image'
import { ArrowUpRight, ImagePlus } from 'lucide-react'
import { socials } from '@/lib/site-config'
import { galleryItems } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { Reveal, RevealLines } from './reveal'

export function Gallery() {
  return (
    <section className="bg-background" aria-labelledby="media-heading">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-primary">Galeria</Reveal>
            <RevealLines
              id="media-heading"
              lines={['Isto é', 'o desafio.']}
              className="font-display text-6xl uppercase leading-[0.88] sm:text-8xl lg:text-9xl"
            />
          </div>
          <Reveal delay={200} as="ul" className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                {s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {s.label}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="inline-flex items-center gap-3 border border-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/60"
                  >
                    {s.label}
                    <span className="text-[10px] text-muted-foreground">Em breve</span>
                  </span>
                )}
              </li>
            ))}
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-4 md:mt-24 md:grid-cols-12 md:gap-6">
          {galleryItems.map((item, i) => (
            <Reveal
              as="li"
              key={item.type === 'image' ? item.src : `placeholder-${i}`}
              variant="image"
              delay={(i % 3) * 120}
              className={cn('group relative overflow-hidden bg-card', item.className)}
            >
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover grayscale-[40%] transition-[filter,transform] duration-[1.6s] group-hover:scale-105 group-hover:grayscale-0"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 border border-dashed border-white/15 bg-card px-6 text-center">
                  <ImagePlus className="size-8 text-primary" aria-hidden />
                  <p className="font-display text-3xl uppercase md:text-5xl">{item.label}</p>
                  <p className="max-w-xs text-sm text-muted-foreground">{item.hint}</p>
                </div>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
