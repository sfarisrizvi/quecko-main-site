import PageClient from "./_client"
import { buildBlogMetadata } from "@/Utils/blogMetadata"

export async function generateMetadata({ params }, parent) {
  const { slug } = await params
  return buildBlogMetadata({ slug, parent, basePath: "" })
}

export default function Page() { return <PageClient /> }
