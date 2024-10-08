import { Browser } from 'phosphor-react'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'page',
  title: 'Page',
  icon: Browser,
  groups: [
    {
      name: "page",
      title: "Page",
      default: true,
    },
    {
      name: "seo",
      title: "Seo"
    }
  ],
  fields: [
    defineField({
      name: "seo",
      title: "Seo",
      type: "seoPanel",
      group: "seo",
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
      group: "page",
    }),
    defineField({
      type: 'array',
      name: 'sections',
      title: 'Sections',
      group: "page",
      of: [
        defineArrayMember({ type: 'MainHero' }),
        defineArrayMember({ type: 'Quote' }),
        defineArrayMember({ type: 'Rows' }), 
        defineArrayMember({ type: "Fastlink" }),
        defineArrayMember({ type: "Mediemodul"}),
        defineArrayMember({ type: "Image" }),
        defineArrayMember({ type: "Text" }),
        defineArrayMember({ type: "List" }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'slug.current',
    },
    prepare({ title }) {
      return {
        subtitle: 'Page',
        title,
      }
    },
  },
})
