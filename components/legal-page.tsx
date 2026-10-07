import { PageHero } from './page-hero'
import { Container } from './section'
import { ButtonLink } from './button-link'

/**
 * Estrutura das páginas legais. O texto jurídico definitivo ainda não foi fornecido,
 * por isso cada secção indica "A definir" — nada é inventado.
 */
export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string
  intro: string
  sections: string[]
}) {
  return (
    <>
      <PageHero eyebrow="Informação legal" lines={[title]} description={intro} />

      <section className="bg-background" aria-label={title}>
        <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="border-l-2 border-primary pl-6 text-lg leading-relaxed text-white/85">
              Conteúdo legal a definir antes do lançamento.
            </p>

            <ol className="mt-12 border-t border-white/15">
              {sections.map((section, i) => (
                <li key={section} className="border-b border-white/15 py-7">
                  <h2 className="flex items-baseline gap-5 font-display text-2xl uppercase md:text-3xl">
                    <span className="text-xs font-sans font-bold tracking-[0.2em] text-primary">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {section}
                  </h2>
                  <p className="mt-3 pl-9 text-sm text-muted-foreground md:pl-10">A definir.</p>
                </li>
              ))}
            </ol>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="outline">
                Contacto
              </ButtonLink>
              <ButtonLink href="/" variant="outline" arrow={false}>
                Página inicial
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
