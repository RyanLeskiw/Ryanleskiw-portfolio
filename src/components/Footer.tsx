export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-50 backdrop-blur-xl bg-gradient-to-t from-black/40 to-black/20 border-t border-green-500/20 mt-20">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-text-light text-sm">
            <p>&copy; {currentYear} Ryan Leskiw. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/ryanleskiw" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-accent-green transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
