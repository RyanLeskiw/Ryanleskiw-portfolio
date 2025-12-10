import { caseStudies } from '@/data/caseStudies'
import Link from 'next/link'
import Image from 'next/image'

export default function CaseStudies() {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl sm:text-5xl font-bold font-futuristic text-text-light mb-12">Work</h2>
      <div className="grid gap-12 md:grid-cols-2">
        {caseStudies.map((study) => (
          <Link href={`/work/${study.slug}`} key={study.slug} className="group block">
            <div className="overflow-hidden mb-6">
              <Image
                src={study.thumbnailImage}
                alt={`Thumbnail for ${study.title}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-bold font-futuristic text-text-light mb-2">{study.title}</h3>
            <p className="text-gray-400 mb-3">{study.summary}</p>
            <span className="font-semibold text-accent-green-light group-hover:underline">
              View Case Study
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}