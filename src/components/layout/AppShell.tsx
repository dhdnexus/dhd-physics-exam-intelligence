import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Sidebar } from '@/components/navigation/Sidebar'
import { TopNavbar } from '@/components/navigation/TopNavbar'
import { Footer } from '@/components/layout/Footer'

interface AppShellProps {
  children: React.ReactNode
  /** Rendered in the top navbar — typically a Breadcrumb for the active page. */
  topbar?: React.ReactNode
}

export function AppShell({ children, topbar }: AppShellProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  // Close the mobile drawer on route change.
  useEffect(() => {
    setDrawerOpen(false)
  }, [location.pathname])

  return (
    <div className="flex min-h-screen bg-[color:var(--color-bg)]">
      <Sidebar open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <div className="flex min-h-screen flex-1 flex-col">
        <TopNavbar onMenuClick={() => setDrawerOpen(true)}>{topbar}</TopNavbar>
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
