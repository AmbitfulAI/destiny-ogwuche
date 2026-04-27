"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail, MapPin, ArrowRight, MousePointer2 } from "lucide-react"
import goldenGateSeminar from "@/lib/images/golden_gate_seminar.png"

export function HomeHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-background overflow-hidden">
      {/* Background Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={goldenGateSeminar}
          alt="Engineering Background"
          fill
          className="object-cover opacity-40 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/60 via-transparent to-background/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-24 pointer-events-none z-1" />
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none z-1" />

      <div className="container mx-auto px-6 lg:px-12 py-24 relative z-10 mt-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Text Content - Statement Typography */}
          <div className="w-full lg:w-3/5 order-2 lg:order-1">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Deep Tech &bull; Entrepreneur &bull; VC Fellow
              </div>

              <h1 className="font-serif text-6xl md:text-8xl lg:text-[100px] font-medium text-foreground leading-[0.95] tracking-tight">
                Destiny<br />
                <span className="text-primary italic">Innosuccess</span><br />
                Ogwuche
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-sans font-light">
                Nigerian-born, Netherlands-based <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-4">deep tech entrepreneur</span> and researcher dedicated to translating ambitious scientific concepts into scalable products.
              </p>

              <div className="flex flex-wrap items-center gap-8 text-sm font-semibold tracking-wider text-muted-foreground/80 pt-4">
                <span className="flex items-center gap-2 group cursor-default">
                  <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  Amsterdam, NL
                </span>
                <Link
                  href="mailto:ogwuche.Innosuccess@gmail.com"
                  className="flex items-center gap-2 hover:text-primary transition-all hover:translate-x-1"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </Link>
                <Link
                  href="https://linkedin.com/in/destiny-ogwuche"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-primary transition-all hover:translate-x-1"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 pt-6">
                <Link
                  href="/about"
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background font-bold tracking-widest uppercase text-xs hover:bg-primary transition-colors overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Inquire More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="https://ambitful.ai"
                  target="_blank"
                  className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-primary text-primary font-bold tracking-widest uppercase text-xs hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Ambitful.ai
                </Link>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/40 animate-bounce">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-primary/40 to-transparent" />
      </div>
    </section>
  )
}
