"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(useGSAP, SplitText)

const techs = [
  "Python",
  "LLMs",
  "RAG",
  "LangChain / LangGraph",
  "TensorFlow",
  "Computer Vision",
  "NLP",
  "Neo4j / GraphRAG",
  "FastAPI",
]

const meta: [string, string][] = [
  ["Focus", "Multi-agent · RAG · NLP"],
  ["Education", "ESPRIT — DS & AI"],
  ["Highlight", "2nd / IndabaX 2025"],
]

const Hero = () => {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      const q = gsap.utils.selector(root)

      if (reduce) {
        gsap.set(q(".hero-anim, .hero-name, .hero-portrait, .hero-meta-item"), { opacity: 1, y: 0, clearProps: "all" })
        return
      }

      const split = SplitText.create(q(".hero-name"), {
        type: "lines, chars",
        mask: "lines",
        linesClass: "split-line",
      })

      const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } })

      tl.from(q(".hero-eyebrow"), { opacity: 0, y: 16, duration: 0.7 })
        .from(
          split.chars,
          { yPercent: 115, opacity: 0, duration: 1, stagger: 0.022, ease: "power4.out" },
          "-=0.3",
        )
        .from(q(".hero-role > *"), { opacity: 0, y: 18, duration: 0.7, stagger: 0.12 }, "-=0.5")
        .from(q(".hero-desc"), { opacity: 0, y: 18, duration: 0.8 }, "-=0.4")
        .from(q(".hero-cta"), { opacity: 0, y: 18, duration: 0.7, stagger: 0.1 }, "-=0.5")
        .fromTo(
          q(".hero-portrait"),
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "power4.inOut" },
          "-=1",
        )
        .from(q(".hero-meta-item"), { opacity: 0, y: 16, duration: 0.6, stagger: 0.1 }, "-=0.6")
        .from(q(".hero-strip"), { opacity: 0, duration: 0.8 }, "-=0.4")
        .from(q(".hero-cue"), { opacity: 0, duration: 0.6 }, "-=0.3")

      const play = () => tl.play()
      if ((window as unknown as { __siteLoaded?: boolean }).__siteLoaded) {
        play()
      } else {
        window.addEventListener("site:loaded", play, { once: true })
      }
      return () => window.removeEventListener("site:loaded", play)
    },
    { scope: root },
  )

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section ref={root} id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 hairline-grid opacity-[0.5] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main column */}
          <div className="lg:col-span-8">
            <span className="hero-eyebrow eyebrow">
              <span className="relative flex h-1.5 w-1.5 -ml-1">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              Available for opportunities
            </span>

            <h1 className="hero-name font-display text-[clamp(3.4rem,11vw,9rem)] leading-[0.88] tracking-[-0.03em] mt-7">
              Majd
              <br />
              <span className="display-italic text-primary">Zarai</span>
            </h1>

            <div className="hero-role mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-foreground/80">
                AI Engineer
              </span>
              <span className="h-px w-8 bg-border-strong" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Co-founder, YottaNest
              </span>
            </div>

            <p className="hero-desc mt-8 max-w-xl text-lg sm:text-xl leading-relaxed text-foreground/70">
              I build real-world intelligent systems — multi-agent AI, RAG pipelines, and NLP applications
              that ship.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button onClick={() => scrollTo("contact")} className="hero-cta btn-ink group" data-magnetic>
                Let's connect
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button onClick={() => scrollTo("projects")} className="hero-cta arrow-link">
                View selected work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Meta sidebar */}
          <div className="lg:col-span-4">
            <div className="relative">
              <div className="relative w-full max-w-[300px] mx-auto lg:ml-auto">
                {/* offset accent frame */}
                <div className="absolute inset-0 translate-x-3.5 translate-y-3.5 border border-primary/40 rounded-[var(--radius)] pointer-events-none" />
                <div className="hero-portrait relative aspect-[4/5] overflow-hidden rounded-[var(--radius)] border border-border-strong">
                  <img
                    src="/images/profile.png"
                    alt="Majd Zarai"
                    data-parallax="0.08"
                    className="w-full h-full object-cover object-top grayscale-[0.2] contrast-[1.02] transition-all duration-700 hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-0 left-0 right-0 px-4 py-3 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-foreground/90 z-10">
                    Tunis · open to remote
                  </span>
                </div>
              </div>

              <dl className="mt-6 space-y-3 max-w-[300px] mx-auto lg:ml-auto">
                {meta.map(([k, v]) => (
                  <div key={k} className="hero-meta-item flex items-baseline justify-between gap-4 border-b border-border pb-2">
                    <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">{k}</dt>
                    <dd className="text-sm text-right text-foreground/80">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* tech marquee strip */}
      <div className="hero-strip relative z-10 border-y border-border py-3 overflow-hidden">
        <div className="flex items-center gap-10 whitespace-nowrap animate-marquee w-max font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex items-center gap-10">
              {techs.map((t) => (
                <span key={t} className="flex items-center gap-10">
                  {t}
                  <span className="text-primary">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div className="hero-cue absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <span className="block h-8 w-px bg-border-strong animate-pulse" />
      </div>
    </section>
  )
}

export default Hero
