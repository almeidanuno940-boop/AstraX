import { Reveal, RevealLines } from '@/components/reveal'
import { missionPillars } from '@/lib/survival-data'

export function MissionSection() {
  return (
    <section id="mission" className="scroll-mt-16" aria-labelledby="mission-heading">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-primary">01 — The Mission</Reveal>
            <RevealLines
              id="mission-heading"
              lines={['The', 'mission.']}
              className="font-display text-7xl uppercase leading-[0.88] sm:text-8xl lg:text-9xl"
            />
          </div>
          <div className="flex flex-col justify-end lg:col-span-5">
            <Reveal delay={150} className="text-pretty text-lg leading-relaxed text-white/80 md:text-xl">
              Four days. A supervised wilderness experience that brings together survival learning, navigation,
              adaptation, endurance and problem solving — step by step, with instructors by your side.
            </Reveal>
            <Reveal as="ul" delay={250} className="mt-10 border-t border-white/15">
              {missionPillars.map((pillar, i) => (
                <li
                  key={pillar}
                  className="flex items-center justify-between border-b border-white/15 py-4 text-sm font-medium uppercase tracking-[0.2em]"
                >
                  {pillar}
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
