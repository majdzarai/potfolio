"use client"

import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
}

from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

interface Experience {
  title: string
  companyName: string
  location?: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}

const experiences: Experience[] = [
  {
    title: "Co-Founder & Lead AI Engineer",
    companyName: "YottaNest",
    location: "Bulgaria",
    icon: "/images/yottanest.png",
    iconBg: "#1a5276",
    date: "Jul 2025 – Present",
    points: [
      "Architected advanced multi-agent AI platform automating KYC/AML workflows using Web, Graph, RAG, and Report Agents",
      "Integrated multiple LLMs (Llama 3.1, ChatGPT, DeepSeek, Kimik2, BERT) enabling adaptive reasoning and compliance automation",
      "Designed privacy-first microservices architecture ensuring secure on-premise data processing and regulatory alignment",
      "Achieved 90% reduction in manual processing time with improved accuracy in entity recognition and risk detection",
    ],
  },
  {
    title: "AI Engineer Intern",
    companyName: "Value Incubator",
    icon: "/images/profile.jpg",
    iconBg: "#3b82f6",
    date: "Jan 2025 – Jun 2025",
    points: [
      "Architected Django application with advanced semantic chunking, RAG architecture, and automated fact verification for Vigilant X platform",
      "Implemented sophisticated PPTX reporting using LLMs integrated with real-time financial data APIs",
      "Deployed scalable microservices handling 10,000+ daily queries with 99.9% uptime",
      "Award: Best Project of the Year (ESPRIT 2025) — Selected from 200+ competing projects",
    ],
  },
  {
    title: "AI Engineer Intern",
    companyName: "Axe Finance",
    location: "Tunisia",
    icon: "/images/profile.jpg",
    iconBg: "#06b6d4",
    date: "Jun 2025 – Aug 2025",
    points: [
      "Developed state-of-the-art NLP models for real-time adverse media monitoring and risk classification",
      "Built intelligent web scraping agents with adaptive algorithms for continuous data enrichment",
      "Enhanced client decision-making by 40% through AI-driven insights integration into compliance workflows",
    ],
  },
  {
    title: "GenAI Engineer Intern",
    companyName: "Sellmax",
    location: "Remote",
    icon: "/images/profile.jpg",
    iconBg: "#8b5cf6",
    date: "2024 – 2025",
    points: [
      "Designed end-to-end Tunisian Arabic voice assistant with integrated STT, NLU, and TTS pipelines",
      "Built comprehensive speech data pipelines including collection, preprocessing, and model fine-tuning",
      "Reduced response time by 60% while replacing traditional call center workflows with intelligent automation",
    ],
  },
]

const ExperienceCard: React.FC<Experience> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(26, 26, 26, 0.8)",
        color: "#fff",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(59, 130, 246, 0.2)",
        borderRadius: "1rem",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(42, 42, 42, 0.8)" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center rounded-full">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[60%] w-[60%] object-contain rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{experience.title}</h3>
        <p
          className="text-primary text-base sm:text-lg font-semibold"
          style={{ margin: 0 }}
        >
          {experience.companyName}
        </p>
        {experience.location && (
          <p className="text-muted-foreground text-sm mt-1 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {experience.location}
          </p>
        )}
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-muted-foreground pl-1 text-sm sm:text-base tracking-wider leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 animate-fade-in" id="experience">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm sm:text-base font-medium tracking-widest uppercase mb-2">
            What I have done so far
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold glow-text">
            Work Experience.
          </h2>
        </div>

        {/* Timeline */}
        <div className="mt-20 flex flex-col">
          <VerticalTimeline lineColor="rgba(59, 130, 246, 0.2)">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default Experience
