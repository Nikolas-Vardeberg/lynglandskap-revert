import { TextHOne } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'MainHero',
  title: 'Main Hero',
  type: 'object',
  icon: TextHOne,
  fields: [
    defineField({
      type: 'string',
      name: 'heading',
      title: 'Heading',
    }),
    defineField({
      type: 'text',
      name: 'body',
      title: 'Body',
    }),
    defineField({
      type: 'image',
      options: {
        hotspot: true,
      },
      name: 'heroImage',
      title: 'Hero Image',
    }),
    defineField({
      type: 'string',
      name: 'heroImageAlt',
      title: 'Hero Image Alt',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'heroImage',
    },
    prepare({ title, media }) {
      return {
        subtitle: 'Main Hero',
        media,
        title,
      }
    },
  },
})
