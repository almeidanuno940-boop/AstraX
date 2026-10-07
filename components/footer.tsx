import Link from 'next/link'
import { brand, contact, footerLinks, legalLinks, socials } from '@/lib/site-config'

const linkClass = 'text-sm font-medium uppercase tracking-[0.18em] transition-colors hover:text-primary'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-[1600px] px-5 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-3xl uppercase tracking-[0.1em]">{brand.name}</p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.3em] text-primary">{brand.slogan}</p>
            <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
              Desafios de resistência, sobrevivência, competição urbana e experiências extremas. Nascidos em Portugal.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {contact.email ? (
                <a href={`mailto:${contact.email}`} className="text-white transition-colors hover:text-primary">
                  {contact.email}
                </a>
              ) : (
                <Link href="/contact" className="text-white transition-colors hover:text-primary">
                  Fala connosco
                </Link>
              )}
            </p>
          </div>

          <nav aria-label="Rodapé" className="lg:col-span-3 lg:col-start-7">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-muted-foreground">Explorar</p>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-muted-foreground">Segue-nos</p>
            <ul className="flex flex-col gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  {s.href ? (
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {s.label}
                    </a>
                  ) : (
                    <span aria-disabled="true" className="text-sm font-medium uppercase tracking-[0.18em] text-white/50">
                      {s.label}{' '}
                      <span className="text-[10px] tracking-[0.2em] text-muted-foreground">· Em breve</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          aria-hidden
          className="mt-20 select-none whitespace-nowrap text-center font-display text-[28vw] uppercase leading-[0.78] tracking-tight text-white/[0.06] md:mt-28 2xl:text-[420px]"
        >
          {brand.name}
        </p>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
