import type { RouteObject } from 'react-router-dom'
import { Dashboard } from '@/pages/Dashboard'
import { Corpus } from '@/pages/Corpus'
import { Question } from '@/pages/Question'
import { Universities } from '@/pages/Universities'
import { Analytics } from '@/pages/Analytics'
import { About } from '@/pages/About'
import { NotFound } from '@/pages/NotFound'

/**
 * The complete route table for DHD-PEI.
 *
 * Session 1 defines these six primary routes plus a catch-all 404.
 * No additional routes should be added outside of a session's scope.
 */
export const routes: RouteObject[] = [
  { path: '/', element: <Dashboard /> },
  { path: '/corpus', element: <Corpus /> },
  { path: '/question/:id', element: <Question /> },
  { path: '/universities', element: <Universities /> },
  { path: '/analytics', element: <Analytics /> },
  { path: '/about', element: <About /> },
  { path: '*', element: <NotFound /> },
]
