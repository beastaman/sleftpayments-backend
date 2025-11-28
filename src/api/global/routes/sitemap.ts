export default {
  routes: [
    {
      method: 'GET',
      path: '/sitemap.xml',
      handler: 'global.sitemap',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};