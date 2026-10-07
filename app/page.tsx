import { ChallengeSection } from '@/components/challenge-section'
import { CTASection } from '@/components/cta-section'
import { FaqSection } from '@/components/faq-section'
import { FinisherSection } from '@/components/finisher-section'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { NextEvent } from '@/components/next-event'
import { WhySection } from '@/components/why-section'

export default function Home() {
  return (
    <>
      <Hero />
      <ChallengeSection />
      <NextEvent />
      <WhySection />
      <FinisherSection />
      <Gallery />
      <FaqSection />
      <CTASection />
    </>
  )
}
