"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import Recognition from "./recognition"

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

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<"all" | "professional" | "academic" | "personal">("all")
  const INITIAL_DISPLAY_COUNT = 4

  const projects: Project[] = [
    {
      id: 1,
      title: "Vigilant X – AI-Powered Crypto Due Diligence",
      shortDescription: "Advanced AI platform for crypto risk assessment and automated due diligence",
      fullDescription: "Vigilant X is an advanced AI-powered due diligence platform designed for the next generation of crypto investors, auditors, analysts, and compliance teams. Built to redefine trust, intelligence, and speed in crypto risk assessment, Vigilant X automates and enhances due diligence processes in an era where misinformation and fragmented data pose critical challenges.",
      image: "/images/project-1.png",
      tech: ["Python", "LLMs", "RAG", "FastAPI", "React", "PostgreSQL"],
      highlights: [
        "Automated document analysis – extract, clean, and process files in seconds",
        "Context-aware Q&A – audit-grade answers to professional questions",
        "Red flag detection – identify hidden compliance risks and missing disclosures",
        "Multi-dimensional risk scoring – assess legal, financial, and governance risks",
        "One-click investor-ready PPTX reporting",
        "Real-time web & SEC data enrichment",
        "AI + human validation for reliable outputs",
        "60-day crypto market forecasting (50+ major tokens)",
        "Efficient frontier portfolio builder & buy/sell strategy recommender"
      ],
      achievements: [
        "Selected as Best Project in the Data Science Department at Esprit University",
        "Awarded Best Project by Value Company for innovation, technical rigor, and impact",
        "Showcased at the Ball of Project – 12th Edition (2025)"
      ],
      date: "Jan 2025 - Jun 2025",
      videoUrl: "https://www.youtube.com/embed/cQDnZIdzZVg",
      videoType: "youtube",
      category: "professional"
    },
    {
      id: 2,
      title: "Churn Prediction App",
      shortDescription: "AI-powered customer retention tool with real-time predictions",
      fullDescription: "This project focuses on building an AI-powered churn prediction application designed to help businesses identify customers at risk of leaving. The system leverages a Gradient Boosting Model trained on behavioral data to generate accurate churn predictions. The tool demonstrates how machine learning can support data-driven customer retention strategies by delivering actionable insights in a user-friendly format.",
      image: "/images/project-2.png",
      tech: ["Python", "Scikit-learn", "Gradient Boosting", "Streamlit", "Pandas"],
      highlights: [
        "Interactive user interface developed with Streamlit",
        "Customer attribute input through sliders and smart form elements",
        "Real-time predictions with optimized decision threshold",
        "Confusion matrix and ROC curve for model evaluation",
        "Data-driven customer retention strategy support"
      ],
      date: "Mar 2025",
      category: "academic"
    },
    {
      id: 3,
      title: "Real-Time Parking Space Detection",
      shortDescription: "Computer vision system for live parking spot monitoring",
      fullDescription: "A real-time car parking space detection system using OpenCV to identify and monitor available parking spots through live video feeds. The system dynamically updates parking space availability and allows users to interactively define parking areas by selecting them on the image. Integrated MediaPipe for real-time hand gesture detection via webcam, blending practical parking management with playful interactivity.",
      image: "/images/project-3.png",
      tech: ["Python", "OpenCV", "MediaPipe", "cvzone", "Pickle"],
      highlights: [
        "Real-time detection and updates of parking space availability",
        "Interactive parking spot selection and configuration",
        "Hand gesture tracking via webcam for engaging user experience",
        "Visual overlays and annotations with cvzone",
        "Persistent parking spot positions with Pickle"
      ],
      date: "Mar 2025",
      videoUrl: "https://drive.google.com/file/d/1a3SAvPWvC4elut3U41JFK_jQ0nd4lJpH/preview",
      videoType: "drive",
      category: "personal"
    },
    {
      id: 4,
      title: "Brain Tumor Classification",
      shortDescription: "Deep learning solution for MRI-based tumor detection",
      fullDescription: "An end-to-end deep learning solution for brain tumor classification from MRI scans. It leverages Convolutional Neural Networks (CNNs) and transfer learning techniques using VGG16 and EfficientNetB3 architectures to achieve accurate tumor detection. The system includes advanced data augmentation, class balancing techniques to enhance recall, and is optimized with SGD + Momentum for model stability.",
      image: "/images/project-4.png",
      tech: ["Python", "TensorFlow", "VGG16", "EfficientNetB3", "Streamlit"],
      highlights: [
        "Transfer learning with VGG16 and EfficientNetB3 architectures",
        "Advanced data augmentation and class balancing",
        "Real-time predictions for Glioma, Meningioma, Pituitary, No Tumor",
        "Confidence scores and visual feedback",
        "Publicly accessible deployed model"
      ],
      date: "Jan 2025 - Feb 2025",
      videoUrl: "https://drive.google.com/file/d/197W4Q_4IfUhuF4-p4T3DHN4l2Ca-Whn6/preview",
      videoType: "drive",
      category: "academic"
    },
    {
      id: 5,
      title: "AI Math Problem-Solving Platform",
      shortDescription: "Interactive canvas for AI-powered equation solving",
      fullDescription: "An AI-powered platform that transforms the way users engage with mathematical problems by combining LaTeX rendering, React, Mantine, and Generative AI models. The application allows users to express equations and illustrations freely on a dynamic canvas. It interprets handwritten and graphical inputs, solves equations, assigns variables dynamically, and analyzes abstract problems—delivering real-time feedback with rich visual interaction.",
      image: "/images/project-5.png",
      tech: ["React", "Mantine", "LaTeX", "Generative AI", "Canvas API"],
      highlights: [
        "Dynamic math canvas with real-time updates",
        "AI-driven equation solving and expression analysis",
        "Seamless LaTeX rendering and interactive UI",
        "Handwritten and graphical input interpretation",
        "Designed to enhance learning, curiosity, and creativity"
      ],
      date: "Dec 2024",
      videoUrl: "https://drive.google.com/file/d/1wqfT5MrbtI5tHs5x61Siiu739dm3aHOc/preview",
      videoType: "drive",
      category: "personal"
    },
    {
      id: 6,
      title: "GENME – AI Image Generation Platform",
      shortDescription: "Text-to-image generation with premium features",
      fullDescription: "An AI-powered image generation platform that allows users to create high-quality images from text prompts in just a few clicks. The platform features a React-based frontend integrated with AI models for efficient and intuitive image creation. Designed for designers, content creators, and creative professionals, the platform offers a fast, user-friendly solution for producing AI-generated visuals at scale.",
      image: "/images/project-6.png",
      tech: ["React", "AI/ML", "Node.js", "Stripe", "Tailwind CSS"],
      highlights: [
        "High-quality image generation from text prompts",
        "Three free attempts with premium unlimited access",
        "React-based frontend with intuitive UX",
        "Integrated payment system for premium plans",
        "Fast and scalable image generation"
      ],
      date: "Nov 2024 - Dec 2024",
      videoUrl: "https://drive.google.com/file/d/1DFxPRpSBp1-fXMXGLjK02DpF9wbWDhsT/preview",
      videoType: "drive",
      category: "personal"
    },
    {
      id: 7,
      title: "RIVEZ – E-Learning Management System",
      shortDescription: "Modern LMS with real-time features and chatbot",
      fullDescription: "A modern E-learning Management System designed to enhance communication, course management, and user engagement for students, teachers, and administrators. The platform is built with Next.js and provides a seamless, interactive experience with real-time updates and integrated tools.",
      image: "/images/rivez elearning.jpg",
      tech: ["Next.js", "React", "Node.js", "MongoDB", "Socket.io"],
      highlights: [
        "Teachers: Create and manage classes, courses, and chapters",
        "Real-time notifications for enrollments and messages",
        "Integrated messaging system for student-teacher communication",
        "Students: Enroll in courses, add favorites, access chatbot",
        "Administrators: Manage users and oversee platform operations"
      ],
      date: "Jul 2024 - Aug 2024",
      videoUrl: "https://drive.google.com/file/d/1UOc9eiePiIXUZZxUYRY-GAet6Y2-2Up5/preview",
      videoType: "drive",
      category: "academic"
    },
    {
      id: 8,
      title: "Sign Language Detection Model",
      shortDescription: "ML-based gesture recognition for accessibility",
      fullDescription: "A machine learning-based sign language detection model aimed at supporting communication for Deaf and Hard-of-Hearing communities. The system uses OpenCV for live video capture to build a custom dataset of hand gestures, and applies classification models to accurately interpret these gestures in real time. The project demonstrates how AI and computer vision can contribute to greater inclusivity and accessibility.",
      image: "/images/sign language.jpg",
      tech: ["Python", "OpenCV", "TensorFlow", "MediaPipe", "Scikit-learn"],
      highlights: [
        "Live data collection via webcam",
        "Custom hand gesture dataset creation",
        "Real-time gesture preprocessing and classification",
        "Model training and refinement for reliability",
        "Supports Deaf and Hard-of-Hearing communities"
      ],
      date: "Feb 2024 - Mar 2024",
      videoUrl: "https://drive.google.com/file/d/1yUm9G2btHkMzHwA8n2peo6gBlMqyf4oM/preview",
      videoType: "drive",
      category: "personal"
    },
    {
      id: 9,
      title: "Face Detection System",
      shortDescription: "Real-time face detection and recognition using computer vision",
      fullDescription: "A real-time face detection system built with OpenCV and deep learning models. The system can detect and recognize faces in live video feeds, providing accurate identification and tracking capabilities. This project demonstrates advanced computer vision techniques for facial recognition applications.",
      image: "/images/face detection.jpg",
      tech: ["Python", "OpenCV", "Deep Learning", "Computer Vision", "MediaPipe"],
      highlights: [
        "Real-time face detection in live video streams",
        "High accuracy facial recognition",
        "Multiple face tracking capabilities",
        "Optimized for performance and speed",
        "Webcam and video file support"
      ],
      date: "2024",
      videoUrl: "https://drive.google.com/file/d/1cNfHnKnOgozAJfPKJ_Zc1iUR4kyi1hmh/preview",
      videoType: "drive",
      category: "personal"
    },
    {
      id: 10,
      title: "Anomaly Detection System",
      shortDescription: "A robust AI system for detecting rare events, abnormal behaviors, and hidden outliers in high-dimensional data.",
      fullDescription:
        "A highly advanced anomaly detection platform designed to identify unusual patterns, rare events, and subtle deviations across complex datasets. This project combines state-of-the-art unsupervised learning methods with deep learning architectures to deliver precise, reliable anomaly detection across multiple domains. The system was refined and stress-tested during high-level competitive environments such as the IndabaX Tunisia 2025 Hackathon—where I achieved 2nd place out of 133 teams—further validating the model's efficiency, scalability, and real-world applicability. Built to be domain-agnostic, it can be applied to fraud detection, cyber-security intrusion detection, industrial defect monitoring, predictive maintenance, healthcare anomaly spotting, and more. The platform integrates Isolation Forest, statistical anomaly scoring, and deep autoencoder networks to detect both global and context-specific anomalies. Visual dashboards, real-time monitoring, and customizable sensitivity settings make it suitable for production-level deployment.",
      image: "/images/anomaly.jpg",
      tech: [
        "Python",
        "Machine Learning",
        "Scikit-learn",
        "Isolation Forest",
        "Autoencoders",
        "Pandas",
        "NumPy",
        "TensorFlow"
      ],
      highlights: [
        "Multi-layer anomaly detection pipelines combining classical ML and deep learning",
        "Real-time anomaly scoring, monitoring dashboards, and intelligent alerting",
        "Advanced statistical and model-based detection (Isolation Forest, Autoencoders, z-score, KDE)",
        "Highly scalable processing optimized for large and streaming datasets",
        "Domain-agnostic architecture suitable for finance, security, healthcare, and industry",
        "Customizable sensitivity thresholds to fine-tune false-positive vs. false-negative balance",
        "Model validated in competitive AI settings (IndabaX Tunisia 2025 – 2nd place achievement)"
      ],
      date: "2024",
      category: "professional"
    },
    {
      id: 11,
      title: "Intelligent News Research AI Agent",
      shortDescription: "AI agent that understands queries, searches the web, analyzes data, detects fake news, and provides comprehensive research reports",
      fullDescription: "An advanced AI-powered news research agent that transforms how users gather and analyze information. Users simply ask a query in natural language, and the intelligent agent understands the intent, creates a research plan, and autonomously searches through the internet to gather relevant information. The system scrapes data from multiple sources, cleans and processes the collected information, performs intelligent summarization, and employs advanced fake news detection algorithms to verify credibility. The agent provides users with comprehensive, detailed reports containing everything they need—from verified facts to source analysis, credibility scores, and synthesized insights. This end-to-end solution combines AI planning, web scraping, data cleaning, NLP summarization, and fact-checking into a single intelligent research assistant.",
      image: "/images/news.avif",
      tech: ["Python", "AI Agents", "LLMs", "Web Scraping", "NLP", "Data Cleaning", "Fake News Detection", "Summarization"],
      highlights: [
        "Natural language query understanding and intent recognition",
        "Autonomous research planning and strategy generation",
        "Intelligent web search and multi-source data scraping",
        "Advanced data cleaning and preprocessing pipelines",
        "AI-powered content summarization and synthesis",
        "Fake news detection and credibility verification",
        "Comprehensive research reports with detailed analysis",
        "Source verification and credibility scoring",
        "Real-time information gathering and processing"
      ],
      date: "2024",
      videoUrl: "https://drive.google.com/file/d/1J471JXQxsyjWbSqCyYVyofSBRifBVUGN/preview",
      videoType: "drive",
      category: "academic"
    },
    {
      id: 12,
      title: "YottaNest",
      shortDescription:
        "AI-driven compliance and credit intelligence platform for banks and financial institutions.",
      fullDescription:
        "YottaNest is an AI-powered compliance and credit intelligence platform designed to transform how banks and financial institutions manage KYC/AML processes and credit decisioning. As a co-founded venture, it focuses on building scalable automation systems that replace slow, manual compliance workflows with intelligent, real-time decision engines. The platform integrates advanced machine learning, document intelligence, multi-source data aggregation, and high-performance cloud infrastructure to deliver accurate, audit-ready insights within minutes rather than hours. YottaNest automatically extracts and analyzes data from corporate filings, contracts, identification documents, financial statements, and industry registries—across multiple formats and languages. Built for enterprise environments, YottaNest provides automated company and credit reports, risk scoring, due diligence workflows, and regulatory compliance checks. By reducing operational effort by over 90%, it helps banks streamline onboarding, enhance transparency, strengthen trust, and make faster, more confident lending and compliance decisions. This ongoing venture continues to evolve into a next-generation intelligence layer for the future of digital finance.",
      image: "/images/yottanest.png",
      tech: [
        "AI/ML",
        "Python",
        "React",
        "Next.js",
        "Cloud Infrastructure",
        "Data Science",
        "NLP",
        "Document Intelligence",
        "ETL Pipelines"
      ],
      highlights: [
        "End-to-end AI automation for KYC/AML compliance",
        "Automated company & credit reporting systems",
        "Multi-source data collection across public and private datasets",
        "Document intelligence for extracting structured insights from complex files",
        "Real-time risk scoring and decision engines",
        "High-performance, scalable cloud architecture",
        "Audit-ready outputs with improved transparency",
        "Co-founded and built as an enterprise-grade AI startup"
      ],
      date: "2024 - Present",
      category: "professional"
    },
    {
      id: 13,
      title: "GraphRAG Agentic Intelligence System",
      shortDescription:
        "An agentic AI system using LangGraph, custom tools, and a Neo4j-powered GraphRAG pipeline to enable knowledge reasoning and dynamic tool usage.",

      fullDescription:
        "This project is a fully implemented Agentic AI system built as part of a Generative AI assignment. The system integrates LangGraph agent orchestration, custom-built tools, and a GraphRAG pipeline connected to a Neo4j knowledge graph. It ingests structured and unstructured data, builds a vector-enhanced knowledge graph, and enables retrieval, reasoning, and decision-making through an LLM-powered agent. The agent autonomously decides when to call tools, perform graph retrieval, or execute Cypher queries to generate accurate, context-aware answers. A FastAPI backend exposes clean endpoints for querying the agent, retrieving graph metadata, and running graph-based reasoning workflows. The system also features optional multi-agent collaboration, hybrid search (vector + graph traversal), and a simple UI/CLI interface for interactive querying. This project demonstrates end-to-end mastery of agent workflows, graph databases, LLM reasoning, and production-ready backend design.",

      image: "/images/graph.jpg",

      tech: [
        "LangGraph",
        "Neo4j",
        "GraphRAG",
        "Python",
        "FastAPI",
        "OpenAI / OpenRouter",
        "Vector Search",
        "Cypher",
        "LLM Tooling",
        "Embeddings",
        "Docker",
        "Streamlit (optional UI)"
      ],

      highlights: [
        "Designed and implemented a multi-step agent workflow using LangGraph",
        "Developed two+ custom tools, including graph query and hybrid retrieval tools",
        "Built a Neo4j knowledge graph with nodes, relationships, and properties",
        "Implemented GraphRAG with vector similarity + graph traversal",
        "Enabled LLM reasoning that chooses tools autonomously",
        "Created a FastAPI backend with /ask and /graph-info endpoints",
        "Added multi-agent reasoning capability (optional)",
        "Built minimal CLI/UI for live interaction",
        "Produced schema diagrams, architecture documentation, and demo video",
        "Delivered a fully working end-to-end system in under 72 hours"
      ],
      date: "2025",
      videoUrl: "https://drive.google.com/file/d/1-f54cQ7--f9X9Y3hks1LRpm6eKXM8z9o/preview",
      videoType: "drive",
      category: "professional"

    }

  ]

  // Helper function to convert YouTube URL to embed format
  const getYouTubeEmbedUrl = (url: string): string => {
    if (url.includes('youtube.com/embed/')) return url
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0]
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0]
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url
    }
    return url
  }

  const openProjectModal = (project: Project) => {
    // Auto-detect video type if not specified
    const processedProject = { ...project }
    if (processedProject.videoUrl && !processedProject.videoType) {
      if (processedProject.videoUrl.includes('youtube.com') || processedProject.videoUrl.includes('youtu.be')) {
        processedProject.videoType = "youtube"
        processedProject.videoUrl = getYouTubeEmbedUrl(processedProject.videoUrl)
      } else {
        processedProject.videoType = "local"
      }
    }
    setSelectedProject(processedProject)
    setIsModalOpen(true)
  }

  // Get projects to display based on category filter and showAll state
  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(p => p.category === selectedCategory)
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_DISPLAY_COUNT)
  const hasMoreProjects = filteredProjects.length > INITIAL_DISPLAY_COUNT

  // Category labels for display
  const categoryLabels = {
    all: "All Projects",
    professional: "Professional",
    academic: "Academic",
    personal: "Personal"
  }

  return (
    <>
      <section ref={sectionRef} className="relative py-20 px-4 sm:px-6 lg:px-8 animate-fade-in" id="projects">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center glow-text">Featured Projects</h2>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {(["all", "professional", "academic", "personal"] as const).map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setShowAll(false) // Reset to initial count when changing category
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 border-2 ${selectedCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/50 scale-105"
                  : "bg-card/50 text-muted-foreground border-border/50 hover:border-primary/50 hover:text-primary hover:scale-105"
                  }`}
              >
                {categoryLabels[category]}
                <span className="ml-2 text-xs opacity-70">
                  ({category === "all" ? projects.length : projects.filter(p => p.category === category).length})
                </span>
              </button>
            ))}
          </div>

          {/* Responsive grid for all screen sizes */}
          <div ref={scrollContainerRef} className="pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {displayedProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="project-card rounded-2xl overflow-hidden group hover:scale-105 hover:glow-box transition-all duration-500 cursor-pointer border border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in-up"
                  style={{ animationDelay: `${(index % INITIAL_DISPLAY_COUNT) * 0.1}s` }}
                  onClick={() => openProjectModal(project)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="absolute top-3 right-3 px-2 py-1 text-xs bg-background/80 backdrop-blur-sm rounded-full border border-primary/20 text-muted-foreground">
                      {project.date}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{project.shortDescription}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full border border-secondary/20">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    <Button
                      variant="ghost"
                      className="w-full group/btn hover:bg-primary/10 hover:text-primary"
                      onClick={(e) => {
                        e.stopPropagation()
                        openProjectModal(project)
                      }}
                    >
                      View Project
                      <svg
                        className="ml-2 group-hover/btn:translate-x-1 transition-transform w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* See More / See Less Button */}
          {hasMoreProjects && (
            <div className="flex justify-center mt-10">
              <Button
                onClick={() => setShowAll(!showAll)}
                variant="outline"
                size="lg"
                className="group px-8 py-6 text-lg font-semibold border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 glow-box"
              >
                {showAll ? (
                  <>
                    Show Less
                    <svg
                      className="ml-2 group-hover:-translate-y-1 transition-transform w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    See More Projects
                    <svg
                      className="ml-2 group-hover:translate-y-1 transition-transform w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </Button>
            </div>
          )}

        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-primary/20">
          {selectedProject && (
            <>
              <DialogHeader className="space-y-4">
                <div className="relative -mx-6 -mt-6 overflow-hidden rounded-t-lg">
                  {selectedProject.videoUrl ? (
                    (selectedProject.videoType === "youtube" || selectedProject.videoUrl.includes('youtube.com') || selectedProject.videoUrl.includes('youtu.be')) ? (
                      /* YouTube Video Embed */
                      <div className="relative w-full bg-black rounded-t-lg" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                          src={selectedProject.videoType === "youtube" ? selectedProject.videoUrl : getYouTubeEmbedUrl(selectedProject.videoUrl)}
                          title={selectedProject.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full rounded-t-lg"
                        />
                      </div>
                    ) : (selectedProject.videoType === "drive" || selectedProject.videoUrl.includes('drive.google.com')) ? (
                      /* Google Drive Video Embed */
                      <div className="relative w-full bg-black rounded-t-lg" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                          src={selectedProject.videoUrl.includes('/preview') ? selectedProject.videoUrl : selectedProject.videoUrl.replace('/view?usp=drive_link', '/preview').replace('/file/d/', '/file/d/').replace('/view', '/preview')}
                          title={selectedProject.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full rounded-t-lg"
                        />
                      </div>
                    ) : (
                      /* Local MP4 Video */
                      <div className="relative w-full bg-black rounded-t-lg" style={{ paddingBottom: '56.25%' }}>
                        <video
                          src={selectedProject.videoUrl}
                          controls
                          className="absolute inset-0 w-full h-full object-contain rounded-t-lg"
                          preload="metadata"
                          playsInline
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )
                  ) : (
                    /* Image Fallback */
                    <div className="relative h-64 sm:h-80">
                      <img
                        src={selectedProject.image || "/placeholder.svg"}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    </div>
                  )}
                  {/* Title overlay - positioned differently based on video/image */}
                  <div className={`${selectedProject.videoUrl ? 'relative pt-4 px-6' : 'absolute bottom-4 left-6 right-6'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 text-xs rounded-full border backdrop-blur-sm ${selectedProject.videoUrl ? 'bg-primary/10 text-primary border-primary/20' : 'bg-primary/20 text-primary border-primary/30'}`}>
                        {selectedProject.date}
                      </span>
                      {selectedProject.videoUrl && (
                        <span className="px-3 py-1 text-xs bg-red-500/20 text-red-400 rounded-full border border-red-500/30 flex items-center gap-1">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                          Video Demo
                        </span>
                      )}
                    </div>
                    <DialogTitle className={`text-2xl sm:text-3xl font-bold ${selectedProject.videoUrl ? 'text-foreground' : 'text-white drop-shadow-lg'}`}>
                      {selectedProject.title}
                    </DialogTitle>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-xl border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    About This Project
                  </h4>
                  <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                    {selectedProject.fullDescription}
                  </DialogDescription>
                </div>

                {/* Key Features */}
                {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-muted-foreground animate-fade-in-up"
                          style={{ animationDelay: `${index * 0.05}s` }}
                        >
                          <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Achievements */}
                {selectedProject.achievements && selectedProject.achievements.length > 0 && (
                  <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                    <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-foreground font-medium animate-fade-in-up"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <span className="text-lg">🏆</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Close Button */}
                <div className="pt-4 border-t border-border/50">
                  <Button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 glow-box hover:scale-[1.02] transition-all"
                  >
                    Close Project
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Projects
