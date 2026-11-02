import Link from "next/link"
import Image from "next/image"
import { book } from "@/lib/book/content"
import { ActionLink, container } from "@/components/site/action-link"

// Introduces the book on the home and about pages.
export function BookFeature() {
  return (
    <section className="relative overflow-hidden border-t border-hairline py-24 md:py-32" aria-labelledby="book-feature-title">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_22%_50%,#1C1F24_0%,#0B0D10_62%)]"
        aria-hidden="true"
      />
      <div className={`${container} relative grid items-center gap-16 md:grid-cols-12`}>
        <div className="md:col-span-5 lg:col-span-4">
          <Link href={book.path} className="frame-offset mx-auto block w-56 md:w-full md:max-w-[320px]">
            <Image
              src={book.coverPath}
              alt={`Cover of ${book.fullTitle}`}
              width={1200}
              height={1800}
              sizes="320px"
              className="relative h-auto w-full shadow-[0_40px_80px_-30px_rgba(0,0,0,0.85)]"
            />
          </Link>
        </div>
        <div className="md:col-span-7 lg:col-span-7 lg:col-start-6">
          <p className="eyebrow">The book, {book.launchLabel.replace("Coming", "coming")}</p>
          <h2 id="book-feature-title" className="mt-7 font-serif text-[3rem] font-medium leading-[0.98] md:text-[4.75rem]">
            {book.title}
          </h2>
          <p className="mt-4 font-serif text-[1.75rem] italic leading-snug text-mist md:text-[2.1rem]">{book.subtitle}</p>
          <p className="mt-9 max-w-xl text-[1.125rem] leading-[1.75] text-ivory/90">{book.pitch}</p>
          <p className="mt-4 max-w-xl leading-[1.8] text-mist">
            Built on a doctoral study of Nigeria and the Netherlands: six years of data and 22 interviews with founders, investors, academics and policymakers.
          </p>
          <div className="mt-11 flex flex-wrap gap-3">
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
