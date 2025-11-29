export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-dark border-t border-gray-800 mt-20">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-text-light text-sm">
            <p>&copy; {currentYear} Ryan Leskiw. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-accent-green transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-accent-green transition-colors">
              Twitter
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-accent-green transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
