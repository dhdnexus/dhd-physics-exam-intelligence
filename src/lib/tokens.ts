/**
 * DHD-PEI design tokens, mirrored from src/styles/globals.css so that
 * TypeScript code (charts, canvas/SVG drawing, inline style overrides)
 * can reference the same values without duplicating hex codes.
 *
 * Source of truth for CSS custom properties remains globals.css.
 */

export const colors = {
  navy: '#0B1F3A',
  navySecondary: '#123057',
  gold: '#D4A017',
  goldSoft: '#E8C463',
  bg: '#F8FAFC',
  surface: '#FFFFFF',
  border: '#E5E7EB',
  ink: '#0B1F3A',
  inkMuted: '#4B5768',
  inkFaint: '#94A0B2',
  statusPositive: '#1F7A4D',
  statusWarning: '#B5650A',
  statusCritical: '#B3261E',
} as const

export const fonts = {
  serif: '"IBM Plex Serif", ui-serif, Georgia, serif',
  sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
  mono: '"IBM Plex Mono", ui-monospace, monospace',
} as const

export const radius = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
} as const

export const spacing = {
  gutter: '1.5rem',
  section: '4rem',
} as const
