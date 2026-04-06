"use client"

import Link from "next/link"
import { Award, Zap, Microscope, TrendingUp, Heart, Star, Calendar, ArrowRight, ShieldCheck, Medal } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExpandableCard } from "@/components/expandable-card"
import { awards } from "@/lib/data/awards"

export default function AwardsPage() {
  const featuredAward = awards[0]
  const otherAwards = awards.slice(1)

  const getIcon = (title: string) => {
    const t = title.toLowerCase()
    if (t.includes("venture") || t.includes("vc")) return <TrendingUp className="w-6 h-6 text-primary" />
    if (t.includes("engineering") || t.includes("tech") || t.includes("robotic")) return <Microscope className="w-6 h-6 text-primary" />
    if (t.includes("leadership") || t.includes("community")) return <Star className="w-6 h-6 text-primary" />
    if (t.includes("scholarship") || t.includes("graduat")) return <Award className="w-6 h-6 text-primary" />
    return <Medal className="w-6 h-6 text-primary" />
  }

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navigation />

      {/* Modern Statement Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-primary/5 -skew-x-12 translate-x-20 pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <Award className="w-3 h-3" />
              Honors & Recognitions
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tight mb-8">
              A Legacy of <span className="text-primary italic">Impact</span> & Excellence
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed">
              A decade of recognition across venture capital, deep tech, academia, and <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-4">community leadership</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Fellowship Spotlight */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden group bg-linear-to-br from-primary/5 via-background to-background">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck className="w-32 h-32 text-primary" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-primary font-bold text-[10px] tracking-[0.3em] uppercase mb-4">
                <Medal className="w-3 h-3" />
                Featured Recognition | {featuredAward.year}
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-medium mb-6 leading-tight max-w-3xl">
                {featuredAward.title}
              </h2>
              <div className="flex items-center gap-6 mb-8">
                <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-bold text-[11px] tracking-widest uppercase">
                  Venture Institute Fellow
                </div>
                <div className="h-px w-12 bg-primary/30" />
                <p className="text-primary text-sm font-medium">Global Selectivity</p>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-4xl font-light">
                {featuredAward.description}
              </p>
              <div className="flex items-center gap-6 pt-6 border-t border-border">
                  <div className="flex -space-x-3">
                     {[1,2,3].map(i => (
                       <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[10px] font-bold">
                         {String.fromCharCode(64 + i)}
                       </div>
                     ))}
                  </div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground/60">Global VC Cohort</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chronological Timeline */}
      <section className="py-24 relative overflow-hidden bg-secondary/20">
        {/* Mirroring Speaking Page Vertical Line */}
        <div className="absolute left-6 lg:left-[calc(50%-1px)] top-0 h-full w-px bg-linear-to-b from-primary/20 via-primary/5 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-16 relative">
              {otherAwards.map((award, index) => (
                <div key={index} className="relative pl-12 lg:pl-0 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] lg:left-[calc(50%-6px)] top-1 w-3 h-3 rounded-full bg-primary/20 border border-primary/50 group-hover:bg-primary group-hover:scale-125 transition-all duration-500 z-10 shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
                  
                  <div className={`flex flex-col lg:flex-row gap-8 items-start ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Year Label */}
                    <div className={`w-full lg:w-1/2 flex ${index % 2 === 0 ? 'lg:justify-start lg:pl-12' : 'lg:justify-end lg:pr-12'}`}>
                       <div className="px-4 py-1 rounded-full bg-background border border-border shadow-sm text-primary font-bold text-[10px] tracking-[0.3em] uppercase group-hover:border-primary/30 transition-colors">
                         {award.year}
                       </div>
                    </div>

                    {/* Content Card */}
                    <div className="w-full lg:w-1/2">
                      <ExpandableCard
                        className="glass-panel group-hover:border-primary/20 transition-all duration-500 overflow-hidden"
                        preview={
                          <div className="flex gap-6 p-2">
                             <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mt-1 group-hover:bg-primary/20 transition-colors">
                                {getIcon(award.title)}
                             </div>
                             <div>
                                <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-primary transition-colors leading-tight mb-2">
                                  {award.title}
                                </h3>
                                <div className="flex items-center gap-2 text-primary opacity-60 text-[10px] font-bold tracking-widest uppercase">
                                  <Star className="w-3 h-3" />
                                  Global Honor
                                </div>
                             </div>
                          </div>
                        }
                      >
                        <div className="pl-18 pr-4 pb-4">
                          <p className="text-muted-foreground leading-relaxed text-sm font-light italic border-l-2 border-primary/20 pl-4">
                            {award.description}
                          </p>
                        </div>
                      </ExpandableCard>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact CTA */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl font-medium mb-8">Acting as a <span className="text-primary italic">Steward</span> of a Better Future</h2>
            <p className="text-lg text-muted-foreground font-light mb-12">
              Recognition is not the end goal, but a validation of the commitment to driving ethically responsible innovation that empowers communities.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/experience"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-foreground transition-all group"
              >
                View Professional Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
