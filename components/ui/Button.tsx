'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  isExternal?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      isExternal,
      isLoading,
      leftIcon,
      rightIcon,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      relative inline-flex items-center justify-center font-medium
      transition-all duration-300 ease-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const variants = {
      primary: `
        bg-foreground text-background
        hover:bg-foreground/90 hover:shadow-lg hover:shadow-foreground/20
        focus-visible:ring-foreground
      `,
      secondary: `
        bg-accent text-white
        hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20
        focus-visible:ring-accent
      `,
      outline: `
        border-2 border-foreground bg-transparent text-foreground
        hover:bg-foreground hover:text-background
        focus-visible:ring-foreground
      `,
      ghost: `
        bg-transparent text-foreground
        hover:bg-foreground/10
        focus-visible:ring-foreground
      `,
      gradient: `
        bg-gradient-to-r from-accent via-accent to-accent-hover
        text-white shadow-md
        hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02]
        focus-visible:ring-accent
      `,
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-1.5',
      md: 'px-6 py-3 text-base gap-2',
      lg: 'px-8 py-4 text-lg gap-2.5',
      xl: 'px-10 py-5 text-xl gap-3',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    const motionProps = {
      whileHover: variant !== 'outline' && variant !== 'ghost' ? { scale: 1.02 } : { scale: 1 },
      whileTap: { scale: 0.98 },
      transition: { type: 'spring', stiffness: 400, damping: 17 },
    };

    if (href) {
      const linkProps = isExternal
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {};

      return (
        <div className="inline-flex">
          <Link
            href={href}
            className={classes}
            {...linkProps}
          >
            {leftIcon && <span className="inline-flex">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="inline-flex">{rightIcon}</span>}
          </Link>
        </div>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        disabled={disabled || isLoading}
        {...motionProps}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.196A8 8 0 0120 12h4V0c-5.746 0-10 4.254-10 10h4zm2 5.196a8 8 0 01-2-5.196V24c5.746 0 10-4.254 10-10h-4v-4z"
            />
          </svg>
        ) : leftIcon ? (
          <span className="inline-flex">{leftIcon}</span>
        ) : null}
        {children}
        {!isLoading && rightIcon && <span className="inline-flex">{rightIcon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };