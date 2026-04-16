import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/layout/PageHeader';
import { CTASection } from '@/components/sections/CTASection';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal, StaggerReveal } from '@/components/ui/Animate';
import type { Metadata } from 'next';

const services: Record<string, any> = {
  'brand-experience': {
    title: 'Brand Experience',
    slug: 'brand-experience',
    description: 'Create immersive digital experiences that convert visitors into loyal customers through strategic web development and UX/UI design.',
    icon: 'globe',
    benefits: [
      'Ultra-fast websites optimized for Core Web Vitals',
      'Immersive animations using GSAP and Framer Motion',
      'E-commerce experiences with art gallery aesthetics',
      'Conversion-focused design with measurable KPIs',
      'Seamless CMS integration for easy content management',
    ],
    process: [
      { title: 'Discovery', description: 'Deep dive into your brand, users, and business goals.' },
      { title: 'UX Strategy', description: 'Information architecture, user flows, and wireframes.' },
      { title: 'Visual Design', description: 'Stunning interfaces that capture your brand essence.' },
      { title: 'Development', description: 'High-performance Next.js implementation.' },
      { title: 'Testing & Launch', description: 'Rigorous QA and strategic deployment.' },
    ],
    technologies: ['Next.js 14', 'React', 'TailwindCSS', 'GSAP', 'Framer Motion', 'Sanity CMS', 'Vercel'],
    faq: [
      { question: 'How long does a typical web project take?', answer: 'Most projects range from 6-12 weeks depending on complexity. We provide detailed timelines during the discovery phase.' },
      { question: 'Do you provide hosting and maintenance?', answer: 'Yes, we offer comprehensive hosting on Vercel with ongoing maintenance packages for peace of mind.' },
      { question: 'Can you work with existing brand guidelines?', answer: 'Absolutely. We integrate seamlessly with existing brand systems while elevating digital experiences.' },
    ],
  },
  'content-ad-production': {
    title: 'Content & Ad Production',
    slug: 'content-ad-production',
    description: 'Cinematic video production and macro photography that captures attention and drives engagement across all platforms.',
    icon: 'video',
    benefits: [
      'Macro product photography with dramatic lighting',
      '15-30 second commercial production with VFX',
      'Motion graphics for explainers and social content',
      'Full post-production with color grading',
      'Multi-platform optimization',
    ],
    process: [
      { title: 'Concept', description: 'Creative ideation and storyboard development.' },
      { title: 'Pre-Production', description: 'Location scouting, talent selection, and scheduling.' },
      { title: 'Production', description: 'Professional filming with cinema-grade equipment.' },
      { title: 'Post-Production', description: 'Editing, VFX, color grading, and sound design.' },
      { title: 'Delivery', description: 'Multi-format export for all platforms.' },
    ],
    technologies: ['RED Cinema Cameras', 'Profoto Lighting', 'DaVinci Resolve', 'After Effects', 'Cinema 4D'],
    faq: [
      { question: 'What types of video content do you produce?', answer: 'We produce commercials, social media content, product videos, brand films, motion graphics, and 3D animations.' },
      { question: 'Do you offer演员 casting services?', answer: 'Yes, we have relationships with talent agencies and can handle full casting for your projects.' },
    ],
  },
  'performance-marketing': {
    title: 'Performance Marketing',
    slug: 'performance-marketing',
    description: 'Data-driven campaigns that deliver measurable ROI across Google Ads, Meta Ads, TikTok Ads, and LinkedIn Ads.',
    icon: 'chart',
    benefits: [
      'Multi-channel campaign management',
      'Advanced audience targeting and segmentation',
      'A/B testing and conversion rate optimization',
      'Real-time analytics and reporting',
      'Transparent ROI tracking',
    ],
    process: [
      { title: 'Audit', description: 'Analysis of current marketing efforts and opportunities.' },
      { title: 'Strategy', description: 'Channel mix, budget allocation, and targeting strategy.' },
      { title: 'Setup', description: 'Campaign structure, creative development, and tracking.' },
      { title: 'Launch', description: 'Strategic deployment with initial optimization.' },
      { title: 'Optimize', description: 'Continuous testing and performance improvement.' },
    ],
    technologies: ['Google Ads', 'Meta Ads Manager', 'TikTok Ads', 'LinkedIn Ads', 'Google Analytics 4', 'Tag Manager'],
    faq: [
      { question: 'What is a typical ad spend budget?', answer: 'We work with budgets from $5,000/month and up. Most clients see optimal results at $10,000+/month.' },
      { question: 'How quickly will I see results?', answer: 'Most clients see meaningful results within 4-6 weeks of campaign launch.' },
    ],
  },
  'branding-identity': {
    title: 'Branding & Identity',
    slug: 'branding-identity',
    description: 'Complete brand systems with logos, guidelines, and visual identities that resonate with your target audience.',
    icon: 'palette',
    benefits: [
      'Strategic brand positioning and messaging',
      'Logo design and visual identity systems',
      'Brand guidelines and design systems',
      'Competitive analysis and market research',
      'Brand voice and copywriting',
    ],
    process: [
      { title: 'Research', description: 'Market analysis, competitor audit, and target persona development.' },
      { title: 'Strategy', description: 'Brand positioning, messaging framework, and voice guidelines.' },
      { title: 'Identity', description: 'Logo design, color palette, typography, and visual elements.' },
      { title: 'Guidelines', description: 'Comprehensive brand guidelines documentation.' },
      { title: 'Launch', description: 'Brand rollout strategy and asset delivery.' },
    ],
    technologies: ['Figma', 'Illustrator', 'Photoshop', 'After Effects', 'Zeroheight'],
    faq: [
      { question: 'How long does a branding project take?', answer: 'Typical branding projects run 4-8 weeks from discovery to final delivery.' },
      { question: 'Do you provide source files?', answer: 'Yes, all final files are delivered in appropriate formats with full source files included.' },
    ],
  },
  'inbound-growth': {
    title: 'Inbound & Growth',
    slug: 'inbound-growth',
    description: 'Strategic content and lead nurturing that builds lasting customer relationships and drives sustainable growth.',
    icon: 'users',
    benefits: [
      'Content strategy aligned with buyer journey',
      'SEO-optimized blog and article writing',
      'Lead nurturing email sequences',
      'Social media content calendars',
      'Influencer partnership management',
    ],
    process: [
      { title: 'Audit', description: 'Content audit and competitive content analysis.' },
      { title: 'Strategy', description: 'Content calendar, topics, and distribution plan.' },
      { title: 'Creation', description: 'High-quality content production and optimization.' },
      { title: 'Distribution', description: 'Strategic publishing and promotion.' },
      { title: 'Analysis', description: 'Performance tracking and iterative improvement.' },
    ],
    technologies: ['HubSpot', 'Mailchimp', 'SEMrush', 'BuzzSumo', 'Contentful'],
    faq: [
      { question: 'How often should I publish content?', answer: 'We recommend at least 2-4 pieces per week for optimal inbound results. We can manage full production.' },
    ],
  },
  'marketing-automation': {
    title: 'Marketing Automation',
    slug: 'marketing-automation',
    description: 'AI-powered workflows and tools that automate the customer journey and maximize efficiency.',
    icon: 'cpu',
    benefits: [
      'Automated email nurturing sequences',
      'CRM integration and workflow setup',
      'Lead scoring and qualification',
      'Personalization and dynamic content',
      'Analytics and attribution modeling',
    ],
    process: [
      { title: 'Mapping', description: 'Customer journey mapping and automation opportunity identification.' },
      { title: 'Setup', description: 'Platform selection, integration, and workflow configuration.' },
      { title: 'Content', description: 'Email sequences, landing pages, and lead magnets.' },
      { title: 'Testing', description: 'Quality assurance and performance baseline.' },
      { title: 'Optimization', description: 'Continuous improvement based on performance data.' },
    ],
    technologies: ['HubSpot', 'ActiveCampaign', 'Zapier', 'Make', 'OpenAI'],
    faq: [
      { question: 'What platforms do you work with?', answer: 'We specialize in HubSpot, ActiveCampaign, and various AI tools depending on your needs.' },
    ],
  },
};

interface ServicePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services[params.slug];
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services[params.slug];
  if (!service) notFound();

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle="Our Services"
        description={service.description}
        badge={service.title}
        tags={service.technologies?.slice(0, 4)}
      />

      {/* Benefits Grid */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What You Get
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              A comprehensive suite of deliverables designed to maximize your return on investment.
            </p>
          </div>

          <StaggerReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit: string, i: number) => (
              <Card key={i} variant="outline" hover>
                <CardContent className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-foreground/80">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Process
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              A proven methodology that delivers results, every time.
            </p>
          </div>

          <div className="space-y-6">
            {service.process.map((step: any, i: number) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex gap-6 p-6 bg-background rounded-xl border border-foreground/10">
                  <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center font-display font-bold flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-foreground/60">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Technologies We Use
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {service.technologies.map((tech: string) => (
              <Badge key={tech} variant="outline" size="lg">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faq && (
        <section className="py-16 md:py-24 lg:py-32 bg-foreground/[0.02]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {service.faq.map((faq: any, i: number) => (
                <Card key={i} variant="outline">
                  <CardHeader>
                    <CardTitle as="h3" className="text-lg">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/60">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready to Get Started with ${service.title}?`}
        subtitle="Let's Talk"
        description="Schedule a free consultation and let's discuss how we can help you achieve your goals."
        primaryCTA={{
          text: 'Book a Consultation',
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