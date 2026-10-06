'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks, socials } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500',
        scrolled && !open
          ? 'border-b border-white/10 bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:h-20 md:px-10" aria-label="Main">
        <a href="#top" className="relative z-50 flex items-center gap-2 font-display text-xl tracking-[0.12em] md:text-2xl">
          <span aria-hidden className="size-1.5 rounded-full bg-primary" />
          AD ASTRA
        </a>

        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-xs font-medium uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#challenges"
            className="hidden items-center gap-2 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            Join a Challenge
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 inline-flex size-11 items-center justify-center border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-0 z-40 flex flex-col bg-background px-5 pb-10 pt-28 transition-[opacity,visibility] duration-500 lg:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <ul className="flex flex-col border-t border-white/10">
          {navLinks.map((link, i) => (
            <li key={link.href} className="border-b border-white/10">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-baseline justify-between py-5 font-display text-5xl uppercase transition-all duration-700 sm:text-6xl',
                  open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
                )}
                style={{ transitionDelay: open ? `${120 + i * 70}ms` : '0ms' }}
              >
                {link.label}
                <span className="font-sans text-xs tracking-[0.2em] text-muted-foreground">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#challenges"
          onClick={() => setOpen(false)}
          className="mt-10 inline-flex items-center justify-between bg-primary px-6 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground"
        >
          Join a Challenge
          <ArrowUpRight className="size-5" aria-hidden />
        </a>
        <div className="mt-auto flex gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {socials.map((s) => (
            <a key={s.label} href={s.href} className="hover:text-white">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
