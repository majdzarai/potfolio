"use client"

import { useRef } from "react"

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer
      ref={footerRef}
      className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/10 animate-fade-in-up"
    >
      {/* Floating particles */}
      <div className="particle absolute top-10 left-10 w-2 h-2 bg-primary rounded-full opacity-50 floating" />
      <div
        className="particle absolute top-20 right-20 w-3 h-3 bg-secondary rounded-full opacity-40 floating"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="particle absolute bottom-20 left-1/4 w-2 h-2 bg-accent rounded-full opacity-30 floating"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="particle absolute top-1/2 right-1/3 w-2 h-2 bg-primary rounded-full opacity-50 floating"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 glow-text">Majd Zarai</h3>
            <p className="text-muted-foreground">AI & Data Science Engineer crafting intelligent solutions</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <nav className="space-y-2">
              {["hero", "about", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block text-muted-foreground hover:text-primary transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Follow Me</h4>
            <div className="space-y-2 text-muted-foreground">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            © 2025 Majd Zarai. Built with <span className="text-primary animate-pulse">❤️</span> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
