import Link from "next/link"
import { ExternalLink, FileText } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { ExpandableCard } from "@/components/expandable-card"
import { publications } from "@/lib/data/publications"

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        eyebrow="Research and Publications"
        title="Thought Leadership"
        description="Academic research, peer-reviewed publications, and thought pieces on deep tech, venture capital, and Africa's innovation ecosystem."
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <ExpandableCard
                  key={index}
                  preview={
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center mt-1">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-serif text-xl font-medium text-foreground">{pub.title}</h3>
                          {pub.link && (
                            <Link
                              href={pub.link}
                              target="_blank"
                              className="flex-shrink-0 p-2 text-muted-foreground hover:text-primary transition-colors"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </Link>
                          )}
                        </div>
                        <p className="text-primary text-sm font-medium mt-2">{pub.citation}</p>
                      </div>
                    </div>
                  }
                >
                  <p className="text-muted-foreground leading-relaxed pl-14">{pub.description}</p>
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
