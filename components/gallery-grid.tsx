'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, ImagePlus, Maximize2, X } from 'lucide-react'
import type { GalleryItem } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

type ImageItem = Extract<GalleryItem, { type: 'image' }>

/** Galeria editorial assimétrica com lightbox (elemento <dialog> nativo: teclado, foco e Esc incluídos). */
export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const images = items.filter((i): i is ImageItem => i.type === 'image')
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState(0)

  const open = (src: string) => {
    setIndex(Math.max(0, images.findIndex((i) => i.src === src)))
    dialogRef.current?.showModal()
  }
  const close = () => dialogRef.current?.close()
  const step = useCallback((dir: 1 | -1) => setIndex((i) => (i + dir + images.length) % images.length), [images.length])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const onKey = (e: KeyboardEvent) => {
      if (!dialog.open) return
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [step])

  const current = images[index]

  return (
    <>
      <ul className="mt-16 grid grid-cols-1 gap-3 md:mt-24 md:grid-cols-12 md:gap-4">
        {items.map((item, i) => (
          <Reveal
            as="li"
            key={item.type === 'image' ? item.src : `placeholder-${i}`}
            variant="image"
            delay={(i % 3) * 120}
            className={cn('group relative overflow-hidden bg-card', item.className)}
          >
            {item.type === 'image' ? (
              <button
                type="button"
                onClick={() => open(item.src)}
                aria-label={`Ampliar fotografia: ${item.alt}`}
                className="absolute inset-0 block cursor-zoom-in"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover grayscale-[40%] transition-[filter,transform] duration-[1.6s] ease-out group-hover:scale-105 group-hover:grayscale-0"
                />
                <span aria-hidden className="scrim-bottom absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
                <span className="tech absolute bottom-4 left-4 flex items-center gap-2 text-white opacity-100 transition-all duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <Maximize2 className="size-3.5" aria-hidden />
                  Ampliar
                </span>
              </button>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 border border-dashed border-white/20 bg-card px-6 text-center">
                <ImagePlus className="size-8 text-primary" aria-hidden />
                <p className="font-display text-4xl uppercase md:text-6xl">{item.label}</p>
                <p className="tech max-w-xs text-muted-foreground">{item.hint}</p>
                <p className="tech border border-white/20 px-3 py-1.5 text-white/70">Vídeos em breve</p>
              </div>
            )}
          </Reveal>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Galeria de fotografias"
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        {current && (
          <div className="relative flex size-full flex-col" onClick={(e) => e.target === e.currentTarget && close()}>
            <div className="tech flex items-center justify-between px-5 py-4 text-white/70 md:px-10">
              <span>
                {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Fechar galeria"
                className="inline-flex size-11 items-center justify-center border border-white/30 text-white transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>
            <div className="relative mx-5 mb-4 flex-1 md:mx-24" onClick={close}>
              <Image key={current.src} src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
            </div>
            <p className="px-5 pb-6 text-center text-sm text-white/70 md:px-10">{current.alt}</p>
            {(['prev', 'next'] as const).map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={() => step(dir === 'next' ? 1 : -1)}
                aria-label={dir === 'next' ? 'Fotografia seguinte' : 'Fotografia anterior'}
                className={cn(
                  'absolute top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-background/70 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground md:size-14',
                  dir === 'next' ? 'right-2 md:right-6' : 'left-2 md:left-6',
                )}
              >
                {dir === 'next' ? <ArrowRight className="size-5" aria-hidden /> : <ArrowLeft className="size-5" aria-hidden />}
              </button>
            ))}
          </div>
        )}
      </dialog>
    </>
  )
}
