import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const missions = [
  {
    number: "01",
    title: "CORRE",
    description:
      "Chega ao checkpoint dentro do tempo e continua a missão.",
  },
  {
    number: "02",
    title: "PENSA",
    description:
      "Resolve pistas e desafios que vão testar a tua capacidade de raciocínio.",
  },
  {
    number: "03",
    title: "ENCONTRA",
    description:
      "Descobre os locais certos através de pistas espalhadas pela cidade.",
  },
  {
    number: "04",
    title: "DECIDE",
    description:
      "Escolhe o teu caminho. Nem sempre o percurso mais curto será a melhor opção.",
  },
]

const rules = [
  "As equipas devem permanecer dentro da área definida pela organização.",
  "Cada missão concluída atribui pontos à equipa.",
  "Algumas missões podem ter um limite de tempo.",
  "As instruções da organização devem ser respeitadas durante todo o evento.",
  "A classificação final é determinada pela pontuação definida para o evento.",
]

const features = [
  "Checkpoints pela cidade",
  "Missões físicas e mentais",
  "Pistas e enigmas",
  "Sistema de pontuação",
  "Competição por equipas",
  "Classificação final",
]

export default function UrbanPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative min-h-[92vh] overflow-hidden bg-[#080808]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,92,46,0.14),transparent_32%),linear-gradient(135deg,#101010_0%,#050505_60%,#090909_100%)]" />

          <div className="absolute inset-0 opacity-25">
            <div className="absolute left-[8%] top-[22%] h-px w-32 bg-orange-500" />

            <div className="absolute right-[9%] top-[26%] h-64 w-64 rounded-full border border-white/10" />

            <div className="absolute right-[18%] top-[36%] h-28 w-28 rounded-full border border-white/5" />

            <div className="absolute bottom-[14%] left-[35%] h-80 w-80 rounded-full border border-white/5" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-end px-6 pb-16 pt-32 md:pb-24">
            <div className="w-full">
              <div className="mb-8 flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-white/50">
                <span className="h-px w-12 bg-orange-500" />
                DESAFIO 03
              </div>

              <p className="mb-5 text-sm uppercase tracking-[0.4em] text-orange-500">
                AD ASTRA
              </p>

              <h1 className="max-w-6xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[8.5rem]">
                URBAN
              </h1>

              <p className="mt-4 text-2xl font-black uppercase tracking-[-0.02em] md:text-5xl">
                CHALLENGE
              </p>

              <p className="mt-7 max-w-2xl text-lg uppercase tracking-[0.14em] text-white/70 md:text-2xl">
                A CIDADE É O TEU CAMPO DE JOGO
              </p>

              <div className="mt-14 grid max-w-5xl grid-cols-3 border-t border-white/15 pt-6">
                <div>
                  <div className="text-3xl font-black md:text-6xl">1</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/40 md:text-xs">
                    CIDADE
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-black md:text-6xl">∞</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/40 md:text-xs">
                    MISSÕES
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

        {/* MISSION */}
        <section className="border-t border-white/10">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:py-32">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-orange-500">
                A MISSÃO
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.03em] md:text-7xl">
                A CIDADE.
                <br />
                AS PISTAS.
                <br />
                A PROVA.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-white/70 md:text-2xl">
                O Urban Challenge transforma a cidade num enorme campo de
                jogo.
              </p>

              <p className="mt-7 text-lg leading-relaxed text-white/45 md:text-xl">
                Trabalha em equipa, segue as pistas, encontra checkpoints,
                resolve desafios e acumula pontos ao longo da missão.
              </p>

              <p className="mt-7 text-lg leading-relaxed text-white/45 md:text-xl">
                Não basta correr. Tens de pensar, decidir e adaptar-te.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="border-y border-white/10 bg-[#0a0a0a]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="mb-16 max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                COMO FUNCIONA
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase leading-none tracking-[-0.03em] md:text-7xl">
                CORRE.
                <br />
                PENSA.
                <br />
                DECIDE.
              </h2>
            </div>

            <div className="grid gap-px bg-white/10 md:grid-cols-2">
              {missions.map((mission) => (
                <article
                  key={mission.number}
                  className="bg-[#0a0a0a] p-8 md:p-12"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-6xl font-black text-white/10">
                      {mission.number}
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.3em] text-orange-500">
                      MISSÃO
                    </span>
                  </div>

                  <h3 className="mt-12 text-3xl font-black uppercase md:text-5xl">
                    {mission.title}
                  </h3>

                  <p className="mt-5 max-w-xl leading-relaxed text-white/50 md:text-lg">
                    {mission.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* THE CITY */}
        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[0.7fr_1.3fr] md:py-32">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                O CAMPO DE JOGO
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.03em] md:text-7xl">
                UMA
                <br />
                CIDADE.
                <br />
                MIL
                <br />
                POSSIBILIDADES.
              </h2>

              <p className="mt-7 max-w-md leading-relaxed text-white/50 md:text-lg">
                A localização e o percurso oficial serão divulgados pela
                organização.
              </p>
            </div>

            <div className="relative flex min-h-[450px] items-center justify-center overflow-hidden border border-white/10 bg-[#0a0a0a]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

              <div className="absolute left-[15%] top-[20%] h-px w-[70%] rotate-[18deg] bg-orange-500/30" />

              <div className="absolute left-[18%] top-[58%] h-px w-[64%] rotate-[-12deg] bg-white/10" />

              <div className="absolute left-[30%] top-[30%] h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_25px_rgba(255,92,46,0.5)]" />
              <div className="absolute left-[54%] top-[48%] h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_25px_rgba(255,92,46,0.5)]" />
              <div className="absolute left-[73%] top-[65%] h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_25px_rgba(255,92,46,0.5)]" />

              <div className="relative z-10 text-center">
                <div className="mx-auto mb-6 h-px w-16 bg-orange-500" />

                <p className="text-xs uppercase tracking-[0.35em] text-white/30">
                  MAPA OFICIAL
                </p>

                <p className="mt-3 text-2xl font-black uppercase md:text-4xl">
                  EM BREVE
                </p>

                <p className="mt-4 text-sm text-white/35">
                  Cidade · Checkpoints · Missões
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-[#0a0a0a]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                A EXPERIÊNCIA
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
                MAIS DO QUE
                <br />
                UMA CORRIDA.
              </h2>
            </div>

            <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-6 bg-[#0a0a0a] p-8 md:p-10"
                >
                  <span className="text-xs font-bold text-orange-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/80 md:text-base">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCORING */}
        <section className="border-y border-white/10">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:py-32">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                PONTUAÇÃO
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] md:text-7xl">
                CADA
                <br />
                DECISÃO
                <br />
                CONTA.
              </h2>
            </div>

            <div className="max-w-2xl">
              <div className="border-t border-white/10">
                <div className="flex items-center justify-between border-b border-white/10 py-6">
                  <span className="text-sm uppercase tracking-wide text-white/50">
                    MISSÃO CONCLUÍDA
                  </span>
                  <span className="text-2xl font-black text-orange-500">
                    +PTS
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 py-6">
                  <span className="text-sm uppercase tracking-wide text-white/50">
                    CHECKPOINT
                  </span>
                  <span className="text-2xl font-black text-orange-500">
                    +PTS
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 py-6">
                  <span className="text-sm uppercase tracking-wide text-white/50">
                    BÓNUS
                  </span>
                  <span className="text-2xl font-black text-orange-500">
                    +PTS
                  </span>
                </div>
              </div>

              <p className="mt-8 text-sm leading-relaxed text-white/35">
                O sistema de pontuação definitivo será apresentado antes de
                cada edição.
              </p>
            </div>
          </div>
        </section>

        {/* RULES */}
        <section className="bg-[#0a0a0a]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                REGRAS
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
                JOGA.
                <br />
                COMPETE.
                <br />
                RESPEITA.
              </h2>
            </div>

            <div className="mt-14 border-t border-white/10">
              {rules.map((rule, index) => (
                <div
                  key={rule}
                  className="flex gap-6 border-b border-white/10 py-7 md:py-8"
                >
                  <span className="text-xs font-bold text-orange-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="max-w-4xl text-sm leading-relaxed text-white/70 md:text-base">
                    {rule}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="border-y border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="mb-14">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                INSCRIÇÃO
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
                ENTRA EM
                <br />
                JOGO.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="border border-white/10 bg-[#0a0a0a] p-8">
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

              <div className="border border-white/10 bg-[#0a0a0a] p-8">
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

        {/* CTA */}
        <section
          id="inscricao"
          className="bg-orange-500 px-6 py-24 text-black md:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-black uppercase tracking-[0.35em]">
              AD ASTRA URBAN CHALLENGE
            </p>

            <h2 className="mt-5 max-w-5xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.04em] md:text-[8rem]">
              A CIDADE
              <br />
              ESPERA
              <br />
              POR TI.
            </h2>

            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
              <button className="bg-black px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-white hover:text-black">
                Inscreve-te
              </button>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em]">
                  Preço normal
                </p>

                <p className="text-3xl font-black">20 €</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}