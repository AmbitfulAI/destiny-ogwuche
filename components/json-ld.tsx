type JsonObject = Record<string, unknown>

// Renders schema.org structured data. "<" is escaped so content can never close the script tag.
export function JsonLd({ data }: { data: JsonObject | JsonObject[] }) {
  const items = Array.isArray(data) ? data : [data]
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  )
}
