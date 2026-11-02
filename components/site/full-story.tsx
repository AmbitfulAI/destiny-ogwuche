import { ChevronDown } from "lucide-react"

// A short summary first; the full first-person story stays one click away (and in the HTML for search engines).
export function FullStory({
  summary,
  story,
  size = "lg",
  className = "",
}: {
  summary?: string
  story: string
  size?: "lg" | "base"
  className?: string
}) {
  const lead = size === "lg" ? "text-lg leading-[1.7] text-foreground/85" : "leading-relaxed text-foreground/85"

  if (!summary) {
    return <p className={`max-w-[68ch] leading-[1.75] text-muted-foreground ${className}`}>{story}</p>
  }

  return (
    <div className={`max-w-[68ch] ${className}`}>
      <p className={lead}>{summary}</p>
      <details className="group mt-4">
        <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-[0.95rem] text-foreground underline decoration-foreground/30 underline-offset-[0.3em] transition-colors hover:decoration-foreground [&::-webkit-details-marker]:hidden">
          <span className="group-open:hidden">Read the full story</span>
          <span className="hidden group-open:inline">Show less</span>
          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
        </summary>
        <p className="mt-4 leading-[1.75] text-muted-foreground">{story}</p>
      </details>
    </div>
  )
}
