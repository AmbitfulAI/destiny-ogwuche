import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Research and publications",
  description: "Doctoral research comparing deep tech ecosystems in Nigeria and the Netherlands using the MIT iEcosystem Model, and other publications by Destiny Ogwuche.",
  alternates: { canonical: "/research" },
}

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children
}
