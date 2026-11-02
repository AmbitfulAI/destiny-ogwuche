import Image from "next/image"
import portrait from "@/lib/images/portrait_hero.jpg"
import { ActionLink, container } from "./site/action-link"

const builtAt = ["ASML", "Vitestro", "Skytree", "Nortek"]
const studiedAt = ["Golden Gate University", "University of Glasgow", "Federal University of Technology, Minna"]

// The portrait's own green background continues into the section, so the photo has no edge.
export function HomeHero() {
  return (
    <section data-hero-section className="relative overflow-hidden bg-[#0B2E23] text-[#F1EFE6]" aria-labelledby="hero-name">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,#123F31_0%,#0B2E23_55%,#062019_100%)]"
        aria-hidden="true"
      />
      <div className={`${container} relative grid lg:grid-cols-12 lg:gap-10`}>
        <div className="relative order-1 -mx-6 h-[min(68vh,560px)] md:-mx-10 lg:order-2 lg:col-span-5 lg:mx-0 lg:h-auto lg:min-h-[800px]">
          <Image
            src={portrait}
            alt="Destiny Ogwuche"
            fill
            priority
            placeholder="blur"
            sizes="(min-width: 1024px) 480px, 100vw"
            className="portrait-fade object-cover object-[50%_20%]"
          />
        </div>

        <div className="relative order-2 -mt-24 pb-16 lg:order-1 lg:col-span-7 lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:pt-36 lg:pb-24">
          <p className="settle text-[0.95rem] text-[#C9D3CC]">Deep tech engineer, founder and author</p>
          <h1 id="hero-name" className="settle settle-delay-1 mt-4 font-serif text-[3.4rem] leading-[0.95] tracking-[-0.025em] sm:text-7xl lg:text-[6.5rem]">
            Destiny Ogwuche
          </h1>
          <p className="settle settle-delay-2 mt-8 max-w-[34rem] font-serif text-2xl leading-snug text-[#F1EFE6] md:text-[1.9rem]">
            I work on one question: why does deep technology grow in some places and not in others?
          </p>
          <p className="settle settle-delay-2 mt-6 max-w-[34rem] text-[1.05rem] leading-relaxed text-[#C9D3CC]">
            I have spent ten years building and validating hard technology, from a waste-to-electricity bioreactor in Nigeria to extreme ultraviolet lithography at ASML and the world&apos;s first autonomous blood-drawing robot at Vitestro. My book on what it takes to build deep tech in Africa comes out in January 2027.
          </p>
          <div className="settle settle-delay-3 mt-10 flex flex-wrap gap-3">
            <ActionLink href="/book/towards-deep-tech-in-africa" variant="solid-on-dark">
              About the book
            </ActionLink>
            <ActionLink href="/speaking" variant="outline-on-dark">
              Invite me to speak
            </ActionLink>
          </div>
        </div>
      </div>

      <div className="relative border-t border-[#F1EFE6]/12">
        <dl className={`${container} grid gap-6 py-8 text-[0.95rem] md:grid-cols-2 md:gap-10`}>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <dt className="shrink-0 text-[#93A69B]">Engineering at</dt>
            <dd className="text-[#F1EFE6]">{builtAt.join(", ")}</dd>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <dt className="shrink-0 text-[#93A69B]">Studied at</dt>
            <dd className="text-[#F1EFE6]">{studiedAt.join(", ")}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
