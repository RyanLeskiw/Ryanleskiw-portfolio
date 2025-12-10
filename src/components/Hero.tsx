import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-dark">
      <div className="max-w-container mx-auto text-center">
        {/* RL Logo */}
        <div className="w-32 h-32 mx-auto mb-8">
          <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#10b981" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
            {/* R */}
            <path d="M 40 60 L 40 240 M 40 60 L 90 60 Q 110 60 110 80 Q 110 100 90 100 L 40 100" />
            <path d="M 90 100 L 130 240" />
            {/* L */}
            <path d="M 160 60 L 160 240 L 190 240" />
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
