import { Check } from 'lucide-react'
import { Reveal, RevealLines } from '@/components/reveal'
import { survivalIncluded } from '@/lib/survival-data'

export function IncludedSection() {
  return (
    <section className="bg-card" aria-labelledby="included-heading">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <Reveal className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-primary">04 — What You Get</Reveal>
        <RevealLines
          id="included-heading"
          lines={['What you', 'get.']}
          className="font-display text-7xl uppercase leading-[0.88] sm:text-8xl lg:text-9xl"
        />

        <ul className="mt-16 grid border-l border-t border-white/15 md:mt-24 md:grid-cols-2 lg:grid-cols-3">
          {survivalIncluded.map((item, i) => (
            <li key={item.title} className="border-b border-r border-white/15">
              <Reveal delay={(i % 3) * 100} className="flex h-full flex-col gap-6 p-6 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center bg-primary text-primary-foreground">
                    <Check className="size-4" aria-hidden />
                  </span>
                  <span className="text-xs tracking-[0.25em] text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="font-display text-3xl uppercase leading-none md:text-4xl">{item.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
