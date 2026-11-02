import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { container } from "@/components/site/action-link"
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
      <section className="pt-36 pb-24 md:pt-44 md:pb-32">
        <div className={container}>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-56 md:w-64 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.7)]">
                <Image src={book.coverPath} alt={`Cover of ${book.fullTitle}`} width={1200} height={1800} priority sizes="256px" className="h-auto w-full" />
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="eyebrow mb-6">Free sample, {book.launchLabel.replace("Coming", "coming")}</p>
              <h1 className="mb-6 font-serif text-[2.6rem] leading-[1.05] md:text-[4.25rem]">Read the opening of {book.title}</h1>
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
