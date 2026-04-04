import { stats, featuredIn } from "@/lib/data/stats"

export function HomeStats() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-medium mb-2">{stat.number}</p>
              <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Featured In */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm uppercase tracking-wider text-primary-foreground/70 mb-6">
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3">
            {featuredIn.map((feature, index) => (
              <span key={index} className="text-primary-foreground/80 font-medium text-sm">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
