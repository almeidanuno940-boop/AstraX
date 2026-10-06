import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const rules = [
  {
    number: "01",
    title: "ENTRA",
    description:
      "Todos os participantes entram na área definida para o desafio antes do início.",
  },
  {
    number: "02",
    title: "FICA",
    description:
      "Enquanto permaneceres dentro do círculo e cumprires as regras, continuas em prova.",
  },
  {
    number: "03",
    title: "RESISTE",
    description:
      "Ao longo do desafio podem surgir novas provas, decisões e situações inesperadas.",
  },
  {
    number: "04",
    title: "NÃO SAIS",
    description:
      "Sair do círculo significa abandonar a competição e perder a oportunidade de vencer o prémio.",
  },
]

const experience = [
  "100 participantes",
  "1 círculo",
  "Desafios ao longo do evento",
  "Eliminação progressiva",
  "Prémio monetário",
  "1 vencedor",
]

export default function LastOneOutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative min-h-[92vh] overflow-hidden bg-[#080808]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(255,92,46,0.16),transparent_30%),linear-gradient(135deg,#111111_0%,#050505_58%,#090909_100%)]" />

          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-[28%] h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-orange-500/30 md:h-[520px] md:w-[520px]" />

            <div className="absolute left-1/2 top-[28%] h-[300px] w-[300px] -translate-x-1/2 rounded-full border border-white/10 md:h-[390px] md:w-[390px]" />

            <div className="absolute left-[8%] top-[24%] h-px w-32 bg-orange-500/70" />

            <div className="absolute right-[8%] bottom-[20%] h-px w-24 bg-orange-500/30" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-end px-6 pb-16 pt-32 md:pb-24">
            <div className="w-full">
              <div className="mb-8 flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-white/50">
                <span className="h-px w-12 bg-orange-500" />
                DESAFIO 04
              </div>

              <p className="mb-5 text-sm uppercase tracking-[0.4em] text-orange-500">
                AD ASTRA
              </p>

              <h1 className="max-w-6xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[8rem]">
                LAST ONE
              </h1>

              <p className="mt-2 text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-8xl">
                OUT
              </p>

              <p className="mt-7 text-xl uppercase tracking-[0.16em] text-white/70 md:text-3xl">
                FICA. RESISTE. VENCE.
              </p>

              {/* MAIN STATS */}
              <div className="mt-14 grid max-w-5xl grid-cols-3 border-t border-white/15 pt-6">
                <div>
                  <div className="text-3xl font-black md:text-6xl">100</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/40 md:text-xs">
                    PARTICIPANTES
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-black md:text-6xl">300 €</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/40 md:text-xs">
                    PRÉMIO
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-black md:text-6xl">1</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/40 md:text-xs">
                    VENCEDOR
                  </div>
                </div>
              </div>

              <a
                href="#inscricao"
                className="mt-10 inline-flex items-center gap-6 bg-orange-500 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition-all hover:gap-8 hover:bg-white"
              >
                Inscreve-te
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* THE CHALLENGE */}
        <section className="border-t border-white/10">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:py-32">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-orange-500">
                O DESAFIO
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.03em] md:text-7xl">
                FICA
                <br />
                DENTRO.
                <br />
                NÃO DESISTAS.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-white/70 md:text-2xl">
                Cem participantes entram. Apenas um pode vencer.
              </p>

              <p className="mt-7 text-lg leading-relaxed text-white/45 md:text-xl">
                O objetivo é simples: permanecer dentro do círculo e continuar
                em prova enquanto os outros participantes vão sendo
                eliminados.
              </p>

              <p className="mt-7 text-lg leading-relaxed text-white/45 md:text-xl">
                A verdadeira dificuldade começa quando o tempo passa e a
                vontade de sair aumenta.
              </p>
            </div>
          </div>
        </section>

        {/* PRIZE */}
        <section className="border-y border-white/10 bg-[#0a0a0a]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="grid gap-14 md:grid-cols-[0.7fr_1.3fr] md:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                  O PRÉMIO
                </p>

                <h2 className="mt-5 text-5xl font-black uppercase leading-[0.88] md:text-8xl">
                  300 €
                </h2>

                <p className="mt-6 max-w-md text-lg leading-relaxed text-white/50">
                  O último participante dentro do círculo conquista o prémio
                  de 300 €.
                </p>
              </div>

              <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden border border-orange-500/20 bg-[#050505]">
                <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/20 md:h-[320px] md:w-[320px]" />

                <div className="relative z-10 text-center">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                    PRÉMIO FINAL
                  </p>

                  <p className="mt-4 text-6xl font-black md:text-8xl">
                    300 €
                  </p>

                  <p className="mt-4 text-xs uppercase tracking-[0.25em] text-orange-500">
                    1 VENCEDOR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="mb-16 max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                COMO FUNCIONA
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase leading-none tracking-[-0.03em] md:text-7xl">
                UMA REGRA
                <br />
                SIMPLES.
              </h2>
            </div>

            <div className="grid gap-px bg-white/10 md:grid-cols-2">
              {rules.map((rule) => (
                <article
                  key={rule.number}
                  className="bg-[#050505] p-8 md:p-12"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-6xl font-black text-white/10">
                      {rule.number}
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.3em] text-orange-500">
                      REGRA
                    </span>
                  </div>

                  <h3 className="mt-12 text-3xl font-black uppercase md:text-5xl">
                    {rule.title}
                  </h3>

                  <p className="mt-5 max-w-xl leading-relaxed text-white/50 md:text-lg">
                    {rule.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="bg-[#0a0a0a]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                A EXPERIÊNCIA
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
                NÃO É
                <br />
                PARA TODOS.
              </h2>
            </div>

            <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
              {experience.map((item, index) => (
                <div
                  key={item}
                  className="bg-[#0a0a0a] p-8 md:p-10"
                >
                  <span className="text-xs font-bold text-orange-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-10 text-sm font-semibold uppercase tracking-[0.08em] text-white/80 md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TWISTS */}
        <section className="border-y border-white/10">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:py-32">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                O IMPREVISTO
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] md:text-7xl">
                O JOGO
                <br />
                PODE
                <br />
                MUDAR.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-white/60 md:text-xl">
                Ao longo do evento podem surgir novos desafios, decisões,
                recompensas ou alterações às condições da competição.
              </p>

              <div className="mt-10 border-l border-orange-500 pl-6">
                <p className="text-sm uppercase tracking-[0.16em] text-white/70">
                  As regras definitivas serão apresentadas antes do início do
                  evento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="border-b border-white/10 bg-[#0a0a0a]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="mb-14">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                INSCRIÇÃO
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
                ENTRA.
                <br />
                FICA.
                <br />
                VENCE.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="border border-white/10 bg-[#050505] p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                  EARLY BIRD
                </p>

                <p className="mt-6 text-5xl font-black">15 €</p>

                <p className="mt-4 text-sm text-white/40">
                  Primeiras vagas disponíveis.
                </p>
              </div>

              <div className="border border-orange-500 bg-orange-500 p-8 text-black">
                <p className="text-xs font-bold uppercase tracking-[0.25em]">
                  PREÇO NORMAL
                </p>

                <p className="mt-6 text-5xl font-black">20 €</p>

                <p className="mt-4 text-sm text-black/70">
                  Preço normal de inscrição.
                </p>
              </div>

              <div className="border border-white/10 bg-[#050505] p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                  ÚLTIMAS VAGAS
                </p>

                <p className="mt-6 text-5xl font-black">25 €</p>

                <p className="mt-4 text-sm text-white/40">
                  Aplicável às últimas vagas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          id="inscricao"
          className="bg-orange-500 px-6 py-24 text-black md:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-black uppercase tracking-[0.35em]">
              AD ASTRA — LAST ONE OUT
            </p>

            <h2 className="mt-5 max-w-6xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.04em] md:text-[8rem]">
              QUEM VAI
              <br />
              SER O
              <br />
              ÚLTIMO?
            </h2>

            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
              <button className="bg-black px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-white hover:text-black">
                Inscreve-te
              </button>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em]">
                  Prémio
                </p>

                <p className="text-3xl font-black">300 €</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}