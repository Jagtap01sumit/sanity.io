// schemaTypes/Blog.js
export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'author'}],
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Created At',
    },
    {
      name: 'blogimage',
      title: 'Blog Image',
      type: 'image',
    },
  ],
}
