import type { Stat } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Stats({
  stats,
  size = 'md',
  className,
}: {
  stats: Stat[]
  size?: 'md' | 'lg'
  className?: string
}) {
  return (
    <dl className={cn('grid grid-cols-3 border-t border-white/15', className)}>
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={cn('flex flex-col gap-2 pt-5', i > 0 && 'border-l border-white/15 pl-4 md:pl-6')}
        >
          <dt className="order-2 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground md:text-xs">
            {stat.label}
          </dt>
          <dd
            className={cn(
              'order-1 font-display uppercase leading-none text-white',
              size === 'lg' ? 'text-4xl sm:text-6xl lg:text-7xl xl:text-8xl' : 'text-2xl sm:text-3xl lg:text-4xl',
            )}
          >
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
