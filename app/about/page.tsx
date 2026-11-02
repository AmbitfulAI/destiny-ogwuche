import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Thinking } from "@/components/thinking"
import { Education } from "@/components/education"
import { BookFeature } from "@/components/book/book-feature"
import { container } from "@/components/site/action-link"

export const metadata: Metadata = {
  title: "About Destiny Ogwuche",
  description:
    "Destiny Ogwuche (Destiny Innosuccess Ogwuche) is a Nigerian-born deep tech engineer in the Netherlands who has worked at ASML, Skytree, Nortek and Vitestro, founder of Ambitful AI and author of Towards Deep Tech in Africa.",
  alternates: { canonical: "/about" },
}

const facts = [
  { label: "Based in", value: "The Netherlands. Grew up in Otukpo, Nigeria" },
  { label: "Engineering", value: "ASML, Vitestro, Nortek, Skytree, FG Robosys" },
  { label: "Ventures", value: "Ambitful AI (founder), Meyana Bio Energy, Tellit" },
  { label: "Education", value: "DBA, Golden Gate University. MSc Mechatronics, University of Glasgow. BEng, Federal University of Technology, Minna" },
  { label: "Fellowships", value: "VC Lab Venture Institute. EU Deep Tech Venturing and Innovation Program" },
  { label: "Recognition", value: "LinkedIn Community Top Voice in Entrepreneurship" },
]

const drives = [
  {
    title: "Mission",
    text: "To identify and scale frontier deep tech, bridging the gap between Africa's talent and the global infrastructure it deserves.",
  },
  {
    title: "What drives me",
    text: "The belief that access, not ability, is the real barrier for most brilliant minds. I build platforms and pathways to change that.",
  },
  {
    title: "Perspective",
    text: "An operator-investor mindset, always asking: what is the commercial path from this scientific breakthrough to real-world impact?",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <header className="relative overflow-hidden border-b border-hairline pt-40 pb-20 md:pt-52 md:pb-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,#1C1F24_0%,#0B0D10_60%)]"
          aria-hidden="true"
        />
        <div className={`${container} relative grid items-end gap-14 lg:grid-cols-12`}>
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">About</p>
            <h1 className="font-serif text-[3.2rem] leading-[0.98] md:text-[5.5rem]">Founder, engineer and author</h1>
            <p className="mt-8 max-w-2xl text-[1.15rem] leading-[1.75] text-mist md:text-[1.25rem]">
              Nigerian-born and based in the Netherlands. I build companies around hard technology, I have done the engineering inside some of the most demanding companies in Europe, and I study why deep tech grows in some places and not in others.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="frame-offset mx-auto w-full max-w-sm lg:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-panel">
                <Image
                  src="/images/platform/engineering_space.jpg"
                  alt="Destiny Ogwuche"
                  fill
                  priority
                  sizes="(min-width: 1024px) 380px, 90vw"
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className={`${container} grid gap-16 lg:grid-cols-12`}>
          <article className="lg:col-span-7 max-w-[68ch] space-y-6 text-[1.075rem] leading-[1.8] text-mist">
            <p className="font-serif text-[1.75rem] leading-snug text-ivory md:text-[2.1rem]">
              I am a builder, an entrepreneur and a doctoral researcher working where artificial intelligence, deep technology and systems innovation meet. For over a decade my mission has stayed the same: take ambitious technical concepts, interrogate their assumptions, and turn them into products that survive the real world.
            </p>

            <h2 className="pt-10 font-serif text-[2.25rem] text-ivory">The engineering</h2>
            <p>
              My engineering career spans semiconductors, ocean sensing, clean energy and medical robotics. At ASML I worked as a systems engineer on extreme ultraviolet lithography systems, doing metrology and wafer alignment to nanometre accuracy. At Skytree, a spinout of the European Space Agency, I helped validate its core carbon capture technology. At Vitestro I led the verification and validation of the world&apos;s first autonomous robotic phlebotomy device, a clinical system that draws blood with precision and reliability.
            </p>

            <h2 className="pt-10 font-serif text-[2.25rem] text-ivory">The research and the book</h2>
            <p>
              Alongside industry, I am pursuing a Doctorate in Business Administration at Golden Gate University in San Francisco. Using the MIT iEcosystem framework, my research compares deep tech ecosystems in Nigeria and the Netherlands, exploring how capital, policy, universities and industry interact to turn scientific breakthroughs into scalable companies.
            </p>
            <p>
              That research became my book,{" "}
              <Link href="/book/towards-deep-tech-in-africa" className="text-link text-foreground">
                <em>Towards Deep Tech in Africa: Building the Ground We Stand On</em>
              </Link>
              . It argues that Africa&apos;s deep tech gap is not a shortage of talent or money but missing ground: conditions that can be designed and built.
            </p>
            <p>
              The work is driven by a belief that innovation only matters when it measurably advances industries, communities and economies. As an innovation strategist I have partnered with Hope Amplified, Meyana Bioenergy and the Lagos and Plateau State Governments on strategies that move ideas beyond theory and into execution.
            </p>

            <h2 className="pt-10 font-serif text-[2.25rem] text-ivory">Why I built Ambitful AI</h2>
            <p>
              Working for global deep tech companies, winning places in competitive fellowships and helping organisations secure grant funding, I kept seeing the same thing. Brilliant people missed life-changing opportunities because finding and winning them takes insider knowledge, elite networks and hundreds of hours of preparation.
            </p>
            <p>
              The system was not always run on merit. To level the field I built{" "}
              <a href="https://ambitful.ai" target="_blank" rel="noopener" className="text-link text-foreground">
                Ambitful AI
              </a>
              , an opportunity intelligence platform that helps ambitious people discover opportunities and position themselves to win on a global stage, whatever connections they were born with.
            </p>

            <h2 className="pt-10 font-serif text-[2.25rem] text-ivory">Beyond work</h2>
            <p>
              I am driven by curiosity and continuous learning. I find inspiration in reading, in hiking and cycling through new places, and in classical music. They remind me that innovation is not only a technical endeavour but a human one, shaped by curiosity, reflection and the search for meaning.
            </p>
            <p>
              At the heart of everything is one question: how can my work move my environment towards a better, more sustainable future? It is not enough to build technology. The goal is to build the systems that let talent turn into impact at scale, bridging gaps between ideas and execution, between talent and opportunity, and between regions with untapped potential and the resources to unlock it.
            </p>
          </article>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">At a glance</p>
              <dl className="mt-6 divide-y divide-hairline border-y border-hairline">
                {facts.map((fact) => (
                  <div key={fact.label} className="py-4">
                    <dt className="text-[0.8rem] font-semibold tracking-[0.03em] text-smoke">{fact.label}</dt>
                    <dd className="mt-1.5 leading-relaxed text-ivory">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-hairline bg-ink-raised py-20 md:py-28" aria-label="What drives the work">
        <div className={`${container} grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-hairline`}>
          {drives.map((d, i) => (
            <div key={d.title} className={`md:px-10 ${i === 0 ? "md:pl-0" : ""} ${i === drives.length - 1 ? "md:pr-0" : ""}`}>
              <h2 className="font-serif text-[2rem] text-ivory">{d.title}</h2>
              <p className="mt-4 leading-[1.8] text-mist">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-hairline py-28 text-ivory md:py-36">
        <figure className={`${container} max-w-4xl`}>
          <blockquote className="space-y-6 font-serif text-[2.2rem] italic leading-snug md:text-[3.1rem]">
            <p>&ldquo;I want to be a crayon, colouring people&apos;s lives, satisfied daily with the joy of looking around and knowing I contributed my two cents towards helping someone achieve their dream.&rdquo;</p>
          </blockquote>
          <figcaption className="eyebrow mt-10">Destiny Ogwuche</figcaption>
        </figure>
      </section>

      <BookFeature />
      <Thinking />
      <Education />
      <Footer />
    </main>
  )
}
