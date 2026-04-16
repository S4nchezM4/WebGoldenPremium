'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container, Section } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { TextReveal, AnimatedLine } from '@/components/ui/Animate';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  badgeVariant?: 'default' | 'primary' | 'secondary' | 'outline' | 'gradient';
  tags?: string[];
  thumbnail?: string;
  showAnimations?: boolean;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  description,
  badge,
  badgeVariant = 'primary',
  tags,
  thumbnail,
  showAnimations = true,
  className,
}: PageHeaderProps) {
  return (
    <Section
      size="lg"
      className={cn('relative overflow-hidden pt-32 md:pt-40 lg:pt-48', className)}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
      </div>

      <Container>
        <div className="max-w-4xl">
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant={badgeVariant} size="lg">
                {badge}
              </Badge>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: showAnimations ? 0.1 : 0 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            {showAnimations ? (
              <TextReveal delay={0.1}>{title}</TextReveal>
            ) : (
              title
            )}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: showAnimations ? 0.2 : 0 }}
              className="text-xl md:text-2xl text-foreground/70 mb-6"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: showAnimations ? 0.3 : 0 }}
              className="text-lg text-foreground/60 max-w-2xl"
            >
              {description}
            </motion.p>
          )}

          {/* Tags */}
          {tags && tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: showAnimations ? 0.4 : 0 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-sm bg-foreground/5 text-foreground/80 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}

          {/* Animated Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: showAnimations ? 0.5 : 0 }}
            className="mt-12"
          >
            <AnimatedLine className="origin-left" />
          </motion.div>
        </div>
      </Container>

      {/* Thumbnail/Image */}
      {thumbnail && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-16 max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </motion.div>
      )}
    </Section>
  );
}