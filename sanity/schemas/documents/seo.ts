import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
    name: "seoPanel",
    title: "SEO",
    type: "object",
    fields: [
        {
            name: "seoTitle",
            title: "Title",
            type: "string",
        },
        {
            name: "seoDescription",
            title: "Description",
            type: "text",
        },
        {
            name: "seoKeywords",
            title: "Keywords",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            },
        },
    ]
})
