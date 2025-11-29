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
  outcomes: {
    metrics: string
    learnings: string
  }
}

export interface Section {
  heading: string
  body: string
}
