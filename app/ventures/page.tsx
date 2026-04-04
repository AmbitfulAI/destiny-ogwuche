"use client"

import Link from "next/link"
import { ExternalLink, Rocket, Lightbulb, ArrowRight, Target } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { ventures, innovations } from "@/lib/data/ventures"
import { useState } from "react"

export default function VenturesPage() {
  const [hoveredVenture, setHoveredVenture] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        eyebrow="Ventures and Innovations"
        title="Building the Future"
        description="Scaling ambitious technical concepts into commercially viable products through rigorous engineering and venture strategy."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            
            {/* Ventures Showcase */}
            <div className="mb-32">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-[1px] bg-primary/30" />
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground uppercase tracking-widest">Major Ventures</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {ventures.map((venture, index) => (
                  <div 
                    key={index}
                    onMouseEnter={() => setHoveredVenture(index)}
                    onMouseLeave={() => setHoveredVenture(null)}
                    className="group relative p-10 bg-card border border-border hover:border-primary/40 transition-all duration-500 rounded-3xl hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -translate-y-8 translate-x-8 group-hover:scale-125 transition-transform duration-700" />
                    
                    <div className="relative z-10 flex-grow">
                      <div className="flex items-start justify-between mb-8">
                        <div className="w-14 h-14 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                           <Rocket className="w-6 h-6" />
                        </div>
                        {venture.link && (
                          <Link
                            href={venture.link}
                            target="_blank"
                            className="p-3 bg-secondary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          >
                            <ExternalLink className="w-5 h-5 transition-transform group-hover:scale-110" />
                          </Link>
                        )}
                      </div>

                      <h3 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">
                        {venture.name}
                      </h3>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8 pb-8 border-b border-border">
                        {venture.role}
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed font-sans font-light italic">
                        &ldquo;{venture.description}&rdquo;
                      </p>
                    </div>

                    <div className="mt-10 pt-10 border-t border-border/50 flex items-center justify-between">
                       <span className="text-[9px] font-bold text-muted-foreground/40 uppercase tracking-[0.2em]">Scale Focus</span>
                       <div className="flex gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/10" />
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Innovations Section */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-[1px] bg-accent/30" />
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground uppercase tracking-widest">Selected Innovations</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {innovations.map((innovation, index) => (
                  <div 
                    key={index} 
                    className="group flex flex-col p-8 bg-secondary/30 border border-transparent hover:border-accent/20 transition-all duration-500 rounded-3xl"
                  >
                    <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       <Lightbulb className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-foreground mb-2 leading-tight">{innovation.name}</h3>
                    <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-6">{innovation.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow font-sans font-light">
                      {innovation.description}
                    </p>
                    <Link 
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
                    >
                      Inquire Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
