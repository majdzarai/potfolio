"use client"

import type React from "react"
import { useRef, useState } from "react"
import { toast } from "sonner"

const contactInfo = [
  { label: "Email", value: "Majd.zarai@esprit.tn", href: "mailto:Majd.zarai@esprit.tn" },
  { label: "Phone", value: "+216 50 132 494", href: "tel:+21650132494" },
  { label: "Location", value: "Tunisia · open to remote", href: null },
]

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/majdzarai",
    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/majd-zarai-b08050249",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.841 0-9.758h3.554v1.381c.43-.664 1.199-1.608 2.925-1.608 2.137 0 3.748 1.395 3.748 4.393v5.592zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.951.77-1.71 1.915-1.71 1.144 0 1.914.759 1.914 1.71 0 .951-.769 1.71-1.914 1.71zm1.575 11.597H3.762V9.694h3.15v10.758zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  },
]

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    toast.success("Message sent — I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
    setLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const inputClass =
    "w-full bg-transparent border-b border-[rgba(236,227,211,0.2)] py-3 text-ink-foreground placeholder:text-[rgba(236,227,211,0.35)] focus:border-primary focus:outline-none transition-colors"

  return (
    <section id="contact" className="relative bg-ink text-ink-foreground border-t border-[rgba(236,231,221,0.1)] py-24 lg:py-36 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between" data-reveal>
          <span className="eyebrow">Contact</span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[rgba(236,227,211,0.5)]">
            05 — 05
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mt-12 lg:mt-16">
          {/* Left: invite + details */}
          <div className="lg:col-span-6">
            <h2
              data-split
              className="font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.98] tracking-tight"
            >
              Let's build
              <br />
              <span className="display-italic text-primary-light">something</span> together.
            </h2>

            <p data-reveal className="mt-8 text-lg leading-relaxed text-[rgba(236,227,211,0.65)] max-w-md">
              Have a project in mind, a role to fill, or just want to talk AI? I'm currently open to full-time
              and freelance work.
            </p>

            <div className="mt-12 space-y-px">
              {contactInfo.map((info) => {
                const inner = (
                  <div className="flex items-baseline justify-between gap-4 py-4 border-t border-[rgba(236,227,211,0.14)] group">
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[rgba(236,227,211,0.5)]">
                      {info.label}
                    </span>
                    <span className="text-base text-ink-foreground group-hover:text-primary-light transition-colors">
                      {info.value}
                    </span>
                  </div>
                )
                return (
                  <div key={info.label} data-reveal>
                    {info.href ? (
                      <a href={info.href} className="block">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </div>
                )
              })}
            </div>

            <div className="flex items-center gap-4 mt-10" data-reveal>
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-[rgba(236,227,211,0.2)] flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group"
                  title={s.name}
                  data-magnetic
                >
                  <svg className="w-4 h-4 text-[rgba(236,227,211,0.7)] group-hover:text-primary-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-6" data-reveal>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[rgba(236,227,211,0.5)]">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[rgba(236,227,211,0.5)]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[rgba(236,227,211,0.5)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project…"
                  required
                  rows={6}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                data-magnetic
                className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium px-7 py-3.5 transition-all duration-300 hover:bg-primary-light disabled:opacity-60"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </span>
                ) : (
                  <>
                    Send message
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
