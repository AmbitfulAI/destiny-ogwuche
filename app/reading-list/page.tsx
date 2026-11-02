import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { ActionLink, container } from "@/components/site/action-link"
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
        title="Books on innovation, deep tech and Africa"
        description="The books that shaped how the world thinks about innovation and development, what each one argues, and where Towards Deep Tech in Africa picks up the thread."
      />

      <section className="py-16 md:py-24">
        <div className={container}>
          <ol className="divide-y divide-border border-b border-border">
            {readingList.map((item) => (
              <li key={item.title} className="grid gap-6 py-12 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-4">
                  <h2 className="font-serif text-3xl leading-tight">
                    <em>{item.title}</em>
                  </h2>
                  <p className="mt-2 text-muted-foreground">{item.authors}</p>
                </div>
                <dl className="grid gap-8 sm:grid-cols-2 md:col-span-8">
                  <div>
                    <dt className="text-sm text-accent">What it argues</dt>
                    <dd className="mt-2 leading-relaxed text-foreground/90">{item.argues}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-accent">Where this book goes next</dt>
                    <dd className="mt-2 leading-relaxed text-foreground/90">{item.relation}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#0B2E23] py-20 text-[#F1EFE6] md:py-28" aria-labelledby="book-band-title">
        <div className={`${container} grid items-center gap-12 md:grid-cols-12`}>
          <Link href={book.path} className="mx-auto block w-44 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.7)] ring-1 ring-white/10 md:col-span-3 md:mx-0 md:w-full md:max-w-[220px]">
            <Image src={book.coverPath} alt={`Cover of ${book.fullTitle}`} width={1200} height={1800} sizes="220px" className="h-auto w-full" />
          </Link>
          <div className="md:col-span-8 md:col-start-5">
            <p className="text-[0.95rem] text-[#E2B35A]">
              {author.coverName}, {book.launchLabel.replace("Coming", "coming")}
            </p>
            <h2 id="book-band-title" className="mt-4 font-serif text-4xl leading-[1.1] md:text-5xl">
              <em>{book.title}</em>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#C9D3CC]">{book.pitch}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink href={book.path} variant="solid-on-dark">
                About the book
              </ActionLink>
              <ActionLink href="/book/sample" variant="outline-on-dark">
                Read the opening free
              </ActionLink>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
