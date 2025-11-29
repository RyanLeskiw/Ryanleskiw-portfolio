'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-bg-dark border-b border-gray-800 z-50">
      <nav className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-text-light font-bold text-xl">
          RyL
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link href="/work" className="text-text-light hover:text-accent-green transition-colors">
            Work
          </Link>
          <Link href="/about" className="text-text-light hover:text-accent-green transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-text-light hover:text-accent-green transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-light"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-bg-dark border-b border-gray-800 md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link href="/work" className="text-text-light hover:text-accent-green transition-colors">
                Work
              </Link>
              <Link href="/about" className="text-text-light hover:text-accent-green transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-text-light hover:text-accent-green transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
