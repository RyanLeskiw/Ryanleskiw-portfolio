import CaseCard from '@/components/CaseCard'
import { caseStudies } from '@/data/caseStudies'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work — Ryan Leskiw',
  description: 'View my UX research and design case studies.',
}

export default function WorkPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-dark">
      <div className="max-w-container mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-text-light mb-6">Work</h1>
        <p className="text-gray-400 text-lg mb-16 max-w-2xl">
          A selection of case studies showcasing my research-driven design process and outcomes.
        </p>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseCard key={study.slug} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}
