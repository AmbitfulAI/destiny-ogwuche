import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { container } from "@/components/site/action-link"
import { FullStory } from "@/components/site/full-story"
import { experiences } from "@/lib/data/experience"

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <PageHeader
        eyebrow="Experience"
        title="A decade of making hard technology work"
        description="My career has had one thread: translating complex scientific concepts into industrial-grade products that solve fundamental human problems."
      />

      <section className="py-16 md:py-24">
        <div className={container}>
          <ol className="divide-y divide-border border-b border-border">
            {experiences.map((exp) => {
              const [company, place] = exp.company.split(",").map((s) => s.trim())
              return (
                <li key={exp.role + exp.company} className="grid gap-6 py-12 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-3">
                    <p className="font-serif text-[1.4rem] text-accent">{exp.period}</p>
                    {place && <p className="mt-1 text-sm text-muted-foreground">{place}</p>}
                  </div>
                  <div className="md:col-span-9 lg:col-span-8">
                    <h2 className="font-serif text-[2.15rem] leading-tight">{company}</h2>
                    <p className="mt-1 text-lg text-foreground/80">{exp.role}</p>
                    <FullStory summary={exp.summary} story={exp.description} className="mt-6" />
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Areas">
                      {exp.skills.map((skill) => (
                        <li key={skill} className="rounded-sm border border-border px-3 py-1 text-sm text-foreground/75">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <Footer />
    </main>
  )
}
