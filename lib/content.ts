import fs from "node:fs"
import path from "node:path"
import { markdownToText } from "./markdown"

// Content written in the site editor at /admin is saved as JSON files in /content
// and read here when the site builds. Publishing in the editor triggers a rebuild.

const root = path.join(process.cwd(), "content")

function readJsonDir<T>(dir: string): (T & { slug: string })[] {
  const full = path.join(root, dir)
  if (!fs.existsSync(full)) return []
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      try {
        const data = JSON.parse(fs.readFileSync(path.join(full, f), "utf8")) as T
        return { ...data, slug: f.replace(/\.json$/, "") }
      } catch {
        return null
      }
    })
    .filter((x): x is T & { slug: string } => x !== null)
}

// Writing

export type Post = {
  slug: string
  title: string
  date: string
  summary: string
  cover?: string
  tags?: string[]
  draft?: boolean
  body: string
}

export function getPosts(): Post[] {
  return readJsonDir<Omit<Post, "slug">>("writing")
    .filter((p) => p.title && p.date && !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug)
}

export function readingMinutes(post: Post): number {
  return Math.max(1, Math.round(markdownToText(post.body ?? "").split(" ").length / 230))
}

export function formatDate(date: string): string {
  const d = new Date(`${date.slice(0, 10)}T12:00:00Z`)
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
}

// Store

export const productTypes = ["Book", "Course", "Video", "Materials", "Consulting", "Event"] as const

export type Product = {
  slug: string
  title: string
  type: (typeof productTypes)[number]
  summary: string
  price?: string
  ctaLabel?: string
  ctaUrl?: string
  image?: string
  status: "Available" | "Coming soon" | "Hidden"
  order?: number
  body?: string
}

export function getProducts(): Product[] {
  return readJsonDir<Omit<Product, "slug">>("store")
    .filter((p) => p.title && p.status !== "Hidden")
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99) || a.title.localeCompare(b.title))
}

// Booking and other site settings

export type Session = { title: string; duration?: string; price?: string; description: string }

export type Settings = {
  bookingUrl?: string
  bookingIntro?: string
  sessions?: Session[]
}

export function getSettings(): Settings {
  const file = path.join(root, "settings", "site.json")
  if (!fs.existsSync(file)) return {}
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as Settings
  } catch {
    return {}
  }
}
