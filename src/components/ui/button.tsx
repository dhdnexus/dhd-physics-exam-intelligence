import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-[color:var(--color-navy)] text-white hover:bg-[color:var(--color-navy-secondary)]',
        gold: 'bg-[color:var(--color-gold)] text-[color:var(--color-navy)] hover:bg-[color:var(--color-gold-soft)]',
        outline:
          'border border-[color:var(--color-border)] bg-transparent text-[color:var(--color-navy)] hover:bg-[color:var(--color-navy)]/5',
        ghost: 'text-[color:var(--color-navy)] hover:bg-[color:var(--color-navy)]/5',
        link: 'text-[color:var(--color-navy)] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
