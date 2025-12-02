"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Spline 3D Background - Full Section */}
      <div className="absolute inset-0 w-full h-full opacity-60 animate-fade-in">
        <iframe
          src="https://my.spline.design/orb-OD3XliiDjzduleOuk5IXcA2c/"
          frameBorder="0"
          className="w-full h-full"
          title="3D Orb Animation"
        />
      </div>

      {/* Floating glow orbs */}
      <div className="glow-orb absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
      <div className="glow-orb absolute bottom-40 right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
      <div className="glow-orb absolute top-1/2 left-1/3 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />

      {/* Content - Layered on Top */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in">
          Hi, I'm <span className="glow-text">Majd Zarai</span>
        </h1>
        <p
          className="text-xl sm:text-2xl font-semibold text-primary mb-4 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
            AI Engineer / Co-founder of Yottanest
        </p>
        <p
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Passionate AI engineer focused on building real-world intelligent systems.
          Experienced with multi-agent AI, RAG pipelines, and NLP applications.
          Actively seeking opportunities to grow, learn, and contribute to impactful projects.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-box hover:scale-105 transition-all duration-300"
          >
            Hire Me
            <svg
              className="ml-2 group-hover:translate-x-1 transition-transform w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
