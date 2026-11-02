import Image from "next/image"
import portrait from "@/lib/images/portrait_hero_mono.jpg"
import { ActionLink, container } from "./site/action-link"

// Numbers from the work itself: each one is in the Experience and Ventures pages.
const proof = [
  { figure: "3", label: "ventures founded, from bioenergy to AI" },
  { figure: "$155K", label: "non-dilutive funding secured from Innovate UK and C40 Cities" },
  { figure: "€38M", label: "Series B medical robot co-led to commercialisation" },
  { figure: "22+", label: "clients led in defence, marine robotics and energy" },
]

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-ink" aria-labelledby="hero-title">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_74%_38%,#1E2126_0%,#14171B_38%,#0B0D10_72%)]"
        aria-hidden="true"
      />
      <div className={`${container} relative grid lg:grid-cols-12 lg:gap-10`}>
        <div className="relative order-1 -mx-6 h-[min(64vh,540px)] md:-mx-10 lg:order-2 lg:col-span-5 lg:mx-0 lg:h-auto lg:min-h-[760px]">
          <Image
            src={portrait}
            alt="Destiny Ogwuche"
            fill
            priority
            placeholder="blur"
            sizes="(min-width: 1024px) 500px, 100vw"
            className="portrait-fade object-cover object-[50%_18%]"
          />
        </div>

        <div className="relative order-2 -mt-28 pb-14 lg:order-1 lg:col-span-7 lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:pt-40 lg:pb-16">
          <p className="settle eyebrow">Founder, engineer and author</p>
          <h1 id="hero-title" className="settle settle-delay-1 mt-7 font-serif text-[3.9rem] font-medium leading-[0.9] tracking-[-0.015em] text-ivory sm:text-[5.25rem] lg:text-[7.25rem]">
            Deep tech,
            <br />
            executed<span className="text-champagne">.</span>
          </h1>
          <p className="settle settle-delay-2 mt-9 max-w-[36rem] text-[1.125rem] leading-[1.75] text-mist">
            I&apos;m Destiny Ogwuche. I take hard technology from the lab to the market. I founded Ambitful AI, tested and qualified extreme
            ultraviolet lithography systems at ASML, and led validation of the world&apos;s first autonomous blood-drawing robot at Vitestro.
          </p>
          <p className="settle settle-delay-2 mt-4 max-w-[36rem] text-[1.125rem] leading-[1.75] text-ivory">
            Now I help founders, investors and governments build what is hard to build.
          </p>
          <div className="settle settle-delay-3 mt-11 flex flex-wrap gap-3">
            <ActionLink href="/book-a-call">Work with me</ActionLink>
            <ActionLink href="/ventures" variant="outline">
              See the ventures
            </ActionLink>
          </div>
        </div>
      </div>

      <div className="relative border-t border-hairline">
        <dl className={`${container} grid grid-cols-2 lg:grid-cols-4`}>
          {proof.map((item, i) => (
            <div
              key={item.figure}
              className={`py-8 pr-6 lg:py-10 ${i % 2 === 1 ? "border-l border-hairline pl-6" : ""} ${i > 1 ? "border-t border-hairline lg:border-t-0" : ""} ${i === 2 ? "lg:border-l lg:pl-6" : ""}`}
            >
              <dt className="font-serif text-[2.6rem] font-medium leading-none text-champagne md:text-[3.25rem]">{item.figure}</dt>
              <dd className="mt-3 max-w-[15rem] text-[0.875rem] leading-snug text-mist">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
