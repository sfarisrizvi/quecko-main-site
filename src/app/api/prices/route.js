let cachedData = null;
let lastFetch = 0;
const CACHE_LIFETIME = 30000;

export async function GET(request) {
  const now = Date.now();

  if (!cachedData || now - lastFetch > CACHE_LIFETIME) {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1",
        {
          headers: { "x-cg-demo-api-key": process.env.CG_KEY || "" },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch API");

      cachedData = await response.json();
      lastFetch = now;
    } catch (error) {
      console.error("API error, serving last cached data");
    }
  }

  return Response.json(cachedData || [], {
    headers: { "Cache-Control": "no-store" },
  });
}
