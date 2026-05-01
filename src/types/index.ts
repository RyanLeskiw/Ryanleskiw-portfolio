export interface CaseStudy {
  slug: string
  title: string
  summary: string
  projectType: string
  timeline: string
  role: string
  team: string[]
  thumbnailImage: string
  heroImage: string
  sections: Section[]
  gallery?: GalleryImage[]
  outcomes: {
    metrics: string
    learnings: string
  }
}

export interface Section {
  heading: string
  body: string
  image?: string
  imageAlt?: string
  imageCaption?: string
}

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}
