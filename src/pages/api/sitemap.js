// import { glob } from "glob";
// import path from "path";

// const BASE_URL = "https://www.quecko.com";

// const getPages = async () => {
//     const files = await glob("src/pages/**/*.js", { ignore: ["src/pages/api/**", "src/pages/_*.js", "src/pages/component/**"] });

//     return files
//         .map((file) => {
//             let relativePath = file.replace(/\\/g, "/");
//             relativePath = relativePath.replace(/^src\/pages\//, "").replace(/\.js$/, "");


//             if (relativePath.includes("[")) return null;


//             if (relativePath === "index") return BASE_URL;
//             if (relativePath.endsWith("/index")) relativePath = relativePath.replace(/\/index$/, "");

//             return `${BASE_URL}/${relativePath}`;
//         })
//         .filter(Boolean);
// };

// export default async function handler(req, res) {
//     const allUrls = await getPages();

//     const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//       ${allUrls
//             .map(
//                 (url) => `
//         <url>
//           <loc>${url}</loc>
//           <lastmod>${new Date().toISOString()}</lastmod>
//           <changefreq>weekly</changefreq>
//           <priority>0.8</priority>
//         </url>`
//             )
//             .join("")}
//     </urlset>`.trim();

//     res.setHeader("Content-Type", "text/xml");
//     res.status(200).send(sitemap);

//     // console.log("Sitemap Generated:", allUrls);
// }
// 
import { getBlogsdetails } from "@/Utils/Services/services";
import { glob } from "glob";
import path from "path";

const BASE_URL = "https://www.quecko.com";

const getPages = async () => {
    const files = await glob("src/pages/**/*.js", { ignore: ["src/pages/api/**", "src/pages/_*.js", "src/pages/component/**"] });

    // Fetch blog slugs
    const blogSlugs = await getBlogsdetails(); // Assuming this returns an array of slugs
    if (!blogSlugs || blogSlugs.length === 0) {
        
        console.error("No blog slugs found");
        return [];  // Return an empty array or handle this case as needed
    }

    console.log("blogSlugs: ", blogSlugs);

    return files
        .map((file) => {
            let relativePath = file.replace(/\\/g, "/");
            relativePath = relativePath.replace(/^src\/pages\//, "").replace(/\.js$/, "");

            // Exclude dynamic routes like [slug].js
            if (relativePath.includes("[")) return null;

            // If it's the blog page, add the blog slugs
            if (relativePath === "blog") {
                return blogSlugs.map(slug => `${BASE_URL}/blog/${slug}`);
            }

            // Handle other pages
            if (relativePath === "index") return BASE_URL;
            if (relativePath.endsWith("/index")) relativePath = relativePath.replace(/\/index$/, "");

            return `${BASE_URL}/${relativePath}`;
        })
        .flat() // Flatten any arrays (in case blog slugs were added)
        .filter(Boolean); // Remove any null or undefined values
};

export default async function handler(req, res) {
    const allUrls = await getPages();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls
            .map(
                (url) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>`
            )
            .join("")}
    </urlset>`.trim();

    res.setHeader("Content-Type", "text/xml");
    res.status(200).send(sitemap);
}
