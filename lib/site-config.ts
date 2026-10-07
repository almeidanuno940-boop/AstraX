/**
 * Configuração global do site: marca, domínio, navegação, contactos e redes.
 * Valores ainda não definidos ficam a `null` — o site mostra "Em breve" e não cria links falsos.
 */

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()

/** Domínio público. Define `NEXT_PUBLIC_SITE_URL` em produção (ex.: https://dominio.pt). */
export const siteUrl = (
  configuredUrl && /^https?:\/\//.test(configuredUrl) ? configuredUrl : 'http://localhost:3000'
).replace(/\/+$/, '')

export const brand = {
  name: 'AstraX',
  slogan: 'Desafia os teus limites.',
  tagline: 'Até às estrelas.',
  description:
    'AstraX cria desafios de resistência, sobrevivência, competição urbana e experiências extremas em Portugal.',
  mission:
    'A AstraX cria desafios concebidos para testar resistência, coragem, estratégia e capacidade de adaptação.',
  country: 'Portugal',
}

export type ExternalLink = { label: string; href: string | null }

/** Contactos oficiais. Preencher quando estiverem definidos. */
export const contact: { email: string | null; phone: string | null; address: string | null } = {
  email: null,
  phone: null,
  address: null,
}

/** Redes sociais. Só ficam clicáveis quando `href` tiver um URL real. */
export const socials: ExternalLink[] = [
  { label: 'Instagram', href: null },
  { label: 'TikTok', href: null },
  { label: 'YouTube', href: null },
]

export const navLinks = [
  { label: 'Desafios', href: '/challenges' },
  { label: 'Próximo evento', href: '/next-event' },
  { label: 'Sobre nós', href: '/about' },
  { label: 'Perguntas frequentes', href: '/faq' },
]

export const primaryCta = { label: 'Participa num desafio', href: '/challenges' }

export const footerLinks = [...navLinks, { label: 'Contacto', href: '/contact' }]

export const legalLinks = [
  { label: 'Política de Privacidade', href: '/privacidade' },
  { label: 'Termos e Condições', href: '/termos' },
  { label: 'Política de Cookies', href: '/cookies' },
]
