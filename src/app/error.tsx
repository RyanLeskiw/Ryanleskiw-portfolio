"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-bg-dark">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold font-futuristic tracking-futuristic text-text-light mb-4">
          Something went wrong!
        </h1>
        <p className="text-gray-400 mb-8">
          An unexpected error occurred. Please try again or return to the
          homepage.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-gray-800 text-text-light font-bold rounded hover:bg-gray-700 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
