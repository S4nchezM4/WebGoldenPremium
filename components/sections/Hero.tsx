'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { TextReveal, Reveal, Parallax } from '@/components/ui/Animate';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  cta?: {
    primary: { text: string; href: string };
    secondary?: { text: string; href: string };
  };
  badge?: string;
  videoUrl?: string;
  className?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  cta,
  badge,
  videoUrl,
  className,
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className={cn('relative min-h-screen flex items-center', className)}>
      {/* Background Video/Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {videoUrl ? (
          <motion.div style={{ y }} className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          </motion.div>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground" />
            <div className="absolute inset-0">
              {/* Animated geometric shapes */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/4 -right-32 w-96 h-96 border border-accent/20 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] border border-accent/10 rounded-full"
              />
              <motion.div
                animate={{
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full"
              />
              <motion.div
                animate={{
                  x: [0, -20, 0],
                  y: [0, 30, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 left-1/3 w-3 h-3 bg-accent/50 rounded-full"
              />
            </div>
          </>
        )}
      </div>

      <Container className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36">
        <div className="max-w-5xl">
          {/* Badge */}
          {badge && (
            <Reveal delay={0.1}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-8"
              >
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-accent">{badge}</span>
              </motion.div>
            </Reveal>
          )}

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            <span className="block text-background">{title}</span>
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-background/70 mb-8 max-w-3xl"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-background/60 max-w-2xl mb-10"
            >
              {description}
            </motion.p>
          )}

          {/* CTAs */}
          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                href={cta.primary.href}
                variant="primary"
                size="xl"
                className="shadow-lg shadow-accent/30"
              >
                {cta.primary.text}
              </Button>
              {cta.secondary && (
                <Button
                  href={cta.secondary.href}
                  variant="outline"
                  size="xl"
                  className="border-background/30 text-background hover:bg-background/10"
                >
                  {cta.secondary.text}
                </Button>
              )}
            </motion.div>
          )}

          {/* Stats/Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '$10M+', label: 'Revenue Generated' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '5+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-background">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-background/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ height: [6, 12, 6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 bg-background/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
