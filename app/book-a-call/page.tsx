import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { ActionLink, container } from "@/components/site/action-link"
import { getSettings } from "@/lib/content"

export const metadata: Metadata = {
  title: "Book a call",
  description:
    "Book a call with Destiny Ogwuche for advisory, technical diligence on hardware ventures, speaking and podcast enquiries, or a first conversation.",
  alternates: { canonical: "/book-a-call" },
}

const isHttps = (url?: string) => Boolean(url && /^https:\/\//.test(url))

export default function BookACallPage() {
  const { bookingUrl, bookingIntro, sessions = [] } = getSettings()
  const canEmbed = isHttps(bookingUrl)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <PageHeader
        eyebrow="Book a call"
        title="Speak with me"
        description={
          bookingIntro ||
          "Choose a time that suits you for advisory, technical diligence, a speaking or podcast enquiry, or a first conversation."
        }
      />

      {sessions.length > 0 && (
        <section className="py-16 md:py-20" aria-labelledby="sessions-title">
          <div className={`${container} grid gap-10 md:grid-cols-12`}>
            <h2 id="sessions-title" className="font-serif text-3xl md:col-span-3 md:text-4xl">
              Ways to meet
            </h2>
            <ul className="md:col-span-9 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {sessions.map((s) => (
                <li key={s.title} className="border-t border-border pt-6">
                  <h3 className="font-serif text-2xl leading-snug">{s.title}</h3>
                  {(s.duration || s.price) && (
                    <p className="mt-1 text-sm text-accent">{[s.duration, s.price].filter(Boolean).join(", ")}</p>
                  )}
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="border-t border-border py-16 md:py-24" aria-labelledby="schedule-title">
        <div className={container}>
          <h2 id="schedule-title" className="font-serif text-3xl md:text-4xl">
            {canEmbed ? "Choose a time" : "Request a time"}
          </h2>
          {canEmbed ? (
            <>
              <div className="mt-10 overflow-hidden border border-border bg-card">
                <iframe
                  src={bookingUrl}
                  title="Booking calendar"
                  className="h-[760px] w-full"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <p className="mt-4 text-[0.95rem] text-muted-foreground">
                Calendar not loading?{" "}
                <a href={bookingUrl} target="_blank" rel="noopener" className="text-link inline-flex items-center gap-1 text-foreground">
                  Open the booking page
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </p>
            </>
          ) : (
            <div className="mt-6 max-w-2xl">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Online booking is opening soon. In the meantime, send me a note with what you would like to discuss and a few times that suit you, and I will confirm by email.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ActionLink href="/contact">Request a time</ActionLink>
                <ActionLink href="/speaking" variant="outline">
                  Speaking topics
                </ActionLink>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
