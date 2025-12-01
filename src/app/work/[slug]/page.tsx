import { caseStudies } from '@/data/caseStudies'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ImageGallery from '@/components/ImageGallery'

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const study = caseStudies.find((s) => s.slug === params.slug)

  if (!study) {
    return {
      title: 'Not Found',
    }
  }

  return {
    title: `${study.title} — Ryan Leskiw`,
    description: study.summary,
  }
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = caseStudies.find((s) => s.slug === params.slug)

  if (!study) {
    notFound()
  }

  return (
    <article className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-dark">
      <div className="max-w-3xl mx-auto">
        {/* Hero Image Placeholder */}
        <div className="w-full aspect-video bg-gray-900 rounded-lg mb-12 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <p className="text-sm">Hero Image</p>
            <p className="text-xs mt-1">{study.slug}</p>
          </div>
        </div>

        {/* Title & Meta */}
        <header className="mb-12 border-b border-gray-800 pb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-light mb-4">{study.title}</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="text-gray-500 mb-1">Role</p>
              <p className="text-text-light">{study.role}</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Timeline</p>
              <p className="text-text-light">{study.timeline}</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Type</p>
              <p className="text-text-light">{study.projectType}</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Team</p>
              <p className="text-text-light">{study.team.length} members</p>
            </div>
          </div>
        </header>

        {/* Case Study Sections */}
        <div className="space-y-12">
          {study.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-bold text-text-light mb-4">{section.heading}</h2>
              <p className="text-gray-400 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        {/* Image Gallery */}
        {study.gallery && study.gallery.length > 0 && (
          <section className="mt-16 pt-12 border-t border-gray-800">
            <h2 className="text-2xl font-bold text-text-light mb-8">Project Gallery</h2>
            <ImageGallery images={study.gallery} columns={2} />
          </section>
        )}

        {/* Outcomes */}
        <section className="mt-16 pt-12 border-t border-gray-800">
          <h2 className="text-2xl font-bold text-text-light mb-6">Outcomes & Learnings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-accent-green mb-3">Metrics</h3>
              <p className="text-gray-400">{study.outcomes.metrics}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-accent-green mb-3">Learnings</h3>
              <p className="text-gray-400">{study.outcomes.learnings}</p>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}
