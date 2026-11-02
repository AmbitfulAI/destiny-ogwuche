import { degrees } from "@/lib/data/education"
import { container } from "./site/action-link"

export function Education() {
  return (
    <section id="education" className="border-t border-border py-24 md:py-32" aria-labelledby="education-title">
      <div className={`${container} grid gap-12 md:grid-cols-12`}>
        <h2 id="education-title" className="font-serif text-[2.6rem] leading-[1.1] md:col-span-4 md:text-[3.5rem]">
          Education
        </h2>
        <ol className="md:col-span-8 divide-y divide-border border-y border-border">
          {degrees.map((edu) => {
            const [school, place] = edu.institution.split("|").map((s) => s.trim())
            return (
              <li key={edu.degree} className="grid gap-4 py-10 sm:grid-cols-[5rem_1fr]">
                <p className="font-serif text-[1.4rem] text-accent">{edu.year}</p>
                <div>
                  <h3 className="font-serif text-[1.75rem] leading-snug">{edu.degree}</h3>
                  <p className="mt-1 text-muted-foreground">
                    {school}
                    {place ? `, ${place}` : ""}
                  </p>
                  <ul className="mt-5 space-y-2 text-[0.95rem] leading-relaxed text-foreground/80">
                    {edu.details.split("|").map((detail) => (
                      <li key={detail} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-accent">
                        {detail.trim()}
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
  )
}
