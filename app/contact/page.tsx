import { ContactForm } from "@/components/contact-form"
import { PageHero } from "@/components/page-hero"
import { Container } from "@/components/section"
import { contact, socials } from "@/lib/site-config"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Contacto",
  description: "Fala com a equipa AstraX: informações, inscrições, parcerias e outros assuntos.",
  path: "/contact",
})

export default function ContactPage() {
  const details = [
    {
      label: "Email",
      value: contact.email,
      href: contact.email ? `mailto:${contact.email}` : null,
    },
    {
      label: "Telefone",
      value: contact.phone,
      href: contact.phone ? `tel:${contact.phone.replace(/\s/g, "")}` : null,
    },
    { label: "Morada", value: contact.address, href: null },
  ]

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        lines={["Fala", "connosco."]}
        description="Tens uma pergunta sobre um desafio, uma inscrição ou uma parceria? Escreve-nos."
        image={{ src: "/images/gallery-1.jpg", alt: "Atleta coberto de lama, ofegante, à chuva", position: "50% 30%" }}
      />

      <section className="bg-background" aria-label="Formulário e dados de contacto">
        <Container className="grid gap-14 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="lg:col-span-4 lg:col-start-9" aria-label="Dados de contacto">
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Outros contactos</h2>
            <dl className="mt-5 border-t border-white/15">
              {details.map((item) => (
                <div key={item.label} className="border-b border-white/15 py-5">
                  <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{item.label}</dt>
                  <dd className="mt-2 break-words font-display text-2xl uppercase">
                    {item.value ? (
                      item.href ? (
                        <a href={item.href} className="transition-colors hover:text-primary">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )
                    ) : (
                      <span className="text-white/60">Em breve</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Redes sociais</h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  {s.href ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex border border-white/25 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {s.label}
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="inline-flex border border-white/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
                    >
                      {s.label} · Em breve
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>
    </>
  )
}
