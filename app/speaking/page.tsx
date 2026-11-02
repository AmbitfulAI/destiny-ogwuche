import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { ActionLink, container } from "@/components/site/action-link"
import { speakingEngagements } from "@/lib/data/speaking"
import { boardRoles } from "@/lib/data/board-roles"
import impactImg from "@/lib/images/impact.jpeg"

const topics = [
  {
    title: "Building deep tech in Africa",
    description:
      "Why the gap is not a shortage of talent or money, and what to build instead: the argument of my book, with the data and stories behind it.",
  },
  {
    title: "From the lab to the market",
    description:
      "What it takes to turn science into industry, from semiconductors and carbon capture to medical robotics, told by someone who has validated all three.",
  },
  {
    title: "Venture capital and hard technology",
    description:
      "How investors misread slow, physical ventures, how to fund the right stage, and why trust still outperforms algorithms.",
  },
]

export default function SpeakingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <PageHeader
        eyebrow="Speaking"
        title="Talks, panels and advisory"
        description="Keynotes, masterclasses and conversations on deep tech, Africa's innovation ecosystems and venture capital, in person or remote."
        imageSrc={impactImg}
        imageAlt="Destiny Ogwuche speaking"
      />

      <section className="py-16 md:py-24" aria-labelledby="topics-title">
        <div className={container}>
          <h2 id="topics-title" className="font-serif text-4xl leading-[1.1] md:text-5xl">
            What I speak about
          </h2>
          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
            {topics.map((topic, i) => (
              <div key={topic.title} className={`md:px-10 ${i === 0 ? "md:pl-0" : ""} ${i === topics.length - 1 ? "md:pr-0" : ""}`}>
                <h3 className="font-serif text-2xl leading-snug">{topic.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{topic.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap gap-3">
            <ActionLink href="/contact">Invite me to speak</ActionLink>
            <ActionLink href="/press" variant="outline">
              Bios, photos and interview questions
            </ActionLink>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-24" aria-labelledby="past-title">
        <div className={`${container} grid gap-12 md:grid-cols-12`}>
          <h2 id="past-title" className="font-serif text-4xl leading-[1.1] md:col-span-4 md:text-5xl">
            Past talks
          </h2>
          <ol className="md:col-span-8 divide-y divide-border border-y border-border">
            {speakingEngagements.map((talk) => (
              <li key={talk.title} className="grid gap-3 py-8 sm:grid-cols-[10rem_1fr] sm:gap-8">
                <p className="text-[0.95rem] text-accent">{talk.date}</p>
                <div>
                  <h3 className="font-serif text-2xl leading-snug">{talk.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{talk.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50 py-16 md:py-24" aria-labelledby="advisory-title">
        <div className={`${container} grid gap-12 md:grid-cols-12`}>
          <div className="md:col-span-4">
            <h2 id="advisory-title" className="font-serif text-4xl leading-[1.1] md:text-5xl">
              Boards and advisory
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Strategic guidance for deep tech startups, venture funds and public sector innovation programmes.
            </p>
          </div>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 md:col-span-8">
            {boardRoles.map((role) => (
              <article key={role.title} className="border-t border-border pt-6">
                <h3 className="font-serif text-2xl leading-snug">{role.title}</h3>
                <p className="mt-1 text-sm text-accent">
                  {role.position}
                  {role.period ? `, ${role.period}` : ""}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{role.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
