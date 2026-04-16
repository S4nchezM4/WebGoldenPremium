import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Tailwind class merger utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Date formatting utilities
export function formatDate(date: string | Date, options?: Intl.DateTimeFormatOptions): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  });
}

export function formatRelativeDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInMs = now.getTime() - d.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
}

// Reading time calculator
export function calculateReadTime(content: any[]): number {
  if (!content) return 0;
  const text = content
    .filter((block) => block._type === 'block')
    .map((block) => block.children?.map((child: any) => child.text).join('') || '')
    .join(' ');
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// URL utilities
export function getAbsoluteUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return `${baseUrl}${path}`;
}

export function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}

// SEO utilities
export function generateMetaDescription(text: string, maxLength: number = 160): string {
  if (!text) return '';
  const cleanText = text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  if (cleanText.length <= maxLength) return cleanText;
  return cleanText.slice(0, maxLength - 3) + '...';
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

// Array utilities
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((groups, item) => {
    const groupKey = String(item[key]);
    return {
      ...groups,
      [groupKey]: [...(groups[groupKey] || []), item],
    };
  }, {} as Record<string, T[]>);
}

export function unique<T>(array: T[], key?: keyof T): T[] {
  if (!key) return Array.from(new Set(array));
  const seen = new Set();
  return array.filter((item) => {
    const k = String(item[key]);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

// Animation utilities
export function getStaggerDelay(index: number, baseDelay: number = 0.1): number {
  return index * baseDelay;
}

export const springTransition = {
  type: 'spring',
  stiffness: 260,
  damping: 20,
};

export const easeOutTransition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1],
};

export const easeInOutTransition = {
  duration: 0.4,
  ease: [0.4, 0, 0.2, 1],
};