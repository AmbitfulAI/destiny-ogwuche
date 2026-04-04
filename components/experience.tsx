export function Experience() {
  const experiences = [
    {
      period: "2024 to Present",
      role: "Verification and Validation Lead",
      company: "Vitestro, Netherlands",
      description: "I am currently leading technical diligence and validation strategy for the world's first Autonomous Robotic Phlebotomy Device (ARPD) — a MedTech breakthrough that draws blood without a human phlebotomist. I co-led the commercialisation project for a €38M Series B-funded device managing an 8-member cross-functional team. In my time here I have increased build efficiency by 40% and cut validation cycle time by 18%. I translated MedTech quality standards into engineering requirements and drove end-to-end process improvements that made the device more reliable and market-ready.",
      skills: ["MedTech", "Validation", "Commercialisation", "€38M Series B", "Quality Systems"]
    },
    {
      period: "2022 to 2024",
      role: "Technical Project Lead",
      company: "Nortek, Netherlands",
      description: "I managed technical and commercial relationships for 22+ clients across defense, marine robotics and energy. Nortek builds acoustic Doppler instrumentation used in underwater navigation for ROVs, AUVs and oceanographic research and I was proud to be the bridge between that technology and the clients who depended on it. I led quality and sustainability initiatives under ISO 9001 and 14001 and conducted system tests and lifecycle assessments to enhance product reliability. I also had the privilege of going on client vessels — operating at sea with some of the world's most sophisticated acoustic navigation technology. Nortek was not just a workplace. It was a canvas where innovation and collaboration came together.",
      skills: ["Marine Robotics", "Defense", "Energy", "ISO 9001 and 14001", "Client Relations"]
    },
    {
      period: "2021 to 2023",
      role: "Systems Engineer, Qualifications and Test",
      company: "ASML, Netherlands",
      description: "If the tech world is a human body then ASML is the brain — manufacturing the lithography machines that create the computer chips powering everything we use. I worked on the EUV-NXE systems, machines worth over €1.2B each, conducting precision metrology and wafer alignment at nanometer accuracy. I conducted deep technical analysis, validation and root-cause analysis. I applied Lean methodologies to improve team efficiency and mentored incoming engineers. It was one of the most technically demanding and rewarding experiences of my life. As the world's number 35 largest company by market cap, ASML dedicates enormous resources to training, growth and exposure. For me that was really special and I am grateful to have passed through their doors.",
      skills: ["Semiconductor", "EUV Systems", "Nanometer Precision", "Lean", "Mentoring"]
    },
    {
      period: "2021",
      role: "Product Test Engineer",
      company: "Skytree, Netherlands (ESA Spinout)",
      description: "I joined Skytree — a cleantech company born from the European Space Agency — as a Product Test Engineer. I ensured the quality and reliability of their atmospheric CO₂ capture technology through rigorous testing and analysis. Working on a product that literally pulls carbon from the air to fight climate change was one of the most purposeful experiences of my early career in the Netherlands. Skytree enables a transition to a world with cleaner air, water and energy for everyone and I believed in that mission from day one.",
      skills: ["Cleantech", "Carbon Capture", "ESA Spinout", "Product Testing"]
    },
    {
      period: "2018 to 2024",
      role: "Co-Founder and Group Lead Engineering",
      company: "Meyana Bio Energy",
      description: "For six years I led a 12-person deep tech venture to commercialise a novel modular waste-to-electricity bioreactor. I personally secured $155K in non-dilutive funding from Innovate UK and C40 Cities, directed investment strategy, managed key stakeholder relationships and led technical partnerships. I drove product, engineering and go-to-market strategy for the commercialisation of our technology. This was my first real school of entrepreneurship and it taught me what it means to believe in something before anyone else does. The challenges of leading a deep tech startup — managing talent, raising non-dilutive capital, building partnerships, navigating technical uncertainty — all of that shaped every entrepreneurial decision I have made since.",
      skills: ["Cleantech", "Bioenergy", "Innovate UK", "C40 Cities", "$155K Non-Dilutive Funding", "GTM Strategy"]
    },
    {
      period: "Post-2020",
      role: "Service Engineer",
      company: "FG Robosys, Netherlands",
      description: "My first role in the Netherlands after graduating and the realisation of a long-held dream to work in robotics or aerospace. I was honest and open about what it took to get here: months of job applications, rejection emails and quiet persistence. Getting this role was not just a career milestone. It was proof that perseverance works. I am grateful to everyone who cheered, encouraged, supported and reviewed my applications throughout that journey.",
      skills: ["Robotics", "Engineering", "Netherlands Career Launch"]
    },
    {
      period: "2020",
      role: "Digital Transformation Trainee",
      company: "Digital Society School, Amsterdam",
      description: "I was selected for a traineeship at the Digital Society School in Amsterdam focused on researching technology's impact on society. The school seeks to research the impact of technology on society, develop the skills necessary to guide the transformation and pass on this knowledge to a new generation of professionals ready to work on the United Nations Sustainable Development Goals for 2030. I participated in the Global Goals Jam 2020, contributing to UN SDGs through speculative design and innovation sprints. It stretched how I think about design, systems and behavioural change. Staying hungry and foolish — as Steve Jobs would say — I left with more questions than I arrived with. That is always a good sign.",
      skills: ["Digital Transformation", "UN SDGs", "Design Thinking", "Speculative Design"]
    }
  ]

  return (
    <section id="experience" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Professional Journey
          </p>
          
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-16">
            Career Timeline
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                
                <p className="text-primary text-sm font-medium mb-2">{exp.period}</p>
                <h3 className="font-serif text-2xl font-medium text-foreground mb-1">{exp.role}</h3>
                <p className="text-muted-foreground font-medium mb-4">{exp.company}</p>
                <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
