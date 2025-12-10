import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-dark">
      <div className="max-w-container mx-auto text-center">
        {/* RL Logo */}
        <div className="w-48 h-48 mx-auto mb-8">
          <img src="/assets/rl-logo.svg" alt="RL Logo" className="w-full h-full" />
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
