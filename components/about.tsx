"use client"

import { useRef } from "react"

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const skills = [
    { name: "Risk Scoring Models", icon: "🤖" },
    { name: "Anomaly Detection", icon: "🤖" },
    { name: "Python", icon: "🐍" },
    { name: "Computer Vision", icon: "⚛️" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "Transformers", icon: "🗄️" },
    { name: "NLP / LLMs", icon: "⚡" },
    { name: "LangChain", icon: "🤖" },
    { name: "ML/DL", icon: "🤖" },
    
    
  ]

  return (
    <section ref={sectionRef} className="relative py-20 px-4 sm:px-6 lg:px-8 animate-fade-in" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Image */}
          <div className="flex justify-center lg:justify-start animate-fade-in-left">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 glow-box" />
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary/50 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                <img src="/images/profile.jpg" alt="Majd Zarai" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 animate-fade-in-right">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 glow-text">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AI Engineer and Data Scientist with a solid foundation in mathematics, ML, and deep learning. I specialize in LLM pipelines, RAG systems, graph intelligence, and multi-agent MCP architectures. As Co-Founder of YottaNest and a freelance AI developer, I focus on building scalable automation and high-performance intelligent systems.
              </p>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Tech Stack</h3>
              <div className="grid grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-icon p-6 rounded-xl text-center group hover:scale-110 hover:glow-box transition-all duration-300 cursor-pointer border border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-4xl mx-auto mb-3 group-hover:text-primary transition-colors">{skill.icon}</div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
