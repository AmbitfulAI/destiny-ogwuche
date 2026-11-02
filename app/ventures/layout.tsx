import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ventures: Ambitful AI and Tellit",
  description: "Ventures founded and led by Destiny Ogwuche, including Ambitful AI, an opportunity intelligence platform, and Tellit.",
  alternates: { canonical: "/ventures" },
}

export default function VenturesLayout({ children }: { children: React.ReactNode }) {
  return children
}
