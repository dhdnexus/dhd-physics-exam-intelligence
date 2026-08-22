import { useLocation } from 'react-router-dom'
import type { BreadcrumbItem } from '@/types'

const staticLabels: Record<string, string> = {
  '/': 'Dashboard',
  '/corpus': 'Examination Corpus',
  '/universities': 'Universities',
  '/analytics': 'Analytics',
  '/about': 'About',
}

/**
 * Builds a breadcrumb trail for the current route.
 *
 * Reads the id straight off the pathname (rather than via useParams)
 * because this hook is consumed by the top navbar, which sits
 * alongside the routed page tree rather than beneath it.
 */
export function useBreadcrumbs(): BreadcrumbItem[] {
  const { pathname } = useLocation()

  if (pathname === '/') {
    return [{ label: 'Dashboard' }]
  }

  if (pathname.startsWith('/question/')) {
    const id = pathname.split('/question/')[1]
    return [
      { label: 'Dashboard', href: '/' },
      { label: 'Examination Corpus', href: '/corpus' },
      { label: id ? `Question ${id}` : 'Question' },
    ]
  }

  const label = staticLabels[pathname]
  if (label) {
    return [{ label: 'Dashboard', href: '/' }, { label }]
  }

  return [{ label: 'Dashboard', href: '/' }, { label: 'Not Found' }]
}
