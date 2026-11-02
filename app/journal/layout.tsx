import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Journal",
  description: "Moments from Destiny Ogwuche's work across deep tech, research and innovation ecosystems.",
  alternates: { canonical: "/journal" },
}

export default function JournalLayout({ children }: { children: React.ReactNode }) {
  return children
}
