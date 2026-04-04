import { Mic } from "lucide-react"

export function Speaking() {
  const engagements = [
    {
      title: "Golden Gate University Silicon Valley Seminar Immersion",
      date: "April 22 to 25, 2025",
      description: "Interviewed on stage at GGU's Silicon Valley immersion programme. Sharing insights on deep tech, entrepreneurship and Africa's innovation opportunity with a global DBA cohort."
    },
    {
      title: "WAAW Foundation — Unleashing Tomorrow's Innovators",
      date: "October 10, 2023",
      description: "Guest Speaker on mastering digital skills and entrepreneurship for young minds. Invited as Entrepreneur and CEO of Tellit to discuss startups, opportunities and digital skills for African youth."
    },
    {
      title: "iBUILD Young African Initiative — Leveraging Digital Technology for Transformational Development",
      date: "June 5, 2021",
      description: "Guest Facilitator for this Masterclass Series. Invited as a Robotics Engineer, Transformational Designer and Co-founder of Tellit.io to show young Africans how to leverage digital technology for real development impact."
    },
    {
      title: "The Becoming Conference 2025 — Keynote Speaker",
      date: "September 20, 2025",
      description: "Delivered the keynote on \"Be Relevant — Building Authentic and Lasting Networks.\" Engaged with young brilliant African minds sharing strategies that have shaped my own path and learning from the community of leaders who gathered."
    },
    {
      title: "Additive Manufacturing Masterclass — Host",
      date: "April 2020",
      description: "Hosted a two-part paid masterclass on 3D printing with all proceeds donated to charity through Naza Agape Foundation and Green Minds Empowerment Center."
    },
    {
      title: "Various Schools and Youth Events — Inspirational Speaker",
      date: "Ongoing",
      description: "I have spoken to student bodies across Nigeria including Triple Braid Christian School in Jos and various groups after NYSC and graduation. I tell them: \"You are never too young to lead and you should never doubt your capacity to triumph where others have not.\" — Kofi Annan. There is a feeling of inspiration that comes from knowing that someone who was once in your shoes was able to cut through the challenges of your present moment. The beautiful minds we groom today are the minds that will spur the next frontiers."
    }
  ]

  return (
    <section id="speaking" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Speaking Engagements
          </p>
          
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-16">
            Sharing Knowledge
          </h2>

          <div className="space-y-6">
            {engagements.map((engagement, index) => (
              <div 
                key={index} 
                className="flex gap-6 p-6 border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <Mic className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-1">{engagement.title}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{engagement.date}</p>
                  <p className="text-muted-foreground leading-relaxed">{engagement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
