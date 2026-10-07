import { ChallengeFaq, ComingSoonPanel, FinalCta, FinisherHighlight, LapTimeline, NumberedGrid, PricingSection, RuleList, StepGrid } from "@/components/challenge-blocks"
import { HeroArt } from "@/components/hero-art"
import { ChallengeHero } from "@/components/challenge-hero"
import { Reveal } from "@/components/reveal"
import { Section, SectionHeading, SplitSection } from "@/components/section"
import { requireChallenge } from "@/lib/site-data"
import { pageMetadata } from "@/lib/seo"

const challenge = requireChallenge("backyard")

export const metadata = pageMetadata({
  title: "Backyard — Último corredor em prova",
  description:
    "Completa uma volta de 6,706 km a cada hora até restar apenas um participante. Backyard, o desafio de resistência da AstraX.",
  path: challenge.href,
  image: { url: challenge.image, alt: challenge.imageAlt },
})

const howItWorks = [
  { number: "01", title: "Começa", description: "Todos os participantes alinham-se antes do início de cada hora." },
  { number: "02", title: "Corre", description: "Tens 60 minutos para completar os 6,706 km do percurso." },
  { number: "03", title: "Recupera", description: "Depois de completares a volta, tens o tempo restante para recuperar." },
  { number: "04", title: "Repete", description: "Quando a hora seguinte começa, estás novamente na linha de partida." },
]

const rules = [
  "Cada volta tem 6,706 km.",
  "Cada volta deve ser concluída dentro de 60 minutos.",
  "É necessário estar na linha de partida no início da hora seguinte.",
  "Quem não completar a volta dentro do tempo é eliminado.",
  "A prova continua até restar apenas um participante.",
]

const requirements = [
  "Completar 6,706 km dentro de 60 minutos, a cada hora",
  "Estar na linha de partida no início de cada hora",
  "Idade mínima: a definir",
  "Condição física e preparação: a definir",
  "Equipamento obrigatório: a definir",
  "Aceitação do regulamento: a definir",
]

const included = [
  "Acesso ao evento",
  "Percurso marcado",
  "Cronometragem",
  "Pontos de apoio definidos pela organização",
  "Classificação final",
  challenge.finisher[0],
]

export default function BackyardPage() {
  return (
    <>
      <ChallengeHero challenge={challenge} />

      <SplitSection id="desafio" eyebrow="O desafio" lines={["Corre.", "Descansa.", "Repete."]} border={false}>
        <div className="max-w-2xl space-y-7">
          <Reveal className="text-balance text-xl leading-relaxed text-white/85 md:text-3xl">
            O Backyard é uma prova de resistência em que o objetivo não é apenas correr depressa, mas continuar a
            aparecer, hora após hora.
          </Reveal>
          <Reveal delay={100} className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            A cada hora começa uma nova volta de 6,706 km. Completa-a dentro do tempo, recupera e prepara-te para a
            seguinte.
          </Reveal>
          <Reveal delay={200} className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Quem não conseguir concluir a volta dentro do tempo é eliminado. A prova continua até restar apenas um
            participante.
          </Reveal>
          <Reveal delay={300} className="pt-6">
            <LapTimeline />
          </Reveal>
        </div>
      </SplitSection>

      <Section tone="card" labelledBy="como-funciona">
        <SectionHeading eyebrow="Como funciona" lines={["Uma regra.", "Repetidamente."]} id="como-funciona" size="xl" className="mb-12 md:mb-16" />
        <StepGrid steps={howItWorks} label="Etapa" />
      </Section>

      <SplitSection
        id="percurso"
        eyebrow="O percurso"
        lines={["6,706 km", "a cada", "hora."]}
        lead="O percurso oficial, a altimetria e a informação detalhada serão divulgados pela organização."
      >
        <ComingSoonPanel label="Percurso oficial" items={["Mapa", "Altimetria", "GPX"]} className="min-h-[460px]">
          <HeroArt variant="track" className="inset-0 size-full opacity-80" />
        </ComingSoonPanel>
      </SplitSection>

      <SplitSection id="regras" eyebrow="Regras" lines={["Não há", "desculpas."]} tone="card">
        <RuleList items={rules} />
      </SplitSection>

      <SplitSection
        id="requisitos"
        eyebrow="Requisitos"
        lines={["Estás", "pronto?"]}
        lead="Os requisitos definitivos serão publicados antes da abertura das inscrições."
      >
        <NumberedGrid items={requirements} />
      </SplitSection>

      <Section tone="card" labelledBy="incluido">
        <SectionHeading eyebrow="O que recebes" lines={["O que está", "incluído."]} id="incluido" size="xl" className="mb-12 md:mb-16" />
        <NumberedGrid items={included} columns={3} />
      </Section>

      <FinisherHighlight
        challenge={challenge}
        lines={["Continua.", "Aguenta.", "Termina."]}
        intro="Uma recordação oficial para quem conseguiu chegar ao fim do desafio."
      />

      <SplitSection
        id="resultados"
        eyebrow="Resultados"
        lines={["Classificação", "final"]}
        lead="Os resultados e a classificação de cada edição serão publicados aqui depois da prova."
        tone="card"
      >
        <ComingSoonPanel label="Resultados" items={["Classificação", "Voltas completadas", "Vencedor"]} className="min-h-[320px]" />
      </SplitSection>

      <ChallengeFaq category="backyard" />

      <PricingSection challenge={challenge} lines={["Entra em", "prova."]} />

      <FinalCta
        eyebrow="AstraX — Backyard"
        lines={["Quantas", "horas", "aguentas?"]}
        challenge={challenge}
        meta={{ label: "Preço normal", value: challenge.pricing[1].price }}
      />
    </>
  )
}
