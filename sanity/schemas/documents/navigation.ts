import { Link } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

const menuLink = {
  title: 'Menu Link',
  name: 'menuLink',
  type: 'object',
  icon: Link,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      description: "Her skriver du in url/slug til hvor knappen skal peke",
      title: 'Url',
      name: 'url',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
}

const blogLink = {
  title: 'Blog Link',
  name: 'blogLink',
  type: 'object',
  icon: Link,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      description: "Her skriver du in url/slug til hvor knappen skal peke",
      title: 'Url',
      name: 'url',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
}

export default defineType({
  type: 'document',
  name: 'navigation',
  title: 'Navigation',
  fields: [
    {
      title: "Menu",
      name: "menu",
      type: "array",
      of: [menuLink],  
    },
    {
      title: "Blog",
      name: "blog",
      type: "array",
      of: [blogLink],
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Navigation',
      }
    },
  },
})
