"use client"

import { useEffect, useRef } from "react"
import Navigation from "@/components/navigation"
import ScrollToTop from "@/components/scroll-to-top"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Recognition from "@/components/recognition"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)
  const preloaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple CSS-based preloader animation
    const preloader = preloaderRef.current
    const progressBar = preloader?.querySelector(".progress-bar") as HTMLElement

    if (progressBar) {
      progressBar.style.width = "0%"
      progressBar.style.transition = "width 2s cubic-bezier(0.4, 0, 0.2, 1)"

      // Simulate progress
      setTimeout(() => {
        progressBar.style.width = "100%"
      }, 100)
    }

    // Hide preloader after animation
    const timer = setTimeout(() => {
      if (preloader) {
        preloader.style.transition = "all 0.8s ease-in-out"
        preloader.style.opacity = "0"
        preloader.style.pointerEvents = "none"

        setTimeout(() => {
          preloader.remove()
        }, 800)
      }

      // Show main content
      if (mainRef.current) {
        mainRef.current.style.opacity = "1"
      }
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div
        ref={preloaderRef}
        className="preloader fixed inset-0 z-50 flex flex-col items-center justify-center bg-background opacity-100 transition-all duration-800"
      >
        {/* Background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl floating" />
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl floating"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* Logo/Text */}
          <div className="preloader-text text-center">
            <h1 className="text-5xl md:text-6xl font-bold glow-cyan mb-2">MAJD</h1>
            <p className="text-sm md:text-base text-muted-foreground tracking-widest">AI ENGINEER • GENERATIVE AI</p>
          </div>

          {/* Progress Bar */}
          <div className="w-64 h-1 bg-card/50 rounded-full overflow-hidden border border-primary/20 backdrop-blur-sm">
            <div className="progress-bar w-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          <p className="text-xs text-muted-foreground tracking-widest">Loading Experience</p>
        </div>
      </div>

      <div className="relative w-full bg-background overflow-hidden">
        <Navigation />
        <ScrollToTop />
        <main ref={mainRef} className="relative opacity-0 transition-opacity duration-800">
          <Hero />
          <About />
          <Projects />
          <Recognition />
          <Experience />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  )
}
