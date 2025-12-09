import { caseStudies } from '@/data/caseStudies'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ImageGallery from '@/components/ImageGallery'
import PullQuote from '@/components/PullQuote'

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
        {/* Hero Image */}
        {study.heroImage && (
          <img 
            src={study.heroImage}
            alt={study.title}
            className="w-full aspect-video object-cover rounded-lg mb-12"
          />
        )}

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
            <div key={index}>
              <section>
                <h2 className="text-2xl font-bold text-text-light mb-4">{section.heading}</h2>
                <p className="text-gray-400 leading-relaxed">{section.body}</p>

                {/* Insert a pull quote after Research & Insights for Headspace */}
                {study.slug === 'headspace-sleep-mood' && section.heading === 'Research & Insights' && (
                  <PullQuote>
                    {"If I can't sleep I'll usually like read or write in a journal or something. That kind of helps."}
                  </PullQuote>
                )}
              </section>

              {/* Inline section image */}
              {section.image && (
                <div className="mt-8 mb-8">
                  <img 
                    src={section.image} 
                    alt={section.imageAlt || section.heading}
                    className="w-full rounded-lg shadow-lg"
                  />
                  {section.imageCaption && (
                    <p className="text-sm text-gray-500 mt-3 text-center">{section.imageCaption}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Image Gallery */}
        {study.gallery && study.gallery.length > 0 && (
          <section className="mt-16 pt-12 border-t border-gray-800">
            <h2 className="text-2xl font-bold text-text-light mb-8">Project Gallery</h2>
            <ImageGallery images={study.gallery} columns={2} />
          </section>
        )}
      </div>
    </article>
  )
}
