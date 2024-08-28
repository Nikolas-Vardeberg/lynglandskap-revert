import { Image } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'Image',
  title: 'Image',
  type: 'object',
  icon: Image,
  fields: [
    defineField({
      type: 'image',
      options: {
        hotspot: true,
      },
      name: 'image',
      title: 'Image',
    }),
    defineField({
      type: 'string',
      name: 'imageAlt',
      title: 'Image Alt',
    }),
  ],
  preview: {
    select: {
      title: 'imageAlt',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        subtitle: 'Image',
        media,
        title,
      }
    },
  },
})
