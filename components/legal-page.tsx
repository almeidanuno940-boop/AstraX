import { PageHero } from './page-hero'
import { Container } from './section'
import { ButtonLink } from './button-link'

/** Uma secção pode ser só um título (texto "A definir") ou ter o texto já definido. */
export type LegalSection = string | { title: string; paragraphs: string[] }

/**
 * Estrutura das páginas legais. Secções só com título indicam "A definir" — nada é inventado.
 */
export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string
  intro: string
  sections: LegalSection[]
}) {
  const pending = sections.some((section) => typeof section === 'string')

  return (
    <>
      <PageHero eyebrow="Informação legal" lines={[title]} description={intro} />

      <section className="bg-background" aria-label={title}>
        <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {pending && (
              <p className="mb-12 border-l-2 border-primary pl-6 text-lg leading-relaxed text-white/85">
                Conteúdo legal a definir antes do lançamento.
              </p>
            )}

            <ol className="border-t border-white/15">
              {sections.map((section, i) => {
                const heading = typeof section === 'string' ? section : section.title
                const paragraphs = typeof section === 'string' ? null : section.paragraphs
                return (
                  <li key={heading} className="border-b border-white/15 py-7">
                    <h2 className="flex items-baseline gap-5 font-display text-2xl uppercase md:text-3xl">
                      <span className="text-xs font-sans font-bold tracking-[0.2em] text-primary">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {heading}
                    </h2>
                    <div className="mt-3 space-y-3 pl-9 text-sm leading-relaxed text-white/75 md:pl-10 md:text-base">
                      {paragraphs ? (
                        paragraphs.map((p) => <p key={p}>{p}</p>)
                      ) : (
                        <p className="text-muted-foreground">A definir.</p>
                      )}
                    </div>
                  </li>
                )
              })}
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
