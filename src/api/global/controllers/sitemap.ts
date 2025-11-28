import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::global.global', ({ strapi }) => ({
  async sitemap(ctx) {
    // Fetch all published blog posts
    const posts = await strapi.entityService.findMany('api::blog-post.blog-post', {
      filters: { publishedAt: { $notNull: true } },
      fields: ['slug', 'updatedAt'],
      sort: ['updatedAt:desc'],
      limit: 1000,
    });

    // Build XML
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Static pages
    const staticPages = [
      '',
      'about',
      'learning-hub',
      'door-to-door-sales',
      'partner-stories',
      'community-forum',
      'works',
      'success-stories',
      'contact',
    ];
    staticPages.forEach(page => {
      xml += `<url><loc>https://www.sleftpayments.com/${page}</loc></url>\n`;
    });

    // Blog posts
    posts.forEach(post => {
      xml += `<url><loc>https://www.sleftpayments.com/blog/${post.slug}</loc><lastmod>${new Date(post.updatedAt).toISOString().slice(0,10)}</lastmod></url>\n`;
    });

    xml += `</urlset>`;

    ctx.set('Content-Type', 'application/xml');
    ctx.body = xml;
  }
}));