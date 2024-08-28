import { Rows, Star, TextHTwo } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'Rows',
  title: 'Rows',
  type: 'object',
  icon: Rows,
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
    }),
    defineField({
      type: 'array',
      name: 'blocks',
      title: 'Blocks',
      of: [
        {
          type: 'object',
          name: 'grid',
          icon: Star,
          fields: [
            defineField({
              type: 'image',
              options: {
                hotspot: true,
              },
              name: 'rowsImage',
              title: 'Bilde',
            }),
            defineField({
              type: 'string',
              name: 'rowsImageAlt',
              title: 'Bilde Alt',
            }),
            defineField({
              type: 'string',
              name: 'name',
              title: 'Name',
              validation: (rule) => rule.required(),
            }),
            defineField({
              type: "array",
              name: "bio",
              title: "Bio",
              of: [
                {
                  type: 'object',
                  name: 'bio_text',
                  icon: Star,
                  fields: [
                    defineField({
                      type: "string",
                      title: "Text",
                      name: "bioText",
                    })
                  ]
                }
              ]
            })
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        subtitle: 'Rows',
        title,
      }
    },
  },
})
