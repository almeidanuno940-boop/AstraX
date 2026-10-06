import { footerLinks, legalLinks, socials } from '@/lib/site-data'

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-[1600px] px-5 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Challenge your limits.</p>
            <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
              Physical, survival, urban and extreme challenges. Born in Portugal. Built for Europe.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3 lg:col-start-7">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-muted-foreground">Explore</p>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm font-medium uppercase tracking-[0.18em] transition-colors hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-muted-foreground">Follow</p>
            <ul className="flex flex-col gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-sm font-medium uppercase tracking-[0.18em] transition-colors hover:text-primary">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          aria-hidden
          className="mt-20 select-none whitespace-nowrap text-center font-display text-[24vw] uppercase leading-[0.78] tracking-tight text-white/[0.06] md:mt-28 2xl:text-[380px]"
        >
          AD ASTRA
        </p>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} AD ASTRA. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
