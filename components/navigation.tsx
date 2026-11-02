"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { container } from "./site/action-link"

type NavLink = { href: string; label: string }
type NavGroup = { label: string; links: NavLink[] }

const primary: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/book/towards-deep-tech-in-africa", label: "Book" },
  { href: "/ideas", label: "Ideas" },
]

const groups: NavGroup[] = [
  {
    label: "Work",
    links: [
      { href: "/experience", label: "Experience" },
      { href: "/ventures", label: "Ventures" },
      { href: "/research", label: "Research" },
      { href: "/awards", label: "Awards" },
    ],
  },
  {
    label: "Media",
    links: [
      { href: "/speaking", label: "Speaking" },
      { href: "/press", label: "Press kit" },
      { href: "/journal", label: "Journal" },
      { href: "/journal/photos", label: "Photos" },
    ],
  },
]

const isActive = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`)

function Dropdown({ group, pathname }: { group: NavGroup; pathname: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const active = group.links.some((l) => isActive(pathname, l.href))

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onClick)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("mousedown", onClick)
    }
  }, [open])

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1 py-2 text-[0.95rem] transition-colors hover:text-foreground ${active ? "text-foreground" : "text-muted-foreground"} group-data-[hero=true]/nav:text-[#C9D3CC] group-data-[hero=true]/nav:hover:text-[#F1EFE6]`}
      >
        {group.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      <div className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 ${open ? "visible opacity-100" : "invisible opacity-0"} transition-opacity duration-150`}>
        <ul className="min-w-48 border border-border bg-popover py-2 shadow-[0_12px_32px_-12px_rgba(16,24,31,0.25)]">
          {group.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`block px-5 py-2.5 text-[0.95rem] transition-colors hover:bg-secondary ${pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [overHero, setOverHero] = useState(false)
  const pathname = usePathname()

  // On the homepage the bar sits transparently on the green hero, and turns solid once you scroll past it.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const hero = document.querySelector("[data-hero-section]")
      setOverHero(Boolean(hero && hero.getBoundingClientRect().bottom > 72))
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [pathname])

  const onHero = overHero && !menuOpen

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <header
      data-hero={onHero ? "true" : "false"}
      className={`group/nav fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${onHero ? "border-transparent bg-transparent" : `bg-background/95 backdrop-blur-md ${scrolled || menuOpen ? "border-border" : "border-transparent"}`}`}
    >
      <nav className={`${container} flex h-[72px] items-center justify-between`} aria-label="Main">
        <Link href="/" className="font-serif text-[1.4rem] leading-none tracking-[-0.01em] text-foreground group-data-[hero=true]/nav:text-[#F1EFE6]">
          Destiny Ogwuche
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {primary.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              className={`py-2 text-[0.95rem] transition-colors hover:text-foreground ${isActive(pathname, link.href) ? "text-foreground" : "text-muted-foreground"} group-data-[hero=true]/nav:text-[#C9D3CC] group-data-[hero=true]/nav:hover:text-[#F1EFE6]`}
            >
              {link.label}
            </Link>
          ))}
          {groups.map((group) => (
            <Dropdown key={group.label} group={group} pathname={pathname} />
          ))}
          <div className="flex items-center gap-3 pl-2">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex h-10 items-center rounded-sm bg-primary px-5 text-[0.9rem] font-medium text-primary-foreground transition-colors hover:bg-foreground hover:text-background group-data-[hero=true]/nav:bg-[#F1EFE6] group-data-[hero=true]/nav:text-[#0B2E23] group-data-[hero=true]/nav:hover:bg-white"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-foreground group-data-[hero=true]/nav:text-[#F1EFE6]"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-border bg-background">
          <div className={`${container} py-8 space-y-8`}>
            <ul className="space-y-1">
              {[{ href: "/", label: "Home" }, ...primary].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block py-2 font-serif text-2xl text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {groups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 text-sm text-muted-foreground">{group.label}</p>
                <ul className="grid grid-cols-2 gap-x-6">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="block py-2 text-lg text-foreground">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              href="/contact"
              className="flex h-12 items-center justify-center rounded-sm bg-primary text-primary-foreground font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
