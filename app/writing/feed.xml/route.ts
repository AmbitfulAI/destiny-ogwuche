import { getPosts } from "@/lib/content"
import { renderMarkdown } from "@/lib/markdown"
import { SITE_URL, author } from "@/lib/book/content"

export const dynamic = "force-static"

const escapeXml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

// RSS feed for the Writing section, so essays can be followed in feed readers and newsletter tools.
export function GET() {
  const posts = getPosts()
  const items = posts
    .map(
      (p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${SITE_URL}/writing/${p.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/writing/${p.slug}</guid>
      <pubDate>${new Date(`${p.date.slice(0, 10)}T09:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(p.summary)}</description>
      <content:encoded><![CDATA[${renderMarkdown(p.body ?? "").replace(/]]>/g, "]]&gt;")}]]></content:encoded>
    </item>`,
    )
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Writing by ${escapeXml(author.name)}</title>
    <link>${SITE_URL}/writing</link>
    <atom:link href="${SITE_URL}/writing/feed.xml" rel="self" type="application/rss+xml" />
    <description>Essays on deep tech, innovation ecosystems in Africa and Europe, and venture capital.</description>
    <language>en</language>
${items}
  </channel>
</rss>`

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } })
}
