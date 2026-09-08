import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Configuration for Cloud Dashboard (CD) Foundation Routes
 * Note: Private routes like /profile and callback routes like /implicit/callback 
 * are excluded from the sitemap to prevent indexing of restricted/technical areas.
 */
const routes = [
  { path: '/', priority: '1.0' },
  { path: '/favourite', priority: '0.8' },
  { path: '/user', priority: '0.9' }, // Cloud Dashboard Ecosystem landing
  { path: '/register', priority: '0.5' },
  { path: '/login', priority: '0.5' },
];

const domain = process.env.DNSROOT
  ? (process.env.DNSROOT.startsWith('http') ? process.env.DNSROOT : `https://www.${process.env.DNSROOT}`)
  : (process.env.REACT_APP_DOMAIN || 'https://holimax.github.io/React');

const date = new Date().toISOString().split('T')[0];

const generateSitemap = () => {
  console.log(`Generating sitemap for CD Tier at ${domain}...`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${domain}${route.path}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const publicPath = path.join(__dirname, '../public/sitemap.xml');

  try {
    fs.writeFileSync(publicPath, sitemap);
    console.log(`Successfully generated sitemap.xml at ${publicPath}`);
    console.log(`Indexed ${routes.length} CD routes.`);
  } catch (error) {
    console.error('Failed to generate sitemap:', error);
    process.exit(1);
  }
};

generateSitemap();

