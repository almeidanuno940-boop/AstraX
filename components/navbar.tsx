'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { brand, navLinks, primaryCta, socials } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const progressRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha o menu ao mudar de página.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(`${href}/`))

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500',
        scrolled && !open
          ? 'border-b border-white/10 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:h-20 md:px-10" aria-label="Principal">
        <Link
          href="/"
          className="relative z-50 flex min-h-11 items-center gap-2 font-display text-xl uppercase tracking-[0.12em] md:text-2xl"
          aria-label={`${brand.name} — página inicial`}
        >
          <span aria-hidden className="size-1.5 rounded-full bg-primary" />
          {brand.name}
        </Link>

        <ul className="hidden items-center gap-8 xl:flex 2xl:gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={cn(
                  'group relative text-xs font-medium uppercase tracking-[0.22em] transition-colors hover:text-white',
                  isActive(link.href) ? 'text-white' : 'text-white/70',
                )}
              >
                {link.label}
                <span
                  aria-hidden
                  className={cn(
                    'absolute -bottom-1.5 left-0 h-px w-full origin-left bg-primary transition-transform duration-500 group-hover:scale-x-100',
                    isActive(link.href) ? 'scale-x-100' : 'scale-x-0',
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href={primaryCta.href}
            className="hidden items-center gap-2 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            {primaryCta.label}
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 inline-flex size-11 items-center justify-center border border-white/20 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </nav>
      <span aria-hidden ref={progressRef} className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary" />

      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-0 z-40 flex flex-col overflow-y-auto bg-background px-5 pb-10 pt-28 transition-[opacity,visibility] duration-500 xl:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <ul className="flex flex-col border-t border-white/10">
          {navLinks.map((link, i) => (
            <li key={link.href} className="border-b border-white/10">
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={cn(
                  'flex items-baseline justify-between gap-4 py-5 font-display text-4xl uppercase transition-all duration-700 sm:text-6xl',
                  open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
                  isActive(link.href) && 'text-primary',
                )}
                style={{ transitionDelay: open ? `${120 + i * 70}ms` : '0ms' }}
              >
                {link.label}
                <span className="font-sans text-xs tracking-[0.2em] text-muted-foreground">0{i + 1}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={primaryCta.href}
          className="mt-10 inline-flex items-center justify-between bg-primary px-6 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground"
        >
          {primaryCta.label}
          <ArrowUpRight className="size-5" aria-hidden />
        </Link>
        <ul className="mt-auto flex gap-6 pt-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {socials.map((s) => (
            <li key={s.label}>
              {s.href ? (
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {s.label}
                </a>
              ) : (
                <span aria-disabled="true">{s.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
