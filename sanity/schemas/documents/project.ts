import { defineType, defineField } from 'sanity';
import { seoFields, slugField, portableText } from '../index';

export const project = defineType({
  name: 'project',
  title: 'Project (Case Study)',
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
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          { title: 'Fashion & Luxury', value: 'fashion-luxury' },
          { title: 'Technology', value: 'technology' },
          { title: 'E-commerce', value: 'ecommerce' },
          { title: 'Food & Beverage', value: 'food-beverage' },
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'Finance', value: 'finance' },
          { title: 'Real Estate', value: 'real-estate' },
          { title: 'Travel', value: 'travel' },
          { title: 'Beauty & Cosmetics', value: 'beauty' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Brand Identity', value: 'brand-identity' },
          { title: 'Web Development', value: 'web-development' },
          { title: 'Video Production', value: 'video-production' },
          { title: 'Photography', value: 'photography' },
          { title: 'Campaign', value: 'campaign' },
          { title: 'Social Media', value: 'social-media' },
          { title: 'Full Service', value: 'full-service' },
        ],
      },
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alt text', validation: (Rule) => Rule.required() },
        { name: 'caption', type: 'string', title: 'Caption' },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alt text' },
            { name: 'caption', type: 'string', title: 'Caption' },
          ],
        },
      ],
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      rows: 4,
      description: 'What problem did the client face?',
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'text',
      rows: 4,
      description: 'How did we solve it?',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'metric', type: 'string', title: 'Metric' },
            { name: 'value', type: 'string', title: 'Value', description: 'e.g., "+150%", "10K+"' },
            { name: 'description', type: 'string', title: 'Description' },
          ],
          preview: {
            select: { title: 'metric', subtitle: 'value' },
          },
        },
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      fields: [
        { name: 'quote', type: 'text', title: 'Quote' },
        { name: 'author', type: 'string', title: 'Author Name' },
        { name: 'role', type: 'string', title: 'Role/Title' },
        { name: 'company', type: 'string', title: 'Company' },
        { name: 'image', type: 'image', title: 'Photo' },
      ],
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
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
      clientName: 'clientName',
      media: 'coverImage',
    },
    prepare({ title, clientName, media }) {
      return {
        title,
        subtitle: clientName || '',
        media,
      };
    },
  },
});