import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { ActionLink, container } from "@/components/site/action-link"
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
  },
  twitter: {
    card: "summary_large_image",
    title: book.fullTitle,
    description: book.pitch,
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
      <section data-hero-section className="relative overflow-hidden bg-[#0B2E23] text-[#F1EFE6]" aria-labelledby="book-title">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_45%,#134232_0%,#0B2E23_55%,#062019_100%)]"
          aria-hidden="true"
        />
        <div className={`${container} relative grid items-center gap-14 pt-36 pb-20 md:pt-44 md:pb-28 lg:grid-cols-12`}>
          <div className="lg:col-span-7">
            <p className="settle text-[0.95rem] text-[#E2B35A]">The book, {book.launchLabel.replace("Coming", "coming")}</p>
            <h1 id="book-title" className="settle settle-delay-1 mt-5 font-serif text-[3.2rem] leading-[0.98] tracking-[-0.02em] md:text-7xl lg:text-[5.5rem]">
              {book.title}
            </h1>
            <p className="settle settle-delay-1 mt-5 font-serif text-2xl italic leading-snug text-[#C9D3CC] md:text-[2rem]">{book.subtitle}</p>
            <p className="settle settle-delay-2 mt-8 text-[0.95rem] text-[#C9D3CC]">By {author.coverName}</p>
            <p className="settle settle-delay-2 mt-6 max-w-[36rem] text-lg leading-relaxed text-[#F1EFE6]/90">{book.pitch}</p>
            <div className="settle settle-delay-3 mt-10 flex flex-wrap gap-3">
              <ActionLink href="#sample" variant="solid-on-dark">
                Read the opening free
              </ActionLink>
              {book.preorderLinks.map((link) => (
                <ActionLink key={link.url} href={link.url} target="_blank" rel="noopener" variant="outline-on-dark">
                  Pre-order: {link.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </ActionLink>
              ))}
              {book.preorderLinks.length === 0 && (
                <ActionLink href="/ideas" variant="outline-on-dark">
                  Ideas from the book
                </ActionLink>
              )}
            </div>
          </div>
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="w-60 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.75)] ring-1 ring-white/10 md:w-80">
              <Image
                src={book.coverPath}
                alt={`Cover of ${book.fullTitle} by ${author.coverName}`}
                width={1200}
                height={1800}
                priority
                sizes="(min-width: 768px) 320px, 240px"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About the book */}
      <section className="py-24 md:py-32" aria-labelledby="about-book-title">
        <div className={`${container} grid gap-10 md:grid-cols-12`}>
          <h2 id="about-book-title" className="font-serif text-4xl leading-[1.1] md:col-span-4 md:text-5xl">
            The gap is real. The constraint has moved.
          </h2>
          <div className="max-w-[68ch] space-y-6 md:col-span-8 md:col-start-6">
            {book.longDescription.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 32)}
                className={i === 0 ? "font-serif text-2xl leading-snug text-foreground" : "text-lg leading-[1.75] text-muted-foreground"}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="border-y border-border bg-secondary/50 py-20 md:py-28" aria-labelledby="numbers-title">
        <div className={container}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="numbers-title" className="max-w-2xl font-serif text-4xl leading-[1.1] md:text-5xl">
              Nigeria and the Netherlands, 2020 to 2025
            </h2>
            <ActionLink href="/book/deep-tech-numbers" variant="text">
              All the numbers
            </ActionLink>
          </div>
          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
            {headlineFigures.map((figure, i) => (
              <div key={figure.id} className={`md:px-10 ${i === 0 ? "md:pl-0" : ""} ${i === headlineFigures.length - 1 ? "md:pr-0" : ""}`}>
                <p className="font-serif text-[1.65rem] leading-snug text-foreground">{figure.headline}</p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{figure.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contents */}
      <section className="py-24 md:py-32" aria-labelledby="contents-title">
        <div className={container}>
          <h2 id="contents-title" className="font-serif text-4xl leading-[1.1] md:text-5xl">
            Three parts, fifteen chapters
          </h2>
          <div className="mt-14 divide-y divide-border border-y border-border">
            {book.parts.map((part, partIndex) => (
              <div key={part.name} className="grid gap-6 py-12 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-4">
                  <h3 className="font-serif text-2xl leading-snug">{part.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{part.summary}</p>
                </div>
                <ol className="space-y-4 md:col-span-7 md:col-start-6">
                  {part.chapters.map((chapter, i) => (
                    <li key={chapter} className="grid grid-cols-[2.5rem_1fr] items-baseline text-lg">
                      <span className="font-serif text-accent">{chapterStart[partIndex] + i}</span>
                      <span className="text-foreground/90">{chapter}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideas */}
      <section className="bg-[#0B2E23] py-24 text-[#F1EFE6] md:py-32" aria-labelledby="ideas-title">
        <div className={`${container} grid gap-12 md:grid-cols-12`}>
          <div className="md:col-span-4">
            <h2 id="ideas-title" className="font-serif text-4xl leading-[1.1] md:text-5xl">
              A vocabulary for building the ground
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-[#C9D3CC]">
              The book names the mechanisms that decide whether hard technology can grow in a place. Each one has its own page, with a definition you can cite.
            </p>
            <ActionLink href="/ideas" variant="outline-on-dark" className="mt-8">
              All {ideas.length} ideas
            </ActionLink>
          </div>
          <ul className="grid gap-x-10 border-t border-[#F1EFE6]/12 sm:grid-cols-2 md:col-span-8 md:col-start-5">
            {ideas.map((idea) => (
              <li key={idea.slug} className="border-b border-[#F1EFE6]/12">
                <Link href={`/ideas/${idea.slug}`} className="group block py-5">
                  <span className="font-serif text-xl text-[#F1EFE6] transition-colors group-hover:text-[#E2B35A]">{idea.term}</span>
                  <span className="mt-1 line-clamp-2 block text-[0.95rem] leading-relaxed text-[#C9D3CC]">{idea.definition}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-24 md:py-32" aria-labelledby="readers-title">
        <div className={container}>
          <h2 id="readers-title" className="max-w-2xl font-serif text-4xl leading-[1.1] md:text-5xl">
            For the people who build, fund and govern
          </h2>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {book.audiences.map((audience) => (
              <div key={audience.who} className="border-t border-foreground/70 pt-6">
                <h3 className="font-serif text-2xl">{audience.who}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{audience.what}</p>
              </div>
            ))}
          </div>
          <p className="mt-14 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Readers of <em>The Prosperity Paradox</em>, <em>The Entrepreneurial State</em> and <em>How Asia Works</em> will feel at home.{" "}
            <Link href="/reading-list" className="text-link">
              See how it compares
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Sample signup */}
      <section id="sample" className="scroll-mt-24 border-y border-border bg-secondary/50 py-24 md:py-32" aria-labelledby="sample-title">
        <div className={`${container} grid gap-12 md:grid-cols-12`}>
          <div className="md:col-span-5">
            <h2 id="sample-title" className="font-serif text-4xl leading-[1.1] md:text-5xl">
              Read the opening before anyone else
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Get the Preface, where a laboratory key changes a boy&apos;s life in Otukpo, and &ldquo;A Note on Words&rdquo;, which defines deep tech in one plain sentence and gives you a three-question test for it. You will also hear first when pre-orders open.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <SignupForm source="book-page" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32" aria-labelledby="faq-title">
        <div className={`${container} grid gap-10 md:grid-cols-12`}>
          <h2 id="faq-title" className="font-serif text-4xl leading-[1.1] md:col-span-4 md:text-5xl">
            Questions readers ask
          </h2>
          <div className="divide-y divide-border border-y border-border md:col-span-8 md:col-start-5">
            {book.faq.map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl text-foreground [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="text-2xl leading-none text-accent transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-[68ch] leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="border-t border-border bg-secondary/50 py-24 md:py-32" aria-labelledby="author-title">
        <div className={`${container} grid items-center gap-12 md:grid-cols-12`}>
          <div className="md:col-span-4">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden bg-secondary">
              <Image src={professionalPortrait} alt={author.name} fill sizes="340px" className="object-cover" />
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-[0.95rem] text-accent">About the author</p>
            <h2 id="author-title" className="mt-4 font-serif text-4xl leading-[1.1] md:text-5xl">
              {author.name}
            </h2>
            <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">{author.bio150}</p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <ActionLink href="/about" variant="text">
                Full biography
              </ActionLink>
              <ActionLink href="/press" variant="text">
                Press and interviews
              </ActionLink>
              <ActionLink href="/book-a-call" variant="text">
                Book a call
              </ActionLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
