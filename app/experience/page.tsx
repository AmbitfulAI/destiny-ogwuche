"use client"

import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { experiences } from "@/lib/data/experience"
import { Briefcase, MapPin, Target, ChevronDown, Rocket, Cpu, Microscope, Anchor, Leaf } from "lucide-react"
import { useState } from "react"

const getIcon = (company: string) => {
  if (company.includes("Vitestro")) return <Cpu className="w-5 h-5" />
  if (company.includes("Nortek")) return <Anchor className="w-5 h-5" />
  if (company.includes("ASML")) return <Microscope className="w-5 h-5" />
  if (company.includes("Skytree")) return <Leaf className="w-5 h-5" />
  if (company.includes("Meyana")) return <Rocket className="w-5 h-5" />
  return <Briefcase className="w-5 h-5" />
}

export default function ExperiencePage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        eyebrow="Professional Journey"
        title="Chronicle of Impact"
        description="Over a decade at the intersection of deep tech, engineering excellence, and venture strategy."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            
            {/* Professional Narrative Intro */}
            <div className="mb-20 grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <p className="text-2xl font-serif italic text-muted-foreground leading-relaxed">
                  "My career has been defined by a singular pursuit: translating high-complexity scientific concepts into industrial-grade products that solve fundamental human challenges."
                </p>
              </div>
              <div className="bg-primary/5 p-8 border border-primary/10 rounded-2xl">
                 <div className="text-4xl font-serif text-primary font-bold mb-1">10+</div>
                 <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Years Experience</div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`group relative grid md:grid-cols-[1fr_3fr] gap-8 p-1 transition-all duration-500`}
                >
                  {/* Left Column: Date and Metadata */}
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-[10px] font-black uppercase tracking-widest text-primary">
                      {exp.period}
                    </div>
                    <div className="hidden md:flex flex-col gap-2 pt-4 border-l border-border pl-6">
                       <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
                          <MapPin className="w-3 h-3" />
                          {exp.company.split(',')[1] || 'International'}
                       </div>
                    </div>
                  </div>

                  {/* Right Column: Content Card */}
                  <div 
                    className={`p-8 md:p-12 bg-card border border-border rounded-2xl transition-all duration-500 cursor-pointer ${
                      expandedIndex === index ? 'shadow-2xl shadow-primary/5 border-primary/30 ring-1 ring-primary/5' : 'hover:border-primary/20'
                    }`}
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                      <div className="flex items-start gap-5">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          expandedIndex === index ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                        }`}>
                          {getIcon(exp.company)}
                        </div>
                        <div>
                          <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-1 leading-tight">{exp.role}</h3>
                          <p className="text-lg text-primary font-medium tracking-tight">{exp.company}</p>
                        </div>
                      </div>
                      <ChevronDown className={`w-6 h-6 text-muted-foreground/30 transition-transform duration-500 ${expandedIndex === index ? 'rotate-180 text-primary' : ''}`} />
                    </div>

                    <div className={`grid transition-all duration-500 ease-in-out ${
                      expandedIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}>
                      <div className="overflow-hidden">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-sans font-light">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 pt-4">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all border border-border rounded-lg"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Collapsed Preview Snippet */}
                    {expandedIndex !== index && (
                       <p className="text-muted-foreground/60 line-clamp-1 italic text-sm border-t border-border mt-6 pt-6">
                        {exp.description}
                       </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
