import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-bg-dark">
      <div className="text-center">
        <h1 className="text-6xl font-bold font-futuristic tracking-futuristic text-text-light mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold font-futuristic tracking-futuristic text-text-light mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-800 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
