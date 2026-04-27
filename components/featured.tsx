import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Featured() {
  const features = [
    {
      outlet: "The Sun Nigeria",
      summary: "Destiny was featured as an expert voice on Nigeria's deeptech potential, making the bold case that innovation is Africa's greatest competitive advantage.",
      link: "https://thesun.ng/nigeria-must-embrace-bold-brilliant-innovation-to-tackle-global-issues-expert/",
      linkText: "Read Feature"
    },
    {
      outlet: "Daily Assets",
      summary: "Ambitful AI was featured on its launch day covering Destiny's vision of closing the trillion-dollar opportunity discovery gap across Africa.",
      link: "#",
      linkText: "Read Feature"
    },
    {
      outlet: "Best of LinkedIn · Venture Capital",
      summary: "Destiny's argument that human relationships still outperform algorithms in venture capital was curated by Thomas Allgeyer and read by thousands of investors globally.",
      link: "#",
      linkText: "Read Feature"
    },
    {
      outlet: "ELGCB Conference 2025",
      summary: "Destiny presented doctoral research comparing deep tech ecosystems in the Netherlands and Nigeria using the MIT iEcosystem Model at the University of Bolton.",
      link: "https://greatermanchester.ac.uk/assets/Uploads/Conference-Proceedings.pdf",
      linkText: "View Paper"
    },
    {
      outlet: "FUOYE Engineering Journal",
      summary: "Destiny co-authored a peer-reviewed paper on prototyping a robotic fire vehicle using Radio Frequency technology published in 2019.",
      link: "https://journal.engineering.fuoye.edu.ng/index.php/engineer/article/view/260",
      linkText: "Read Paper"
    },
    {
      outlet: "iBUILD Young African Initiative",
      summary: "Invited as Guest Facilitator for the Masterclass Series on Leveraging Digital Technology for Transformational Development for young Africans.",
      link: "#",
      linkText: "View Event"
    },
    {
      outlet: "WAAW Foundation",
      summary: "Featured as Guest Speaker for \"Unleashing Tomorrow's Innovators: Mastering Digital Skills and Entrepreneurship for Young Minds\" in October 2023.",
      link: "https://www.waawfoundation.org",
      linkText: "View Event"
    },
    {
      outlet: "Global TV",
      summary: "Appeared on Global TV for a televised discourse on \"Building Scalable Innovation Ecosystems for Nigeria's Future\" aired 7th April 2026.",
      link: "#",
      linkText: "Watch Feature"
    }
  ];

  return (
    <section className="bg-[#060f1e] py-[60px] px-6 md:px-16 border-y border-blue-400/10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-[0.72rem] font-bold tracking-[3px] uppercase text-white/35 text-center mb-9">
          As Featured In
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-5">
            {features.map((feature, index) => (
              <CarouselItem key={index} className="pl-5 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div 
                  className="bg-linear-to-br from-[#0a1e3d] to-[#0d2347] border border-blue-400/20 rounded-xl p-[22px] flex flex-col gap-2.5 transition-colors duration-200 hover:border-blue-400/45 group h-full"
                >
                  <div className="text-[0.9rem] font-extrabold text-white tracking-[0.3px]">
                    {feature.outlet}
                  </div>
                  <div className="text-[0.83rem] text-[#b8cde8] leading-[1.7] flex-1">
                    {feature.summary}
                  </div>
                  {feature.link !== "#" ? (
                    <Link 
                      href={feature.link}
                      target="_blank"
                      className="inline-flex items-center text-[0.78rem] font-bold text-blue-400 tracking-[0.3px] mt-1 hover:text-white transition-colors"
                    >
                      {feature.linkText}
                      <ArrowUpRight className="ml-1 items-center h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center text-[0.78rem] font-bold text-blue-400 tracking-[0.3px] mt-1 opacity-60 cursor-not-allowed">
                      {feature.linkText}
                      <ArrowUpRight className="ml-1 items-center h-3.5 w-3.5 opacity-50" />
                    </span>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white" />
          <CarouselNext className="hidden md:flex -right-12 bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
}
