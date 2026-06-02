"use client"

const links = [
  { label: "About", id: "about" },
  { label: "Work", id: "projects" },
  { label: "Recognition", id: "recognition" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/majdzarai" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/majd-zarai-b08050249" },
]

const Footer = () => {
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <footer className="relative bg-ink text-ink-foreground border-t border-[rgba(236,227,211,0.14)] px-6 sm:px-8 lg:px-12 pt-16 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Giant wordmark */}
        <button onClick={() => scrollToSection("hero")} className="block text-left w-full" data-reveal>
          <span className="font-display text-[clamp(3rem,14vw,12rem)] leading-[0.85] tracking-tight hover:text-primary-light transition-colors">
            Majd Zarai
          </span>
        </button>

        <div className="grid md:grid-cols-12 gap-10 mt-14 pt-10 border-t border-[rgba(236,227,211,0.14)]">
          <div className="md:col-span-5" data-reveal>
            <p className="text-sm leading-relaxed text-[rgba(236,227,211,0.6)] max-w-sm">
              AI Engineer building intelligent systems that solve real-world problems — from multi-agent
              architectures to RAG pipelines. Always open to a good conversation.
            </p>
          </div>

          <nav className="md:col-span-3 md:col-start-7" data-reveal>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[rgba(236,227,211,0.5)] mb-4">
              Navigate
            </p>
            <div className="space-y-2">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollToSection(l.id)}
                  className="block text-sm text-[rgba(236,227,211,0.75)] hover:text-primary-light transition-colors link-underline"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </nav>

          <div className="md:col-span-3" data-reveal>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[rgba(236,227,211,0.5)] mb-4">
              Elsewhere
            </p>
            <div className="space-y-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[rgba(236,227,211,0.75)] hover:text-primary-light transition-colors link-underline"
                >
                  {s.name} ↗
                </a>
              ))}
              <a
                href="mailto:Majd.zarai@esprit.tn"
                className="block text-sm text-[rgba(236,227,211,0.75)] hover:text-primary-light transition-colors link-underline"
              >
                Email ↗
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-12 pt-6 border-t border-[rgba(236,227,211,0.14)]">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[rgba(236,227,211,0.45)]">
            © {new Date().getFullYear()} Majd Zarai
          </p>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[rgba(236,227,211,0.45)]">
            Built with Next.js · GSAP · Designed in the editorial spirit
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
