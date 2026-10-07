import { challenges } from '@/lib/site-data'
import { ChallengeCard } from './challenge-card'
import { Reveal, RevealLines } from './reveal'

export function ChallengeSection() {
  return (
    <section id="challenges" className="scroll-mt-0 bg-background" aria-labelledby="challenges-heading">
      <div className="mx-auto max-w-[1600px] px-5 pb-16 pt-28 md:px-10 md:pb-24 md:pt-44">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal className="eyebrow mb-6">Os desafios — {String(challenges.length).padStart(2, '0')}</Reveal>
            <RevealLines
              id="challenges-heading"
              lines={['Escolhe o', 'teu desafio']}
              className="font-display text-[15vw] uppercase leading-[0.86] sm:text-[11vw] lg:text-[9vw]"
            />
          </div>
          <Reveal delay={200} className="max-w-sm text-pretty leading-relaxed text-muted-foreground md:text-lg">
            Resistência. Sobrevivência. Cidade. Extremo. Cada formato foi pensado para encontrar o ponto exato em que
            queres parar — e levar-te mais além.
          </Reveal>
        </div>
      </div>

      {challenges.map((challenge, i) => (
        <ChallengeCard key={challenge.id} challenge={challenge} reverse={i % 2 === 1} />
      ))}
    </section>
  )
}
