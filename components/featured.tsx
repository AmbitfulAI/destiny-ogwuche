import { ArrowUpRight } from "lucide-react"
import { container } from "./site/action-link"

// Press, papers and appearances, as a plain list: each line says where and what.
export function Featured() {
  const features = [
    {
      outlet: "The Sun Nigeria",
      summary: "Destiny was featured as an expert voice on Nigeria's deeptech potential, making the bold case that innovation is Africa's greatest competitive advantage.",
      link: "https://thesun.ng/nigeria-must-embrace-bold-brilliant-innovation-to-tackle-global-issues-expert/",
      linkText: "Read Feature"
    },
    {
      outlet: "The Sun Nigeria, on Ambitful AI",
      summary: "The Sun covered the launch of Ambitful AI and its mission to fix Africa's hidden opportunity crisis by helping ambitious people find and win the opportunities meant for them.",
      link: "https://thesun.ng/ambitful-ai-launches-to-fix-africas-hidden-opportunity-crisis-shows-how-to-win/",
      linkText: "Read Feature"
    },
    {
      outlet: "Daily Assets",
      summary: "Ambitful AI was featured on its launch day covering Destiny's vision of closing the trillion-dollar opportunity discovery gap across Africa.",
      link: "#",
      linkText: "Read Feature"
    },
    {
      outlet: "Best of LinkedIn: Venture Capital",
      summary: "Destiny's argument that human relationships still outperform algorithms in venture capital was curated by Thomas Allgeyer and read by thousands of investors globally.",
      link: "#",
      linkText: "Read Feature"
    },
    {
      outlet: "ELGCB Conference 2025",
      summary: "Destiny presented doctoral research comparing deep tech ecosystems in the Netherlands and Nigeria using the MIT iEcosystem Model at the University of Bolton.",
      link: "https://greatermanchester.ac.uk/assets/Uploads/Conference-Proceedings.pdf",
      linkText: "View Paper"
    },
    {
      outlet: "FUOYE Engineering Journal",
      summary: "Destiny co-authored a peer-reviewed paper on prototyping a robotic fire vehicle using Radio Frequency technology published in 2019.",
      link: "https://journal.engineering.fuoye.edu.ng/index.php/engineer/article/view/260",
      linkText: "Read Paper"
    },
    {
      outlet: "iBUILD Young African Initiative",
      summary: "Invited as Guest Facilitator for the Masterclass Series on Leveraging Digital Technology for Transformational Development for young Africans.",
      link: "#",
      linkText: "View Event"
    },
    {
      outlet: "WAAW Foundation",
      summary: "Featured as Guest Speaker for \"Unleashing Tomorrow's Innovators: Mastering Digital Skills and Entrepreneurship for Young Minds\" in October 2023.",
      link: "https://www.waawfoundation.org",
      linkText: "View Event"
    },
    {
      outlet: "Global TV",
      summary: "Appeared on Global TV for a televised discourse on \"Building Scalable Innovation Ecosystems for Nigeria's Future\" aired 7th April 2026.",
      link: "#",
      linkText: "Watch Feature"
    }
  ];

  return (
    <section className="border-t border-border py-24 md:py-32" aria-labelledby="featured-title">
      <div className={container}>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 id="featured-title" className="font-serif text-4xl leading-[1.1] md:text-5xl">
              In the press and on stage
            </h2>
          </div>
          <ul className="md:col-span-8 grid gap-x-10 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature.outlet + feature.summary.slice(0, 12)} className="border-t border-border py-6">
                <h3 className="font-sans text-base font-medium tracking-normal text-foreground">{feature.outlet}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{feature.summary}</p>
                {feature.link !== "#" && (
                  <a
                    href={feature.link}
                    target="_blank"
                    rel="noopener"
                    className="mt-3 inline-flex items-center gap-1 text-[0.95rem] text-foreground underline decoration-foreground/30 underline-offset-[0.3em] hover:decoration-foreground"
                  >
                    {feature.linkText}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
