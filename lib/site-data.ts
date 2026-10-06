export type Stat = { value: string; label: string }

export type Challenge = {
  id: string
  number: string
  category: string
  title: string
  motto: string
  description: string
  stats: Stat[]
  price?: string
  image: string
  imageAlt: string
  href: string
}

export const navLinks = [
  { label: 'Challenges', href: '/challenges' },
  { label: 'Next Event', href: '#next-event' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

export const heroStats: Stat[] = [
  { value: '04', label: 'Challenges' },
  { value: '12', label: 'Survival Spots' },
  { value: '€300', label: 'Last One Out' },
]

export const challenges: Challenge[] = [
  {
    id: 'backyard',
    number: '01',
    category: 'Backyard',
    title: 'Last Runner Standing',
    motto: 'Run. Recover. Repeat.',
    description:
      'Complete one 6.706 km lap every hour. Rest. Return to the line. Repeat until only one runner remains.',
    stats: [
      { value: '6.706 KM', label: 'Per lap' },
      { value: '1 Lap', label: 'Every hour' },
      { value: '1', label: 'Winner' },
    ],
    image: '/images/backyard.png',
    imageAlt: 'Runners with headlamps on a forest trail loop at night',
    href: '#',
  },
  {
    id: 'survival',
    number: '02',
    category: 'Survival',
    title: '4 Days in the Wild',
    motto: 'Learn. Adapt. Endure.',
    description:
      'A four-day supervised wilderness experience combining survival learning, navigation, endurance, adaptability and problem-solving.',
    stats: [
      { value: '4', label: 'Days' },
      { value: '12', label: 'Participants max' },
      { value: 'Limited', label: 'Places' },
    ],
    price: 'From €269',
    image: '/images/survival.png',
    imageAlt: 'A small group around a campfire in a misty forest',
    href: '/challenges/survival',
  },
  {
    id: 'urban',
    number: '03',
    category: 'Urban',
    title: 'The City Is Your Playground',
    motto: 'Run. Think. Explore.',
    description:
      'Navigate the city, solve clues, complete missions and outsmart the competition.',
    stats: [
      { value: '1', label: 'City' },
      { value: 'Multiple', label: 'Missions' },
      { value: '1', label: 'Winner' },
    ],
    image: '/images/urban.png',
    imageAlt: 'A runner sprinting through wet cobblestone streets at night',
    href: '#',
  },
  {
    id: 'last-one-out',
    number: '04',
    category: 'Last One Out',
    title: "Stay. Don't Quit.",
    motto: 'Stay until everyone else is gone.',
    description:
      "Enter the circle. Follow the rules. Complete the challenges. Leave and you're out. The last person remaining wins €300.",
    stats: [
      { value: '100', label: 'Players' },
      { value: '€300', label: 'Prize' },
      { value: '1', label: 'Winner' },
    ],
    image: '/images/last-one-out.png',
    imageAlt: 'A crowd standing inside a painted circle under floodlights',
    href: '#',
  },
]

/**
 * Edit this object to announce the next event.
 * Set `countdownTarget` to an ISO date string, or `null` to show placeholder zeros.
 */
export const nextEvent = {
  details: [
    { label: 'Event', value: 'Coming Soon' },
    { label: 'Date', value: 'TBA' },
    { label: 'Location', value: 'TBA' },
    { label: 'Spots', value: 'TBA' },
    { label: 'Prize', value: 'TBA' },
  ],
  countdownTarget: '2026-12-05T08:00:00Z' as string | null,
  ctaLabel: 'Secure Your Spot',
  ctaHref: '#',
}

export const principles = [
  { number: 'I', title: 'Endurance', text: 'Keep moving when your body asks you to stop.' },
  { number: 'II', title: 'Courage', text: 'Step into the unknown and stay there.' },
  { number: 'III', title: 'Strategy', text: 'Think clearly when everything gets hard.' },
  { number: 'IV', title: 'Adaptability', text: 'Change the plan. Never the purpose.' },
]

export const finisherRewards = [
  { title: 'Finisher Medal', image: '/images/medal.png', alt: 'Matte black AD ASTRA finisher medal on dark stone' },
  { title: 'Official T-Shirt', image: '/images/tshirt.png', alt: 'Folded black AD ASTRA finisher t-shirt' },
  { title: 'Finisher Certificate', image: '/images/certificate.png', alt: 'AD ASTRA finisher certificate on dark stone' },
]

export const survivalIncludes = [
  'Transportation',
  'Food & Water',
  'Instructor Guidance',
  'Event Support',
  'Safety Support',
]

export const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'TikTok', href: '#' },
  { label: 'YouTube', href: '#' },
]

export const footerLinks = [
  ...navLinks,
  { label: 'Contact', href: '#contact' },
]

export const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Cookie Policy', href: '#' },
]
