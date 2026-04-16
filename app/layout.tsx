import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { Navbar, Footer } from '@/components/layout';
import { Container } from '@/components/ui/Container';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Golden Digital | Digital Marketing Agency',
    template: '%s | Golden Digital',
  },
  description:
    'Transform your brand with strategic marketing, stunning visuals, and measurable results. Full-service digital marketing agency specializing in branding, video production, and performance marketing.',
  keywords: [
    'digital marketing agency',
    'branding',
    'video production',
    'performance marketing',
    'web development',
    'UX/UI design',
    'ecommerce marketing',
    'content marketing',
  ],
  authors: [{ name: 'Golden Digital' }],
  creator: 'Golden Digital',
  publisher: 'Golden Digital',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://goldendigital.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Golden Digital',
    title: 'Golden Digital | Digital Marketing Agency',
    description:
      'Transform your brand with strategic marketing, stunning visuals, and measurable results.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Golden Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golden Digital | Digital Marketing Agency',
    description:
      'Transform your brand with strategic marketing, stunning visuals, and measurable results.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}