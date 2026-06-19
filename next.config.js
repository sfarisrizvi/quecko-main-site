/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: false,
  typescript: { ignoreBuildErrors: true },

  // Standalone output is only meaningful for production builds (Docker/deploy).
  // Keep it out of `next dev` so it never interferes with the dev server.
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,

  // Disable Turbopack dev source maps. They default to `true` in dev, and Chrome
  // fetches a `.map` for every chunk when DevTools is open — which is what made
  // the site crawl with DevTools open. Flip back to `true` if you need to debug
  // against original source.
  experimental: {
    turbopackSourceMaps: false,
  },

  sassOptions: {
    includePaths: ['node_modules/bootstrap/scss', 'node_modules'],
    quietDeps: true,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'wp.quecko.com' },
      { protocol: 'https', hostname: 'media.quecko.com' },
    ],
  },

  async headers() {
    return [
      {
        source: "/Assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
      {
        source: "/Aeonik/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // ── Legacy URL cleanup ───────────────────────────────────────────────────
      { source: "/mobileapp-development", destination: "/services/development/mobile-app-development", permanent: true },
      { source: "/blockchaindev", destination: "/services/web3/blockchain-development", permanent: true },
      { source: "/prediction", destination: "/services/web3/prediction-market", permanent: true },
      { source: "/vion-exchange", destination: "/portfolio/vion", permanent: true },
      { source: "/legion-network", destination: "/portfolio/legion", permanent: true },
      { source: "/tapspace-marketing", destination: "/portfolio/tapspace", permanent: true },
      { source: "/contactus", destination: "/contact", permanent: true },
      { source: "/partners", destination: "/", permanent: true },
      { source: "/GetinTouch", destination: "/contact", permanent: true },
      // Component-as-page routes → homepage
      { source: "/faqscontract", destination: "/", permanent: true },
      { source: "/marketingfaqs", destination: "/", permanent: true },
      { source: "/faqswebdevelp", destination: "/", permanent: true },
      { source: "/consultingfaqs", destination: "/", permanent: true },
      { source: "/defifaqs", destination: "/", permanent: true },
      { source: "/rawfaqs", destination: "/", permanent: true },
      { source: "/mobileappfaqs", destination: "/", permanent: true },
      { source: "/faqscompliance", destination: "/", permanent: true },
      { source: "/faqscross", destination: "/", permanent: true },
      { source: "/faqsnodes", destination: "/", permanent: true },
      { source: "/uses", destination: "/", permanent: true },
      { source: "/usesdevelopment", destination: "/", permanent: true },
      { source: "/usesdevelopmentlanding", destination: "/", permanent: true },
      { source: "/usesnode", destination: "/", permanent: true },
      { source: "/usescompliance", destination: "/", permanent: true },
      { source: "/crossuses", destination: "/", permanent: true },
      { source: "/defiuses", destination: "/", permanent: true },
      { source: "/mobileappuses", destination: "/", permanent: true },
      { source: "/rawuses", destination: "/", permanent: true },
      { source: "/consultinguses", destination: "/", permanent: true },
      // ── Route migration: old paths → new hierarchical URLs ──────────────────
      // Legal pages
      { source: "/privacypolicy", destination: "/privacy-policy", permanent: true },
      { source: "/termsconditions", destination: "/terms-and-conditions", permanent: true },
      // Careers
      { source: "/career", destination: "/careers", permanent: true },
      { source: "/careerdetail", destination: "/careers", permanent: true },
      { source: "/jobs/:slug", destination: "/careers/:slug", permanent: true },
      // Blog
      { source: "/blog-:slug", destination: "/blog/:slug", permanent: true },
      // About us – team
      { source: "/alee", destination: "/about-us/team/alee", permanent: true },
      { source: "/fahad", destination: "/about-us/team/fahad", permanent: true },
      // Services hub
      { source: "/consulting", destination: "/services/consulting", permanent: true },
      // Web3 services → /services/web3/
      { source: "/blockchain-development", destination: "/services/web3/blockchain-development", permanent: true },
      { source: "/web3-and-defi-solutions", destination: "/services/web3/web3-and-defi-solutions", permanent: true },
      { source: "/interoperability-and-cross-chain-solutions", destination: "/services/web3/interoperability-and-cross-chain-solutions", permanent: true },
      { source: "/prediction-market", destination: "/services/web3/prediction-market", permanent: true },
      { source: "/rwa", destination: "/services/web3/rwa", permanent: true },
      { source: "/tokenomics-and-compliance", destination: "/services/web3/tokenomics-and-compliance", permanent: true },
      { source: "/infrastructure", destination: "/services/web3/infrastructure", permanent: true },
      // Development services → /services/development/
      { source: "/web-development", destination: "/services/development/web-development", permanent: true },
      { source: "/mobile-app-development", destination: "/services/development/mobile-app-development", permanent: true },
      { source: "/technical-writing", destination: "/services/development/technical-writing", permanent: true },
      // Marketing services → /services/marketing/
      { source: "/digital-marketing", destination: "/services/marketing/digital-marketing", permanent: true },
      { source: "/web3-marketing", destination: "/services/marketing/web3-marketing", permanent: true },
      { source: "/social-media-management", destination: "/services/marketing/social-media-management", permanent: true },
      { source: "/community-management", destination: "/services/marketing/community-management", permanent: true },
      { source: "/blog-and-article-writing", destination: "/services/marketing/blog-and-article-writing", permanent: true },
      { source: "/strategy-and-campaign-design", destination: "/services/marketing/strategy-and-campaign-design", permanent: true },
      { source: "/marketingpr", destination: "/services/marketing/marketingpr", permanent: true },
      { source: "/memecoin-marketing", destination: "/services/marketing/memecoin-marketing", permanent: true },
      { source: "/web3-marketing", destination: "/services/marketing/web3-marketing", permanent: true },
      // Creative services → /services/creative/
      { source: "/creative-services", destination: "/services/creative/creative-services", permanent: true },
      // Portfolio case studies → /portfolio/
      { source: "/launchpad", destination: "/portfolio/launchpad", permanent: true },
      { source: "/privacy-protocol", destination: "/portfolio/privacy-protocol", permanent: true },
      { source: "/multi-chain", destination: "/portfolio/multi-chain", permanent: true },
      { source: "/quecko-exchange", destination: "/portfolio/quecko-exchange", permanent: true },
      { source: "/domain-name-system", destination: "/portfolio/domain-name-system", permanent: true },
      { source: "/nft-gallery", destination: "/portfolio/nft-gallery", permanent: true },
      { source: "/decentralized-options-market", destination: "/portfolio/decentralized-options-market", permanent: true },
      { source: "/reward-flow", destination: "/portfolio/reward-flow", permanent: true },
      { source: "/high-yield-dollar-protocol", destination: "/portfolio/high-yield-dollar-protocol", permanent: true },
      { source: "/diet-and-cheat-meal-app", destination: "/portfolio/diet-and-cheat-meal-app", permanent: true },
      { source: "/golden-looni", destination: "/portfolio/golden-looni", permanent: true },
      { source: "/quick-grocery", destination: "/portfolio/quick-grocery", permanent: true },
      { source: "/meme-coin-launchpad", destination: "/portfolio/meme-coin-launchpad", permanent: true },
      { source: "/estate-slice", destination: "/portfolio/estate-slice", permanent: true },
      { source: "/privacy-protocol-oracle", destination: "/portfolio/privacy-protocol-oracle", permanent: true },
      { source: "/tapspace", destination: "/portfolio/tapspace", permanent: true },
      { source: "/prodex", destination: "/portfolio/prodex", permanent: true },
      { source: "/quick-marketing", destination: "/portfolio/quick-marketing", permanent: true },
      { source: "/syrupal-protocol", destination: "/portfolio/syrupal-protocol", permanent: true },
      { source: "/vion", destination: "/portfolio/vion", permanent: true },
      { source: "/bluemoon", destination: "/portfolio/bluemoon", permanent: true },
      { source: "/legion", destination: "/portfolio/legion", permanent: true },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
    ];
  },
};

module.exports = nextConfig;
