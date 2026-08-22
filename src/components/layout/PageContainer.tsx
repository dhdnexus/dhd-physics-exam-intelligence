import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PageContainerProps {
  children: ReactNode
  className?: string
}

/** Applies the platform's consistent max-width and padding to a page's content. */
export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8', className)}>
      {children}
    </div>
  )
}
