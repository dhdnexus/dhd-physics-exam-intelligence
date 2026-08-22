import { Link } from 'react-router-dom'
import { CompassIcon } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { EmptyState } from '@/components/layout/EmptyState'
import { Button } from '@/components/ui/button'

export function NotFound() {
  return (
    <PageContainer>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <p className="font-mono text-sm tracking-[0.2em] text-[color:var(--color-gold)]">
          ERROR 404
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-[color:var(--color-navy)]">
          Record not found
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
          There's no entry in the archive at this address. It may have been moved, or
          never catalogued.
        </p>
        <div className="mt-8 w-full max-w-md">
          <EmptyState icon={CompassIcon} title="Nothing here yet" />
        </div>
        <Button className="mt-8" onClick={() => window.history.back()} variant="outline">
          Go back
        </Button>
        <Link to="/" className="mt-3 text-sm font-medium text-[color:var(--color-navy)] underline-offset-4 hover:underline">
          Return to Dashboard
        </Link>
      </div>
    </PageContainer>
  )
}

export default NotFound
