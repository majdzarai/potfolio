"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Passionate AI engineer focused on building real-world intelligent systems. Experienced with multi-agent AI, RAG pipelines, and NLP applications. Actively seeking opportunities to grow, learn, and contribute to impactful projects."

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 60) // Typing speed

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden" id="hero">
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

      {/* Content - Left Aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col justify-center min-h-screen py-20">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 animate-fade-in text-left">
            Hi, I'm <span className="glow-text">Majd Zarai</span>
          </h1>
          
          {/* Subtitle */}
          <p
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary mb-8 animate-fade-in text-left"
            style={{ animationDelay: "0.2s" }}
          >
            AI Engineer / Co-founder of Yottanest
          </p>
          
          {/* Typing Animation Paragraph */}
          <p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-16 sm:mb-20 lg:mb-24 max-w-3xl leading-relaxed text-left"
            style={{ animationDelay: "0.4s" }}
          >
            {displayedText}
            <span className="inline-block w-0.5 h-5 sm:h-6 bg-primary ml-1 animate-pulse">|</span>
          </p>
          
          {/* Button - Bottom Left with more spacing */}
          <div className="animate-fade-in pt-4" style={{ animationDelay: "0.6s" }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="group border-2 border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
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
      </div>
    </section>
  )
}

export default Hero
