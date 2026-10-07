import { principles } from '@/lib/site-data'

/** Faixa decorativa com os quatro princípios da marca, em movimento lento e contínuo. */
export function Marquee() {
  const row = (
    <ul className="flex shrink-0 items-center">
      {principles.map((p) => (
        <li key={p.title} className="flex items-center">
          <span className="text-outline px-8 font-display text-6xl uppercase leading-none md:px-12 md:text-8xl">{p.title}</span>
          <svg aria-hidden viewBox="0 0 64 64" className="size-6 shrink-0 text-primary md:size-8" fill="currentColor">
            <path d="M16 14h11l5 8.5L37 14h11L37.5 32 48 50H37l-5-8.5L27 50H16l10.5-18L16 14Z" />
          </svg>
        </li>
      ))}
    </ul>
  )

  return (
    <div aria-hidden className="marquee overflow-hidden border-y border-white/10 bg-background py-8 md:py-12">
      <div className="marquee-track flex w-max">
        {row}
        {row}
      </div>
    </div>
  )
}
