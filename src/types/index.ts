import type { LucideIcon } from 'lucide-react'

/** A single entry in the primary sidebar navigation. */
export interface NavItem {
  label: string
  href: string
  icon: LucideIcon
  /** Reserved for Session 2+: badge count, "new" markers, etc. */
  badge?: string
}

/** A breadcrumb trail entry. The last item is the current page. */
export interface BreadcrumbItem {
  label: string
  href?: string
}

/** Minimal shape for the Dashboard KPI placeholders (Session 1). */
export interface KpiDatum {
  label: string
  value: string
  icon: LucideIcon
  hint?: string
}

/* --------------------------------------------------------------------
 * Forward-declared domain types.
 *
 * These are NOT implemented or populated in Session 1. They exist so
 * the folder/type architecture can be reasoned about ahead of the
 * data model landing in later sessions. Do not import data against
 * these yet — see docs/ROADMAP.md.
 * ------------------------------------------------------------------ */

/** Session 2+: a past examination paper in the corpus. */
export interface ExamPaper {
  id: string
  universityId: string
  course: string
  year: number
  term?: string
}

/** Session 3+: a single question extracted from a paper. */
export interface ExamQuestion {
  id: string
  paperId: string
  topic: string
  difficulty?: number
}

/** Session 4+: a worked solution attached to a question. */
export interface WorkedSolution {
  id: string
  questionId: string
  steps: string[]
}

/** Session 5+: a documented student misconception tied to a topic. */
export interface Misconception {
  id: string
  topic: string
  description: string
}

/** Session 6+: a university offering physics examinations to the corpus. */
export interface University {
  id: string
  name: string
  country: string
}
