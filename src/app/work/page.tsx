import CaseCard from '@/components/CaseCard'
import { caseStudies } from '@/data/caseStudies'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work — Ryan Leskiw',
  description: 'Explore UX research and design case studies by Ryan Leskiw, including Headspace Sleep Mood, Gobi gamified sobriety app, and Spotify UX audit projects.',
  openGraph: {
    title: 'Work — Ryan Leskiw',
    description: 'Explore UX research and design case studies by Ryan Leskiw.',
    type: 'website',
  },
}

export default function WorkPage() {
  return (
    <div className="relative">
      <div className="stipple-bg" aria-hidden="true"></div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-dark">
        <div className="max-w-container mx-auto">
          <div className="max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold font-futuristic tracking-futuristic text-text-light mb-6">Work</h1>
            <p className="text-gray-400 text-lg">
            A selection of case studies showcasing my research-driven design process and outcomes.
            </p>
          </div>

          {/* Case Study Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <CaseCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
