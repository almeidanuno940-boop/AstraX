import { Reveal, RevealLines } from '@/components/reveal'
import { survivalDays } from '@/lib/survival-data'

export function FourDaysSection() {
  return (
    <section id="days" className="scroll-mt-16 bg-card" aria-labelledby="days-heading">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <Reveal className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-primary">02 — The Four Days</Reveal>
        <RevealLines
          id="days-heading"
          lines={['Learn. Adapt.', 'Endure. Survive.']}
          className="font-display text-6xl uppercase leading-[0.88] sm:text-8xl lg:text-9xl"
        />

        <ol className="mt-16 border-t border-white/15 md:mt-24">
          {survivalDays.map((day, i) => (
            <li key={day.number}>
              <Reveal
                delay={i * 80}
                className="group grid items-baseline gap-4 border-b border-white/15 py-8 transition-colors hover:bg-white/[0.02] md:grid-cols-12 md:gap-8 md:py-12"
              >
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary md:col-span-2">
                  Day {day.number}
                </span>
                <h3 className="font-display text-6xl uppercase leading-none transition-transform duration-700 group-hover:translate-x-2 sm:text-7xl md:col-span-5 md:text-8xl">
                  {day.title}
                </h3>
                <p className="max-w-md text-pretty leading-relaxed text-muted-foreground md:col-span-5 md:text-lg">
                  {day.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
