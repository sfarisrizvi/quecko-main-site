export async function GET(request) {
  const robotsTxt = `User-agent: *
  Disallow: /wp-content/uploads/wpo/wpo-plugins-tables-list.json
  Noindex: /authors

  Sitemap: https://www.quecko.com/sitemap.xml`;

  return new Response(robotsTxt, {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
