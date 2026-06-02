"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 500)
    window.addEventListener("scroll", toggle)
    return () => window.removeEventListener("scroll", toggle)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-foreground text-background flex items-center justify-center hover:bg-primary transition-colors group"
          aria-label="Scroll to top"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
