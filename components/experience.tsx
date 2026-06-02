"use client"

interface Experience {
  title: string
  companyName: string
  location?: string
  icon: string
  date: string
  points: string[]
  website?: string
}

const experiences: Experience[] = [
  {
    title: "Co-Founder & Lead AI Engineer",
    companyName: "YottaNest",
    location: "Bulgaria",
    icon: "/images/yottanest.png",
    date: "Jul 2025 — Present",
    website: "https://yottanest.com",
    points: [
      "Architected an advanced multi-agent AI platform automating KYC/AML workflows using Web, Graph, RAG, and Report agents",
      "Integrated multiple LLMs (Llama 3.1, ChatGPT, DeepSeek, Kimi K2, BERT) enabling adaptive reasoning and compliance automation",
      "Designed a privacy-first microservices architecture for secure on-premise data processing and regulatory alignment",
      "Achieved a 90% reduction in manual processing time with improved accuracy in entity recognition and risk detection",
    ],
  },
  {
    title: "AI Engineer Intern",
    companyName: "Value Incubator",
    icon: "/images/value.png",
    date: "Jan 2025 — Jun 2025",
    website: "https://value.com.tn/fr/accueil/",
    points: [
      "Architected a Django application with semantic chunking, RAG architecture, and automated fact verification for Vigilant X",
      "Implemented sophisticated PPTX reporting using LLMs integrated with real-time financial data APIs",
      "Deployed scalable microservices handling 10,000+ daily queries with 99.9% uptime",
      "Award: Best Project of the Year (ESPRIT 2025) — selected from 200+ competing projects",
    ],
  },
  {
    title: "AI Engineer Intern",
    companyName: "Axe Finance",
    location: "Tunisia",
    icon: "/images/axe.png",
    date: "Jun 2025 — Aug 2025",
    website: "https://www.axefinance.com",
    points: [
      "Developed state-of-the-art NLP models for real-time adverse media monitoring and risk classification",
      "Built intelligent web-scraping agents with adaptive algorithms for continuous data enrichment",
      "Enhanced client decision-making by 40% through AI-driven insights integrated into compliance workflows",
    ],
  },
  {
    title: "GenAI Engineer Intern",
    companyName: "Sellmax",
    location: "Remote",
    icon: "/images/sell.png",
    website: "https://www.sellmax.ai",
    date: "2024 — 2025",
    points: [
      "Designed an end-to-end Tunisian Arabic voice assistant with integrated STT, NLU, and TTS pipelines",
      "Built comprehensive speech data pipelines including collection, preprocessing, and model fine-tuning",
      "Reduced response time by 60% while replacing traditional call-center workflows with intelligent automation",
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 lg:py-36 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="rule mb-6" data-reveal />
        <div className="flex items-center justify-between" data-reveal>
          <span className="eyebrow">Experience</span>
          <span className="section-index">04 — 05</span>
        </div>

        <h2
          data-split
          className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] tracking-tight mt-10 max-w-3xl"
        >
          Where I've <span className="display-italic text-primary">worked</span>
        </h2>

        {/* Timeline */}
        <div className="mt-16 lg:mt-20">
          {experiences.map((exp, i) => (
            <div
              key={i}
              data-reveal
              className="group grid lg:grid-cols-12 gap-6 lg:gap-10 py-10 border-t border-border"
            >
              {/* Left: date + company */}
              <div className="lg:col-span-4">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {exp.date}
                </span>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 border border-border bg-card flex items-center justify-center overflow-hidden shrink-0">
                    <img src={exp.icon} alt={exp.companyName} className="w-full h-full object-cover" />
                  </div>
                  {exp.website ? (
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-xl link-underline hover:text-primary transition-colors inline-flex items-center gap-1.5"
                    >
                      {exp.companyName}
                      <svg className="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <span className="font-display text-xl">{exp.companyName}</span>
                  )}
                </div>
                {exp.location && (
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground mt-2 inline-block">
                    {exp.location}
                  </span>
                )}
              </div>

              {/* Right: role + points */}
              <div className="lg:col-span-8">
                <h3 className="font-display text-2xl sm:text-[1.65rem] leading-snug group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {exp.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-[0.95rem] text-foreground/65 leading-relaxed">
                      <span className="font-mono text-[0.6rem] text-primary pt-1 shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
