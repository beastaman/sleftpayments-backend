export default {
  routes: [
    // Find/List all blog posts
    {
      method: 'GET',
      path: '/blog-posts',
      handler: 'blog-post.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    // Find one blog post by ID
    {
      method: 'GET',
      path: '/blog-posts/:id',
      handler: 'blog-post.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    // Create a new blog post
    {
      method: 'POST',
      path: '/blog-posts',
      handler: 'blog-post.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    // Update a blog post
    {
      method: 'PUT',
      path: '/blog-posts/:id',
      handler: 'blog-post.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    // Delete a blog post
    {
      method: 'DELETE',
      path: '/blog-posts/:id',
      handler: 'blog-post.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};