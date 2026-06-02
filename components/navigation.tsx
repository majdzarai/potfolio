"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "About", id: "about", num: "01" },
  { label: "Work", id: "projects", num: "02" },
  { label: "Recognition", id: "recognition", num: "03" },
  { label: "Experience", id: "experience", num: "04" },
  { label: "Contact", id: "contact", num: "05" },
]

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
      const ids = ["hero", ...navLinks.map((l) => l.id)]
      const sections = ids.map((id) => document.getElementById(id))
      const pos = window.scrollY + 120
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i]
        if (s && s.offsetTop <= pos) {
          setActiveSection(ids[i])
          break
        }
      }
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Wordmark */}
            <button onClick={() => scrollToSection("hero")} className="group flex items-baseline gap-2">
              <span className="font-display text-2xl leading-none">Majd Zarai</span>
              <span className="hidden sm:inline font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                AI Eng.
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="group flex items-center gap-1.5"
                >
                  <span className="font-mono text-[0.6rem] text-muted-foreground/70">{link.num}</span>
                  <span
                    className={`text-sm transition-colors duration-300 link-underline ${
                      activeSection === link.id
                        ? "text-primary"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </span>
                </button>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:inline-flex btn-ink text-sm py-2.5 px-5"
            >
              Let's Talk
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-3.5 flex flex-col justify-between">
                <span className={`w-full h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`w-full h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`w-full h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-background"
          >
            <div className="relative h-full flex flex-col justify-center px-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 + i * 0.06 }}
                  onClick={() => scrollToSection(link.id)}
                  className="group flex items-baseline gap-4 py-3 border-b border-border"
                >
                  <span className="font-mono text-xs text-muted-foreground">{link.num}</span>
                  <span
                    className={`font-display text-4xl ${
                      activeSection === link.id ? "text-primary display-italic" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </span>
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                onClick={() => scrollToSection("contact")}
                className="btn-ink mt-10 w-full py-4 text-base"
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
