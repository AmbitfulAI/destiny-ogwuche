export interface BoardRole {
  title: string
  position: string
  period: string | null
  description: string
}

export const boardRoles: BoardRole[] = [
  {
    title: "Team for the Planet",
    position: "Non-Executive Board Member",
    period: "2023 to Present",
    description: "Contributing to a global non-profit movement building innovations to reduce greenhouse gas emissions at scale. I help shape strategic direction for a community that believes business can and must fight climate change."
  },
  {
    title: "Centre for Entrepreneurship Education, Glasgow Scotland",
    position: "Adviser",
    period: "2020 to Present",
    description: "I advise and refine business strategies for students and young entrepreneurs in the Glasgow community. Giving back to the city that gave me my MSc feels like the most natural thing in the world."
  },
  {
    title: "Engicom",
    position: "Innovation Advisor",
    period: "2022 to Present",
    description: "Advising an early-stage startup on innovation strategy and technical development roadmap — helping founders avoid the pitfalls I navigated early in my own entrepreneurial journey."
  },
  {
    title: "Think Like a VC, Global Student Venture Challenge",
    position: "Judge, The First Memo, 14 Countries",
    period: null,
    description: "Really enjoyed serving as a judge for this Global Student Venture Challenge. What stood out most was the quality of students' thinking across 14 countries. Evaluating venture opportunities requires more than enthusiasm. It demands structured reasoning, market intuition and the ability to separate signal from noise. Many participants demonstrated exactly that. Congratulations to the winners and all participants who adopted the mindset of investors and operators. Kudos to Rajeev Nayan Vaishnav and his team for creating a platform that pushes students to think rigorously about venture building and capital allocation."
  },
  {
    title: "Triple Braid Christian School, Jos Nigeria",
    position: "Guest Speaker and Career Day Honouree",
    period: "2022",
    description: "Received an Award of Recognition for delivering an inspiring career talk to high school students in Northern Nigeria. The beautiful minds we groom today are the minds that will spur the next frontiers."
  },
  {
    title: "Paths for All Scotland",
    position: "Certified Walk Leader",
    period: "January 2020",
    description: "Certified as a Walk Leader by Paths for All Scotland. Leadership shows up in every form. Sometimes the most important walk is the one you take in your community."
  }
]
