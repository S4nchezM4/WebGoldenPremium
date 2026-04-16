'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'featured' | 'compact' | 'outline' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      hover = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'relative overflow-hidden';

    const variants = {
      default: 'bg-background border border-foreground/10 rounded-xl',
      featured: 'bg-gradient-to-br from-foreground to-foreground/80 text-background rounded-2xl',
      compact: 'bg-background rounded-lg',
      outline: 'border-2 border-foreground/20 rounded-xl bg-transparent',
      glass: 'bg-background/80 backdrop-blur-md border border-foreground/10 rounded-xl',
    };

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };

    const classes = cn(
      baseStyles,
      variants[variant],
      paddings[padding],
      className
    );

    const hoverProps = hover
      ? {
          whileHover: { y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' },
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        }
      : {};

    return (
      <motion.div
        ref={ref}
        className={classes}
        {...hoverProps}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

// Card sub-components
interface CardHeaderProps extends HTMLMotionProps<'div'> {
  className?: string;
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <motion.div
      ref={ref}
      className={cn('mb-4', className)}
      {...props}
    >
      {children}
    </motion.div>
  )
);

CardHeader.displayName = 'CardHeader';

interface CardTitleProps extends Omit<HTMLMotionProps<'h3'>, 'children'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: React.ReactNode;
}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ as: Component = 'h3', className, children, ...props }, ref) => (
    <Component
      ref={ref}
      className={cn('font-display font-semibold tracking-tight', className)}
      {...props}
    >
      {children}
    </Component>
  )
);

CardTitle.displayName = 'CardTitle';

interface CardDescriptionProps extends HTMLMotionProps<'p'> {
  className?: string;
}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => (
    <motion.p
      ref={ref}
      className={cn('text-foreground/70 text-sm leading-relaxed', className)}
      {...props}
    >
      {children}
    </motion.p>
  )
);

CardDescription.displayName = 'CardDescription';

interface CardContentProps extends HTMLMotionProps<'div'> {
  className?: string;
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => (
    <motion.div
      ref={ref}
      className={cn('', className)}
      {...props}
    >
      {children}
    </motion.div>
  )
);

CardContent.displayName = 'CardContent';

interface CardFooterProps extends HTMLMotionProps<'div'> {
  className?: string;
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => (
    <motion.div
      ref={ref}
      className={cn('mt-4 flex items-center gap-3', className)}
      {...props}
    >
      {children}
    </motion.div>
  )
);

CardFooter.displayName = 'CardFooter';

interface CardImageProps extends HTMLMotionProps<'div'> {
  src: string;
  alt: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'auto';
  className?: string;
}

const CardImage = forwardRef<HTMLDivElement, CardImageProps>(
  ({ src, alt, aspectRatio = 'video', className, ...props }, ref) => {
    const aspectRatios = {
      video: 'aspect-video',
      square: 'aspect-square',
      portrait: 'aspect-[3/4]',
      auto: '',
    };

    return (
      <motion.div
        ref={ref}
        className={cn('relative overflow-hidden rounded-lg', aspectRatios[aspectRatio], className)}
        {...props}
      >
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>
    );
  }
);

CardImage.displayName = 'CardImage';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardImage };
export type { CardProps };