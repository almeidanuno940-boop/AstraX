'use client'

import { useRef, useState } from 'react'
import { buttonClasses } from './button-link'
import { SelectField, TextareaField, TextField } from './form-fields'
import { submitContact } from '@/lib/submissions'
import { email, minLength, phone, required, validate } from '@/lib/validation'

type Values = { name: string; email: string; phone: string; subject: string; message: string }
type Errors = Partial<Record<keyof Values, string | null>>
type Status = 'idle' | 'submitting' | 'prepared'

const subjects = [
  { value: 'Informações gerais', label: 'Informações gerais' },
  { value: 'Inscrições', label: 'Inscrições' },
  { value: 'Parcerias', label: 'Parcerias' },
  { value: 'Outro assunto', label: 'Outro assunto' },
]

const empty: Values = { name: '', email: '', phone: '', subject: '', message: '' }

/**
 * Formulário de contacto — validação e estados no frontend.
 * Não existe serviço de email ligado: a mensagem NÃO é enviada (ver `lib/submissions.ts`)
 * e a interface di-lo claramente ao utilizador.
 */
export function ContactForm() {
  const [values, setValues] = useState<Values>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [failure, setFailure] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const resultRef = useRef<HTMLDivElement>(null)

  const set = (key: keyof Values) => (value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: null }))
  }

  function check(): Errors {
    return {
      name: validate(values.name, [required]),
      email: validate(values.email, [required, email]),
      phone: values.phone.trim() ? validate(values.phone, [phone]) : null,
      subject: validate(values.subject, [required]),
      message: validate(values.message, [required, minLength(10)]),
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'submitting') return

    const next = check()
    setErrors(next)
    const firstInvalid = (Object.keys(next) as (keyof Values)[]).find((k) => next[k])
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus()
      return
    }

    setStatus('submitting')
    setFailure(null)
    const result = await submitContact(values)
    if (!result.ok) {
      setStatus('idle')
      setFailure(result.error)
      return
    }
    setStatus('prepared')
    requestAnimationFrame(() => resultRef.current?.focus())
  }

  if (status === 'prepared') {
    return (
      <div ref={resultRef} tabIndex={-1} role="status" className="border border-primary/40 bg-card p-6 outline-none sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Mensagem preparada</p>
        <h2 className="mt-4 font-display text-5xl uppercase leading-[0.92] sm:text-6xl">Ainda não foi enviada</h2>
        <p className="mt-5 max-w-xl leading-relaxed text-white/75">
          A mensagem foi validada e preparada, mas <strong className="text-white">o envio real ainda não está ligado</strong>.
          Nada foi enviado nem guardado. Assim que o serviço de email estiver ativo, este formulário passará a
          enviar as mensagens diretamente para a equipa AstraX.
        </p>
        <dl className="mt-8 border-t border-white/10 text-sm">
          {[
            ['Nome', values.name],
            ['Email', values.email],
            ['Assunto', values.subject],
          ].map(([label, value]) => (
            <div key={label} className="flex gap-6 border-b border-white/10 py-3">
              <dt className="w-24 shrink-0 text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</dt>
              <dd className="break-words text-white/90">{value}</dd>
            </div>
          ))}
        </dl>
        <button
          type="button"
          onClick={() => {
            setValues(empty)
            setErrors({})
            setStatus('idle')
          }}
          className={buttonClasses('outline', 'md', 'mt-8')}
        >
          Escrever outra mensagem
        </button>
      </div>
    )
  }

  const submitting = status === 'submitting'

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-label="Formulário de contacto" className="space-y-6">
      <fieldset disabled={submitting} className="grid gap-6 sm:grid-cols-2">
        <TextField id="name" label="Nome" required value={values.name} onChange={set('name')} error={errors.name} autoComplete="name" />
        <TextField id="email" label="Email" type="email" required value={values.email} onChange={set('email')} error={errors.email} autoComplete="email" />
        <TextField id="phone" label="Telefone" type="tel" value={values.phone} onChange={set('phone')} error={errors.phone} autoComplete="tel" />
        <SelectField id="subject" label="Assunto" required value={values.subject} onChange={set('subject')} options={subjects} error={errors.subject} />
        <TextareaField
          id="message"
          label="Mensagem"
          required
          value={values.message}
          onChange={set('message')}
          error={errors.message}
          className="sm:col-span-2"
        />
      </fieldset>

      {failure && (
        <p role="alert" className="border border-destructive/60 p-4 text-sm text-destructive">
          {failure}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
        <button type="submit" disabled={submitting} className={buttonClasses('primary', 'lg', 'w-full sm:w-auto')}>
          {submitting ? 'A preparar…' : 'Enviar mensagem'}
        </button>
        <p className="text-sm text-muted-foreground">Os campos marcados com * são obrigatórios.</p>
      </div>
    </form>
  )
}
