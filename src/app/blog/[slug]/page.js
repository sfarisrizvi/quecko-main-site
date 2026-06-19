import PageClient from "./_client"
import { buildBlogMetadata } from "@/Utils/blogMetadata"

// Render per-request like the old Pages Router getServerSideProps. Without this
// the App Router statically optimizes the route (axios isn't a Next-tracked
// fetch), caching a one-time fallback so share crawlers always see the default
// OG preview instead of the post's title/image.
export const dynamic = "force-dynamic"

export async function generateMetadata({ params }, parent) {
  const { slug } = await params
  return buildBlogMetadata({ slug, parent, basePath: "/blog" })
}

export default function Page() { return <PageClient /> }
