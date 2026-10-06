import { ShieldCheck } from 'lucide-react'
import { Reveal, RevealLines } from '@/components/reveal'

export function SafetySection() {
  return (
    <section id="safety" className="scroll-mt-16 bg-card" aria-labelledby="safety-heading">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-primary">08 — Safety</Reveal>
            <RevealLines
              id="safety-heading"
              lines={['Supervised.', 'Supported.']}
              className="font-display text-6xl uppercase leading-[0.88] sm:text-8xl lg:text-9xl"
            />
          </div>
          <Reveal delay={150} className="flex flex-col justify-end gap-8 lg:col-span-5">
            <ShieldCheck className="size-8 text-primary" aria-hidden />
            <p className="text-pretty text-lg leading-relaxed text-white/80">
              The Survival experience is supervised and organised with safety and support procedures. Instructors and
              the event team are present throughout.
            </p>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Full safety information will be shared with participants before the event.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
