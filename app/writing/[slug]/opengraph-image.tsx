import { renderOg, ogSize, ogContentType } from "@/lib/og"
import { getPost } from "@/lib/content"

export const size = ogSize
export const contentType = ogContentType
export const alt = "An essay by Destiny Ogwuche"

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  return renderOg({
    eyebrow: "An essay by Destiny Ogwuche",
    title: post?.title ?? "Writing",
    subtitle: post?.summary,
  })
}
