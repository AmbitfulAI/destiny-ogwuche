import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Photos",
  description: "Photos from Destiny Ogwuche's talks, research and engineering work.",
  alternates: { canonical: "/journal/photos" },
}

export default function PhotosLayout({ children }: { children: React.ReactNode }) {
  return children
}
