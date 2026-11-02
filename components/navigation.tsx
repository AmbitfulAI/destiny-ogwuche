"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { container } from "./site/action-link"

type NavLink = { href: string; label: string }
type NavGroup = { label: string; links: NavLink[] }

const primary: NavLink[] = [{ href: "/about", label: "About" }]

const afterGroups: NavLink[] = [
  { href: "/writing", label: "Writing" },
  { href: "/store", label: "Store" },
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
    label: "Book",
    links: [
      { href: "/book/towards-deep-tech-in-africa", label: "Towards Deep Tech in Africa" },
      { href: "/ideas", label: "Ideas from the book" },
      { href: "/book/deep-tech-numbers", label: "The numbers" },
      { href: "/book/sample", label: "Read the opening free" },
      { href: "/reading-list", label: "Reading list" },
    ],
  },
  {
    label: "Media",
    links: [
      { href: "/speaking", label: "Speaking" },
      { href: "/press", label: "Press kit" },
      { href: "/journal", label: "Journal" },
      { href: "/journal/photos", label: "Photos" },
      { href: "/contact", label: "Contact" },
    ],
  },
]

const isActive = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`)

const linkBase = "relative py-2 text-[0.875rem] tracking-[0.01em] transition-colors duration-200"

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
        className={`${linkBase} flex items-center gap-1.5 ${active ? "text-ivory" : "text-mist hover:text-ivory"}`}
      >
        {group.label}
        <ChevronDown className={`h-3.5 w-3.5 text-champagne/80 transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      <div className={`absolute left-1/2 top-full -translate-x-1/2 pt-4 ${open ? "visible opacity-100" : "invisible opacity-0"} transition-opacity duration-200`}>
        <ul className="min-w-60 border border-hairline bg-ink-panel/95 py-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.6)] backdrop-blur-md">
          {group.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`block whitespace-nowrap px-6 py-2.5 text-[0.9rem] transition-colors ${pathname === link.href ? "text-champagne" : "text-mist hover:text-ivory"}`}
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

function NavItem({ link, pathname }: { link: NavLink; pathname: string }) {
  const active = isActive(pathname, link.href)
  return (
    <Link
      href={link.href}
      aria-current={active ? "page" : undefined}
      className={`${linkBase} ${active ? "text-ivory after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-champagne" : "text-mist hover:text-ivory"}`}
    >
      {link.label}
    </Link>
  )
}

export function Navigation() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // The bar is transparent at the top of every page and turns solid once you scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [pathname])

  useEffect(() => setMenuOpen(false), [pathname])

  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${solid ? "border-hairline bg-ink/85 backdrop-blur-xl" : "border-transparent bg-transparent"}`}
    >
      <nav className={`${container} flex h-[78px] items-center justify-between`} aria-label="Main">
        <Link href="/" className="group flex items-baseline gap-3 text-ivory">
          <span className="font-serif text-[1.55rem] font-medium leading-none tracking-[0.005em]">Destiny Ogwuche</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {primary.map((link) => (
            <NavItem key={link.href} link={link} pathname={pathname} />
          ))}
          {groups.map((group) => (
            <Dropdown key={group.label} group={group} pathname={pathname} />
          ))}
          {afterGroups.map((link) => (
            <NavItem key={link.href} link={link} pathname={pathname} />
          ))}
          <Link
            href="/book-a-call"
            className="ml-2 inline-flex h-10 items-center border border-champagne/60 px-5 text-[0.85rem] font-semibold tracking-[0.01em] text-champagne transition-colors duration-200 hover:bg-champagne hover:text-ink"
          >
            Book a call
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-ivory lg:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="max-h-[calc(100dvh-78px)] overflow-y-auto border-t border-hairline bg-ink lg:hidden">
          <div className={`${container} space-y-10 py-10`}>
            <ul className="space-y-1">
              {[{ href: "/", label: "Home" }, ...primary, ...afterGroups].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block py-1.5 font-serif text-[2rem] leading-tight text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {groups.map((group) => (
              <div key={group.label}>
                <p className="eyebrow mb-3">{group.label}</p>
                <ul className="grid grid-cols-2 gap-x-6">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="block py-2 text-[1rem] text-mist">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              href="/book-a-call"
              className="flex h-[3.25rem] items-center justify-center bg-champagne font-semibold text-ink"
            >
              Book a call
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
