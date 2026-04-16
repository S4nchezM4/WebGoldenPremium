import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Sanity Client Configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_READ_TOKEN,
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Fetch helper with caching
export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: Record<string, any>;
  tags?: string[];
}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'production' ? 3600 : 0,
      tags,
    },
  });
}

// GROQ Query templates
export const groq = {
  // Blog posts
  allBlogPosts: `*[_type == "blogPost"] | order(publishDate desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    author->{name, slug, image},
    publishDate,
    categories[]->{title, slug},
    featured
  }`,

  blogPostBySlug: `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    author->{name, slug, image, role, bio},
    publishDate,
    categories[]->{title, slug},
    tags[]->{title, slug},
    content,
    seoTitle,
    seoDescription,
    featured,
    relatedPosts[]->{title, slug, excerpt, coverImage}
  }`,

  // Guides
  allGuides: `*[_type == "guide"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    coverImage,
    difficulty,
    readTime
  }`,

  // Tutorials
  allTutorials: `*[_type == "tutorial"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    video,
    difficulty,
    toolsUsed
  }`,

  // Comparisons
  allComparisons: `*[_type == "comparison"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    productA,
    productB,
    summary
  }`,

  // Projects (Case Studies)
  allProjects: `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    clientName,
    industry,
    projectType,
    coverImage,
    challenge,
    solution,
    results,
    testimonial
  }`,

  projectBySlug: `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    clientName,
    industry,
    projectType,
    coverImage,
    gallery,
    challenge,
    solution,
    technologies,
    results,
    testimonial,
    projectUrl,
    relatedServices[]->{title, slug, icon}
  }`,

  // Services
  allServices: `*[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    icon,
    benefits,
    process,
    technologies,
    faq
  }`,

  serviceBySlug: `*[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    icon,
    benefits,
    process,
    technologies,
    faq,
    cta,
    relatedProjects[]->{title, slug, coverImage, clientName}
  }`,

  // Solutions
  allSolutions: `*[_type == "solution"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    icon,
    features,
    pricing,
    cta
  }`,

  // Team
  allTeamMembers: `*[_type == "people"] | order(order asc) {
    _id,
    name,
    slug,
    image,
    role,
    bio,
    social
  }`,

  // Landing Pages
  landingPageBySlug: `*[_type == "landingPage" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    heroTitle,
    heroSubtitle,
    contentSections,
    cta,
    relatedServices[]->{title, slug, icon, description}
  }`,

  // Navigation
  navigation: `*[_type == "navigation"][0] {
    mainNav[] {
      title,
      href,
      "children": subMenu[] {
        title,
        href
      }
    },
    footerLinks {
      services[],
      solutions[],
      resources[],
      company[]
    }
  }`,

  // Site Settings
  siteSettings: `*[_type == "siteSettings"][0] {
    siteName,
    tagline,
    description,
    logo,
    socialLinks,
    contactInfo
  }`,

  // SEO pages (for dynamic generation)
  seoLandingPages: `*[_type == "landingPage" && slug.current in $slugs][0] {
    _id,
    title,
    slug,
    heroTitle,
    heroSubtitle,
    contentSections,
    cta
  }`,
};