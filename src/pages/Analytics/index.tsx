import { BarChart3 } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { EmptyState } from '@/components/layout/EmptyState'

export function Analytics() {
  return (
    <PageContainer>
      <SectionHeading
        eyebrow="Analytics"
        title="Analytics"
        description="Difficulty distributions, topic frequency, and cross-examination trends."
      />
      <div className="mt-8">
        <EmptyState
          icon={BarChart3}
          title="Analytics are not yet computed"
          description="Charting and trend analysis are built in a later session, once the corpus and question data exist to analyse."
        />
      </div>
    </PageContainer>
  )
}

export default Analytics
