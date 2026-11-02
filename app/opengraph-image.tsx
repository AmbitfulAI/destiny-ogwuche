import { renderOg, localImage, ogSize, ogContentType } from "@/lib/og"

export const size = ogSize
export const contentType = ogContentType
export const alt = "Destiny Ogwuche, deep tech engineer, founder and author"

export default async function Image() {
  return renderOg({
    eyebrow: "Deep tech engineer, founder and author",
    title: "Destiny Ogwuche",
    subtitle: "Why does deep technology grow in some places and not in others?",
    image: localImage("lib/images/portrait_hero.jpg"),
  })
}
