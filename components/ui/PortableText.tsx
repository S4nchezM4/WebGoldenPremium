'use client';

import { PortableText as PortableTextReact, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 mt-12">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-4 mt-8">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-display text-xl md:text-2xl font-semibold mb-3 mt-6">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-6 py-2 my-6 italic text-foreground/70">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-lg leading-relaxed text-foreground/80 mb-4">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-foreground/80">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-foreground/80">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-lg">{children}</li>,
    number: ({ children }) => <li className="text-lg">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <u className="underline decoration-accent/50">{children}</u>,
    link: ({ children, value }) => {
      const href = value?.href || '';
      const isExternal = href.startsWith('http');
      return (
        <a
          href={href}
          className="text-accent hover:text-accent-hover underline underline-offset-2"
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => (
      <figure className="my-8">
        <div className="relative aspect-video rounded-xl overflow-hidden">
          <Image
            src={value?.asset?.url || '/placeholder.jpg'}
            alt={value?.alt || 'Image'}
            fill
            className="object-cover"
          />
        </div>
        {value?.caption && (
          <figcaption className="mt-3 text-sm text-foreground/60 text-center">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
    code: ({ value }) => (
      <div className="my-6 rounded-xl bg-foreground text-background p-6 overflow-x-auto">
        <code className="font-mono text-sm">{value.code}</code>
        {value.language && (
          <div className="mt-2 text-xs text-foreground/60 uppercase tracking-wider">
            {value.language}
          </div>
        )}
      </div>
    ),
    callout: ({ value }) => {
      const styles = {
        info: 'border-accent bg-accent/5',
        warning: 'border-amber-500 bg-amber-500/5',
        success: 'border-green-500 bg-green-500/5',
        error: 'border-red-500 bg-red-500/5',
      };
      return (
        <div
          className={cn(
            'my-6 p-4 rounded-lg border-l-4',
            styles[value?.type as keyof typeof styles] || styles.info
          )}
        >
          <p className="text-foreground/80">{value?.text}</p>
        </div>
      );
    },
  },
};

interface PortableTextProps {
  value: any[];
  className?: string;
  components?: PortableTextComponents;
}

export function PortableText({ value, className, components: customComponents }: PortableTextProps) {
  return (
    <div className={cn('prose prose-lg max-w-none', className)}>
      <PortableTextReact value={value} components={customComponents || components} />
    </div>
  );
}