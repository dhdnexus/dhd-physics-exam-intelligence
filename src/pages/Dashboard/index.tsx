import { motion } from 'framer-motion'
import { PageContainer } from '@/components/layout/PageContainer'
import { KpiCard } from '@/components/analytics/KpiCard'
import { dashboardKpis } from '@/data/kpis'

export function Dashboard() {
  return (
    <PageContainer>
      {/* Hero */}
      <section className="bg-grid-faint relative overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-navy)] px-6 py-14 sm:px-12 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[color:var(--color-navy)] via-[color:var(--color-navy)]/95 to-[color:var(--color-navy-secondary)]"
        />
        <div className="relative">
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-gold)]"
          >
            DHD · PEI — Foundation Build
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-balance max-w-2xl font-serif text-4xl font-semibold leading-[1.1] text-white sm:text-5xl"
          >
            Physics Examination Intelligence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-5 max-w-xl text-balance text-base leading-relaxed text-white/70 sm:text-lg"
          >
            A digital repository and analytical platform for undergraduate university
            physics examinations.
          </motion.p>
        </div>
      </section>

      {/* KPI placeholders */}
      <section className="mt-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dashboardKpis.map((kpi, i) => (
            <KpiCard key={kpi.label} {...kpi} index={i} />
          ))}
        </div>
      </section>
    </PageContainer>
  )
}

export default Dashboard
