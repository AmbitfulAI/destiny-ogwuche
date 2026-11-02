import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { SignupForm } from "@/components/book/signup-form"
import { author, book } from "@/lib/book/content"
import { ideas } from "@/lib/book/ideas"
import { figures } from "@/lib/book/numbers"
import { bookSchema, bookFaqSchema, breadcrumbSchema } from "@/lib/book/schema"
import professionalPortrait from "@/lib/images/professional_portrait.jpg"

export const metadata: Metadata = {
  title: { absolute: `${book.fullTitle} | A book by ${author.name}` },
  description: `${book.pitch} A book by ${author.name}, based on a doctoral study of Nigeria and the Netherlands.`,
  alternates: { canonical: book.path },
  keywords: book.keywords,
  openGraph: {
    type: "book",
    title: book.fullTitle,
    description: book.pitch,
    url: book.path,
    authors: [author.name],
    tags: book.keywords,
    ...(book.isbn ? { isbn: book.isbn } : {}),
    ...(book.datePublished ? { releaseDate: book.datePublished } : {}),
    images: [{ url: book.shareImagePath, width: 1200, height: 630, alt: `Cover of ${book.fullTitle}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: book.fullTitle,
    description: book.pitch,
    images: [book.shareImagePath],
  },
}

const headlineFigures = ["vc-per-person", "deep-tech-vc", "deep-tech-2022"]
  .map((id) => figures.find((f) => f.id === id))
  .filter((f): f is (typeof figures)[number] => Boolean(f))

// Chapter numbers run on across the three parts.
const chapterStart = book.parts.map((_, i) =>
  book.parts.slice(0, i).reduce((total, part) => total + part.chapters.length, 1),
)

export default function BookPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          bookSchema(),
          bookFaqSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Book", path: book.path },
          ]),
        ]}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-24 border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-6">The book · {book.launchLabel}</p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight mb-6">
                {book.title}
              </h1>
              <p className="font-serif italic text-2xl md:text-3xl text-muted-foreground mb-8">{book.subtitle}</p>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-foreground mb-8">
                By {author.coverName}
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-light mb-10">{book.pitch}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#sample"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-bold tracking-widest uppercase text-[10px] hover:bg-primary transition-colors"
                >
                  Read the opening free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                </Link>
                {book.preorderLinks.map((link) => (
                  <Link
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-bold tracking-widest uppercase text-[10px] hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Pre-order: {link.label}
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
              <div className="w-64 md:w-80 shadow-2xl ring-1 ring-border">
                <Image
                  src={book.coverPath}
                  alt={`Cover of ${book.fullTitle} by ${author.coverName}`}
                  width={1200}
                  height={1800}
                  priority
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">About the book</p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-10 leading-tight">
              The gap is real. The constraint has moved.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              {book.longDescription.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">From the study</p>
                <h2 className="font-serif text-3xl md:text-4xl font-medium">Nigeria and the Netherlands, 2020 to 2025</h2>
              </div>
              <Link href="/book/deep-tech-numbers" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:translate-x-1 transition-transform">
                All the numbers <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {headlineFigures.map((figure) => (
                <div key={figure.id} className="p-8 border border-border bg-card">
                  <p className="font-serif text-2xl text-foreground leading-snug mb-4">{figure.headline}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{figure.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contents */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Contents</p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12">Three parts, fifteen chapters</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {book.parts.map((part, partIndex) => (
                <div key={part.name} className="p-8 border border-border bg-card">
                  <h3 className="font-serif text-2xl font-medium mb-3">{part.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{part.summary}</p>
                  <ol className="space-y-3">
                    {part.chapters.map((chapter, i) => (
                      <li key={chapter} className="flex gap-4 text-foreground">
                        <span className="font-serif text-primary w-6 shrink-0">{chapterStart[partIndex] + i}</span>
                        <span>{chapter}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ideas */}
      <section className="py-24 bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">The ideas</p>
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">A vocabulary for building the ground</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The book names the mechanisms that decide whether hard technology can grow in a place. Each has its own page.
                </p>
              </div>
              <Link href="/ideas" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:translate-x-1 transition-transform">
                All ideas <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ideas.map((idea) => (
                <li key={idea.slug}>
                  <Link
                    href={`/ideas/${idea.slug}`}
                    className="group block h-full p-6 border border-border bg-card hover:border-primary/50 transition-colors"
                  >
                    <h3 className="font-serif text-xl font-medium mb-2 group-hover:text-primary transition-colors">{idea.term}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{idea.definition}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Who it is for</p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12">For the people who build, fund and govern</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {book.audiences.map((audience) => (
                <div key={audience.who} className="p-6 border-t-2 border-primary">
                  <h3 className="font-serif text-xl font-medium mb-3">{audience.who}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{audience.what}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-muted-foreground">
              Readers of <em>The Prosperity Paradox</em>, <em>The Entrepreneurial State</em> and <em>How Asia Works</em> will feel at home.{" "}
              <Link href="/reading-list" className="text-primary underline underline-offset-4">
                See how it compares
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Sample signup */}
      <section id="sample" className="py-24 bg-secondary/40 border-y border-border scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Free sample</p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Read the opening before anyone else</h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Get the Preface, where a laboratory key changes a boy&apos;s life in Otukpo, and &ldquo;A Note on Words&rdquo;, which defines deep tech in one plain sentence and gives you a three-question test for it. You will also hear first when pre-orders open.
            </p>
            <SignupForm source="book-page" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Questions</p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-10">Frequently asked</h2>
            <div className="divide-y divide-border border-y border-border">
              {book.faq.map((item) => (
                <details key={item.q} className="group py-6">
                  <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-6 font-serif text-xl text-foreground">
                    {item.q}
                    <span className="text-primary text-2xl leading-none group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="py-24 bg-secondary/40 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <div className="relative aspect-3/4 overflow-hidden border border-border">
                <Image src={professionalPortrait} alt={author.name} fill className="object-cover" />
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">About the author</p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">{author.name}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{author.bio150}</p>
              <div className="flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest">
                <Link href="/about" className="text-primary hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  Full biography <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link href="/press" className="text-primary hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  Press and interviews <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
