// Core Types for the Agency Marketing Platform

export interface SEOFields {
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
}

export interface Slug {
  current: string;
  source?: string;
}

export interface ImageAsset {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface Author {
  _id: string;
  name: string;
  slug: Slug;
  image?: ImageAsset;
  bio?: string;
  role?: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: Slug;
  description?: string;
}

export interface Tag {
  _id: string;
  title: string;
  slug: Slug;
}

export interface Service {
  _id: string;
  title: string;
  slug: Slug;
  description?: string;
  icon?: string;
  benefits?: string[];
  process?: ProcessStep[];
  technologies?: string[];
  faq?: FAQItem[];
  cta?: string;
}

export interface ProcessStep {
  _key: string;
  title: string;
  description: string;
}

export interface FAQItem {
  _key: string;
  question: string;
  answer: string;
}

export interface Solution {
  _id: string;
  title: string;
  slug: Slug;
  description?: string;
  icon?: string;
  features?: string[];
  pricing?: string;
  cta?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: Slug;
  excerpt?: string;
  coverImage?: ImageAsset;
  author?: Author;
  publishDate?: string;
  categories?: Category[];
  tags?: Tag[];
  content?: any[]; // Portable Text
  seoTitle?: string;
  seoDescription?: string;
  featured?: boolean;
  relatedPosts?: BlogPost[];
}

export interface Guide {
  _id: string;
  title: string;
  slug: Slug;
  description?: string;
  coverImage?: ImageAsset;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  readTime?: number;
  content?: any[];
  relatedServices?: Service[];
}

export interface Tutorial {
  _id: string;
  title: string;
  slug: Slug;
  description?: string;
  video?: string;
  content?: any[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  toolsUsed?: string[];
}

export interface Comparison {
  _id: string;
  title: string;
  slug: Slug;
  productA: string;
  productB: string;
  summary?: string;
  pros?: string[];
  cons?: string[];
  verdict?: string;
  content?: any[];
}

export interface Project {
  _id: string;
  title: string;
  slug: Slug;
  clientName?: string;
  industry?: string;
  projectType?: string;
  coverImage?: ImageAsset;
  gallery?: ImageAsset[];
  challenge?: string;
  solution?: string;
  technologies?: string[];
  results?: ProjectResult[];
  testimonial?: Testimonial;
  projectUrl?: string;
  relatedServices?: Service[];
}

export interface ProjectResult {
  _key: string;
  metric: string;
  value: string;
  description?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  image?: ImageAsset;
}

export interface LandingPage {
  _id: string;
  title: string;
  slug: Slug;
  heroTitle: string;
  heroSubtitle?: string;
  contentSections?: ContentSection[];
  cta?: CTASection;
  relatedServices?: Service[];
}

export interface ContentSection {
  _key: string;
  type: 'features' | 'stats' | 'testimonials' | 'pricing' | 'faq' | 'content';
  title?: string;
  items?: any[];
}

export interface CTASection {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonUrl?: string;
  calendlyUrl?: string;
}

export interface People {
  _id: string;
  name: string;
  slug: Slug;
  image?: ImageAsset;
  role: string;
  bio?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

// Navigation Types
export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export interface FooterLinks {
  services: NavItem[];
  solutions: NavItem[];
  resources: NavItem[];
  company: NavItem[];
}

// Animation Variants
export interface AnimationConfig {
  staggerChildren?: number;
  delayChildren?: number;
}

export interface MotionProps {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
}

// Component Props Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  className?: string;
}

export interface CardProps {
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
}