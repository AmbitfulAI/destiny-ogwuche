import Link from "next/link"
import { ArrowRight, Briefcase, Rocket, Mic } from "lucide-react"

interface PersonaCard {
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  links: { label: string; href: string }[]
  accentColor: string
}

const personas: PersonaCard[] = [
  {
    title: "Venture Partners",
    subtitle: "Deep Tech & VC",
    description: "Explore technical due diligence for semiconductors, MedTech, and advanced manufacturing sectors.",
    icon: <Briefcase className="w-6 h-6" />,
    links: [
      { label: "Research", href: "/research" },
      { label: "Ventures", href: "/ventures" },
      { label: "Awards", href: "/awards" },
    ],
    accentColor: "primary"
  },
  {
    title: "Deep Tech Founders",
    subtitle: "Building & Scaling",
    description: "Collaborate on hardware verification, AI systems implementation, and securing institutional funding.",
    icon: <Rocket className="w-6 h-6" />,
    links: [
      { label: "My Work", href: "/experience" },
      { label: "Get in Touch", href: "/contact" },
    ],
    accentColor: "accent"
  },
  {
    title: "Academic & Media",
    subtitle: "Insights & Influence",
    description: "Book me for panels, guest lectures at the intersection of business and technical innovation.",
    icon: <Mic className="w-6 h-6" />,
    links: [
      { label: "Speaking", href: "/speaking" },
      { label: "Digital Journal", href: "/gallery" },
    ],
    accentColor: "primary"
  }
]

export function PersonaCards() {
  return (
    <section className="py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
              Strategic Collaboration
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground max-w-2xl leading-tight text-balance">
              Curated pathways for every <span className="italic text-primary">engagement</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {personas.map((persona, index) => (
              <div
                key={index}
                className="group relative p-10 bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-primary/5 to-transparent pointer-events-none transition-opacity opacity-0 group-hover:opacity-100" />
                
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500 ${
                  persona.accentColor === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                }`}>
                  {persona.icon}
                </div>

                <p className="text-[10px] tracking-[0.2em] text-muted-foreground font-bold uppercase mb-2">
                  {persona.subtitle}
                </p>
                <h3 className="font-serif text-2xl lg:text-3xl font-medium text-foreground mb-4 leading-tight">
                    {persona.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-sans font-light mb-8 grow">
                    {persona.description}
                </p>

                <div className="flex flex-col gap-3">
                  {persona.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="inline-flex items-center justify-between px-6 py-4 text-xs font-bold tracking-widest uppercase border border-border group/link bg-secondary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    >
                      {link.label}
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
