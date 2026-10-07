'use client'

import { useEffect, useRef, useState } from 'react'

/** Só anima inteiros simples ("04", "12", "300 €"); valores como "6,706 km" ou "Várias" ficam como estão. */
const ANIMATABLE = /^(\d+)(\s.*)?$/

/**
 * Conta de 0 até ao valor quando entra no ecrã. O HTML do servidor já traz o valor final,
 * por isso sem JavaScript, ou com movimento reduzido, nada muda.
 */
export function CountUp({ value }: { value: string }) {
  const match = ANIMATABLE.exec(value)
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const node = ref.current
    if (!node || !match || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const [, digits, rest = ''] = match
    const target = Number(digits)
    const width = digits.length
    let frame = 0
    let started = false

    setDisplay(`${'0'.repeat(width)}${rest}`)

    const run = () => {
      const duration = 1400
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplay(`${String(Math.round(target * eased)).padStart(width, '0')}${rest}`)
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true
          observer.disconnect()
          run()
        }
      },
      { threshold: 0.6 },
    )
    observer.observe(node)

    return () => {
      observer.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden className="tabular-nums">
        {display}
      </span>
    </span>
  )
}
