import Link from "next/link"
import { ExternalLink, FileText } from "lucide-react"

export function Publications() {
  const publications = [
    {
      title: "Comparative Analysis of Deeptech Ecosystems: Netherlands vs Nigeria Using the MIT iEcosystem Model",
      citation: "Ogwuche, D.I. (2025) | ELGCB Conference | University of Bolton | Chaired by Professor Christian Harrison",
      description: "In this doctoral research I compared how deep tech ecosystems develop differently in an advanced economy (Netherlands) versus an emerging one (Nigeria). Using the MIT iEcosystem model as a framework, I explored why talent alone is not enough and what infrastructure, policy and culture must align for innovation to become industry. Presenting this research two weeks ago did both — it stretched my mind and stretched my worldview. A heartfelt thank you to my Chair, Professor Christian Harrison, for guiding my research journey and giving me the platform to present.",
      link: "https://greatermanchester.ac.uk/assets/Uploads/Conference-Proceedings.pdf"
    },
    {
      title: "Prototyping of a Robotic Fire Vehicle Using Radio Frequency Technology",
      citation: "Ogwuche, D.I. et al. (2019) | FUOYE Journal of Engineering and Technology",
      description: "This peer-reviewed paper documents my undergraduate engineering project — the design and prototyping of a dual-mode robotic vehicle capable of fighting fires using Radio Frequency control. It was one of my first published contributions to engineering literature and a project I am still proud of for the real-world problem it tried to solve.",
      link: "https://journal.engineering.fuoye.edu.ng/index.php/engineer/article/view/260"
    },
    {
      title: "Nigeria Must Embrace Bold, Brilliant Innovation to Tackle Global Issues",
      citation: "Expert Opinion Article | The Sun Nigeria",
      description: "In this article I made the case that Nigeria and Africa cannot afford to wait on deeptech adoption. Drawing from the Global Innovation Index 2024 by WIPO, I argued that Nigeria's 85+ tech hubs, audacious culture and young population represent a unique competitive advantage that must be channelled into R&D and scalable innovation. According to WIPO Nigeria ranks 121st in innovation inputs and 98th in outputs. This gap reflects that the infrastructure required to polish out the last shine of our creative and entrepreneurial energy into scalable R&D and technological breakthroughs is still missing. But Nigeria is rising. The future is tired of waiting for us.",
      link: "https://thesun.ng/nigeria-must-embrace-bold-brilliant-innovation-to-tackle-global-issues-expert/"
    },
    {
      title: "In Venture Capital, Relationships Still Outperform Algorithms",
      citation: "Featured in Best of LinkedIn: Venture Capital CW 05/06 | Curated by Thomas Allgeyer",
      description: "My core argument was simple but uncomfortable: in venture capital, relationships still outperform algorithms. While AI like Boardy can scrape signals, score decks, make warm intros and map ecosystems, the highest-conviction deals often emerge from trust networks, reputation loops and years of embedded proximity. This piece sparked significant engagement across the VC community and was featured in a curated LinkedIn VC digest.",
      link: null
    },
    {
      title: "Be Relevant — Building Authentic and Lasting Networks",
      citation: "Keynote Address | The Becoming Conference 2025 | Squad of Influence and Leadership Africa | September 20, 2025",
      description: "Every opportunity we seek is a relationship away. I was honoured to deliver the keynote at The Becoming Conference 2025 hosted by Squad of Influence and Leadership Africa. The theme was \"Visibility: Be Seen, Be Heard, Be Relevant.\" My keynote focused on the third part of that journey: Be Relevant — Building Authentic and Lasting Networks. In a world obsessed with quick wins and surface connections, relevance is sustained by depth — the kind of networks that unlock opportunities and shape purpose.",
      link: null
    },
    {
      title: "Innovation: Development of a Dual Mode Robotic Fire Vehicle",
      citation: "Undergraduate Project Publication | myengineers.com.ng",
      description: "An early publication of my undergraduate engineering innovation project made publicly available to invite criticism, collaboration and contribution from the Nigerian engineering community. It marked the beginning of my commitment to open knowledge sharing.",
      link: null
    }
  ]

  return (
    <section id="publications" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Research and Publications
          </p>
          
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-16">
            Thought Leadership
          </h2>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div 
                key={index} 
                className="p-8 border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center mt-1">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-xl font-medium text-foreground mb-2">{pub.title}</h3>
                      {pub.link && (
                        <Link 
                          href={pub.link} 
                          target="_blank"
                          className="flex-shrink-0 p-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                    <p className="text-primary text-sm font-medium mb-4">{pub.citation}</p>
                    <p className="text-muted-foreground leading-relaxed">{pub.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
