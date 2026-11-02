import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Speaking and talks",
  description: "Talks, panels and masterclasses by Destiny Ogwuche on deep tech, innovation ecosystems and venture capital in Africa and Europe.",
  alternates: { canonical: "/speaking" },
}

export default function SpeakingLayout({ children }: { children: React.ReactNode }) {
  return children
}
