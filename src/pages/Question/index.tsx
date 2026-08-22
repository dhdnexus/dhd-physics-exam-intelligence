import { useParams } from 'react-router-dom'
import { BrainCircuit } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { EmptyState } from '@/components/layout/EmptyState'

export function Question() {
  const { id } = useParams<{ id: string }>()

  return (
    <PageContainer>
      <SectionHeading
        eyebrow="Question Intelligence"
        title={`Question ${id}`}
        description="Question text, worked solutions, difficulty ranking and misconception tagging will surface here."
      />
      <div className="mt-8">
        <EmptyState
          icon={BrainCircuit}
          title="Question intelligence is not yet wired"
          description="The question detail view, solution renderer and misconception panel are built in later sessions. This route and layout are reserved now."
        />
      </div>
    </PageContainer>
  )
}

export default Question
