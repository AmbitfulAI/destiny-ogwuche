import { GraduationCap } from "lucide-react"

export function Education() {
  const degrees = [
    {
      degree: "Doctor of Business Administration (DBA)",
      institution: "Golden Gate University | San Francisco, USA",
      year: "2026",
      details: "Global Leadership Scholarship Recipient | Silicon Valley Immersion at Plug and Play, Google and Stanford ecosystems | Research: Comparative Analysis of Deep Tech Ecosystems Netherlands vs Nigeria using the MIT iEcosystem Model | Studied AI's impact on business and transformation under Dr. Shalini Gopalkrishnan and Dr. Sia Zadeh, Chair of the Golden Gate University AI Task Force"
    },
    {
      degree: "Master of Science in Mechatronics Engineering",
      institution: "University of Glasgow | Scotland, UK",
      year: "2020",
      details: "Fully Funded via Petroleum Technology Development Fund Scholarship | Dissertation: Modelling the Bristol Fighter 2 Aircraft Using the University of Glasgow Flight Simulator | Glasgow University Robotics Society Eurobot Subgroup | Certified Walk Leader by Paths for All Scotland, January 2020"
    },
    {
      degree: "Bachelor of Engineering",
      institution: "Federal University of Technology | Minna, Nigeria",
      year: "2016",
      details: "NIMechE National Engineering Competition First Place, Student Category (2015) | National Engineering Students Competition CODET Third Place (2016) | Agbami Medical and Engineering Students Scholarship Recipient (2013)"
    }
  ]

  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Education
          </p>
          
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-16">
            Academic Foundation
          </h2>

          <div className="space-y-8">
            {degrees.map((edu, index) => (
              <div 
                key={index} 
                className="flex gap-6 p-8 border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <p className="text-primary font-medium mb-1">{edu.year}</p>
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-2">{edu.degree}</h3>
                  <p className="text-muted-foreground font-medium mb-4">{edu.institution}</p>
                  <p className="text-muted-foreground leading-relaxed">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
