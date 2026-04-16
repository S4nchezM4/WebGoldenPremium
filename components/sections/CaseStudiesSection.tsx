'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Container, Section } from '@/components/ui/Container';
import { Card, CardImage, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Reveal, StaggerReveal, HoverScale } from '@/components/ui/Animate';

const caseStudies = [
  {
    title: 'Luxe Jewelry Brand Launch',
    slug: 'luxe-jewelry-brand-launch',
    clientName: 'Casa Diamante',
    industry: 'Fashion & Luxury',
    coverImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    challenge: 'A new jewelry brand needed to establish a premium online presence and drive direct sales through their e-commerce platform.',
    results: [
      { metric: 'Revenue Growth', value: '+340%' },
      { metric: 'Conversion Rate', value: '4.2%' },
    ],
  },
  {
    title: 'Tech Startup Omnichannel Campaign',
    slug: 'tech-startup-omnichannel',
    clientName: 'Nexus AI',
    industry: 'Technology',
    coverImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    challenge: 'A Series A startup needed to build brand awareness and generate qualified leads across multiple digital channels.',
    results: [
      { metric: 'Lead Increase', value: '+180%' },
      { metric: ' CAC Reduction', value: '-42%' },
    ],
  },
  {
    title: 'E-commerce Holiday Campaign',
    slug: 'ecommerce-holiday-campaign',
    clientName: 'Nordic Skincare',
    industry: 'Beauty & Cosmetics',
    coverImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
    challenge: 'An established beauty brand needed to drive record-breaking sales during the holiday season while building brand equity.',
    results: [
      { metric: 'Revenue', value: '$2.4M' },
      { metric: ' ROAS', value: '8.5x' },
    ],
  },
];

interface CaseStudiesSectionProps {
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
  limit?: number;
  className?: string;
}

export function CaseStudiesSection({
  title = 'Case Studies',
  subtitle = 'Real results for real brands. Explore how we&apos;ve helped businesses transform their digital presence and drive growth.',
  showCTA = true,
  limit,
  className,
}: CaseStudiesSectionProps) {
  const displayCases = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <Section size="lg" className={cn('relative overflow-hidden', className)}>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/[0.03] to-transparent" />
      </div>

      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <Reveal>
              <Badge variant="primary" size="md" className="mb-4">
                Success Stories
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-foreground/70" dangerouslySetInnerHTML={{ __html: subtitle }} />
            </Reveal>
          </div>
          {showCTA && (
            <Reveal delay={0.3}>
              <Button href="/projects/case-studies" variant="outline" size="lg">
                View All Projects
              </Button>
            </Reveal>
          )}
        </div>

        {/* Case Studies Grid */}
        <StaggerReveal staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayCases.map((study, index) => (
            <Link key={study.slug} href={`/projects/${study.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <HoverScale>
                  <Card variant="default" hover className="h-full group cursor-pointer overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                      <img
                        src={study.coverImage}
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <Badge variant="glass" size="md">
                          {study.industry}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-sm text-foreground/50 mb-2">{study.clientName}</p>
                      <CardTitle as="h3" className="text-xl mb-3 group-hover:text-accent transition-colors">
                        {study.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {study.challenge}
                      </CardDescription>

                      {/* Results */}
                      <div className="mt-6 pt-6 border-t border-foreground/10">
                        <div className="flex gap-6">
                          {study.results.map((result, i) => (
                            <div key={i}>
                              <p className="font-display text-2xl font-bold text-accent">
                                {result.value}
                              </p>
                              <p className="text-sm text-foreground/50">{result.metric}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </HoverScale>
              </motion.div>
            </Link>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}