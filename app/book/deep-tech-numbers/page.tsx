import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { author, book } from "@/lib/book/content"
import { figures, study } from "@/lib/book/numbers"
import { numbersSchema, breadcrumbSchema } from "@/lib/book/schema"

export const metadata: Metadata = {
  title: "Deep tech in Nigeria and the Netherlands: the numbers, 2020 to 2025",
  description:
    "Venture capital per person was about 50 times higher in the Netherlands than in Nigeria, and about 114 times higher for deep tech. Headline figures from the doctoral study behind Towards Deep Tech in Africa.",
  alternates: { canonical: "/book/deep-tech-numbers" },
}

export default function NumbersPage() {
  const studyFigures = figures.filter((f) => f.scope === "study")
  const publishedFigures = figures.filter((f) => f.scope === "published")

  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          numbersSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Book", path: book.path },
            { name: "The numbers", path: "/book/deep-tech-numbers" },
          ]),
        ]}
      />
      <Navigation />
      <PageHeader
        eyebrow="The numbers"
        title={
          <>
            Deep tech in Nigeria and the Netherlands, <span className="text-primary italic">2020 to 2025</span>
          </>
        }
        description={`Headline figures from the doctoral study behind ${book.fullTitle}. Every gap was real, in the direction you would expect, and some were enormous.`}
      />

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl font-medium mb-10">What the study found</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-20">
              {studyFigures.map((figure) => (
                <div key={figure.id} id={figure.id} className="p-8 border border-border bg-card scroll-mt-28">
                  <h3 className="font-serif text-2xl leading-snug mb-4">{figure.headline}</h3>
                  <p className="text-muted-foreground leading-relaxed">{figure.detail}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-3xl font-medium mb-4">From published sources</h2>
            <p className="text-muted-foreground mb-10">Figures the book draws from national and international statistics, not from the study itself.</p>
            <div className="grid md:grid-cols-2 gap-6 mb-20">
              {publishedFigures.map((figure) => (
                <div key={figure.id} id={figure.id} className="p-8 border border-border bg-card scroll-mt-28">
                  <h3 className="font-serif text-2xl leading-snug mb-4">{figure.headline}</h3>
                  <p className="text-muted-foreground leading-relaxed">{figure.detail}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-12 gap-10 border-t border-border pt-12">
              <h2 className="md:col-span-4 font-serif text-2xl font-medium">How the study worked</h2>
              <div className="md:col-span-8 space-y-4 text-muted-foreground leading-relaxed">
                <p>{study.method}</p>
                <p>
                  The comparison used the MIT iEcosystem Model as its framework. The Netherlands serves as a reference sample, not a model to copy: a working system set beside another so that what is missing becomes specific enough to name.
                </p>
                <p>
                  The full analysis, the interviews and what the numbers mean are in{" "}
                  <Link href={book.path} className="text-primary underline underline-offset-4">
                    {book.fullTitle}
                  </Link>{" "}
                  by {author.name}. Journalists and researchers are welcome to cite these figures with a link to this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
