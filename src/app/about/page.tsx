import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Ryan Leskiw',
  description: 'Learn more about my background, skills, and experience.',
}

export default function AboutPage() {
  return (
    <div className="relative">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-dark">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold font-futuristic tracking-futuristic text-text-light mb-8">About</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I'm a UX researcher and designer based in North Vancouver, currently studying Interaction Design at Capilano University. My design thinking is shaped by influences like Arthur Erickson and Frank Lloyd Wright, and I bring a team-oriented, thoughtful approach to every project. When I'm not designing, you'll find me mountain biking, surfing, or reading historical fiction—activities that fuel my creativity and keep me grounded.
            </p>

            <h2 className="text-2xl font-bold font-futuristic tracking-futuristic text-text-light mt-12 mb-6">Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Research</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• User Interviews & Qualitative Research</li>
                <li>• Affinity Mapping & Thematic Analysis</li>
                <li>• Usability Testing</li>
                <li>• UX Audits & Heuristic Evaluation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Design</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Interaction Design</li>
                <li>• Emotional Design & Gamification</li>
                <li>• Prototyping</li>
                <li>• UI Design & Design Systems</li>
              </ul>
            </div>
            </div>

            <h2 className="text-2xl font-bold font-futuristic tracking-futuristic text-text-light mt-12 mb-6">Resume</h2>
            <p className="text-gray-400 mb-4">
            Download my resume to learn more about my experience and education.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-block px-6 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
