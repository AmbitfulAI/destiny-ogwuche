// The named frameworks from "Towards Deep Tech in Africa: Building the Ground We Stand On".
// Each entry becomes one page at /ideas/[slug]. The `definition` is the quotable first
// sentence AI answer engines pick up, so it must stay one plain sentence.
// `fromTheBook` is the author's own boxed summary from the manuscript.

export type Idea = {
  slug: string;
  term: string;
  alternateNames?: string[];
  definition: string;
  fromTheBook: string;
  whyItMatters: string;
  chapter: string;
  related: string[];
};

export const ideas: Idea[] = [
  {
    slug: "deep-tech",
    term: "Deep tech",
    alternateNames: ["deep technology", "hard tech"],
    definition:
      "Deep tech is a business built on a real advance in science or engineering, not just a new idea for using the science we already have.",
    fromTheBook:
      "Writing an app is like inventing a new recipe from ingredients already on the shelf. Deep tech is discovering a new ingredient the kitchen has never seen, or inventing an oven that cooks in a way no oven cooked before. It is slower and messier, and when you succeed, you hold something the person with the fancy recipe cannot copy.",
    whyItMatters:
      "The book argues deep tech matters for three reasons: it solves the problems that matter most (power, medicine, food, water), it is hard to copy, and it is the difference between renting technology and owning it.",
    chapter: "A Note on Words: What Is Deep Tech, Really?",
    related: ["three-question-test", "software-trap", "sovereign-by-design"],
  },
  {
    slug: "three-question-test",
    term: "The three-question test for deep tech",
    definition:
      "The three-question test is a simple way to tell deep tech from the shallow kind: ask whether it rests on a genuine scientific or engineering breakthrough, whether a good software team could rebuild it in a weekend, and whether it needs laboratories, materials or years to prove.",
    fromTheBook:
      "1. Is it built on a genuine breakthrough in science or engineering, or only on a clever use of things that already exist? 2. Could a good software team simply rebuild it in a weekend? If yes, it is probably not deep. 3. Does it need laboratories, materials, or years to prove, and not just more code? If yes, you are likely looking at the deep end.",
    whyItMatters:
      "The label \"deep tech\" gets borrowed by anything that wants to sound serious. The test is never the industry or the buzzword; it is whether somebody made something exist that did not exist before.",
    chapter: "A Note on Words: What Is Deep Tech, Really?",
    related: ["deep-tech", "software-trap"],
  },
  {
    slug: "the-gate",
    term: "The Gate",
    definition:
      "The Gate is the idea that capital and talent are flows to be permitted, not just stocks to be counted, so an ecosystem with a closed gate reads as scarce when it is really shut.",
    fromTheBook:
      "Capital and talent are not only stocks to be counted. They are flows to be permitted. A closed gate, meaning uncertainty about whether money and people can safely come and go, makes an ecosystem read as scarce when it is really shut. Open the gate and the same inputs begin to move.",
    whyItMatters:
      "It replaces the scarcity story with a different diagnosis. Before you ask for more of an input, ask what is holding the input out: can the money leave, are people safe, and where are the rules?",
    chapter: "Chapter 1: The Scarcity Story Is Wrong",
    related: ["open-the-gate", "sovereign-by-design"],
  },
  {
    slug: "software-trap",
    term: "The Software Trap",
    definition:
      "The Software Trap is the habit of judging slow, physical, expensive deep tech ventures by the yardsticks built for software, so that sound companies look too risky because they are being read in the wrong language.",
    fromTheBook:
      "The world has one dominant idea of what technology is: software, which is fast to build, almost free to copy and quick to sell. Deep tech is slow, physical and expensive, so when it is judged by the software yardstick it usually measures badly. The company is not too risky. It is being read in the wrong language, and the founder pays the difference in time spent translating. Fix the lens before you blame the venture.",
    whyItMatters:
      "In the study, deep tech's share of venture capital fell to almost nothing in Nigeria by 2022 but held between a third and a half in the Netherlands, and participants in both countries described investors struggling to read the category.",
    chapter: "Chapter 2: Why the World Cannot See Deep Tech",
    related: ["right-stage-not-more-money", "deep-tech"],
  },
  {
    slug: "capability-without-capture",
    term: "Capability without capture",
    alternateNames: ["build here, own elsewhere"],
    definition:
      "Capability without capture describes a place that can build a technology but does not own it: the people, skill and work stay local while the money and the compounding asset end up somewhere else.",
    fromTheBook:
      "A place can build the thing and still not own it. Capability is the people, the skill and the work; capture is where the money and the compounding asset finally sit. Ownership, intellectual property and jurisdiction decide capture, and they are chosen by people in rooms, usually early, usually unannounced, usually by whoever is writing the cheque. Building is necessary. Owning is what makes building compound.",
    whyItMatters:
      "It changes the question asked of any venture from \"where is this made?\" to \"where does the value end up, and who decided that?\"",
    chapter: "Chapter 3: Build Here, Own Elsewhere",
    related: ["sovereign-by-design", "drain-circulation-or-asset"],
  },
  {
    slug: "no-the-ecosystem",
    term: "There is no \"the\" ecosystem",
    definition:
      "There is no single national innovation ecosystem: there are tiers of institution, types of venture and levels of founder experience, and the gaps between them inside one country can be as large as the gaps between countries.",
    fromTheBook:
      "There is no single Nigerian ecosystem and no single Dutch one. A national average is a true statement about a population and a poor prediction about a person. Before you accept any claim about \"the ecosystem,\" ask which stratum it is actually describing, and whether you are standing in it.",
    whyItMatters:
      "Policies and investment theses built on national averages miss where conditions actually differ: one campus flourishes while the next starves.",
    chapter: "Chapter 4: There Is No \"The\" Ecosystem",
    related: ["the-commons", "institutions-on-the-technologys-clock"],
  },
  {
    slug: "substitution-tax",
    term: "The substitution tax",
    definition:
      "The substitution tax is the unpaid work a founder does to supply what the ecosystem does not, such as the facility, the trained hire, the missing rule or the uneducated market, paid in time, money and attention a competitor elsewhere spends on the product.",
    fromTheBook:
      "When an ecosystem does not supply something, the founder supplies it: the facility, the trained hire, the missing rule, the uneducated market. This is real work, it produces real value, and nobody invoices for it, which is why it does not appear in the standard measures of how hard it is to build in a given place. Name your substitutions. Then decide which ones to escape, and which one is becoming the thing nobody else can copy.",
    whyItMatters:
      "Standard rankings of how easy it is to build somewhere cannot see this cost, so they understate how hard deep tech is in places with thin infrastructure.",
    chapter: "Chapter 5: Building the Ground You Stand On",
    related: ["unexitable-workshop", "resilience-dividend", "the-commons"],
  },
  {
    slug: "unexitable-workshop",
    term: "The unexitable workshop",
    definition:
      "The unexitable workshop is an improvised workspace that a venture cannot graduate out of, because nothing exists for it to graduate into.",
    fromTheBook:
      "Improvisation is a superpower with an expiry date. Making do with what is at hand genuinely produces innovation, and the products it yields can be better suited to hard conditions than anything designed in comfort. But improvisation is meant to be a stage, not an address. The question that decides a venture's ceiling is not \"how resourceful are you?\" but \"what are you graduating into?\" Build resourcefully. Then build the door.",
    whyItMatters:
      "A Dutch garage and a Nigerian rented warehouse can look alike on day one. The difference is whether there is a shared lab, a test facility or a science park to move into next.",
    chapter: "Chapter 6: The Unexitable Workshop",
    related: ["the-commons", "substitution-tax"],
  },
  {
    slug: "drive-and-depth",
    term: "Drive and depth",
    alternateNames: ["drive without depth, depth without drive"],
    definition:
      "Drive and depth are the two different things usually lumped together as \"talent\": drive is hunger and the willingness to start, while depth is the applied capability that comes only from years of having built and scaled something hard.",
    fromTheBook:
      "Drive is hunger, initiative and the willingness to start, and Nigeria has an extraordinary surplus of it. Depth is applied capability and the accumulated years of having built and scaled something hard, and it is genuinely scarce, because it is made of time rather than money. Advanced economies often hold the reverse position: deep expertise, less hunger. A graduate count measures neither. Ask which one you are short of, because the remedies have nothing in common.",
    whyItMatters:
      "It explains why the Netherlands and Nigeria can learn from each other as peers: each holds in surplus what the other lacks.",
    chapter: "Chapter 7: Drive Without Depth, Depth Without Drive",
    related: ["drain-circulation-or-asset", "resilience-dividend"],
  },
  {
    slug: "drain-circulation-or-asset",
    term: "Drain, circulation or asset",
    definition:
      "Drain, circulation or asset are the three futures possible when skilled people leave a country: drain severs the relationship, circulation keeps it, and asset is departure deliberately designed so that what people gain abroad returns as capability at home.",
    fromTheBook:
      "When skilled people leave, three different futures are possible, and the movement itself does not decide which. Drain is departure with the relationship severed. Circulation is departure with the relationship maintained, so knowledge, capital and standards flow both ways. Asset is departure deliberately designed for, so that what a person gains abroad returns as capability at home. The difference is not geography. It is whether anyone built the relationship on purpose.",
    whyItMatters:
      "In 2024 Nigerians abroad sent home roughly thirteen times what foreign direct investment brought in. The diaspora is one of the largest standing assets Nigeria has, if anyone builds the channels.",
    chapter: "Chapter 8: Drain, Circulation or Asset",
    related: ["drive-and-depth", "capability-without-capture"],
  },
  {
    slug: "resilience-dividend",
    term: "The resilience dividend",
    definition:
      "The resilience dividend is the professional capability that comes from building where the ground is missing: the ability to see a whole system, make very little go very far, and design for conditions that break ordinary products.",
    fromTheBook:
      "When the ground is missing, you have to solve three problems to solve one, and doing that repeatedly builds something a comfortable environment rarely produces. That is a professional capability, not a consolation prize, and there is a market for it in many places. None of which makes the difficulty acceptable. Remove the obstacles, and keep the muscle they built.",
    whyItMatters:
      "Products designed for failing infrastructure can outperform products designed in comfort, which is an export opportunity, not just a survival skill.",
    chapter: "Chapter 9: The Resilience Dividend",
    related: ["substitution-tax", "unexitable-workshop"],
  },
  {
    slug: "open-the-gate",
    term: "Open the gate",
    alternateNames: ["certainty as currency"],
    definition:
      "Open the gate is the principle that before a state funds innovation it should guarantee the conditions under which funding works: published and stable rules, physical safety, and money that can leave again.",
    fromTheBook:
      "Before a state funds innovation, it should guarantee the conditions under which funding works: rules that are published, findable and stable; people who are physically safe; and money that can leave again. None of this requires a large budget, which is why it is available to governments that cannot afford a sovereign fund. A closed gate makes every other intervention leak. The cheapest thing a government can give an ecosystem is not capital. It is certainty.",
    whyItMatters:
      "One founder in the study spent a trip to the capital arguing with officials over whether an electric tricycle counts as a vehicle. Published, stable rules cost almost nothing and unlock everything else.",
    chapter: "Chapter 10: Open the Gate",
    related: ["the-gate", "institutions-on-the-technologys-clock"],
  },
  {
    slug: "the-commons",
    term: "The commons deep tech needs",
    definition:
      "The commons is the shared infrastructure, such as testing, prototyping and certification facilities, that no single firm can own profitably but that makes many ventures possible, which is why the market will not build it and someone must build it on purpose.",
    fromTheBook:
      "Some of the most valuable things an ecosystem needs cannot be owned profitably by anyone. A shared testing and certification facility does not make money for its owner; it makes money possible for everyone who uses it. Its return is counted in the ventures that become possible, not in its own revenue line. One facility can give five, ten or fifteen companies the capability one has now. Ask what your ecosystem is missing that nobody can profitably own, and then build that on purpose.",
    whyItMatters:
      "In the study, an investor who tried to raise money for a shared laboratory found very few backers until the pitch changed to the companies that would come out of it.",
    chapter: "Chapter 11: The Commons Deep Tech Needs",
    related: ["unexitable-workshop", "substitution-tax"],
  },
  {
    slug: "right-stage-not-more-money",
    term: "Right stage, not more money",
    alternateNames: ["the capital staircase"],
    definition:
      "Right stage, not more money is the idea that venture capital is a staircase, not a single quantity, so an ecosystem can have plenty of money at the bottom and none at the top, which looks like abundance in the statistics and feels like a cliff to the founder.",
    fromTheBook:
      "Capital is not one quantity. It is a staircase, and a venture needs a step at every height. The Netherlands has fifty times more venture capital per head than Nigeria and still has a gap, because its gap is at scale-up. Before asking whether there is enough money, ask where on the staircase the step is missing, and what is structurally keeping it empty.",
    whyItMatters:
      "It explains why rich ecosystems still lose companies: the Dutch gap is at scale-up, where very large rounds have few domestic leads.",
    chapter: "Chapter 12: Money at the Right Stage",
    related: ["software-trap", "capability-without-capture"],
  },
  {
    slug: "the-last-mile",
    term: "The last mile",
    alternateNames: ["the bridge"],
    definition:
      "The last mile is the gap between research and a deployed product, which knowledge crosses only when it is carried by people with the mandate and craft to translate it and pulled by a first customer willing to buy the unproven thing.",
    fromTheBook:
      "Knowledge does not diffuse. It is carried, and it is pulled. Carried by translation: people and institutions with the mandate, resources and craft to take a result from paper to deployable product. Pulled by a first customer: an institution willing to buy the unproven thing. An ecosystem can fund research at one end and celebrate innovation at the other and still watch its knowledge die in between, because it built the ceremony of the bridge, offices, policies, demo days, without either end: the carrying or the buying.",
    whyItMatters:
      "Participants in both Nigeria and the Netherlands said this is where knowledge stalls. Public agencies buying first pilots is one of the cheapest fixes available.",
    chapter: "Chapter 13: The Bridge",
    related: ["the-commons", "right-stage-not-more-money"],
  },
  {
    slug: "institutions-on-the-technologys-clock",
    term: "Institutions on the technology's clock",
    alternateNames: ["patient, capable, legible"],
    definition:
      "Institutions on the technology's clock are public bodies built to hold commitments across governments: patient enough to match deep tech's decades-long timelines, capable enough to notice what it needs, and legible enough to measure themselves and tell a fundable story.",
    fromTheBook:
      "Deep tech can take twenty to seventy years to mature, on one academic's estimate. Electoral politics delivers in two to three. No ecosystem survives that mismatch unless somebody builds institutions that hold commitments across governments. These three properties are not money, and money does not substitute for them. A state can be poor and still be patient, capable and legible; a state can be rich and be none of the three. Attention is infrastructure.",
    whyItMatters:
      "A Nigerian federal policymaker in the study set the government's two-to-three-year horizon beside projects that had already run seven or eight years.",
    chapter: "Chapter 14: Patient, Capable, Legible",
    related: ["open-the-gate", "sovereignty-scoreboard"],
  },
  {
    slug: "sovereign-by-design",
    term: "Sovereign by design",
    alternateNames: ["technological sovereignty", "deep tech sovereignty", "the five verbs"],
    definition:
      "Sovereignty in deep tech is the deliberate design of conditions that let a place build hard things and keep what they are worth: open the gate, see what you are doing, carry results across, keep what you build, and last longer than the technology takes.",
    fromTheBook:
      "Sovereignty in deep tech is not autarky, and it is not the far shore of charity. It is the deliberate design of conditions, open the gate, see what you are doing, carry results across, keep what you build, last longer than the technology takes, such that a place builds hard things and keeps what they are worth: the ownership, the learning, the compounding, and above all the choice. The ecosystems in this book that possess it built it on purpose, several while poor. The ground we stand on is not found. It is poured.",
    whyItMatters:
      "It reframes the goal from catching up to building a first complete stack in a domain the state must spend on anyway, such as power, water, food, health or security, as Taiwan chose semiconductors and Denmark chose wind.",
    chapter: "Chapter 15: Sovereign by Design",
    related: ["sovereignty-scoreboard", "capability-without-capture", "the-gate"],
  },
  {
    slug: "sovereignty-scoreboard",
    term: "The sovereignty scoreboard",
    definition:
      "The sovereignty scoreboard is a set of ten auditable numbers, one per condition, that show whether a country is actually building the ground for deep tech, chosen so that announcements and ribbon-cuttings cannot move them.",
    fromTheBook:
      "Ten numbers, one per load-bearing condition, each measurable with existing administrative machinery: research spending reported internationally; days to import a research instrument; hard technology's share of venture funding; bench-hours sold at shared facilities; pension allocation to venture; first purchases by public agencies; ventures reaching demonstration readiness; diaspora engagements delivered; domestic ownership retained at exit; and programmes surviving a change of government. If the machine is being built, they will move within a decade.",
    whyItMatters:
      "It makes the book's argument falsifiable: ten flat lines after ten years of real reform would prove the author wrong in public.",
    chapter: "Chapter 15: Sovereign by Design",
    related: ["sovereign-by-design", "institutions-on-the-technologys-clock"],
  },
];

export const ideaBySlug = (slug: string) => ideas.find((i) => i.slug === slug);
