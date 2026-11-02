import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Awards and fellowships",
  description: "Awards, fellowships and scholarships received by Destiny Ogwuche, including the VC Lab Venture Institute and the EU-funded Deep Tech Venturing and Innovation Program.",
  alternates: { canonical: "/awards" },
}

export default function AwardsLayout({ children }: { children: React.ReactNode }) {
  return children
}
