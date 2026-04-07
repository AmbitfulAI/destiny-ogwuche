export interface PhotoAsset {
  id: string
  src: string
  alt: string
  category: "Speaking" | "Ventures" | "Experience" | "Awards" | "Education" | "Field" | "Moments"
  date?: string
}

export const photoAssets: PhotoAsset[] = [
  {
    id: 'photo-1',
    src: '/images/platform/WhatsApp Image 2026-04-06 at 16.12.11 (2).jpeg',
    alt: 'Golden Gate Bridge Networking',
    category: 'Experience',
    date: 'Spring 2024'
  },
  {
    id: 'photo-2',
    src: '/images/platform/20250820_131323.jpg.jpeg',
    alt: 'Industrial Infrastructure Site Visit',
    category: 'Field',
    date: 'Summer 2024'
  },
  {
    id: 'photo-3',
    src: '/images/platform/IMG-20250821-WA0202.jpg.jpeg',
    alt: 'San Francisco Innovation Hub',
    category: 'Experience',
    date: 'Summer 2024'
  },
  {
    id: 'photo-4',
    src: '/images/platform/WhatsApp Image 2026-04-06 at 16.12.11.jpeg',
    alt: 'Professional Leadership Moment',
    category: 'Moments',
    date: 'Spring 2024'
  },
  {
    id: 'photo-5',
    src: '/images/platform/WhatsApp Image 2026-04-06 at 16.12.11 (1).jpeg',
    alt: 'Executive Meeting Dutch Ecosystem',
    category: 'Moments',
    date: 'Spring 2024'
  },
  {
    id: 'photo-6',
    src: '/images/platform/20231208_134100(0).jpg.jpeg',
    alt: 'Technical Event Participation',
    category: 'Ventures',
    date: 'Winter 2023'
  },
  {
    id: 'photo-7',
    src: '/images/platform/20231208_134945.jpg.jpeg',
    alt: 'Deep Tech Forum Speaker',
    category: 'Speaking',
    date: 'Winter 2023'
  },
  {
    id: 'photo-8',
    src: '/images/platform/20240402_112755.jpg.jpeg',
    alt: 'Research Facilities Tour',
    category: 'Education',
    date: 'Spring 2024'
  },
  {
    id: 'photo-9',
    src: '/images/platform/20240402_112903.jpg.jpeg',
    alt: 'Collaborative Engineering Space',
    category: 'Field',
    date: 'Spring 2024'
  },
  {
    id: 'photo-10',
    src: '/images/platform/20231208_134323.jpg.jpeg',
    alt: 'Venture Capital Summit',
    category: 'Ventures',
    date: 'Winter 2023'
  },
  {
    id: 'photo-11',
    src: '/images/platform/20230903_121427.jpg.jpeg',
    alt: 'Lagos State Government Summit',
    category: 'Speaking',
    date: 'Fall 2023'
  },
  {
    id: 'photo-12',
    src: '/images/platform/20230924_121120.jpg.jpeg',
    alt: 'Plateau State Strategy Session',
    category: 'Experience',
    date: 'Fall 2023'
  },
  {
    id: 'photo-13',
    src: '/images/platform/20231018_122310.jpg.jpeg',
    alt: 'Netherlands Innovation Mission',
    category: 'Experience',
    date: 'Fall 2023'
  },
  {
    id: 'photo-14',
    src: '/images/platform/20230706_155040.jpg.jpeg',
    alt: 'Phlebotomy Robotic Device Validation',
    category: 'Field',
    date: 'Summer 2023'
  },
  {
    id: 'photo-15',
    src: '/images/platform/IMG_20210121_211710_064.jpg.jpeg',
    alt: 'Early Tech Ventures Research',
    category: 'Moments',
    date: 'Winter 2021'
  },
  {
    id: 'photo-16',
    src: '/images/platform/IMG_20191102_083516_299.jpg.jpeg',
    alt: 'Technical Masterclass',
    category: 'Education',
    date: 'Late 2019'
  },
]

export const photoCategories = ["All", "Speaking", "Ventures", "Experience", "Education", "Field", "Moments"]
