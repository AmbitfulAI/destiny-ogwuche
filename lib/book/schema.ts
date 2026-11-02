// JSON-LD builders. Render with:
// <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
import { SITE_URL, author, book } from "@/lib/book/content";
import { ideas, type Idea } from "@/lib/book/ideas";
import { figures, study } from "@/lib/book/numbers";

const PERSON_ID = `${SITE_URL}/#person`;
const BOOK_ID = `${SITE_URL}${book.path}#book`;
const IDEAS_ID = `${SITE_URL}/ideas#terms`;

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: author.name,
    alternateName: author.alternateNames,
    url: SITE_URL,
    image: author.image,
    jobTitle: author.jobTitle,
    description: author.bio50,
    nationality: { "@type": "Country", name: "Nigeria" },
    homeLocation: { "@type": "Country", name: "Netherlands" },
    alumniOf: author.alumniOf.map((name) => ({ "@type": "CollegeOrUniversity", name })),
    founder: { "@type": "Organization", name: "Ambitful AI", url: "https://ambitful.ai" },
    knowsAbout: ["Deep tech", "Innovation ecosystems", "Venture capital", "Verification and validation", "Medical robotics", "Africa"],
    sameAs: author.sameAs,
    subjectOf: { "@id": BOOK_ID },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: author.name,
    publisher: { "@id": PERSON_ID },
  };
}

export function bookSchema() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": BOOK_ID,
    name: book.fullTitle,
    alternateName: book.title,
    url: `${SITE_URL}${book.path}`,
    author: { "@id": PERSON_ID, "@type": "Person", name: author.name },
    description: book.description,
    inLanguage: book.inLanguage,
    genre: book.genre,
    keywords: book.keywords.join(", "),
    about: [
      { "@type": "Thing", name: "Deep tech" },
      { "@type": "Place", name: "Africa" },
      { "@type": "Country", name: "Nigeria" },
      { "@type": "Country", name: "Netherlands" },
    ],
    hasPart: { "@id": IDEAS_ID },
  };
  if (book.coverImage) data.image = book.coverImage;
  if (book.publisher) data.publisher = { "@type": "Organization", name: book.publisher };
  if (book.datePublished) data.datePublished = book.datePublished;
  if (book.isbn) {
    data.isbn = book.isbn;
    data.workExample = {
      "@type": "Book",
      isbn: book.isbn,
      bookFormat: "https://schema.org/Hardcover", // TODO: match the real format
      ...(book.preorderLinks.length > 0 && {
        offers: book.preorderLinks.map((l) => ({
          "@type": "Offer",
          url: l.url,
          seller: { "@type": "Organization", name: l.label },
          availability: book.datePublished && book.datePublished <= new Date().toISOString().slice(0, 10)
            ? "https://schema.org/InStock"
            : "https://schema.org/PreOrder",
        })),
      }),
    };
  }
  return data;
}

export function bookFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: book.faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function ideasSetSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": IDEAS_ID,
    name: `Frameworks from ${book.title}`,
    url: `${SITE_URL}/ideas`,
    creator: { "@id": PERSON_ID },
    hasDefinedTerm: ideas.map((i) => ({ "@id": `${SITE_URL}/ideas/${i.slug}#term` })),
  };
}

export function ideaSchema(idea: Idea) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${SITE_URL}/ideas/${idea.slug}#term`,
    name: idea.term,
    ...(idea.alternateNames && { alternateName: idea.alternateNames }),
    description: idea.definition,
    url: `${SITE_URL}/ideas/${idea.slug}`,
    inDefinedTermSet: { "@id": IDEAS_ID },
    subjectOf: { "@id": BOOK_ID },
    creator: { "@id": PERSON_ID },
  };
}

export function numbersSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Deep tech in Nigeria and the Netherlands: headline figures, 2020 to 2025",
    description: `${study.method} Headline findings: ${figures
      .filter((f) => f.scope === "study")
      .map((f) => f.headline)
      .join("; ")}.`,
    url: `${SITE_URL}/book/deep-tech-numbers`,
    creator: { "@id": PERSON_ID },
    temporalCoverage: "2020/2025",
    spatialCoverage: [
      { "@type": "Country", name: "Nigeria" },
      { "@type": "Country", name: "Netherlands" },
    ],
    isBasedOn: study.name,
    citation: { "@id": BOOK_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
