import { Link } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'footer',
  title: 'Footer',
  fields: [
    defineField({
      title: 'Copyright',
      name: 'copyright',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer',
      }
    },
  },
})
