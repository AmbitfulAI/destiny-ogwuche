import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { HomeHero } from "@/components/home-hero"
import {
  HomeCredentials,
  HomeQuestion,
  HomeOffers,
  HomeTrackRecord,
  HomeIdeas,
  HomeWriting,
  HomeContact,
} from "@/components/home-sections"
import { Featured } from "@/components/featured"
import { Footer } from "@/components/footer"
import { BookFeature } from "@/components/book/book-feature"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Destiny Ogwuche: deep tech, executed",
    description: "Founder of Ambitful AI, engineer at ASML and Vitestro, and author of Towards Deep Tech in Africa. I help founders, investors and governments build what is hard to build.",
    url: "/",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HomeHero />
      <HomeCredentials />
      <HomeQuestion />
      <HomeOffers />
      <HomeTrackRecord />
      <BookFeature />
      <HomeIdeas />
      <HomeWriting />
      <Featured />
      <HomeContact />
      <Footer />
    </main>
  )
}
