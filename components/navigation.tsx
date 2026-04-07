"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [impactOpen, setImpactOpen] = useState(false)
  const [mediaOpen, setMediaOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
  ]

  const impactLinks = [
    { href: "/ventures", label: "Ventures" },
    { href: "/research", label: "Research" },
    { href: "/speaking", label: "Speaking" },
  ]

  const mediaLinks = [
    { href: "/gallery", label: "Journal" },
    { href: "/gallery/photos", label: "Photos" },
    { href: "/awards", label: "Awards" },
  ]

  const isImpactActive = impactLinks.some(link => pathname === link.href)
  const isMediaActive = mediaLinks.some(link => pathname === link.href)

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
               <span className="font-serif text-xl font-bold">D</span>
            </div>
            <span className="font-serif text-xl font-medium text-foreground tracking-widest hidden sm:block group-hover:translate-x-1 transition-transform duration-500">
              OGWUCHE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {mainLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all hover:text-primary ${
                  pathname === link.href 
                    ? "text-primary px-2" 
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Impact Dropdown */}
            <div className="relative group/impact">
              <button
                onMouseEnter={() => setImpactOpen(true)}
                className={`flex items-center gap-1 text-[11px] font-bold tracking-[0.2em] uppercase transition-all hover:text-primary ${
                  isImpactActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Impact
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 group-hover/impact:rotate-180`} />
              </button>

              <div 
                onMouseLeave={() => setImpactOpen(false)}
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                  impactOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <div className="w-56 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl p-3 overflow-hidden">
                  {impactLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-between group/item px-4 py-3 rounded-lg text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-primary hover:text-primary-foreground ${
                        pathname === link.href ? "bg-primary/5 text-primary" : "text-muted-foreground"
                      }`}
                      onClick={() => setImpactOpen(false)}
                    >
                      {link.label}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Media Dropdown */}
            <div className="relative group/media">
              <button
                onMouseEnter={() => setMediaOpen(true)}
                className={`flex items-center gap-1 text-[11px] font-bold tracking-[0.2em] uppercase transition-all hover:text-primary ${
                  isMediaActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Media
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 group-hover/media:rotate-180`} />
              </button>

              <div 
                onMouseLeave={() => setMediaOpen(false)}
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                  mediaOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <div className="w-56 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl p-3 overflow-hidden">
                  {mediaLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-between group/item px-4 py-3 rounded-lg text-[10px] font-bold tracking-widest uppercase transition-all hover:bg-primary hover:text-primary-foreground ${
                        pathname === link.href ? "bg-primary/5 text-primary" : "text-muted-foreground"
                      }`}
                      onClick={() => setMediaOpen(false)}
                    >
                      {link.label}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link 
                href="/contact"
                className="inline-flex items-center h-10 px-6 bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-foreground hover:text-background transition-all"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button 
              className="p-3 bg-secondary/50 rounded-xl text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[72px] bg-background/95 backdrop-blur-xl border-b border-border py-8 px-6 animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-6">
              {mainLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold tracking-widest uppercase transition-colors ${
                    pathname === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-6 border-t border-border space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">Impact</span>
                {impactLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className={`block text-sm font-bold tracking-widest uppercase transition-colors ${
                      pathname === link.href ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="pt-6 border-t border-border space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">Media</span>
                {mediaLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className={`block text-sm font-bold tracking-widest uppercase transition-colors ${
                      pathname === link.href ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link 
                href="/contact"
                className="mt-4 flex items-center justify-center h-14 bg-primary text-primary-foreground text-xs font-bold tracking-[0.2em] uppercase rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
