import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-dark min-h-screen flex items-center"
      style={{
        backgroundImage: "url(/assets/homepage-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-feature text-text-light mb-6 max-w-6xl mx-auto leading-tight px-4">
          <span className="font-hero-name text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Ryan Leskiw
          </span>{' '}
          | Researcher • Designer • Friend
        </h1>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          I explore how research, design, and real-life experience intersect to create thoughtful, human-centered digital products.
        </p>

        <Link
          href="/work"
          className="inline-block px-8 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
}
