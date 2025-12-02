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
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
      videoUrl: "https://www.youtube.com/embed/cQDnZIdzZVg"
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
      date: "Mar 2025"
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
      date: "Mar 2025"
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
      date: "Jan 2025 - Feb 2025"
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
      date: "Dec 2024"
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
      date: "Nov 2024 - Dec 2024"
    },
    {
      id: 7,
      title: "RIVEZ – E-Learning Management System",
      shortDescription: "Modern LMS with real-time features and chatbot",
      fullDescription: "A modern E-learning Management System designed to enhance communication, course management, and user engagement for students, teachers, and administrators. The platform is built with Next.js and provides a seamless, interactive experience with real-time updates and integrated tools.",
      image: "/images/project-7.png",
      tech: ["Next.js", "React", "Node.js", "MongoDB", "Socket.io"],
      highlights: [
        "Teachers: Create and manage classes, courses, and chapters",
        "Real-time notifications for enrollments and messages",
        "Integrated messaging system for student-teacher communication",
        "Students: Enroll in courses, add favorites, access chatbot",
        "Administrators: Manage users and oversee platform operations"
      ],
      date: "Jul 2024 - Aug 2024"
    },
    {
      id: 8,
      title: "Sign Language Detection Model",
      shortDescription: "ML-based gesture recognition for accessibility",
      fullDescription: "A machine learning-based sign language detection model aimed at supporting communication for Deaf and Hard-of-Hearing communities. The system uses OpenCV for live video capture to build a custom dataset of hand gestures, and applies classification models to accurately interpret these gestures in real time. The project demonstrates how AI and computer vision can contribute to greater inclusivity and accessibility.",
      image: "/images/project-8.png",
      tech: ["Python", "OpenCV", "TensorFlow", "MediaPipe", "Scikit-learn"],
      highlights: [
        "Live data collection via webcam",
        "Custom hand gesture dataset creation",
        "Real-time gesture preprocessing and classification",
        "Model training and refinement for reliability",
        "Supports Deaf and Hard-of-Hearing communities"
      ],
      date: "Feb 2024 - Mar 2024"
    }
  ]

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <>
      <section ref={sectionRef} className="relative py-20 px-4 sm:px-6 lg:px-8 animate-fade-in" id="projects">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center glow-text">Featured Projects</h2>

          {/* Horizontal scroll container for mobile, grid for desktop */}
          <div ref={scrollContainerRef} className="overflow-x-auto pb-6 lg:overflow-visible">
            <div className="flex lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="project-card flex-shrink-0 w-80 lg:w-auto rounded-2xl overflow-hidden group hover:scale-105 hover:glow-box transition-all duration-500 cursor-pointer border border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
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
                    /* YouTube Video Embed */
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        src={selectedProject.videoUrl}
                        title={selectedProject.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
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
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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
