import { Globe, BookOpen, BarChart3, Heart, Users, Zap } from "lucide-react"

export function Thinking() {
  const traits = [
    {
      icon: Globe,
      title: "Africa Champion",
      description: "I make the case for deep tech investment in Nigeria and across Africa, and I back it with data, from WIPO's Global Innovation Index to the ecosystem figures in my own doctoral research. I am not just pointing at the map. I am staking a claim."
    },
    {
      icon: BookOpen,
      title: "People Before Numbers",
      description: "I start with people: a rejection, a dream deferred, a mentor who said yes. The founders and engineers behind the statistics are the reason the statistics matter."
    },
    {
      icon: BarChart3,
      title: "Evidence-Based",
      description: "I work from models and measurement: the MIT iEcosystem framework, Kepner-Tregoe problem analysis, verification data from the lab. I would rather test a claim than repeat it."
    },
    {
      icon: Heart,
      title: "Serious Work, Light Touch",
      description: "I take the work seriously and myself less so. Venture capital ethics and the future of AI are better discussed with a sense of humour."
    },
    {
      icon: Users,
      title: "Community First",
      description: "I celebrate others' wins publicly. I mentor high school students in Jos. I speak at conferences across Africa and Europe. Leadership is not a title. It is a daily decision."
    },
    {
      icon: Zap,
      title: "Urgent Optimist",
      description: "The future is tired of waiting for us. I see big systemic problems as big opportunities, and I would rather build a bridge across a gap than describe it."
    }
  ]

  return (
    <section id="thinking" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Principles
          </p>
          
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-16">
            How I Work
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {traits.map((trait, index) => (
              <div 
                key={index} 
                className="p-6 border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <trait.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">{trait.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{trait.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
