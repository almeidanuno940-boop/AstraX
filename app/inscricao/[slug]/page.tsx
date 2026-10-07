import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ButtonLink } from "@/components/button-link"
import { PageHero } from "@/components/page-hero"
import { RegistrationForm } from "@/components/registration-form"
import { Container } from "@/components/section"
import { Stats } from "@/components/stats"
import { formatSpots, formEnabledStatuses, registrationStatusLabel, registrationSteps } from "@/lib/registration"
import { pageMetadata } from "@/lib/seo"
import { challenges, getChallenge } from "@/lib/site-data"
import { cn } from "@/lib/utils"

type Props = { params: Promise<{ slug: string }> }

/** Apenas os quatro desafios existentes geram página; qualquer outro slug devolve 404. */
export const dynamicParams = false

export function generateStaticParams() {
  return challenges.map((challenge) => ({ slug: challenge.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const challenge = getChallenge(slug)
  if (!challenge) return {}

  return pageMetadata({
    title: `Inscrição — ${challenge.title}`,
    description: `Inscreve-te no ${challenge.title} da AstraX. ${challenge.subtitle}. Escalões de preço, vagas e formulário de inscrição.`,
    path: challenge.registration.href,
    image: { url: challenge.image, alt: challenge.imageAlt },
  })
}

export default async function RegistrationPage({ params }: Props) {
  const { slug } = await params
  const challenge = getChallenge(slug)
  if (!challenge) notFound()

  const { registration } = challenge
  const formEnabled = formEnabledStatuses.includes(registration.status)

  return (
    <>
      <PageHero
        eyebrow={`Inscrição — Desafio ${challenge.number}`}
        lines={challenge.titleLines}
        description={challenge.subtitle}
      >
        <p className="inline-flex items-center gap-3 border border-primary/60 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
          <span className="relative flex size-2" aria-hidden>
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          {registrationStatusLabel[registration.status]}
        </p>
      </PageHero>

      <section className="bg-background" aria-label="Resumo e formulário de inscrição">
        <Container className="grid gap-14 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
          {/* RESUMO */}
          <aside className="lg:col-span-5" aria-label="Resumo do desafio">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Resumo</p>
              <p className="mt-5 text-pretty leading-relaxed text-white/75">{challenge.description}</p>

              <div className="mt-10">
                <Stats stats={challenge.stats} />
              </div>

              <p className="mt-8 border-y border-white/15 py-4 text-sm font-semibold uppercase tracking-[0.22em]">
                {formatSpots(registration.spots)}
              </p>

              <h2 className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Preço da inscrição</h2>
              <dl className="mt-4 border-t border-white/15">
                {challenge.pricing.map((tier) => (
                  <div
                    key={tier.label}
                    className={cn(
                      "flex items-baseline justify-between gap-4 border-b border-white/15 py-4",
                      tier.featured && "bg-primary px-4 text-primary-foreground",
                    )}
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em]">{tier.label}</dt>
                    <dd className="font-display text-3xl leading-none">{tier.price}</dd>
                  </div>
                ))}
              </dl>

              <h2 className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Como funciona</h2>
              <ol className="mt-4 border-t border-white/15">
                {registrationSteps.map((step, i) => (
                  <li key={step.title} className="flex gap-4 border-b border-white/15 py-4">
                    <span className="text-xs font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide">
                        {step.title}
                        {!step.available && <span className="ml-2 text-xs font-normal text-muted-foreground">Em breve</span>}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <ButtonLink href={challenge.href} variant="outline" className="mt-10">
                Ver página do desafio
              </ButtonLink>
            </div>
          </aside>

          {/* FORMULÁRIO */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl uppercase leading-[0.95] sm:text-5xl">Os teus dados</h2>
            <p className="mb-10 mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Preenche o formulário para validar a tua inscrição. O pagamento e a confirmação por email ainda não
              estão disponíveis.
            </p>

            {formEnabled ? (
              <RegistrationForm
                challengeId={challenge.id}
                challengeTitle={challenge.title}
                challengeHref={challenge.href}
                extraFields={registration.extraFields}
              />
            ) : (
              <div className="border border-white/15 bg-card p-8">
                <p className="font-display text-3xl uppercase">{registrationStatusLabel[registration.status]}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  O formulário de inscrição ficará disponível nesta página quando as inscrições abrirem.
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}
