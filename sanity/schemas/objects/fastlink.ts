import { FastForward, Star } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'Fastlink',
  title: 'Fastlink',
  type: 'object',
  icon: FastForward,
  fields: [
    defineField({
        type: 'boolean',
        name: 'hasDarkBackground',
        title: 'Has Dark Background',
        initialValue: true,
        validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'eyebrow',
      title: 'Eyebrow',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'image',
      options: {
        hotspot: true,
      },
      name: 'fastlinkImage',
      title: 'Fastlink bilde',
    }),
    defineField({
      type: 'string',
      name: 'fastlinkImageAlt',
      title: 'Fastlink Image Alt',
    }),
    defineField({
      type: 'array',
      name: 'blocks',
      title: 'Blocks',
      of: [
        {
          type: 'object',
          name: 'featuredItem',
          icon: Star,
          fields: [
            defineField({
              type: 'string',
              name: 'service',
              title: 'Service',
              validation: (rule) => rule.required(),
            }),
            defineField({
              type: 'string',
              name: 'url',
              title: 'Url',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'eyebrow',
    },
    prepare({ title }) {
      return {
        subtitle: 'Fastlink',
        title,
      }
    },
  },
})
