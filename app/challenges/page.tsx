import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ButtonLink } from "@/components/button-link"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { Container, Section, SectionHeading } from "@/components/section"
import { Stats } from "@/components/stats"
import { formatSpots } from "@/lib/registration"
import { challenges, fromPrice } from "@/lib/site-data"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Desafios",
  description:
    "Backyard, Survival, Desafio Urbano e Last One Out. Quatro formas diferentes de te colocares à prova com a AstraX.",
  path: "/challenges",
})

export default function ChallengesPage() {
  return (
    <>
      <PageHero
        eyebrow="Os desafios"
        lines={["Escolhe o teu", "desafio."]}
        description="Quatro formas diferentes de te colocares à prova. Resistência, sobrevivência, cidade e eliminação — cada uma com as suas regras e o seu ponto de rutura."
        image={{ src: "/images/gallery-3.png", alt: "Corredores a atravessar um planalto de montanha com nevoeiro, ao amanhecer", position: "50% 40%" }}
        meta="04 desafios"
      />

      <section aria-label="Lista de desafios" className="bg-background">
        <Container className="py-16 md:py-24">
          <ul className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {challenges.map((challenge, i) => (
              <Reveal as="li" key={challenge.id} delay={(i % 2) * 120}>
                <Link
                  href={challenge.href}
                  aria-labelledby={`card-${challenge.id}`}
                  className="group flex h-full flex-col border border-white/10 bg-card transition-colors hover:border-white/30"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={challenge.image}
                      alt={challenge.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 48vw, 100vw"
                      className="object-cover grayscale-[35%] transition-[filter,transform] duration-[1.6s] group-hover:scale-[1.04] group-hover:grayscale-0"
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <span
                      aria-hidden
                      className="text-outline absolute bottom-2 left-5 font-display text-[26vw] leading-[0.8] sm:text-[14vw] lg:text-[9vw] 2xl:text-[170px]"
                    >
                      {challenge.number}
                    </span>
                    <span className="absolute right-4 top-4 bg-primary px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground">
                      {fromPrice(challenge)}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-6 p-6 md:p-10">
                    <div>
                      <p className="eyebrow">{challenge.kind} — {challenge.subtitle}</p>
                      <h2
                        id={`card-${challenge.id}`}
                        className="mt-5 font-display text-6xl uppercase leading-[0.9] md:text-7xl"
                      >
                        {challenge.title}
                      </h2>
                      <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                        {challenge.description}
                      </p>
                    </div>

                    <div className="mt-auto flex flex-col gap-8">
                      <Stats stats={challenge.stats} />
                      <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                        <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                          {formatSpots(challenge.registration.spots)}
                        </span>
                        <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em]">
                          Ver desafio
                          <span className="inline-flex size-10 items-center justify-center border border-white/25 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                            <ArrowUpRight className="size-4" aria-hidden />
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <Section tone="card" labelledBy="challenges-cta">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Próximo passo" lines={["Qual é", "o teu?"]} id="challenges-cta" size="xl" />
          <Reveal delay={200} className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/next-event" variant="primary">
              Próximo evento
            </ButtonLink>
            <ButtonLink href="/faq" variant="outline">
              Perguntas frequentes
            </ButtonLink>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
