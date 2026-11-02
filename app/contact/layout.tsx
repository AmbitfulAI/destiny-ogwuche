import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Destiny Ogwuche for talks, podcasts, interviews, technical diligence and advisory work.",
  alternates: { canonical: "/contact" },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
