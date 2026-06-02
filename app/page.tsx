"use client"

import { useEffect, useRef } from "react"
import Navigation from "@/components/navigation"
import ScrollToTop from "@/components/scroll-to-top"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Recognition from "@/components/recognition"
import Experience from "@/components/experience"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import SiteAnimations from "@/components/site-animations"

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)
  const preloaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const preloader = preloaderRef.current
    const bar = preloader?.querySelector(".progress-bar") as HTMLElement | null

    if (bar) {
      bar.style.transform = "scaleX(0)"
      bar.style.transition = "transform 1.8s cubic-bezier(0.65, 0, 0.35, 1)"
      requestAnimationFrame(() => {
        bar.style.transform = "scaleX(1)"
      })
    }

    const timer = setTimeout(() => {
      if (preloader) {
        preloader.style.transition = "opacity 0.7s ease, transform 0.9s cubic-bezier(0.65,0,0.35,1)"
        preloader.style.opacity = "0"
        preloader.style.transform = "translateY(-12px)"
        preloader.style.pointerEvents = "none"
        setTimeout(() => preloader.remove(), 900)
      }
      if (mainRef.current) mainRef.current.style.opacity = "1"
      ;(window as unknown as { __siteLoaded?: boolean }).__siteLoaded = true
      window.dispatchEvent(new Event("site:loaded"))
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Preloader */}
      <div
        ref={preloaderRef}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background px-6"
      >
        <div className="w-full max-w-md">
          <p className="eyebrow mb-6">Portfolio — 2026</p>
          <h1 className="font-display text-5xl sm:text-6xl leading-[0.95] tracking-tight">
            Majd
            <br />
            <span className="display-italic text-primary">Zarai</span>
          </h1>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground mt-6 mb-8">
            AI Engineer · GenAI
          </p>
          <div className="h-px w-full bg-border overflow-hidden">
            <div className="progress-bar h-full w-full bg-foreground origin-left" />
          </div>
        </div>
      </div>

      {/* Paper grain texture */}
      <div className="grain" aria-hidden="true" />

      {/* Main */}
      <div className="relative z-10 w-full">
        <SiteAnimations />
        <Navigation />
        <ScrollToTop />
        <main ref={mainRef} className="relative opacity-0 transition-opacity duration-700">
          <Hero />
          <About />
          <Projects />
          <Recognition />
          <Experience />
          <Certifications />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  )
}
