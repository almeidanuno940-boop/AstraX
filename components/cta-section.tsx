import Image from 'next/image'
import { brand, primaryCta } from '@/lib/site-config'
import { ButtonLink } from './button-link'
import { Parallax } from './parallax'
import { Reveal, RevealLines } from './reveal'

export function CTASection() {
  return (
    <section className="grain relative isolate overflow-hidden" aria-labelledby="cta-heading">
      <Parallax speed={0.18} className="absolute inset-0 -z-20 scale-125">
        <Image src="/images/final-cta.jpg" alt="" fill sizes="100vw" className="object-cover" />
      </Parallax>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/40 to-background" />

      <div className="mx-auto flex min-h-[90svh] max-w-[1600px] flex-col items-center justify-center px-5 py-32 text-center md:px-10">
        <Reveal className="mb-8 text-xs font-medium uppercase tracking-[0.35em] text-white/80">
          {brand.name} — {brand.tagline}
        </Reveal>
        <RevealLines
          id="cta-heading"
          lines={['O teu próximo', 'desafio', 'começa aqui.']}
          className="font-display text-[14vw] uppercase leading-[0.86] sm:text-[12vw] lg:text-[9vw] 2xl:text-[160px]"
        />
        <Reveal delay={400} className="mt-14">
          <ButtonLink href={primaryCta.href} size="lg">
            {primaryCta.label}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  )
}
