import type { Metadata } from 'next'
import { brand } from './site-config'

const defaultImage = {
  url: '/images/hero.png',
  alt: 'Corredor solitário numa crista de montanha, ao anoitecer, acima das nuvens',
}

type PageMetadataInput = {
  /** Título curto da página (o sufixo "| AstraX" é acrescentado pelo layout). */
  title: string
  description: string
  /** Caminho da rota, ex.: '/challenges/backyard'. Usado no URL canónico. */
  path: string
  image?: { url: string; alt: string }
  noindex?: boolean
}

/** Metadata consistente (título, descrição, Open Graph, Twitter, canónico) para todas as páginas. */
export function pageMetadata({ title, description, path, image = defaultImage, noindex }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: `${title} | ${brand.name}`,
      description,
      url: path,
      siteName: brand.name,
      locale: 'pt_PT',
      type: 'website',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${brand.name}`,
      description,
      images: [image.url],
    },
  }
}
