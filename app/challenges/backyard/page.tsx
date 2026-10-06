import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const howItWorks = [
  {
    number: "01",
    title: "COMEÇA",
    description:
      "Todos os participantes alinham-se antes do início de cada hora.",
  },
  {
    number: "02",
    title: "CORRE",
    description:
      "Tens 60 minutos para completar os 6,706 km do percurso.",
  },
  {
    number: "03",
    title: "RECUPERA",
    description:
      "Depois de completares a volta, tens o tempo restante para recuperar.",
  },
  {
    number: "04",
    title: "REPETE",
    description:
      "Quando a hora seguinte começa, estás novamente na linha de partida.",
  },
]

const rules = [
  "Cada volta tem 6,706 km.",
  "Cada volta deve ser concluída dentro de 60 minutos.",
  "É necessário estar na linha de partida no início da hora seguinte.",
  "Quem não completar a volta dentro do tempo é eliminado.",
  "A competição continua até restar apenas um participante.",
]

const included = [
  "Acesso ao evento",
  "Percurso marcado",
  "Cronometragem",
  "Pontos de apoio definidos pela organização",
  "Classificação final",
  "Medalha de Finisher para quem completar o desafio",
]

export default function BackyardPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative min-h-[92vh] overflow-hidden bg-[#080808]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,92,46,0.12),transparent_35%),linear-gradient(135deg,#111111_0%,#050505_60%,#090909_100%)]" />

          <div className="absolute inset-0 opacity-30">
            <div className="absolute left-[8%] top-[22%] h-px w-32 bg-orange-500" />
            <div className="absolute right-[10%] top-[28%] h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute bottom-[12%] left-[38%] h-80 w-80 rounded-full border border-white/5" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-end px-6 pb-16 pt-32 md:pb-24">
            <div className="w-full">
              <div className="mb-8 flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-white/50">
                <span className="h-px w-12 bg-orange-500" />
                DESAFIO 01
              </div>

              <p className="mb-5 text-sm uppercase tracking-[0.4em] text-orange-500">
                AD ASTRA
              </p>

              <h1 className="max-w-6xl text-7xl font-black uppercase leading-[0.82] tracking-[-0.05em] sm:text-8xl md:text-[9rem]">
                BACKYARD
              </h1>

              <p className="mt-7 text-xl uppercase tracking-[0.18em] text-white/75 md:text-3xl">
                ÚLTIMO CORREDOR EM PROVA
              </p>

              <div className="mt-14 grid max-w-5xl grid-cols-3 border-t border-white/15 pt-6">
                <div>
                  <div className="text-3xl font-black md:text-6xl">6,706</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/40 md:text-xs">
                    KM / VOLTA
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-black md:text-6xl">60</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/40 md:text-xs">
                    MINUTOS
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
                CORRE.
                <br />
                DESCANSA.
                <br />
                REPETE.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-white/70 md:text-2xl">
                O Backyard é uma prova de resistência onde o objetivo não é
                apenas correr depressa, mas continuar a aparecer hora após
                hora.
              </p>

              <p className="mt-7 text-lg leading-relaxed text-white/45 md:text-xl">
                A cada hora começa uma nova volta de 6,706 km. Completa-a
                dentro do tempo, recupera e prepara-te para a seguinte.
              </p>

              <p className="mt-7 text-lg leading-relaxed text-white/45 md:text-xl">
                Falha uma volta e estás fora. No final, só um participante
                pode ficar.
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
                UMA REGRA.
                <br />
                REPETIDAMENTE.
              </h2>
            </div>

            <div className="grid gap-px bg-white/10 md:grid-cols-2">
              {howItWorks.map((step) => (
                <article key={step.number} className="bg-[#0a0a0a] p-8 md:p-12">
                  <div className="flex items-start justify-between">
                    <span className="text-6xl font-black text-white/10">
                      {step.number}
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.3em] text-orange-500">
                      ETAPA
                    </span>
                  </div>

                  <h3 className="mt-12 text-3xl font-black uppercase md:text-5xl">
                    {step.title}
                  </h3>

                  <p className="mt-5 max-w-xl leading-relaxed text-white/50 md:text-lg">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COURSE */}
        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[0.7fr_1.3fr] md:py-32">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                O PERCURSO
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.03em] md:text-7xl">
                6,706 KM
                <br />
                A CADA
                <br />
                HORA
              </h2>

              <p className="mt-7 max-w-md leading-relaxed text-white/50 md:text-lg">
                O percurso oficial, altimetria e informação detalhada serão
                divulgados pela organização.
              </p>
            </div>

            <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden border border-white/10 bg-[#0a0a0a]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,92,46,0.08),transparent_45%)]" />

              <div className="relative z-10 text-center">
                <div className="mx-auto mb-6 h-px w-16 bg-orange-500" />
                <p className="text-xs uppercase tracking-[0.35em] text-white/30">
                  PERCURSO OFICIAL
                </p>

                <p className="mt-3 text-2xl font-black uppercase md:text-4xl">
                  EM BREVE
                </p>

                <p className="mt-4 text-sm text-white/35">
                  Mapa · Altimetria · GPX
                </p>
              </div>
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
                NÃO HÁ
                <br />
                DESCULPAS.
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

                  <p className="max-w-3xl text-sm uppercase leading-relaxed tracking-wide text-white/75 md:text-base">
                    {rule}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT IS INCLUDED */}
        <section className="border-y border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                O QUE RECEBES
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
                TUDO O QUE
                <br />
                PRECISAS.
              </h2>
            </div>

            <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2">
              {included.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-6 bg-[#050505] p-8 md:p-10"
                >
                  <span className="text-xs font-bold text-orange-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm font-semibold uppercase tracking-wide text-white/80 md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINISHER */}
        <section className="border-b border-white/10 bg-[#0a0a0a]">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                FINISHER
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.88] tracking-[-0.03em] md:text-7xl">
                CONTINUA.
                <br />
                AGUENTA.
                <br />
                TERMINA.
              </h2>

              <p className="mt-7 max-w-xl leading-relaxed text-white/50 md:text-lg">
                Completa o desafio e recebe a medalha oficial de Finisher
                AD ASTRA.
              </p>
            </div>

            <div className="border border-white/10 bg-[#050505] p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-orange-500">
                RECOMPENSA
              </p>

              <h3 className="mt-5 text-4xl font-black uppercase md:text-6xl">
                MEDALHA
                <br />
                FINISHER
              </h3>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/45">
                Uma recordação oficial para quem conseguiu chegar ao fim do
                desafio.
              </p>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="mb-14">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                INSCRIÇÃO
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
                ENTRA EM
                <br />
                PROVA.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="border border-white/10 bg-[#0a0a0a] p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                  EARLY BIRD
                </p>

                <p className="mt-6 text-5xl font-black">20 €</p>

                <p className="mt-4 text-sm text-white/40">
                  Primeiras vagas disponíveis.
                </p>
              </div>

              <div className="border border-orange-500 bg-orange-500 p-8 text-black">
                <p className="text-xs font-bold uppercase tracking-[0.25em]">
                  PREÇO NORMAL
                </p>

                <p className="mt-6 text-5xl font-black">25 €</p>

                <p className="mt-4 text-sm text-black/70">
                  Preço normal de inscrição.
                </p>
              </div>

              <div className="border border-white/10 bg-[#0a0a0a] p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                  ÚLTIMAS VAGAS
                </p>

                <p className="mt-6 text-5xl font-black">30 €</p>

                <p className="mt-4 text-sm text-white/40">
                  Aplicável às últimas vagas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="inscricao" className="bg-orange-500 px-6 py-24 text-black md:py-32">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-black uppercase tracking-[0.35em]">
              AD ASTRA BACKYARD
            </p>

            <h2 className="mt-5 max-w-5xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.04em] md:text-[8rem]">
              QUANTAS
              <br />
              HORAS
              <br />
              AGUENTAS?
            </h2>

            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
              <button className="bg-black px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-white hover:text-black">
                Inscreve-te
              </button>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em]">
                  Preço normal
                </p>

                <p className="text-3xl font-black">25 €</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}