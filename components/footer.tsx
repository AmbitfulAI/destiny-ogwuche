import Link from "next/link"
import { container } from "./site/action-link"

const columns = [
  {
    title: "The book",
    links: [
      { label: "Towards Deep Tech in Africa", href: "/book/towards-deep-tech-in-africa" },
      { label: "Read the opening free", href: "/book/sample" },
      { label: "Ideas from the book", href: "/ideas" },
      { label: "The numbers", href: "/book/deep-tech-numbers" },
      { label: "Reading list", href: "/reading-list" },
    ],
  },
  {
    title: "Work with me",
    links: [
      { label: "Book a call", href: "/book-a-call" },
      { label: "Store", href: "/store" },
      { label: "Writing", href: "/writing" },
      { label: "Speaking", href: "/speaking" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "About", href: "/about" },
      { label: "Experience", href: "/experience" },
      { label: "Ventures", href: "/ventures" },
      { label: "Research", href: "/research" },
      { label: "Awards", href: "/awards" },
    ],
  },
  {
    title: "Media",
    links: [
      { label: "Press kit", href: "/press" },
      { label: "Journal", href: "/journal" },
      { label: "Photos", href: "/journal/photos" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink-raised">
      <div className={`${container} py-20 md:py-24`}>
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="font-serif text-[2.25rem] font-medium leading-none text-ivory">
              Destiny Ogwuche
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-mist">
              Founder, engineer and author. I build hard technology, and the conditions it needs to grow, between Europe and Africa.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.9rem]">
              <li>
                <a href="https://www.linkedin.com/in/ogwuche-destiny-innosuccess/" target="_blank" rel="noopener" className="text-ivory underline decoration-champagne/40 underline-offset-[0.35em] transition-colors hover:text-champagne">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://ambitful.ai" target="_blank" rel="noopener" className="text-ivory underline decoration-champagne/40 underline-offset-[0.35em] transition-colors hover:text-champagne">
                  Ambitful AI
                </a>
              </li>
              <li>
                <a href="mailto:ogwuche.innosuccess@gmail.com" className="text-ivory underline decoration-champagne/40 underline-offset-[0.35em] transition-colors hover:text-champagne">
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 md:col-span-8">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="mb-5 font-sans text-[0.8rem] font-semibold tracking-[0.04em] text-champagne">{column.title}</h2>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-[0.9rem] text-mist transition-colors hover:text-ivory">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-hairline pt-8 text-[0.85rem] text-smoke sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Destiny Innosuccess Ogwuche. Based in the Netherlands.</p>
          <Link href="/privacy" className="transition-colors hover:text-ivory">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
