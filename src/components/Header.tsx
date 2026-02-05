"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-gradient-to-b from-black/40 to-black/20 border-b border-gray-700/60">
      <nav className="max-w-container mx-auto pl-4 sm:pl-4 lg:pl-6 pr-4 sm:pr-6 lg:pr-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-text-light font-bold text-xl font-feature"
        >
          Ryan Leskiw
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link
            href="/work"
            className="text-text-light hover:text-white transition-colors"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-text-light hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-text-light hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-light"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="absolute top-full left-0 w-full backdrop-blur-xl bg-gradient-to-b from-black/40 to-black/20 border-b border-gray-700/60 md:hidden"
            role="menu"
          >
            <div className="flex flex-col gap-4 p-4">
              <Link
                href="/work"
                className="text-text-light hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/about"
                className="text-text-light hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-text-light hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
