import { ImageResponse } from "next/og"

// Link-preview images (LinkedIn, WhatsApp, X, Slack) in the site's ink and champagne.

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = "image/png"

// Cormorant Garamond from Google Fonts, subset to the characters used. Falls back to a default serif if unreachable.
async function loadDisplayFont(text: string): Promise<ArrayBuffer | null> {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&text=${encodeURIComponent(text)}`)
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
  const font = await loadDisplayFont(`${eyebrow}${title}${sub ?? ""}${footer}…`)
  const textWidth = image ? 1200 - imageWidth : 1200
  const titleSize = title.length > 70 ? 60 : title.length > 40 ? 72 : 92

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "radial-gradient(ellipse at 75% 40%, #1E2126 0%, #111419 45%, #0B0D10 80%)",
          color: "#EEE9DF",
          fontFamily: font ? "Cormorant Garamond" : "serif",
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
            <div style={{ display: "flex", alignItems: "center", fontSize: 26, color: "#D2B583" }}>
              <div style={{ width: 40, height: 1, background: "#D2B583", marginRight: 16 }} />
              {eyebrow}
            </div>
            <div style={{ fontSize: titleSize, lineHeight: 1.05, marginTop: 26, letterSpacing: -1 }}>{title}</div>
            {sub && <div style={{ fontSize: 32, lineHeight: 1.3, marginTop: 26, color: "#A7ADB5" }}>{sub}</div>}
          </div>
          <div style={{ display: "flex", alignItems: "center", fontSize: 24, color: "#A7ADB5" }}>
            <div style={{ width: 44, height: 1, background: "#D2B583", marginRight: 18 }} />
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
                background: "linear-gradient(to right, #0F1216, rgba(15,18,22,0))",
              }}
            />
          </div>
        )}
      </div>
    ),
    { ...ogSize, fonts: font ? [{ name: "Cormorant Garamond", data: font, style: "normal", weight: 500 }] : [] },
  )
}
