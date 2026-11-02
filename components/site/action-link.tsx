import Link from "next/link"
import type { ComponentProps, ReactNode } from "react"

type Variant = "solid" | "outline" | "solid-on-dark" | "outline-on-dark" | "text"

const styles: Record<Variant, string> = {
  solid:
    "bg-primary text-primary-foreground hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background",
  outline: "border border-foreground/25 text-foreground hover:border-foreground",
  "solid-on-dark": "bg-[#F1EFE6] text-[#0B2E23] hover:bg-white",
  "outline-on-dark": "border border-[#F1EFE6]/35 text-[#F1EFE6] hover:border-[#F1EFE6]",
  text: "text-foreground underline decoration-1 underline-offset-[0.3em] decoration-foreground/30 hover:decoration-foreground",
}

// The site's one button shape: a quiet rectangle with sentence-case text.
export function ActionLink({
  variant = "solid",
  className = "",
  children,
  ...props
}: { variant?: Variant; children: ReactNode } & ComponentProps<typeof Link>) {
  const box = variant === "text" ? "inline-flex items-center gap-2" : "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-sm"
  return (
    <Link
      {...props}
      className={`${box} text-[0.95rem] font-medium transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}

// Shared page width and gutters.
export const container = "mx-auto w-full max-w-[1200px] px-6 md:px-10"
