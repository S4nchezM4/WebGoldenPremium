import { PageHeader } from '@/components/layout/PageHeader';
import { BlogPreviewSection } from '@/components/sections/BlogPreviewSection';
import { CTASection } from '@/components/sections/CTASection';
import { Badge } from '@/components/ui/Badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Expert insights on digital marketing, branding strategies, video production, and the latest industry trends.',
};

export default function BlogPage() {
  const categories = [
    'All',
    'Branding',
    'Performance Marketing',
    'Video Production',
    'Web Development',
    'Content Strategy',
    'E-commerce',
    'Industry Trends',
  ];

  return (
    <>
      <PageHeader
        title="Insights & Trends"
        subtitle="Expert Analysis"
        description="Stay ahead of the competition with in-depth articles on digital marketing, branding strategies, video production, and emerging industry trends."
        badge="Blog"
        tags={categories.slice(1, 5)}
      />

      {/* Categories Filter */}
      <section className="py-8 border-b border-foreground/10 sticky top-[72px] bg-background/80 backdrop-blur-lg z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, i) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  i === 0
                    ? 'bg-foreground text-background'
                    : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <BlogPreviewSection
        title=""
        subtitle=""
        showCTA={false}
      />

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Get Insights Delivered to Your Inbox
            </h2>
            <p className="text-lg text-background/70 mb-8">
              Join thousands of marketing professionals receiving our weekly analysis on digital trends and strategies.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background/10 border border-background/20 rounded-xl text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-white font-medium rounded-xl hover:bg-accent/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTASection
        title="Want Personalized Advice?"
        subtitle="Let's Connect"
        description="Our team of experts is ready to help you develop a winning digital marketing strategy."
        primaryCTA={{
          text: 'Book a Consultation',
          href: '/contact',
        }}
      />
    </>
  );
}