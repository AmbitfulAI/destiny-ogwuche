import Link from "next/link"
import { ArrowUpRight, Linkedin, Github, Twitter, Mail } from "lucide-react"


export function Footer() {
  const socialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com/in/destiny-ogwuche", icon: <Linkedin className="w-4 h-4" /> },
    { label: "Twitter", href: "#", icon: <Twitter className="w-4 h-4" /> },
    { label: "Portfolio", href: "https://tellit.io", icon: <ArrowUpRight className="w-4 h-4" /> },
  ]

  const navLinks = [
    { label: "The Journal", href: "/gallery" },
    { label: "Experience", href: "/experience" },
    { label: "Impact", href: "/ventures" },
    { label: "About", href: "/about" },
  ]

  const impactLinks = [
    { label: "Ambitful AI", href: "https://ambitful.ai" },
    { label: "Tellit", href: "https://tellit.io" },
    { label: "Research", href: "/research" },
  ]

  return (
    <footer className="pt-32 pb-16 bg-background border-t border-border relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/2 blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

            {/* Brand Column */}
            <div className="lg:col-span-1 border-r border-border/50 pr-8">
              <Link href="/" className="group flex items-center gap-2 mb-8">
                <span className="font-serif text-xl font-medium text-foreground tracking-widest">
                  OGWUCHE
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-sans font-light italic">
                &ldquo;Engineering the future through deep tech validation and venture strategy.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground mb-8">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Column */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground mb-8">Ecosystem</h4>
              <ul className="space-y-4">
                {impactLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="bg-secondary/30 p-10 rounded-3xl border border-transparent hover:border-primary/20 transition-all duration-500">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground mb-6">Engagement</h4>
              <p className="text-sm text-muted-foreground mb-8 font-sans font-light">
                Available for panels, panels, technical diligence, and strategic board advisory.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:translate-x-2 transition-transform"
              >
                Send a Message <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[10px] font-bold text-muted-foreground/50 uppercase tracking-widest">
              © {new Date().getFullYear()} Destiny Innosuccess Ogwuche. All rights reserved.
            </p>
            <div className="flex gap-8">
              <span className="text-[10px] font-bold text-muted-foreground/30 uppercase tracking-widest">Amsterdam, NL</span>
              <Link href="/privacy" className="text-[10px] font-bold text-muted-foreground/30 hover:text-foreground uppercase tracking-widest transition-colors">Privacy Policy</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
