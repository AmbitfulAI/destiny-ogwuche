import Link from "next/link"
import Image from "next/image"
import { book } from "@/lib/book/content"
import { ActionLink, container } from "@/components/site/action-link"

// Introduces the book on the home and about pages.
export function BookFeature() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="book-feature-title">
      <div className={`${container} grid items-center gap-14 md:grid-cols-12`}>
        <div className="md:col-span-5 lg:col-span-4">
          <Link
            href={book.path}
            className="mx-auto block w-56 shadow-[0_30px_60px_-24px_rgba(11,46,35,0.55)] transition-transform duration-500 hover:-translate-y-1 md:w-full md:max-w-[320px]"
          >
            <Image src={book.coverPath} alt={`Cover of ${book.fullTitle}`} width={1200} height={1800} sizes="320px" className="h-auto w-full" />
          </Link>
        </div>
        <div className="md:col-span-7 lg:col-span-7 lg:col-start-6">
          <p className="text-[0.95rem] text-accent">The book, {book.launchLabel.replace("Coming", "coming")}</p>
          <h2 id="book-feature-title" className="mt-4 font-serif text-4xl leading-[1.05] md:text-6xl">
            {book.title}
          </h2>
          <p className="mt-3 font-serif text-2xl italic text-muted-foreground md:text-[1.75rem]">{book.subtitle}</p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/85">{book.pitch}</p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Built on a doctoral study of Nigeria and the Netherlands: six years of data and 22 interviews with founders, investors, academics and policymakers.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ActionLink href={book.path}>About the book</ActionLink>
            <ActionLink href="/book/sample" variant="outline">
              Read the opening free
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  )
}
