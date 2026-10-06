import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { nextEvent } from '@/lib/site-data'
import { Countdown } from './countdown'
import { Parallax } from './parallax'
import { Reveal, RevealLines } from './reveal'

export function NextEvent() {
  return (
    <section
      id="next-event"
      className="grain relative isolate scroll-mt-16 overflow-hidden"
      aria-labelledby="next-event-heading"
    >
      <Parallax speed={0.15} className="absolute inset-0 -z-20 scale-125">
        <Image
          src="/images/next-event.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </Parallax>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/60 to-background" />

      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <Reveal className="mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Registration opening soon
        </Reveal>
        <RevealLines
          id="next-event-heading"
          lines={['The Next', 'Challenge']}
          className="font-display text-6xl uppercase leading-[0.88] sm:text-8xl lg:text-[10rem]"
        />

        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <dl className="border-t border-white/15">
              {nextEvent.details.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between gap-6 border-b border-white/15 py-5">
                  <dt className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">{item.label}</dt>
                  <dd className="font-display text-2xl uppercase md:text-3xl">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={150} className="flex flex-col justify-between gap-12 lg:col-span-6 lg:col-start-7">
            <div>
              <p className="mb-8 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">Starts in</p>
              <Countdown target={nextEvent.countdownTarget} />
            </div>
            <a
              href={nextEvent.ctaHref}
              className="group inline-flex items-center justify-between gap-6 bg-white px-7 py-6 text-sm font-semibold uppercase tracking-[0.22em] text-background transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {nextEvent.ctaLabel}
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
