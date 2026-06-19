// Server-side metadata builder for blog-detail routes.
//
// Produces per-post Open Graph / Twitter previews using the WordPress
// `jetpack_featured_media_url`. When a post has no featured image (or the
// fetch fails) it falls back to the site-wide default OG image inherited
// from the root layout, so every shared link still renders a preview.

import { getBlogsdetails } from "@/Utils/Services/services"

const SITE_URL = "https://quecko.com"

const FALLBACK = {
  title: "Blog | Quecko",
  description: "Read the latest blogs on Quecko",
}

// Strip HTML tags and decode the few WordPress entities that show up in
// rendered titles/excerpts so they read cleanly in share cards.
function stripHtml(input = "") {
  return String(input)
    .replace(/<[^>]*>/g, "")
    .replace(/&#8217;|&#8216;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&#8211;|&#8212;/g, "–")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export async function buildBlogMetadata({ slug, parent, basePath = "/blog" }) {
  let item = null
  try {
    const data = await getBlogsdetails(slug)
    item = Array.isArray(data) ? data[0] : null
  } catch {
    item = null
  }

  // No post matched the slug — keep the inherited default preview.
  if (!item) return FALLBACK

  // Resolved parent metadata carries the site-wide default OG image.
  const parentImages = (parent ? (await parent)?.openGraph?.images : null) || []

  const title = stripHtml(
    item?.yoast_head_json?.title || item?.title?.rendered || FALLBACK.title
  )
  const description =
    stripHtml(item?.yoast_head_json?.description || item?.excerpt?.rendered) ||
    FALLBACK.description
  const url = `${SITE_URL}${basePath}/${slug}`

  const featured = item?.jetpack_featured_media_url
  const images = featured
    ? [{ url: featured, width: 1200, height: 630, alt: title }, ...parentImages]
    : parentImages

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(featured ? { images: [featured] } : {}),
    },
  }
}
