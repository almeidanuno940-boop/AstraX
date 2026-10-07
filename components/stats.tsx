import type { Stat } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { CountUp } from './count-up'

const sizes = {
  md: 'text-2xl sm:text-4xl lg:text-5xl',
  lg: 'text-4xl sm:text-7xl lg:text-8xl xl:text-9xl',
  /** Heroes das páginas de desafio. */
  hero: 'text-3xl sm:text-5xl lg:text-6xl xl:text-7xl',
  /** Faixas de números gigantes. */
  giant: 'text-6xl sm:text-8xl lg:text-[10rem]',
}

/**
 * Estatísticas em grelha. Com 3 itens ficam sempre em 3 colunas;
 * com 4 itens passam a 2x2 e, em contentores largos, a 4 colunas.
 */
export function Stats({
  stats,
  size = 'md',
  className,
}: {
  stats: Stat[]
  size?: keyof typeof sizes
  className?: string
}) {
  const four = stats.length > 3

  return (
    <div className="@container">
      <dl
        className={cn(
          'grid border-t border-white/25',
          four ? 'grid-cols-2 @3xl:grid-cols-4' : 'grid-cols-3',
          className,
        )}
      >
        {stats.map((stat, i) => (
          <div
            key={`${stat.label}-${i}`}
            className={cn(
              'relative flex min-w-0 flex-col gap-3 pt-5',
              !four && i > 0 && 'border-l border-white/15 pl-4 md:pl-6',
              four && i % 2 === 1 && 'border-l border-white/15 pl-4 md:pl-6',
              four && i > 0 && i % 2 === 0 && '@3xl:border-l @3xl:border-white/15 @3xl:pl-6',
              four && i >= 2 && 'mt-5 border-t border-white/15 @3xl:mt-0 @3xl:border-t-0',
            )}
          >
            {/* marca técnica sobre a linha superior */}
            <span aria-hidden className="absolute -top-px left-0 h-px w-6 bg-primary" />
            <dt className="tech order-2 min-w-0 text-[10px] tracking-[0.1em] text-white/70 [overflow-wrap:anywhere] sm:text-[11px] sm:tracking-[0.2em] md:text-xs">{stat.label}</dt>
            <dd className={cn('order-1 text-balance font-display uppercase leading-[0.9] text-white', four && size === 'hero' ? 'text-4xl sm:text-5xl xl:text-6xl' : sizes[size])}>
              <CountUp value={stat.value} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
