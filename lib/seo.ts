import { Metadata } from 'next';
import { getAbsoluteUrl } from './utils';

interface SEOParams {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  noIndex?: boolean;
  noFollow?: boolean;
}

export function generateSEO(params: SEOParams): Metadata {
  const {
    title,
    description,
    image,
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    authors,
    tags,
    noIndex = false,
    noFollow = false,
  } = params;

  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Golden Digital';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://goldendigital.com';
  const defaultImage = `${siteUrl}/og-image.jpg`;

  const fullUrl = url ? getAbsoluteUrl(url) : siteUrl;
  const ogImage = image || defaultImage;

  const metadataBase = new URL(siteUrl);

  return {
    title: title ? `${title} | ${siteName}` : `${siteName} | Digital Marketing Agency`,
    description,
    metadataBase,
    alternates: {
      canonical: fullUrl,
    },
    ...(noIndex || noFollow
      ? { robots: { index: !noIndex, follow: !noFollow } }
      : {}),
    openGraph: {
      type,
      siteName,
      title: title || siteName,
      description,
      url: fullUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || siteName,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: title || siteName,
      description,
      images: [ogImage],
      creator: '@Goldendigital',
    },
  };
}

// JSON-LD structured data generators
export function generateWebsiteSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://goldendigital.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Golden Digital',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Digital marketing agency specializing in branding, video production, web development, and performance marketing.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Miami',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@goldendigital.com',
      contactType: 'customer service',
    },
    sameAs: [
      'https://linkedin.com/company/goldendigital',
      'https://instagram.com/goldendigital',
      'https://twitter.com/goldendigital',
      'https://youtube.com/goldendigital',
    ],
  };
}

export function generateWebsiteSchemaJsonLd() {
  return JSON.stringify(generateWebsiteSchema());
}

export function generateBlogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishedTime: string;
  author: string;
  image?: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://goldendigital.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: `${siteUrl}/resources/blog/${post.slug}`,
    datePublished: post.publishedTime,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Golden Digital',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    ...(post.image && {
      image: {
        '@type': 'ImageObject',
        url: post.image,
      },
    }),
  };
}

export function generateLocalBusinessSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://goldendigital.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Golden Digital',
    image: `${siteUrl}/og-image.jpg`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Miami',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.7617',
      longitude: '-80.1918',
    },
    url: siteUrl,
    telephone: '+1-305-555-0123',
    email: 'hello@goldendigital.com',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://linkedin.com/company/goldendigital',
      'https://instagram.com/goldendigital',
    ],
  };
}