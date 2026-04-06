"use client"

import Link from "next/link"
import { Mic, Users, ArrowRight, Video, Calendar, MapPin, Award, Zap, Globe, Cpu, TrendingUp } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExpandableCard } from "@/components/expandable-card"
import { speakingEngagements } from "@/lib/data/speaking"
import { boardRoles } from "@/lib/data/board-roles"

export default function SpeakingPage() {
  const topics = [
    {
      title: "Deep Tech Innovation",
      description: "From semiconductors to MedTech robotics — translating science into industry.",
      icon: <Cpu className="w-8 h-8 text-primary" />,
      tag: "Technical Keynote"
    },
    {
      title: "Africa's Tech Ecosystem",
      description: "Building the infrastructure required to polish creative energy into R&D.",
      icon: <Globe className="w-8 h-8 text-primary" />,
      tag: "Strategy & Policy"
    },
    {
      title: "Venture Capital Dynamics",
      description: "Investment thesis, ecosystem mapping, and why trust still outperforms algorithms.",
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      tag: "Venture Insights"
    }
  ]

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navigation />
      
      {/* Immersive Gallery Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/5 skew-x-12 -translate-x-24 pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <Mic className="w-3 h-3" />
              Global Speaking & Advisory
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tight mb-8">
              Sharing <span className="text-primary italic">Knowledge</span> & Shaping Impact
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed">
              Facilitating masterclasses, keynotes, and strategic dialogues on <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-4">deep tech</span> and emerging market innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Speaking Topics - High Impact Cards */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <div 
                key={index}
                className="glass-panel p-10 rounded-3xl group hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  {topic.icon}
                </div>
                <span className="text-primary font-bold text-[10px] tracking-[0.3em] uppercase block mb-4 italic opacity-70">
                  {topic.tag}
                </span>
                <h3 className="font-serif text-2xl font-medium mb-4 group-hover:text-primary transition-colors">
                  {topic.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground text-xs font-bold tracking-[0.3em] uppercase rounded-full hover:bg-foreground transition-all group"
              >
                Inquire for Bookings
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
          </div>
        </div>
      </section>

      {/* Professional Timeline & Advisory */}
      <section className="py-24 relative overflow-hidden">
        {/* Mirroring Home Hero Vertical Line */}
        <div className="absolute left-[calc(50%-1px)] top-0 h-full w-px bg-linear-to-b from-primary/20 via-primary/5 to-transparent hidden lg:block" />

        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24">
            
            {/* Timeline Column */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Video className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-serif text-4xl font-medium">Past Engagements</h2>
              </div>
              
              <div className="space-y-12 relative">
                {speakingEngagements.map((engagement, index) => (
                  <div key={index} className="relative pl-10 group">
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary/20 border border-primary/50 group-hover:bg-primary group-hover:scale-125 transition-all duration-500 z-10" />
                    <div className="absolute left-[5px] top-5 bottom-[-48px] w-px bg-primary/10 group-last:hidden" />
                    
                    <div className="glass-panel p-6 rounded-2xl group-hover:border-primary/20 transition-all duration-500">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                        <h3 className="font-serif text-xl font-medium text-foreground">{engagement.title}</h3>
                        <div className="flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full text-[10px] font-bold text-primary tracking-widest">
                          <Calendar className="w-3 h-3" />
                          {engagement.date.includes(',') ? engagement.date.split(',')[1].trim() : 'Ongoing'}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {engagement.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-widest opacity-60">
                        <MapPin className="w-3 h-3" />
                         Global / Digital Facilitation
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advisory Column */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h2 className="font-serif text-4xl font-medium">Board & Advisory</h2>
              </div>

              <div className="grid gap-6">
                {boardRoles.map((role, index) => (
                  <div
                    key={index}
                    className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-accent/40 transition-all duration-500"
                  >
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Users className="w-20 h-20 text-accent" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 text-accent font-bold text-[10px] tracking-[0.3em] uppercase mb-2">
                        <Zap className="w-3 h-3 fill-current" />
                        {role.position}
                      </div>
                      <h3 className="font-serif text-2xl font-medium text-foreground mb-4">{role.title}</h3>
                      {role.period && (
                        <p className="text-muted-foreground/60 text-xs tracking-widest uppercase mb-4">{role.period}</p>
                      )}
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {role.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 glass-panel p-10 rounded-3xl border-dashed border-primary/20 bg-primary/5 text-center">
                <h3 className="font-serif text-2xl font-medium mb-4">Looking for Advisory?</h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Providing strategic guidance for deep tech startups, venture capital funds, and public sector innovation initiatives.
                </p>
                <Link
                  href="/contact"
                  className="text-primary font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:translate-x-2 transition-transform"
                >
                  Download Corporate Bio <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
