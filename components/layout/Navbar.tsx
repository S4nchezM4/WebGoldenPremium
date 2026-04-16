'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

const navItems = [
  {
    title: 'Services',
    href: '/services',
    children: [
      { title: 'Brand Experience', href: '/services/brand-experience' },
      { title: 'Content & Ad Production', href: '/services/content-ad-production' },
      { title: 'Performance Marketing', href: '/services/performance-marketing' },
      { title: 'Branding & Identity', href: '/services/branding-identity' },
      { title: 'Inbound & Growth', href: '/services/inbound-growth' },
      { title: 'Marketing Automation', href: '/services/marketing-automation' },
    ],
  },
  {
    title: 'Solutions',
    href: '/solutions',
    children: [
      { title: 'Brand Launch for Startups', href: '/solutions/brand-launch-startups' },
      { title: 'Ecommerce Growth', href: '/solutions/ecommerce-growth' },
      { title: 'Lead Generation Systems', href: '/solutions/lead-generation' },
      { title: 'Omnichannel Strategy', href: '/solutions/omnichannel' },
    ],
  },
  {
    title: 'Projects',
    href: '/projects',
    children: [
      { title: 'Case Studies', href: '/projects/case-studies' },
      { title: 'Portfolio', href: '/projects/portfolio' },
    ],
  },
  {
    title: 'Resources',
    href: '/resources',
    children: [
      { title: 'Blog', href: '/resources/blog' },
      { title: 'Guides', href: '/resources/guides' },
      { title: 'Tutorials', href: '/resources/tutorials' },
      { title: 'Comparisons', href: '/resources/comparisons' },
    ],
  },
  {
    title: 'Company',
    href: '/company',
    children: [
      { title: 'About', href: '/company/about' },
      { title: 'Team', href: '/company/team' },
      { title: 'Process', href: '/company/process' },
      { title: 'Careers', href: '/company/careers' },
    ],
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg shadow-sm py-2'
          : 'bg-transparent py-4'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
                <span className="text-background font-display font-bold text-xl">G</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
                Golden<span className="text-accent">Digital</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm font-medium tracking-wide transition-colors duration-200',
                    'hover:text-accent flex items-center gap-1'
                  )}
                >
                  {item.title}
                  <motion.svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={cn(
                      'transition-transform duration-200',
                      activeDropdown === item.title ? 'rotate-180' : ''
                    )}
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </Link>

                <AnimatePresence>
                  {activeDropdown === item.title && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2 min-w-[200px]"
                    >
                      <div className="bg-background border border-foreground/10 rounded-xl shadow-xl p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className="block px-4 py-2 text-sm rounded-lg hover:bg-foreground/5 hover:text-accent transition-colors"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="hidden lg:inline-flex"
            >
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="w-full h-[2px] bg-foreground rounded-full origin-left"
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 0 }
                      : { rotate: 0, y: 0 }
                  }
                />
                <motion.span
                  className="w-full h-[2px] bg-foreground rounded-full"
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className="w-full h-[2px] bg-foreground rounded-full origin-left"
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: 0 }
                      : { rotate: 0, y: 0 }
                  }
                />
              </div>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-[72px] bg-background z-40 overflow-auto"
          >
            <Container className="py-8">
              <div className="space-y-6">
                {navItems.map((item) => (
                  <div key={item.title}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium text-foreground/80 hover:text-accent"
                    >
                      {item.title}
                    </Link>
                    <div className="mt-3 space-y-2 pl-4">
                      {item.children?.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-sm text-foreground/60 hover:text-accent"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t border-foreground/10">
                  <Button href="/contact" variant="primary" size="lg" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}