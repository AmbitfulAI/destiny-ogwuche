import Link from "next/link"
import type { ComponentProps, ReactNode } from "react"
import { ArrowRight } from "lucide-react"

type Variant = "solid" | "outline" | "solid-on-dark" | "outline-on-dark" | "text"

const solid = "bg-champagne text-ink hover:bg-champagne-bright"
const outline = "border border-ivory/25 text-ivory hover:border-champagne hover:text-champagne"

const styles: Record<Variant, string> = {
  solid,
  outline,
  // The whole site is dark now; the "on-dark" names are kept so older pages still read naturally.
  "solid-on-dark": solid,
  "outline-on-dark": outline,
  text: "text-ivory underline decoration-1 underline-offset-[0.35em] decoration-champagne/50 hover:decoration-champagne hover:text-champagne",
}

// The site's button: a sharp rectangle, sentence-case text, and an arrow that moves on hover.
export function ActionLink({
  variant = "solid",
  arrow = variant !== "text",
  className = "",
  children,
  ...props
}: { variant?: Variant; arrow?: boolean; children: ReactNode } & ComponentProps<typeof Link>) {
  const box =
    variant === "text"
      ? "inline-flex items-center gap-2"
      : "inline-flex items-center justify-center gap-3 h-[3.25rem] px-7 tracking-[0.01em]"
  return (
    <Link
      {...props}
      className={`group/action ${box} text-[0.9375rem] font-semibold transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/action:translate-x-1" aria-hidden="true" />
      )}
    </Link>
  )
}

// Shared page width and gutters.
export const container = "mx-auto w-full max-w-[1240px] px-6 md:px-10"
