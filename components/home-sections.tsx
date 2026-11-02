import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ideaBySlug } from "@/lib/book/ideas"
import { getPosts, formatDate, readingMinutes } from "@/lib/content"
import { ActionLink, container } from "./site/action-link"

/* Where the work was done, and who has written about it, set as quiet wordmarks. */
const builtAt = ["ASML", "Vitestro", "Skytree", "Nortek"]
const featuredIn = ["The Sun", "Daily Assets", "Global TV", "Best of LinkedIn"]

export function HomeCredentials() {
  return (
    <section className="border-b border-hairline py-12 md:py-14" aria-label="Credentials">
      <div className={`${container} grid gap-10 md:grid-cols-2 md:gap-16`}>
        {[
          { label: "Engineering at", names: builtAt },
          { label: "Featured in", names: featuredIn },
        ].map((row) => (
          <div key={row.label}>
            <p className="text-[0.8rem] font-semibold tracking-[0.04em] text-smoke">{row.label}</p>
            <ul className="mt-4 flex flex-wrap items-baseline gap-x-8 gap-y-2">
              {row.names.map((name) => (
                <li key={name} className="font-serif text-[1.65rem] font-medium leading-tight text-ivory/75">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export function HomeQuestion() {
  return (
    <section className="py-28 md:py-40" aria-labelledby="question-title">
      <div className={`${container} grid gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-8">
          <p className="eyebrow">The question behind the work</p>
          <h2 id="question-title" className="mt-8 font-serif text-[2.75rem] font-medium leading-[1.02] text-ivory md:text-[4.5rem]">
            Why does deep technology grow in some places and not in others?
          </h2>
        </div>
        <div className="lg:col-span-4 lg:self-end">
          <p className="text-[1.0625rem] leading-[1.8] text-mist">
            I have answered it from the inside: as an engineer on the machines that print the world&apos;s most advanced chips, as a founder
            raising money for hardware in Nigeria, and as a researcher comparing two ecosystems over six years. The answer became a book.
          </p>
          <ActionLink href="/book/towards-deep-tech-in-africa" variant="text" className="mt-7">
            Towards Deep Tech in Africa
          </ActionLink>
        </div>
      </div>
    </section>
  )
}

const offers = [
  {
    title: "Venture building",
    body: "I start and build companies around hard problems: Ambitful AI today, and before it a modular waste-to-electricity bioreactor and a platform for young Nigerian voices.",
    link: { href: "/ventures", label: "Ventures" },
  },
  {
    title: "Technical diligence",
    body: "For investors, an engineer's read on hardware and deep tech ventures: technology readiness, verification risk and the real path from prototype to product.",
    link: { href: "/book-a-call", label: "Book a call" },
  },
  {
    title: "Founder advisory",
    body: "Working sessions for deep tech founders on verification and validation, commercialisation and raising non-dilutive funding.",
    link: { href: "/book-a-call", label: "Book a call" },
  },
  {
    title: "Keynotes and panels",
    body: "On deep tech in Africa and Europe, venture capital for hard technology, and what it takes to build the ground innovation stands on.",
    link: { href: "/speaking", label: "Speaking" },
  },
]

export function HomeOffers() {
  return (
    <section className="border-y border-hairline bg-ink-raised py-24 md:py-32" aria-labelledby="offers-title">
      <div className={container}>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="eyebrow">Work with me</p>
            <h2 id="offers-title" className="mt-6 font-serif text-[2.75rem] font-medium leading-[1.05] md:text-[3.75rem]">
              Where I am most useful
            </h2>
          </div>
          <ActionLink href="/store" variant="text">
            Advisory and store
          </ActionLink>
        </div>
        <ul className="mt-16 border-t border-hairline">
          {offers.map((offer) => (
            <li key={offer.title} className="border-b border-hairline">
              <Link href={offer.link.href} className="group grid gap-4 py-9 md:grid-cols-12 md:items-baseline md:gap-10">
                <h3 className="font-serif text-[2rem] font-medium leading-tight text-ivory transition-colors duration-300 group-hover:text-champagne md:col-span-4 md:text-[2.4rem]">
                  {offer.title}
                </h3>
                <p className="max-w-[60ch] leading-[1.75] text-mist md:col-span-6">{offer.body}</p>
                <span className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-champagne md:col-span-2 md:justify-self-end">
                  {offer.link.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const record = [
  {
    name: "Vitestro",
    role: "Verification and Validation Lead",
    outcome: "Led validation of the world's first autonomous blood-drawing robot, and co-led its commercialisation after a €38M Series B.",
  },
  {
    name: "ASML",
    role: "Systems Engineer, Qualifications and Test",
    outcome: "Tested and qualified extreme ultraviolet lithography systems at nanometre accuracy, and led root-cause analysis.",
  },
  {
    name: "Ambitful AI",
    role: "Founder",
    outcome: "Built an opportunity intelligence platform for ambitious people in Africa, covered by The Sun and Daily Assets on launch day.",
  },
  {
    name: "Meyana Bio Energy",
    role: "Co-founder",
    outcome: "Built a 12-person cleantech venture around a modular waste-to-electricity bioreactor, funded by Innovate UK and C40 Cities.",
  },
  {
    name: "Nortek",
    role: "Technical Project Lead",
    outcome: "Led more than 22 clients in defence, marine robotics and energy, and ran ISO 9001 and 14001 programmes.",
  },
  {
    name: "Skytree",
    role: "Product Test Engineer",
    outcome: "Tested the atmospheric carbon capture technology of a European Space Agency spin-out for real-world reliability.",
  },
]

export function HomeTrackRecord() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="record-title">
      <div className={container}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
            <p className="eyebrow">Track record</p>
            <h2 id="record-title" className="mt-6 font-serif text-[2.75rem] font-medium leading-[1.05] md:text-[3.75rem]">
              Built and shipped
            </h2>
            <p className="mt-6 max-w-sm leading-[1.8] text-mist">
              Inside the companies that make hard technology work, and in three ventures of my own.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <ActionLink href="/experience" variant="text">
                Experience
              </ActionLink>
              <ActionLink href="/ventures" variant="text">
                Ventures
              </ActionLink>
            </div>
          </div>
          <ul className="grid gap-x-12 sm:grid-cols-2 lg:col-span-8">
            {record.map((item) => (
              <li key={item.name} className="border-t border-hairline py-8">
                <p className="font-serif text-[1.9rem] font-medium leading-none text-ivory">{item.name}</p>
                <p className="mt-2 text-[0.85rem] font-semibold tracking-[0.02em] text-champagne">{item.role}</p>
                <p className="mt-4 leading-[1.75] text-mist">{item.outcome}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const featuredIdeas = ["the-gate", "software-trap", "substitution-tax", "sovereign-by-design"]

export function HomeIdeas() {
  const ideas = featuredIdeas.map(ideaBySlug).filter((i): i is NonNullable<typeof i> => Boolean(i))
  return (
    <section className="border-y border-hairline bg-ink-raised py-24 md:py-32" aria-labelledby="ideas-title">
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Ideas from the book</p>
            <h2 id="ideas-title" className="mt-6 font-serif text-[2.75rem] font-medium leading-[1.05] md:text-[3.5rem]">
              A vocabulary for building hard things
            </h2>
            <p className="mt-6 max-w-sm leading-[1.8] text-mist">
              The book names the mechanisms that decide whether deep technology can grow in a place. Start with these four.
            </p>
            <ActionLink href="/ideas" variant="outline" className="mt-9">
              All 18 ideas
            </ActionLink>
          </div>
          <ul className="border-t border-hairline lg:col-span-8 lg:col-start-5">
            {ideas.map((idea) => (
              <li key={idea.slug} className="border-b border-hairline">
                <Link href={`/ideas/${idea.slug}`} className="group grid gap-3 py-8 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-10">
                  <span className="font-serif text-[1.85rem] font-medium leading-tight text-ivory transition-colors duration-300 group-hover:text-champagne">
                    {idea.term}
                  </span>
                  <span className="leading-[1.75] text-mist">{idea.definition}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function HomeWriting() {
  const posts = getPosts().slice(0, 3)
  if (posts.length === 0) return null
  return (
    <section className="py-24 md:py-32" aria-labelledby="writing-title">
      <div className={container}>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="eyebrow">Writing</p>
            <h2 id="writing-title" className="mt-6 font-serif text-[2.75rem] font-medium leading-[1.05] md:text-[3.5rem]">
              Notes from the work
            </h2>
          </div>
          <ActionLink href="/writing" variant="text">
            All writing
          </ActionLink>
        </div>
        {posts.length === 1 ? (
          <Link href={`/writing/${posts[0].slug}`} className="group mt-14 grid gap-8 border-y border-hairline py-12 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <p className="text-[0.85rem] text-smoke">
                <time dateTime={posts[0].date}>{formatDate(posts[0].date)}</time>, {readingMinutes(posts[0])} min read
              </p>
              <h3 className="mt-5 font-serif text-[2.4rem] font-medium leading-[1.05] text-ivory transition-colors duration-300 group-hover:text-champagne md:text-[3.25rem]">
                {posts[0].title}
              </h3>
            </div>
            <div className="md:col-span-5 md:self-end">
              {posts[0].summary && <p className="text-[1.0625rem] leading-[1.8] text-mist">{posts[0].summary}</p>}
              <span className="mt-6 inline-flex items-center gap-2 text-[0.875rem] font-semibold text-champagne">
                Read the essay
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ) : (
          <ul className={`mt-14 grid gap-x-12 ${posts.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
            {posts.map((post) => (
              <li key={post.slug} className="border-t border-hairline py-8">
                <Link href={`/writing/${post.slug}`} className="group block">
                  <p className="text-[0.85rem] text-smoke">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>, {readingMinutes(post)} min read
                  </p>
                  <h3 className="mt-4 font-serif text-[1.9rem] font-medium leading-[1.1] text-ivory transition-colors duration-300 group-hover:text-champagne">
                    {post.title}
                  </h3>
                  {post.summary && <p className="mt-4 leading-[1.75] text-mist">{post.summary}</p>}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export function HomeContact() {
  return (
    <section className="relative overflow-hidden border-t border-hairline py-28 md:py-40" aria-labelledby="contact-title">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,#1E2126_0%,#0B0D10_60%)]"
        aria-hidden="true"
      />
      <div className={`${container} relative text-center`}>
        <p className="eyebrow">Let&apos;s talk</p>
        <h2 id="contact-title" className="mx-auto mt-8 max-w-4xl font-serif text-[3rem] font-medium leading-[1] md:text-[5.5rem]">
          Building something hard?
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-[1.125rem] leading-[1.75] text-mist">
          Tell me what you are building, funding or planning. I work with founders, investors, organisers and governments on deep tech.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <ActionLink href="/book-a-call">Book a call</ActionLink>
          <ActionLink href="/contact" variant="outline">
            Send a message
          </ActionLink>
        </div>
      </div>
    </section>
  )
}
