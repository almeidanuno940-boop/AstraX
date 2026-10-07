import { ChallengeFaq, ComingSoonPanel, FinalCta, NumberedGrid, PricingSection, RuleList, StepGrid } from "@/components/challenge-blocks"
import { ChallengeHero } from "@/components/challenge-hero"
import { HeroArt } from "@/components/hero-art"
import { Reveal } from "@/components/reveal"
import { Section, SectionHeading, SplitSection } from "@/components/section"
import { requireChallenge } from "@/lib/site-data"
import { pageMetadata } from "@/lib/seo"

const challenge = requireChallenge("urban")

export const metadata = pageMetadata({
  title: "Desafio Urbano — A cidade é o teu campo de jogo",
  description:
    "Competição urbana por equipas: percorre a cidade, encontra checkpoints, resolve pistas, completa missões e acumula pontos. Um desafio AstraX.",
  path: challenge.href,
  image: { url: challenge.image, alt: challenge.imageAlt },
})

const howItWorks = [
  { number: "01", title: "Corre", description: "Chega ao checkpoint dentro do tempo e continua a missão." },
  { number: "02", title: "Pensa", description: "Resolve pistas e desafios que vão testar a tua capacidade de raciocínio." },
  { number: "03", title: "Encontra", description: "Descobre os locais certos através de pistas espalhadas pela cidade." },
  {
    number: "04",
    title: "Decide",
    description: "Escolhe o teu caminho. Nem sempre o percurso mais curto será a melhor opção.",
  },
]

const missionTypes = [
  "Missões físicas",
  "Missões mentais",
  "Pistas e enigmas",
  "Desafios em equipa",
  "Algumas missões com limite de tempo",
  "Número de missões: a definir",
]

const scoring = ["Missão concluída", "Checkpoint", "Bónus"]

const rules = [
  "As equipas devem permanecer dentro da área definida pela organização.",
  "Cada missão concluída atribui pontos à equipa.",
  "Algumas missões podem ter um limite de tempo.",
  "As instruções da organização devem ser respeitadas durante todo o evento.",
  "A classificação final é determinada pela pontuação definida para o evento.",
]

export default function UrbanPage() {
  return (
    <>
      <ChallengeHero challenge={challenge} />

      <SplitSection id="missao" eyebrow="A missão" lines={["A cidade.", "As pistas.", "A prova."]} border={false}>
        <div className="max-w-2xl space-y-7">
          <Reveal className="text-balance text-xl leading-relaxed text-white/85 md:text-3xl">
            Uma competição urbana por equipas em que os participantes percorrem a cidade, encontram checkpoints, resolvem
            pistas, completam missões e acumulam pontos.
          </Reveal>
          <Reveal delay={100} className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Não basta correr. Tens de pensar, decidir e adaptar-te.
          </Reveal>
        </div>
      </SplitSection>

      <SplitSection
        id="cidade"
        eyebrow="A cidade"
        lines={["Uma cidade.", "Mil", "possibilidades."]}
        lead="A cidade, a localização e o percurso oficial serão divulgados pela organização."
        tone="card"
      >
        <ComingSoonPanel label="Mapa oficial" items={["Cidade", "Checkpoints", "Missões"]} className="min-h-[480px] bg-background">
          <HeroArt variant="urban" className="inset-0 size-full opacity-90" />
        </ComingSoonPanel>
      </SplitSection>

      <Section labelledBy="como-funciona">
        <SectionHeading eyebrow="Como funciona" lines={["Corre. Pensa.", "Decide."]} id="como-funciona" size="xl" className="mb-12 md:mb-16" />
        <StepGrid steps={howItWorks} label="Etapa" />
      </Section>

      <SplitSection
        id="checkpoints"
        eyebrow="Checkpoints"
        lines={["Encontra", "cada ponto."]}
        lead="Os checkpoints estão espalhados pela cidade. A localização e o número serão revelados pela organização."
        tone="card"
      >
        <ComingSoonPanel
          label="Checkpoints"
          title="A definir"
          items={["Localização", "Número de checkpoints", "Pontos atribuídos"]}
          className="min-h-[320px] bg-background"
        />
      </SplitSection>

      <SplitSection
        id="missoes"
        eyebrow="Missões"
        lines={["Mais do que", "uma corrida."]}
        lead="As missões de cada edição serão apresentadas pela organização."
      >
        <NumberedGrid items={missionTypes} />
      </SplitSection>

      <SplitSection id="pontuacao" eyebrow="Pontuação" lines={["Cada decisão", "conta."]} tone="card">
        <div className="max-w-2xl">
          <ul className="border-t border-white/10">
            {scoring.map((item) => (
              <li key={item} className="flex items-center justify-between border-b border-white/10 py-6">
                <span className="text-sm uppercase tracking-wide text-white/70 md:text-base">{item}</span>
                <span className="font-display text-3xl text-primary">+ pts</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            Pontos por missão: a definir. O sistema de pontuação definitivo será apresentado antes de cada edição.
          </p>
        </div>
      </SplitSection>

      <SplitSection id="regras" eyebrow="Regras" lines={["Joga.", "Compete.", "Respeita."]}>
        <RuleList items={rules} />
      </SplitSection>

      <ChallengeFaq category="urban" />

      <PricingSection challenge={challenge} lines={["Entra em", "jogo."]} />

      <FinalCta
        eyebrow="AstraX — Desafio Urbano"
        lines={["A cidade", "espera", "por ti."]}
        challenge={challenge}
        meta={{ label: "Preço normal", value: challenge.pricing[1].price }}
      />
    </>
  )
}
