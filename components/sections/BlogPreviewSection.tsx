'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Container, Section } from '@/components/ui/Container';
import { Card, CardImage, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Reveal, StaggerReveal } from '@/components/ui/Animate';
import { formatDate } from '@/lib/utils';

const blogPosts = [
  {
    title: 'The Psychology of Color in Luxury Brand Marketing',
    slug: 'psychology-of-color-luxury-marketing',
    excerpt: 'Discover how strategic color choices can elevate your brand perception and drive conversion in the luxury segment.',
    coverImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80',
    category: 'Branding',
    publishDate: '2026-04-10',
    readTime: '8 min read',
  },
  {
    title: '2026 Meta Ads Strategy: What Actually Works',
    slug: 'meta-ads-strategy-2026',
    excerpt: 'A deep dive into the winning ad strategies that are driving exceptional ROAS in the current Meta landscape.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    category: 'Performance Marketing',
    publishDate: '2026-04-08',
    readTime: '12 min read',
  },
  {
    title: 'Why Your E-commerce Store Needs a Brand Film',
    slug: 'ecommerce-brand-film',
    excerpt: 'Learn how cinematic video content can transform your product pages into immersive shopping experiences.',
    coverImage: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
    category: 'Video Production',
    publishDate: '2026-04-05',
    readTime: '6 min read',
  },
];

interface BlogPreviewSectionProps {
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
  limit?: number;
  className?: string;
}

export function BlogPreviewSection({
  title = 'Latest Insights',
  subtitle = 'Stay ahead of the curve with our expert analysis on digital marketing trends, strategies, and best practices.',
  showCTA = true,
  limit,
  className,
}: BlogPreviewSectionProps) {
  const displayPosts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <Section size="lg" className={cn('relative overflow-hidden', className)}>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground/[0.02]" />
      </div>

      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <Reveal>
              <Badge variant="primary" size="md" className="mb-4">
                Resources
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-foreground/70">
                {subtitle}
              </p>
            </Reveal>
          </div>
          {showCTA && (
            <Reveal delay={0.3}>
              <Button href="/resources/blog" variant="outline" size="lg">
                View All Posts
              </Button>
            </Reveal>
          )}
        </div>

        {/* Blog Grid */}
        <StaggerReveal staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post, index) => (
            <Link key={post.slug} href={`/resources/blog/${post.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="default" hover className="h-full group cursor-pointer overflow-hidden">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="glass" size="sm">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-foreground/50 mb-3">
                      <time>{formatDate(post.publishDate)}</time>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle as="h3" className="text-xl mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                  </div>
                </Card>
              </motion.div>
            </Link>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}