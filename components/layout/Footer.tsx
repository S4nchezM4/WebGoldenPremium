'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container, Section, Flex, Grid } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const footerLinks = {
  services: [
    { title: 'Brand Experience', href: '/services/brand-experience' },
    { title: 'Content Production', href: '/services/content-ad-production' },
    { title: 'Performance Marketing', href: '/services/performance-marketing' },
    { title: 'Branding & Identity', href: '/services/branding-identity' },
    { title: 'Marketing Automation', href: '/services/marketing-automation' },
  ],
  solutions: [
    { title: 'Brand Launch', href: '/solutions/brand-launch-startups' },
    { title: 'Ecommerce Growth', href: '/solutions/ecommerce-growth' },
    { title: 'Lead Generation', href: '/solutions/lead-generation' },
    { title: 'Omnichannel Strategy', href: '/solutions/omnichannel' },
  ],
  resources: [
    { title: 'Blog', href: '/resources/blog' },
    { title: 'Guides', href: '/resources/guides' },
    { title: 'Tutorials', href: '/resources/tutorials' },
    { title: 'Comparisons', href: '/resources/comparisons' },
  ],
  company: [
    { title: 'About', href: '/company/about' },
    { title: 'Team', href: '/company/team' },
    { title: 'Process', href: '/company/process' },
    { title: 'Careers', href: '/company/careers' },
  ],
};

const socialLinks = [
  { title: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { title: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { title: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { title: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <Section size="sm" variant="dark">
        <Container>
          <Grid cols={2} gap="lg" className="lg:grid-cols-5">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center">
                  <span className="text-foreground font-display font-bold text-xl">G</span>
                </div>
                <span className="font-display font-bold text-xl tracking-tight">
                  Golden<span className="text-accent">Digital</span>
                </span>
              </Link>
              <p className="text-background/70 text-sm leading-relaxed mb-6">
                Transforming brands through strategic creativity, high-end production, and measurable results.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.title}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                    aria-label={social.title}
                  >
                    <span className="sr-only">{social.title}</span>
                    <SocialIcon name={social.icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Solutions</h4>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* CTA Section */}
      <div className="border-t border-background/10">
        <Container>
          <Flex
            direction="col"
            align="center"
            justify="center"
            className="py-16 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to transform your brand?
              </h3>
              <p className="text-background/70 mb-8">
                Let&apos;s discuss how we can help you achieve your business goals with strategic marketing and stunning visuals.
              </p>
              <Flex gap={4} justify="center" className="flex-wrap">
                <Button href="/contact" variant="primary" size="lg">
                  Book a Consultation
                </Button>
                <Button href="/contact#project-form" variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10">
                  Request Proposal
                </Button>
              </Flex>
            </motion.div>
          </Flex>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <Container>
          <Flex
            direction="col"
            justify="between"
            align="center"
            className="py-6 gap-4 md:flex-row"
          >
            <p className="text-sm text-background/50">
              &copy; {new Date().getFullYear()} Golden Digital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-background/50 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-background/50 hover:text-background transition-colors">
                Terms of Service
              </Link>
            </div>
          </Flex>
        </Container>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  };
  return icons[name] || null;
}