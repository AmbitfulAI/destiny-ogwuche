"use client"

import { useState, type FormEvent } from "react"
import { Check, Loader2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { container } from "@/components/site/action-link"
import { sendEmail } from "@/app/actions/contact"
import { toast } from "sonner"

const topics = [
  "Speaking engagement",
  "Podcast or interview",
  "Venture capital or investment",
  "Advisory or technical diligence",
  "Research collaboration",
  "Deep tech ventures",
  "Mentorship",
  "Something else",
]

const field =
  "w-full rounded-sm border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-foreground focus:outline-none"
const label = "mb-2 block text-sm font-medium text-foreground"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const result = await sendEmail(formData)
      if (result.success) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        toast.error(result.error || "Your message was not sent. Please try again, or email me directly.")
      }
    } catch {
      toast.error("Your message was not sent. Please try again, or email me directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="For talks, podcasts, advisory, technical diligence, research collaboration or the book. I reply to every message personally."
      />

      <section className="py-16 md:py-24">
        <div className={`${container} grid gap-16 lg:grid-cols-12`}>
          <aside className="lg:col-span-4">
            <dl className="divide-y divide-border border-y border-border">
              <div className="py-5">
                <dt className="text-sm text-muted-foreground">Email</dt>
                <dd className="mt-1">
                  <a href="mailto:ogwuche.innosuccess@gmail.com" className="text-link break-all text-foreground">
                    ogwuche.innosuccess@gmail.com
                  </a>
                </dd>
              </div>
              <div className="py-5">
                <dt className="text-sm text-muted-foreground">LinkedIn</dt>
                <dd className="mt-1">
                  <a href="https://www.linkedin.com/in/ogwuche-destiny-innosuccess/" target="_blank" rel="noopener" className="text-link text-foreground">
                    Destiny Ogwuche
                  </a>
                </dd>
              </div>
              <div className="py-5">
                <dt className="text-sm text-muted-foreground">Based in</dt>
                <dd className="mt-1 text-foreground">Amsterdam, the Netherlands</dd>
              </div>
            </dl>
            <p className="mt-6 text-[0.95rem] leading-relaxed text-muted-foreground">
              Journalists and event organisers: bios, photos and interview questions are in the{" "}
              <a href="/press" className="text-link text-foreground">
                press kit
              </a>
              .
            </p>
          </aside>

          <div className="lg:col-span-7 lg:col-start-6">
            {isSubmitted ? (
              <div className="border border-border bg-card p-10" role="status">
                <Check className="h-8 w-8 text-primary" aria-hidden="true" />
                <h2 className="mt-4 font-serif text-[2.15rem]">Message sent</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">Thank you for writing. I will reply as soon as I can.</p>
                <button type="button" onClick={() => setIsSubmitted(false)} className="text-link mt-6 text-foreground">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={label}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={field}
                  />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className={label}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={label}>
                      Phone <span className="font-normal text-muted-foreground">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={field}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className={label}>
                    What is it about?
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={field}
                  >
                    <option value="">Choose a topic</option>
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className={label}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={7}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={field}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-12 items-center gap-2 rounded-sm bg-primary px-8 font-medium text-primary-foreground transition-colors hover:bg-foreground hover:text-background disabled:opacity-60"
                >
                  {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                  {isSubmitting ? "Sending" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
