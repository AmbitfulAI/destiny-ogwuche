export interface Venture {
  // Two or three sentences shown first; the full description opens below it.
  summary?: string
  name: string
  role: string
  description: string
  link: string | null
}

export interface Innovation {
  // Two or three sentences shown first; the full description opens below it.
  summary?: string
  name: string
  subtitle: string
  description: string
}

export const ventures: Venture[] = [
  {
    name: "Ambitful AI",
    summary: "An opportunity intelligence platform that helps ambitious people, especially in Africa, find and win opportunities they would otherwise never hear about. The Sun and Daily Assets covered it on launch day.",
    role: "Founder",
    description: "I founded Ambitful AI to solve what I call a trillion-dollar problem, the absence of real infrastructure for opportunity discovery and optimisation. We have built a trillion-dollar opportunity system and the problem we solve is simple but enormous: in some places it shows up as exclusion, in others as inefficiency. Same system. Same gap. That is what we are solving. Ambitful AI helps individuals especially in Africa find and access opportunities they would otherwise never know existed. We have built a system that closes the gap between human potential and the opportunities available to match it. Featured in The Sun and Daily Assets on our very first day of launch. Since launching we received a wave of messages, feedback and \"this is exactly what I needed\" moments. Honestly it was incredible to see.",
    link: "https://ambitful.ai"
  },
  {
    name: "Tellit.io",
    summary: "A platform for Nigerian youth to share their voices, stories and ideas, built as an archive of a generation speaking up about its country.",
    role: "Co-Founder and CEO",
    description: "I co-founded and led Tellit as CEO, a platform built to give Nigerian youth a place to share their voices, stories and ideas with the world. At a time when Nigeria needed young people to speak up, Tellit was the archive. \"The world cannot wait to hear from you. The archives are waiting to place your notes on a shelf for future references. Write it down.\" Those were my words then and I still believe them. Tellit was more than a platform. It was a movement — a call for the youth to become active participants in shaping the narrative of their country.",
    link: "https://tellit.io"
  },
  {
    name: "Meyana Bio Energy",
    summary: "A 12-person cleantech venture building a modular waste-to-electricity bioreactor, funded with $155K of non-dilutive grants from Innovate UK and C40 Cities.",
    role: "Co-Founder and Group Lead Engineering",
    description: "I co-founded and led this 12-person deep tech cleantech venture for 6 years. We built a novel modular waste-to-electricity bioreactor. I personally secured $155K in non-dilutive funding from Innovate UK and C40 Cities. I directed investment strategy, managed key stakeholder relationships and led technical partnerships. It was my first experience building something from nothing and it shaped every entrepreneurial decision I have made since.",
    link: null
  }
]

export const innovations: Innovation[] = [
  {
    name: "Additive Manufacturing Masterclass",
    summary: "A two-part masterclass on 3D printing, from material science to model-based design. All proceeds went through the Naza Agape Foundation to feed a community in Ibadan during the Covid-19 lockdown.",
    subtitle: "Host and Facilitator, April 2020",
    description: "I hosted a two-part masterclass on 3D printing and additive manufacturing. Part 1 was free and covered the material science of 3D printing, pre-processing techniques, post-processing techniques and printing your design. Part 2 covered advanced trends in 3D printing drawing from my European vs African experience, introduction to model-based design for 3D printing architecture and hot research topics for 3D printing and its future. All proceeds were donated to charity through the Naza Agape Foundation. Knowledge shared with purpose. By the end of May 2020, the money realised was used to provide food to a less privileged community at Ibadan during the Covid-19 lockdown."
  },
  {
    name: "Bristol Fighter 2 Flight Simulator",
    summary: "For my MSc dissertation I modelled the Bristol Fighter 2 aircraft on the University of Glasgow's Daedalus flight simulator, a goal I had carried since my first visit to TU Delft in 2017.",
    subtitle: "MSc Dissertation, Aerospace Engineering",
    description: "I modelled the Bristol Fighter 2 Aircraft using the University of Glasgow's Daedalus flight simulator for my MSc dissertation. I had dreamed of this since 2017 when I first saw a simulator at TU Delft and could not gain access. I deliberately chose my dissertation topic in aerospace engineering to make this dream happen and modelled the Bristol Fighter 2 Aircraft using the University of Glasgow Flight Simulator. The simulator is named after Daedalus — a phenomenal Greek sage who according to Greek mythology built wings made of wax in order for him and his son Icarus to escape after being imprisoned by King Minos of Crete. Never give up on your dreams. That is not a cliché. It is engineering strategy."
  },
  {
    name: "Robotic Fire Vehicle",
    summary: "A dual-mode robotic fire vehicle, autonomous or remote-controlled over radio frequency, built as my undergraduate project and published in a peer-reviewed engineering journal in 2019.",
    subtitle: "Lead Inventor, Undergraduate Project",
    description: "I designed and built a dual-mode robotic fire vehicle using Radio Frequency technology as my undergraduate final project. The vehicle could operate autonomously or be remotely controlled to navigate fire environments. It was later co-published in a peer-reviewed engineering journal at FUOYE in 2019. Looking back this was the moment the engineer and the entrepreneur in me first shook hands. I was not just solving an academic problem. I was trying to solve a real one."
  },
  {
    name: "Glasgow University Robotics Society",
    summary: "Built battery chargers and helped implement the Experiment module for the society's Eurobot competition team.",
    subtitle: "Eurobot Subgroup",
    description: "I was part of the Glasgow University Robotics Society Eurobot Subgroup where I worked on building battery chargers and helped implement \"the Experiment\" which is a piece of the entire design. I saw an enhancement in both my hard and soft skills particularly in my communicative abilities, emotional intelligence, teamwork and task collaboration."
  }
]
