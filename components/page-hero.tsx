import Image from 'next/image'
import { Container } from './section'
import { Parallax } from './parallax'
import { Reveal, RevealLines } from './reveal'

/**
 * Hero das páginas secundárias (desafios, sobre, FAQ, contacto, inscrições, legais…).
 * Com `image`, ganha o mesmo tratamento cinematográfico dos heroes dos desafios.
 */
export function PageHero({
  eyebrow,
  lines,
  description,
  image,
  meta,
  children,
}: {
  eyebrow: string
  lines: string[]
  description?: string
  image?: { src: string; alt: string; position?: string }
  /** Texto técnico no canto superior direito (ex.: "01 / 04"). */
  meta?: string
  children?: React.ReactNode
}) {
  return (
    <section className="grain relative isolate overflow-hidden border-b border-white/10" aria-labelledby="page-title">
      {image ? (
        <>
          <Parallax speed={0.15} className="absolute inset-0 -z-30 scale-110">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="100vw"
              style={{ objectPosition: image.position ?? '50% 50%' }}
              className="object-cover"
            />
          </Parallax>
          <div aria-hidden className="absolute inset-0 -z-20 bg-background/55" />
          <div aria-hidden className="scrim-left absolute inset-0 -z-20" />
          <div aria-hidden className="scrim-bottom absolute inset-0 -z-20" />
        </>
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_0%,color-mix(in_oklch,var(--primary)_20%,transparent),transparent_45%)]"
        />
      )}
      <Container className="pb-16 pt-36 md:pb-28 md:pt-52">
        <Reveal className="mb-8 flex items-center justify-between gap-6">
          <span className="eyebrow">{eyebrow}</span>
          {meta && <span className="tech text-white/60">{meta}</span>}
        </Reveal>
        <RevealLines
          as="h1"
          id="page-title"
          lines={lines}
          className="max-w-7xl font-display text-[17vw] uppercase leading-[0.86] sm:text-[12vw] lg:text-[10vw]"
        />
        {description && (
          <Reveal delay={250} className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/75 md:text-xl">
            {description}
          </Reveal>
        )}
        {children && (
          <Reveal delay={350} className="mt-10">
            {children}
          </Reveal>
        )}
      </Container>
    </section>
  )
}