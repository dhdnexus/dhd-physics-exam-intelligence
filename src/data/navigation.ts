import {
  LayoutDashboard,
  Library,
  BrainCircuit,
  Landmark,
  BarChart3,
  Info,
} from 'lucide-react'
import type { NavItem } from '@/types'

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/', icon: LayoutDashboard },
  { label: 'Examination Corpus', href: '/corpus', icon: Library },
  { label: 'Question Intelligence', href: '/corpus', icon: BrainCircuit },
  { label: 'Universities', href: '/universities', icon: Landmark },
  { label: 'Analytics', href: '/analytics', icon: BarChart3 },
  { label: 'About', href: '/about', icon: Info },
]
