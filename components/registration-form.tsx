'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { Check, Clock } from 'lucide-react'
import { baseRegistrationFields, registrationSteps, type RegistrationField } from '@/lib/registration'
import { submitRegistration } from '@/lib/submissions'
import { birthDate, email, fullName, phone, required, validate, type Validator } from '@/lib/validation'
import { buttonClasses, ButtonLink } from './button-link'
import { CheckboxField, TextField } from './form-fields'

const validators: Record<string, Validator[]> = {
  fullName: [required, fullName],
  email: [required, email],
  phone: [required, phone],
  birthDate: [required, birthDate],
  emergencyName: [required, fullName],
  emergencyPhone: [required, phone],
}

type Status = 'idle' | 'submitting' | 'validated'

/**
 * Formulário de inscrição — funciona até ao passo imediatamente anterior ao pagamento.
 * Nenhum dado é enviado ou guardado: vive apenas em estado local desta página.
 * A ligação a backend/pagamento é feita em `lib/submissions.ts`.
 */
export function RegistrationForm({
  challengeId,
  challengeTitle,
  challengeHref,
  extraFields,
}: {
  challengeId: string
  challengeTitle: string
  challengeHref: string
  extraFields: RegistrationField[]
}) {
  const fields = [...baseRegistrationFields, ...extraFields]
  const [values, setValues] = useState<Record<string, string>>({})
  const [accepted, setAccepted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string | null>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [failure, setFailure] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const resultRef = useRef<HTMLDivElement>(null)

  const today = new Date().toISOString().slice(0, 10)

  const setValue = (id: string, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }))
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: null }))
  }

  const checkField = (field: RegistrationField) =>
    validate(values[field.id] ?? '', validators[field.id] ?? (field.required ? [required] : []))

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'submitting') return

    const nextErrors: Record<string, string | null> = {}
    for (const field of fields) nextErrors[field.id] = checkField(field)
    nextErrors.terms = accepted ? null : 'Tens de aceitar os termos e condições para continuar.'
    setErrors(nextErrors)

    const firstInvalid = Object.keys(nextErrors).find((key) => nextErrors[key])
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#${firstInvalid === 'terms' ? 'terms' : firstInvalid}`)?.focus()
      return
    }

    setStatus('submitting')
    setFailure(null)
    const result = await submitRegistration({ challengeId, values, acceptedTerms: accepted })
    if (!result.ok) {
      setStatus('idle')
      setFailure(result.error)
      return
    }
    setStatus('validated')
    requestAnimationFrame(() => resultRef.current?.focus())
  }

  if (status === 'validated') {
    return (
      <div
        ref={resultRef}
        tabIndex={-1}
        role="status"
        className="border border-primary/40 bg-card p-6 outline-none sm:p-10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Passo 2 de 4 concluído</p>
        <h2 className="mt-4 font-display text-5xl uppercase leading-[0.92] sm:text-6xl">Dados validados</h2>
        <p className="mt-5 max-w-xl leading-relaxed text-white/75">
          Obrigado, <strong className="text-white">{(values.fullName ?? '').split(' ')[0]}</strong>. Os teus dados para o{' '}
          {challengeTitle} estão completos e válidos.
        </p>

        <ol className="mt-8 border-t border-white/10">
          {registrationSteps.map((step, i) => (
            <li key={step.title} className="flex items-start gap-4 border-b border-white/10 py-5">
              <span
                className={
                  step.available
                    ? 'mt-0.5 flex size-6 shrink-0 items-center justify-center bg-primary text-primary-foreground'
                    : 'mt-0.5 flex size-6 shrink-0 items-center justify-center border border-white/25 text-white/60'
                }
                aria-hidden
              >
                {step.available ? <Check className="size-4" /> : <Clock className="size-3.5" />}
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide">
                  {String(i + 1).padStart(2, '0')} — {step.title}{' '}
                  <span className={step.available ? 'text-primary' : 'text-white/60'}>
                    · {step.available ? 'Concluído' : 'Em breve'}
                  </span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 border-l-2 border-primary bg-white/[0.03] p-5">
          <p className="font-display text-2xl uppercase">Pagamento — em breve</p>
          <p className="mt-2 text-sm leading-relaxed text-white/75">
            O pagamento ainda não está disponível, por isso a tua vaga <strong className="text-white">ainda não está
            reservada</strong> e não foi cobrado nenhum valor. Os dados que preencheste{' '}
            <strong className="text-white">não foram enviados nem guardados</strong>. Quando o pagamento for ativado,
            voltarás a esta página para concluir a inscrição.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={challengeHref} variant="primary">
            Voltar ao desafio
          </ButtonLink>
          <button type="button" onClick={() => setStatus('idle')} className={buttonClasses('outline')}>
            Rever os meus dados
          </button>
        </div>
      </div>
    )
  }

  const submitting = status === 'submitting'
  const group = (title: string, groupFields: RegistrationField[]) => (
    <fieldset className="border-t border-white/15 pt-6" disabled={submitting}>
      <legend className="mb-1 pr-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">{title}</legend>
      <div className="mt-5 grid gap-6 sm:grid-cols-2">
        {groupFields.map((field) => (
          <TextField
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type === 'textarea' ? 'text' : field.type}
            value={values[field.id] ?? ''}
            onChange={(v) => setValue(field.id, v)}
            error={errors[field.id]}
            hint={field.hint}
            required={field.required}
            autoComplete={field.autoComplete}
            max={field.type === 'date' ? today : undefined}
            className={field.id === 'fullName' ? 'sm:col-span-2' : undefined}
          />
        ))}
      </div>
    </fieldset>
  )
  const pick = (ids: string[]) => baseRegistrationFields.filter((f) => ids.includes(f.id))

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-10" aria-label={`Inscrição — ${challengeTitle}`}>
      {group('Dados do participante', pick(['fullName', 'email', 'phone', 'birthDate']))}
      {group('Contacto de emergência', pick(['emergencyName', 'emergencyPhone']))}
      {extraFields.length > 0 && group('Informações do desafio', extraFields)}

      <fieldset className="border-t border-white/15 pt-6" disabled={submitting}>
        <legend className="mb-1 pr-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Termos e condições
        </legend>
        <div className="mt-5">
          <CheckboxField id="terms" checked={accepted} onChange={(v) => { setAccepted(v); if (v) setErrors((p) => ({ ...p, terms: null })) }} error={errors.terms}>
            Li e aceito os{' '}
            <Link href="/termos" className="text-primary underline underline-offset-4 hover:text-white" target="_blank">
              Termos e Condições
            </Link>{' '}
            e a{' '}
            <Link href="/privacidade" className="text-primary underline underline-offset-4 hover:text-white" target="_blank">
              Política de Privacidade
            </Link>
            .
          </CheckboxField>
        </div>
      </fieldset>

      {failure && (
        <p role="alert" className="border border-destructive/60 p-4 text-sm text-destructive">
          {failure}
        </p>
      )}

      <div className="flex flex-col gap-4 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:gap-8">
        <button type="submit" disabled={submitting} className={buttonClasses('primary', 'lg', 'w-full sm:w-auto')}>
          {submitting ? 'A validar…' : 'Continuar'}
        </button>
        <p className="text-sm text-muted-foreground">
          O pagamento não está ativo: nesta fase os dados são apenas validados e não são guardados.
        </p>
      </div>
    </form>
  )
}
