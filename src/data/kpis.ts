import { Landmark, FileStack, ListTree, Atom } from 'lucide-react'
import type { KpiDatum } from '@/types'

/**
 * Placeholder KPI values for Session 1.
 * Session 7 (analytics/data wiring) will replace this static array
 * with values derived from the real corpus.
 */
export const dashboardKpis: KpiDatum[] = [
  { label: 'Universities', value: '—', icon: Landmark, hint: 'Institutions indexed' },
  { label: 'Exam Papers', value: '—', icon: FileStack, hint: 'Papers in the corpus' },
  { label: 'Questions', value: '—', icon: ListTree, hint: 'Questions catalogued' },
  { label: 'Topics', value: '—', icon: Atom, hint: 'Physics topics mapped' },
]
