import Link from "next/link"
import { ArrowRight, Briefcase, Rocket, Star, ExternalLink } from "lucide-react"
import { experiences } from "@/lib/data/experience"
import { ventures } from "@/lib/data/ventures"
import { awards } from "@/lib/data/awards"

export function HomeHighlights() {
  const topExperiences = experiences.slice(0, 2)
  const topVentures = ventures.slice(0, 2)
  const topAwards = awards.slice(0, 3)

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/2 shadow-3xl blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-32">
          
          {/* Experience Section */}
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
                  Professional Journey
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
                  Recent <span className="italic text-primary">Engagement</span>
                </h2>
              </div>
              <Link
                href="/experience"
                className="group inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-all"
              >
                View Full Timeline
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {topExperiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="group relative p-10 bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 rounded-2xl"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Briefcase className="w-12 h-12" />
                  </div>
                  <p className="text-xs font-bold text-primary tracking-widest uppercase mb-4">{exp.period}</p>
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-6 uppercase text-[10px] tracking-widest border-b border-border pb-6">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.slice(0, 3).map((skill, i) => (
                      <span key={i} className="px-3 py-1.5 text-[9px] font-black tracking-widest uppercase bg-secondary/50 text-muted-foreground border border-transparent rounded-md group-hover:border-primary/20 transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ventures Section */}
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4">
                <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px]">
                  Ventures
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
                  Building the <span className="italic text-accent">Future</span>
                </h2>
              </div>
              <Link
                href="/ventures"
                className="group inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-accent transition-all"
              >
                View Innovations
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {topVentures.map((venture, index) => (
                <div 
                  key={index} 
                  className="group relative p-10 bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 rounded-2xl"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Rocket className="w-12 h-12" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-2 group-hover:text-accent transition-colors leading-tight">
                    {venture.name}
                  </h3>
                  <p className="text-accent font-bold uppercase text-[10px] tracking-widest mb-6 pb-6 border-b border-border">
                    {venture.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-sans font-light italic">
                    &ldquo;{venture.description}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition Section */}
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
                  Recognition
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
                  Awards & <span className="italic text-primary">Fellowships</span>
                </h2>
              </div>
              <Link
                href="/awards"
                className="group inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-all"
              >
                View Honors
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {topAwards.map((award, index) => (
                <div 
                  key={index} 
                  className="group p-8 bg-secondary/20 border border-transparent hover:border-primary/20 transition-all duration-500 rounded-2xl"
                >
                  <Star className="w-5 h-5 text-primary/40 mb-6 group-hover:scale-110 transition-transform" />
                  <p className="text-[10px] font-black text-primary tracking-[0.2em] uppercase mb-2">{award.year}</p>
                  <h3 className="font-serif text-xl font-medium text-foreground leading-tight">{award.title}</h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
