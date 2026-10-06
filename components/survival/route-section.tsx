import type { ReactNode } from 'react'
import Image from 'next/image'
import { Download, MapPin } from 'lucide-react'
import { Reveal, RevealLines } from '@/components/reveal'
import { survivalRoute, type RouteData } from '@/lib/survival-data'

type RoutePanelProps = RouteData & {
  /** Drop an interactive map component here once available. */
  map?: ReactNode
}

function RoutePlaceholder() {
  return (
    <div className="relative flex aspect-[16/10] flex-col items-center justify-center overflow-hidden border border-white/15 bg-background p-6 text-center md:aspect-[21/9]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_85%)]" />
      <MapPin className="relative size-6 text-primary" aria-hidden />
      <p className="relative mt-5 font-display text-4xl uppercase leading-none sm:text-6xl lg:text-7xl">
        Official route
        <br />
        coming soon
      </p>
      <p className="relative mt-5 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
        Map · Checkpoints · Distance · Elevation
      </p>
    </div>
  )
}

/** Reusable route panel. Pass any combination of props to replace the placeholder. */
export function RoutePanel({ image, map, gpxHref, distance, elevation, checkpoints, stages }: RoutePanelProps) {
  const metrics = [
    { label: 'Distance', value: distance },
    { label: 'Elevation', value: elevation },
    { label: 'Checkpoints', value: checkpoints?.length ? String(checkpoints.length) : undefined },
    { label: 'Stages', value: stages?.length ? String(stages.length) : undefined },
  ]

  return (
    <div>
      {map ? (
        <div className="aspect-[16/10] overflow-hidden border border-white/15 md:aspect-[21/9]">{map}</div>
      ) : image ? (
        <div className="relative aspect-[16/10] overflow-hidden border border-white/15 md:aspect-[21/9]">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1600px) 1500px, 100vw" className="object-cover" />
        </div>
      ) : (
        <RoutePlaceholder />
      )}

      <dl className="mt-px grid grid-cols-2 border-x border-b border-white/15 md:grid-cols-4">
        {metrics.map((m, i) => (
          <div key={m.label} className={`flex flex-col gap-2 p-5 md:p-6 ${i > 0 ? 'md:border-l md:border-white/15' : ''} ${i % 2 === 1 ? 'border-l border-white/15 md:border-l' : ''}`}>
            <dt className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground md:text-xs">{m.label}</dt>
            <dd className="font-display text-3xl uppercase leading-none md:text-4xl">
              {m.value ?? <span className="text-white/25">TBA</span>}
            </dd>
          </div>
        ))}
      </dl>

      {(stages?.length || checkpoints?.length || gpxHref) && (
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {stages?.length ? (
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary">Stages</p>
              <ol className="border-t border-white/15">
                {stages.map((s, i) => (
                  <li key={s.label} className="flex items-baseline justify-between gap-4 border-b border-white/15 py-4">
                    <span className="text-sm font-medium uppercase tracking-[0.18em]">{s.label}</span>
                    <span className="text-xs text-muted-foreground">{s.detail ?? `0${i + 1}`}</span>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
          {checkpoints?.length ? (
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary">Checkpoints</p>
              <ol className="border-t border-white/15">
                {checkpoints.map((c, i) => (
                  <li key={c.name} className="flex items-baseline justify-between gap-4 border-b border-white/15 py-4">
                    <span className="text-sm font-medium uppercase tracking-[0.18em]">{c.name}</span>
                    <span className="text-xs text-muted-foreground">{c.detail ?? `CP ${i + 1}`}</span>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
          {gpxHref ? (
            <a
              href={gpxHref}
              download
              className="inline-flex items-center justify-between gap-6 self-start border border-white/30 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:border-white hover:bg-white/5"
            >
              Download GPX
              <Download className="size-4" aria-hidden />
            </a>
          ) : null}
        </div>
      )}
    </div>
  )
}

export function RouteSection() {
  return (
    <section id="route" className="scroll-mt-16" aria-labelledby="route-heading">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-primary">03 — The Route</Reveal>
            <RevealLines
              id="route-heading"
              lines={['The', 'route.']}
              className="font-display text-7xl uppercase leading-[0.88] sm:text-8xl lg:text-9xl"
            />
          </div>
          <Reveal delay={200} className="max-w-xs text-pretty leading-relaxed text-muted-foreground">
            Details will be published here once the official route is confirmed.
          </Reveal>
        </div>
        <Reveal delay={150} className="mt-14 md:mt-20">
          <RoutePanel {...survivalRoute} />
        </Reveal>
      </div>
    </section>
  )
}
