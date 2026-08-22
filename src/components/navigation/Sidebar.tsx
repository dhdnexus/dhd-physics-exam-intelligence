import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { primaryNav } from '@/data/navigation'
import { Logo } from '@/components/layout/Logo'
import { cn } from '@/lib/utils'

interface SidebarProps {
  /** Controls the mobile drawer. Ignored on desktop, where the sidebar is persistent. */
  open: boolean
  onClose: () => void
}

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-1 flex-col gap-1 px-3">
      {primaryNav.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          end={item.href === '/'}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              'group relative flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
              isActive
                ? 'bg-white/10 text-white'
                : 'text-white/65 hover:bg-white/5 hover:text-white/90'
            )
          }
        >
          {({ isActive }) => (
            <>
              <span
                aria-hidden
                className={cn(
                  'absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full bg-[color:var(--color-gold)] transition-opacity',
                  isActive ? 'opacity-100' : 'opacity-0'
                )}
              />
              <item.icon className="h-[18px] w-[18px] shrink-0" strokeWidth={1.75} />
              <span className="truncate">{item.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Desktop: persistent sidebar */}
      <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[248px] lg:shrink-0 lg:flex-col lg:border-r lg:border-white/10 lg:bg-[color:var(--color-navy)]">
        <div className="flex h-16 items-center border-b border-white/10 px-4">
          <Logo />
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto py-4">
          <NavLinks />
        </div>
        <div className="border-t border-white/10 px-4 py-3">
          <p className="font-mono text-[10px] tracking-wide text-white/35">
            VOL. 01 — FOUNDATION
          </p>
        </div>
      </aside>

      {/* Mobile: collapsible drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-40 bg-[color:var(--color-navy)]/50 backdrop-blur-[1px] lg:hidden"
              onClick={onClose}
              aria-hidden
            />
            <motion.aside
              key="drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.22, ease: 'easeOut' }}
              className="fixed inset-y-0 left-0 z-50 flex w-[264px] flex-col bg-[color:var(--color-navy)] lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
            >
              <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
                <Logo />
                <button
                  onClick={onClose}
                  aria-label="Close navigation"
                  className="rounded-md p-1.5 text-white/70 hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-1 flex-col overflow-y-auto py-4">
                <NavLinks onNavigate={onClose} />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
