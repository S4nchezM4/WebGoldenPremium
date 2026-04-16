'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface InputProps extends Omit<HTMLMotionProps<'input'>, 'size'> {
  label?: string;
  error?: string;
  hint?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'filled';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      size = 'md',
      variant = 'default',
      leftIcon,
      rightIcon,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    const baseStyles = `
      w-full bg-transparent
      transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
      disabled:opacity-50 disabled:cursor-not-allowed
      placeholder:text-foreground/40
    `;

    const variants = {
      default: 'border border-foreground/20 bg-background text-foreground rounded-lg',
      outline: 'border-2 border-foreground/30 bg-transparent text-foreground rounded-lg',
      filled: 'border border-foreground/10 bg-foreground/5 text-foreground rounded-lg',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-5 py-3.5 text-lg',
    };

    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      leftIcon && 'pl-10',
      rightIcon && 'pr-10',
      error && 'border-red-500 focus:ring-red-500/50',
      className
    );

    return (
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50 pointer-events-none">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            className={classes}
            {...props}
          />

          {rightIcon && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 pointer-events-none">
              {rightIcon}
            </span>
          )}
        </div>

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1.5 text-sm text-red-500"
          >
            {error}
          </motion.p>
        )}

        {hint && !error && (
          <p className="mt-1.5 text-sm text-foreground/50">{hint}</p>
        )}
      </motion.div>
    );
  }
);

Input.displayName = 'Input';

// Textarea component
interface TextareaProps extends Omit<HTMLMotionProps<'textarea'>, 'size'> {
  label?: string;
  error?: string;
  hint?: string;
  variant?: 'default' | 'outline' | 'filled';
  className?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      hint,
      variant = 'default',
      className,
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    const baseStyles = `
      w-full bg-transparent resize-none
      transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
      disabled:opacity-50 disabled:cursor-not-allowed
      placeholder:text-foreground/40
    `;

    const variants = {
      default: 'border border-foreground/20 bg-background text-foreground rounded-lg p-4',
      outline: 'border-2 border-foreground/30 bg-transparent text-foreground rounded-lg p-4',
      filled: 'border border-foreground/10 bg-foreground/5 text-foreground rounded-lg p-4',
    };

    const classes = cn(
      baseStyles,
      variants[variant],
      error && 'border-red-500 focus:ring-red-500/50',
      className
    );

    return (
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          className={classes}
          {...props}
        />

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1.5 text-sm text-red-500"
          >
            {error}
          </motion.p>
        )}

        {hint && !error && (
          <p className="mt-1.5 text-sm text-foreground/50">{hint}</p>
        )}
      </motion.div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Input, Textarea };
export type { InputProps, TextareaProps };