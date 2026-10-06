import { ChallengeSection } from '@/components/challenge-section'
import { CTASection } from '@/components/cta-section'
import { FinisherSection } from '@/components/finisher-section'
import { Footer } from '@/components/footer'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { NextEvent } from '@/components/next-event'
import { WhySection } from '@/components/why-section'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ChallengeSection />
        <NextEvent />
        <WhySection />
        <FinisherSection />
        <Gallery />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
