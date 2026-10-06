import type { Stat } from '@/lib/site-data'

export const survivalApplyHref = '#'

export const survivalNavLinks = [
  { label: 'Mission', href: '#mission' },
  { label: 'Four Days', href: '#days' },
  { label: 'Route', href: '#route' },
  { label: 'Finisher', href: '#finisher' },
  { label: 'FAQ', href: '#faq' },
]

export const survivalStats: Stat[] = [
  { value: '4', label: 'Days' },
  { value: '12', label: 'Participants max' },
  { value: '€299', label: 'Per person' },
]

export const survivalDays = [
  {
    number: '01',
    title: 'Learn',
    text: 'Introduction and fundamental skills.',
  },
  {
    number: '02',
    title: 'Adapt',
    text: 'Apply what was learned through supervised challenges.',
  },
  {
    number: '03',
    title: 'Endure',
    text: 'Navigation, physical endurance, missions and decision making.',
  },
  {
    number: '04',
    title: 'Survive',
    text: 'Final challenge and completion.',
  },
]

export const missionPillars = ['Survival learning', 'Navigation', 'Adaptation', 'Endurance', 'Problem solving']

/**
 * Edit this object when the official route is ready.
 * Every field is optional — the route section renders whatever is provided.
 */
export type RouteData = {
  image?: { src: string; alt: string }
  gpxHref?: string
  distance?: string
  elevation?: string
  checkpoints?: { name: string; detail?: string }[]
  stages?: { label: string; detail?: string }[]
}

export const survivalRoute: RouteData = {}

export const survivalIncluded = [
  { title: 'Transportation', text: 'Travel arrangements as part of the event.' },
  { title: 'Food & Water', text: 'Provided for the duration of the experience.' },
  { title: 'Survival Equipment', text: 'Provided when applicable.' },
  { title: 'Instructor Guidance', text: 'Led by instructors throughout.' },
  { title: 'Event Support', text: 'An organised team behind the scenes.' },
  { title: 'Safety Support', text: 'Supervision and support procedures in place.' },
]

export const finisherItems = [
  { title: 'Finisher Medal', image: '/images/medal.png', alt: 'Matte black AD ASTRA finisher medal on dark stone', featured: true },
  { title: 'Official Finisher T-Shirt', image: '/images/tshirt.png', alt: 'Folded black AD ASTRA finisher t-shirt', featured: true },
  { title: 'Finisher Certificate', image: '/images/certificate.png', alt: 'AD ASTRA finisher certificate on dark stone', featured: false },
]

/** Placeholder structure — replace `text` with the final requirements. */
export const survivalRequirements = [
  { title: 'Age', text: 'To be confirmed.' },
  { title: 'Fitness', text: 'To be confirmed.' },
  { title: 'Experience', text: 'To be confirmed.' },
  { title: 'Health', text: 'To be confirmed.' },
  { title: 'Documents', text: 'To be confirmed.' },
]

/** Editable equipment list — add or remove items freely. */
export const survivalEquipment: { group: string; items: string[] }[] = [
  { group: 'Clothing', items: ['To be confirmed'] },
  { group: 'Sleep & Shelter', items: ['To be confirmed'] },
  { group: 'Navigation', items: ['To be confirmed'] },
  { group: 'Personal', items: ['To be confirmed'] },
]

export const survivalFaq = [
  {
    q: 'What is the Survival challenge?',
    a: 'A four-day supervised wilderness experience combining survival learning, navigation, adaptation, endurance and problem solving.',
  },
  {
    q: 'How many people can take part?',
    a: 'Participation is limited to 12 people so the experience stays supervised and personal.',
  },
  {
    q: 'What is included in the price?',
    a: 'Transportation, food and water, survival equipment when applicable, instructor guidance, event support and safety support.',
  },
  {
    q: 'What do I receive if I complete all four days?',
    a: 'Finishers receive the AD ASTRA Finisher Medal, the Official Finisher T-Shirt and a Finisher Certificate.',
  },
  {
    q: 'Where and when does it take place?',
    a: 'The official route and dates will be announced soon. Check back or follow AD ASTRA for updates.',
  },
  {
    q: 'What do I need to bring?',
    a: 'The equipment list is being finalised and will be published on this page before the event.',
  },
  {
    q: 'Do I need previous experience?',
    a: 'Requirements are being finalised and will be published on this page.',
  },
]
