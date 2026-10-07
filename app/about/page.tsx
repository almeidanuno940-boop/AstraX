import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ButtonLink } from "@/components/button-link"
import { PageHero } from "@/components/page-hero"
import { Reveal, RevealLines } from "@/components/reveal"
import { Container, Section, SectionHeading } from "@/components/section"
import { brand } from "@/lib/site-config"
import { pageMetadata } from "@/lib/seo"
import { challenges, principles } from "@/lib/site-data"

export const metadata = pageMetadata({
  title: "Sobre nós",
  description:
    "A AstraX cria desafios concebidos para testar resistência, coragem, estratégia e capacidade de adaptação. Conhece a missão e os quatro desafios.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nós"
        lines={["Desafios para", "ir mais longe."]}
        description={brand.mission}
        image={{ src: "/images/gallery-4.png", alt: "Sapatilhas de trail enlameadas a cruzar a meta durante a noite", position: "50% 60%" }}
      />

      {/* MISSÃO */}
      <section className="relative isolate overflow-hidden bg-background" aria-labelledby="missao">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[35%_center] opacity-30"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/70 to-background" />
        <Container className="py-24 md:py-40">
          <Reveal className="mb-8 eyebrow">A nossa missão</Reveal>
          <RevealLines
            id="missao"
            lines={["Levar pessoas", "ao ponto em que", "querem parar —", "e mais além."]}
            className="max-w-6xl font-display text-[11vw] uppercase leading-[0.92] sm:text-7xl lg:text-8xl"
          />
          <Reveal delay={300} className="mt-10 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
            Na AstraX o foco é a experiência: criar desafios memoráveis, exigentes e bem organizados, em que cada
            participante descobre do que é capaz.
          </Reveal>
        </Container>
      </section>

      {/* PRINCÍPIOS */}
      <Section tone="card" labelledBy="principios">
        <SectionHeading
          eyebrow="O que nos move"
          lines={["Quatro", "princípios."]}
          id="principios"
          size="xl"
          className="mb-12 md:mb-16"
        />
        <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 100} className="bg-card p-7 md:p-10">
              <span className="text-xs font-medium tracking-[0.25em] text-primary">{p.number}</span>
              <p className="mt-10 font-display text-4xl uppercase md:text-5xl">{p.title}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* DESAFIOS */}
      <Section labelledBy="os-desafios">
        <SectionHeading
          eyebrow="O que fazemos"
          lines={["Quatro", "desafios."]}
          id="os-desafios"
          size="xl"
          className="mb-12 md:mb-16"
        />
        <ul className="border-t border-white/15">
          {challenges.map((c) => (
            <li key={c.id} className="border-b border-white/15">
              <Link
                href={c.href}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 transition-colors hover:text-primary md:gap-10 md:py-8"
              >
                <span className="text-xs font-medium tracking-[0.25em] text-muted-foreground">{c.number}</span>
                <span>
                  <span className="block font-display text-3xl uppercase md:text-5xl">{c.title}</span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.subtitle}</span>
                </span>
                <ArrowUpRight
                  className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden
                />
                <span className="sr-only">Ver desafio {c.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="accent" border={false} labelledBy="about-cta">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={brand.tagline} lines={["Desafia os", "teus limites."]} id="about-cta" size="xl" tone="accent" />
          <Reveal delay={200} className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/challenges" variant="dark" size="lg">
              Ver desafios
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline-dark" size="lg">
              Contacto
            </ButtonLink>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
