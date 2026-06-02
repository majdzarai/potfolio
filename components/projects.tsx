"use client"

import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

gsap.registerPlugin(useGSAP)

interface Project {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  tech: string[]
  highlights?: string[]
  achievements?: string[]
  date: string
  videoUrl?: string
  videoType?: "youtube" | "local" | "drive"
  category: "professional" | "academic" | "personal"
}

const projects: Project[] = [
  {
    id: 1,
    title: "Vigilant X — AI Crypto Fund Due Diligence",
    shortDescription: "Automated crypto fund due diligence platform preventing fraud with AI-driven analysis and forecasting",
    fullDescription:
      "Vigilant X addresses the critical need for transparent crypto fund oversight exposed by the FTX collapse (2022), where poor due diligence led to billions in investor losses. The platform automates comprehensive fund analysis by scanning PDFs, researching across the internet, conducting KYC/AML checks, and generating professional PPTX reports. It combines AI-powered fraud detection with advanced Monte Carlo simulations for crypto forecasting, while incorporating human-in-the-loop validation for audit-grade reliability.",
    image: "/images/project-1.png",
    tech: ["Python", "LLMs", "RAG", "FastAPI", "React", "PostgreSQL", "Monte Carlo", "NLP"],
    highlights: [
      "Automated PDF scanning & multi-source internet research",
      "AI-powered KYC/AML compliance checks with red flag detection",
      "Professional PPTX report generation",
      "Monte Carlo simulation for crypto forecasting",
      "Human-in-the-loop validation ensuring audit-grade accuracy",
    ],
    achievements: [
      "Selected as Best Project in the Data Science Department at Esprit University",
      "Awarded Best Project by Value Company for innovation and impact",
      "Showcased at the Ball of Project – 12th Edition (2025)",
    ],
    date: "Jan 2025 – Jun 2025",
    videoUrl: "https://www.youtube.com/embed/cQDnZIdzZVg",
    videoType: "youtube",
    category: "professional",
  },
  {
    id: 12,
    title: "YottaNest",
    shortDescription: "AI-driven compliance and credit intelligence platform for banks and financial institutions.",
    fullDescription:
      "YottaNest is an AI-powered compliance and credit intelligence platform designed to transform how banks and financial institutions manage KYC/AML processes and credit decisioning. As a co-founded venture, it focuses on building scalable automation systems that replace slow, manual compliance workflows with intelligent, real-time decision engines.",
    image: "/images/yottanest.png",
    tech: ["AI/ML", "Python", "React", "Next.js", "Cloud Infrastructure", "NLP", "Document Intelligence"],
    highlights: [
      "End-to-end AI automation for KYC/AML compliance",
      "Automated company & credit reporting systems",
      "Multi-source data collection across public and private datasets",
      "Real-time risk scoring and decision engines",
      "Co-founded and built as an enterprise-grade AI startup",
    ],
    date: "2024 – Present",
    category: "professional",
  },
  {
    id: 13,
    title: "GraphRAG Agentic Intelligence System",
    shortDescription: "An agentic AI system using LangGraph, custom tools, and a Neo4j-powered GraphRAG pipeline.",
    fullDescription:
      "This project is a fully implemented Agentic AI system built as part of a Generative AI assignment. The system integrates LangGraph agent orchestration, custom-built tools, and a GraphRAG pipeline connected to a Neo4j knowledge graph.",
    image: "/images/graph.jpg",
    tech: ["LangGraph", "Neo4j", "GraphRAG", "Python", "FastAPI", "Vector Search", "LLM Tooling"],
    highlights: [
      "Multi-step agent workflow using LangGraph",
      "Neo4j knowledge graph with nodes and relationships",
      "GraphRAG with vector similarity + graph traversal",
      "FastAPI backend with /ask and /graph-info endpoints",
    ],
    date: "2025",
    videoUrl: "https://drive.google.com/file/d/1-f54cQ7--f9X9Y3hks1LRpm6eKXM8z9o/preview",
    videoType: "drive",
    category: "professional",
  },
  {
    id: 10,
    title: "Anomaly Detection System",
    shortDescription: "A robust AI system for detecting rare events and hidden outliers in high-dimensional data.",
    fullDescription:
      "A highly advanced anomaly detection platform designed to identify unusual patterns across complex datasets. Validated at IndabaX Tunisia 2025 Hackathon where I achieved 2nd place out of 133 teams.",
    image: "/images/anomaly.jpg",
    tech: ["Python", "Scikit-learn", "Isolation Forest", "Autoencoders", "TensorFlow"],
    highlights: [
      "Multi-layer anomaly detection pipelines",
      "Real-time anomaly scoring and monitoring dashboards",
      "Domain-agnostic architecture for finance, security, healthcare",
      "Model validated in competitive AI settings (IndabaX Tunisia 2025)",
    ],
    date: "2024",
    category: "professional",
  },
  {
    id: 2,
    title: "Churn Prediction App",
    shortDescription: "AI-powered customer retention tool with real-time predictions",
    fullDescription:
      "This project focuses on building an AI-powered churn prediction application designed to help businesses identify customers at risk of leaving. The system leverages a Gradient Boosting Model trained on behavioral data.",
    image: "/images/project-2.png",
    tech: ["Python", "Scikit-learn", "Gradient Boosting", "Streamlit", "Pandas"],
    highlights: [
      "Interactive user interface developed with Streamlit",
      "Real-time predictions with optimized decision threshold",
      "Confusion matrix and ROC curve for model evaluation",
    ],
    date: "Mar 2025",
    category: "academic",
  },
  {
    id: 3,
    title: "Real-Time Parking Space Detection",
    shortDescription: "Computer vision system for live parking spot monitoring",
    fullDescription:
      "A real-time car parking space detection system using OpenCV to identify and monitor available parking spots through live video feeds.",
    image: "/images/project-3.png",
    tech: ["Python", "OpenCV", "MediaPipe", "cvzone", "Pickle"],
    highlights: [
      "Real-time detection and updates of parking space availability",
      "Interactive parking spot selection and configuration",
      "Hand gesture tracking via webcam",
    ],
    date: "Mar 2025",
    videoUrl: "https://drive.google.com/file/d/1a3SAvPWvC4elut3U41JFK_jQ0nd4lJpH/preview",
    videoType: "drive",
    category: "personal",
  },
  {
    id: 4,
    title: "Brain Tumor Classification",
    shortDescription: "Deep learning solution for MRI-based tumor detection",
    fullDescription:
      "An end-to-end deep learning solution for brain tumor classification from MRI scans using CNNs and transfer learning with VGG16 and EfficientNetB3.",
    image: "/images/project-4.png",
    tech: ["Python", "TensorFlow", "VGG16", "EfficientNetB3", "Streamlit"],
    highlights: [
      "Transfer learning with VGG16 and EfficientNetB3",
      "Real-time predictions for Glioma, Meningioma, Pituitary, No Tumor",
      "Publicly accessible deployed model",
    ],
    date: "Jan 2025 – Feb 2025",
    videoUrl: "https://drive.google.com/file/d/197W4Q_4IfUhuF4-p4T3DHN4l2Ca-Whn6/preview",
    videoType: "drive",
    category: "academic",
  },
  {
    id: 5,
    title: "AI Math Problem-Solving Platform",
    shortDescription: "Interactive canvas for AI-powered equation solving",
    fullDescription:
      "An AI-powered platform that transforms the way users engage with mathematical problems by combining LaTeX rendering, React, Mantine, and Generative AI models.",
    image: "/images/project-5.png",
    tech: ["React", "Mantine", "LaTeX", "Generative AI", "Canvas API"],
    highlights: [
      "Dynamic math canvas with real-time updates",
      "AI-driven equation solving and expression analysis",
      "Handwritten and graphical input interpretation",
    ],
    date: "Dec 2024",
    videoUrl: "https://drive.google.com/file/d/1wqfT5MrbtI5tHs5x61Siiu739dm3aHOc/preview",
    videoType: "drive",
    category: "personal",
  },
  {
    id: 6,
    title: "GENME — AI Image Generation Platform",
    shortDescription: "Text-to-image generation with premium features",
    fullDescription:
      "An AI-powered image generation platform that allows users to create high-quality images from text prompts in just a few clicks.",
    image: "/images/project-6.png",
    tech: ["React", "AI/ML", "Node.js", "Stripe", "Tailwind CSS"],
    highlights: [
      "High-quality image generation from text prompts",
      "Three free attempts with premium unlimited access",
      "Integrated payment system for premium plans",
    ],
    date: "Nov 2024 – Dec 2024",
    videoUrl: "https://drive.google.com/file/d/1DFxPRpSBp1-fXMXGLjK02DpF9wbWDhsT/preview",
    videoType: "drive",
    category: "personal",
  },
  {
    id: 7,
    title: "RIVEZ — E-Learning Management System",
    shortDescription: "Modern LMS with real-time features and chatbot",
    fullDescription:
      "A modern E-learning Management System designed to enhance communication, course management, and user engagement.",
    image: "/images/rivez elearning.jpg",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Socket.io"],
    highlights: [
      "Teachers: Create and manage classes, courses, and chapters",
      "Real-time notifications for enrollments and messages",
      "Integrated messaging system for student-teacher communication",
    ],
    date: "Jul 2024 – Aug 2024",
    videoUrl: "https://drive.google.com/file/d/1UOc9eiePiIXUZZxUYRY-GAet6Y2-2Up5/preview",
    videoType: "drive",
    category: "academic",
  },
  {
    id: 8,
    title: "Sign Language Detection Model",
    shortDescription: "ML-based gesture recognition for accessibility",
    fullDescription:
      "A machine learning-based sign language detection model aimed at supporting communication for Deaf and Hard-of-Hearing communities.",
    image: "/images/sign language.jpg",
    tech: ["Python", "OpenCV", "TensorFlow", "MediaPipe", "Scikit-learn"],
    highlights: [
      "Live data collection via webcam",
      "Real-time gesture preprocessing and classification",
      "Supports Deaf and Hard-of-Hearing communities",
    ],
    date: "Feb 2024 – Mar 2024",
    videoUrl: "https://drive.google.com/file/d/1yUm9G2btHkMzHwA8n2peo6gBlMqyf4oM/preview",
    videoType: "drive",
    category: "personal",
  },
  {
    id: 9,
    title: "Face Detection System",
    shortDescription: "Real-time face detection and recognition",
    fullDescription:
      "A real-time face detection system built with OpenCV and deep learning models for accurate identification and tracking.",
    image: "/images/face detection.jpg",
    tech: ["Python", "OpenCV", "Deep Learning", "Computer Vision", "MediaPipe"],
    highlights: [
      "Real-time face detection in live video streams",
      "High accuracy facial recognition",
      "Multiple face tracking capabilities",
    ],
    date: "2024",
    videoUrl: "https://drive.google.com/file/d/1cNfHnKnOgozAJfPKJ_Zc1iUR4kyi1hmh/preview",
    videoType: "drive",
    category: "personal",
  },
  {
    id: 11,
    title: "Intelligent News Research AI Agent",
    shortDescription: "AI agent for comprehensive news research with fake news detection",
    fullDescription:
      "An advanced AI-powered news research agent that transforms how users gather and analyze information with autonomous research and fact-checking.",
    image: "/images/news.avif",
    tech: ["Python", "AI Agents", "LLMs", "Web Scraping", "NLP", "Fake News Detection"],
    highlights: [
      "Natural language query understanding",
      "Autonomous research planning and execution",
      "Fake news detection and credibility verification",
    ],
    date: "2024",
    videoUrl: "https://drive.google.com/file/d/1J471JXQxsyjWbSqCyYVyofSBRifBVUGN/preview",
    videoType: "drive",
    category: "academic",
  },
]

const getYouTubeEmbedUrl = (url: string): string => {
  if (url.includes("youtube.com/embed/")) return url
  if (url.includes("youtube.com/watch?v=")) {
    const videoId = url.split("v=")[1]?.split("&")[0]
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url
  }
  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1]?.split("?")[0]
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url
  }
  return url
}

const INITIAL_DISPLAY_COUNT = 7

const categories = [
  { key: "all", label: "All" },
  { key: "professional", label: "Professional" },
  { key: "academic", label: "Academic" },
  { key: "personal", label: "Personal" },
] as const

const ProjectModalBody = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
      const q = gsap.utils.selector(ref)
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".pm-media", { autoAlpha: 0, scale: 1.06, duration: 0.7 })
        .from(q("[data-m]"), { autoAlpha: 0, y: 26, duration: 0.6, stagger: 0.07 }, "-=0.35")
    },
    { scope: ref },
  )

  const videoSrc =
    project.videoUrl &&
    (project.videoType === "youtube"
      ? project.videoUrl
      : project.videoUrl.includes("/preview")
        ? project.videoUrl
        : project.videoUrl.replace("/view", "/preview"))

  return (
    <div ref={ref} className="flex flex-col max-h-[92vh] overflow-y-auto">
      {/* Media banner */}
      <div className="pm-media relative w-full bg-ink shrink-0">
        {videoSrc ? (
          <div className="relative w-full aspect-video max-h-[55vh] mx-auto">
            <iframe
              src={videoSrc}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        ) : (
          <div className="relative w-full h-[34vh] sm:h-[42vh]">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          </div>
        )}
        <span className="absolute top-5 left-5 font-mono text-[0.6rem] uppercase tracking-[0.16em] px-3 py-1.5 bg-primary text-primary-foreground">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="px-7 sm:px-12 py-9 sm:py-12">
        <DialogHeader className="text-left">
          <div
            data-m
            className="flex items-center gap-4 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span>{project.date}</span>
            {project.videoUrl && (
              <>
                <span className="h-px w-6 bg-border-strong" />
                <span className="text-primary">Live demo</span>
              </>
            )}
          </div>
          <DialogTitle
            data-m
            className="font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05] tracking-tight text-foreground mt-4"
          >
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14 mt-10">
          {/* Left: overview + features */}
          <div className="lg:col-span-2 space-y-10">
            <div data-m>
              <h4 className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-primary mb-4">
                Overview
              </h4>
              <DialogDescription className="text-base sm:text-lg text-foreground/75 leading-relaxed">
                {project.fullDescription}
              </DialogDescription>
            </div>

            {project.highlights && project.highlights.length > 0 && (
              <div data-m>
                <h4 className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-primary mb-5">
                  Key features
                </h4>
                <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
                  {project.highlights.map((h, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4 text-[0.95rem] sm:text-base text-foreground/80"
                    >
                      <span className="font-mono text-xs text-primary pt-1 shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right: meta */}
          <div className="space-y-8">
            <div data-m>
              <h4 className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-primary mb-4">
                Tech stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {project.achievements && project.achievements.length > 0 && (
              <div data-m className="rounded-lg border border-primary/25 bg-primary/[0.06] p-6">
                <h4 className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-primary mb-4 flex items-center gap-2">
                  <span>✦</span> Recognition
                </h4>
                <ul className="space-y-3">
                  {project.achievements.map((a, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[0.95rem] text-foreground/85 leading-relaxed"
                    >
                      <span className="text-primary mt-0.5">—</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div data-m>
              <button onClick={onClose} className="btn-ink w-full py-3.5">
                Close project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [selectedCategory, setSelectedCategory] =
    useState<"all" | "professional" | "academic" | "personal">("all")

  const openProjectModal = (project: Project) => {
    const processed = { ...project }
    if (processed.videoUrl && !processed.videoType) {
      if (processed.videoUrl.includes("youtube.com") || processed.videoUrl.includes("youtu.be")) {
        processed.videoType = "youtube"
        processed.videoUrl = getYouTubeEmbedUrl(processed.videoUrl)
      } else {
        processed.videoType = "local"
      }
    }
    setSelectedProject(processed)
    setIsModalOpen(true)
  }

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_DISPLAY_COUNT)
  const hasMoreProjects = filteredProjects.length > INITIAL_DISPLAY_COUNT
  const [featured, ...rest] = displayedProjects

  const counts = {
    all: projects.length,
    professional: projects.filter((p) => p.category === "professional").length,
    academic: projects.filter((p) => p.category === "academic").length,
    personal: projects.filter((p) => p.category === "personal").length,
  }

  return (
    <>
      <section ref={sectionRef} id="projects" className="relative py-24 lg:py-36 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="rule mb-6" data-reveal />
          <div className="flex items-center justify-between" data-reveal>
            <span className="eyebrow">Selected Work</span>
            <span className="section-index">02 — 05</span>
          </div>

          <h2
            data-split
            className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] tracking-tight mt-10 max-w-3xl"
          >
            Things I've <span className="display-italic text-primary">designed & built</span>
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 mt-12 border-b border-border pb-5" data-reveal>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  setSelectedCategory(cat.key)
                  setShowAll(false)
                }}
                className={`group flex items-baseline gap-1.5 text-sm transition-colors ${
                  selectedCategory === cat.key ? "text-primary" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                <span className="link-underline">{cat.label}</span>
                <span className="font-mono text-[0.6rem] text-muted-foreground">
                  {counts[cat.key as keyof typeof counts]}
                </span>
              </button>
            ))}
          </div>

          {/* Featured project */}
          {featured && (
            <article
              key={`feat-${featured.id}-${selectedCategory}`}
              onClick={() => openProjectModal(featured)}
              data-reveal
              className="group grid lg:grid-cols-2 gap-8 lg:gap-12 mt-14 cursor-pointer items-center"
            >
              <div className="project-card relative aspect-[16/11] overflow-hidden order-1 lg:order-none">
                <img
                  src={featured.image || "/placeholder.svg"}
                  alt={featured.title}
                  data-parallax="0.06"
                  className="w-full h-full object-cover grayscale-[0.25] transition-all duration-700 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 font-mono text-[0.58rem] uppercase tracking-[0.16em] px-2.5 py-1 bg-primary text-primary-foreground">
                  Featured
                </span>
              </div>
              <div>
                <div className="flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="text-primary">{featured.category}</span>
                  <span className="h-px w-5 bg-border-strong" />
                  <span>{featured.date}</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl leading-tight tracking-tight mt-4 group-hover:text-primary transition-colors">
                  {featured.title}
                </h3>
                <p className="text-base text-foreground/60 leading-relaxed mt-4 max-w-lg">
                  {featured.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-6">
                  {featured.tech.slice(0, 6).map((t, idx) => (
                    <span key={idx} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="arrow-link mt-7 text-[0.72rem]">
                  View case study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </article>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mt-14">
            {rest.map((project, index) => (
              <article
                key={`${project.id}-${selectedCategory}`}
                onClick={() => openProjectModal(project)}
                data-reveal
                className="group project-card cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[0.35] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent opacity-70" />
                  <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-3.5">
                    <span className="font-mono text-[0.56rem] uppercase tracking-[0.16em] px-2 py-1 bg-background/70 backdrop-blur-sm border border-border text-foreground/80">
                      {project.category}
                    </span>
                    {project.videoUrl && (
                      <span className="font-mono text-[0.56rem] uppercase tracking-[0.14em] px-2 py-1 bg-primary text-primary-foreground flex items-center gap-1">
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Demo
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between gap-3 mb-2.5">
                    <span className="font-mono text-[0.6rem] text-primary">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
                      {project.date}
                    </span>
                  </div>
                  <h3 className="font-display text-xl leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/55 mt-2 leading-relaxed line-clamp-2 flex-1">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tech.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="tag">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && <span className="tag">+{project.tech.length - 3}</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Show more */}
          {hasMoreProjects && (
            <div className="flex justify-center mt-16" data-reveal>
              <button
                onClick={() => {
                  if (showAll) sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                  setShowAll(!showAll)
                }}
                className="btn-outline group"
                data-magnetic
              >
                {showAll ? "Show less" : `Show all ${filteredProjects.length} projects`}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${showAll ? "group-hover:-translate-y-0.5 rotate-180" : "group-hover:translate-y-0.5"}`}
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

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl w-[calc(100%-1.5rem)] max-h-[92vh] p-0 gap-0 overflow-hidden bg-card border border-border-strong rounded-xl shadow-2xl">
          {selectedProject && (
            <ProjectModalBody project={selectedProject} onClose={() => setIsModalOpen(false)} />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Projects
