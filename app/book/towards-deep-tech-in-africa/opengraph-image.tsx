import fs from "node:fs"
import path from "node:path"
import { renderOg, dataUri, ogSize, ogContentType } from "@/lib/og"
import { book } from "@/lib/book/content"

export const size = ogSize
export const contentType = ogContentType
export const alt = `Cover of ${book.fullTitle}`

export default async function Image() {
  return renderOg({
    eyebrow: `A book by Destiny Ogwuche, ${book.launchLabel.replace("Coming", "coming")}`,
    title: book.title,
    subtitle: book.subtitle,
    image: dataUri(fs.readFileSync(path.join(process.cwd(), "public", "images", "book", "cover.jpg"))),
    imageWidth: 420,
  })
}
