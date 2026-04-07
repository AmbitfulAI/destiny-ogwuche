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
  {
    id: 'sf-bloom-1',
    src: '/images/platform/IMG-20250821-WA0202.jpg.jpeg',
    alt: 'Innovation Ecosystems: San Francisco',
    category: 'Experience',
    date: 'Summer 2024',
    description: 'Exploring the vibrant innovation culture in San Francisco. This environment serves as a constant inspiration for how technical talent and venture capital can create global impact.'
  },
  {
    id: 'gg-bridge-1',
    src: '/images/platform/WhatsApp Image 2026-04-06 at 16.12.11 (2).jpeg',
    alt: 'Bridging Global Tech Networks',
    category: 'Experience',
    date: 'Spring 2024',
    description: 'Collaborating with global peers at the Golden Gate Bridge. Networking at this scale is essential for understanding the international flow of deep tech innovation.'
  },
  {
    id: 'nl-windmill-1',
    src: '/images/platform/20250820_131323.jpg.jpeg',
    alt: 'Contextual Engineering: The Netherlands',
    category: 'Ventures',
    date: 'Spring 2024',
    description: 'Connecting technical infrastructure with local context. My work in the Netherlands bridges the gap between European institutional strengths and emerging market agility.'
  },
  {
    id: 'prod-portrait-1',
    src: '/images/platform/WhatsApp Image 2026-04-06 at 16.12.11.jpeg',
    alt: 'Digital Leadership Identity',
    category: 'Awards',
    date: 'Spring 2024',
    description: 'A moment of reflection on the journey of building Ambitful AI. This role requires balancing the precision of an engineer with the vision of an entrepreneur.'
  },
]

export const galleryCategories = ['All', 'Speaking', 'Ventures', 'Experience', 'Awards', 'Education']
