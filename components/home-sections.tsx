import Link from "next/link"
import { ideaBySlug } from "@/lib/book/ideas"
import { ActionLink, container } from "./site/action-link"

const work = [
  {
    title: "Engineering",
    body: "Making hard technology work in production: wafer alignment on extreme ultraviolet lithography systems at ASML, verification and validation of the world's first autonomous blood-drawing robot at Vitestro, acoustic sensing at Nortek and carbon capture testing at Skytree.",
    link: { href: "/experience", label: "Experience" },
  },
  {
    title: "Ventures",
    body: "Founder of Ambitful AI, which helps ambitious people, especially in Africa, find and win the opportunities meant for them. Before that, co-founder of Meyana Bio Energy, which built a modular waste-to-electricity bioreactor, and of Tellit.",
    link: { href: "/ventures", label: "Ventures" },
  },
  {
    title: "Research and investing",
    body: "Doctoral research at Golden Gate University comparing deep tech ecosystems in Nigeria and the Netherlands with the MIT iEcosystem Model. Fellow of the VC Lab Venture Institute, on the investor side of the table.",
    link: { href: "/research", label: "Research" },
  },
]

export function HomeWork() {
  return (
    <section className="border-t border-border py-24 md:py-32" aria-labelledby="work-title">
      <div className={container}>
        <h2 id="work-title" className="max-w-2xl font-serif text-4xl leading-[1.1] md:text-5xl">
          Three ways into the same problem
        </h2>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
          {work.map((item, i) => (
            <div key={item.title} className={`md:px-10 ${i === 0 ? "md:pl-0" : ""} ${i === work.length - 1 ? "md:pr-0" : ""}`}>
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{item.body}</p>
              <ActionLink href={item.link.href} variant="text" className="mt-6">
                {item.link.label}
              </ActionLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const featuredIdeas = ["the-gate", "software-trap", "substitution-tax", "sovereign-by-design"]

export function HomeIdeas() {
  const ideas = featuredIdeas.map(ideaBySlug).filter((i): i is NonNullable<typeof i> => Boolean(i))
  return (
    <section className="bg-[#0B2E23] py-24 text-[#F1EFE6] md:py-32" aria-labelledby="ideas-title">
      <div className={container}>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 id="ideas-title" className="font-serif text-4xl leading-[1.1] md:text-5xl">
              Ideas from the book
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-[#C9D3CC]">
              The book names the mechanisms that decide whether hard technology can grow in a place. These four are a good place to start.
            </p>
            <ActionLink href="/ideas" variant="outline-on-dark" className="mt-8">
              All 18 ideas
            </ActionLink>
          </div>
          <ul className="md:col-span-8 md:col-start-5 divide-y divide-[#F1EFE6]/12 border-y border-[#F1EFE6]/12">
            {ideas.map((idea) => (
              <li key={idea.slug}>
                <Link href={`/ideas/${idea.slug}`} className="group grid gap-2 py-7 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-8">
                  <span className="font-serif text-2xl text-[#F1EFE6] transition-colors group-hover:text-[#E2B35A]">{idea.term}</span>
                  <span className="leading-relaxed text-[#C9D3CC]">{idea.definition}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function HomeContact() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="contact-title">
      <div className={`${container} grid gap-10 md:grid-cols-12 md:items-end`}>
        <div className="md:col-span-8">
          <h2 id="contact-title" className="font-serif text-4xl leading-[1.1] md:text-6xl">
            Talks, advisory and technical diligence
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I speak on deep tech in Africa and Europe, advise founders on verification and funding, and review hardware ventures for investors. Podcasts and journalists are welcome too.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
          <ActionLink href="/contact">Get in touch</ActionLink>
          <ActionLink href="/press" variant="outline">
            Press kit
          </ActionLink>
        </div>
      </div>
    </section>
  )
}
