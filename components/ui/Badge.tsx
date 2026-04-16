'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface BadgeProps extends HTMLMotionProps<'span'> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'gradient' | 'glass' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'default',
      size = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center
      font-medium tracking-wide uppercase
      transition-all duration-200
    `;

    const variants = {
      default: 'bg-foreground/10 text-foreground',
      primary: 'bg-accent text-white',
      secondary: 'bg-accent-hover text-white',
      outline: 'border-2 border-foreground/30 text-foreground bg-transparent',
      gradient: 'bg-gradient-to-r from-accent to-accent-hover text-white',
      glass: 'bg-white/10 backdrop-blur-md text-white border border-white/20',
      success: 'bg-green-500/10 text-green-600 border border-green-500/30',
      warning: 'bg-amber-500/10 text-amber-600 border border-amber-500/30',
      error: 'bg-red-500/10 text-red-600 border border-red-500/30',
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-[10px] rounded',
      md: 'px-3 py-1 text-xs rounded-md',
      lg: 'px-4 py-1.5 text-sm rounded-lg',
    };

    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    return (
      <motion.span
        ref={ref}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
export type { BadgeProps };