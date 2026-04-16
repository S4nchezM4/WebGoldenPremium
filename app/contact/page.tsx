import { PageHeader } from '@/components/layout/PageHeader';
import { CTASection } from '@/components/sections/CTASection';
import { Card, CardContent } from '@/components/ui/Card';
import { Input, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Animate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Golden Digital. Book a consultation, request a proposal, or tell us about your project.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Let's Talk"
        subtitle="Contact Us"
        description="Ready to transform your brand? We'd love to hear about your project and explore how we can help you achieve your goals."
        badge="Get in Touch"
      />

      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Reveal>
              <Card variant="default" padding="lg">
                <CardContent>
                  <h2 className="font-display text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="First Name" placeholder="John" required />
                      <Input label="Last Name" placeholder="Smith" required />
                    </div>
                    <Input label="Email" type="email" placeholder="john@company.com" required />
                    <Input label="Company" placeholder="Your Company" />
                    <Input
                      label="What are you interested in?"
                      placeholder="Select a service..."
                    />
                    <Textarea
                      label="Tell us about your project"
                      placeholder="Describe your project, goals, timeline, and budget..."
                      rows={5}
                    />
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Reveal>

            {/* Contact Info */}
            <div className="space-y-8">
              <Reveal delay={0.1}>
                <Card variant="outline" hover>
                  <CardContent className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-1">Email</h3>
                      <p className="text-foreground/70">hello@goldendigital.com</p>
                      <p className="text-sm text-foreground/50 mt-1">We respond within 24 hours</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal delay={0.2}>
                <Card variant="outline" hover>
                  <CardContent className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-1">Location</h3>
                      <p className="text-foreground/70">Miami, FL</p>
                      <p className="text-sm text-foreground/50 mt-1">Serving clients worldwide</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal delay={0.3}>
                <Card variant="outline" hover>
                  <CardContent className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-1">Quick Consultation</h3>
                      <p className="text-foreground/70">15-minute strategy call — Free</p>
                      <Button href="#calendly" variant="ghost" size="sm" className="mt-2 text-accent">
                        Schedule Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>

              {/* Calendly Placeholder */}
              <Reveal delay={0.4}>
                <Card variant="default">
                  <CardContent>
                    <h3 className="font-display text-lg font-semibold mb-4">Book a Consultation</h3>
                    <div className="aspect-[4/3] bg-foreground/[0.02] rounded-xl flex items-center justify-center border border-foreground/10">
                      <div className="text-center">
                        <p className="text-foreground/30">Calendly Integration</p>
                        <p className="text-sm text-foreground/50 mt-1">Schedule your free 15-min consultation</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}