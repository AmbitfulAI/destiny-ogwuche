import { ArrowUpRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { container } from "@/components/site/action-link"
import { FullStory } from "@/components/site/full-story"
import { ventures, innovations } from "@/lib/data/ventures"

export default function VenturesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <PageHeader
        eyebrow="Ventures"
        title="Companies and projects I have built"
        description="Turning ambitious technical ideas into products people use, through engineering and venture strategy."
      />

      <section className="py-16 md:py-24">
        <div className={container}>
          <ol className="divide-y divide-border border-b border-border">
            {ventures.map((venture) => (
              <li key={venture.name} className="grid gap-6 py-14 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-4">
                  <h2 className="font-serif text-4xl leading-tight">{venture.name}</h2>
                  <p className="mt-2 text-foreground/80">{venture.role}</p>
                  {venture.link && (
                    <a
                      href={venture.link}
                      target="_blank"
                      rel="noopener"
                      className="mt-5 inline-flex items-center gap-1 text-[0.95rem] text-foreground underline decoration-foreground/30 underline-offset-[0.3em] hover:decoration-foreground"
                    >
                      {venture.link.replace(/^https?:\/\//, "")}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  )}
                </div>
                <FullStory summary={venture.summary} story={venture.description} className="md:col-span-8" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50 py-20 md:py-28" aria-labelledby="projects-title">
        <div className={`${container} grid gap-12 md:grid-cols-12`}>
          <h2 id="projects-title" className="font-serif text-4xl leading-[1.1] md:col-span-4 md:text-5xl">
            Earlier projects
          </h2>
          <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 md:col-span-8">
            {innovations.map((item) => (
              <article key={item.name} className="border-t border-border pt-6">
                <h3 className="font-serif text-2xl leading-snug">{item.name}</h3>
                <p className="mt-1 text-sm text-accent">{item.subtitle}</p>
                <FullStory summary={item.summary} story={item.description} size="base" className="mt-4" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
