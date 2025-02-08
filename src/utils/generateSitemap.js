import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const generateSitemap = async (hostname) => {
  const sitemap = new SitemapStream({ hostname });
  
  // Add your routes
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.7 });
  sitemap.write({ url: '/services', changefreq: 'weekly', priority: 0.8 });
  sitemap.write({ url: '/doctors', changefreq: 'weekly', priority: 0.9 });
  sitemap.write({ url: '/staff', changefreq: 'weekly', priority: 0.8 });
  sitemap.write({ url: '/departments', changefreq: 'weekly', priority: 0.8 });
  sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.5 });
  sitemap.write({ url: '/reviews', changefreq: 'daily', priority: 0.6 });
  
  sitemap.end();
  
  const sitemapXML = await streamToPromise(sitemap);
  createWriteStream('./public/sitemap.xml').write(sitemapXML.toString());
};

export default generateSitemap; 