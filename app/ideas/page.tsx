import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { container } from "@/components/site/action-link"
import { JsonLd } from "@/components/json-ld"
import { author, book } from "@/lib/book/content"
import { ideas } from "@/lib/book/ideas"
import { ideasSetSchema, breadcrumbSchema } from "@/lib/book/schema"

export const metadata: Metadata = {
  title: `Ideas from ${book.title}: deep tech, the substitution tax, sovereign by design`,
  description: `Definitions of the frameworks in ${book.fullTitle} by ${author.name}: deep tech, the Software Trap, the substitution tax, the unexitable workshop, sovereign by design and more.`,
  alternates: { canonical: "/ideas" },
}

export default function IdeasPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          ideasSetSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Ideas", path: "/ideas" },
          ]),
        ]}
      />
      <Navigation />
      <PageHeader
        eyebrow={`From ${book.title}`}
        title="Ideas for building the ground"
        description={`The named frameworks from ${book.fullTitle}. Each one explains a mechanism that decides whether hard technology can grow in a place, and what to build about it.`}
      />

      <section className="py-16 md:py-24">
        <div className={container}>
          <div className="max-w-4xl">
            <ol className="divide-y divide-border border-y border-border">
              {ideas.map((idea) => (
                <li key={idea.slug}>
                  <Link href={`/ideas/${idea.slug}`} className="group grid gap-4 py-8 md:grid-cols-12 md:gap-8">
                    <div className="md:col-span-11">
                      <h2 className="font-serif text-2xl mb-2 group-hover:text-accent transition-colors">{idea.term}</h2>
                      <p className="text-muted-foreground leading-relaxed">{idea.definition}</p>
                      <p className="mt-3 text-sm text-accent">{idea.chapter}</p>
                    </div>
                    <ArrowRight className="hidden h-5 w-5 self-center justify-self-end text-muted-foreground transition-colors group-hover:text-foreground md:block" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ol>
            <p className="mt-12 text-muted-foreground">
              All of these come from{" "}
              <Link href={book.path} className="text-foreground text-link">
                {book.fullTitle}
              </Link>{" "}
              by {author.name}.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
