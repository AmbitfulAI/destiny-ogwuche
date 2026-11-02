import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { ActionLink, container } from "@/components/site/action-link"
import { publications } from "@/lib/data/publications"

export default function ResearchPage() {
  const [doctoral, ...others] = publications

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <PageHeader
        eyebrow="Research"
        title="Research and writing"
        description="Peer-reviewed papers, conference research and opinion pieces on deep tech, venture capital and engineering."
      />

      <section className="py-16 md:py-24" aria-labelledby="doctoral-title">
        <div className={`${container} grid gap-12 md:grid-cols-12`}>
          <div className="md:col-span-4">
            <p className="text-[0.95rem] text-accent">Doctoral research</p>
            <p className="mt-2 text-sm text-muted-foreground">{doctoral.citation.split("|").map((s) => s.trim()).join(", ")}</p>
          </div>
          <div className="md:col-span-8">
            <h2 id="doctoral-title" className="font-serif text-3xl leading-tight md:text-4xl">
              {doctoral.title}
            </h2>
            <p className="mt-6 max-w-[68ch] leading-[1.75] text-muted-foreground">{doctoral.description}</p>
            <p className="mt-4 max-w-[68ch] leading-[1.75] text-muted-foreground">
              The study, six years of data and 22 interviews in both countries, is the foundation of my book{" "}
              <Link href="/book/towards-deep-tech-in-africa" className="text-link text-foreground">
                <em>Towards Deep Tech in Africa</em>
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {doctoral.link && (
                <ActionLink href={doctoral.link} target="_blank" rel="noopener">
                  Read the proceedings
                </ActionLink>
              )}
              <ActionLink href="/book/deep-tech-numbers" variant="outline">
                See the headline numbers
              </ActionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-24" aria-labelledby="publications-title">
        <div className={`${container} grid gap-12 md:grid-cols-12`}>
          <h2 id="publications-title" className="font-serif text-4xl leading-[1.1] md:col-span-4 md:text-5xl">
            Publications and articles
          </h2>
          <ol className="md:col-span-8 divide-y divide-border border-y border-border">
            {others.map((pub) => (
              <li key={pub.title} className="py-10">
                <h3 className="font-serif text-2xl leading-snug">{pub.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pub.citation.split("|").map((s) => s.trim()).join(", ")}</p>
                <p className="mt-4 max-w-[68ch] leading-relaxed text-foreground/80">{pub.description}</p>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener"
                    className="mt-4 inline-flex items-center gap-1 text-[0.95rem] text-foreground underline decoration-foreground/30 underline-offset-[0.3em] hover:decoration-foreground"
                  >
                    Read it
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Footer />
    </main>
  )
}
