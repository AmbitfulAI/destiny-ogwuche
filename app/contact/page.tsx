"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, Loader2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { sendEmail } from "@/app/actions/contact"
import { toast } from "sonner"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendEmail(formData)

      if (result.success) {
        setIsSubmitted(true)
        toast.success("Message sent successfully!")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })

        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        toast.error(result.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        eyebrow="Contact"
        title="Let's Connect"
        description="I am open to conversations on deep tech ventures, Africa's innovation ecosystem, venture capital, speaking engagements, research collaboration and more."
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="p-8 border border-border bg-card">
                <h2 className="font-serif text-2xl font-medium mb-6 text-foreground">Send a Message</h2>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="w-16 h-16 text-primary mb-4" />
                    <p className="text-xl font-medium text-foreground">Message Sent!</p>
                    <p className="text-muted-foreground mt-2">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                          placeholder="+31 6 1234 5678"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select a topic</option>
                        <option value="Speaking Engagement">Speaking Engagement</option>
                        <option value="Venture Capital / Investment">Venture Capital / Investment</option>
                        <option value="Research Collaboration">Research Collaboration</option>
                        <option value="Deep Tech Ventures">Deep Tech Ventures</option>
                        <option value="Mentorship">Mentorship</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Tell me about what you have in mind..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          Sending...
                          <Loader2 className="w-4 h-4 animate-spin" />
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-medium mb-6 text-foreground">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you want to discuss deep tech ventures, Africa&apos;s innovation ecosystem, speaking opportunities, or just want to connect — I actually enjoy the questions.
                  </p>
                </div>

                <div className="space-y-4">
                  <Link
                    href="mailto:ogwuche.Innosuccess@gmail.com"
                    className="flex items-start gap-4 p-4 bg-card border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors break-all">
                        ogwuche.Innosuccess@gmail.com
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="tel:+31613716278"
                    className="flex items-start gap-4 p-4 bg-card border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        +31 6 13 71 62 78
                      </p>
                    </div>
                  </Link>

                  <div className="flex items-start gap-4 p-4 bg-card border border-border">
                    <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="font-medium text-foreground">Almere, Netherlands</p>
                    </div>
                  </div>

                  <Link
                    href="https://linkedin.com/in/destiny-ogwuche"
                    target="_blank"
                    className="flex items-start gap-4 p-4 bg-card border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        destiny-ogwuche
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
