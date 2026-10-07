'use client'

import { useEffect, useState } from 'react'

type Parts = { days: number; hours: number; minutes: number; seconds: number }

function getParts(target: number): Parts {
  const diff = Math.max(0, target - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const pad = (n: number) => String(n).padStart(2, '0')

export function Countdown({ target }: { target: string | null }) {
  const [parts, setParts] = useState<Parts | null>(null)

  useEffect(() => {
    if (!target) return
    const time = new Date(target).getTime()
    setParts(getParts(time))
    const id = setInterval(() => setParts(getParts(time)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    { label: 'Dias', value: parts ? pad(parts.days) : '00' },
    { label: 'Horas', value: parts ? pad(parts.hours) : '00' },
    { label: 'Minutos', value: parts ? pad(parts.minutes) : '00' },
    { label: 'Segundos', value: parts ? pad(parts.seconds) : '00' },
  ]

  return (
    <div role="timer" aria-label="Contagem decrescente para o próximo desafio" className="grid grid-cols-4">
      {units.map((unit, i) => (
        <div key={unit.label} className={i > 0 ? 'border-l border-white/15 pl-3 sm:pl-6' : ''}>
          <span className="block font-display text-5xl tabular-nums leading-none sm:text-7xl lg:text-8xl">
            {unit.value}
          </span>
          <span className="mt-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}
