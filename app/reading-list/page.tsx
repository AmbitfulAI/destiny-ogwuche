import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { author, book, SITE_URL } from "@/lib/book/content"
import { readingList } from "@/lib/book/press"
import { breadcrumbSchema } from "@/lib/book/schema"

export const metadata: Metadata = {
  title: "Books on innovation, deep tech and Africa: a reading list",
  description: `Books like The Prosperity Paradox, The Entrepreneurial State, How Asia Works and Chip War, and how ${book.title} by ${author.name} adds to them.`,
  alternates: { canonical: "/reading-list" },
}

const listSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Books on innovation, deep tech and Africa",
  url: `${SITE_URL}/reading-list`,
  itemListElement: readingList.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: { "@type": "Book", name: item.title, author: item.authors },
  })),
}

export default function ReadingListPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          listSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Reading list", path: "/reading-list" },
          ]),
        ]}
      />
      <Navigation />
      <PageHeader
        eyebrow="Reading list"
        title={
          <>
            Books on innovation, deep tech and Africa
          </>
        }
        description="The books that shaped how the world thinks about innovation and development, what each one argues, and where Towards Deep Tech in Africa picks up the thread."
      />

      <section className="py-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <ol className="space-y-6">
              {readingList.map((item, i) => (
                <li key={item.title} className="grid md:grid-cols-12 gap-6 p-8 border border-border bg-card">
                  <span className="md:col-span-1 font-serif text-accent text-2xl">{i + 1}</span>
                  <div className="md:col-span-11">
                    <h2 className="font-serif text-2xl">
                      <em>{item.title}</em>
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">{item.authors}</p>
                    <dl className="grid md:grid-cols-2 gap-6">
                      <div>
                        <dt className="text-sm text-muted-foreground mb-2">What it argues</dt>
                        <dd className="text-foreground leading-relaxed">{item.argues}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground mb-2">Where {book.title} goes next</dt>
                        <dd className="text-foreground leading-relaxed">{item.relation}</dd>
                      </div>
                    </dl>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-16 grid sm:grid-cols-12 gap-8 items-center p-8 border border-border bg-secondary/60">
              <Link href={book.path} className="sm:col-span-3 block w-32 shadow-xl ring-1 ring-border">
                <Image src={book.coverPath} alt={`Cover of ${book.fullTitle}`} width={1200} height={1800} className="w-full h-auto" />
              </Link>
              <div className="sm:col-span-9">
                <h2 className="font-serif text-3xl mb-2">
                  <em>{book.title}</em>
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {author.coverName}, {book.launchLabel.replace("Coming", "coming")}
                </p>
                <p className="text-foreground leading-relaxed mb-6">{book.pitch}</p>
                <Link href={book.path} className="inline-flex items-center gap-2 text-[0.95rem] text-foreground underline decoration-foreground/30 underline-offset-[0.3em] hover:decoration-foreground">
                  About the book <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
