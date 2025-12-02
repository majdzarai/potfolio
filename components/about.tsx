"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const skills = [
    { name: "Risk Scoring Models", icon: "/images/risk-scoring.png", color: "#3b82f6" },
    { name: "Anomaly Detection", icon: "/images/anomaly-detection-circle.png", color: "#8b5cf6" },
    { name: "Python", icon: "/images/python.png", color: "#10b981" },
    { name: "Computer Vision", icon: "/images/computer-vision.png", color: "#f59e0b" },
    { name: "TensorFlow", icon: "/images/tensorflow.png", color: "#ef4444" },
    { name: "Transformers", icon: "/images/transformers.png", color: "#06b6d4" },
    { name: "NLP / LLMs", icon: "/images/nlp.png", color: "#ec4899" },
    { name: "LangChain", icon: "/images/langchain.png", color: "#14b8a6" },
    { name: "ML/DL", icon: "/images/ml-dl.png", color: "#6366f1" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section ref={sectionRef} className="relative py-20 px-4 sm:px-6 lg:px-8 animate-fade-in" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-start animate-fade-in-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 glow-box" />
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary/50 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                <img src="/images/profile.jpg" alt="Majd Zarai" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="space-y-8 animate-fade-in-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 glow-text">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AI Engineer and Data Scientist with a solid foundation in mathematics, ML, and deep learning. I specialize in LLM pipelines, RAG systems, graph intelligence, and multi-agent MCP architectures. As Co-Founder of YottaNest and a freelance AI developer, I focus on building scalable automation and high-performance intelligent systems.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary">Core Technologies & Expertise</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-3 gap-4 sm:gap-6"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative"
                  >
                    <div
                      className="relative p-4 sm:p-6 rounded-2xl text-center overflow-hidden border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                      style={{
                        boxShadow: `0 4px 20px ${skill.color}15`,
                      }}
                    >
                      {/* Animated background gradient */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}05)`,
                        }}
                      />

                      {/* Glow effect on hover */}
                      <div
                        className="absolute -inset-1 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 rounded-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${skill.color}40, transparent)`,
                        }}
                      />

                      {/* Icon Image */}
                      <motion.div
                        className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                          onError={(e) => {
                            // Fallback to a placeholder if image doesn't exist
                            const target = e.target as HTMLImageElement
                            target.src = "/images/tech/placeholder.png"
                            target.onerror = null
                          }}
                        />
                      </motion.div>

                      {/* Skill Name */}
                      <p className="relative z-10 text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </p>

                      {/* Decorative corner accent */}
                      <div
                        className="absolute top-2 right-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          backgroundColor: skill.color,
                          boxShadow: `0 0 10px ${skill.color}`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
