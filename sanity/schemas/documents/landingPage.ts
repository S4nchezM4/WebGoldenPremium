import { defineType, defineField } from 'sanity';
import { seoFields, slugField } from '../index';

export const landingPage = defineType({
  name: 'landingPage',
  title: 'SEO Landing Page',
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
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alt text' },
      ],
    }),
    defineField({
      name: 'contentSections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'featureSection',
          fields: [
            { name: 'title', type: 'string', title: 'Section Title' },
            { name: 'subtitle', type: 'string', title: 'Section Subtitle' },
            {
              name: 'features',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'title', type: 'string', title: 'Feature Title' },
                    { name: 'description', type: 'text', title: 'Feature Description' },
                    { name: 'icon', type: 'string', title: 'Icon' },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'object',
          name: 'statsSection',
          fields: [
            {
              name: 'stats',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'value', type: 'string', title: 'Value' },
                    { name: 'label', type: 'string', title: 'Label' },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'object',
          name: 'testimonialSection',
          fields: [
            {
              name: 'testimonials',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'quote', type: 'text', title: 'Quote' },
                    { name: 'author', type: 'string', title: 'Author' },
                    { name: 'role', type: 'string', title: 'Role' },
                    { name: 'company', type: 'string', title: 'Company' },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'object',
          name: 'faqSection',
          fields: [
            {
              name: 'faqs',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'question', type: 'string', title: 'Question' },
                    { name: 'answer', type: 'text', title: 'Answer' },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'object',
          name: 'contentSection',
          fields: [
            { name: 'title', type: 'string', title: 'Section Title' },
            { name: 'content', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
          ],
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'CTA Title' },
        { name: 'subtitle', type: 'string', title: 'CTA Subtitle' },
        { name: 'buttonText', type: 'string', title: 'Button Text' },
        { name: 'buttonUrl', type: 'string', title: 'Button URL' },
        { name: 'calendlyUrl', type: 'string', title: 'Calendly URL' },
      ],
    }),
    defineField({
      name: 'relatedServices',
      title: 'Related Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
    ...seoFields,
  ],
  preview: {
    select: {
      title: 'title',
      heroTitle: 'heroTitle',
    },
    prepare({ title, heroTitle }) {
      return {
        title: heroTitle || title,
        subtitle: title,
      };
    },
  },
});