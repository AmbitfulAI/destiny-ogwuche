"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface ExpandableCardProps {
  children: React.ReactNode
  preview: React.ReactNode
  defaultExpanded?: boolean
}

export function ExpandableCard({ children, preview, defaultExpanded = false }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className="border border-border bg-card hover:border-primary/50 transition-colors">
      <div className="p-6 md:p-8">
        {preview}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-border">
            {children}
          </div>
        )}
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-center gap-2 py-3 border-t border-border text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
      >
        {isExpanded ? "Show Less" : "Read More"}
        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
      </button>
    </div>
  )
}
