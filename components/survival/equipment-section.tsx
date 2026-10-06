import { Reveal, RevealLines } from '@/components/reveal'
import { survivalEquipment } from '@/lib/survival-data'

export function EquipmentSection() {
  return (
    <section id="equipment" className="scroll-mt-16" aria-labelledby="equipment-heading">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-primary">07 — Equipment</Reveal>
            <RevealLines
              id="equipment-heading"
              lines={['What to', 'bring.']}
              className="font-display text-7xl uppercase leading-[0.88] sm:text-8xl lg:text-9xl"
            />
          </div>
          <Reveal delay={200} className="max-w-xs text-pretty leading-relaxed text-muted-foreground">
            The official equipment list is being finalised and will appear here.
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4 md:mt-24">
          {survivalEquipment.map((group, i) => (
            <Reveal key={group.group} delay={i * 80} className="bg-background p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">{group.group}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm uppercase tracking-[0.15em] text-white/70">
                    <span className="h-px w-4 bg-white/30" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
