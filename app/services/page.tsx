import { PageHeader } from '@/components/layout/PageHeader';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CTASection } from '@/components/sections/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore our comprehensive digital marketing services including branding, video production, web development, performance marketing, and more.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Strategic solutions for digital transformation"
        description="From brand strategy to performance marketing, we provide end-to-end digital marketing solutions designed to help your brand grow and succeed in today's competitive landscape."
        badge="What We Offer"
        tags={['Branding', 'Video Production', 'Web Development', 'Performance Marketing']}
      />

      <ServicesSection showCTA={false} />

      {/* Features Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Strategy First', description: 'Every project starts with deep research and strategic planning to ensure maximum impact.' },
              { title: 'Creative Excellence', description: 'Our team delivers stunning visuals and compelling copy that captures attention.' },
              { title: 'Technical Precision', description: 'We build high-performance digital experiences optimized for conversion.' },
              { title: 'Data-Driven', description: 'Every decision is backed by analytics and real-time performance metrics.' },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Custom Solution?"
        subtitle="Let's Discuss"
        description="Every brand is unique. Let's talk about your specific challenges and create a tailored strategy."
        primaryCTA={{
          text: 'Request a Proposal',
          href: '/contact',
        }}
      />
    </>
  );
}