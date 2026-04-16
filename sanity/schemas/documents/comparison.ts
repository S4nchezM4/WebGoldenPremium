import { defineType, defineField } from 'sanity';
import { seoFields, slugField, portableText } from '../index';

export const comparison = defineType({
  name: 'comparison',
  title: 'Comparison',
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
      name: 'productA',
      title: 'Product/Service A',
      type: 'string',
      description: 'e.g., "Meta Ads"',
    }),
    defineField({
      name: 'productB',
      title: 'Product/Service B',
      type: 'string',
      description: 'e.g., "TikTok Ads"',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'pros',
      title: 'Pros',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Benefits of this comparison topic',
    }),
    defineField({
      name: 'cons',
      title: 'Cons / Considerations',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'verdict',
      title: 'Verdict',
      type: 'text',
      rows: 2,
      description: 'Our recommendation or conclusion',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [...portableText],
    }),
    ...seoFields,
  ],
  preview: {
    select: {
      title: 'title',
      productA: 'productA',
      productB: 'productB',
    },
    prepare({ title, productA, productB }) {
      return {
        title,
        subtitle: productA && productB ? `${productA} vs ${productB}` : '',
      };
    },
  },
});