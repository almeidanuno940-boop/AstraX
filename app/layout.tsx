import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Inter, JetBrains_Mono } from 'next/font/google'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { brand, siteUrl, socials } from '@/lib/site-config'
import './globals.css'

const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' })

const homeTitle = `${brand.name} — Desafia os Teus Limites`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  applicationName: brand.name,
  alternates: { canonical: '/' },
  openGraph: {
    title: homeTitle,
    description: 'Quatro desafios. Um objetivo. Descobre até onde és capaz de ir.',
    siteName: brand.name,
    locale: 'pt_PT',
    type: 'website',
    url: '/',
    images: [{ url: '/images/hero.jpg', alt: 'Corredor solitário numa crista de montanha, ao anoitecer, acima das nuvens' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: 'Quatro desafios. Um objetivo. Descobre até onde és capaz de ir.',
    images: ['/images/hero.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0c0e',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: brand.name,
  url: siteUrl,
  description: brand.description,
  sameAs: socials.flatMap((s) => (s.href ? [s.href] : [])),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className={`${anton.variable} ${inter.variable} ${mono.variable} bg-background`}>
      <body className="antialiased">
        <a href="#conteudo" className="skip-link">
          Saltar para o conteúdo
        </a>
        <Navbar />
        <main id="conteudo">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
