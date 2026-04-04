import { Award } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { ExpandableCard } from "@/components/expandable-card"
import { awards } from "@/lib/data/awards"

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        eyebrow="Awards and Fellowships"
        title="Recognition"
        description="A decade of recognition across venture capital, deep tech, academia, and community leadership."
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {awards.map((award, index) => (
                <ExpandableCard
                  key={index}
                  preview={
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                          <Award className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <p className="text-primary text-sm font-medium mb-1">{award.year}</p>
                        <h3 className="font-serif text-lg font-medium text-foreground">{award.title}</h3>
                      </div>
                    </div>
                  }
                >
                  <p className="text-muted-foreground leading-relaxed pl-18 ml-18">{award.description}</p>
                </ExpandableCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
