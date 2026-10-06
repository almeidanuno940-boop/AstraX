import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const days = [
  {
    number: "01",
    title: "APRENDER",
    description:
      "Conhece o ambiente, aprende os fundamentos e prepara-te para os desafios dos dias seguintes.",
  },
  {
    number: "02",
    title: "ADAPTAR",
    description:
      "Aplica o que aprendeste através de desafios supervisionados que exigem capacidade de adaptação e decisão.",
  },
  {
    number: "03",
    title: "RESISTIR",
    description:
      "Navegação, resistência física, missões e tomada de decisões num ambiente exigente.",
  },
  {
    number: "04",
    title: "CONCLUIR",
    description:
      "A missão final. Quatro dias completos. Um estatuto de Finisher conquistado.",
  },
]

const included = [
  "Transporte",
  "Alimentação e água",
  "Equipamento de sobrevivência, quando aplicável",
  "Acompanhamento de instrutores",
  "Apoio durante o evento",
  "Apoio de segurança",
]

const requirements = [
  "Boa condição física",
  "Capacidade de trabalhar em equipa",
  "Disponibilidade para 4 dias completos",
  "Espírito de adaptação e resiliência",
]

const equipment = [
  "Mochila",
  "Roupa adequada ao ambiente",
  "Calçado apropriado",
  "Lanterna",
  "Garrafa de água",
  "Equipamento pessoal indicado pela organização",
]

export default function SurvivalPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative min-h-[92vh] overflow-hidden bg-black">
  {/* IMAGEM DE FUNDO */}
  <img
  src="/survival-hero.jpg"
  alt="Desafio Survival AD ASTRA"
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    zIndex: 1,
  }}
/>

  {/* ESCURECER A IMAGEM */}
  <div className="absolute inset-0 z-10 bg-black/45" />

  {/* GRADIENTE PARA DAR MAIS CONTRASTE AO TEXTO */}
  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/25 to-black/10" />

  {/* ELEMENTOS DECORATIVOS */}
  <div className="absolute inset-0 z-20 opacity-30">
    <div className="absolute left-[8%] top-[20%] h-px w-32 bg-orange-500" />
    <div className="absolute right-[10%] top-[30%] h-48 w-48 rounded-full border border-white/10" />
    <div className="absolute bottom-[18%] left-[45%] h-72 w-72 rounded-full border border-white/5" />
  </div>

          <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-end px-6 pb-16 pt-32 md:pb-24">
            <div className="w-full">
              <div className="mb-8 flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-white/50">
                <span className="h-px w-12 bg-orange-500" />
                DESAFIO 02
              </div>

              <p className="mb-5 text-sm uppercase tracking-[0.4em] text-orange-500">
                AD ASTRA
              </p>

              <h1 className="max-w-6xl text-7xl font-black uppercase leading-[0.82] tracking-[-0.05em] sm:text-8xl md:text-[9rem]">
                SURVIVAL
              </h1>

              <p className="mt-7 text-xl uppercase tracking-[0.18em] text-white/75 md:text-3xl">
                4 DIAS NA NATUREZA
              </p>

              <div className="mt-14 grid max-w-5xl grid-cols-3 border-t border-white/15 pt-6">
                <div>
                  <div className="text-3xl font-black md:text-6xl">4</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/40 md:text-xs">
                    DIAS
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-black md:text-6xl">12</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/40 md:text-xs">
                    PARTICIPANTES
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-black md:text-6xl">299 €</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/40 md:text-xs">
                    PREÇO
                  </div>
                </div>
              </div>

              <a
                href="#inscricao"
                className="mt-10 inline-flex items-center gap-6 bg-orange-500 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition-all hover:gap-8 hover:bg-white"
              >
                Candidata-te
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
                QUATRO DIAS.
                <br />
                UMA EXPERIÊNCIA.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-white/70 md:text-2xl">
                Uma experiência de quatro dias em ambiente natural, criada para
                testar a tua capacidade de adaptação, resistência, orientação e
                resolução de problemas.
              </p>

              <p className="mt-7 text-lg leading-relaxed text-white/45 md:text-xl">
                Vais aprender, aplicar e enfrentar desafios supervisionados em
                equipa, num ambiente pensado para te tirar da tua zona de
                conforto.
              </p>
            </div>
          </div>
        </section>

        {/* FOUR DAYS */}
        <section className="border-y border-white/10 bg-[#0a0a0a]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="mb-16 max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                A EXPERIÊNCIA
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase leading-none tracking-[-0.03em] md:text-7xl">
                OS 4 DIAS
              </h2>
            </div>

            <div className="grid gap-px bg-white/10 md:grid-cols-2">
              {days.map((day) => (
                <article key={day.number} className="bg-[#0a0a0a] p-8 md:p-12">
                  <div className="flex items-start justify-between">
                    <span className="text-6xl font-black text-white/10">
                      {day.number}
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.3em] text-orange-500">
                      DIA
                    </span>
                  </div>

                  <h3 className="mt-12 text-3xl font-black uppercase md:text-5xl">
                    {day.title}
                  </h3>

                  <p className="mt-5 max-w-xl leading-relaxed text-white/50 md:text-lg">
                    {day.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ROUTE */}
        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[0.7fr_1.3fr] md:py-32">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                A ROTA
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.03em] md:text-7xl">
                OFICIAL
                <br />
                EM BREVE
              </h2>

              <p className="mt-7 max-w-md leading-relaxed text-white/50 md:text-lg">
                A rota oficial, distância, desnível e checkpoints serão
                divulgados pela organização.
              </p>
            </div>

            <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden border border-white/10 bg-[#0a0a0a]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,92,46,0.08),transparent_45%)]" />

              <div className="relative z-10 text-center">
                <div className="mx-auto mb-6 h-px w-16 bg-orange-500" />
                <p className="text-xs uppercase tracking-[0.35em] text-white/30">
                  ROTA OFICIAL
                </p>
                <p className="mt-3 text-2xl font-black uppercase md:text-4xl">
                  EM BREVE
                </p>
                <p className="mt-4 text-sm text-white/35">
                  Mapa · GPX · Checkpoints · Desnível
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="bg-[#0a0a0a]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                O QUE RECEBES
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase leading-[0.9] md:text-7xl">
                O QUE ESTÁ
                <br />
                INCLUÍDO
              </h2>
            </div>

            <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2">
              {included.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-6 bg-[#0a0a0a] p-8 md:p-10"
                >
                  <span className="text-xs font-bold text-orange-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm font-semibold uppercase tracking-[0.08em] md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINISHER */}
        <section className="border-y border-white/10">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                FINISHER
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.88] tracking-[-0.03em] md:text-7xl">
                CONQUISTA
                <br />
                O TEU
                <br />
                ESTATUTO.
              </h2>

              <p className="mt-7 max-w-xl leading-relaxed text-white/50 md:text-lg">
                Completa os quatro dias e conquista o estatuto oficial de
                Finisher AD ASTRA.
              </p>
            </div>

            <div className="space-y-3">
              <div className="border border-white/10 bg-[#0a0a0a] p-7 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-orange-500">
                  FINISHER 01
                </p>
                <h3 className="mt-3 text-2xl font-black uppercase md:text-3xl">
                  MEDALHA
                </h3>
              </div>

              <div className="border border-white/10 bg-[#0a0a0a] p-7 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-orange-500">
                  FINISHER 02
                </p>
                <h3 className="mt-3 text-2xl font-black uppercase md:text-3xl">
                  T-SHIRT OFICIAL
                </h3>
              </div>

              <div className="border border-white/10 bg-[#0a0a0a] p-7 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-orange-500">
                  FINISHER 03
                </p>
                <h3 className="mt-3 text-2xl font-black uppercase md:text-3xl">
                  CERTIFICADO
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                  REQUISITOS
                </p>

                <h2 className="mt-5 text-5xl font-black uppercase leading-none md:text-7xl">
                  ESTÁS
                  <br />
                  PREPARADO?
                </h2>
              </div>

              <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                {requirements.map((item, index) => (
                  <div key={item} className="bg-[#050505] p-7 md:p-9">
                    <span className="text-xs font-bold text-orange-500">
                      0{index + 1}
                    </span>

                    <p className="mt-8 text-sm font-semibold uppercase leading-relaxed tracking-wide text-white/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EQUIPMENT */}
        <section className="border-b border-white/10 bg-[#0a0a0a]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                EQUIPAMENTO
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
                O QUE
                <br />
                LEVAR
              </h2>
            </div>

            <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {equipment.map((item, index) => (
                <div
                  key={item}
                  className="border border-white/10 bg-[#050505] p-6"
                >
                  <div className="flex justify-between">
                    <span className="text-xs text-orange-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs text-white/20">AD ASTRA</span>
                  </div>

                  <p className="mt-10 text-sm font-semibold uppercase tracking-wide text-white/80">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-white/30">
              A lista definitiva de equipamento será comunicada pela
              organização antes do evento.
            </p>
          </div>
        </section>

        {/* SAFETY */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                  SEGURANÇA
                </p>

                <h2 className="mt-5 text-5xl font-black uppercase leading-none md:text-7xl">
                  DESAFIO
                  <br />
                  COM
                  <br />
                  CONTROLO.
                </h2>
              </div>

              <div className="max-w-2xl">
                <p className="text-lg leading-relaxed text-white/60 md:text-xl">
                  A experiência é organizada e acompanhada por uma equipa
                  responsável pelo apoio aos participantes ao longo do evento.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/40">
                  As informações definitivas sobre preparação, regras e
                  procedimentos de segurança serão disponibilizadas antes do
                  desafio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-white/10 bg-[#0a0a0a]">
          <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
            <div className="mb-14 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
                FAQ
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase md:text-7xl">
                PERGUNTAS
                <br />
                FREQUENTES
              </h2>
            </div>

            <div className="space-y-3">
              <details className="group border border-white/10 bg-[#050505]">
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 md:p-8">
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    O Survival é para iniciantes?
                  </span>
                  <span className="text-xl text-orange-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="border-t border-white/10 px-6 pb-7 pt-5 text-sm leading-relaxed text-white/50 md:px-8">
                  A experiência será apresentada de forma progressiva e
                  supervisionada. Os requisitos definitivos serão publicados
                  antes da abertura das inscrições.
                </div>
              </details>

              <details className="group border border-white/10 bg-[#050505]">
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 md:p-8">
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    O que está incluído nos 299 €?
                  </span>
                  <span className="text-xl text-orange-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="border-t border-white/10 px-6 pb-7 pt-5 text-sm leading-relaxed text-white/50 md:px-8">
                  O preço inclui os elementos apresentados na secção “O que
                  está incluído”, bem como os benefícios de Finisher para quem
                  completar os quatro dias.
                </div>
              </details>

              <details className="group border border-white/10 bg-[#050505]">
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 md:p-8">
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    Quantas pessoas podem participar?
                  </span>
                  <span className="text-xl text-orange-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="border-t border-white/10 px-6 pb-7 pt-5 text-sm leading-relaxed text-white/50 md:px-8">
                  O evento está limitado a 12 participantes.
                </div>
              </details>

              <details className="group border border-white/10 bg-[#050505]">
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 md:p-8">
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    O que recebo se completar o desafio?
                  </span>
                  <span className="text-xl text-orange-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="border-t border-white/10 px-6 pb-7 pt-5 text-sm leading-relaxed text-white/50 md:px-8">
                  Os participantes que completarem os quatro dias recebem a
                  medalha de Finisher, a t-shirt oficial e o certificado de
                  Finisher AD ASTRA.
                </div>
              </details>
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
              APENAS 12 VAGAS
            </p>

            <h2 className="mt-5 max-w-5xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.04em] md:text-[8rem]">
              ESTÁS
              <br />
              PREPARADO?
            </h2>

            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
              <button className="bg-black px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-white hover:text-black">
                Candidata-te
              </button>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em]">
                  Preço
                </p>
                <p className="text-3xl font-black">299 €</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
 )
}