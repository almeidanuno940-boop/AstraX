import { principles } from '@/lib/site-data'
import { Reveal, RevealLines } from './reveal'

export function WhySection() {
  return (
    <section id="about" className="scroll-mt-16 bg-background" aria-labelledby="about-heading">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <Reveal className="mb-10 text-xs font-medium uppercase tracking-[0.3em] text-primary">Why AD ASTRA</Reveal>
        <RevealLines
          id="about-heading"
          lines={['Most people quit', 'before they know', "what they're capable of."]}
          className="max-w-6xl font-display text-5xl uppercase leading-[0.92] sm:text-7xl lg:text-8xl"
        />

        <div className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-12">
          <Reveal className="text-pretty text-xl leading-relaxed text-white/80 md:text-2xl lg:col-span-5">
            AD ASTRA creates challenges designed to test endurance, courage, strategy and adaptability.
          </Reveal>

          <ul className="grid border-t border-white/15 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {principles.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={i * 100}
                className="group flex flex-col gap-4 border-b border-white/15 py-8 sm:odd:pr-8 sm:even:border-l sm:even:pl-8"
              >
                <span className="text-xs font-medium tracking-[0.25em] text-muted-foreground transition-colors group-hover:text-primary">
                  {p.number}
                </span>
                <span className="font-display text-4xl uppercase md:text-5xl">{p.title}</span>
                <span className="text-sm leading-relaxed text-muted-foreground">{p.text}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
