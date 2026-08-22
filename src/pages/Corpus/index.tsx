import { Library } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { EmptyState } from '@/components/layout/EmptyState'

export function Corpus() {
  return (
    <PageContainer>
      <SectionHeading
        eyebrow="Corpus"
        title="Examination Corpus"
        description="The indexed collection of past examination papers, organised by university, course and year."
      />
      <div className="mt-8">
        <EmptyState
          icon={Library}
          title="The corpus is not yet populated"
          description="Paper ingestion, filtering and the corpus browser are built in a later session. This page is reserved architecture only."
        />
      </div>
    </PageContainer>
  )
}

export default Corpus
