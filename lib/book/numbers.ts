// Headline figures from the doctoral study behind "Towards Deep Tech in Africa".
// Page: /book/deep-tech-numbers. Keep every figure exactly as stated in the manuscript.

export const study = {
  name: "Comparative Analysis of Deep Tech Ecosystems: the Netherlands and Nigeria, using the MIT iEcosystem Model",
  institution: "Golden Gate University (Doctor of Business Administration)",
  period: "2020 to 2025",
  interviews: 22,
  method:
    "Six years of national and international statistics, converted to US dollars at annual average rates and tested for whether differences hold, plus 22 interviews (coded P1 to P22) with founders, investors, academics and policymakers in both countries.",
};

export type Figure = {
  id: string;
  headline: string; // the quotable line
  detail: string;
  scope: "study" | "published"; // study = the author's own data; published = other public sources
};

export const figures: Figure[] = [
  {
    id: "vc-per-person",
    headline: "About 50 to 1: venture capital per person, the Netherlands versus Nigeria",
    detail:
      "Venture capital averaged just over US$192 per Dutch person per year against US$3.86 per Nigerian, from 2020 to 2025.",
    scope: "study",
  },
  {
    id: "deep-tech-vc",
    headline: "About 114 to 1: venture capital going into deep tech",
    detail:
      "Some US$1.1 billion a year in the Netherlands against an average of US$9.67 million a year in Nigeria.",
    scope: "study",
  },
  {
    id: "deep-tech-2022",
    headline: "About US$2,000: Nigeria's total deep tech venture capital in 2022",
    detail: "For the whole country, for the whole year.",
    scope: "study",
  },
  {
    id: "deep-tech-share",
    headline: "Near zero versus a third to a half: deep tech's share of venture capital",
    detail:
      "Deep tech's share of venture capital fell to almost nothing in Nigeria by 2022 but held between a third and a half in the Netherlands.",
    scope: "study",
  },
  {
    id: "rd-share",
    headline: "About 7 times: research and development spending as a share of the economy",
    detail:
      "The Netherlands spent about seven times as much of its economic output on research and development as Nigeria.",
    scope: "study",
  },
  {
    id: "graduates",
    headline: "Nearly 3 times: science and engineering graduates per head",
    detail: "The Netherlands produced nearly three times as many science and engineering graduates per head.",
    scope: "study",
  },
  {
    id: "remittances",
    headline: "About 13 times: remittances versus foreign direct investment in Nigeria, 2024",
    detail:
      "Nigeria received around US$20.9 billion in personal remittances in 2024 against about US$1.61 billion of foreign direct investment and about US$4.13 billion of official development assistance.",
    scope: "published",
  },
  {
    id: "gerd-2023",
    headline: "R&D spending, share of GDP, 2023: Israel 6.35%, South Korea 4.96%, Netherlands 2.2%, Nigeria not reported",
    detail:
      "OECD figures. As far as the author could establish, no official Nigerian research-spending figure has gone to the international statistical system in nearly two decades.",
    scope: "published",
  },
];
