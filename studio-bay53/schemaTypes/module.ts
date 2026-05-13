import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'module',
  title: 'Module',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., BarChart3, Package, TrendingUp, ShoppingCart, Factory, Users, Banknote, Award, ChartColumn, Settings, ShieldCheck)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'challenges',
      title: 'Challenges',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'description', type: 'text', title: 'Description'},
            {
              name: 'icon',
              type: 'image',
              title: 'Icon Image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'solutions',
      title: 'Solutions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'description', type: 'text', title: 'Description'},
            {
              name: 'icon',
              type: 'image',
              title: 'Icon Image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'description', type: 'text', title: 'Description'},
            {
              name: 'icon',
              type: 'image',
              title: 'Icon Image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'workflow',
      title: 'Workflow Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'step', type: 'string', title: 'Step Number'},
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'description', type: 'text', title: 'Description'},
            {
              name: 'icon',
              type: 'image',
              title: 'Icon Image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'cta_title',
      title: 'CTA Title',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productUrl',
      title: 'Product/Trial URL',
      type: 'url',
      description: 'Direct link to the product signup/trial page for this specific module',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'trialDuration',
      title: 'Trial Duration',
      type: 'string',
      description: 'e.g., "14 days", "30 days", "Free forever"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'array',
      of: [{type: 'string'}],
      description: 'e.g., "Manufacturing firms", "Retail businesses", "Service companies"',
    }),
    defineField({
      name: 'useCases',
      title: 'Use Cases',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'industry', type: 'string', title: 'Industry'},
            {name: 'scenario', type: 'text', title: 'Scenario'},
          ],
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'heroTitle',
    },
  },
})
