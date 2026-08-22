export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-[color:var(--color-ink-faint)] sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} DHD Physics Exam Intelligence. Undergraduate
          examination archive &amp; analysis platform.
        </p>
        <p className="font-mono tracking-wide">DHD-PEI · Foundation Build · Session 01</p>
      </div>
    </footer>
  )
}
