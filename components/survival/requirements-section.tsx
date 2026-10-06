import { Reveal, RevealLines } from '@/components/reveal'
import { survivalRequirements } from '@/lib/survival-data'

export function RequirementsSection() {
  return (
    <section id="requirements" className="scroll-mt-16 bg-card" aria-labelledby="requirements-heading">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-primary">06 — Requirements</Reveal>
            <RevealLines
              id="requirements-heading"
              lines={['Who can', 'take part.']}
              className="font-display text-6xl uppercase leading-[0.88] sm:text-8xl"
            />
            <Reveal delay={200} className="mt-8 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              Participation requirements will be confirmed and published here before applications open.
            </Reveal>
          </div>
          <Reveal as="ul" delay={150} className="border-t border-white/15 lg:col-span-7">
            {survivalRequirements.map((r, i) => (
              <li
                key={r.title}
                className="grid grid-cols-[2.5rem_1fr] items-baseline gap-4 border-b border-white/15 py-6 sm:grid-cols-[3rem_1fr_1.2fr] md:py-8"
              >
                <span className="text-xs tracking-[0.25em] text-muted-foreground">0{i + 1}</span>
                <span className="font-display text-2xl uppercase md:text-3xl">{r.title}</span>
                <span className="col-start-2 text-sm text-muted-foreground sm:col-start-auto">{r.text}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
