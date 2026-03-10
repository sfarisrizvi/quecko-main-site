const axios = require("axios");
const { api_url } = require("./src/Utils/Enviroment");

module.exports = {
  siteUrl: "https://www.quecko.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,

  additionalPaths: async () => {
    try {
      // Fetch all blogs
      const { data: blogs } = await axios.get(`${api_url}posts?per_page=100`);
      if (!blogs || blogs.length === 0) return [];

      // Define SEO rules per category
      const categoryRules = {
        161: { changefreq: "daily", priority: 0.9 }, // Technology / Fast-changing
        162: { changefreq: "weekly", priority: 0.8 }, // Product / Medium
        163: { changefreq: "monthly", priority: 0.7 }, // Business / Slow
        // Add more categories here if needed
      };

      return blogs.map((post) => {
        const category = post.categories?.[0] || "default";
        const rules = categoryRules[category] || { changefreq: "weekly", priority: 0.7 };

        return {
          loc: `/blog/${post.slug}`, // Matches your [slug].js route
          changefreq: rules.changefreq,
          priority: rules.priority,
          lastmod: post.modified || post.date || new Date().toISOString(),
        };
      });
    } catch (error) {
      console.error("Sitemap blog fetch error:", error.message);
      return [];
    }
  },
};