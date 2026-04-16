'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container, Section } from '@/components/ui/Container';
import { Reveal, StaggerReveal } from '@/components/ui/Animate';

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into understanding your brand, goals, and target audience through collaborative workshops and research.',
    deliverables: ['Brand audit', 'Competitor analysis', 'Target persona definition', 'Goal alignment'],
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Crafting a comprehensive roadmap that aligns creative vision with business objectives and market opportunities.',
    deliverables: ['Creative strategy', 'Channel mix', 'Content calendar', 'KPIs & milestones'],
  },
  {
    number: '03',
    title: 'Creation',
    description: 'Bringing ideas to life through stunning visuals, compelling copy, and seamless technology that captures your brand essence.',
    deliverables: ['Visual identity', 'Content production', 'Web development', 'Campaign assets'],
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description: 'Executing campaigns with precision, monitoring performance in real-time, and optimizing for maximum impact.',
    deliverables: ['Campaign launch', 'Performance tracking', 'A/B testing', 'Ongoing optimization'],
  },
];

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function ProcessSection({
  title = 'Our Process',
  subtitle = 'A proven methodology that transforms ideas into impactful results through four strategic phases.',
  className,
}: ProcessSectionProps) {
  return (
    <Section size="lg" variant="dark" className={cn('relative overflow-hidden', className)}>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-foreground/95" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/50 rounded-full blur-[128px]" />
        </div>
      </div>

      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <Reveal>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Our Methodology
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-background mb-6">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-background/70">
              {subtitle}
            </p>
          </Reveal>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-background/20 to-transparent -translate-y-1/2" />

          <StaggerReveal staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-8 hover:bg-background/10 transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-display text-5xl font-bold text-accent/30 group-hover:text-accent/50 transition-colors">
                      {step.number}
                    </span>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-background/20 to-transparent" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-2xl font-bold text-background mb-4 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-background/60 mb-6">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2">
                    {step.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-background/50">
                        <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.4}>
          <div className="text-center mt-16">
            <p className="text-background/60 mb-6">
              Ready to start your project? Let&apos;s discuss your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-medium rounded-xl hover:bg-accent/90 transition-colors"
              >
                Book a Consultation
              </a>
              <a
                href="/company/process"
                className="inline-flex items-center justify-center px-8 py-4 border border-background/30 text-background font-medium rounded-xl hover:bg-background/10 transition-colors"
              >
                Learn More About Our Process
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}