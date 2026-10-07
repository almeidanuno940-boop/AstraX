import { cn } from '@/lib/utils'

const controlClass =
  'block w-full border bg-white/[0.04] px-4 py-3.5 text-base text-white placeholder:text-white/40 transition-colors focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:opacity-60'

type BaseProps = {
  id: string
  label: string
  error?: string | null
  hint?: string
  required?: boolean
  className?: string
}

function FieldShell({
  id,
  label,
  error,
  hint,
  required,
  className,
  children,
}: BaseProps & { children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
        {label}
        {required ? (
          <span className="text-primary" aria-hidden>
            {' '}
            *
          </span>
        ) : (
          <span className="ml-2 normal-case tracking-normal text-muted-foreground">(opcional)</span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-2 text-xs text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

const describedBy = (id: string, error?: string | null, hint?: string) =>
  error ? `${id}-error` : hint ? `${id}-hint` : undefined

export function TextField({
  type = 'text',
  value,
  onChange,
  autoComplete,
  placeholder,
  disabled,
  max,
  ...shell
}: BaseProps & {
  type?: 'text' | 'email' | 'tel' | 'date'
  value: string
  onChange: (value: string) => void
  autoComplete?: string
  placeholder?: string
  disabled?: boolean
  max?: string
}) {
  const { id, error, hint, required } = shell
  return (
    <FieldShell {...shell}>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        max={max}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(controlClass, error ? 'border-destructive' : 'border-white/20')}
      />
    </FieldShell>
  )
}

export function TextareaField({
  value,
  onChange,
  placeholder,
  disabled,
  rows = 6,
  ...shell
}: BaseProps & {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  disabled?: boolean
  rows?: number
}) {
  const { id, error, hint, required } = shell
  return (
    <FieldShell {...shell}>
      <textarea
        id={id}
        name={id}
        value={value}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(controlClass, 'resize-y', error ? 'border-destructive' : 'border-white/20')}
      />
    </FieldShell>
  )
}

export function SelectField({
  value,
  onChange,
  options,
  disabled,
  ...shell
}: BaseProps & {
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  disabled?: boolean
}) {
  const { id, error, hint, required } = shell
  return (
    <FieldShell {...shell}>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(controlClass, error ? 'border-destructive' : 'border-white/20')}
      >
        <option value="" className="bg-card">
          Seleciona uma opção
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-card">
            {o.label}
          </option>
        ))}
      </select>
    </FieldShell>
  )
}

export function CheckboxField({
  id,
  checked,
  onChange,
  error,
  disabled,
  children,
}: {
  id: string
  checked: boolean
  onChange: (checked: boolean) => void
  error?: string | null
  disabled?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="flex items-start gap-4">
        <input
          id={id}
          name={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-1 size-5 shrink-0 cursor-pointer accent-[var(--primary)]"
        />
        <label htmlFor={id} className="cursor-pointer text-sm leading-relaxed text-white/80">
          {children}
        </label>
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
