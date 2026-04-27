"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, Loader2 } from "lucide-react"
import { sendEmail } from "@/app/actions/contact"
import { toast } from "sonner"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [isPending, setIsPending] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsPending(true)
    
    try {
      const result = await sendEmail(formData)
      
      if (result.success) {
        setIsSubmitted(true)
        toast.success("Message sent successfully!")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
        
        // Reset success view after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        toast.error(result.error || "Something went wrong")
      }
    } catch (error) {
      toast.error("An unexpected error occurred")
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-medium tracking-wide uppercase text-sm mb-4 text-primary">
              Contact
            </p>
            
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Let&apos;s Connect
            </h2>

            <p className="text-xl text-background/80 leading-relaxed max-w-2xl mx-auto">
              I am open to conversations on deep tech ventures, Africa&apos;s innovation ecosystem, venture capital, speaking engagements, research collaboration and more.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-background/5 border border-background/20 p-8">
              <h3 className="font-serif text-2xl font-medium mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <CheckCircle className="w-16 h-16 text-primary mb-4" />
                  <p className="text-xl font-medium">Message Ready!</p>
                  <p className="text-background/70 mt-2">Your email client should open shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-background/80">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-background/80">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:border-primary focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-background/80">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:border-primary focus:outline-none transition-colors"
                        placeholder="+31 6 1234 5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-background/80">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-background/10 border border-background/20 text-background focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="" className="text-foreground">Select a topic</option>
                      <option value="Speaking Engagement" className="text-foreground">Speaking Engagement</option>
                      <option value="Venture Capital / Investment" className="text-foreground">Venture Capital / Investment</option>
                      <option value="Research Collaboration" className="text-foreground">Research Collaboration</option>
                      <option value="Deep Tech Ventures" className="text-foreground">Deep Tech Ventures</option>
                      <option value="Mentorship" className="text-foreground">Mentorship</option>
                      <option value="General Inquiry" className="text-foreground">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-background/80">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about what you have in mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
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
                <h3 className="font-serif text-2xl font-medium mb-6">Contact Information</h3>
                <p className="text-background/80 leading-relaxed">
                  Whether you want to discuss deep tech ventures, Africa&apos;s innovation ecosystem, speaking opportunities, or just want to connect — I actually enjoy the questions.
                </p>
              </div>

              <div className="space-y-4">
                <Link 
                  href="mailto:ogwuche.Innosuccess@gmail.com"
                  className="flex items-start gap-4 p-4 bg-background/5 border border-background/20 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/20 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-background/60 mb-1">Email</p>
                    <p className="font-medium group-hover:text-primary transition-colors break-all">
                      ogwuche.Innosuccess@gmail.com
                    </p>
                  </div>
                </Link>

                <Link 
                  href="tel:+31613716278"
                  className="flex items-start gap-4 p-4 bg-background/5 border border-background/20 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/20 text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-background/60 mb-1">Phone</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      +31 6 13 71 62 78
                    </p>
                  </div>
                </Link>

                <div className="flex items-start gap-4 p-4 bg-background/5 border border-background/20">
                  <div className="w-12 h-12 flex items-center justify-center bg-accent/20 text-accent">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-background/60 mb-1">Location</p>
                    <p className="font-medium">Almere, Netherlands</p>
                  </div>
                </div>

                <Link 
                  href="https://linkedin.com/in/destiny-ogwuche"
                  target="_blank"
                  className="flex items-start gap-4 p-4 bg-background/5 border border-background/20 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/20 text-primary">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-background/60 mb-1">LinkedIn</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
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
  )
}
