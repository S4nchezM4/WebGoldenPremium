import { defineType, defineField } from 'sanity';
import { seoFields, slugField, portableText } from '../index';

export const guide = defineType({
  name: 'guide',
  title: 'Guide',
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
      rows: 3,
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alt text', validation: (Rule) => Rule.required() },
      ],
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty Level',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'beginner' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
        ],
      },
      initialValue: 'intermediate',
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [...portableText],
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
      difficulty: 'difficulty',
      media: 'coverImage',
    },
    prepare({ title, difficulty, media }) {
      return {
        title,
        subtitle: difficulty ? `Difficulty: ${difficulty}` : '',
        media,
      };
    },
  },
});