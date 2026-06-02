"use client"

const skills = [
  { name: "Python", icon: "/images/Python.png" },
  { name: "LLMs / NLP", icon: "/images/nlp.png" },
  { name: "RAG Systems", icon: "/images/risk-scoring.png" },
  { name: "LangChain", icon: "/images/langchain.png" },
  { name: "TensorFlow", icon: "/images/tensorflow.png" },
  { name: "Computer Vision", icon: "/images/computer-vision.png" },
  { name: "ML / DL", icon: "/images/ml-dl.png" },
  { name: "Transformers", icon: "/images/transformers.png" },
]

const stats = [
  { count: 15, suffix: "+", label: "Projects shipped" },
  { count: 5, suffix: "+", label: "Engineering internships" },
  { value: "2nd", label: "IndabaX '25 hackathon" },
  { value: "#2028", label: "Zindi global rank" },
]

const metaRows: [string, string][] = [
  ["Role", "AI Engineer & Data Scientist"],
  ["Based in", "Tunisia · open to remote"],
  ["Education", "ESPRIT — Data Science & AI"],
  ["Currently", "Co-founder, YottaNest"],
]

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-36 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="rule mb-6" data-reveal />
        <div className="flex items-center justify-between" data-reveal>
          <span className="eyebrow">About</span>
          <span className="section-index">01 — 05</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mt-14 lg:mt-20 items-start">
          {/* Left: portrait + meta ledger */}
          <div className="lg:col-span-5">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0" data-reveal>
              {/* offset accent frame */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 border border-primary/40 rounded-[var(--radius)] pointer-events-none" />
              {/* portrait */}
              <div className="project-card group relative aspect-[4/5] overflow-hidden">
                <img
                  src="/images/profile.png"
                  alt="Majd Zarai — AI Engineer"
                  className="w-full h-full object-cover object-top grayscale-[0.25] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.04]"
                />
                {/* warm duotone + scrim */}
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-70 pointer-events-none" />
                {/* caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <div>
                    <p className="font-display text-xl leading-none text-foreground">Majd Zarai</p>
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground mt-2">
                      AI Engineer · GenAI
                    </p>
                  </div>
                  <span className="flex items-center gap-1.5 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-primary">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                    </span>
                    Open
                  </span>
                </div>
              </div>
            </div>

            {/* meta ledger */}
            <div className="grid grid-cols-1 gap-px bg-border border border-border mt-12" data-reveal>
              {metaRows.map(([k, v]) => (
                <div
                  key={k}
                  className="bg-white/[0.02] px-5 py-4 flex items-baseline justify-between gap-4 transition-colors hover:bg-white/[0.04]"
                >
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">{k}</dt>
                  <dd className="text-sm text-right text-foreground/85">{v}</dd>
                </div>
              ))}
            </div>
          </div>

          {/* Right: statement + stats */}
          <div className="lg:col-span-7">
            <h2
              data-split
              className="font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.1] tracking-tight"
            >
              I'm an AI engineer with a foundation in mathematics and deep learning, building{" "}
              <span className="display-italic text-primary">scalable, high-performance</span> intelligent
              systems — from LLM pipelines and GraphRAG to multi-agent architectures.
            </h2>

            <p data-reveal className="mt-8 text-base sm:text-lg leading-relaxed text-foreground/65 max-w-2xl">
              As Co-Founder of YottaNest, I focus on automation and decision intelligence for finance and
              compliance — replacing slow manual workflows with real-time, audit-grade AI. I care about
              systems that actually reach production and earn trust.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border mt-12 border border-border">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.04]"
                  data-reveal
                >
                  <div className="font-display text-3xl sm:text-4xl text-primary leading-none">
                    {"count" in s ? (
                      <span data-count={s.count} data-suffix={s.suffix}>
                        {s.count}
                        {s.suffix}
                      </span>
                    ) : (
                      s.value
                    )}
                  </div>
                  <div className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground mt-3">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Approach blurb */}
            <div className="mt-12 grid sm:grid-cols-2 gap-px bg-border border border-border" data-reveal>
              {[
                ["What I do", "LLM & RAG pipelines, agentic systems, NLP, computer vision, and the infra to ship them."],
                ["How I work", "Research-driven, production-minded, obsessed with reliability and measurable impact."],
              ].map(([k, v]) => (
                <div key={k} className="bg-white/[0.02] p-6">
                  <h4 className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-primary mb-3">{k}</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20 lg:mt-28">
          <div className="flex items-baseline justify-between border-b border-border pb-4 mb-8" data-reveal>
            <h3 className="font-display text-2xl">Core toolkit</h3>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              what I work with
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="group editorial-card p-5 flex items-center gap-3" data-reveal>
                <div className="w-9 h-9 flex items-center justify-center shrink-0">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-7 h-7 object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).style.display = "none"
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
