import fs from "node:fs"
import path from "node:path"
import { renderOg, dataUri, ogSize, ogContentType } from "@/lib/og"

export const size = ogSize
export const contentType = ogContentType
export const alt = "Destiny Ogwuche, founder, engineer and author"

export default async function Image() {
  return renderOg({
    eyebrow: "Founder, engineer and author",
    title: "Destiny Ogwuche",
    subtitle: "Deep tech, executed. I help founders, investors and governments build what is hard to build.",
    image: dataUri(fs.readFileSync(path.join(process.cwd(), "lib", "images", "portrait_hero_mono.jpg"))),
  })
}
