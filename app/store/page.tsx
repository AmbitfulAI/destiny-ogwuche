import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { SignupForm } from "@/components/book/signup-form"
import { container } from "@/components/site/action-link"
import { getProducts, productTypes } from "@/lib/content"
import { renderMarkdown } from "@/lib/markdown"

export const metadata: Metadata = {
  title: "Store: books, courses, materials and advisory",
  description:
    "Books, courses, videos, materials and advisory from Destiny Ogwuche on deep tech, innovation ecosystems and building hard technology.",
  alternates: { canonical: "/store" },
}

const isExternal = (url: string) => /^https?:\/\//.test(url)

const groupTitles: Record<string, string> = {
  Book: "Books",
  Course: "Courses",
  Video: "Videos",
  Materials: "Materials",
  Consulting: "Advisory",
  Event: "Events",
}

export default function StorePage() {
  const products = getProducts()
  const groups = productTypes
    .map((type) => ({ type, items: products.filter((p) => p.type === type) }))
    .filter((g) => g.items.length)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <PageHeader
        eyebrow="Store"
        title="Books, courses and advisory"
        description="Practical material on deep tech, innovation ecosystems and building hard technology, and ways to work with me directly."
      />

      <section className="py-16 md:py-24">
        <div className={`${container} space-y-20`}>
          {groups.length === 0 && (
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">New courses and materials are being prepared.</p>
          )}
          {groups.map((group) => (
            <div key={group.type} className="grid gap-10 md:grid-cols-12">
              <h2 className="font-serif text-[2.15rem] md:col-span-3">{groupTitles[group.type]}</h2>
              <ul className="md:col-span-9 divide-y divide-border border-y border-border">
                {group.items.map((item) => (
                  <li key={item.slug} className="grid gap-6 py-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-10">
                    <div className="flex gap-6">
                      {item.image && (
                        <div className="relative hidden h-28 w-24 shrink-0 overflow-hidden bg-secondary sm:block">
                          <Image src={item.image} alt="" fill sizes="96px" className="object-cover" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-serif text-[1.75rem] leading-snug">{item.title}</h3>
                        <p className="mt-2 max-w-[60ch] leading-relaxed text-muted-foreground">{item.summary}</p>
                        {item.body && (
                          <details className="group mt-3">
                            <summary className="cursor-pointer list-none text-[0.95rem] text-foreground underline decoration-foreground/30 underline-offset-[0.3em] [&::-webkit-details-marker]:hidden">
                              <span className="group-open:hidden">More details</span>
                              <span className="hidden group-open:inline">Fewer details</span>
                            </summary>
                            <div className="prose-article prose-compact mt-4" dangerouslySetInnerHTML={{ __html: renderMarkdown(item.body) }} />
                          </details>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-3 sm:items-end sm:text-right">
                      <p className="font-serif text-[1.75rem]">{item.price || "Price on request"}</p>
                      {item.status === "Coming soon" && <p className="text-sm text-accent">Coming soon</p>}
                      {item.ctaUrl &&
                        (isExternal(item.ctaUrl) ? (
                          <a
                            href={item.ctaUrl}
                            target="_blank"
                            rel="noopener"
                            className="inline-flex h-11 items-center gap-1.5 rounded-sm bg-primary px-5 text-[0.95rem] font-medium text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
                          >
                            {item.ctaLabel || "Buy now"}
                            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                            <span className="sr-only">(opens in a new tab)</span>
                          </a>
                        ) : (
                          <Link
                            href={item.ctaUrl}
                            className="inline-flex h-11 items-center rounded-sm bg-primary px-5 text-[0.95rem] font-medium text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
                          >
                            {item.ctaLabel || "Find out more"}
                          </Link>
                        ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50 py-16 md:py-24" aria-labelledby="store-updates">
        <div className={`${container} grid gap-10 md:grid-cols-12`}>
          <div className="md:col-span-5">
            <h2 id="store-updates" className="font-serif text-[2.15rem] md:text-[2.6rem]">Hear when new material is ready</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Courses, videos and materials are on the way. Join the list for first access and the free opening of the book.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <SignupForm source="store" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
