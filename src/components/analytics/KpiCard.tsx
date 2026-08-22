import { motion } from 'framer-motion'
import type { KpiDatum } from '@/types'
import { cn } from '@/lib/utils'

interface KpiCardProps extends KpiDatum {
  index?: number
  className?: string
}

/**
 * A single KPI, styled like a specimen card from an examination
 * archive: hairline border, gold corner ticks, and a serif figure
 * as the focal element.
 */
export function KpiCard({ label, value, icon: Icon, hint, index = 0, className }: KpiCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: 'easeOut' }}
      className={cn(
        'corner-ticks group relative overflow-hidden rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-panel)]',
        className
      )}
    >
      <div className="flex items-start justify-between">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
          {label}
        </p>
        <Icon className="h-4 w-4 text-[color:var(--color-gold)]" strokeWidth={1.75} />
      </div>
      <p className="mt-3 font-serif text-4xl font-semibold text-[color:var(--color-navy)]">
        {value}
      </p>
      {hint && <p className="mt-1.5 text-xs text-[color:var(--color-ink-muted)]">{hint}</p>}
    </motion.div>
  )
}
