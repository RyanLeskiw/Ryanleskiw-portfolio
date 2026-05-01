export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ryan Leskiw',
    jobTitle: 'UX Researcher & Designer',
    description: 'UX researcher and designer passionate about understanding user needs and creating thoughtful solutions through research-driven design.',
    url: 'https://rleskiw.com',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  )
}
