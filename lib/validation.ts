/** Validações simples de frontend, em português de Portugal. Devolvem a mensagem de erro, ou `null` se válido. */

export type Validator = (value: string) => string | null

export const required: Validator = (value) => (value.trim() ? null : 'Este campo é obrigatório.')

export const email: Validator = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()) ? null : 'Indica um email válido, por exemplo nome@exemplo.pt.'

/** Aceita números nacionais e internacionais; exige entre 9 e 15 dígitos. */
export const phone: Validator = (value) => {
  const digits = value.replace(/[\s().-]/g, '').replace(/^\+/, '')
  return /^\d{9,15}$/.test(digits) ? null : 'Indica um número de telefone válido (9 a 15 dígitos).'
}

export const fullName: Validator = (value) => {
  const trimmed = value.trim()
  if (trimmed.split(/\s+/).length < 2 || trimmed.length < 5) return 'Indica o nome completo (nome e apelido).'
  return null
}

/** Idade mínima para participar em qualquer desafio. */
export const MIN_AGE = 18

/** Data (AAAA-MM-DD) mais recente que ainda corresponde à idade mínima. */
export function latestBirthDate(now = new Date()): string {
  const d = new Date(now.getFullYear() - MIN_AGE, now.getMonth(), now.getDate())
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

export const birthDate: Validator = (value) => {
  const date = new Date(`${value}T00:00:00`)
  if (Number.isNaN(date.getTime())) return 'Indica uma data de nascimento válida.'
  const now = new Date()
  if (date > now) return 'A data de nascimento não pode estar no futuro.'
  if (date.getFullYear() < 1900) return 'Indica uma data de nascimento válida.'
  if (value > latestBirthDate(now)) return `Tens de ter pelo menos ${MIN_AGE} anos para te inscreveres.`
  return null
}

export const minLength =
  (min: number): Validator =>
  (value) =>
    value.trim().length >= min ? null : `Escreve pelo menos ${min} caracteres.`

/** Aplica validadores por ordem e devolve o primeiro erro. */
export function validate(value: string, validators: Validator[]): string | null {
  for (const check of validators) {
    const error = check(value)
    if (error) return error
  }
  return null
}
