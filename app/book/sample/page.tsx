import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SignupForm } from "@/components/book/signup-form"
import { author, book } from "@/lib/book/content"

export const metadata: Metadata = {
  title: `Free sample: the opening of ${book.title}`,
  description: `Get the Preface and "A Note on Words" from ${book.fullTitle} by ${author.name}, free by email.`,
  alternates: { canonical: "/book/sample" },
}

export default function SamplePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="pt-40 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-56 md:w-64 shadow-2xl ring-1 ring-border">
                <Image src={book.coverPath} alt={`Cover of ${book.fullTitle}`} width={1200} height={1800} priority className="w-full h-auto" />
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Free sample · {book.launchLabel}</p>
              <h1 className="font-serif text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight mb-6">Read the opening of {book.title}</h1>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-10">
                <p>
                  The Preface tells how a laboratory key, handed to a curious boy in Otukpo, decided more than talent ever did, and why the book is about building those keys on purpose.
                </p>
                <p>&ldquo;A Note on Words&rdquo; defines deep tech in one plain sentence and gives you a three-question test you can carry into any pitch meeting.</p>
              </div>
              <SignupForm source="sample-page" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
