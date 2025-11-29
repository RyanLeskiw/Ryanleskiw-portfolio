import Link from 'next/link'
import { CaseStudy } from '@/types'

interface CaseCardProps {
  study: CaseStudy
}

export default function CaseCard({ study }: CaseCardProps) {
  return (
    <Link href={`/work/${study.slug}`}>
      <div className="group cursor-pointer overflow-hidden rounded-lg border border-gray-800 hover:border-accent-green transition-colors">
        {/* Thumbnail - Placeholder */}
        <div className="w-full aspect-video bg-gray-900 group-hover:bg-gray-800 transition-colors flex items-center justify-center">
          <div className="text-center text-gray-600">
            <p className="text-sm">{study.projectType}</p>
            <p className="text-xs mt-1">Image: {study.slug}</p>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-text-light text-lg font-bold mb-2 group-hover:text-accent-green transition-colors">
            {study.title}
          </h3>
          <p className="text-gray-400 text-sm mb-3">{study.projectType}</p>
          <p className="text-text-light text-sm line-clamp-2">{study.summary}</p>
        </div>
      </div>
    </Link>
  )
}
