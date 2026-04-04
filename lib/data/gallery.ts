export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
  date?: string
  description?: string
}

export const galleryImages: GalleryImage[] = [
  // Speaking & Education
  {
    id: 'speak-3',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-ggu-class-gePGVyfxAWc3DTHxqARTXf683qVmDn.jpeg',
    alt: 'Academic Leadership at Golden Gate University',
    category: 'Speaking',
    date: 'Fall 2024',
    description: 'Engaging with doctoral peers and faculty at Golden Gate University, San Francisco. This represents the intersection of my technical background and business administration research.'
  },
  {
    id: 'edu-1',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-graduation-group-U0Ief3QZm0ncGZWiI6L15vJTwg6GPC.jpeg',
    alt: 'Global Academic Milestones',
    category: 'Education',
    date: 'Summer 2024',
    description: 'Celebrating academic success with a global cohort. My educational journey has always been about bridging different cultures and technical ecosystems.'
  },
  {
    id: 'google-1',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-google-sgjrJ3k8b1RsDseWhb5U5chCWAcU5y.jpeg',
    alt: 'Silicon Valley Immersion: Google Campus',
    category: 'Experience',
    date: 'Spring 2024',
    description: 'A deep dive into the heart of global innovation. Visiting Google HQ provided critical insights into how technical infrastructure scales to serve billions.'
  },
  {
    id: 'venture-3',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-asml-TWMFuD2M31eDZVqVw6jzyPgQXabWTn.jpeg',
    alt: 'Precision Engineering at ASML',
    category: 'Ventures',
    date: 'Winter 2023',
    description: 'Operating at the absolute frontier of semiconductor technology. My work at ASML in the Netherlands involved some of the most complex mechanical engineering systems in existence.'
  },
  {
    id: 'venture-1',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-nortek-vessel-lp8EnhMnaNdx41YcrdE0pZYbOvP2o2.jpeg',
    alt: 'Ocean Sensing Infrastructure: Notek',
    category: 'Ventures',
    date: 'Summer 2023',
    description: 'Deploying subsea technology and oceanographic sensors. This project highlighted the importance of robust engineering in extreme environments.'
  },
  {
    id: 'speak-1',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-3dprint-flyer-msgsboAM7k8h5R9oI3lEjqBES1va09.jpeg',
    alt: 'Empowering Next-Gen Builders',
    category: 'Speaking',
    date: 'Spring 2023',
    description: 'Leading a 3D Printing masterclass. I am deeply committed to hands-on technical education and empowering the next generation of engineers in Africa.'
  },
  {
    id: 'award-1',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-ggu-cert-iRTbKX2r39pyDvcT7XZfW1DMaB5SL7.jpeg',
    alt: 'Academic Distinction',
    category: 'Awards',
    date: 'Annual 2023',
    description: 'Recognition for academic excellence at Golden Gate University. My research focuses on the comparison of deep tech ecosystems between Nigeria and the Netherlands.'
  },
  {
    id: 'edu-3',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/destiny-dss-HQglyB8mraB2DMssIAFh1veYRUOE0j.jpeg',
    alt: 'Doctoral Residency: Professional Identity',
    category: 'Education',
    date: 'Winter 2022',
    description: 'Captured during a doctoral residency. This period marked a significant shift in my perspective, from a pure engineer to an innovation strategist.'
  },
]

export const galleryCategories = ['All', 'Speaking', 'Ventures', 'Experience', 'Awards', 'Education']
