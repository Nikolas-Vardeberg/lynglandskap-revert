import { FastForward, List, ListNumbers } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'List',
  title: 'List',
  type: 'object',
  icon: List,
  fields: [
    defineField({
      type: 'string',
      name: 'heading',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
        type: 'text',
        name: 'body',
        title: 'Body',
        validation: (rule) => rule.required(),
      }),
    defineField({
      type: 'array',
      name: 'listings',
      title: 'Listings',
      of: [
        {
          type: 'object',
          name: 'Listings',
          icon: ListNumbers,
          fields: [
            defineField({
              type: 'string',
              name: 'year',
              title: 'Year',
              validation: (rule) => rule.required(),
            }),
            defineField({
              type: 'string',
              name: 'name',
              title: 'Name',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'Heading',
    },
    prepare({ title }) {
      return {
        subtitle: 'Heading',
        title,
      }
    },
  },
})
