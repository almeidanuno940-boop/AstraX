import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'light' | 'outline' | 'dark' | 'outline-dark'
type Size = 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-foreground hover:bg-white hover:shadow-[0_0_48px_-6px_var(--primary)] focus-visible:bg-white',
  light: 'bg-white text-background hover:bg-primary hover:text-primary-foreground',
  outline:
    'border border-white/30 text-white hover:border-primary hover:bg-primary hover:text-primary-foreground',
  /** Para fundos laranja. */
  dark: 'bg-black text-white hover:bg-white hover:text-black',
  'outline-dark': 'border border-black text-black hover:bg-black hover:text-white',
}

const sizes: Record<Size, string> = {
  md: 'min-h-12 px-6 py-4 text-xs tracking-[0.2em]',
  lg: 'min-h-14 px-8 py-5 text-sm tracking-[0.22em]',
}

/** Classes partilhadas por todos os botões do site (links e <button>). */
export function buttonClasses(variant: Variant = 'primary', size: Size = 'md', className?: string) {
  return cn(
    'group relative inline-flex items-center justify-between gap-6 font-semibold uppercase transition-[background-color,color,border-color,box-shadow,transform] duration-300 active:translate-y-px active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60',
    variants[variant],
    sizes[size],
    className,
  )
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  arrow = true,
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: Variant
  size?: Size
  arrow?: boolean
  className?: string
}) {
  return (
    <Link href={href} className={buttonClasses(variant, size, className)}>
      {children}
      {arrow && (
        <ArrowRight
          className="size-4 shrink-0 -translate-x-0.5 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </Link>
  )
}
