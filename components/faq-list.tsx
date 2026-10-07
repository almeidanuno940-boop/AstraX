import type { FaqItem } from '@/lib/faq-data'

/** Acordeão acessível sem JavaScript: usa <details>/<summary> nativos (teclado e leitores de ecrã incluídos). */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.question} className="group border border-white/10 bg-white/[0.02] open:border-white/25">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-5 md:p-7 [&::-webkit-details-marker]:hidden">
            <span className="text-sm font-semibold uppercase leading-snug tracking-wide md:text-base">
              {item.question}
            </span>
            <span aria-hidden className="text-2xl leading-none text-primary transition-transform group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="border-t border-white/10 px-5 pb-6 pt-5 text-sm leading-relaxed text-white/70 md:px-7 md:text-base">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  )
}
