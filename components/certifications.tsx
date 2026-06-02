"use client"

import { useState, useRef } from "react"

interface Competition {
  name: string
  rank: string
  award: string
  link: string
}

interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  image: string
  credentialUrl?: string
  description: string
  skills: string[]
  competitions?: Competition[]
  category: "technical" | "leadership" | "competition" | "cloud"
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Building Transformer-Based NLP Applications",
    issuer: "NVIDIA",
    date: "2025",
    image: "/images/nv.png",
    credentialUrl: "https://learn.nvidia.com/certificates?id=MvR6W5u4RzyCCqVKAB73Cg",
    description: "Building NLP applications using Transformer-based architectures.",
    skills: ["Transformers", "NLP", "Deep Learning"],
    category: "technical",
  },
  {
    id: 2,
    title: "Applications of AI for Anomaly Detection",
    issuer: "NVIDIA",
    date: "2025",
    image: "/images/nv.png",
    credentialUrl: "https://learn.nvidia.com/certificates?id=d_4NscdNRlGglnXUx4U-7Q",
    description: "Developing AI systems for anomaly and fraud detection across real-world datasets.",
    skills: ["Anomaly Detection", "Machine Learning", "Neural Networks"],
    category: "technical",
  },
  {
    id: 3,
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "2025",
    image: "/images/nv.png",
    credentialUrl: "https://learn.nvidia.com/certificates?id=CBiDvL0xTIG4qY7hMeQPog",
    description: "Neural networks, backpropagation, training workflows, and deep learning fundamentals.",
    skills: ["Deep Learning", "Neural Networks", "CUDA"],
    category: "technical",
  },
  {
    id: 4,
    title: "Bal des Projets — Participation Certificate",
    issuer: "ESPRIT",
    date: "2025",
    image: "/images/bl.png",
    description: "Official participation certificate for the 12th edition of the Bal des Projets at ESPRIT.",
    skills: ["Project Development", "Teamwork", "Innovation"],
    category: "leadership",
  },
  {
    id: 5,
    title: "ACM Certificate of Recognition — HR Officer",
    issuer: "ACM ESPRIT Student Branch",
    date: "2025",
    image: "/images/acm.png",
    description: "Recognition for leadership as Human Resources Officer during the 2024–2025 mandate.",
    skills: ["Leadership", "Team Management", "Communication"],
    category: "leadership",
  },
  {
    id: 6,
    title: "Zindi Competition Achievements",
    issuer: "Zindi Africa",
    date: "2025",
    image: "/images/zindi2.png",
    credentialUrl: "https://zindi.africa/users/majdzarai",
    description: "Gold medal (2/69) and Bronze medal (102/265) in competitive machine learning challenges.",
    skills: ["Machine Learning", "Computer Vision", "Data Science"],
    category: "competition",
    competitions: [
      { name: "IndabaX Tunisia 2025: Challenge 1", rank: "2 / 69", award: "Gold Medal", link: "https://zindi.africa/competitions/indabax-tunisia-2025-challenge-1" },
      { name: "Classification for Landslide Detection", rank: "102 / 265", award: "Bronze Medal", link: "https://zindi.africa/competitions/classification-for-landslide-detection" },
    ],
  },
  {
    id: 7,
    title: "Hashgraph Developer Course",
    issuer: "The Hashgraph Association",
    date: "2025",
    image: "/images/hsh.png",
    description: "Distributed ledger technology, smart contracts, and decentralized apps.",
    skills: ["Hashgraph", "Smart Contracts", "Web3"],
    category: "technical",
  },
  {
    id: 8,
    title: "AWS Academy Graduate — Cloud Foundations",
    issuer: "AWS Academy",
    date: "2025",
    image: "/images/aws.png",
    credentialUrl: "https://www.credly.com/go/rTj1PJJQ",
    description: "Cloud architecture, compute, networking, and AWS fundamentals.",
    skills: ["AWS", "Cloud Architecture", "Networking"],
    category: "cloud",
  },
]

const INITIAL_DISPLAY_COUNT = 4

const filters = [
  { id: "all", label: "All" },
  { id: "technical", label: "Technical" },
  { id: "cloud", label: "Cloud" },
  { id: "leadership", label: "Leadership" },
  { id: "competition", label: "Competition" },
] as const

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedCategory, setSelectedCategory] =
    useState<"all" | "technical" | "leadership" | "competition" | "cloud">("all")
  const [showAll, setShowAll] = useState(false)

  const filtered =
    selectedCategory === "all" ? certifications : certifications.filter((c) => c.category === selectedCategory)
  const displayed = showAll ? filtered : filtered.slice(0, INITIAL_DISPLAY_COUNT)

  const count = (id: string) =>
    id === "all" ? certifications.length : certifications.filter((c) => c.category === id).length

  return (
    <section ref={sectionRef} id="certifications" className="relative py-24 lg:py-36 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="rule mb-6" data-reveal />
        <div className="flex items-center justify-between" data-reveal>
          <span className="eyebrow">Credentials</span>
          <span className="section-index">+ certifications</span>
        </div>

        <h2
          data-split
          className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] tracking-tight mt-10 max-w-3xl"
        >
          Certifications & <span className="display-italic text-primary">learning</span>
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 mt-12 border-b border-border pb-5" data-reveal>
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => {
                setSelectedCategory(f.id)
                setShowAll(false)
              }}
              className={`group flex items-baseline gap-1.5 text-sm transition-colors ${
                selectedCategory === f.id ? "text-primary" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              <span className="link-underline">{f.label}</span>
              <span className="font-mono text-[0.6rem] text-muted-foreground">{count(f.id)}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {displayed.map((cert) => (
            <div key={cert.id} className="group editorial-card p-7 flex gap-6" data-reveal>
              <div className="w-16 h-16 shrink-0 border border-border bg-background flex items-center justify-center overflow-hidden">
                <img src={cert.image} alt={cert.issuer} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
                  <span className="text-primary">{cert.category}</span>
                  <span className="h-px w-4 bg-border-strong" />
                  <span>{cert.issuer} · {cert.date}</span>
                </div>
                <h3 className="font-display text-xl leading-snug mt-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-foreground/55 leading-relaxed mt-2">{cert.description}</p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {cert.skills.map((s, idx) => (
                    <span key={idx} className="tag">
                      {s}
                    </span>
                  ))}
                </div>

                {cert.competitions && (
                  <div className="mt-4 border-t border-border pt-3 space-y-1.5">
                    {cert.competitions.map((c, idx) => (
                      <a
                        key={idx}
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-foreground/70 hover:text-primary transition-colors"
                      >
                        → {c.name} — {c.award} ({c.rank})
                      </a>
                    ))}
                  </div>
                )}

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="arrow-link text-[0.7rem] mt-4"
                  >
                    View credential
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filtered.length > INITIAL_DISPLAY_COUNT && (
          <div className="flex justify-center mt-14" data-reveal>
            <button
              onClick={() => {
                if (showAll) sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                setShowAll(!showAll)
              }}
              className="btn-outline group"
              data-magnetic
            >
              {showAll ? "Show less" : `Show all ${filtered.length}`}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180 group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certifications
