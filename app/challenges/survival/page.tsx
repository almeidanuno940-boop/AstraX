import type { Metadata } from 'next'
import { EquipmentSection } from '@/components/survival/equipment-section'
import { FaqSection } from '@/components/survival/faq-section'
import { FourDaysSection } from '@/components/survival/four-days-section'
import { IncludedSection } from '@/components/survival/included-section'
import { MissionSection } from '@/components/survival/mission-section'
import { RequirementsSection } from '@/components/survival/requirements-section'
import { RouteSection } from '@/components/survival/route-section'
import { SafetySection } from '@/components/survival/safety-section'
import { SurvivalCTA } from '@/components/survival/survival-cta'
import { SurvivalFinisher } from '@/components/survival/survival-finisher'
import { SurvivalFooter } from '@/components/survival/survival-footer'
import { SurvivalHero } from '@/components/survival/survival-hero'
import { SurvivalNav } from '@/components/survival/survival-nav'

export const metadata: Metadata = {
  title: 'Survival — 4 Days in the Wild | AD ASTRA',
  description:
    'A four-day supervised wilderness experience combining survival learning, navigation, adaptation, endurance and problem solving. 12 participants max. €299.',
  openGraph: {
    title: 'Survival — 4 Days in the Wild | AD ASTRA',
    description: 'Learn. Adapt. Endure. Survive. Only 12 spots.',
    images: ['/images/survival.png'],
  },
}

export default function SurvivalPage() {
  return (
    <>
      <SurvivalNav />
      <main>
        <SurvivalHero />
        <MissionSection />
        <FourDaysSection />
        <RouteSection />
        <IncludedSection />
        <SurvivalFinisher />
        <RequirementsSection />
        <EquipmentSection />
        <SafetySection />
        <FaqSection />
        <SurvivalCTA />
      </main>
      <SurvivalFooter />
    </>
  )
}
