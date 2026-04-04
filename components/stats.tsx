export function Stats() {
  const stats = [
    { number: "8+", label: "Years in Deep Tech" },
    { number: "12+", label: "Awards and Fellowships" },
    { number: "3", label: "Degrees including DBA" },
    { number: "$155K", label: "Funding Secured" },
    { number: "22+", label: "Global Clients" },
    { number: "4", label: "Countries Worked In" },
  ]

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-medium mb-2">{stat.number}</p>
              <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
