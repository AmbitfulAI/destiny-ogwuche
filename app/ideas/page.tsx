import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
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
        title={
          <>
            Ideas for building <span className="text-primary italic">the ground</span>
          </>
        }
        description={`The named frameworks from ${book.fullTitle}. Each one explains a mechanism that decides whether hard technology can grow in a place, and what to build about it.`}
      />

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <ol className="divide-y divide-border border-y border-border">
              {ideas.map((idea, i) => (
                <li key={idea.slug}>
                  <Link href={`/ideas/${idea.slug}`} className="group grid md:grid-cols-12 gap-4 md:gap-8 py-8 items-baseline">
                    <span className="md:col-span-1 font-serif text-primary text-lg">{String(i + 1).padStart(2, "0")}</span>
                    <div className="md:col-span-10">
                      <h2 className="font-serif text-2xl font-medium mb-2 group-hover:text-primary transition-colors">{idea.term}</h2>
                      <p className="text-muted-foreground leading-relaxed">{idea.definition}</p>
                      <p className="mt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground/70">{idea.chapter}</p>
                    </div>
                    <ArrowRight className="hidden md:block md:col-span-1 w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ol>
            <p className="mt-12 text-muted-foreground">
              All of these come from{" "}
              <Link href={book.path} className="text-primary underline underline-offset-4">
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
