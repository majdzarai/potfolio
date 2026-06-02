"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

gsap.registerPlugin(useGSAP)

interface Recognition {
  title: string
  description: string
  year: string
  icon: string
  project?: string
  organization: string
  type: string
  images?: string[]
  rank?: string
  medals?: string[]
  competitions?: {
    name: string
    rank: string
    award: string
    link: string
  }[]
}

const recognitions: Recognition[] = [
  {
    title: "2nd Place — IndabaX Tunisia 2025 Hackathon",
    description:
      "Secured 2nd place out of 69 competing teams at IndabaX Tunisia 2025 hosted by SUP'COM. Developed an advanced anomaly detection system using ML pipelines including Isolation Forest, Autoencoders, and statistical methods. Awarded a 10,500 TND prize for outstanding performance in identifying rare events and outliers in high-dimensional data.",
    year: "2025",
    icon: "/images/anomaly.jpg",
    project: "Anomaly Detection System",
    organization: "IndabaX Tunisia (SUP'COM)",
    type: "Hackathon",
    rank: "2 / 69 Teams",
    medals: ["Silver"],
    images: [
      "/images/first.jpg",
      "/images/zindi.jpg",
      "/images/ai.jpg",
      "/images/sup.jpg",
      "/images/2.jpg",
      "/images/1.jpg",
      "https://drive.google.com/file/d/15WC1FBzGJndiUIp6eWPMMKUykraRNrkI/view?usp=drive_link",
      "https://drive.google.com/file/d/1xlHaCCywtoEqn9jORUHFbbI5Ax5NbMAq/view?usp=drive_link",
      "/images/hak3.jpg",
      "/images/hak4.jpg",
      "/images/hak5.jpg",
      "/images/hak6.jpg",
      "https://drive.google.com/file/d/1dmqw75v9x9hFLwIj7IP9GdQ8zrIma_KY/view?usp=drive_link",
    ],
  },
  {
    title: "Best Project of the Year — ESPRIT University 2025",
    description:
      "Selected from over 200 competing projects for Vigilant X, a crypto fund due diligence platform addressing post-FTX fraud prevention. The platform automates fund analysis through PDF scanning, internet research, KYC/AML checks, and professional PPTX report generation, using Monte Carlo simulations with human-in-the-loop validation for audit-grade reliability.",
    year: "2025",
    icon: "/images/esprit.png",
    project: "Vigilant X",
    organization: "ESPRIT University",
    type: "Award",
    rank: "Best of 200+ Projects",
    medals: ["Gold"],
    images: [
      "/images/ball.jpg",
      "/images/ball1.jpg",
      "/images/ball2.jpg",
      "https://drive.google.com/file/d/1mBmhzh4jj8v2yCqHDvC_1vIahpLgFU-h/view?usp=drive_link",
      "https://drive.google.com/file/d/1M1MiKWeGgK9iB-ulOG-DhSPkM-5H-LQe/view?usp=drive_link",
      "https://drive.google.com/file/d/1iA1j5IrXtp6UD2fUBOvbvUOLRwuxlq23/view?usp=drive_link",
      "/images/value8.jpg",
    ],
  },
  {
    title: "Top Project Selection — Value Incubator",
    description:
      "Recognized by Value Incubator for Vigilant X, a crypto fund due diligence platform preventing FTX-like fraud. Automates comprehensive fund analysis through PDF scanning, internet research, and KYC/AML compliance, generating professional PPTX reports and using Monte Carlo simulations for forecasting. Reduces manual processing time by 90% while handling 10,000+ daily queries.",
    year: "2025",
    icon: "/images/value.png",
    project: "Vigilant X",
    organization: "Value Incubator",
    type: "Award",
    images: [
      "/images/value1.jpg",
      "/images/value2.jpg",
      "https://drive.google.com/file/d/1Yx5_VUmnZ1IzV7qA3tksNwbULD1UJIBS/view?usp=drive_link",
      "/images/value5.jpg",
      "/images/value6.jpg",
      "/images/value7.jpg",
      "/images/value12.jpg",
      "/images/vl.jpg",
    ],
  },
  {
    title: "Zindi Global Leaderboard Recognition",
    description:
      "Ranked #2028 worldwide on Zindi's global leaderboard as a leading AI practitioner. Achieved a Gold medal (2/69) in IndabaX Tunisia 2025 Challenge 1 and a Bronze medal (102/265, Top 30 Worldwide) in the Landslide Detection Challenge, demonstrating competitive skill in machine learning and real-world problem solving.",
    year: "2025",
    icon: "/images/zn.png",
    project: "Zindi Competitions",
    organization: "Zindi Africa",
    type: "Competition",
    rank: "#2028 Global Rank",
    medals: ["Gold", "Bronze"],
    competitions: [
      {
        name: "IndabaX Tunisia 2025: Challenge 1",
        rank: "2 / 69",
        award: "Gold Medal",
        link: "https://zindi.africa/competitions/indabax-tunisia-2025-challenge-1",
      },
      {
        name: "Classification for Landslide Detection",
        rank: "102 / 265 (Top 30 Worldwide)",
        award: "Bronze Medal",
        link: "https://zindi.africa/competitions/classification-for-landslide-detection",
      },
    ],
    images: ["/images/zindi1.png", "/images/zindi2.png"],
  },
]

const isVideo = (url: string): boolean => {
  const ext = [".mp4", ".webm", ".ogg", ".mov", ".avi", ".mkv"]
  return ext.some((e) => url.toLowerCase().includes(e)) || url.includes("drive.google.com")
}
const isGoogleDrive = (url: string): boolean => url.includes("drive.google.com")
const drivePreview = (url: string) =>
  url.includes("/preview") ? url : url.replace("/view?usp=drive_link", "/preview").replace("/view", "/preview")

const medalColor = (m: string) =>
  m === "Gold" ? "text-amber-600" : m === "Silver" ? "text-zinc-500" : "text-orange-700"

const RecognitionCard: React.FC<Recognition> = ({
  title,
  description,
  year,
  icon,
  project,
  organization,
  type,
  images = [],
  rank,
  medals,
  competitions,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(0)

  const go = (delta: number) => {
    setDir(delta)
    setCurrent((p) => (p + delta + images.length) % images.length)
  }
  const jump = (idx: number) => {
    setDir(idx >= current ? 1 : -1)
    setCurrent(idx)
  }

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1)
      else if (e.key === "ArrowRight") go(1)
      else if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, images.length, current])

  const media = images[current]
  const currentIsVideo = media ? isVideo(media) : false

  const galleryRef = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      if (!isOpen) return
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
      const q = gsap.utils.selector(galleryRef)
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(q(".rg-stage"), { autoAlpha: 0, scale: 1.04, duration: 0.6 })
        .from(q("[data-g]"), { autoAlpha: 0, y: 22, duration: 0.55, stagger: 0.06 }, "-=0.3")
    },
    { dependencies: [isOpen], scope: galleryRef },
  )

  return (
    <>
      <div
        onClick={() => {
          if (images.length > 0) {
            setIsOpen(true)
            setCurrent(0)
          }
        }}
        data-reveal
        className={`group editorial-card p-7 sm:p-8 flex flex-col ${images.length > 0 ? "cursor-pointer" : ""}`}
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground flex items-center gap-3">
            <span className="text-primary">{type}</span>
            <span className="h-px w-5 bg-border-strong" />
            <span>{year}</span>
          </div>
          <div className="w-12 h-12 border border-border bg-background overflow-hidden shrink-0">
            <img src={icon} alt={organization} className="w-full h-full object-cover" />
          </div>
        </div>

        <h3 className="font-display text-2xl leading-snug mt-5 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-sm text-foreground/60 leading-relaxed mt-4 flex-1">{description}</p>

        {/* Meta */}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-foreground/70">
            {organization}
          </span>
          {project && <span className="tag-secondary tag">{project}</span>}
          {rank && <span className="tag">{rank}</span>}
          {medals?.map((m) => (
            <span key={m} className={`font-mono text-[0.62rem] uppercase tracking-[0.14em] ${medalColor(m)}`}>
              ◆ {m}
            </span>
          ))}
        </div>

        {/* Competitions */}
        {competitions && competitions.length > 0 && (
          <div className="mt-5 border-t border-border pt-4 space-y-2">
            {competitions.map((c, i) => (
              <a
                key={i}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-between gap-3 text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                <span className="leading-snug">{c.name}</span>
                <span className={`font-mono text-[0.6rem] whitespace-nowrap ${medalColor(c.award.split(" ")[0])}`}>
                  {c.award}
                </span>
              </a>
            ))}
          </div>
        )}

        {/* Gallery cue */}
        {images.length > 0 && (
          <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
              {images.length} media
            </span>
            <span className="arrow-link text-[0.7rem]">
              View gallery
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </div>
        )}
      </div>

      {/* Gallery modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl w-[calc(100%-1.5rem)] max-h-[92vh] overflow-hidden bg-card border border-border-strong rounded-xl p-0 gap-0">
          <div ref={galleryRef} className="flex flex-col max-h-[92vh] overflow-y-auto">
            {/* Media stage */}
            <div className="rg-stage relative w-full bg-ink h-[42vh] sm:h-[54vh] flex items-center justify-center overflow-hidden shrink-0">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={current}
                  custom={dir}
                  variants={{
                    enter: (d: number) => ({ opacity: 0, x: d >= 0 ? 90 : -90 }),
                    center: { opacity: 1, x: 0 },
                    exit: (d: number) => ({ opacity: 0, x: d >= 0 ? -90 : 90 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                  className="absolute inset-0 flex items-center justify-center p-4 sm:p-6"
                >
                  {currentIsVideo ? (
                    isGoogleDrive(media) ? (
                      <iframe
                        src={drivePreview(media)}
                        title={`${title} — ${current + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full max-w-4xl"
                      />
                    ) : (
                      <video src={media} controls autoPlay playsInline className="max-w-full max-h-full object-contain" />
                    )
                  ) : (
                    <img
                      src={media}
                      alt={`${title} — ${current + 1}`}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    onClick={() => go(-1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/70 backdrop-blur-sm border border-border-strong flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors z-10"
                    aria-label="Previous"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => go(1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/70 backdrop-blur-sm border border-border-strong flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors z-10"
                    aria-label="Next"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[0.62rem] tracking-[0.18em] bg-background/80 backdrop-blur-sm border border-border rounded-full px-3.5 py-1.5 z-10">
                {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="shrink-0 px-5 sm:px-8 py-4 border-b border-border bg-background/40">
                <div className="flex gap-2.5 overflow-x-auto pb-1">
                  {images.map((m, idx) => {
                    const vid = isVideo(m)
                    return (
                      <button
                        key={idx}
                        onClick={() => jump(idx)}
                        className={`flex-shrink-0 relative overflow-hidden rounded-md border-2 transition-all ${
                          current === idx ? "border-primary scale-105" : "border-transparent opacity-50 hover:opacity-100"
                        }`}
                        style={{ width: 70, height: 70 }}
                      >
                        {vid ? (
                          isGoogleDrive(m) ? (
                            <div className="w-full h-full bg-ink flex items-center justify-center">
                              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          ) : (
                            <video src={m} className="w-full h-full object-cover" muted playsInline />
                          )
                        ) : (
                          <img src={m} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Details */}
            <div className="px-7 sm:px-12 py-9 sm:py-11">
              <div
                data-g
                className="flex items-center gap-4 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground"
              >
                <span className="text-primary">{type}</span>
                <span className="h-px w-6 bg-border-strong" />
                <span>{year}</span>
                <span className="h-px w-6 bg-border-strong" />
                <span>{organization}</span>
              </div>

              <DialogHeader className="text-left">
                <DialogTitle
                  data-g
                  className="font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.08] tracking-tight mt-4"
                >
                  {title}
                </DialogTitle>
              </DialogHeader>

              {(rank || (medals && medals.length > 0) || project) && (
                <div data-g className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6">
                  {rank && <span className="tag">{rank}</span>}
                  {project && <span className="tag tag-secondary">{project}</span>}
                  {medals?.map((m) => (
                    <span
                      key={m}
                      className={`font-mono text-[0.66rem] uppercase tracking-[0.14em] ${medalColor(m)}`}
                    >
                      ◆ {m}
                    </span>
                  ))}
                </div>
              )}

              <div className="grid lg:grid-cols-3 gap-10 lg:gap-14 mt-9">
                <div className="lg:col-span-2" data-g>
                  <h4 className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-primary mb-4">
                    About this recognition
                  </h4>
                  <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">{description}</p>
                </div>

                <div className="space-y-8">
                  {competitions && competitions.length > 0 && (
                    <div data-g>
                      <h4 className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-primary mb-4">
                        Competitions
                      </h4>
                      <div className="space-y-3">
                        {competitions.map((c, i) => (
                          <a
                            key={i}
                            href={c.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block border border-border rounded-lg p-4 hover:border-primary/50 transition-colors group/comp"
                          >
                            <p className="text-sm text-foreground/85 group-hover/comp:text-primary transition-colors leading-snug">
                              {c.name}
                            </p>
                            <div className="flex items-center justify-between mt-2 font-mono text-[0.6rem] uppercase tracking-[0.14em]">
                              <span className="text-muted-foreground">{c.rank}</span>
                              <span className={medalColor(c.award.split(" ")[0])}>{c.award}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <div data-g>
                    <button onClick={() => setIsOpen(false)} className="btn-ink w-full py-3.5">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

const Recognition = () => {
  return (
    <section id="recognition" className="relative py-24 lg:py-36 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="rule mb-6" data-reveal />
        <div className="flex items-center justify-between" data-reveal>
          <span className="eyebrow">Recognition</span>
          <span className="section-index">03 — 05</span>
        </div>

        <h2
          data-split
          className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] tracking-tight mt-10 max-w-3xl"
        >
          Awards & <span className="display-italic text-primary">distinctions</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14">
          {recognitions.map((r, i) => (
            <RecognitionCard key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Recognition
