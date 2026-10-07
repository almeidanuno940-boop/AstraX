import type { Stat } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const sizes = {
  md: 'text-2xl sm:text-3xl lg:text-4xl',
  lg: 'text-4xl sm:text-6xl lg:text-7xl xl:text-8xl',
  /** Heroes das páginas de desafio. */
  hero: 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl',
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
          'grid border-t border-white/15',
          four ? 'grid-cols-2 @3xl:grid-cols-4' : 'grid-cols-3',
          className,
        )}
      >
        {stats.map((stat, i) => (
          <div
            key={`${stat.label}-${i}`}
            className={cn(
              'flex flex-col gap-2 pt-5',
              !four && i > 0 && 'border-l border-white/15 pl-4 md:pl-6',
              four && i % 2 === 1 && 'border-l border-white/15 pl-4 md:pl-6',
              four && i > 0 && i % 2 === 0 && '@3xl:border-l @3xl:border-white/15 @3xl:pl-6',
              four && i >= 2 && 'mt-5 border-t border-white/15 @3xl:mt-0 @3xl:border-t-0',
            )}
          >
            <dt className="order-2 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground md:text-xs">
              {stat.label}
            </dt>
            <dd className={cn('order-1 text-balance font-display uppercase leading-none text-white', sizes[size])}>
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
