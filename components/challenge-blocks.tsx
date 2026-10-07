import { formatSpots } from '@/lib/registration'
import { getFaqCategory, type FaqCategoryId } from '@/lib/faq-data'
import type { Challenge } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { ButtonLink } from './button-link'
import { FaqList } from './faq-list'
import { Reveal, RevealLines } from './reveal'
import { Container, Section, SectionHeading } from './section'

/** Cartões numerados em grelha (dias, etapas, missões, regras). */
export function StepGrid({
  steps,
  label,
  className,
}: {
  steps: { number: string; title: string; description: string }[]
  label: string
  className?: string
}) {
  return (
    <ul className={cn('grid gap-px bg-white/10 md:grid-cols-2', className)}>
      {steps.map((step, i) => (
        <Reveal as="li" key={step.number} delay={(i % 2) * 100} className="bg-background p-7 md:p-10">
          <div className="flex items-start justify-between">
            <span className="font-display text-6xl leading-none text-white/15">{step.number}</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary">{label}</span>
          </div>
          <h3 className="mt-10 font-display text-3xl uppercase md:text-5xl">{step.title}</h3>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground md:text-lg">{step.description}</p>
        </Reveal>
      ))}
    </ul>
  )
}

/** Lista numerada em grelha (incluído, requisitos, equipamento…). */
export function NumberedGrid({
  items,
  columns = 2,
  className,
}: {
  items: string[]
  columns?: 2 | 3
  className?: string
}) {
  return (
    <ul
      className={cn(
        'grid gap-px bg-white/10',
        columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2',
        className,
      )}
    >
      {items.map((item, i) => (
        <Reveal as="li" key={item} delay={(i % 3) * 80} className="flex items-start gap-5 bg-background p-6 md:p-8">
          <span className="pt-0.5 text-xs font-bold text-primary">{String(i + 1).padStart(2, '0')}</span>
          <span className="text-sm font-semibold uppercase leading-relaxed tracking-wide text-white/90 md:text-base">
            {item}
          </span>
        </Reveal>
      ))}
    </ul>
  )
}

/** Lista de regras em linhas separadas. */
export function RuleList({ items }: { items: string[] }) {
  return (
    <ol className="border-t border-white/10">
      {items.map((rule, i) => (
        <li key={rule} className="flex gap-6 border-b border-white/10 py-6 md:py-7">
          <span className="pt-0.5 text-xs font-bold text-primary">{String(i + 1).padStart(2, '0')}</span>
          <p className="max-w-3xl leading-relaxed text-white/80 md:text-lg">{rule}</p>
        </li>
      ))}
    </ol>
  )
}

/** Painel para conteúdo ainda por publicar (mapa, rota, checkpoints, resultados, imagens…). */
export function ComingSoonPanel({
  label,
  title = 'Em breve',
  items,
  className,
  children,
}: {
  label: string
  title?: string
  items?: string[]
  className?: string
  /** Elementos decorativos (grelhas, pontos…) por trás do texto. */
  children?: React.ReactNode
}) {
  return (
    <div
      role="group"
      aria-label={`${label} — ${title}`}
      className={cn(
        'relative flex min-h-[320px] items-center justify-center overflow-hidden border border-white/10 bg-card',
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_oklch,var(--primary)_10%,transparent),transparent_50%)]"
      />
      <div aria-hidden className="absolute inset-0">
        {children}
      </div>
      <div className="relative z-10 px-6 py-10 text-center">
        <div className="mx-auto mb-6 h-px w-16 bg-primary" aria-hidden />
        <p className="text-xs uppercase tracking-[0.35em] text-white/60">{label}</p>
        <p className="mt-3 font-display text-3xl uppercase md:text-5xl">{title}</p>
        {items && items.length > 0 && (
          <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.2em] text-white/60">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

/** Escalões de preço (fonte única: `challenge.pricing`). */
export function PricingTiers({ challenge }: { challenge: Challenge }) {
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {challenge.pricing.map((tier, i) => (
        <Reveal
          as="li"
          key={tier.label}
          delay={i * 100}
          className={cn(
            'p-7 md:p-8',
            tier.featured
              ? 'bg-primary text-primary-foreground'
              : 'border border-white/15 bg-card',
          )}
        >
          <p
            className={cn(
              'text-xs font-semibold uppercase tracking-[0.25em]',
              tier.featured ? 'text-primary-foreground' : 'text-white/60',
            )}
          >
            {tier.label}
          </p>
          <p className="mt-6 font-display text-6xl leading-none md:text-7xl">{tier.price}</p>
          <p className={cn('mt-5 text-sm', tier.featured ? 'text-primary-foreground/80' : 'text-muted-foreground')}>
            {tier.note}
          </p>
        </Reveal>
      ))}
    </ul>
  )
}

/** Secção "Inscrição": preços, vagas e botão para a página de inscrição. */
export function PricingSection({ challenge, lines }: { challenge: Challenge; lines: string[] }) {
  const id = `${challenge.id}-inscricao`
  return (
    <Section tone="card" labelledBy={id}>
      <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="Inscrição" lines={lines} id={id} size="xl" />
        <Reveal delay={200} className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
          {formatSpots(challenge.registration.spots)}
        </Reveal>
      </div>
      <PricingTiers challenge={challenge} />
      <Reveal delay={150} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
        <ButtonLink href={challenge.registration.href} size="lg" className="w-full sm:w-auto">
          {challenge.ctaLabel}
        </ButtonLink>
        <p className="text-sm text-muted-foreground">O pagamento será ativado em breve.</p>
      </Reveal>
    </Section>
  )
}

/** Chamada final a toda a largura, a laranja. */
export function FinalCta({
  eyebrow,
  lines,
  challenge,
  meta,
}: {
  eyebrow: string
  lines: string[]
  challenge: Challenge
  meta: { label: string; value: string }
}) {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground" aria-labelledby="final-cta">
      <Container className="py-20 md:py-32">
        <Reveal className="mb-6 text-xs font-bold uppercase tracking-[0.35em]">{eyebrow}</Reveal>
        <RevealLines
          id="final-cta"
          lines={lines}
          className="max-w-6xl font-display text-[16vw] uppercase leading-[0.86] sm:text-[12vw] lg:text-[9.5vw] 2xl:text-[170px]"
        />
        <Reveal delay={300} className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <ButtonLink href={challenge.registration.href} variant="dark" size="lg" className="w-full sm:w-auto">
            {challenge.ctaLabel}
          </ButtonLink>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em]">{meta.label}</p>
            <p className="font-display text-4xl leading-none">{meta.value}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

/** Secção de perguntas frequentes de um desafio (conteúdo em `lib/faq-data.ts`). */
export function ChallengeFaq({ category }: { category: FaqCategoryId }) {
  const { items } = getFaqCategory(category)
  const id = `${category}-faq`
  return (
    <Section id="faq" labelledBy={id}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="Perguntas frequentes" lines={['Tens', 'dúvidas?']} id={id} />
          <Reveal delay={200} className="mt-8">
            <ButtonLink href="/faq" variant="outline">
              Todas as perguntas
            </ButtonLink>
          </Reveal>
        </div>
        <Reveal delay={150} className="lg:col-span-7">
          <FaqList items={items} />
        </Reveal>
      </div>
    </Section>
  )
}

/** Destaque das recompensas de conclusão (apenas as confirmadas para o desafio). */
export function FinisherHighlight({
  challenge,
  lines,
  intro,
}: {
  challenge: Challenge
  lines: string[]
  intro: string
}) {
  if (challenge.finisher.length === 0) return null
  const id = `${challenge.id}-finisher`
  return (
    <Section tone="card" labelledBy={id}>
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading eyebrow="Finisher" lines={lines} id={id} size="xl" />
          <Reveal delay={200} className="mt-8 max-w-xl text-pretty leading-relaxed text-white/70 md:text-lg">
            {intro}
          </Reveal>
        </div>
        <ul className="grid gap-3 lg:col-span-6">
          {challenge.finisher.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 100} className="border border-white/15 bg-background p-6 md:p-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary">
                Finisher {String(i + 1).padStart(2, '0')}
              </p>
              <p className="mt-3 font-display text-2xl uppercase md:text-4xl">{item}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
