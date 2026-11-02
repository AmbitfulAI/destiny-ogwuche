// A small, safe Markdown renderer for essays written in the site's editor.
// Supports headings, paragraphs, bold, italic, links, images, inline code,
// code blocks, blockquotes, nested lists and horizontal rules.
// All text is HTML-escaped; links and images only allow safe URL schemes.

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")

const safeUrl = (raw: string) => {
  const url = raw.trim()
  if (/^(https?:|mailto:|tel:)/i.test(url) || url.startsWith("/") || url.startsWith("#")) return escapeHtml(url)
  if (!/^[a-z][a-z0-9+.-]*:/i.test(url)) return escapeHtml(url) // relative path
  return "#"
}

export function renderInline(text: string): string {
  // Pull out code spans first so their contents are not formatted.
  const codes: string[] = []
  let s = text.replace(/`([^`]+)`/g, (_, code: string) => {
    codes.push(`<code>${escapeHtml(code)}</code>`)
    return `\u0000${codes.length - 1}\u0000`
  })

  s = escapeHtml(s)

  // Images, then links. Optional "title" after the URL is ignored.
  s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g, (_, alt: string, src: string) =>
    `<img src="${safeUrl(src.replace(/&amp;/g, "&"))}" alt="${alt}" loading="lazy" />`,
  )
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g, (_, label: string, href: string) => {
    const url = href.replace(/&amp;/g, "&")
    const external = /^https?:/i.test(url) && !/destinyogwuche\.com/i.test(url)
    return `<a href="${safeUrl(url)}"${external ? ' target="_blank" rel="noopener"' : ""}>${label}</a>`
  })

  s = s.replace(/(\*\*|__)(?=\S)([\s\S]*?\S)\1/g, "<strong>$2</strong>")
  s = s.replace(/(^|[^*\w])\*(?=\S)([^*]*?\S)\*(?!\*)/g, "$1<em>$2</em>")
  s = s.replace(/(^|[^_\w])_(?=\S)([^_]*?\S)_(?![_\w])/g, "$1<em>$2</em>")
  s = s.replace(/ {2,}\n/g, "<br />").replace(/\\\n/g, "<br />")

  return s.replace(/\u0000(\d+)\u0000/g, (_, i: string) => codes[Number(i)])
}

type Line = { indent: number; text: string }

const listMarker = /^(\s*)([-*+]|\d+[.)])\s+(.*)$/

function renderBlocks(lines: string[]): string {
  const out: string[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()

    if (trimmed === "") {
      i++
      continue
    }

    // Fenced code block
    const fence = trimmed.match(/^(```|~~~)\s*([\w-]*)/)
    if (fence) {
      const body: string[] = []
      i++
      while (i < lines.length && !lines[i].trim().startsWith(fence[1])) body.push(lines[i++])
      i++
      out.push(`<pre><code${fence[2] ? ` class="language-${escapeHtml(fence[2])}"` : ""}>${escapeHtml(body.join("\n"))}</code></pre>`)
      continue
    }

    // Heading (h1 in the body is demoted to h2: the page title is the h1)
    const heading = trimmed.match(/^(#{1,6})\s+(.*?)\s*#*$/)
    if (heading) {
      const level = Math.min(Math.max(heading[1].length, 2), 4)
      out.push(`<h${level}>${renderInline(heading[2])}</h${level}>`)
      i++
      continue
    }

    // Horizontal rule
    if (/^([-*_])(\s*\1){2,}$/.test(trimmed)) {
      out.push("<hr />")
      i++
      continue
    }

    // Blockquote
    if (trimmed.startsWith(">")) {
      const body: string[] = []
      while (i < lines.length && lines[i].trim().startsWith(">")) body.push(lines[i++].trim().replace(/^>\s?/, ""))
      out.push(`<blockquote>${renderBlocks(body)}</blockquote>`)
      continue
    }

    // List
    const first = line.match(listMarker)
    if (first) {
      const ordered = /\d/.test(first[2])
      const baseIndent = first[1].length
      const items: string[][] = []
      while (i < lines.length) {
        const l = lines[i]
        const m = l.match(listMarker)
        if (m && m[1].length === baseIndent && /\d/.test(m[2]) === ordered) {
          items.push([m[3]])
          i++
        } else if (l.trim() === "") {
          // A blank line ends the list unless the next line continues it.
          const next = lines[i + 1]
          if (next !== undefined && (next.match(listMarker)?.[1].length ?? -1) >= baseIndent && /^\s/.test(next) === baseIndent > 0) {
            i++
          } else if (next !== undefined && /^\s{2,}\S/.test(next) && items.length) {
            i++
          } else break
        } else if (/^\s+\S/.test(l) && items.length && (l.length - l.trimStart().length) > baseIndent) {
          items[items.length - 1].push(l.slice(Math.min(baseIndent + 2, l.length - l.trimStart().length)))
          i++
        } else break
      }
      const tag = ordered ? "ol" : "ul"
      const html = items
        .map(([firstLine, ...rest]) => {
          const nested = rest.length ? renderBlocks(rest) : ""
          return `<li>${renderInline(firstLine)}${nested}</li>`
        })
        .join("")
      out.push(`<${tag}>${html}</${tag}>`)
      continue
    }

    // Image on its own line becomes a figure with a caption from the alt text
    const lone = trimmed.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)$/)
    if (lone) {
      const alt = escapeHtml(lone[1])
      out.push(`<figure><img src="${safeUrl(lone[2])}" alt="${alt}" loading="lazy" />${alt ? `<figcaption>${alt}</figcaption>` : ""}</figure>`)
      i++
      continue
    }

    // Paragraph: consecutive non-blank lines that do not start another block
    const para: string[] = []
    while (i < lines.length) {
      const l = lines[i]
      const t = l.trim()
      if (t === "" || /^(#{1,6}\s|>|```|~~~)/.test(t) || listMarker.test(l) || /^([-*_])(\s*\1){2,}$/.test(t)) break
      para.push(l)
      i++
    }
    out.push(`<p>${renderInline(para.join("\n"))}</p>`)
  }

  return out.join("\n")
}

export function renderMarkdown(markdown: string): string {
  return renderBlocks(markdown.replace(/\r\n?/g, "\n").split("\n"))
}

// Plain text for reading-time estimates and summaries.
export function markdownToText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export type { Line }
