import { container } from "./site/action-link"

const principles = [
  {
    title: "Africa champion",
    description:
      "I make the case for deep tech investment in Nigeria and across Africa, and I back it with data, from WIPO's Global Innovation Index to the ecosystem figures in my own doctoral research. I am not just pointing at the map. I am staking a claim.",
  },
  {
    title: "People before numbers",
    description:
      "I start with people: a rejection, a dream deferred, a mentor who said yes. The founders and engineers behind the statistics are the reason the statistics matter.",
  },
  {
    title: "Evidence first",
    description:
      "I work from models and measurement: the MIT iEcosystem framework, Kepner-Tregoe problem analysis, verification data from the lab. I would rather test a claim than repeat it.",
  },
  {
    title: "Serious work, light touch",
    description:
      "I take the work seriously and myself less so. Venture capital ethics and the future of AI are better discussed with a sense of humour.",
  },
  {
    title: "Community first",
    description:
      "I celebrate other people's wins in public, mentor secondary school students in Jos, and speak at conferences across Africa and Europe. Leadership is not a title. It is a daily decision.",
  },
  {
    title: "Urgent optimist",
    description:
      "The future is tired of waiting for us. I see big systemic problems as big opportunities, and I would rather build a bridge across a gap than describe it.",
  },
]

export function Thinking() {
  return (
    <section id="thinking" className="border-t border-border py-24 md:py-32" aria-labelledby="thinking-title">
      <div className={`${container} grid gap-12 md:grid-cols-12`}>
        <h2 id="thinking-title" className="font-serif text-[2.6rem] leading-[1.1] md:col-span-4 md:text-[3.5rem]">
          How I work
        </h2>
        <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2 md:col-span-8">
          {principles.map((p) => (
            <div key={p.title} className="border-t border-border pt-6">
              <dt className="font-serif text-[1.75rem]">{p.title}</dt>
              <dd className="mt-3 leading-relaxed text-muted-foreground">{p.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
