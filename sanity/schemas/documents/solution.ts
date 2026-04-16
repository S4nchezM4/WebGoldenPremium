import { defineType, defineField } from 'sanity';
import { seoFields, slugField } from '../index';

export const solution = defineType({
  name: 'solution',
  title: 'Solution',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    slugField,
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Lucide icon name',
    }),
    defineField({
      name: 'features',
      title: 'Features/Inclusions',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'pricing',
      title: 'Starting Price',
      type: 'string',
      description: 'e.g., "From $5,000"',
    }),
    defineField({
      name: 'cta',
      title: 'CTA Text',
      type: 'string',
      initialValue: 'Get Started',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
    ...seoFields,
  ],
  preview: {
    select: {
      title: 'title',
      pricing: 'pricing',
    },
    prepare({ title, pricing }) {
      return {
        title,
        subtitle: pricing || '',
      };
    },
  },
});