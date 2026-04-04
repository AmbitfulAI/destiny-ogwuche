import { Globe, BookOpen, BarChart3, Heart, Users, Zap } from "lucide-react"

export function Thinking() {
  const traits = [
    {
      icon: Globe,
      title: "Africa Champion",
      description: "I consistently advocate for deeptech investment in Nigeria and Africa. I use data — WIPO's Global Innovation Index, ecosystem reports — to back bold claims. \"I am not just pointing at the map. I am staking a claim.\""
    },
    {
      icon: BookOpen,
      title: "Storyteller First",
      description: "Every piece I write begins with a personal story — a rejection, a dream deferred, a mentor's words from 2015. I earn trust before I share insights. Always."
    },
    {
      icon: BarChart3,
      title: "Evidence-Based",
      description: "I reference MIT ecosystem models, Kepner-Tregoe analysis and Metcalfe's Law. I bring doctoral-level rigour to accessible writing. I do not guess. I analyse."
    },
    {
      icon: Heart,
      title: "Genuinely Human",
      description: "I use humour naturally. \"Okay I made that up haha.\" I never take myself too seriously even while discussing venture capital ethics or the future of AI."
    },
    {
      icon: Users,
      title: "Community First",
      description: "I celebrate others' wins publicly. I mentor high school students in Jos. I speak at conferences across Africa and Europe. Leadership is not a title. It is a daily decision."
    },
    {
      icon: Zap,
      title: "Urgent Optimist",
      description: "\"The future is tired of waiting for us.\" I see massive systemic problems as massive opportunities. I do not just observe the gap. I build bridges across it."
    }
  ]

  return (
    <section id="thinking" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            How I Think and Communicate
          </p>
          
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-16">
            My Approach
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
