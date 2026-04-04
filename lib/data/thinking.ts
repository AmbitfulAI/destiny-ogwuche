import { Globe, BookOpen, BarChart3, Heart, Users, Zap, type LucideIcon } from "lucide-react"

export interface Trait {
  icon: LucideIcon
  title: string
  description: string
}

export const traits: Trait[] = [
  {
    icon: Globe,
    title: "Africa Champion",
    description: "I consistently advocate for deeptech investment in Nigeria and Africa. I use data — WIPO's Global Innovation Index, ecosystem reports — to back bold claims. \"I am not just pointing at the map. I am staking a claim.\""
  },
  {
    icon: BookOpen,
    title: "Storyteller First",
    description: "Every piece I write begins with a personal story — a rejection, a dream deferred, a mentor's words from 2015. I earn trust before I share insights. Always."
  },
  {
    icon: BarChart3,
    title: "Evidence-Based",
    description: "I reference MIT ecosystem models, Kepner-Tregoe analysis and Metcalfe's Law. I bring doctoral-level rigour to accessible writing. I do not guess. I analyse."
  },
  {
    icon: Heart,
    title: "Genuinely Human",
    description: "I use humour naturally. \"Okay I made that up haha.\" I never take myself too seriously even while discussing venture capital ethics or the future of AI."
  },
  {
    icon: Users,
    title: "Community First",
    description: "I celebrate others' wins publicly. I mentor high school students in Jos. I speak at conferences across Africa and Europe. Leadership is not a title. It is a daily decision."
  },
  {
    icon: Zap,
    title: "Urgent Optimist",
    description: "\"The future is tired of waiting for us.\" I see massive systemic problems as massive opportunities. I do not just observe the gap. I build bridges across it."
  }
]
