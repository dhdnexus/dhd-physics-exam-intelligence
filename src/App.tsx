import { useRoutes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { routes } from '@/app/routes'
import { AppShell } from '@/components/layout/AppShell'
import { Breadcrumb } from '@/components/navigation/Breadcrumb'
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs'

function RoutedContent() {
  const element = useRoutes(routes)
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      >
        {element}
      </motion.div>
    </AnimatePresence>
  )
}

function Topbar() {
  const breadcrumbs = useBreadcrumbs()
  return <Breadcrumb items={breadcrumbs} />
}

function App() {
  return (
    <AppShell topbar={<Topbar />}>
      <RoutedContent />
    </AppShell>
  )
}

export default App
