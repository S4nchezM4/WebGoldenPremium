'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ContainerProps extends HTMLMotionProps<'div'> {
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'full';
  className?: string;
  children: React.ReactNode;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'default', className, children, ...props }, ref) => {
    const sizes = {
      default: 'max-w-7xl',
      sm: 'max-w-3xl',
      lg: 'max-w-5xl',
      xl: 'max-w-7xl',
      full: 'max-w-full',
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          'mx-auto w-full px-4 sm:px-6 lg:px-8',
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Container.displayName = 'Container';

interface SectionProps extends HTMLMotionProps<'section'> {
  variant?: 'default' | 'muted' | 'dark' | 'accent';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  children: React.ReactNode;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      variant = 'default',
      size = 'default',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      default: 'bg-background',
      muted: 'bg-foreground/[0.02]',
      dark: 'bg-foreground text-background',
      accent: 'bg-accent text-white',
    };

    const sizes = {
      default: 'py-16 md:py-24 lg:py-32',
      sm: 'py-12 md:py-16 lg:py-20',
      lg: 'py-24 md:py-32 lg:py-40',
    };

    return (
      <motion.section
        ref={ref}
        className={cn(
          'relative w-full',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.section>
    );
  }
);

Section.displayName = 'Section';

interface GridProps extends HTMLMotionProps<'div'> {
  cols?: 1 | 2 | 3 | 4 | 6;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children: React.ReactNode;
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ cols = 3, gap = 'md', className, children, ...props }, ref) => {
    const colClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
    };

    const gapClasses = {
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
      xl: 'gap-12',
    };

    return (
      <motion.div
        ref={ref}
        className={cn('grid', colClasses[cols], gapClasses[gap], className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Grid.displayName = 'Grid';

// Flex utilities
interface FlexProps extends HTMLMotionProps<'div'> {
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  gap?: 0 | 1 | 2 | 3 | 4 | 6 | 8;
  wrap?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      direction = 'row',
      justify = 'start',
      align = 'start',
      gap = 0,
      wrap = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const directionClasses = {
      row: 'flex-row',
      col: 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'col-reverse': 'flex-col-reverse',
    };

    const justifyClasses = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
    };

    const alignClasses = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    };

    const gapClasses = {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      6: 'gap-6',
      8: 'gap-8',
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          'flex',
          directionClasses[direction],
          justifyClasses[justify],
          alignClasses[align],
          gapClasses[gap],
          wrap && 'flex-wrap',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Flex.displayName = 'Flex';

export { Container, Section, Grid, Flex };
export type { ContainerProps, SectionProps, GridProps, FlexProps };