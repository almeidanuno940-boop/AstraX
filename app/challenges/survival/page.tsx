import Image from "next/image"
import { ChallengeFaq, ComingSoonPanel, FinalCta, GiantNumbers, NumberedGrid, ParticipantDots, PricingSection, StepGrid } from "@/components/challenge-blocks"
import { HeroArt } from "@/components/hero-art"
import { ChallengeHero } from "@/components/challenge-hero"
import { Reveal, RevealLines } from "@/components/reveal"
import { Container, Section, SectionHeading, SplitSection } from "@/components/section"
import { requireChallenge, survivalIncludes } from "@/lib/site-data"
import { pageMetadata } from "@/lib/seo"

const challenge = requireChallenge("survival")

export const metadata = pageMetadata({
  title: "Survival — 4 dias na natureza",
  description:
    "O evento premium da AstraX: quatro dias em ambiente natural, com aprendizagem e aplicação supervisionada de competências de sobrevivência, orientação e adaptação. Máximo de 12 participantes.",
  path: challenge.href,
  image: { url: challenge.hero.src, alt: challenge.hero.alt },
})

const days = [
  {
    number: "01",
    title: "Aprender",
    description: "Conhece o ambiente, aprende os fundamentos e prepara-te para os desafios dos dias seguintes.",
  },
  {
    number: "02",
    title: "Adaptar",
    description:
      "Aplica o que aprendeste através de desafios supervisionados que exigem capacidade de adaptação e decisão.",
  },
  {
    number: "03",
    title: "Resistir",
    description: "Orientação, resistência física, missões e tomada de decisões num ambiente exigente.",
  },
  {
    number: "04",
    title: "Concluir",
    description: "A missão final. Quatro dias completos. Um estatuto de Finisher conquistado.",
  },
]

const requirements = [
  "Boa condição física",
  "Capacidade de trabalhar em equipa",
  "Disponibilidade para 4 dias completos",
  "Espírito de adaptação e resiliência",
]

const equipment = [
  "Mochila",
  "Roupa adequada ao ambiente",
  "Calçado apropriado",
  "Lanterna",
  "Garrafa de água",
  "Equipamento pessoal indicado pela organização",
]

export default function SurvivalPage() {
  return (
    <>
      <ChallengeHero challenge={challenge} />

      <SplitSection id="missao" eyebrow="A missão" lines={["Quatro dias.", "Uma", "experiência."]} border={false}>
        <div className="max-w-2xl space-y-7">
          <Reveal className="text-balance text-xl leading-relaxed text-white/85 md:text-3xl">
            Uma experiência de quatro dias em ambiente natural, centrada na aprendizagem e aplicação supervisionada de
            competências de sobrevivência, orientação, adaptação, resistência, gestão de recursos e resolução de
            problemas.
          </Reveal>
          <Reveal delay={100} className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            O Survival é o evento premium da AstraX: limitado a 12 participantes, num ambiente pensado para te tirar da
            zona de conforto, sempre com acompanhamento e apoio de segurança.
          </Reveal>
        </div>
      </SplitSection>

      <section aria-label="O Survival em números" className="border-t border-white/10">
        <GiantNumbers
          items={[
            { value: "12", label: "Participantes máx." },
            { value: "299 €", label: "Preço normal" },
            { value: "4", label: "Dias" },
          ]}
        />
        <div className="mx-auto max-w-[1600px] px-5 py-10 md:px-10 md:py-14">
          <ParticipantDots total={12} label="12 vagas — evento premium AstraX" />
        </div>
      </section>

      <Section tone="card" labelledBy="dias">
        <SectionHeading eyebrow="A experiência" lines={["Os 4 dias"]} id="dias" size="xl" className="mb-12 md:mb-16" />
        <StepGrid steps={days} label="Dia" />
      </Section>

      <SplitSection
        id="rota"
        eyebrow="A rota"
        lines={["Rota oficial", "em breve"]}
        lead="A localização, a rota oficial, a distância, o desnível, as etapas e os checkpoints serão divulgados pela organização."
      >
        <ComingSoonPanel
          label="Rota oficial"
          title="Rota oficial em breve"
          items={["Mapa", "GPX", "Distância", "Desnível", "Checkpoints", "Etapas", "Fotografias"]}
          className="min-h-[460px]"
        >
          <HeroArt variant="topo" className="inset-0 size-full opacity-90" />
        </ComingSoonPanel>
      </SplitSection>

      <Section tone="card" labelledBy="incluido">
        <SectionHeading eyebrow="O que recebes" lines={["O que está", "incluído."]} id="incluido" size="xl" className="mb-12 md:mb-16" />
        <NumberedGrid items={survivalIncludes} />
      </Section>

      {/* FINISHER — destaque */}
      <section className="relative isolate overflow-hidden border-t border-white/10" aria-labelledby="finisher">
        <Image
          src="/images/medal.png"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-40"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/50" />
        <Container className="py-20 md:py-36">
          <Reveal className="mb-6 eyebrow">Finisher</Reveal>
          <RevealLines
            id="finisher"
            lines={["Conquista o teu", "estatuto de", "Finisher."]}
            className="max-w-5xl font-display text-[13vw] uppercase leading-[0.9] sm:text-8xl lg:text-9xl"
          />
          <Reveal delay={250} className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
            Quem completar os quatro dias recebe:
          </Reveal>
          <ul className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
            {challenge.finisher.map((item, i) => (
              <Reveal as="li" key={item} delay={300 + i * 100} className="border border-white/20 bg-background/70 p-6 backdrop-blur">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary">
                  Finisher {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-2xl uppercase leading-tight">{item}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <SplitSection
        id="requisitos"
        eyebrow="Requisitos"
        lines={["Estás", "preparado?"]}
        lead="Os requisitos definitivos serão publicados antes da abertura das inscrições."
      >
        <NumberedGrid items={requirements} />
      </SplitSection>

      <Section tone="card" labelledBy="equipamento">
        <SectionHeading eyebrow="Equipamento" lines={["O que", "levar"]} id="equipamento" size="xl" className="mb-12 md:mb-16" />
        <NumberedGrid items={equipment} columns={3} />
        <p className="mt-8 text-sm text-muted-foreground">
          A lista definitiva de equipamento será comunicada pela organização antes do evento.
        </p>
      </Section>

      <SplitSection id="seguranca" eyebrow="Segurança" lines={["Desafio", "com", "controlo."]}>
        <div className="max-w-2xl space-y-6">
          <Reveal className="text-lg leading-relaxed text-white/85 md:text-2xl">
            A experiência é organizada e acompanhada por uma equipa responsável pelo apoio aos participantes ao longo
            do evento.
          </Reveal>
          <Reveal delay={100} className="text-lg leading-relaxed text-muted-foreground">
            As informações definitivas sobre preparação, regras e procedimentos de segurança serão disponibilizadas
            antes do desafio.
          </Reveal>
        </div>
      </SplitSection>

      <ChallengeFaq category="survival" />

      <PricingSection challenge={challenge} lines={["Garante", "o teu lugar."]} />

      <FinalCta
        eyebrow="Apenas 12 vagas"
        lines={["Estás", "preparado?"]}
        challenge={challenge}
        meta={{ label: "Preço normal", value: challenge.pricing[1].price }}
      />
    </>
  )
}
