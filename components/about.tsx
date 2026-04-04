import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Image Column */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                {/* About Image */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10 border border-border overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-about-5Y2Kc8PbrWSe2an5h4YqHs24OaNcje.jpeg"
                    alt="Destiny Innosuccess Ogwuche"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Accent Bar */}
                <div className="h-2 bg-gradient-to-r from-primary to-accent mt-4" />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-3">
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                About Me
              </p>
              
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-12">
                Nigerian-born. Netherlands-based.
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am a builder, an entrepreneur, and a doctoral researcher working at the convergence of artificial intelligence, deep technology, and systems innovation. For over a decade, my mission has remained consistent. I take ambitious technical concepts, interrogate their underlying assumptions, and translate them into commercially viable products that can survive the constraints of the real world.
                </p>

                <p>
                  My engineering career spans highly complex systems across semiconductors, ocean sensing infrastructure, clean energy, and medical robotics. I have operated as a verification engineer at Skytree, a spinout of the European Space Agency, where I helped validate core carbon capture technology. I also led the verification and validation of the world&apos;s first Autonomous Robotic Phlebotomy Device in the world, which is an advanced clinical system designed to automate blood collection with precision and reliability.
                </p>

                <p>
                  Alongside my work in the industry, I am pursuing a Doctorate in Business Administration at Golden Gate University in San Francisco. Using the MIT iEcosystem framework, my research compares deep tech ecosystems in Nigeria and the Netherlands, exploring how capital, policy, universities, and industry interact to turn scientific breakthroughs into scalable companies.
                </p>

                <p>
                  This academic pursuit is driven by a deeply held belief that innovation only matters when it measurably advances industries, communities, and economies. Guided by this philosophy, I operate as an innovation strategist, partnering with entities such as Hope Amplified, Meyana Bioenergy, and the Lagos and Plateau State Governments to design strategies that move ideas beyond theory and into execution.
                </p>

                <p>
                  As I navigated my career working for global deep tech companies, earning spots in highly competitive fellowships and scholarships, and helping various organizations secure critical grant funding, I noticed a frustrating reality. I saw firsthand that brilliant individuals were frequently missing out on life-changing opportunities because discovering and successfully applying to these programs requires strategic insider knowledge, elite networks, and hundreds of hours of preparation.
                </p>

                <p>
                  The system was not always propelled exclusively by meritocracy. Driven by a desire to level the playing field, this realization led me to create Ambitful AI. I built the opportunity intelligence platform to help ambitious individuals discover and strategically position themselves to win on a global stage, regardless of the connections they were born with.
                </p>

                <p>
                  Beyond the laboratory and the startup ecosystem, I am a deeply curious human being. When I unplug from my professional work, I can usually be found reading books, hiking, cycling, or getting lost in the timeless resonance of classical music. The central question that keeps me inspired every day is how my personal contributions can propel my environment toward a brighter future.
                </p>

                <p>
                  Bringing a rare combination of hands-on deep tech execution, venture ecosystem insight, and global exposure, I am deeply committed to building the infrastructure that enables talent to translate into impact at scale. I am always eager to connect with like-minded leaders across government, venture capital, and industry to collaborate and ignite the next breakthrough.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-12">
                <div className="p-6 border border-border bg-card">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-serif text-lg">01</span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3">My Mission</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    To identify and scale frontier deep tech innovations bridging the gap between Africa&apos;s raw talent and the global infrastructure it deserves.
                  </p>
                </div>

                <div className="p-6 border border-border bg-card">
                  <div className="w-10 h-10 bg-accent/10 flex items-center justify-center mb-4">
                    <span className="text-accent font-serif text-lg">02</span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3">What Drives Me</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    The belief that access and not ability is the real barrier for most brilliant minds. I build platforms and pathways to change that.
                  </p>
                </div>

                <div className="p-6 border border-border bg-card">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-serif text-lg">03</span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3">My Perspective</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    I operate with an operator-investor mindset; always asking: what is the commercial path from this scientific breakthrough to real world impact?
                  </p>
                </div>

                <div className="p-6 border border-border bg-card">
                  <div className="w-10 h-10 bg-accent/10 flex items-center justify-center mb-4">
                    <span className="text-accent font-serif text-lg">04</span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3">LinkedIn Recognition</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Recognised as a LinkedIn Community Top Voice in Entrepreneurship for consistent high-impact contributions to the global business community.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-8 border-l-4 border-accent bg-secondary/50">
                <p className="text-xl text-foreground italic leading-relaxed mb-4">
                  &ldquo;I want to be a CRAYON — colouring people&apos;s lives, satisfied daily with the joy of looking around and knowing I contributed my two cents towards helping someone achieve their dream.&rdquo;
                </p>
                <p className="text-xl text-foreground italic leading-relaxed">
                  &ldquo;Let&apos;s feed the world with a cup of kindness and a plate of technology.&rdquo;
                </p>
                <p className="text-muted-foreground mt-4 text-sm">— Destiny Innosuccess Ogwuche, Founder of Ambitful.ai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
