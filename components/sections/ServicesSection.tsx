'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Container, Section, Grid } from '@/components/ui/Container';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Reveal, StaggerReveal, fadeInUp } from '@/components/ui/Animate';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Brand Experience',
    slug: 'brand-experience',
    description: 'Create immersive digital experiences that convert visitors into loyal customers.',
    badge: 'Web Development',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Content & Ad Production',
    slug: 'content-ad-production',
    description: 'Cinematic video production and macro photography that captures attention.',
    badge: 'Creative',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Performance Marketing',
    slug: 'performance-marketing',
    description: 'Data-driven campaigns that deliver measurable ROI across all platforms.',
    badge: 'Ads & SEM',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Branding & Identity',
    slug: 'branding-identity',
    description: 'Complete brand systems with logos, guidelines, and visual identities that resonate.',
    badge: 'Strategy',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Inbound & Growth',
    slug: 'inbound-growth',
    content: 'Strategic content and lead nurturing that builds lasting customer relationships.',
    badge: 'Content',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Marketing Automation',
    slug: 'marketing-automation',
    description: 'AI-powered workflows and tools that automate the customer journey.',
    badge: 'Tech',
  },
];

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
  limit?: number;
  className?: string;
}

export function ServicesSection({
  title = 'Our Services',
  subtitle = 'Comprehensive digital marketing solutions designed to transform your brand and drive measurable results.',
  showCTA = true,
  limit,
  className,
}: ServicesSectionProps) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <Section size="lg" className={cn('relative overflow-hidden', className)}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-foreground/[0.02]" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <Badge variant="outline" size="md" className="mb-4">
              What We Do
            </Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-foreground/70">
              {subtitle}
            </p>
          </Reveal>
        </div>

        {/* Services Grid */}
        <StaggerReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card
                variant="outline"
                hover
                className="h-full group cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <Badge variant="default" size="sm">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle as="h3" className="text-xl group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </StaggerReveal>

        {/* CTA */}
        {showCTA && (
          <Reveal delay={0.4}>
            <div className="text-center mt-12">
              <Button href="/services" variant="outline" size="lg">
                View All Services
              </Button>
            </div>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}