// Single source of truth for the book. Fill the TODO fields once you have them;
// pages and schema read from here, so nothing else needs to change.

export const SITE_URL = "https://www.destinyogwuche.com";

// "Destiny Ogwuche" is the name people search for, so it is the primary name in
// titles, headings and schema. The other forms are linked to it as alternate names.
export const author = {
  name: "Destiny Ogwuche",
  fullName: "Destiny Innosuccess Ogwuche",
  // The name printed on the cover. Amazon, Goodreads and Google Books copy it exactly.
  coverName: "Destiny I. Ogwuche",
  alternateNames: ["Destiny Innosuccess Ogwuche", "Destiny I. Ogwuche", "Innosuccess Ogwuche", "Ogwuche Destiny Innosuccess"],
  jobTitle: "Deep tech engineer, entrepreneur and author",
  image: `${SITE_URL}/images/platform/professional_portrait.jpg`,
  linkedin: "https://www.linkedin.com/in/ogwuche-destiny-innosuccess/",
  email: "ogwuche.innosuccess@gmail.com",
  // Add each profile URL here as you create it (ORCID, Google Scholar, Goodreads,
  // Amazon Author Central, Wikidata, Crunchbase, Substack...). These become schema sameAs.
  sameAs: [
    "https://www.linkedin.com/in/ogwuche-destiny-innosuccess/",
  ] as string[],
  bioOneLine:
    "Destiny Ogwuche is a Nigerian-born, Netherlands-based deep tech engineer and the author of Towards Deep Tech in Africa.",
  bio50:
    "Destiny Ogwuche (Destiny Innosuccess Ogwuche) is a Nigerian-born, Netherlands-based deep tech engineer, founder of Ambitful AI and author of Towards Deep Tech in Africa: Building the Ground We Stand On. He has worked on hard technology at ASML, Skytree and Vitestro, and his doctoral research compares deep tech ecosystems in Nigeria and the Netherlands.",
  bio150:
    "Destiny Ogwuche (Destiny Innosuccess Ogwuche) is a Nigerian-born deep tech engineer, entrepreneur and researcher based in the Netherlands. He has spent a decade building and validating hard technology, including as a systems engineer at ASML, at the carbon capture company Skytree and at Nortek, and led verification and validation of the world's first autonomous robotic phlebotomy device at Vitestro. His doctoral research at Golden Gate University compared deep tech ecosystems in Nigeria and the Netherlands using the MIT iEcosystem Model, drawing on six years of data and 22 interviews with founders, investors, academics and policymakers. That study became his book, Towards Deep Tech in Africa: Building the Ground We Stand On. He is the founder of Ambitful AI, an opportunity intelligence platform, and a fellow of the VC Lab Venture Institute. He holds an MSc in Mechatronics from the University of Glasgow and a BEng from the Federal University of Technology, Minna.",
  alumniOf: [
    "Golden Gate University",
    "University of Glasgow",
    "Federal University of Technology, Minna",
  ],
};

export const book = {
  slug: "towards-deep-tech-in-africa",
  path: "/book/towards-deep-tech-in-africa",
  title: "Towards Deep Tech in Africa",
  subtitle: "Building the Ground We Stand On",
  fullTitle: "Towards Deep Tech in Africa: Building the Ground We Stand On",
  // TODO: fill these when known.
  isbn: null as string | null,
  publisher: null as string | null,
  datePublished: null as string | null, // "YYYY-MM-DD"
  // Placeholder: the manuscript cover. Replace the file when the final cover is chosen.
  coverImage: `${SITE_URL}/images/book/cover.jpg` as string | null,
  coverPath: "/images/book/cover.jpg",
  shareImagePath: "/images/book/share.jpg",
  // Shown on the site until a confirmed date and pre-order links exist.
  launchLabel: "Coming January 2027",
  preorderLinks: [] as { label: string; url: string }[],
  inLanguage: "en",
  genre: ["Innovation", "Technology policy", "Economic development", "Entrepreneurship"],
  keywords: [
    "deep tech",
    "deep tech in Africa",
    "Nigeria",
    "Netherlands",
    "innovation ecosystems",
    "venture capital",
    "technology sovereignty",
    "MIT iEcosystem Model",
  ],
  pitch:
    "Africa's deep tech gap is real, but it is not a shortage of talent or money. It is missing ground: conditions that can be designed, and this book shows what to build.",
  description:
    "An engineer who validated hard technology in Dutch laboratories asks why deep tech grows in one place and not another. Drawing on a doctoral study of Nigeria and the Netherlands, six years of data and 22 interviews with founders, investors and policymakers, Destiny Ogwuche finds that the obstacles are gates, not scarcity. He names the conditions that let a place build hard things and keep what they are worth, and calls the result sovereignty by design.",
  longDescription: [
    "By the time he was eleven, Destiny Ogwuche had worked out that the difference between him and a hundred equally hungry children in Otukpo was not talent. It was access: a new school down the road, and a key to its laboratory. Twenty years later, after working inside some of Europe's most advanced engineering companies, he set out to answer a question that would not leave him: what, mechanically, makes deep technology grow in one place and not in another?",
    "His doctoral study compared Nigeria and the Netherlands across six years and five indicators. The gaps were real: about fifty times more venture capital per person in the Netherlands, and about a hundred and fourteen times more when the money had to reach hard technology. But the founders, investors, academics and policymakers he interviewed kept describing their obstacles differently, less as something missing than as something in the way.",
    "Towards Deep Tech in Africa follows a founder who argued with a ministry over whether a tricycle is a vehicle, an investor who tried to fund a shared laboratory, a founder who begged for a science park, and a policymaker trying to change the state from inside. From their stories it builds a practical design: open the gate, see what you are doing, carry results across, keep what you build, and last longer than the technology takes.",
    "It is a book for builders, investors and the people who govern them, in Africa and in Europe. Its conclusion is hopeful and specific: nothing is wrong with the people; what is missing is the ground, and ground is something human beings know how to pour.",
  ],
  stats: {
    words: 97000,
    chapters: 15,
    interviews: 22,
    yearsOfData: "2020 to 2025",
  },
  parts: [
    {
      name: "Part One: Where We Stand",
      summary:
        "Four chapters that take apart the story the world tells about African technology, and find something stranger and more hopeful underneath: not scarcity, but gates.",
      chapters: [
        "The Scarcity Story Is Wrong",
        "Why the World Cannot See Deep Tech",
        "Build Here, Own Elsewhere",
        "There Is No \"The\" Ecosystem",
      ],
    },
    {
      name: "Part Two: Who Builds",
      summary:
        "The founders, engineers and diaspora who build anyway, and what the missing ground costs them.",
      chapters: [
        "Building the Ground You Stand On",
        "The Unexitable Workshop",
        "Drive Without Depth, Depth Without Drive",
        "Drain, Circulation or Asset",
        "The Resilience Dividend",
      ],
    },
    {
      name: "Part Three: What We Build",
      summary:
        "The designs the evidence points to, from rules and shared labs to staged capital, first customers and patient institutions.",
      chapters: [
        "Open the Gate",
        "The Commons Deep Tech Needs",
        "Money at the Right Stage",
        "The Bridge",
        "Patient, Capable, Legible",
        "Sovereign by Design",
      ],
    },
  ],
  audiences: [
    { who: "Builders", what: "Engineers and founders in Africa and the diaspora working on hardware, energy, health and AI." },
    { who: "Investors", what: "VCs, development finance institutions and foundations deciding what to fund in Africa." },
    { who: "Policymakers", what: "Ministries, agencies and legislators who want to know what to build first, and what it costs." },
    { who: "Europe's innovation community", what: "The Netherlands appears as a peer, with its own scale-up cliff and lessons to learn." },
  ],
  faq: [
    {
      q: "What is Towards Deep Tech in Africa about?",
      a: "It asks why deep technology, businesses built on real advances in science or engineering, grows in some places and not others. Using a doctoral study of Nigeria and the Netherlands, it argues that Africa's gap is not caused by a shortage of talent or money but by missing conditions, which it calls the ground, and it sets out what to build.",
    },
    {
      q: "Who wrote Towards Deep Tech in Africa?",
      a: "Destiny Ogwuche (Destiny Innosuccess Ogwuche), a Nigerian-born, Netherlands-based deep tech engineer who has worked at ASML, Skytree and Vitestro, founder of Ambitful AI and doctoral researcher.",
    },
    {
      q: "What research is the book based on?",
      a: "A comparative doctoral study of deep tech ecosystems in Nigeria and the Netherlands using the MIT iEcosystem Model: six years of figures (2020 to 2025) across five indicators, and 22 interviews with founders, investors, academics and policymakers in both countries.",
    },
    {
      q: "What does deep tech mean?",
      a: "Deep tech is a business built on a real advance in science or engineering, not just a new idea for using the science we already have. The book offers a three-question test to tell it apart from the shallow kind.",
    },
    {
      q: "Is the book only about Nigeria?",
      a: "Its original evidence comes from Nigeria and the Netherlands. Where it discusses the rest of Africa, such as South Africa, Rwanda or Kenya, it draws on published cases and says so, and each chapter ends with a box separating what the study found from what is known elsewhere and what is the author's judgement.",
    },
    {
      q: "What books is it similar to?",
      a: "Readers of The Prosperity Paradox, The Entrepreneurial State, How Asia Works and Chip War will find it closest in spirit. It also talks back to The Lean Startup and Zero to One by asking what happens when slow, physical technology is judged by software-speed yardsticks.",
    },
    {
      q: "When is the book published?",
      a: "The book is planned for January 2027. Sign up for the free sample chapter to hear first when pre-orders open.", // TODO: update when the date is confirmed
    },
  ],
};
