import type { RegistrationField, RegistrationStatus, Spots } from './registration'

/**
 * Conteúdo editável do site: desafios, preços, próximo evento, galeria.
 * Marca, contactos, redes e navegação ficam em `site-config.ts`.
 */

export type Stat = { value: string; label: string }

export type PriceTier = { label: string; price: string; note: string; featured?: boolean }

export type ChallengeId = 'backyard' | 'survival' | 'urban' | 'last-one-out'

export type Challenge = {
  id: ChallengeId
  number: string
  /** Nome oficial apresentado no site. */
  title: string
  /** Linhas do título nos heroes (grandes headlines). */
  titleLines: string[]
  subtitle: string
  motto: string
  description: string
  stats: Stat[]
  pricing: PriceTier[]
  /** Imagem do cartão (homepage e /challenges). */
  image: string
  imageAlt: string
  /** Imagem do hero da página do desafio. */
  hero: { src: string; alt: string; variant: 'default' | 'circle' | 'urban' }
  href: string
  ctaLabel: string
  /** Recompensas de conclusão confirmadas para este desafio (vazio = nenhuma confirmada). */
  finisher: string[]
  registration: {
    href: string
    status: RegistrationStatus
    spots: Spots
    extraFields: RegistrationField[]
  }
}

/** Escalões de preço — alterar aqui altera o site inteiro. */
const tiers = (early: string, normal: string, last: string): PriceTier[] => [
  { label: 'Early Bird', price: early, note: 'Primeiras vagas disponíveis.' },
  { label: 'Normal', price: normal, note: 'Preço normal de inscrição.', featured: true },
  { label: 'Últimas vagas', price: last, note: 'Aplicável às últimas vagas.' },
]

export const challenges: Challenge[] = [
  {
    id: 'backyard',
    number: '01',
    title: 'Backyard',
    titleLines: ['Backyard'],
    subtitle: 'Último corredor em prova',
    motto: 'Corre. Recupera. Repete.',
    description:
      'Completa uma volta de 6,706 km a cada hora. Depois recupera e prepara-te para a hora seguinte. Quem não concluir a volta dentro do tempo é eliminado. A prova continua até restar apenas um participante.',
    stats: [
      { value: '6,706 km', label: 'Por volta' },
      { value: '1 volta', label: 'A cada hora' },
      { value: '1', label: 'Vencedor' },
    ],
    pricing: tiers('20 €', '25 €', '30 €'),
    image: '/images/backyard.png',
    imageAlt: 'Corredores com lanternas frontais num trilho florestal durante a noite',
    hero: {
      src: '/images/backyard.png',
      alt: 'Corredores com lanternas frontais num trilho florestal durante a noite',
      variant: 'default',
    },
    href: '/challenges/backyard',
    ctaLabel: 'Inscreve-te',
    finisher: ['Medalha de Finisher, quando aplicável conforme a regra definida do evento'],
    registration: {
      href: '/inscricao/backyard',
      status: 'pagamento-em-breve',
      spots: { total: null, available: null },
      extraFields: [],
    },
  },
  {
    id: 'survival',
    number: '02',
    title: 'Survival',
    titleLines: ['Survival'],
    subtitle: '4 dias na natureza',
    motto: 'Aprende. Adapta-te. Resiste.',
    description:
      'Uma experiência de quatro dias em ambiente natural, centrada na aprendizagem e aplicação supervisionada de competências de sobrevivência, orientação, adaptação, resistência, gestão de recursos e resolução de problemas.',
    stats: [
      { value: '4', label: 'Dias' },
      { value: '12', label: 'Participantes máx.' },
      { value: '299 €', label: 'Preço' },
    ],
    pricing: tiers('269 €', '299 €', '329 €'),
    image: '/images/survival.png',
    imageAlt: 'Um pequeno grupo à volta de uma fogueira numa floresta com nevoeiro',
    hero: {
      src: '/images/survival-hero.jpg',
      alt: 'Uma pessoa de pé numa floresta de árvores altas, de costas para a câmara',
      variant: 'default',
    },
    href: '/challenges/survival',
    ctaLabel: 'Candidata-te',
    finisher: ['Medalha de Finisher', 'T-shirt oficial de Finisher', 'Certificado de Finisher'],
    registration: {
      href: '/inscricao/survival',
      status: 'pagamento-em-breve',
      spots: { total: 12, available: null },
      extraFields: [],
    },
  },
  {
    id: 'urban',
    number: '03',
    title: 'Desafio Urbano',
    titleLines: ['Desafio', 'Urbano'],
    subtitle: 'A cidade é o teu campo de jogo',
    motto: 'Corre. Pensa. Explora.',
    description:
      'Uma competição urbana por equipas em que os participantes percorrem a cidade, encontram checkpoints, resolvem pistas, completam missões e acumulam pontos.',
    stats: [
      { value: '1', label: 'Cidade' },
      { value: 'Várias', label: 'Missões' },
      { value: 'Várias', label: 'Equipas' },
      { value: '1', label: 'Vencedor' },
    ],
    pricing: tiers('15 €', '20 €', '25 €'),
    image: '/images/urban.png',
    imageAlt: 'Um corredor a correr por ruas de calçada molhada durante a noite',
    hero: {
      src: '/images/urban.png',
      alt: 'Um corredor a correr por ruas de calçada molhada durante a noite',
      variant: 'urban',
    },
    href: '/challenges/urban',
    ctaLabel: 'Inscreve-te',
    finisher: [],
    registration: {
      href: '/inscricao/urban',
      status: 'pagamento-em-breve',
      spots: { total: null, available: null },
      extraFields: [],
    },
  },
  {
    id: 'last-one-out',
    number: '04',
    title: 'Last One Out',
    titleLines: ['Last One', 'Out'],
    subtitle: 'Fica. Resiste. Vence.',
    motto: 'Fica até todos os outros saírem.',
    description:
      'Os participantes entram num círculo. Quem sair fica eliminado. A competição continua até restar uma pessoa. A última pessoa dentro do círculo ganha 300 €.',
    stats: [
      { value: '100', label: 'Participantes' },
      { value: '300 €', label: 'De prémio' },
      { value: '1', label: 'Vencedor' },
    ],
    pricing: tiers('15 €', '20 €', '25 €'),
    image: '/images/last-one-out.png',
    imageAlt: 'Uma multidão dentro de um círculo pintado no chão, sob holofotes',
    hero: {
      src: '/images/last-one-out.png',
      alt: 'Uma multidão dentro de um círculo pintado no chão, sob holofotes',
      variant: 'circle',
    },
    href: '/challenges/last-one-out',
    ctaLabel: 'Inscreve-te',
    finisher: [],
    registration: {
      href: '/inscricao/last-one-out',
      status: 'pagamento-em-breve',
      spots: { total: 100, available: null },
      extraFields: [],
    },
  },
]

export function getChallenge(id: string): Challenge | undefined {
  return challenges.find((c) => c.id === id)
}

/** Para páginas onde o desafio tem de existir (falha cedo se o id estiver errado). */
export function requireChallenge(id: ChallengeId): Challenge {
  const challenge = getChallenge(id)
  if (!challenge) throw new Error(`Desafio desconhecido: ${id}`)
  return challenge
}

/** "Desde 20 €" — usado nos cartões. */
export function fromPrice(challenge: Challenge): string {
  return `Desde ${challenge.pricing[0].price}`
}

export const heroStats: Stat[] = [
  { value: '04', label: 'Desafios' },
  { value: '12', label: 'Vagas no Survival' },
  { value: '300 €', label: 'Prémio Last One Out' },
]

/**
 * PRÓXIMO EVENTO — único local a editar.
 * Deixa um campo a `null` enquanto não estiver definido: o site mostra "Em breve" / "Por anunciar".
 * `date` aceita data ISO (ex.: '2027-03-20T09:00:00+00:00'); quando definida, a contagem decrescente aparece sozinha.
 */
export const nextEvent: {
  name: string | null
  challengeId: ChallengeId | null
  date: string | null
  location: string | null
  price: string | null
  spots: string | null
  prize: string | null
  description: string | null
  rules: string[]
} = {
  name: null,
  challengeId: null,
  date: null,
  location: null,
  price: null,
  spots: null,
  prize: null,
  description: null,
  rules: [],
}

function formatEventDate(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return 'Por anunciar'
  return date.toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })
}

export const nextEventDetails = [
  { label: 'Evento', value: nextEvent.name ?? 'Em breve' },
  { label: 'Data', value: nextEvent.date ? formatEventDate(nextEvent.date) : 'Por anunciar' },
  { label: 'Local', value: nextEvent.location ?? 'Por anunciar' },
  { label: 'Preço', value: nextEvent.price ?? 'Por anunciar' },
  { label: 'Vagas', value: nextEvent.spots ?? 'Por anunciar' },
  { label: 'Prémio', value: nextEvent.prize ?? 'Por anunciar' },
]

export const principles = [
  { number: 'I', title: 'Resistência', text: 'Continuar quando o corpo te pede para parar.' },
  { number: 'II', title: 'Coragem', text: 'Entrar no desconhecido e ficar lá.' },
  { number: 'III', title: 'Estratégia', text: 'Pensar com clareza quando tudo fica difícil.' },
  { number: 'IV', title: 'Adaptação', text: 'Mudar o plano. Nunca o objetivo.' },
]

export const finisherRewards = [
  { title: 'Medalha de Finisher', image: '/images/medal.png', alt: 'Medalha de Finisher AstraX em preto mate sobre pedra escura' },
  { title: 'T-shirt oficial', image: '/images/tshirt.png', alt: 'T-shirt preta oficial de Finisher AstraX, dobrada' },
  { title: 'Certificado de Finisher', image: '/images/certificate.png', alt: 'Certificado de Finisher AstraX sobre pedra escura' },
]

export const survivalIncludes = [
  'Transporte',
  'Alimentação e água',
  'Equipamento de sobrevivência, quando aplicável',
  'Acompanhamento de instrutores',
  'Apoio durante o evento',
  'Apoio de segurança',
]

/**
 * Galeria. Para adicionar conteúdo real, troca um item `placeholder` por `image`
 * (ou acrescenta `video` quando existirem vídeos / publicações do Instagram).
 */
export type GalleryItem =
  | { type: 'image'; src: string; alt: string; className: string }
  | { type: 'placeholder'; label: string; hint: string; className: string }

export const galleryItems: GalleryItem[] = [
  { type: 'image', src: '/images/gallery-3.png', alt: 'Corredores a atravessar um planalto de montanha com nevoeiro, ao amanhecer', className: 'md:col-span-8 md:row-span-2 aspect-[4/3] md:aspect-auto' },
  { type: 'image', src: '/images/gallery-1.png', alt: 'Atleta coberto de lama, ofegante, à chuva', className: 'md:col-span-4 aspect-[4/5]' },
  { type: 'image', src: '/images/gallery-2.png', alt: 'Mãos a fazer um nó de corda junto a uma bússola e a um mapa', className: 'md:col-span-4 aspect-[4/5]' },
  { type: 'image', src: '/images/gallery-4.png', alt: 'Sapatilhas de trail enlameadas a cruzar a meta durante a noite', className: 'md:col-span-5 aspect-[4/3]' },
  { type: 'placeholder', label: 'Em breve', hint: 'Fotografias, vídeos e conteúdos dos eventos', className: 'md:col-span-7 aspect-[4/3] md:aspect-auto md:min-h-[18rem]' },
]
