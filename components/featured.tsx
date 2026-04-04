export function Featured() {
  const features = [
    "The Sun Nigeria",
    "Daily Assets",
    "Best of LinkedIn Venture Capital",
    "ELGCB Conference 2025",
    "FUOYE Engineering Journal",
    "iBUILD Young African Initiative",
    "WAAW Foundation"
  ]

  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
          As Featured In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          {features.map((feature, index) => (
            <span key={index} className="text-foreground/70 font-medium text-sm md:text-base">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
