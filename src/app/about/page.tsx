import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Ryan Leskiw',
  description: 'Learn more about my background, skills, and experience.',
}

export default function AboutPage() {
  return (
    <div className="relative">
      <div className="stipple-bg" aria-hidden="true"></div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-dark">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-light mb-8">About</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I'm a UX researcher and designer with a passion for understanding user needs and creating human-centered solutions. My approach combines rigorous research methodologies with iterative design practices to solve complex problems.
            </p>

            <h2 className="text-2xl font-bold text-text-light mt-12 mb-6">Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-accent-green mb-4">Research</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• User Interviews & Qualitative Research</li>
                <li>• Affinity Mapping & Thematic Analysis</li>
                <li>• Usability Testing</li>
                <li>• UX Audits & Heuristic Evaluation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-accent-green mb-4">Design</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Interaction Design</li>
                <li>• Emotional Design & Gamification</li>
                <li>• Prototyping</li>
                <li>• UI Design & Design Systems</li>
              </ul>
            </div>
            </div>

            <h2 className="text-2xl font-bold text-text-light mt-12 mb-6">Resume</h2>
            <p className="text-gray-400 mb-4">
            Download my resume to learn more about my experience and education.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-block px-6 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-800 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
