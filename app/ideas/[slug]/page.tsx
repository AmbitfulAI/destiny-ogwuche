import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { SignupForm } from "@/components/book/signup-form"
import { author, book } from "@/lib/book/content"
import { ideas, ideaBySlug } from "@/lib/book/ideas"
import { ideaSchema, breadcrumbSchema } from "@/lib/book/schema"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return ideas.map((idea) => ({ slug: idea.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const idea = ideaBySlug(slug)
  if (!idea) return {}
  return {
    title: `${idea.term}: definition and meaning`,
    description: idea.definition,
    alternates: { canonical: `/ideas/${idea.slug}` },
    openGraph: {
      type: "article",
      title: `${idea.term}: a definition`,
      description: idea.definition,
      url: `/ideas/${idea.slug}`,
      images: [{ url: book.shareImagePath, width: 1200, height: 630, alt: `Cover of ${book.fullTitle}` }],
    },
  }
}

export default async function IdeaPage({ params }: Props) {
  const { slug } = await params
  const idea = ideaBySlug(slug)
  if (!idea) notFound()

  const related = idea.related.map(ideaBySlug).filter((r): r is NonNullable<typeof r> => Boolean(r))
  const index = ideas.findIndex((i) => i.slug === idea.slug)
  const next = ideas[(index + 1) % ideas.length]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          ideaSchema(idea),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Ideas", path: "/ideas" },
            { name: idea.term, path: `/ideas/${idea.slug}` },
          ]),
        ]}
      />
      <Navigation />

      <article className="pt-40 pb-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <div className="max-w-3xl mx-auto">
            <Link href="/ideas" className="mb-10 inline-flex items-center gap-2 text-[0.95rem] text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> All ideas
            </Link>
            <p className="text-[0.95rem] text-accent mb-4">{idea.chapter}</p>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-8">{idea.term}</h1>
            {idea.alternateNames && (
              <p className="text-sm text-muted-foreground mb-8">Also called: {idea.alternateNames.join(", ")}</p>
            )}

            <p className="text-2xl text-foreground leading-relaxed font-light mb-12">{idea.definition}</p>

            <h2 className="font-serif text-2xl mb-4">In the book&apos;s words</h2>
            <blockquote className="border-l-2 border-accent pl-6 text-lg text-muted-foreground leading-relaxed italic mb-12">
              {idea.fromTheBook}
              <footer className="mt-4 not-italic text-sm">
                {author.name},{" "}
                <cite>
                  <Link href={book.path} className="text-foreground underline decoration-foreground/30 underline-offset-[0.25em] hover:decoration-foreground">
                    {book.fullTitle}
                  </Link>
                </cite>
              </footer>
            </blockquote>

            <h2 className="font-serif text-2xl mb-4">Why it matters</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">{idea.whyItMatters}</p>

            {related.length > 0 && (
              <>
                <h2 className="font-serif text-2xl mb-4">Related ideas</h2>
                <ul className="grid sm:grid-cols-2 gap-4 mb-12">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/ideas/${r.slug}`} className="block h-full p-5 border border-border bg-card hover:border-foreground/40 transition-colors">
                        <span className="font-serif text-lg text-foreground">{r.term}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <p className="text-sm text-muted-foreground mb-4">How to cite this idea</p>
            <p className="text-sm text-foreground bg-secondary/50 border border-border p-4 mb-16">
              {author.name}. &ldquo;{idea.term}.&rdquo; In <em>{book.fullTitle}</em>. destinyogwuche.com/ideas/{idea.slug}
            </p>

            <Link href={`/ideas/${next.slug}`} className="group flex items-center justify-between gap-6 py-6 border-y border-border">
              <span>
                <span className="block text-sm text-muted-foreground mb-1">Next idea</span>
                <span className="font-serif text-2xl text-foreground group-hover:text-accent transition-colors">{next.term}</span>
              </span>
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>

      <section className="py-20 bg-secondary/40 border-t border-border">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <div className="max-w-3xl mx-auto grid sm:grid-cols-12 gap-8 items-center">
            <Link href={book.path} className="sm:col-span-3 block w-32 shadow-xl ring-1 ring-border">
              <Image src={book.coverPath} alt={`Cover of ${book.fullTitle}`} width={1200} height={1800} className="w-full h-auto" />
            </Link>
            <div className="sm:col-span-9">
              <p className="font-serif text-2xl mb-2">{book.title}</p>
              <p className="text-muted-foreground mb-6">Get the opening of the book free, and hear first when it launches.</p>
              <SignupForm source={`idea-${idea.slug}`} compact />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
