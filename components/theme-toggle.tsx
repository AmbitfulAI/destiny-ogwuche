"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-secondary/20 border border-border/50 animate-pulse" />
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 border border-border/50 text-foreground transition-all duration-500 hover:bg-secondary hover:scale-110 active:scale-95 group overflow-hidden"
      aria-label="Toggle theme"
    >
      <Sun
        className={`w-5 h-5 transition-all duration-500 transform ${isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
      />
      <Moon
        className={`absolute w-5 h-5 transition-all duration-500 transform ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
      />

      {/* Decorative inner glow */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/5 blur-sm" />
    </button>
  )
}
