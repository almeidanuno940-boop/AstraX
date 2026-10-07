import { ChallengeFaq, ComingSoonPanel, FinalCta, NumberedGrid, PricingSection, RuleList, StepGrid } from "@/components/challenge-blocks"
import { ChallengeHero } from "@/components/challenge-hero"
import { Reveal } from "@/components/reveal"
import { Section, SectionHeading, SplitSection } from "@/components/section"
import { requireChallenge } from "@/lib/site-data"
import { pageMetadata } from "@/lib/seo"

const challenge = requireChallenge("last-one-out")

export const metadata = pageMetadata({
  title: "Last One Out — Fica. Resiste. Vence.",
  description:
    "100 participantes entram num círculo. Quem sair fica eliminado. A última pessoa dentro do círculo ganha 300 €. Um desafio AstraX.",
  path: challenge.href,
  image: { url: challenge.image, alt: challenge.imageAlt },
})

const rules = [
  { number: "01", title: "Entra", description: "Os participantes entram no círculo antes do início do desafio." },
  {
    number: "02",
    title: "Fica",
    description: "Enquanto permaneceres dentro do círculo e cumprires as regras, continuas em prova.",
  },
  { number: "03", title: "Resiste", description: "Completa os desafios que forem apresentados ao longo do evento." },
  {
    number: "04",
    title: "Não saias",
    description: "Sair do círculo significa abandonar a competição e perder a oportunidade de ganhar o prémio.",
  },
]

const experience = [
  "100 participantes",
  "1 círculo",
  "Desafios ao longo do evento",
  "Eliminação progressiva",
  "Prémio monetário",
  "1 vencedor",
]

const elimination = [
  "Quem sair do círculo fica eliminado.",
  "A competição continua até restar apenas uma pessoa.",
  "A última pessoa dentro do círculo ganha 300 €.",
]

export default function LastOneOutPage() {
  return (
    <>
      <ChallengeHero challenge={challenge} />

      <SplitSection id="desafio" eyebrow="O desafio" lines={["Fica", "dentro.", "Não desistas."]} border={false}>
        <div className="max-w-2xl space-y-7">
          <Reveal className="text-balance text-xl leading-relaxed text-white/85 md:text-3xl">
            Os participantes entram num círculo. Quem sair fica eliminado. A competição continua até restar uma pessoa.
          </Reveal>
          <Reveal delay={100} className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            A última pessoa dentro do círculo ganha 300 €.
          </Reveal>
          <Reveal delay={200} className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            A verdadeira dificuldade começa quando o tempo passa e a vontade de sair aumenta.
          </Reveal>
        </div>
      </SplitSection>

      <Section tone="card" labelledBy="regras">
        <SectionHeading eyebrow="As regras" lines={["Uma regra", "simples."]} id="regras" size="xl" className="mb-12 md:mb-16" />
        <StepGrid steps={rules} label="Regra" />
        <p className="mt-8 text-sm text-muted-foreground">
          O regulamento completo será apresentado antes do início do evento.
        </p>
      </Section>

      {/* O PRÉMIO */}
      <Section labelledBy="premio">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="O prémio" lines={["300 €"]} id="premio" size="xl" />
            <Reveal delay={200} className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              A última pessoa dentro do círculo ganha 300 €.
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-7">
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden border border-primary/30 bg-card">
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 size-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 md:size-[340px]"
              />
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 size-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 md:size-[240px]"
              />
              <div className="relative z-10 text-center">
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Prémio final</p>
                <p className="mt-4 font-display text-7xl leading-none md:text-9xl">300 €</p>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-primary">1 vencedor</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="card" labelledBy="experiencia">
        <SectionHeading eyebrow="A experiência" lines={["Não é", "para todos."]} id="experiencia" size="xl" className="mb-12 md:mb-16" />
        <NumberedGrid items={experience} columns={3} />
      </Section>

      <SplitSection
        id="desafios"
        eyebrow="Os desafios"
        lines={["Dentro", "do círculo."]}
        lead="Ao longo do evento haverá desafios a completar dentro do círculo."
      >
        <ComingSoonPanel
          label="Os desafios"
          title="A anunciar"
          items={["Os desafios de cada edição serão apresentados pela organização"]}
          className="min-h-[320px]"
        />
      </SplitSection>

      <SplitSection id="eliminacao" eyebrow="Eliminação" lines={["100", "→ 1"]} tone="card">
        <div className="max-w-2xl">
          <RuleList items={elimination} />
          <p className="mt-8 border-l-2 border-primary pl-6 text-sm uppercase tracking-[0.16em] text-white/80">
            As regras definitivas serão apresentadas antes do início do evento.
          </p>
        </div>
      </SplitSection>

      <ChallengeFaq category="last-one-out" />

      <PricingSection challenge={challenge} lines={["Entra.", "Fica.", "Vence."]} />

      <FinalCta
        eyebrow="AstraX — Last One Out"
        lines={["Quem vai", "ser o", "último?"]}
        challenge={challenge}
        meta={{ label: "Prémio", value: "300 €" }}
      />
    </>
  )
}
