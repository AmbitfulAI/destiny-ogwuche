import { Plus } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { container } from "@/components/site/action-link"
import { awards } from "@/lib/data/awards"

export default function AwardsPage() {
  const [featured, ...others] = awards

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <PageHeader
        eyebrow="Awards"
        title="Awards, fellowships and scholarships"
        description="Recognition across venture capital, deep tech, academia and engineering, from a national engineering competition in Nigeria to a venture fellowship in 2026."
      />

      <section className="py-16 md:py-24" aria-labelledby="featured-award">
        <div className={`${container} grid gap-12 md:grid-cols-12`}>
          <p className="font-serif text-[1.75rem] text-accent md:col-span-4">{featured.year}</p>
          <div className="md:col-span-8">
            <h2 id="featured-award" className="font-serif text-[2.15rem] leading-tight md:text-[2.6rem]">
              {featured.title}
            </h2>
            <p className="mt-6 max-w-[68ch] leading-[1.75] text-muted-foreground">{featured.description}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-24" aria-labelledby="all-awards">
        <div className={`${container} grid gap-12 md:grid-cols-12`}>
          <h2 id="all-awards" className="font-serif text-[2.6rem] leading-[1.1] md:col-span-4 md:text-[3.5rem]">
            Earlier recognition
          </h2>
          <ol className="md:col-span-8 divide-y divide-border border-y border-border">
            {others.map((award) => (
              <li key={award.title}>
                <details className="group py-6">
                  <summary className="grid cursor-pointer list-none grid-cols-[4rem_1fr_auto] items-baseline gap-4 [&::-webkit-details-marker]:hidden">
                    <span className="text-[0.95rem] text-accent">{award.year}</span>
                    <span className="font-serif text-[1.4rem] leading-snug">{award.title}</span>
                    <Plus className="h-4 w-4 self-center text-muted-foreground transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
                  </summary>
                  <p className="mt-4 max-w-[64ch] pl-20 leading-relaxed text-muted-foreground">{award.description}</p>
                </details>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Footer />
    </main>
  )
}
