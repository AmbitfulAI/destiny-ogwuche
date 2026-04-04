"use client"

import { ArrowDown, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text Content — left column */}
          <div>
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-6">
              Deep Tech Engineer • Entrepreneur • Venture Capital Fellow
            </p>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight mb-8">
              Destiny Innosuccess<br />
              <span className="text-primary">Ogwuche</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I am Destiny Innosuccess Ogwuche — a Nigerian-born, Netherlands-based deep tech engineer, entrepreneur, venture capital fellow and doctoral researcher. The name Innosuccess is not just a name. It is the lens through which I see every problem: an opportunity waiting to be innovated into success.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-10">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Almere, Netherlands
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <Link
                href="mailto:ogwuche.Innosuccess@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">ogwuche.Innosuccess@gmail.com</span>
                <span className="sm:hidden">Email</span>
              </Link>
              <span className="w-1 h-1 rounded-full bg-border" />
              <Link
                href="https://linkedin.com/in/destiny-ogwuche"
                target="_blank"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#about"
                className="px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Learn More About Me
              </Link>
              <Link
                href="https://ambitful.ai"
                target="_blank"
                className="px-8 py-4 border border-primary text-primary font-medium hover:bg-primary/5 transition-colors"
              >
                Ambitful.ai
              </Link>
              <Link
                href="https://tellit.io"
                target="_blank"
                className="px-8 py-4 border border-border text-foreground font-medium hover:border-accent hover:text-accent transition-colors"
              >
                Tellit.io
              </Link>
            </div>
          </div>

          {/* Hero Image — right column */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-[520px] lg:h-[600px]">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/20 pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-accent/20 pointer-events-none" />
              <div className="relative w-full h-full overflow-hidden border border-border">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-newhero-Yclq0KGXmc5OIhx7QwkyYrQVthDA6H.jpeg"
                  alt="Destiny Innosuccess Ogwuche"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  )
}
