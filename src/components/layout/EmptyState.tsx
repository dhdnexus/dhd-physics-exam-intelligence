import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

export function EmptyState({ icon: Icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        'bg-grid-faint flex flex-col items-center justify-center rounded-lg border border-dashed border-[color:var(--color-border)] px-6 py-16 text-center',
        className
      )}
    >
      <span className="mb-4 grid h-12 w-12 place-items-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
        <Icon className="h-5 w-5 text-[color:var(--color-gold)]" strokeWidth={1.75} />
      </span>
      <h3 className="font-serif text-lg font-medium text-[color:var(--color-navy)]">{title}</h3>
      {description && (
        <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
          {description}
        </p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}
