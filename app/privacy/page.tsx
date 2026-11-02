import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { author } from "@/lib/book/content"

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How this website collects and uses personal data from the contact form and the book mailing list.",
  alternates: { canonical: "/privacy" },
}

// Plain-language notice for a personal site in the Netherlands (GDPR).
// Have it reviewed if the site starts using analytics, ads or new processors.
export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <PageHeader eyebrow="Privacy" title="Privacy policy" description="Last updated: November 2026" />
      <section className="py-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <div className="max-w-3xl mx-auto space-y-10 text-muted-foreground leading-relaxed">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Who is responsible</h2>
              <p>
                This website is run by {author.fullName}, based in the Netherlands. For anything about your data, email{" "}
                <a href={`mailto:${author.email}`} className="text-foreground underline decoration-foreground/30 underline-offset-[0.25em] hover:decoration-foreground">
                  {author.email}
                </a>
                .
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">What I collect and why</h2>
              <p>
                <strong className="text-foreground">Contact form.</strong> Your name, email address, phone number if you give it, and your message. I use them only to reply to you.
              </p>
              <p>
                <strong className="text-foreground">Book mailing list.</strong> Your email address, and your first name and role if you give them. I use them to send you the free sample of the book and occasional news about it, such as the launch date and events. I ask for your consent first, and you can withdraw it at any time with the unsubscribe link in any email or by emailing me.
              </p>
              <p>This site does not use advertising cookies and does not sell or share your data for marketing.</p>
            </div>
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Who processes it</h2>
              <p>
                Emails from this site are delivered by an email service provider, and the site is hosted by a web hosting provider. If a newsletter service is used for the mailing list, it stores the list on my behalf. These providers process data only to deliver their service.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">How long I keep it</h2>
              <p>Contact messages are kept as long as needed to deal with your request. Mailing list details are kept until you unsubscribe.</p>
            </div>
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Your rights</h2>
              <p>
                Under the GDPR you can ask to see, correct or delete your data, object to its use, or ask for a copy. Email me and I will respond within one month. You can also complain to the Dutch data protection authority, the Autoriteit Persoonsgegevens.
              </p>
            </div>
            <p>
              <Link href="/contact" className="text-foreground underline decoration-foreground/30 underline-offset-[0.25em] hover:decoration-foreground">
                Contact me
              </Link>{" "}
              with any question about this policy.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
