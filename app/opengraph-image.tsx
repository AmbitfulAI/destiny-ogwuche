import fs from "node:fs"
import path from "node:path"
import { renderOg, dataUri, ogSize, ogContentType } from "@/lib/og"

export const size = ogSize
export const contentType = ogContentType
export const alt = "Destiny Ogwuche, deep tech engineer, founder and author"

export default async function Image() {
  return renderOg({
    eyebrow: "Deep tech engineer, founder and author",
    title: "Destiny Ogwuche",
    subtitle: "Why does deep technology grow in some places and not in others?",
    image: dataUri(fs.readFileSync(path.join(process.cwd(), "lib", "images", "portrait_hero.jpg"))),
  })
}
