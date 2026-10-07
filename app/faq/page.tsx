import { FaqList } from "@/components/faq-list"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { ButtonLink } from "@/components/button-link"
import { Container, Section, SectionHeading } from "@/components/section"
import { faqCategories } from "@/lib/faq-data"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Perguntas frequentes",
  description:
    "Respostas às perguntas mais frequentes sobre a AstraX, o Backyard, o Survival, o Desafio Urbano, o Last One Out e as inscrições.",
  path: "/faq",
})

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Perguntas frequentes"
        lines={["Tens", "dúvidas?"]}
        description="Reunimos as respostas por tema. Se não encontrares o que procuras, fala connosco."
        image={{ src: "/images/gallery-2.png", alt: "Mãos a fazer um nó de corda junto a uma bússola e a um mapa", position: "50% 55%" }}
      >
        <nav aria-label="Categorias de perguntas frequentes">
          <ul className="flex flex-wrap gap-2">
            {faqCategories.map((category) => (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  className="inline-flex border border-white/25 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {category.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {faqCategories.map((category, i) => (
        <Section key={category.id} id={category.id} tone={i % 2 === 0 ? "default" : "card"} border={i > 0} labelledBy={`${category.id}-titulo`}>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow={String(i + 1).padStart(2, "0")} lines={[category.label]} id={`${category.id}-titulo`} />
            </div>
            <Reveal className="lg:col-span-8">
              <FaqList items={category.items} />
            </Reveal>
          </div>
        </Section>
      ))}

      <section className="bg-primary text-primary-foreground" aria-labelledby="faq-contacto">
        <Container className="flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <h2 id="faq-contacto" className="font-display text-4xl uppercase leading-[0.95] sm:text-6xl">
            Não encontraste
            <br />a resposta?
          </h2>
          <ButtonLink href="/contact" variant="dark" size="lg">
            Fala connosco
          </ButtonLink>
        </Container>
      </section>
    </>
  )
}
