import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { Thinking } from "@/components/thinking"
import { Education } from "@/components/education"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        eyebrow="About Me"
        title="Nigerian-born. Netherlands-based."
        description="Builder, entrepreneur, and doctoral researcher working at the convergence of artificial intelligence, deep technology, and systems innovation."
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="lg:block">
              {/* Image Container - Floated on desktop */}
              <div className="lg:float-left lg:mr-16 lg:mb-10 w-full lg:w-[420px] mb-8">
                <div className="relative aspect-3/4 bg-linear-to-br from-primary/10 to-accent/10 border border-border overflow-hidden">
                  <Image
                    src="/images/platform/IMG_8488.JPG.jpeg"
                    alt="Destiny Innosuccess Ogwuche"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="h-2 bg-linear-to-r from-primary to-accent mt-4" />
              </div>

              {/* Content Area */}
              <div className="text-lg text-muted-foreground leading-relaxed">
                <div className="space-y-6">
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

                  <div className="lg:float-right lg:ml-12 lg:mb-8 w-full lg:w-[600px] my-10 lg:my-0">
                    <div className="relative aspect-video bg-secondary rounded-2xl overflow-hidden shadow-xl ring-1 ring-border">
                      <Image
                        src="/images/platform/WhatsApp Image 2026-04-06 at 16.12.11 (2).jpeg"
                        alt="Destiny personal moment beyond the laboratory"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-3 text-right">Beyond the laboratory</p>
                  </div>

                  <p>
                    Bringing a rare combination of hands-on deep tech execution, venture ecosystem insight, and global exposure, I am deeply committed to building the infrastructure that enables talent to translate into impact at scale. I am always eager to connect with like-minded leaders across government, venture capital, and industry to collaborate and ignite the next breakthrough.
                  </p>
                </div>

                {/* Clear the float before the card grid to maintain layout integrity */}
                <div className="clear-both pt-12">
                  <div className="grid sm:grid-cols-2 gap-6">
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
        </div>
      </section>

      <Thinking />
      <Education />
      <Footer />
    </main>
  )
}
