import { PageHeader } from '@/components/layout/PageHeader';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { CTASection } from '@/components/sections/CTASection';
import { Badge } from '@/components/ui/Badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore our portfolio of brand transformations, campaign successes, and creative productions.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Work"
        subtitle="Case Studies & Portfolio"
        description="Real results for real brands. Explore how we&apos;ve helped businesses transform their digital presence and drive measurable growth."
        badge="Projects"
        tags={['Case Studies', 'Portfolio', 'Results']}
      />

      <CaseStudiesSection
        title=""
        subtitle=""
        showCTA={false}
      />

      {/* Portfolio Gallery Teaser */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Portfolio Highlights
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              A visual journey through our most impactful creative work.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
              'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
              'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
              'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&q=80',
              'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80',
              'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
              'https://images.unsplash.com/photo-1559028012-481c04c702dc?w=600&q=80',
              'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
            ].map((img, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Portfolio ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-background opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Project in Mind?"
        subtitle="Let's Create Together"
        description="Whether you need a brand refresh, a new campaign, or a complete digital transformation, we're ready to bring your vision to life."
        primaryCTA={{
          text: 'Start Your Project',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'View All Services',
          href: '/services',
        }}
      />
    </>
  );
}