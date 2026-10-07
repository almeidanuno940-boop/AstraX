import { challenges } from '@/lib/site-data'
import { ChallengeCard } from './challenge-card'
import { Reveal, RevealLines } from './reveal'

export function ChallengeSection() {
  return (
    <section id="challenges" className="scroll-mt-16 bg-background" aria-labelledby="challenges-heading">
      <div className="mx-auto max-w-[1600px] px-5 pt-24 md:px-10 md:pt-36">
        <div className="flex flex-col gap-8 pb-12 md:flex-row md:items-end md:justify-between md:pb-16">
          <div>
            <Reveal className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Os desafios — {String(challenges.length).padStart(2, '0')}
            </Reveal>
            <RevealLines
              id="challenges-heading"
              lines={['Escolhe o', 'teu desafio']}
              className="font-display text-6xl uppercase leading-[0.88] sm:text-8xl lg:text-9xl"
            />
          </div>
          <Reveal delay={200} className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Resistência. Sobrevivência. Cidade. Extremo. Cada formato foi pensado para encontrar o ponto exato em que
            queres parar — e levar-te mais além.
          </Reveal>
        </div>

        {challenges.map((challenge, i) => (
          <ChallengeCard key={challenge.id} challenge={challenge} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  )
}
