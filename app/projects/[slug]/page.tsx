import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { CTASection } from '@/components/sections/CTASection';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal, StaggerReveal } from '@/components/ui/Animate';
import type { Metadata } from 'next';

const projects: Record<string, any> = {
  'luxe-jewelry-brand-launch': {
    title: 'Luxe Jewelry Brand Launch',
    slug: 'luxe-jewelry-brand-launch',
    clientName: 'Casa Diamante',
    industry: 'Fashion & Luxury',
    projectType: 'Full Service',
    coverImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    challenge: 'Casa Diamante, a new luxury jewelry brand, needed to establish a premium online presence from scratch while driving direct e-commerce sales. With no existing digital footprint, they needed a complete digital transformation that would position them alongside established luxury brands.',
    solution: 'We developed a comprehensive brand strategy, created a stunning visual identity, and built a high-performance e-commerce website with immersive product photography. Our approach combined macro photography with dramatic lighting to showcase each piece as a work of art.',
    technologies: ['Next.js 14', 'Sanity CMS', 'TailwindCSS', 'GSAP', 'Stripe', 'Vercel'],
    results: [
      { metric: 'Revenue Growth', value: '+340%', description: 'First quarter sales exceeded projections by 3.4x' },
      { metric: 'Conversion Rate', value: '4.2%', description: 'Industry average is 1.3% for luxury goods' },
      { metric: 'Average Order Value', value: '$890', description: '45% above target AOV' },
      { metric: 'Time on Site', value: '6:45', description: '2.3x industry benchmark' },
    ],
    testimonial: {
      quote: "Golden Digital didn't just build us a website—they created an art gallery for our jewelry. Every detail reflects the premium quality of our brand. The results exceeded our wildest expectations.",
      author: 'Maria Elena Vasquez',
      role: 'Founder & CEO',
      company: 'Casa Diamante',
    },
    projectUrl: 'https://casadiamante.com',
    relatedServices: ['Brand Experience', 'Content & Ad Production', 'Performance Marketing'],
  },
  'tech-startup-omnichannel': {
    title: 'Tech Startup Omnichannel Campaign',
    slug: 'tech-startup-omnichannel',
    clientName: 'Nexus AI',
    industry: 'Technology',
    projectType: 'Campaign',
    coverImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    ],
    challenge: 'Nexus AI, a Series A AI startup, needed to build brand awareness and generate qualified leads across multiple digital channels while maintaining a cohesive brand presence.',
    solution: 'We developed an integrated marketing strategy spanning LinkedIn advertising, content marketing, and strategic partnerships. A coordinated campaign with compelling thought leadership content drove engagement across all touchpoints.',
    technologies: ['LinkedIn Ads', 'Google Analytics 4', 'HubSpot', 'Clearbit', 'Drift'],
    results: [
      { metric: 'Lead Increase', value: '+180%', description: 'MQLs exceeded sales team capacity' },
      { metric: 'CAC Reduction', value: '-42%', description: 'Optimized through continuous testing' },
      { metric: 'Brand Search Volume', value: '+280%', description: 'Brand awareness metrics spike' },
    ],
    testimonial: {
      quote: "The team's strategic approach and data-driven optimization delivered results we couldn't have imagined. They understand both B2B tech and the nuances of the enterprise sales cycle.",
      author: 'James Chen',
      role: 'Chief Marketing Officer',
      company: 'Nexus AI',
    },
    relatedServices: ['Performance Marketing', 'Inbound & Growth', 'Branding & Identity'],
  },
  'ecommerce-holiday-campaign': {
    title: 'E-commerce Holiday Campaign',
    slug: 'ecommerce-holiday-campaign',
    clientName: 'Nordic Skincare',
    industry: 'Beauty & Cosmetics',
    projectType: 'Campaign',
    coverImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80',
    ],
    challenge: 'Nordic Skincare needed to drive record-breaking holiday sales while building long-term brand equity, competing against established beauty giants with much larger budgets.',
    solution: 'We crafted a multi-channel campaign combining compelling video content, strategic influencer partnerships, and precision-targeted paid media. The hero brand film showcased the Scandinavian minimalism that sets them apart.',
    technologies: ['Meta Ads', 'TikTok Ads', 'YouTube', 'Klaviyo', 'Yotpo', 'Google Analytics 4'],
    results: [
      { metric: 'Revenue', value: '$2.4M', description: 'Most successful campaign in company history' },
      { metric: 'ROAS', value: '8.5x', description: 'Return on ad spend during peak period' },
      { metric: 'New Customers', value: '12,400', description: '46% of total holiday sales' },
    ],
    testimonial: {
      quote: "Working with Golden Digital felt like having an extension of our own team. They understood our brand DNA and amplified it in ways that resonated deeply with our audience.",
      author: 'Sofia Andersson',
      role: 'Director of E-commerce',
      company: 'Nordic Skincare',
    },
    relatedServices: ['Content & Ad Production', 'Performance Marketing', 'Inbound & Growth'],
  },
};

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects[params.slug];
  if (!project) return {};

  return {
    title: project.title,
    description: project.challenge?.slice(0, 160),
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects[params.slug];
  if (!project) notFound();

  return (
    <>
      <PageHeader
        title={project.title}
        subtitle={project.clientName}
        badge={project.industry}
        tags={[project.projectType]}
        thumbnail={project.coverImage}
      />

      {/* Project Overview */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-foreground/70 text-lg leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">Our Solution</h2>
                <p className="text-foreground/70 text-lg leading-relaxed">{project.solution}</p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  {project.gallery.map((img: string, i: number) => (
                    <div key={i} className="relative aspect-video rounded-xl overflow-hidden">
                      <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card variant="default" className="sticky top-24">
                <CardContent>
                  <h3 className="font-display text-lg font-semibold mb-6">Key Results</h3>
                  <div className="space-y-6">
                    {project.results.map((result: any, i: number) => (
                      <div key={i} className="border-b border-foreground/10 pb-6 last:border-0 last:pb-0">
                        <p className="font-display text-3xl font-bold text-accent">{result.value}</p>
                        <p className="font-medium mt-1">{result.metric}</p>
                        <p className="text-sm text-foreground/60 mt-1">{result.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-24 lg:py-32 bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold mb-8 text-center">Technologies & Tools</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech: string) => (
              <Badge key={tech} variant="outline" size="lg">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <svg className="w-12 h-12 text-accent/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="font-display text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="text-left">
                <p className="font-semibold">{project.testimonial.author}</p>
                <p className="text-sm text-foreground/60">
                  {project.testimonial.role}, {project.testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="py-16 md:py-24 lg:py-32 bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold mb-8 text-center">Related Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {project.relatedServices.map((service: string) => (
              <Link key={service} href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}>
                <Badge variant="primary" size="lg" className="cursor-pointer">
                  {service}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Something Remarkable?"
        subtitle="Let's Talk"
        description="Join the brands that have transformed their digital presence with Golden Digital."
        primaryCTA={{
          text: 'Start Your Project',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'View More Projects',
          href: '/projects',
        }}
        variant="dark"
      />
    </>
  );
}