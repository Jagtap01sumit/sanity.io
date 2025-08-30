// schemaTypes/Blog.js
export default {
  name: 'blog',
  title: 'Blog',
  type: 'document', // 👈 very important
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'text',
      title: 'Content',
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
    },
  ],
}
