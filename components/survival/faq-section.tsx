'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal, RevealLines } from '@/components/reveal'
import { survivalFaq } from '@/lib/survival-data'
import { cn } from '@/lib/utils'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-16" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-primary">09 — FAQ</Reveal>
            <RevealLines
              id="faq-heading"
              lines={['Questions.']}
              className="font-display text-6xl uppercase leading-[0.88] sm:text-8xl"
            />
          </div>
          <Reveal delay={150} className="lg:col-span-7">
            <ul className="border-t border-white/15">
              {survivalFaq.map((item, i) => {
                const open = openIndex === i
                return (
                  <li key={item.q} className="border-b border-white/15">
                    <h3>
                      <button
                        type="button"
                        id={`faq-trigger-${i}`}
                        aria-expanded={open}
                        aria-controls={`faq-panel-${i}`}
                        onClick={() => setOpenIndex(open ? null : i)}
                        className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-primary md:py-7"
                      >
                        <span className="text-sm font-medium uppercase tracking-[0.15em] md:text-base">{item.q}</span>
                        <Plus
                          className={cn('size-5 shrink-0 text-primary transition-transform duration-500', open && 'rotate-45')}
                          aria-hidden
                        />
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      className={cn(
                        'grid transition-[grid-template-rows] duration-500 ease-out',
                        open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-xl pb-7 text-pretty leading-relaxed text-muted-foreground">{item.a}</p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
