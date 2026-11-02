import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ActionLink, container } from "@/components/site/action-link"

const suggestions = [
  { href: "/book/towards-deep-tech-in-africa", label: "Towards Deep Tech in Africa" },
  { href: "/writing", label: "Writing" },
  { href: "/ideas", label: "Ideas from the book" },
  { href: "/about", label: "About" },
]

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="pt-40 pb-28 md:pt-48">
        <div className={`${container} max-w-3xl`}>
          <p className="text-[0.95rem] text-accent">Page not found</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] md:text-7xl">This page has moved, or never existed.</h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Check the address for a typo, or start from one of these pages.
          </p>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {suggestions.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="block py-4 font-serif text-2xl transition-colors hover:text-accent">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
          <ActionLink href="/" className="mt-10">
            Go to the homepage
          </ActionLink>
        </div>
      </section>
      <Footer />
    </main>
  )
}
