import { ChallengeFaq, ComingSoonPanel, EliminationDots, FinalCta, NumberedGrid, PricingSection, RuleList, StepGrid } from "@/components/challenge-blocks"
import { HeroArt } from "@/components/hero-art"
import { ChallengeHero } from "@/components/challenge-hero"
import { Reveal } from "@/components/reveal"
import { Container, Section, SectionHeading, SplitSection } from "@/components/section"
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
      <section className="relative isolate overflow-hidden border-t border-white/10" aria-labelledby="premio">
        <HeroArt variant="circle" className="left-1/2 top-1/2 -z-10 h-[150vmin] w-[150vmin] -translate-x-1/2 -translate-y-1/2 opacity-70" />
        <Container className="flex min-h-[90svh] flex-col items-center justify-center py-24 text-center md:py-32">
          <Reveal className="eyebrow mb-6">O prémio</Reveal>
          <Reveal as="h2" id="premio" delay={100} className="font-display text-[34vw] uppercase leading-[0.8] sm:text-[26vw] lg:text-[22vw]">
            <span className="sr-only">O prémio: </span>300 €
          </Reveal>
          <Reveal delay={250} className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 md:text-2xl">
            A última pessoa dentro do círculo ganha 300 €.
          </Reveal>
          <Reveal delay={350} className="tech mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/80">
            <span>100 participantes</span>
            <span className="text-primary">1 vencedor</span>
          </Reveal>
        </Container>
      </section>
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
          <Reveal className="mb-12">
            <EliminationDots />
          </Reveal>
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
