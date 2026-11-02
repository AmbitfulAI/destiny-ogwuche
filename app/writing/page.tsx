import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { SignupForm } from "@/components/book/signup-form"
import { container } from "@/components/site/action-link"
import { getPosts, formatDate, readingMinutes } from "@/lib/content"
import { SITE_URL } from "@/lib/book/content"
import { breadcrumbSchema } from "@/lib/book/schema"

export const metadata: Metadata = {
  title: "Writing: essays on deep tech, Africa and venture capital",
  description:
    "Essays and notes by Destiny Ogwuche on deep tech, innovation ecosystems in Africa and Europe, venture capital and building hard technology.",
  alternates: { canonical: "/writing", types: { "application/rss+xml": "/writing/feed.xml" } },
}

export default function WritingPage() {
  const posts = getPosts()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Writing by Destiny Ogwuche",
            url: `${SITE_URL}/writing`,
            author: { "@id": `${SITE_URL}/#person` },
            blogPost: posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: `${SITE_URL}/writing/${p.slug}`,
              datePublished: p.date,
            })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Writing", path: "/writing" },
          ]),
        ]}
      />
      <Navigation />
      <PageHeader
        eyebrow="Writing"
        title="Essays and notes"
        description="On deep tech, the conditions that let it grow, venture capital, and what I learn building hard technology between Africa and Europe."
      />

      <section className="py-16 md:py-24">
        <div className={`${container} grid gap-16 lg:grid-cols-12`}>
          <div className="lg:col-span-8">
            {posts.length === 0 ? (
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                The first essays are on their way. Join the list on the right to get them by email.
              </p>
            ) : (
              <ol className="divide-y divide-border border-y border-border">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/writing/${post.slug}`} className="group block py-10">
                      <p className="text-sm text-muted-foreground">
                        <time dateTime={post.date}>{formatDate(post.date)}</time>, {readingMinutes(post)} min read
                      </p>
                      <h2 className="mt-3 font-serif text-[2.15rem] leading-tight transition-colors group-hover:text-accent">{post.title}</h2>
                      <p className="mt-3 max-w-[64ch] leading-relaxed text-muted-foreground">{post.summary}</p>
                    </Link>
                  </li>
                ))}
              </ol>
            )}
          </div>
          <aside className="lg:col-span-4">
            <div className="border-t border-border pt-6 lg:sticky lg:top-28">
              <h2 className="font-serif text-[1.75rem]">Get new essays by email</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Occasional essays, plus the free opening of the book. No spam, and you can unsubscribe at any time.
              </p>
              <div className="mt-6">
                <SignupForm source="writing" compact />
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Or follow by{" "}
                <a href="/writing/feed.xml" className="text-link text-foreground">
                  RSS
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  )
}
