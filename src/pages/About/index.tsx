import { Archive, Target, ListChecks } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const futureModules = [
  'Past examination papers',
  'Question intelligence',
  'Worked solutions',
  'Misconceptions',
  'Difficulty ranking',
  'University comparison',
  'Examination analytics',
]

export function About() {
  return (
    <PageContainer>
      <SectionHeading
        eyebrow="About"
        title="About DHD-PEI"
        description="What this platform is, and what it is being built to become."
      />

      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <Archive className="mb-1 h-5 w-5 text-[color:var(--color-gold)]" strokeWidth={1.75} />
            <CardTitle>What DHD-PEI is</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
            DHD Physics Exam Intelligence is a premium examination intelligence
            platform for undergraduate physics. It is not a lesson platform — it does
            not teach concepts. It is built to organise, analyse and compare
            examination material.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Target className="mb-1 h-5 w-5 text-[color:var(--color-gold)]" strokeWidth={1.75} />
            <CardTitle>Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
            To give students and educators a rigorous, evidence-based view of how
            undergraduate physics is actually examined — across institutions, topics
            and years.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <ListChecks className="mb-1 h-5 w-5 text-[color:var(--color-gold)]" strokeWidth={1.75} />
            <CardTitle>Planned modules</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1.5 text-sm text-[color:var(--color-ink-muted)]">
              {futureModules.map((m) => (
                <li key={m} className="flex items-center gap-2">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-gold)]" />
                  {m}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
          Build status
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
          This is Session 1 of 7 — the architectural foundation only. Routing, layout,
          the design system and navigation are in place. Examination pages, question
          data, worked solutions and analytics are implemented in Sessions 2–7.
        </p>
      </div>
    </PageContainer>
  )
}

export default About
