import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { book } from "@/lib/book/content"

// Homepage band introducing the book.
export function BookFeature() {
  return (
    <section className="py-24 bg-secondary/40 border-y border-border" aria-labelledby="book-feature-title">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-4 flex justify-center">
            <Link href={book.path} className="block w-56 md:w-64 shadow-2xl ring-1 ring-border hover:-translate-y-1 transition-transform duration-500">
              <Image
                src={book.coverPath}
                alt={`Cover of ${book.fullTitle}`}
                width={1200}
                height={1800}
                className="w-full h-auto"
              />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">The book · {book.launchLabel}</p>
            <h2 id="book-feature-title" className="font-serif text-4xl md:text-5xl font-medium text-foreground leading-tight mb-3">
              {book.title}
            </h2>
            <p className="font-serif italic text-2xl text-muted-foreground mb-8">{book.subtitle}</p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">{book.pitch}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={book.path}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-bold tracking-widest uppercase text-[10px] hover:bg-primary transition-colors"
              >
                About the book
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </Link>
              <Link
                href="/book/sample"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary text-primary font-bold tracking-widest uppercase text-[10px] hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Read the opening free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
