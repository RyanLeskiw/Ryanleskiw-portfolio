import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative pt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-bg-dark min-h-screen flex items-center justify-start"
      style={{
        backgroundImage: "url(/assets/homepage-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 w-full max-w-container text-left pb-2 pl-8 sm:pl-12 lg:pl-20">
        <h1 className="font-bold text-text-light max-w-6xl leading-tight">
          <span
            className="font-hero-name text-5xl sm:text-6xl md:text-7xl lg:text-8xl block"
            style={{ color: 'var(--accent-gold)' }}
          >
            Ryan Leskiw
          </span>
          <span className="font-feature text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mt-2">
            Researcher • Designer • Friend
          </span>
        </h1>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mt-6">
          I explore how research, design, and real-life experience intersect to create thoughtful, human-centered digital products.
        </p>

        <Link
          href="/work"
          className="inline-block px-8 py-3 font-bold rounded transition-colors hover:opacity-90"
          style={{
            backgroundColor: 'var(--accent-gold)',
            color: '#fff',
          }}
        >
          View My Work
        </Link>
      </div>
    </section>
  );
}
