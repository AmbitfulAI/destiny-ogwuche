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
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-56 md:w-64 shadow-[0_30px_60px_-24px_rgba(11,46,35,0.55)]">
                <Image src={book.coverPath} alt={`Cover of ${book.fullTitle}`} width={1200} height={1800} priority className="w-full h-auto" />
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[0.95rem] text-accent mb-4">Free sample, {book.launchLabel.replace("Coming", "coming")}</p>
              <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-6">Read the opening of {book.title}</h1>
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
