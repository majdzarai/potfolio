"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    toast.success("Message sent successfully! I'll get back to you soon.")

    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section ref={sectionRef} className="relative py-20 px-4 sm:px-6 lg:px-8 animate-fade-in" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center glow-text">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Have a project in mind or just want to say hello? Drop me a message!
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 space-y-6 border border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in-left"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="border-primary/20 focus:border-primary focus:glow-box transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="border-primary/20 focus:border-primary focus:glow-box transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows={5}
                className="border-primary/20 focus:border-primary focus:glow-box transition-all resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 glow-box hover:scale-105 transition-all group"
            >
              Send Message
              <svg
                className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform w-5 h-5"
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
            </Button>
          </form>

          {/* Social & Info */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="rounded-2xl p-8 border border-border/50 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-primary">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl hover:scale-110 hover:glow-box hover:text-primary transition-all border border-border/50 bg-card/50 backdrop-blur-sm"
                  title="GitHub"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl hover:scale-110 hover:glow-box hover:text-primary transition-all border border-border/50 bg-card/50 backdrop-blur-sm"
                  title="LinkedIn"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.841 0-9.758h3.554v1.381c.43-.664 1.199-1.608 2.925-1.608 2.137 0 3.748 1.395 3.748 4.393v5.592zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.951.77-1.71 1.915-1.71 1.144 0 1.914.759 1.914 1.71 0 .951-.769 1.71-1.914 1.71zm1.575 11.597H3.762V9.694h3.15v10.758zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl hover:scale-110 hover:glow-box hover:text-primary transition-all border border-border/50 bg-card/50 backdrop-blur-sm"
                  title="Twitter"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="rounded-2xl p-8 space-y-4 border border-border/50 bg-card/50 backdrop-blur-sm">
              <div>
                <h4 className="font-semibold text-primary mb-1">Email</h4>
                <p className="text-muted-foreground">hello@majdzarai.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">Location</h4>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
