import { renderOg, ogSize, ogContentType } from "@/lib/og"
import { ideaBySlug } from "@/lib/book/ideas"

export const size = ogSize
export const contentType = ogContentType
export const alt = "An idea from Towards Deep Tech in Africa by Destiny Ogwuche"

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const idea = ideaBySlug(slug)
  return renderOg({
    eyebrow: "From Towards Deep Tech in Africa",
    title: idea?.term ?? "Ideas from the book",
    subtitle: idea?.definition,
  })
}
