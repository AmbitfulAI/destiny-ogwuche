"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { subscribe } from "@/app/actions/subscribe"

const roles = ["Founder or engineer", "Investor", "Policymaker", "Researcher or academic", "Student", "Other"]

export function SignupForm({ source = "book-page", compact = false }: { source?: string; compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const [error, setError] = useState("")

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    setStatus("sending")
    setError("")
    const result = await subscribe({
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      role: String(form.get("role") ?? ""),
      consent: form.get("consent") === "on",
      source,
    })
    if (result.success) {
      setStatus("done")
    } else {
      setStatus("error")
      setError(result.error)
    }
  }

  if (status === "done") {
    return (
      <div className="flex items-start gap-4 p-6 border border-primary/30 bg-primary/5" role="status">
        <Check className="w-6 h-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <p className="font-serif text-[1.4rem] text-foreground mb-1">You are on the list.</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Thank you. The free sample, the Preface and &ldquo;A Note on Words&rdquo;, will arrive by email, along with the launch date and pre-order links.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div className="space-y-2">
          <label htmlFor={`${source}-email`} className="text-sm text-muted-foreground">
            Email
          </label>
          <input
            id={`${source}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full h-12 rounded-sm border border-input bg-card px-4 text-foreground focus:border-foreground focus:outline-none"
          />
        </div>
        {!compact && (
          <div className="space-y-2">
            <label htmlFor={`${source}-name`} className="text-sm text-muted-foreground">
              First name <span className="font-normal">(optional)</span>
            </label>
            <input
              id={`${source}-name`}
              name="name"
              type="text"
              autoComplete="given-name"
              className="w-full h-12 rounded-sm border border-input bg-card px-4 text-foreground focus:border-foreground focus:outline-none"
            />
          </div>
        )}
      </div>
      {!compact && (
        <div className="space-y-2">
          <label htmlFor={`${source}-role`} className="text-sm text-muted-foreground">
            What best describes you? <span className="font-normal">(optional)</span>
          </label>
          <select
            id={`${source}-role`}
            name="role"
            defaultValue=""
            className="w-full h-12 rounded-sm border border-input bg-card px-4 text-foreground focus:border-foreground focus:outline-none"
          >
            <option value="">Choose one</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="flex items-start gap-3">
        <input id={`${source}-consent`} name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-primary" />
        <label htmlFor={`${source}-consent`} className="text-sm text-muted-foreground leading-relaxed">
          Email me the free sample and occasional news about the book. I can unsubscribe at any time. See the{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
            privacy policy
          </Link>
          .
        </label>
      </div>
      {status === "error" && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex h-12 items-center gap-2 rounded-sm bg-primary px-6 text-[0.95rem] font-medium text-primary-foreground transition-colors hover:bg-foreground hover:text-background disabled:opacity-60"
      >
        {status === "sending" ? "Sending" : "Send me the free sample"}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
      </button>
    </form>
  )
}
