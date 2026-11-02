import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { SignupForm } from "@/components/book/signup-form"
import { container } from "@/components/site/action-link"
import { getPosts, getPost, formatDate, readingMinutes } from "@/lib/content"
import { renderMarkdown } from "@/lib/markdown"
import { SITE_URL, author } from "@/lib/book/content"
import { breadcrumbSchema } from "@/lib/book/schema"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  const posts = getPosts()
  // Next needs at least one entry for a static dynamic route; a placeholder 404s.
  return posts.length ? posts.map((p) => ({ slug: p.slug })) : [{ slug: "_" }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/writing/${post.slug}` },
    authors: [{ name: author.name, url: SITE_URL }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      url: `/writing/${post.slug}`,
      publishedTime: post.date,
      authors: [author.name],
      tags: post.tags,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const posts = getPosts()
  const index = posts.findIndex((p) => p.slug === post.slug)
  const older = posts[index + 1]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.summary,
            datePublished: post.date,
            url: `${SITE_URL}/writing/${post.slug}`,
            mainEntityOfPage: `${SITE_URL}/writing/${post.slug}`,
            author: { "@id": `${SITE_URL}/#person`, "@type": "Person", name: author.name },
            ...(post.cover ? { image: `${SITE_URL}${post.cover}` } : {}),
            ...(post.tags?.length ? { keywords: post.tags.join(", ") } : {}),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Writing", path: "/writing" },
            { name: post.title, path: `/writing/${post.slug}` },
          ]),
        ]}
      />
      <Navigation />

      <article className="pt-36 pb-20 md:pt-44">
        <div className={container}>
          <div className="mx-auto max-w-[44rem]">
            <Link href="/writing" className="inline-flex items-center gap-2 text-[0.95rem] text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All writing
            </Link>
            <h1 className="mt-10 font-serif text-[2.6rem] leading-[1.08] md:text-[4.25rem]">{post.title}</h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">{post.summary}</p>
            <div className="mt-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-t border-border pt-5 text-sm text-muted-foreground">
              <p>
                By {author.name} on <time dateTime={post.date}>{formatDate(post.date)}</time>. A {readingMinutes(post)} minute read.
              </p>
              {post.tags?.length ? (
                <ul className="flex flex-wrap gap-2" aria-label="Topics">
                  {post.tags.map((tag) => (
                    <li key={tag} className="rounded-sm border border-border px-2.5 py-0.5 text-[0.8rem] text-foreground/75">
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>

          {post.cover && (
            <div className="relative mx-auto mt-12 aspect-[16/9] max-w-5xl overflow-hidden bg-secondary">
              <Image src={post.cover} alt="" fill priority sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
            </div>
          )}

          <div className="prose-article mx-auto mt-12 max-w-[44rem]" dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body ?? "") }} />

          <div className="mx-auto mt-20 max-w-[44rem] border-t border-border pt-10">
            <h2 className="font-serif text-[1.75rem]">Get the next essay by email</h2>
            <p className="mt-2 text-muted-foreground">Plus the free opening of my book, Towards Deep Tech in Africa.</p>
            <div className="mt-6">
              <SignupForm source={`post-${post.slug}`} compact />
            </div>
            {older && (
              <Link href={`/writing/${older.slug}`} className="group mt-14 block border-t border-border pt-8">
                <span className="text-sm text-muted-foreground">Previous essay</span>
                <span className="mt-1 block font-serif text-[1.75rem] transition-colors group-hover:text-accent">{older.title}</span>
              </Link>
            )}
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
