import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { container } from "@/components/site/action-link"
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

function FigureList({ id, title, note, figures: list }: { id: string; title: string; note?: string; figures: typeof figures }) {
  return (
    <section className="mb-20 grid gap-8 md:grid-cols-12 md:gap-10" aria-labelledby={id}>
      <div className="md:col-span-4">
        <h2 id={id} className="font-serif text-3xl leading-tight md:text-4xl">
          {title}
        </h2>
        {note && <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">{note}</p>}
      </div>
      <ul className="divide-y divide-border border-y border-border md:col-span-8">
        {list.map((figure) => (
          <li key={figure.id} id={figure.id} className="scroll-mt-28 py-8">
            <h3 className="font-serif text-2xl leading-snug">{figure.headline}</h3>
            <p className="mt-3 max-w-[68ch] leading-relaxed text-muted-foreground">{figure.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  )
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
        title="Deep tech in Nigeria and the Netherlands, 2020 to 2025"
        description={`Headline figures from the doctoral study behind ${book.fullTitle}. Every gap was real, in the direction you would expect, and some were enormous.`}
      />

      <section className="py-16 md:py-24">
        <div className={container}>
          <FigureList id="study-title" title="What the study found" figures={studyFigures} />
          <FigureList
            id="published-title"
            title="From published sources"
            note="Figures the book draws from national and international statistics, not from the study itself."
            figures={publishedFigures}
          />

          <section className="grid gap-8 border-t border-border pt-16 md:grid-cols-12 md:gap-10" aria-labelledby="method-title">
            <h2 id="method-title" className="font-serif text-3xl leading-tight md:col-span-4 md:text-4xl">
              How the study worked
            </h2>
            <div className="max-w-[68ch] space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-8">
              <p>{study.method}</p>
              <p>
                The comparison used the MIT iEcosystem Model as its framework. The Netherlands serves as a reference sample, not a model to copy: a working system set beside another so that what is missing becomes specific enough to name.
              </p>
              <p>
                The full analysis, the interviews and what the numbers mean are in{" "}
                <Link href={book.path} className="text-foreground text-link">
                  {book.fullTitle}
                </Link>{" "}
                by {author.name}. Journalists and researchers are welcome to cite these figures with a link to this page.
              </p>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  )
}
