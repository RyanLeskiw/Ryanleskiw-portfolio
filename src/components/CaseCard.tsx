import Link from 'next/link'
import Image from 'next/image'
import { CaseStudy } from '@/types'

interface CaseCardProps {
  study: CaseStudy
}

export default function CaseCard({ study }: CaseCardProps) {
  return (
    <Link href={`/work/${study.slug}`}>
      <div className="group cursor-pointer overflow-hidden rounded-lg border border-gray-800 hover:border-accent-green transition-colors">
        {/* Thumbnail Image */}
        <div className="w-full aspect-video bg-gray-900 relative overflow-hidden">
          {study.thumbnailImage ? (
            <Image
              src={study.thumbnailImage}
              alt={`${study.title} thumbnail`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-gray-600">
                <p className="text-sm">{study.projectType}</p>
                <p className="text-xs mt-1">{study.title}</p>
              </div>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-text-light text-lg font-bold font-feature mb-2 group-hover:text-accent-green transition-colors">
            {study.title}
          </h3>
          <p className="text-gray-400 text-sm mb-3">{study.projectType}</p>
          <p className="text-text-light text-sm line-clamp-2">{study.summary}</p>
        </div>
      </div>
    </Link>
  )
}
