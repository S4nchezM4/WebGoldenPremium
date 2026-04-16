'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Reveal, TextReveal, Parallax } from '@/components/ui/Animate';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  calendlyUrl?: string;
  variant?: 'default' | 'dark' | 'gradient';
  className?: string;
}

export function CTASection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  variant = 'default',
  className,
}: CTASectionProps) {
  const variants = {
    default: 'bg-background',
    dark: 'bg-foreground text-background',
    gradient: 'bg-gradient-to-br from-foreground via-foreground to-foreground/90 text-background',
  };

  const contentVariants = {
    default: 'text-foreground',
    dark: 'text-background',
    gradient: 'text-background',
  };

  const buttonVariants = {
    default: 'bg-accent text-white hover:bg-accent/90',
    dark: 'bg-background text-foreground hover:bg-background/90',
    gradient: 'bg-accent text-white hover:bg-accent/90',
  };

  return (
    <Section size="lg" className={cn(variants[variant], className)}>
      {/* Background for gradient variant */}
      {variant === 'gradient' && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[128px]" />
        </div>
      )}

      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          {subtitle && (
            <Reveal>
              <span className={cn(
                'inline-block text-sm font-semibold uppercase tracking-widest mb-4',
                variant === 'default' ? 'text-accent' : 'text-accent'
              )}>
                {subtitle}
              </span>
            </Reveal>
          )}

          {/* Title */}
          <Reveal delay={0.1}>
            <h2 className={cn(
              'font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6',
              contentVariants[variant]
            )}>
              <TextReveal>{title}</TextReveal>
            </h2>
          </Reveal>

          {/* Description */}
          {description && (
            <Reveal delay={0.2}>
              <p className={cn(
                'text-lg md:text-xl mb-10 max-w-2xl mx-auto',
                variant === 'default' ? 'text-foreground/70' : 'text-background/70'
              )}>
                {description}
              </p>
            </Reveal>
          )}

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <Reveal delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4">
                {primaryCTA && (
                  <Button
                    href={primaryCTA.href}
                    variant="primary"
                    size="xl"
                    className={cn(
                      'shadow-lg',
                      variant === 'default' ? '' : 'shadow-background/20'
                    )}
                  >
                    {primaryCTA.text}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button
                    href={secondaryCTA.href}
                    variant="outline"
                    size="xl"
                    className={cn(
                      variant === 'default'
                        ? 'border-foreground/30 text-foreground hover:bg-foreground/5'
                        : 'border-background/30 text-background hover:bg-background/10'
                    )}
                  >
                    {secondaryCTA.text}
                  </Button>
                )}
              </div>
            </Reveal>
          )}

          {/* Calendly Embed Placeholder */}
          {variant === 'default' && (
            <div className="mt-16 p-8 bg-foreground/[0.02] rounded-2xl border border-foreground/10">
              <p className="text-sm text-foreground/50 mb-4">Prefer to schedule directly?</p>
              <div className="aspect-[3/1] bg-foreground/5 rounded-xl flex items-center justify-center">
                <span className="text-foreground/30">Calendly Integration Placeholder</span>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}