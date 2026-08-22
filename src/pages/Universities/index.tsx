import { Landmark } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { EmptyState } from '@/components/layout/EmptyState'

export function Universities() {
  return (
    <PageContainer>
      <SectionHeading
        eyebrow="Institutions"
        title="Universities"
        description="A comparative index of institutions contributing to the examination corpus."
      />
      <div className="mt-8">
        <EmptyState
          icon={Landmark}
          title="No universities indexed yet"
          description="University profiles and cross-institution comparison are built in a later session. This page is reserved architecture only."
        />
      </div>
    </PageContainer>
  )
}

export default Universities
