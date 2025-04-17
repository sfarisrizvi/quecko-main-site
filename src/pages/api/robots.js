export default function handler(req, res) {
    const robotsTxt = `User-agent: *
  Disallow: /wp-content/uploads/wpo/wpo-plugins-tables-list.json
  Noindex: /authors
  
  Sitemap: https://www.quecko.com/sitemap.xml`;
  
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(robotsTxt);
  }
  