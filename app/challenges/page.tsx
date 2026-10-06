import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const challenges = [
  {
    number: "01",
    title: "BACKYARD",
    subtitle: "ÚLTIMO CORREDOR EM PROVA",
    description:
      "6,706 km a cada hora. Corre, recupera e volta à linha de partida. Continua até restar apenas um.",
    stats: ["6,706 KM", "60 MIN", "1 VENCEDOR"],
    href: "/challenges/backyard",
  },
  {
    number: "02",
    title: "SURVIVAL",
    subtitle: "4 DIAS NA NATUREZA",
    description:
      "Quatro dias de aprendizagem, adaptação, orientação, resistência e desafios supervisionados.",
    stats: ["4 DIAS", "12 PARTICIPANTES", "299 €"],
    href: "/challenges/survival",
  },
  {
    number: "03",
    title: "URBAN",
    subtitle: "A CIDADE É O TEU CAMPO DE JOGO",
    description:
      "Corre, resolve pistas, encontra checkpoints e acumula pontos numa competição urbana por equipas.",
    stats: ["1 CIDADE", "VÁRIAS MISSÕES", "1 VENCEDOR"],
    href: "/challenges/urban",
  },
  {
    number: "04",
    title: "LAST ONE OUT",
    subtitle: "FICA. RESISTE. VENCE.",
    description:
      "100 participantes. Um círculo. Um prémio de 300 €. O último a permanecer vence.",
    stats: ["100 PARTICIPANTES", "300 €", "1 VENCEDOR"],
    href: "/challenges/last-one-out",
  },
]

export default function ChallengesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 pb-20 pt-40 md:pb-28">
            <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
              AD ASTRA
            </p>

            <h1 className="mt-6 max-w-5xl text-6xl font-black uppercase leading-[0.85] tracking-[-0.04em] md:text-8xl">
              ESCOLHE O TEU
              <br />
              DESAFIO.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
              Quatro formas diferentes de te colocares à prova.
            </p>
          </div>
        </section>

        {/* CHALLENGES */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="space-y-px bg-white/10">
              {challenges.map((challenge) => (
                <a
                  key={challenge.number}
                  href={challenge.href}
                  className="group block bg-[#050505] p-8 transition-colors hover:bg-[#0b0b0b] md:p-12"
                >
                  <div className="grid gap-10 md:grid-cols-[100px_1fr_auto] md:items-center">
                    <span className="text-5xl font-black text-white/10 md:text-6xl">
                      {challenge.number}
                    </span>

                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-orange-500">
                        {challenge.subtitle}
                      </p>

                      <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.03em] md:text-6xl">
                        {challenge.title}
                      </h2>

                      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/45 md:text-base">
                        {challenge.description}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-6">
                        {challenge.stats.map((stat) => (
                          <span
                            key={stat}
                            className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50"
                          >
                            {stat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em]">
                      <span>Ver desafio</span>
                      <span className="text-orange-500 transition-transform group-hover:translate-x-2">
                        →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-500 px-6 py-24 text-black md:py-32">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-black uppercase tracking-[0.35em]">
              AD ASTRA
            </p>

            <h2 className="mt-5 max-w-5xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.04em] md:text-[8rem]">
              QUAL É
              <br />
              O TEU?
            </h2>

            <a
              href="/"
              className="mt-10 inline-flex bg-black px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black"
            >
              Voltar à homepage
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}