import type { MetadataRoute } from "next"
import { SITE_URL, book } from "@/lib/book/content"
import { ideas } from "@/lib/book/ideas"
import { getPosts } from "@/lib/content"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  })

  return [
    page("/", 1, "weekly"),
    page(book.path, 0.95, "weekly"),
    page("/book/deep-tech-numbers", 0.8),
    page("/book/sample", 0.7),
    page("/ideas", 0.8),
    ...ideas.map((idea) => page(`/ideas/${idea.slug}`, 0.7)),
    page("/writing", 0.8, "weekly"),
    ...getPosts().map((post) => ({ url: `${SITE_URL}/writing/${post.slug}`, lastModified: new Date(post.date), changeFrequency: "monthly" as const, priority: 0.7 })),
    page("/store", 0.6, "weekly"),
    page("/book-a-call", 0.6),
    page("/reading-list", 0.6),
    page("/press", 0.6),
    page("/about", 0.9),
    page("/experience", 0.7),
    page("/research", 0.7),
    page("/ventures", 0.6),
    page("/speaking", 0.6),
    page("/awards", 0.5),
    page("/journal", 0.5),
    page("/journal/photos", 0.4),
    page("/contact", 0.5),
    page("/privacy", 0.2, "yearly"),
  ]
}
