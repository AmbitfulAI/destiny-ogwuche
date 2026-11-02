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
      { label: "Speaking", href: "/speaking" },
      { label: "Press kit", href: "/press" },
      { label: "Journal", href: "/journal" },
      { label: "Contact", href: "/contact" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className={`${container} py-20`}>
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="font-serif text-3xl text-foreground">
              Destiny Ogwuche
            </Link>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Deep tech engineer, founder and author, working on why hard technology grows in some places and not in others.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem]">
              <li>
                <a href="https://www.linkedin.com/in/ogwuche-destiny-innosuccess/" target="_blank" rel="noopener" className="text-link text-foreground">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://ambitful.ai" target="_blank" rel="noopener" className="text-link text-foreground">
                  Ambitful AI
                </a>
              </li>
              <li>
                <a href="mailto:ogwuche.innosuccess@gmail.com" className="text-link text-foreground">
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="mb-4 font-sans text-sm font-medium tracking-normal text-foreground">{column.title}</h2>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-[0.95rem] text-muted-foreground transition-colors hover:text-foreground">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Destiny Innosuccess Ogwuche. Based in the Netherlands.</p>
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
