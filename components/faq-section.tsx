import { homeFaq } from '@/lib/faq-data'
import { ButtonLink } from './button-link'
import { FaqList } from './faq-list'
import { Reveal, RevealLines } from './reveal'

/** Resumo de perguntas frequentes na homepage; a lista completa está em /faq. */
export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-16 border-t border-white/10 bg-background" aria-labelledby="faq-heading">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-24 md:px-10 md:py-40 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-primary">Perguntas frequentes</Reveal>
          <RevealLines
            id="faq-heading"
            lines={['Tens', 'dúvidas?']}
            className="font-display text-6xl uppercase leading-[0.88] sm:text-8xl lg:text-9xl"
          />
          <Reveal delay={250} className="mt-10">
            <ButtonLink href="/faq" variant="outline">
              Ver todas as perguntas
            </ButtonLink>
          </Reveal>
        </div>
        <Reveal delay={150} className="lg:col-span-6 lg:col-start-7 lg:self-end">
          <FaqList items={homeFaq} />
        </Reveal>
      </div>
    </section>
  )
}
