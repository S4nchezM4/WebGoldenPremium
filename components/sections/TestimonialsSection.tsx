'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container, Section, Flex } from '@/components/ui/Container';
import { Reveal, StaggerReveal, fadeInUp } from '@/components/ui/Animate';

const testimonials = [
  {
    quote: "Golden Digital transformed our entire online presence. Their strategic approach to branding and their stunning visual content helped us achieve a 340% increase in revenue within the first quarter.",
    author: 'Maria Elena Vasquez',
    role: 'Founder & CEO',
    company: 'Casa Diamante',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    quote: "The team's attention to detail and creative excellence is unmatched. They didn't just build us a website—they created an immersive digital experience that truly represents our brand values.",
    author: 'James Chen',
    role: 'Chief Marketing Officer',
    company: 'Nexus AI',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
  {
    quote: "From strategy to execution, Golden Digital delivered exceptional results. Their performance marketing expertise drove the most successful holiday campaign in our company's history.",
    author: 'Sofia Andersson',
    role: 'Director of E-commerce',
    company: 'Nordic Skincare',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
];

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function TestimonialsSection({
  title = 'What Our Clients Say',
  subtitle = 'Don&apos;t just take our word for it. Hear from the brands we&apos;ve helped transform.',
  className,
}: TestimonialsSectionProps) {
  return (
    <Section size="lg" variant="muted" className={cn('relative overflow-hidden', className)}>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Testimonials
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-foreground/70" dangerouslySetInnerHTML={{ __html: subtitle }} />
          </Reveal>
        </div>

        {/* Testimonials */}
        <StaggerReveal staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 shadow-lg border border-foreground/5"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-accent/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerReveal>

        {/* Trust Indicators */}
        <Reveal delay={0.4}>
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <p className="text-center text-sm text-foreground/50 mb-8">Trusted by forward-thinking brands</p>
            <Flex justify="center" className="flex-wrap gap-12 opacity-50">
              {['TechCrunch', 'Forbes', 'Fast Company', 'Wired', 'Inc.'].map((brand) => (
                <span key={brand} className="font-display text-xl text-foreground/40">
                  {brand}
                </span>
              ))}
            </Flex>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}