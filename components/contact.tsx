"use client"

import type React from "react"
import dynamic from "next/dynamic"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

// Dynamically import EarthCanvas to avoid SSR issues with Three.js
const EarthCanvas = dynamic(() => import("./earth-canvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[350px] md:min-h-[450px] flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  ),
})

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast.success("Thank you! I will get back to you as soon as possible.")
    setFormData({ name: "", email: "", message: "" })
    setLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section ref={sectionRef} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm sm:text-base font-medium tracking-widest uppercase mb-2">
            Get in touch
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold glow-text">
            Contact.
          </h2>
        </motion.div>

        {/* Main Content - Form Left, 3D Right */}
        <div className="flex flex-col-reverse lg:flex-row gap-10 xl:gap-16 items-stretch">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex-1 lg:flex-[0.6]"
          >
            <div className="rounded-2xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md border border-border/30 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">
                Let's work together
              </h3>
              <p className="text-muted-foreground mb-8">
                Have a project in mind? Let's discuss how I can help bring your ideas to life.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                {/* Name Field */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="mb-3 font-medium text-foreground">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    required
                    className="bg-background/50 border-border/50 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-3 font-medium text-foreground">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                    className="bg-background/50 border-border/50 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                {/* Message Field */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="mb-3 font-medium text-foreground">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What would you like to say?"
                    required
                    rows={7}
                    className="bg-background/50 border-border/50 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-fit mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </>
                  )}
                </Button>
              </form>

              {/* Contact Info */}
              <div className="mt-10 pt-8 border-t border-border/30">
                <div className="flex flex-wrap gap-6">
                  {/* Email */}
                  <a
                    href="mailto:Majd.zarai@esprit.tn"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm">Majd.zarai@esprit.tn</span>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+21650132494"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-sm">+216 50 132 494</span>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://github.com/majdzarai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                    title="GitHub"
                  >
                    <svg className="w-6 h-6 text-foreground hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/majd-zarai-b08050249"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                    title="LinkedIn"
                  >
                    <svg className="w-6 h-6 text-foreground hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.841 0-9.758h3.554v1.381c.43-.664 1.199-1.608 2.925-1.608 2.137 0 3.748 1.395 3.748 4.393v5.592zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.951.77-1.71 1.915-1.71 1.144 0 1.914.759 1.914 1.71 0 .951-.769 1.71-1.914 1.71zm1.575 11.597H3.762V9.694h3.15v10.758zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - 3D Earth Canvas */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 lg:flex-[0.5] h-[350px] md:h-[450px] lg:h-auto lg:min-h-[600px]"
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
