import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { CTASection } from '@/components/sections/CTASection';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal, StaggerReveal } from '@/components/ui/Animate';
import { formatDate, calculateReadTime } from '@/lib/utils';
import type { Metadata } from 'next';

const blogPosts: Record<string, any> = {
  'psychology-of-color-luxury-marketing': {
    title: 'The Psychology of Color in Luxury Brand Marketing',
    slug: 'psychology-of-color-luxury-marketing',
    excerpt: 'Discover how strategic color choices can elevate your brand perception and drive conversion in the luxury segment.',
    coverImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&q=80',
    category: 'Branding',
    publishDate: '2026-04-10',
    readTime: '8 min read',
    author: {
      name: 'Marcus Sterling',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    },
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Color is more than aesthetics—it\'s psychology. In luxury marketing, every hue carries meaning, evokes emotion, and shapes perception in ways that directly impact purchase decisions and brand loyalty.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Neuroscience of Color in Luxury Branding' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Studies show that up to 90% of snap judgments about products can be based on color alone. For luxury brands, this means color isn\'t just a design choice—it\'s a strategic business decision that affects everything from perceived value to conversion rates.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Signature Palettes That Command Authority' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Black remains the cornerstone of luxury—it suggests exclusivity, sophistication, and timelessness. When paired with metallic accents like gold or platinum, black creates an immediate perception of premium quality and high value.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Strategic Applications in Digital Marketing' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'In digital contexts, the psychology of color becomes even more critical. Your website, social media presence, and advertising creative must work harmoniously to create a cohesive brand experience that resonates with high-net-worth individuals.',
          },
        ],
      },
    ],
  },
  'meta-ads-strategy-2026': {
    title: '2026 Meta Ads Strategy: What Actually Works',
    slug: 'meta-ads-strategy-2026',
    excerpt: 'A deep dive into the winning ad strategies that are driving exceptional ROAS in the current Meta landscape.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    category: 'Performance Marketing',
    publishDate: '2026-04-08',
    readTime: '12 min read',
    author: {
      name: 'Sarah Chen',
      role: 'Head of Performance',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    },
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The Meta advertising landscape has shifted dramatically. What worked yesterday won\'t work tomorrow. Here\'s what\'s actually driving results in 2026.',
          },
        ],
      },
    ],
  },
  'ecommerce-brand-film': {
    title: 'Why Your E-commerce Store Needs a Brand Film',
    slug: 'ecommerce-brand-film',
    excerpt: 'Learn how cinematic video content can transform your product pages into immersive shopping experiences.',
    coverImage: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80',
    category: 'Video Production',
    publishDate: '2026-04-05',
    readTime: '6 min read',
    author: {
      name: 'David Torres',
      role: 'Video Producer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    },
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'In the crowded e-commerce landscape, a brand film isn\'t just nice-to-have—it\'s a competitive necessity. It\'s the difference between a transactional experience and a memorable brand connection.',
          },
        ],
      },
    ],
  },
};

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug];
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug];
  if (!post) notFound();

  const relatedPosts = Object.values(blogPosts)
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        title={post.title}
        description={post.excerpt}
        badge={post.category}
        tags={[post.readTime, formatDate(post.publishDate)]}
        thumbnail={post.coverImage}
      />

      {/* Article Content */}
      <article className="py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Author Info */}
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-foreground/10">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{post.author.name}</p>
              <p className="text-sm text-foreground/60">{post.author.role}</p>
            </div>
            <div className="ml-auto text-sm text-foreground/50">
              {formatDate(post.publishDate)}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.map((block: any, i: number) => {
              if (block._type === 'block') {
                const Tag = block.style === 'h2' ? 'h2' : block.style === 'h3' ? 'h3' : 'p';
                const text = block.children?.map((child: any) => child.text).join('') || '';
                return <Tag key={i}>{text}</Tag>;
              }
              return null;
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-foreground/10">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Branding</Badge>
              <Badge variant="outline">Marketing</Badge>
              <Badge variant="outline">Strategy</Badge>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 md:py-24 lg:py-32 bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-12">
            Related Articles
          </h2>
          <StaggerReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost: any) => (
              <Link key={relatedPost.slug} href={`/resources/blog/${relatedPost.slug}`}>
                <Card variant="default" hover className="h-full group cursor-pointer overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl">
                    <img
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="default" size="sm" className="mb-3">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="font-display text-lg font-semibold line-clamp-2 group-hover:text-accent transition-colors">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Brand?"
        subtitle="Let's Talk"
        description="Get expert guidance tailored to your specific challenges and goals."
        primaryCTA={{
          text: 'Book a Consultation',
          href: '/contact',
        }}
        variant="dark"
      />
    </>
  );
}