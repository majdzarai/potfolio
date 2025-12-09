"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface Recognition {
  title: string
  description: string
  year: string
  icon: string
  iconBg: string
  project?: string
  organization: string
  type: string
  images?: string[]
}

const recognitions: Recognition[] = [
  {
    title: "2nd Place – IndabaX Tunisia 2025 Hackathon",
    description: "Anomaly Detection challenge among 69 teams, 10,500 TND prize",
    year: "2025",
    icon: "/images/anomaly.jpg",
    iconBg: "#8b5cf6",
    project: "Anomaly Detection System",
    organization: "IndabaX Tunisia",
    type: "Hackathon",
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
    title: "Best Project of the Year – ESPRIT University 2025",
    description: "Selected from 200+ competing projects for Vigilant X platform",
    year: "2025",
    icon: "/images/yottanest.png",
    iconBg: "#3b82f6",
    project: "Vigilant X",
    organization: "ESPRIT University",
    type: "Award",
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
    title: "Chosen Top Project for Value Incubator",
    description: "Selected as the top project by Value Incubator for innovation, technical rigor, and impact",
    year: "2025",
    icon: "/images/yottanest.png",
    iconBg: "#06b6d4",
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
]

// Helper function to check if media is a video
const isVideo = (url: string): boolean => {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv']
  return videoExtensions.some(ext => url.toLowerCase().includes(ext)) || url.includes('drive.google.com')
}

// Helper function to check if media is a Google Drive link
const isGoogleDrive = (url: string): boolean => {
  return url.includes('drive.google.com')
}

const RecognitionCard: React.FC<{ index: number } & Recognition> = ({
  index,
  title,
  description,
  year,
  icon,
  iconBg,
  project,
  organization,
  type,
  images = [],
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isOpen, currentImageIndex, images.length])

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const currentMedia = images[currentImageIndex]
  const isCurrentVideo = currentMedia ? isVideo(currentMedia) : false

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          type: "spring",
          delay: index * 0.15,
          duration: 0.6,
        }}
        onClick={() => {
          if (images.length > 0) {
            setIsOpen(true)
            setCurrentImageIndex(0)
          }
        }}
        className={`group relative bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden ${images.length > 0 ? 'cursor-pointer' : ''}`}
      >
        {/* Floating Icon Badge - Top Right */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            delay: index * 0.15 + 0.3,
            duration: 0.8,
          }}
          className="absolute -top-4 -right-4 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-background shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10"
          style={{
            boxShadow: `0 8px 32px ${iconBg}60`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Background Gradient Orb */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, ${iconBg} 0%, transparent 70%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Award Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-primary">{type}</span>
            <span className="text-xs sm:text-sm text-muted-foreground">•</span>
            <span className="text-xs sm:text-sm text-muted-foreground">{year}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight pr-20 lg:pr-24">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
            {description}
          </p>

          {/* Organization */}
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-primary/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <p className="text-sm sm:text-base font-semibold text-foreground">
              {organization}
            </p>
          </div>

          {/* Project Tag (if exists) */}
          {project && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/10 border border-secondary/20 mb-4">
              <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span className="text-xs sm:text-sm font-medium text-secondary">{project}</span>
            </div>
          )}

          {/* View Gallery Button */}
          {images.length > 0 && (
            <div className="mt-6 pt-6 border-t border-border/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-primary/80">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">{images.length} Media</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                  <span className="font-semibold">View Gallery</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Enhanced Image/Video Gallery Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-6xl max-h-[95vh] overflow-hidden bg-background/98 backdrop-blur-xl border-primary/20 p-0 gap-0">
          <DialogHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2">
            <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">
              {title}
            </DialogTitle>
            <p className="text-center text-muted-foreground text-xs sm:text-sm mt-1">
              {organization} • {year}
            </p>
          </DialogHeader>

          {images.length > 0 && (
            <div className="relative flex-1 overflow-hidden">
              {/* Main Media Display */}
              <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-gradient-to-br from-card/50 to-card/30 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full h-full flex items-center justify-center p-4"
                  >
                    {isCurrentVideo ? (
                      isGoogleDrive(currentMedia) ? (
                        <iframe
                          src={currentMedia.includes('/preview') ? currentMedia : currentMedia.replace('/view?usp=drive_link', '/preview').replace('/file/d/', '/file/d/').replace('/view', '/preview')}
                          title={`${title} - Video ${currentImageIndex + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full min-h-[400px] rounded-lg shadow-2xl"
                        />
                      ) : (
                        <video
                          src={currentMedia}
                          controls
                          autoPlay
                          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                          playsInline
                        >
                          Your browser does not support the video tag.
                        </video>
                      )
                    ) : (
                      <img
                        src={currentMedia}
                        alt={`${title} - Media ${currentImageIndex + 1}`}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        loading="lazy"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <Button
                      onClick={handlePrev}
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background border border-primary/40 hover:border-primary rounded-full w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 backdrop-blur-sm transition-all duration-200 hover:scale-110 z-10"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </Button>
                    <Button
                      onClick={handleNext}
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background border border-primary/40 hover:border-primary rounded-full w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 backdrop-blur-sm transition-all duration-200 hover:scale-110 z-10"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </>
                )}

                {/* Media Counter */}
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 text-xs sm:text-sm font-medium shadow-lg">
                  {currentImageIndex + 1} / {images.length}
                </div>

                {/* Media Type Badge */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-background/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full border border-primary/30 text-xs flex items-center gap-1.5">
                  {isCurrentVideo ? (
                    <>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span>Video</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Image</span>
                    </>
                  )}
                </div>
              </div>

              {/* Thumbnail Strip with Custom Scrollbar */}
              {images.length > 1 && (
                <div className="px-4 sm:px-6 py-3 sm:py-4 bg-card/30 border-t border-border/30">
                  <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 custom-scrollbar">
                    {images.map((media, idx) => {
                      const isVideoMedia = isVideo(media)
                      return (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`flex-shrink-0 relative rounded-lg overflow-hidden border-2 transition-all duration-200 ${currentImageIndex === idx
                            ? "border-primary scale-105 shadow-lg shadow-primary/50"
                            : "border-border/50 hover:border-primary/50 opacity-70 hover:opacity-100"
                            }`}
                          style={{
                            width: '80px',
                            height: '80px',
                          }}
                        >
                          {isVideoMedia ? (
                            isGoogleDrive(media) ? (
                              <>
                                <iframe
                                  src={media.includes('/preview') ? media : media.replace('/view?usp=drive_link', '/preview').replace('/file/d/', '/file/d/').replace('/view', '/preview')}
                                  className="w-full h-full object-cover pointer-events-none"
                                  title={`Thumbnail ${idx + 1}`}
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </>
                            ) : (
                              <>
                                <video
                                  src={media}
                                  className="w-full h-full object-cover"
                                  muted
                                  playsInline
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </>
                            )
                          ) : (
                            <img
                              src={media}
                              alt={`Thumbnail ${idx + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          )}
                          {currentImageIndex === idx && (
                            <div className="absolute inset-0 bg-primary/20 border-2 border-primary" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Navigation Hint */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                <p className="text-center text-xs sm:text-sm text-muted-foreground">
                  Use arrow keys, click thumbnails, or swipe to navigate
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

const Recognition = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8" id="recognition">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm sm:text-base font-medium tracking-widest uppercase mb-2">
            ACHIEVEMENTS & AWARDS
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold glow-text">
            Recognition.
          </h2>
        </motion.div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {recognitions.map((recognition, index) => (
            <RecognitionCard key={index} index={index} {...recognition} />
          ))}
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: hsl(var(--card) / 0.3);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(var(--primary) / 0.5);
          border-radius: 10px;
          transition: background 0.3s ease;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--primary) / 0.8);
        }

        /* Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: hsl(var(--primary) / 0.5) hsl(var(--card) / 0.3);
        }
      `}</style>
    </section>
  )
}

export default Recognition
