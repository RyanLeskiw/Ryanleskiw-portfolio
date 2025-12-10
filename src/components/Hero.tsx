import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-dark">
      <div className="max-w-container mx-auto text-center">
        {/* Logo */}
        <div className="w-24 h-24 mx-auto mb-8">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" fill="none" className="w-full h-full">
            <g stroke="#10b981" strokeWidth="35" strokeLinecap="round" strokeLinejoin="round">
              {/* K letter */}
              <path d="M 80 80 L 80 280" />
              <path d="M 80 180 L 200 80" />
              <path d="M 80 180 L 200 280" />
              
              {/* L letter */}
              <path d="M 260 80 L 260 280 L 320 280" />
              
              {/* Decorative swash/flourish underneath */}
              <path d="M 100 320 Q 200 340 300 320" strokeWidth="28" />
            </g>
          </svg>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light mb-6 max-w-3xl mx-auto">
          A Creative, Collaborative UX Designer: From Research To Resolution
        </h1>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          I'm a UX researcher and designer passionate about understanding user needs and creating thoughtful solutions through research-driven design.
        </p>

        <Link
          href="/work"
          className="inline-block px-8 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-800 transition-colors"
        >
          View My Work
        </Link>
      </div>
    </section>
  )
}
