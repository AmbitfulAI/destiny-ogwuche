import { ImageResponse } from "next/og"

// Link-preview images (LinkedIn, WhatsApp, X, Slack) in the site's green and gold.

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = "image/png"

// Newsreader from Google Fonts, subset to the characters used. Falls back to a default serif if unreachable.
async function loadNewsreader(text: string): Promise<ArrayBuffer | null> {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Newsreader:wght@400&text=${encodeURIComponent(text)}`)
    ).text()
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1]
    if (!url) return null
    const res = await fetch(url)
    return res.ok ? await res.arrayBuffer() : null
  } catch {
    return null
  }
}

// Callers read their image with a fixed path, so the build only bundles that one file.
export function dataUri(data: { toString(encoding: "base64"): string }, mime = "image/jpeg"): string {
  return `data:${mime};base64,${data.toString("base64")}`
}

const clip = (s: string, n: number) => (s.length > n ? `${s.slice(0, n - 1).trimEnd()}…` : s)

export async function renderOg({
  eyebrow,
  title,
  subtitle,
  image,
  imageWidth = 440,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  image?: string
  imageWidth?: number
}) {
  const footer = "destinyogwuche.com"
  const sub = subtitle ? clip(subtitle, 150) : undefined
  const font = await loadNewsreader(`${eyebrow}${title}${sub ?? ""}${footer}…`)
  const textWidth = image ? 1200 - imageWidth : 1200
  const titleSize = title.length > 70 ? 54 : title.length > 40 ? 64 : 80

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(135deg, #0F3A2D 0%, #0B2E23 55%, #062019 100%)",
          color: "#F1EFE6",
          fontFamily: font ? "Newsreader" : "serif",
        }}
      >
        <div
          style={{
            width: textWidth,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 26, color: "#E2B35A" }}>{eyebrow}</div>
            <div style={{ fontSize: titleSize, lineHeight: 1.05, marginTop: 26, letterSpacing: -1 }}>{title}</div>
            {sub && <div style={{ fontSize: 30, lineHeight: 1.35, marginTop: 26, color: "#C9D3CC" }}>{sub}</div>}
          </div>
          <div style={{ display: "flex", alignItems: "center", fontSize: 24, color: "#C9D3CC" }}>
            <div style={{ width: 44, height: 2, background: "#C99A3E", marginRight: 18 }} />
            <div>{footer}</div>
          </div>
        </div>
        {image && (
          <div style={{ position: "absolute", right: 0, top: 0, width: imageWidth, height: 630, display: "flex" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="" width={imageWidth} height={630} style={{ width: imageWidth, height: 630, objectFit: "cover" }} />
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 140,
                height: 630,
                background: "linear-gradient(to right, #0B2E23, rgba(11,46,35,0))",
              }}
            />
          </div>
        )}
      </div>
    ),
    { ...ogSize, fonts: font ? [{ name: "Newsreader", data: font, style: "normal", weight: 400 }] : [] },
  )
}
