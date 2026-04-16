import { defineType, defineField } from 'sanity';

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'mainNav',
      title: 'Main Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navItem',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'href', type: 'string', title: 'URL' },
            {
              name: 'subMenu',
              title: 'Submenu Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'href', type: 'string', title: 'URL' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'object',
      fields: [
        {
          name: 'services',
          title: 'Services',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'href', type: 'string', title: 'URL' },
              ],
            },
          ],
        },
        {
          name: 'solutions',
          title: 'Solutions',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'href', type: 'string', title: 'URL' },
              ],
            },
          ],
        },
        {
          name: 'resources',
          title: 'Resources',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'href', type: 'string', title: 'URL' },
              ],
            },
          ],
        },
        {
          name: 'company',
          title: 'Company',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'href', type: 'string', title: 'URL' },
              ],
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'mainNav' },
  },
});