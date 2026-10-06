'use client'

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

type RevealProps = {
  as?: ElementType
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'fade' | 'image' | 'lines'
  id?: string
}

export function Reveal({ as: Tag = 'div', children, className, delay = 0, variant = 'fade', id }: RevealProps) {
  const { ref, visible } = useInView<HTMLElement>()
  return (
    <Tag
      ref={ref}
      id={id}
      data-visible={visible}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
      className={cn(variant === 'fade' && 'reveal', variant === 'image' && 'reveal-image', className)}
    >
      {variant === 'image' ? <div className="reveal-image-inner absolute inset-0">{children}</div> : children}
    </Tag>
  )
}

type RevealLinesProps = {
  as?: ElementType
  lines: string[]
  className?: string
  delay?: number
  stagger?: number
  id?: string
}

export function RevealLines({ as = 'h2', lines, className, delay = 0, stagger = 110, id }: RevealLinesProps) {
  return (
    <Reveal as={as} variant="lines" className={className} id={id}>
      {lines.map((line, i) => (
        <span
          key={i}
          className="reveal-line"
          style={{ '--reveal-delay': `${delay + i * stagger}ms` } as CSSProperties}
        >
          <span>{line}</span>
        </span>
      ))}
    </Reveal>
  )
}
