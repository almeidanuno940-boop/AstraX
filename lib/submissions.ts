/**
 * Camada de submissão de formulários.
 *
 * FASE ATUAL (sem backend): nada é enviado nem guardado — as funções apenas simulam
 * o tempo de processamento e devolvem `mode: 'local'`, para a interface poder mostrar
 * ao utilizador, com honestidade, o que aconteceu.
 *
 * LIGAÇÃO FUTURA: substituir o corpo destas funções por chamadas a uma API / Server Action
 * (envio de email, guardar inscrição, controlo de vagas, checkout de pagamento).
 * Os formulários não precisam de ser alterados.
 */

export type SubmissionResult = { ok: true; mode: 'local' } | { ok: false; error: string }

const simulateLatency = () => new Promise((resolve) => setTimeout(resolve, 700))

export type RegistrationPayload = {
  challengeId: string
  values: Record<string, string>
  acceptedTerms: boolean
}

export async function submitRegistration(payload: RegistrationPayload): Promise<SubmissionResult> {
  void payload
  await simulateLatency()
  return { ok: true, mode: 'local' }
}

export type ContactPayload = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export async function submitContact(payload: ContactPayload): Promise<SubmissionResult> {
  void payload
  await simulateLatency()
  return { ok: true, mode: 'local' }
}
