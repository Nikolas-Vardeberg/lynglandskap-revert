import { Link, Newspaper, Star } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'Mediemodul',
  title: 'Mediemodul',
  type: 'object',
  icon: Newspaper,
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
        name: 'cards',
        title: 'Cards',
        of: [
          {
            type: 'object',
            name: 'cardItem',
            icon: Star,
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
                name: 'heading',
                title: 'Heading',
                validation: (rule) => rule.required(),
              }),
              defineField({
                type: 'string',
                name: 'body',
                title: 'Body',
                validation: (rule) => rule.required(),
              }),
              defineField({
                type: 'boolean',
                name: 'imageOnRight',
                title: 'Image On Right',
                initialValue: true,
                validation: (rule) => rule.required(),
              }),
              defineField({
                type: 'image',
                options: {
                  hotspot: true,
                },
                name: 'image',
                title: 'Image',
                validation: (rule) => rule.required(),
              }),
              defineField({
                type: 'string',
                name: 'imageAlt',
                title: 'Image Alt',
                validation: (rule) => rule.required(),
              }),
              defineField({
                type: 'array',
                name: 'textlink',
                title: 'Textlink',
                of: [
                  {
                    type: 'object',
                    name: 'textlink',
                    icon: Link,
                    fields: [
                      defineField({
                        type: 'string',
                        name: 'text',
                        title: 'Text',
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
