import Link from "next/link"
import { Mic, Users, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { ExpandableCard } from "@/components/expandable-card"
import { speakingEngagements } from "@/lib/data/speaking"
import { boardRoles } from "@/lib/data/board-roles"

export default function SpeakingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        eyebrow="Speaking Engagements"
        title="Sharing Knowledge"
        description="Keynotes, panels, and masterclasses on deep tech, Africa's innovation ecosystem, venture capital, and entrepreneurship."
      />

      {/* Speaking Topics CTA */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <h3 className="font-serif text-xl font-medium mb-2">Deep Tech Innovation</h3>
                <p className="text-primary-foreground/80 text-sm">From semiconductors to MedTech robotics</p>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-medium mb-2">Africa's Tech Ecosystem</h3>
                <p className="text-primary-foreground/80 text-sm">Building infrastructure for innovation</p>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-medium mb-2">Venture Capital</h3>
                <p className="text-primary-foreground/80 text-sm">Investment thesis and ecosystem dynamics</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-medium hover:bg-background/90 transition-colors"
              >
                Book Me to Speak
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Engagements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-medium text-foreground mb-8">Past Engagements</h2>
            
            <div className="space-y-6 mb-20">
              {speakingEngagements.map((engagement, index) => (
                <ExpandableCard
                  key={index}
                  preview={
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                          <Mic className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-medium text-foreground mb-1">{engagement.title}</h3>
                        <p className="text-primary text-sm font-medium">{engagement.date}</p>
                      </div>
                    </div>
                  }
                >
                  <p className="text-muted-foreground leading-relaxed pl-18 ml-18">{engagement.description}</p>
                </ExpandableCard>
              ))}
            </div>

            <h2 className="font-serif text-3xl font-medium text-foreground mb-8">Board & Advisory Roles</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {boardRoles.map((role, index) => (
                <div
                  key={index}
                  className="p-6 border border-border bg-card hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-foreground">{role.title}</h3>
                      <p className="text-primary text-sm font-medium">{role.position}</p>
                      {role.period && (
                        <p className="text-muted-foreground text-xs mt-1">{role.period}</p>
                      )}
                      <p className="text-muted-foreground text-sm leading-relaxed mt-3">{role.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
