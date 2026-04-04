export function Skills() {
  const skillCategories = [
    {
      title: "Analysis and Strategy",
      skills: [
        "Analytical Troubleshooting and Complex Problem Solving (Kepner-Tregoe Certified)",
        "Digital Product Management and Strategy",
        "Data Analysis"
      ]
    },
    {
      title: "Technical and Engineering",
      skills: [
        "AI Agents",
        "Microsoft Office",
        "SAP",
        "Odoo",
        "Jira and Confluence",
        "Solidworks",
        "MATLAB",
        "Python",
        "Arduino",
        "X-plane",
        "Mechatronics Systems",
        "Robotics",
        "3D Printing and Additive Manufacturing"
      ]
    },
    {
      title: "Languages",
      skills: [
        "English (Fully Proficient)",
        "Dutch (Beginner)"
      ]
    },
    {
      title: "Extracurriculars",
      skills: [
        "Classical Music",
        "Certified First Responder",
        "Board Games",
        "Volunteering",
        "Cycling",
        "Safety for Operational Supervisors (VOL-VCA)"
      ]
    }
  ]

  return (
    <section id="skills" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Skills
          </p>
          
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-16">
            Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="p-6 border border-border bg-card"
              >
                <h3 className="font-serif text-xl font-medium text-foreground mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm bg-primary/10 text-primary border border-primary/20"
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
