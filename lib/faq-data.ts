import { brand } from './site-config'
import { getChallenge, type ChallengeId } from './site-data'

export type FaqItem = { question: string; answer: string }

export type FaqCategoryId = 'geral' | ChallengeId | 'inscricoes'

export type FaqCategory = { id: FaqCategoryId; label: string; items: FaqItem[] }

/** Preços lidos da fonte única (`site-data.ts`) para nunca ficarem desatualizados. */
function priceSentence(id: ChallengeId): string {
  const challenge = getChallenge(id)
  if (!challenge) return ''
  return challenge.pricing.map((t) => `${t.label}: ${t.price}`).join('. ') + '.'
}

export const faqCategories: FaqCategory[] = [
  {
    id: 'geral',
    label: 'Geral',
    items: [
      { question: 'O que é a AstraX?', answer: brand.description },
      {
        question: 'Quais são os desafios disponíveis?',
        answer:
          'Existem quatro desafios: Backyard, Survival, Desafio Urbano e Last One Out. Cada um tem a sua própria página com toda a informação.',
      },
      {
        question: 'Quando e onde é o próximo evento?',
        answer: 'A data e a localização do próximo evento serão anunciadas em breve.',
      },
      {
        question: 'Qual é a idade mínima para participar?',
        answer: 'Todos os participantes têm de ter pelo menos 18 anos, em qualquer um dos desafios.',
      },
      {
        question: 'Preciso de experiência prévia?',
        answer:
          'Cada desafio tem requisitos próprios, indicados na respetiva página. Os requisitos definitivos são publicados antes da abertura das inscrições.',
      },
    ],
  },
  {
    id: 'backyard',
    label: 'Backyard',
    items: [
      {
        question: 'Como funciona o Backyard?',
        answer:
          'A cada hora começa uma nova volta de 6,706 km. Completa-a dentro do tempo, recupera e prepara-te para a hora seguinte. A prova continua até restar apenas um participante.',
      },
      {
        question: 'O que acontece se não completar a volta a tempo?',
        answer:
          'Quem não completar a volta dentro do tempo, ou não estiver na linha de partida no início da hora seguinte, é eliminado.',
      },
      { question: 'Quanto custa a inscrição?', answer: priceSentence('backyard') },
      {
        question: 'Quantas vagas existem?',
        answer: 'O limite de participantes ainda está por definir e será publicado com a abertura das inscrições.',
      },
    ],
  },
  {
    id: 'survival',
    label: 'Survival',
    items: [
      {
        question: 'O Survival é para iniciantes?',
        answer:
          'A experiência será apresentada de forma progressiva e supervisionada. Os requisitos definitivos serão publicados antes da abertura das inscrições.',
      },
      {
        question: 'O que está incluído na inscrição?',
        answer:
          'O preço inclui os elementos apresentados na secção “O que está incluído” da página do Survival, bem como os benefícios de Finisher para quem completar os quatro dias.',
      },
      { question: 'Quantas pessoas podem participar?', answer: 'O evento está limitado a 12 participantes.' },
      {
        question: 'Onde se realiza e qual é a rota?',
        answer: 'A localização e a rota oficial ainda não foram anunciadas. Serão divulgadas pela organização em breve.',
      },
      {
        question: 'O que recebo se completar o desafio?',
        answer:
          'Quem completar os quatro dias recebe a medalha de Finisher, a t-shirt oficial de Finisher e o certificado de Finisher.',
      },
      { question: 'Quanto custa a inscrição?', answer: priceSentence('survival') },
    ],
  },
  {
    id: 'urban',
    label: 'Desafio Urbano',
    items: [
      { question: 'Em que cidade se realiza?', answer: 'A cidade e o ponto de partida serão anunciados em breve.' },
      {
        question: 'Posso participar sozinho?',
        answer:
          'O Desafio Urbano é uma competição por equipas. O número de elementos por equipa está por definir e será divulgado pela organização.',
      },
      {
        question: 'Quantas missões e checkpoints existem?',
        answer: 'O número de missões e de checkpoints é definido para cada edição e será divulgado pela organização.',
      },
      {
        question: 'Como funciona a pontuação?',
        answer:
          'Cada missão concluída e cada checkpoint encontrado atribuem pontos à equipa. O sistema de pontuação definitivo será apresentado antes de cada edição.',
      },
      { question: 'Quanto custa a inscrição?', answer: priceSentence('urban') },
    ],
  },
  {
    id: 'last-one-out',
    label: 'Last One Out',
    items: [
      {
        question: 'Quanto tempo dura o desafio?',
        answer: 'Não existe uma duração fixa. O desafio continua até restar apenas uma pessoa dentro do círculo.',
      },
      { question: 'Posso sair do círculo por alguns momentos?', answer: 'Não. Quem sair do círculo fica eliminado.' },
      { question: 'Quantas pessoas podem participar?', answer: 'O desafio está pensado para 100 participantes.' },
      { question: 'Qual é o prémio?', answer: 'A última pessoa dentro do círculo ganha 300 €.' },
      { question: 'Quando e onde se realiza?', answer: 'A data e o local serão anunciados em breve.' },
      { question: 'Quanto custa a inscrição?', answer: priceSentence('last-one-out') },
    ],
  },
  {
    id: 'inscricoes',
    label: 'Inscrições',
    items: [
      {
        question: 'Como me posso inscrever?',
        answer:
          'Cada desafio tem uma página de inscrição própria. Podes já preencher os teus dados; o pagamento e a confirmação por email ainda não estão disponíveis.',
      },
      {
        question: 'Já posso pagar a inscrição?',
        answer:
          'Ainda não. O pagamento será ativado em breve. Até lá, o formulário valida os teus dados mas não reserva vaga nem efetua cobranças.',
      },
      {
        question: 'O que significam Early Bird, Normal e Últimas vagas?',
        answer:
          'São os três escalões de preço de cada desafio. O Early Bird aplica-se às primeiras vagas, o Normal ao período regular e o escalão Últimas vagas às vagas finais.',
      },
      {
        question: 'Que dados preciso de fornecer?',
        answer:
          'Nome completo, email, telefone, data de nascimento e um contacto de emergência. Alguns desafios podem pedir informação adicional.',
      },
    ],
  },
]

export function getFaqCategory(id: FaqCategoryId): FaqCategory {
  const category = faqCategories.find((c) => c.id === id)
  if (!category) throw new Error(`Categoria de FAQ desconhecida: ${id}`)
  return category
}

/** Seleção curta para a homepage. */
export const homeFaq: FaqItem[] = [
  getFaqCategory('geral').items[0],
  getFaqCategory('geral').items[1],
  getFaqCategory('inscricoes').items[0],
  getFaqCategory('inscricoes').items[1],
  getFaqCategory('geral').items[2],
]
