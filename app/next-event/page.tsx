import { ButtonLink } from "@/components/button-link"
import { NextEventPanel } from "@/components/next-event"
import { PageHero } from "@/components/page-hero"
import { ComingSoonPanel, RuleList } from "@/components/challenge-blocks"
import { Reveal } from "@/components/reveal"
import { Section, SectionHeading } from "@/components/section"
import { pageMetadata } from "@/lib/seo"
import { getChallenge, nextEvent } from "@/lib/site-data"

export const metadata = pageMetadata({
  title: "Próximo evento",
  description:
    "O próximo desafio AstraX está em preparação. Data, local, preço e vagas serão anunciados em breve.",
  path: "/next-event",
})

export default function NextEventPage() {
  const challenge = nextEvent.challengeId ? getChallenge(nextEvent.challengeId) : undefined

  return (
    <>
      <PageHero
        eyebrow="Em breve"
        lines={["O próximo", "desafio"]}
        description="A data, o local e as vagas serão anunciados em breve. Todas as informações do evento ficam reunidas nesta página."
      />

      <Section border={false} labelledBy="detalhes">
        <SectionHeading eyebrow="Detalhes" lines={["O evento"]} id="detalhes" size="xl" className="mb-12 md:mb-16" />
        <NextEventPanel headingId="detalhes" />
      </Section>

      <Section tone="card" labelledBy="descricao">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Sobre o evento" lines={["O desafio"]} id="descricao" />
          </div>
          <Reveal className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:col-span-7">
            {nextEvent.description ?? "A descrição do evento será publicada quando o próximo desafio for anunciado."}
          </Reveal>
        </div>
      </Section>

      <Section labelledBy="regras-evento">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Regras" lines={["As regras"]} id="regras-evento" />
          </div>
          <div className="lg:col-span-7">
            {nextEvent.rules.length > 0 ? (
              <RuleList items={nextEvent.rules} />
            ) : (
              <ComingSoonPanel
                label="Regras do evento"
                title="A definir"
                items={["Serão publicadas com o anúncio do evento"]}
                className="min-h-[240px]"
              />
            )}
          </div>
        </div>
      </Section>

      <Section tone="accent" border={false} labelledBy="inscricao-evento">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Inscrição" lines={["Prepara-te."]} id="inscricao-evento" size="xl" tone="accent" />
          <Reveal delay={200} className="flex flex-col gap-3 sm:flex-row">
            {challenge ? (
              <ButtonLink href={challenge.registration.href} variant="dark" size="lg">
                {challenge.ctaLabel}
              </ButtonLink>
            ) : (
              <ButtonLink href="/challenges" variant="dark" size="lg">
                Explorar desafios
              </ButtonLink>
            )}
            <ButtonLink href="/faq" variant="outline-dark" size="lg">
              Perguntas frequentes
            </ButtonLink>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
