import { Navigation } from "@/components/navigation"
import { HomeHero } from "@/components/home-hero"
import { HomeStats } from "@/components/home-stats"
import { PersonaCards } from "@/components/persona-cards"
import { HomeHighlights } from "@/components/home-highlights"
import { Featured } from "@/components/featured"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HomeHero />
      <HomeStats />
      <Featured />
      <PersonaCards />
      <HomeHighlights />
      <Footer />
    </main>
  )
}
