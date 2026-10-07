import type { MetadataRoute } from 'next'
import { challenges } from '@/lib/site-data'
import { legalLinks, siteUrl } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/challenges',
    ...challenges.map((c) => c.href),
    '/next-event',
    '/about',
    '/faq',
    '/contact',
    ...challenges.map((c) => c.registration.href),
    ...legalLinks.map((l) => l.href),
  ]
  return paths.map((path) => ({
    url: `${siteUrl}${path === '/' ? '' : path}`,
    priority: path === '/' ? 1 : 0.7,
  }))
}
