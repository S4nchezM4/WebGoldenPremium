import { Hero } from '@/components/sections/Hero';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BlogPreviewSection } from '@/components/sections/BlogPreviewSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Transform Your Brand Into a Market Leader"
        subtitle="Strategic creativity meets measurable results"
        description="We partner with ambitious brands to create immersive digital experiences, stunning visual content, and performance-driven marketing campaigns that drive growth."
        badge="Digital Marketing Agency"
        cta={{
          primary: { text: 'Start Your Project', href: '/contact' },
          secondary: { text: 'View Our Work', href: '/projects' },
        }}
      />

      {/* Services Section */}
      <ServicesSection
        title="Comprehensive Digital Marketing Solutions"
        subtitle="From strategy to execution, we provide the expertise and creative vision to transform your brand's digital presence."
        limit={6}
      />

      {/* Process Section */}
      <ProcessSection />

      {/* Case Studies Section */}
      <CaseStudiesSection
        title="Results That Speak for Themselves"
        subtitle="Real brands, real transformation, real ROI. Explore how we've helped businesses achieve their growth goals."
        limit={3}
      />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Blog Preview Section */}
      <BlogPreviewSection
        title="Insights & Trends"
        subtitle="Stay ahead with expert analysis on digital marketing, branding strategies, and industry innovations."
        limit={3}
      />

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Brand?"
        subtitle="Let's Talk"
        description="Schedule a free 15-minute strategy consultation and discover how we can help you achieve your business goals."
        primaryCTA={{
          text: 'Book a Consultation',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'View Our Services',
          href: '/services',
        }}
        variant="dark"
      />
    </>
  );
}