import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience: ASML, Vitestro, Nortek, Skytree",
  description: "Destiny Ogwuche's engineering and venture career: systems engineer at ASML, verification and validation lead at Vitestro, Nortek, Skytree and Meyana Bio Energy.",
  alternates: { canonical: "/experience" },
}

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children
}
