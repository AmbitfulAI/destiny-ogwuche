import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Download, Mail } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
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
  { label: "Short (50 words)", text: author.bio50 },
  { label: "Long (150 words)", text: author.bio150 },
]

export default function PressPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Press", path: "/press" }])} />
      <Navigation />
      <PageHeader
        eyebrow="Press kit"
        title={
          <>
            For podcasts, journalists <span className="text-primary italic">and organisers</span>
          </>
        }
        description={`Everything you need to feature ${author.name} or ${book.title}. Bios and images are free to use with credit.`}
      />

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto space-y-20">
            {/* Pitch */}
            <div className="grid md:grid-cols-12 gap-10">
              <h2 className="md:col-span-4 font-serif text-3xl font-medium">The book in brief</h2>
              <div className="md:col-span-8 space-y-6">
                <p className="font-serif text-2xl leading-snug">{book.pitch}</p>
                <p className="text-muted-foreground leading-relaxed">{book.description}</p>
                <ul className="space-y-2 text-foreground">
                  {pressFacts.map((fact) => (
                    <li key={fact} className="flex gap-3">
                      <span className="text-primary" aria-hidden="true">·</span>
                      {fact}
                    </li>
                  ))}
                  <li className="flex gap-3">
                    <span className="text-primary" aria-hidden="true">·</span>
                    {book.launchLabel}
                  </li>
                </ul>
              </div>
            </div>

            {/* Bios */}
            <div className="grid md:grid-cols-12 gap-10">
              <h2 className="md:col-span-4 font-serif text-3xl font-medium">Author bios</h2>
              <div className="md:col-span-8 space-y-6">
                {bios.map((bio) => (
                  <div key={bio.label} className="p-6 border border-border bg-card">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">{bio.label}</p>
                    <p className="text-foreground leading-relaxed select-all">{bio.text}</p>
                  </div>
                ))}
                <p className="text-sm text-muted-foreground">
                  Name: {author.name}. Full name: {author.fullName}. On the cover: {author.coverName}.
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="grid md:grid-cols-12 gap-10">
              <h2 className="md:col-span-4 font-serif text-3xl font-medium">Images</h2>
              <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
                <figure>
                  <div className="relative aspect-3/4 overflow-hidden border border-border mb-3">
                    <Image src={professionalPortrait} alt={`Portrait of ${author.name}`} fill className="object-cover" />
                  </div>
                  <figcaption className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Author portrait</span>
                    <a href="/images/platform/professional_portrait.jpg" download className="inline-flex items-center gap-1 text-primary font-medium">
                      <Download className="w-4 h-4" aria-hidden="true" /> Download
                    </a>
                  </figcaption>
                </figure>
                <figure>
                  <div className="relative aspect-3/4 overflow-hidden border border-border mb-3 bg-secondary">
                    <Image src={book.coverPath} alt={`Cover of ${book.fullTitle}`} fill className="object-contain" />
                  </div>
                  <figcaption className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Book cover</span>
                    <a href={book.coverPath} download className="inline-flex items-center gap-1 text-primary font-medium">
                      <Download className="w-4 h-4" aria-hidden="true" /> Download
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Questions */}
            <div className="grid md:grid-cols-12 gap-10">
              <h2 className="md:col-span-4 font-serif text-3xl font-medium">Interview questions</h2>
              <ol className="md:col-span-8 space-y-4 list-decimal pl-6 marker:text-primary marker:font-serif">
                {interviewQuestions.map((q) => (
                  <li key={q} className="text-foreground leading-relaxed pl-2">
                    {q}
                  </li>
                ))}
              </ol>
            </div>

            {/* Topics */}
            <div className="grid md:grid-cols-12 gap-10">
              <h2 className="md:col-span-4 font-serif text-3xl font-medium">Talk topics</h2>
              <ul className="md:col-span-8 grid sm:grid-cols-2 gap-4">
                {[
                  { slug: "the-gate", title: "The scarcity story is wrong" },
                  { slug: "software-trap", title: "The Software Trap in deep tech investing" },
                  { slug: "substitution-tax", title: "The substitution tax founders pay" },
                  { slug: "drain-circulation-or-asset", title: "The diaspora as an asset" },
                  { slug: "open-the-gate", title: "Certainty: the cheapest thing a government can give" },
                  { slug: "sovereign-by-design", title: "Sovereign by design" },
                ].map((topic) => (
                  <li key={topic.slug}>
                    <Link href={`/ideas/${topic.slug}`} className="block h-full p-5 border border-border bg-card hover:border-primary/50 transition-colors font-serif text-lg">
                      {topic.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="p-10 border-2 border-primary/30 bg-primary/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="font-serif text-3xl font-medium mb-2">Interview and speaking requests</h2>
                <p className="text-muted-foreground">I am happy to join podcasts, panels and interviews in English, in person or remotely.</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-12 px-8 bg-foreground text-background font-bold tracking-widest uppercase text-[11px] hover:bg-primary transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" /> Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
