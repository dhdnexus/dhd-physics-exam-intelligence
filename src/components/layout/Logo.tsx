import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  /** Renders the full wordmark; set false for a compact, icon-only mark. */
  expanded?: boolean
}

/**
 * The DHD-PEI mark: a serif "P" set inside a hairline square, styled
 * after a specimen stamp on an archival index card. Pairs with the
 * "DHD · PEI" wordmark for the expanded state.
 */
export function Logo({ className, expanded = true }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <span
        aria-hidden
        className="grid h-8 w-8 shrink-0 place-items-center rounded-[3px] border border-[color:var(--color-gold)]/60 bg-[color:var(--color-navy)] font-serif text-sm font-semibold text-[color:var(--color-gold)]"
      >
        P
      </span>
      {expanded && (
        <span className="flex flex-col leading-none">
          <span className="font-serif text-[15px] font-semibold tracking-tight text-[color:var(--color-navy)]">
            DHD <span className="text-[color:var(--color-gold)]">·</span> PEI
          </span>
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
            Exam Intelligence
          </span>
        </span>
      )}
    </div>
  )
}
