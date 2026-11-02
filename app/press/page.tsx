import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { ActionLink, container } from "@/components/site/action-link"
import { CopyButton } from "@/components/site/copy-button"
import { author, book } from "@/lib/book/content"
import { interviewQuestions, pressFacts } from "@/lib/book/press"
import { breadcrumbSchema } from "@/lib/book/schema"
import professionalPortrait from "@/lib/images/professional_portrait.jpg"

export const metadata: Metadata = {
  title: "Press kit: interviews, bios and images",
  description: `Press kit for ${author.name} and ${book.fullTitle}: bios, high-resolution images, interview topics and contact for podcasts, journalists and event organisers.`,
  alternates: { canonical: "/press" },
}

const bios = [
  { label: "One line", text: author.bioOneLine },
  { label: "Short, 50 words", text: author.bio50 },
  { label: "Long, 150 words", text: author.bio150 },
]

const topics = [
  { slug: "the-gate", title: "The scarcity story is wrong" },
  { slug: "software-trap", title: "The Software Trap in deep tech investing" },
  { slug: "substitution-tax", title: "The substitution tax founders pay" },
  { slug: "drain-circulation-or-asset", title: "The diaspora as an asset" },
  { slug: "open-the-gate", title: "Certainty: the cheapest thing a government can give" },
  { slug: "sovereign-by-design", title: "Sovereign by design" },
]

function Row({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section className="grid gap-8 py-16 md:grid-cols-12 md:gap-10 md:py-20" aria-labelledby={id}>
      <h2 id={id} className="font-serif text-[2.15rem] leading-tight md:col-span-4 md:text-[2.6rem]">
        {title}
      </h2>
      <div className="md:col-span-8">{children}</div>
    </section>
  )
}

export default function PressPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Press", path: "/press" }])} />
      <Navigation />
      <PageHeader
        eyebrow="Press kit"
        title="For podcasts, journalists and organisers"
        description={`Everything you need to feature ${author.name} or ${book.title}. Bios and images are free to use with credit.`}
      />

      <div className={`${container} divide-y divide-border`}>
        <Row id="brief-title" title="The book in brief">
          <p className="font-serif text-[1.75rem] leading-snug">{book.pitch}</p>
          <p className="mt-6 max-w-[68ch] text-lg leading-relaxed text-muted-foreground">{book.description}</p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {[...pressFacts, book.launchLabel].map((fact) => (
              <li key={fact} className="py-3.5 text-foreground/90">
                {fact}
              </li>
            ))}
          </ul>
        </Row>

        <Row id="bios-title" title="Author bios">
          <div className="divide-y divide-border border-y border-border">
            {bios.map((bio) => (
              <div key={bio.label} className="py-7">
                <div className="flex items-center justify-between gap-6">
                  <p className="text-sm text-accent">{bio.label}</p>
                  <CopyButton text={bio.text} />
                </div>
                <p className="mt-3 max-w-[68ch] leading-relaxed text-foreground/90">{bio.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Please use {author.name} in running text. Full name: {author.fullName}. On the cover: {author.coverName}.
          </p>
        </Row>

        <Row id="images-title" title="Images">
          <div className="grid gap-10 sm:grid-cols-2">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <Image src={professionalPortrait} alt={`Portrait of ${author.name}`} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-4 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Author portrait</span>
                <a href="/images/platform/professional_portrait.jpg" download className="inline-flex items-center gap-1.5 text-foreground text-link">
                  <Download className="h-4 w-4" aria-hidden="true" /> Download
                </a>
              </figcaption>
            </figure>
            <figure>
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-secondary">
                <div className="relative h-[82%] aspect-[2/3] shadow-[0_24px_48px_-20px_rgba(0,0,0,0.7)]">
                  <Image src={book.coverPath} alt={`Cover of ${book.fullTitle}`} fill sizes="240px" className="object-cover" />
                </div>
              </div>
              <figcaption className="mt-4 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Book cover</span>
                <a href={book.coverPath} download className="inline-flex items-center gap-1.5 text-foreground text-link">
                  <Download className="h-4 w-4" aria-hidden="true" /> Download
                </a>
              </figcaption>
            </figure>
          </div>
        </Row>

        <Row id="questions-title" title="Interview questions">
          <ol className="space-y-5">
            {interviewQuestions.map((q, i) => (
              <li key={q} className="grid grid-cols-[2.5rem_1fr] items-baseline text-lg leading-relaxed">
                <span className="font-serif text-accent">{i + 1}</span>
                <span className="text-foreground/90">{q}</span>
              </li>
            ))}
          </ol>
        </Row>

        <Row id="topics-title" title="Talk topics">
          <ul className="divide-y divide-border border-y border-border">
            {topics.map((topic) => (
              <li key={topic.slug}>
                <Link href={`/ideas/${topic.slug}`} className="group flex items-center justify-between gap-6 py-5">
                  <span className="font-serif text-[1.4rem] transition-colors group-hover:text-accent">{topic.title}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </Row>
      </div>

      <section className="bg-ink-raised py-20 text-ivory md:py-28" aria-labelledby="requests-title">
        <div className={`${container} grid gap-10 md:grid-cols-12 md:items-end`}>
          <div className="md:col-span-8">
            <h2 id="requests-title" className="font-serif text-[2.6rem] leading-[1.1] md:text-[3.5rem]">
              Interview and speaking requests
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist">
              I am happy to join podcasts, panels and interviews in English, in person or remotely.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
            <ActionLink href="/book-a-call" variant="solid-on-dark">
              Book a call
            </ActionLink>
            <ActionLink href="/contact" variant="outline-on-dark">
              Get in touch
            </ActionLink>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
