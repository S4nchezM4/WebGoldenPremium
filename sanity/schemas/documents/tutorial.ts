import { defineType, defineField } from 'sanity';
import { seoFields, slugField, portableText } from '../index';

export const tutorial = defineType({
  name: 'tutorial',
  title: 'Tutorial',
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
      name: 'video',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube or Vimeo embed URL',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alt text' },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [...portableText],
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
    }),
    defineField({
      name: 'toolsUsed',
      title: 'Tools Used',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    ...seoFields,
  ],
  preview: {
    select: {
      title: 'title',
      difficulty: 'difficulty',
      media: 'thumbnail',
    },
    prepare({ title, difficulty, media }) {
      return {
        title,
        subtitle: difficulty || '',
        media,
      };
    },
  },
});