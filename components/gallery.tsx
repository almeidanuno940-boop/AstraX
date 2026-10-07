import { ArrowUpRight } from 'lucide-react'
import { socials } from '@/lib/site-config'
import { galleryItems } from '@/lib/site-data'
import { GalleryGrid } from './gallery-grid'
import { Reveal, RevealLines } from './reveal'

export function Gallery() {
  return (
    <section className="bg-background" aria-labelledby="media-heading">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal className="eyebrow mb-6">Galeria</Reveal>
            <RevealLines
              id="media-heading"
              lines={['Isto é', 'o desafio.']}
              className="font-display text-[15vw] uppercase leading-[0.86] sm:text-[11vw] lg:text-[9vw]"
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
                    className="group tech inline-flex min-h-12 items-center gap-3 border border-white/25 px-5 py-3 font-semibold transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {s.label}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="tech inline-flex min-h-12 items-center gap-3 border border-white/10 px-5 py-3 text-white/60"
                  >
                    {s.label}
                    <span className="text-[10px] text-muted-foreground">Em breve</span>
                  </span>
                )}
              </li>
            ))}
          </Reveal>
        </div>

        <GalleryGrid items={galleryItems} />
      </div>
    </section>
  )
}
