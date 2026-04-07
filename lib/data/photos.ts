import { StaticImageData } from "next/image"

// Large Assets (Using string paths to bypass build-time decoding errors)
const industrialSite = "/images/platform/industrial_infrastructure.jpg"

// Standard Assets (Using direct imports for optimization)
import goldenGateBridge from "@/lib/images/golden_gate_bridge.jpg"
import innovationHub from "@/lib/images/innovation_hub.jpg"
import leadershipMoment from "@/lib/images/leadership_moment.jpg"
import executiveMeeting from "@/lib/images/executive_meeting.jpg"
import techEvent from "@/lib/images/technical_event.jpg"
import speakingForum from "@/lib/images/deep_tech_forum.jpg"
import researchFacility from "@/lib/images/research_facility.jpg"
import engineeringSpace from "@/lib/images/engineering_space.jpg"
import vcSummit from "@/lib/images/vc_summit.jpg"
import govSummit from "@/lib/images/lagos_summit.jpg"
import strategySession from "@/lib/images/strategy_session.jpg"
import innovationMission from "@/lib/images/innovation_mission.jpg"
import labVerification from "@/lib/images/lab_verification.jpg"
import earlyResearch from "@/lib/images/early_research.jpg"
import earlyMasterclass from "@/lib/images/early_masterclass.jpg"

export interface PhotoAsset {
  id: string
  src: StaticImageData | string
  alt: string
  category: "Speaking" | "Ventures" | "Experience" | "Awards" | "Education" | "Field" | "Moments"
  date?: string
}

export const photoAssets: PhotoAsset[] = [
  {
    id: 'photo-1',
    src: goldenGateBridge,
    alt: 'Golden Gate Bridge Networking',
    category: 'Experience',
    date: 'Spring 2024'
  },
  {
    id: 'photo-2',
    src: industrialSite,
    alt: 'Industrial Infrastructure Site Visit',
    category: 'Field',
    date: 'Summer 2024'
  },
  {
    id: 'photo-3',
    src: innovationHub,
    alt: 'San Francisco Innovation Hub',
    category: 'Experience',
    date: 'Summer 2024'
  },
  {
    id: 'photo-4',
    src: leadershipMoment,
    alt: 'Professional Leadership Moment',
    category: 'Moments',
    date: 'Spring 2024'
  },
  {
    id: 'photo-5',
    src: executiveMeeting,
    alt: 'Executive Meeting Dutch Ecosystem',
    category: 'Moments',
    date: 'Spring 2024'
  },
  {
    id: 'photo-6',
    src: techEvent,
    alt: 'Technical Event Participation',
    category: 'Ventures',
    date: 'Winter 2023'
  },
  {
    id: 'photo-7',
    src: speakingForum,
    alt: 'Deep Tech Forum Speaker',
    category: 'Speaking',
    date: 'Winter 2023'
  },
  {
    id: 'photo-8',
    src: researchFacility,
    alt: 'Research Facilities Tour',
    category: 'Education',
    date: 'Spring 2024'
  },
  {
    id: 'photo-9',
    src: engineeringSpace,
    alt: 'Collaborative Engineering Space',
    category: 'Field',
    date: 'Spring 2024'
  },
  {
    id: 'photo-10',
    src: vcSummit,
    alt: 'Venture Capital Summit',
    category: 'Ventures',
    date: 'Winter 2023'
  },
  {
    id: 'photo-11',
    src: govSummit,
    alt: 'Lagos State Government Summit',
    category: 'Speaking',
    date: 'Fall 2023'
  },
  {
    id: 'photo-12',
    src: strategySession,
    alt: 'Plateau State Strategy Session',
    category: 'Experience',
    date: 'Fall 2023'
  },
  {
    id: 'photo-13',
    src: innovationMission,
    alt: 'Netherlands Innovation Mission',
    category: 'Experience',
    date: 'Fall 2023'
  },
  {
    id: 'photo-14',
    src: labVerification,
    alt: 'Phlebotomy Robotic Device Validation',
    category: 'Field',
    date: 'Summer 2023'
  },
  {
    id: 'photo-15',
    src: earlyResearch,
    alt: 'Early Tech Ventures Research',
    category: 'Moments',
    date: 'Winter 2021'
  },
  {
    id: 'photo-16',
    src: earlyMasterclass,
    alt: 'Technical Masterclass',
    category: 'Education',
    date: 'Late 2019'
  },
]

export const photoCategories = ["All", "Speaking", "Ventures", "Experience", "Education", "Field", "Moments"]
