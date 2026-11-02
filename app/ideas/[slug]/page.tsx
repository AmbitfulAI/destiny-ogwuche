import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { SignupForm } from "@/components/book/signup-form"
import { CopyButton } from "@/components/site/copy-button"
import { container } from "@/components/site/action-link"
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
        <div className={container}>
          <div className="max-w-3xl mx-auto">
            <Link href="/ideas" className="mb-10 inline-flex items-center gap-2 text-[0.95rem] text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> All ideas
            </Link>
            <p className="eyebrow mb-6">{idea.chapter}</p>
            <h1 className="font-serif text-[2.6rem] md:text-[4.25rem] leading-[1.1] mb-8">{idea.term}</h1>
            {idea.alternateNames && (
              <p className="text-sm text-muted-foreground mb-8">Also called: {idea.alternateNames.join(", ")}</p>
            )}

            <p className="mb-12 font-serif text-[1.75rem] leading-snug text-foreground md:text-[1.75rem]">{idea.definition}</p>

            <h2 className="font-serif text-[1.75rem] mb-4">In the book&apos;s words</h2>
            <blockquote className="mb-12 border-l-2 border-accent pl-6 font-serif text-[1.4rem] italic leading-relaxed text-foreground/85">
              {idea.fromTheBook}
              <footer className="mt-4 font-sans text-sm not-italic text-muted-foreground">
                {author.name},{" "}
                <cite>
                  <Link href={book.path} className="text-foreground text-link">
                    {book.fullTitle}
                  </Link>
                </cite>
              </footer>
            </blockquote>

            <h2 className="font-serif text-[1.75rem] mb-4">Why it matters</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">{idea.whyItMatters}</p>

            {related.length > 0 && (
              <>
                <h2 className="font-serif text-[1.75rem] mb-4">Related ideas</h2>
                <ul className="mb-12 divide-y divide-border border-y border-border">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/ideas/${r.slug}`} className="group flex items-center justify-between gap-6 py-4">
                        <span className="font-serif text-[1.4rem] text-foreground transition-colors group-hover:text-accent">{r.term}</span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="mb-16 border-y border-border py-6">
              <div className="flex items-center justify-between gap-6">
                <p className="text-sm text-accent">How to cite this idea</p>
                <CopyButton text={`${author.name}. “${idea.term}.” In ${book.fullTitle}. destinyogwuche.com/ideas/${idea.slug}`} />
              </div>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/90">
                {author.name}. &ldquo;{idea.term}.&rdquo; In <em>{book.fullTitle}</em>. destinyogwuche.com/ideas/{idea.slug}
              </p>
            </div>

            <Link href={`/ideas/${next.slug}`} className="group flex items-center justify-between gap-6 py-6 border-y border-border">
              <span>
                <span className="block text-sm text-muted-foreground mb-1">Next idea</span>
                <span className="font-serif text-[1.75rem] text-foreground group-hover:text-accent transition-colors">{next.term}</span>
              </span>
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>

      <section className="border-t border-border bg-secondary/50 py-20">
        <div className={container}>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-12 gap-8 items-center">
            <Link href={book.path} className="block w-32 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.7)] sm:col-span-3">
              <Image src={book.coverPath} alt={`Cover of ${book.fullTitle}`} width={1200} height={1800} sizes="128px" className="h-auto w-full" />
            </Link>
            <div className="sm:col-span-9">
              <p className="font-serif text-[1.75rem] mb-2">{book.title}</p>
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
