"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, FileText, BookOpen, Microscope, Zap, Share2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExpandableCard } from "@/components/expandable-card"
import { publications } from "@/lib/data/publications"

export default function ResearchPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Deep Tech", "Venture Capital", "Engineering"]

  const filteredPublications = publications.filter(pub => {
    if (activeCategory === "All") return true
    if (activeCategory === "Deep Tech") return pub.title.toLowerCase().includes("deeptech") || pub.title.toLowerCase().includes("innovation")
    if (activeCategory === "Venture Capital") return pub.title.toLowerCase().includes("venture capital")
    if (activeCategory === "Engineering") return pub.title.toLowerCase().includes("robotic") || pub.title.toLowerCase().includes("engineering")
    return true
  })

  // Featuring the latest doctoral research
  const featuredPub = publications[0]
  const otherPubs = publications.slice(1)

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navigation />

      {/* Modern Statement Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20 pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <Microscope className="w-3 h-3" />
              Academic & Industrial Insight
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tight mb-8">
              Thought <span className="text-primary italic">Leadership</span> & Research
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed">
              Operating at the intersection of science and business to translate <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-4">ambitious concepts</span> into industrial-scale impact.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Research Spotlight */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <FileText className="w-32 h-32 text-primary" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-bold text-[10px] tracking-[0.3em] uppercase block mb-4">Latest Research | 2025</span>
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 leading-tight">
                  {featuredPub.title}
                </h2>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-primary text-sm font-medium tracking-wide">
                    {featuredPub.citation}
                  </p>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {featuredPub.description}
                </p>
                {featuredPub.link && (
                  <Link
                    href={featuredPub.link}
                    target="_blank"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase rounded-full hover:bg-foreground hover:text-background transition-all group/btn"
                  >
                    Read Full Proceedings
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
              <div className="hidden lg:block relative aspect-square">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl rotate-3 scale-95" />
                <div className="absolute inset-0 bg-accent/5 rounded-2xl -rotate-3 scale-90" />
                <div className="relative h-full w-full border border-border rounded-2xl bg-card/50 backdrop-blur-sm flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-8">
                    <Microscope className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium mb-4">MIT iEcosystem Framework</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Analyzing the critical alignment of infrastructure, policy, and culture required to scale innovation into industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorized Publications */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="font-serif text-4xl font-medium mb-4">Publications & Articles</h2>
              <p className="text-muted-foreground max-w-xl">
                A collection of peer-reviewed papers, expert opinion pieces, and industrial innovation reports.
              </p>
            </div>

            {/* Elegant Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-1 bg-background/50 rounded-full border border-border">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all ${activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
            {filteredPublications.map((pub, index) => {
              // Skip the featured one if showing All
              if (activeCategory === "All" && index === 0) return null;

              return (
                <ExpandableCard
                  key={index}
                  className="glass-panel border-white/5 hover:border-primary/20 transition-all duration-500"
                  preview={
                    <div className="flex items-start gap-6 p-2">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mt-1 group-hover:bg-primary/20 transition-colors">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-serif text-2xl font-medium text-foreground group-hover:text-primary transition-colors">{pub.title}</h3>
                          {pub.link && (
                            <Link
                              href={pub.link}
                              target="_blank"
                              className="shrink-0 p-3 bg-secondary/50 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </Link>
                          )}
                        </div>
                        <div className="flex items-center gap-3 mt-4">
                          <div className="h-px w-8 bg-primary/30" />
                          <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">{pub.citation}</p>
                        </div>
                      </div>
                    </div>
                  }
                >
                  <div className="pl-18 pr-4 pb-4">
                    <p className="text-muted-foreground leading-relaxed text-lg font-light">
                      {pub.description}
                    </p>
                    <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border">
                      <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                        <Share2 className="w-3 h-3" />
                        Share Insights
                      </button>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 italic">
                        Key Insight: {pub.title.split(":")[0]}
                      </span>
                    </div>
                  </div>
                </ExpandableCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Research Philosophy CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 translate-y-20 pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 leading-tight">
              Bridging the gap between <span className="text-primary italic">scientific theory</span> and industrial reality.
            </h2>
            <p className="text-xl text-muted-foreground font-light mb-12">
              Interested in collaborating on research or discussing innovation ecosystems? Let's connect and build the infrastructure of the future.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-foreground text-background text-xs font-bold tracking-[0.3em] uppercase rounded-full hover:bg-primary transition-all group"
            >
              Start a Dialogue
              <Zap className="w-4 h-4 fill-current group-hover:scale-125 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
