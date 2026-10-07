/**
 * Estrutura das inscrições.
 * O formulário funciona até ao passo imediatamente anterior ao pagamento.
 * Pagamento, controlo real de vagas e email de confirmação serão ligados mais tarde
 * (ver `lib/submissions.ts`).
 */

export type RegistrationStatus = 'em-breve' | 'pagamento-em-breve' | 'abertas' | 'esgotadas' | 'encerradas'

export const registrationStatusLabel: Record<RegistrationStatus, string> = {
  'em-breve': 'Inscrições em breve',
  'pagamento-em-breve': 'Pagamento em breve',
  abertas: 'Inscrições abertas',
  esgotadas: 'Esgotado',
  encerradas: 'Inscrições encerradas',
}

/** O formulário fica disponível nestes estados. */
export const formEnabledStatuses: RegistrationStatus[] = ['pagamento-em-breve', 'abertas']

/** `total: null` = limite ainda por definir. `available: null` = contagem real ainda não ligada. */
export type Spots = { total: number | null; available: number | null }

export function formatSpots(spots: Spots): string {
  if (spots.total === null) return 'Vagas a definir'
  if (spots.available !== null) return `${spots.available} / ${spots.total} vagas disponíveis`
  return `${spots.total} vagas`
}

export type RegistrationFieldType = 'text' | 'email' | 'tel' | 'date' | 'textarea'

export type RegistrationField = {
  id: string
  label: string
  type: RegistrationFieldType
  required: boolean
  autoComplete?: string
  hint?: string
}

/** Campos comuns a todos os desafios. Campos específicos ficam em `challenge.registration.extraFields`. */
export const baseRegistrationFields: RegistrationField[] = [
  { id: 'fullName', label: 'Nome completo', type: 'text', required: true, autoComplete: 'name' },
  { id: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
  { id: 'phone', label: 'Telefone', type: 'tel', required: true, autoComplete: 'tel' },
  { id: 'birthDate', label: 'Data de nascimento', type: 'date', required: true, autoComplete: 'bday', hint: 'Idade mínima: 18 anos.' },
  { id: 'emergencyName', label: 'Contacto de emergência — nome', type: 'text', required: true },
  { id: 'emergencyPhone', label: 'Contacto de emergência — telefone', type: 'tel', required: true },
]

export const registrationSteps = [
  { title: 'Dados do participante', text: 'Nome, email, telefone, data de nascimento e contacto de emergência.', available: true },
  { title: 'Aceitação dos termos', text: 'Leitura e aceitação dos termos e da política de privacidade.', available: true },
  { title: 'Pagamento', text: 'Pagamento seguro da inscrição, de acordo com o escalão em vigor.', available: false },
  { title: 'Confirmação', text: 'Confirmação da inscrição e da vaga por email.', available: false },
]
