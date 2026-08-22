import { Menu, Search } from 'lucide-react'
import type { ReactNode } from 'react'

interface TopNavbarProps {
  onMenuClick: () => void
  children?: ReactNode
}

export function TopNavbar({ onMenuClick, children }: TopNavbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-[color:var(--color-border)] bg-[color:var(--color-surface)]/90 px-4 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--color-surface)]/75 sm:px-6">
      <button
        onClick={onMenuClick}
        aria-label="Open navigation"
        className="rounded-md p-2 text-[color:var(--color-navy)] hover:bg-[color:var(--color-navy)]/5 lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="min-w-0 flex-1">{children}</div>

      <div className="hidden items-center gap-2 rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-bg)] px-3 py-1.5 text-sm text-[color:var(--color-ink-faint)] sm:flex">
        <Search className="h-4 w-4" strokeWidth={1.75} />
        <span>Search the corpus</span>
        <kbd className="ml-4 rounded border border-[color:var(--color-border)] bg-white px-1.5 py-0.5 font-mono text-[10px] text-[color:var(--color-ink-faint)]">
          ⌘K
        </kbd>
      </div>
    </header>
  )
}
