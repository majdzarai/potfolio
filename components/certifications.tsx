"use client"

import { motion, AnimatePresence } from "framer-motion"
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
        description: "Certification for completing NVIDIA's course on building NLP applications using Transformer-based architectures.",
        skills: ["Transformers", "NLP", "Deep Learning", "AI Applications"],
        category: "technical"
    },
    {
        id: 2,
        title: "Applications of AI for Anomaly Detection",
        issuer: "NVIDIA",
        date: "2025",
        image: "/images/nv.png",
        credentialUrl: "https://learn.nvidia.com/certificates?id=d_4NscdNRlGglnXUx4U-7Q",
        description: "Focused on developing AI systems for anomaly and fraud detection across real-world datasets.",
        skills: ["Anomaly Detection", "Machine Learning", "Neural Networks"],
        category: "technical"
    },
    {
        id: 3,
        title: "Fundamentals of Deep Learning",
        issuer: "NVIDIA",
        date: "2025",
        image: "/images/nv.png",
        credentialUrl: "https://learn.nvidia.com/certificates?id=CBiDvL0xTIG4qY7hMeQPog",
        description: "Comprehensive certification covering neural networks, backpropagation, training workflows, and deep learning fundamentals.",
        skills: ["Deep Learning", "Neural Networks", "CUDA", "NVIDIA Ecosystem"],
        category: "technical"
    },
    {
        id: 4,
        title: "Bal des Projets – Participation Certificate",
        issuer: "ESPRIT",
        date: "2025",
        image: "/images/bl.png",
        description: "Official participation certificate for the 12th edition of the Bal des Projets organized by ESPRIT.",
        skills: ["Project Development", "Teamwork", "Innovation"],
        category: "leadership"
    },
    {
        id: 5,
        title: "ACM Certificate of Recognition – HR Officer",
        issuer: "ACM ESPRIT Student Branch",
        date: "2025",
        image: "/images/acm.png",
        description: "Recognition award for exceptional leadership and service as Human Resources Officer during the 2024–2025 mandate.",
        skills: ["Leadership", "Team Management", "Communication"],
        category: "leadership"
    },
    {
        id: 6,
        title: "Zindi Competition Achievements",
        issuer: "Zindi Africa",
        date: "2025",
        image: "/images/zindi2.png",
        credentialUrl: "https://zindi.africa/users/majdzarai",
        description: "Obtained a Gold medal (2/69) and a Bronze medal (102/265) in competitive machine learning challenges.",
        skills: ["Machine Learning", "Computer Vision", "Data Science"],
        category: "competition",
        competitions: [
            { name: "IndabaX Tunisia 2025: Challenge 1", rank: "2 / 69", award: "Gold Medal", link: "https://zindi.africa/competitions/indabax-tunisia-2025-challenge-1" },
            { name: "Classification for Landslide Detection", rank: "102 / 265", award: "Bronze Medal", link: "https://zindi.africa/competitions/classification-for-landslide-detection" }
        ]
    },
    {
        id: 7,
        title: "Hashgraph Developer Course",
        issuer: "The Hashgraph Association",
        date: "2025",
        image: "/images/hsh.png",
        description: "Completed Hashgraph developer training covering distributed ledger technology, smart contracts, and decentralized apps.",
        skills: ["Hashgraph", "Smart Contracts", "Web3", "Distributed Systems"],
        category: "technical"
    },
    {
        id: 8,
        title: "AWS Academy Graduate – Cloud Foundations",
        issuer: "AWS Academy",
        date: "2025",
        image: "/images/aws.png",
        credentialUrl: "https://www.credly.com/go/rTj1PJJQ",
        description: "20-hour foundational certification covering cloud architecture, compute, networking, and AWS fundamentals.",
        skills: ["AWS", "Cloud Architecture", "Networking", "DevOps"],
        category: "cloud"
    }
]

const INITIAL_DISPLAY_COUNT = 4

const Certifications = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const [hoveredId, setHoveredId] = useState<number | null>(null)
    const [selectedCategory, setSelectedCategory] = useState<"all" | "technical" | "leadership" | "competition" | "cloud">("all")
    const [showAll, setShowAll] = useState(false)

    const filteredCertifications = selectedCategory === "all" ? certifications : certifications.filter(cert => cert.category === selectedCategory)
    const displayedCertifications = showAll ? filteredCertifications : filteredCertifications.slice(0, INITIAL_DISPLAY_COUNT)

    const categoryCounts = {
        all: certifications.length,
        technical: certifications.filter(c => c.category === "technical").length,
        leadership: certifications.filter(c => c.category === "leadership").length,
        competition: certifications.filter(c => c.category === "competition").length,
        cloud: certifications.filter(c => c.category === "cloud").length,
    }

    const categoryColors: Record<string, string> = {
        technical: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        cloud: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
        leadership: "bg-purple-500/20 text-purple-400 border-purple-500/30",
        competition: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    }

    return (
        <section ref={sectionRef} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" id="certifications">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

            {/* Floating Particles */}
            <div className="absolute top-20 left-10 w-3 h-3 bg-primary/40 rounded-full floating" />
            <div className="absolute top-40 right-20 w-2 h-2 bg-secondary/40 rounded-full floating" style={{ animationDelay: "1s" }} />
            <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-accent/40 rounded-full floating" style={{ animationDelay: "2s" }} />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="text-center mb-12"
                >
                    <motion.p
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-primary tracking-widest uppercase mb-3 text-sm sm:text-base font-medium"
                    >
                        Professional Credentials
                    </motion.p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold glow-text">Certifications.</h2>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {[
                        { id: "all", label: "All" },
                        { id: "technical", label: "Technical" },
                        { id: "cloud", label: "Cloud" },
                        { id: "leadership", label: "Leadership" },
                        { id: "competition", label: "Competition" },
                    ].map((category) => (
                        <motion.button
                            key={category.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => { setSelectedCategory(category.id as any); setShowAll(false) }}
                            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${selectedCategory === category.id
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                                    : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border/50"
                                }`}
                        >
                            {category.label}
                            <span className="ml-2 text-xs opacity-70">({categoryCounts[category.id as keyof typeof categoryCounts]})</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Certifications Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
                    >
                        {displayedCertifications.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredId(cert.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className="certification-card group relative"
                            >
                                <div className="relative h-full bg-gradient-to-br from-card/95 to-card/60 backdrop-blur-xl border border-border/50 rounded-3xl p-6 sm:p-8 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-500 overflow-hidden">

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className={`px-3 py-1.5 text-xs font-bold rounded-full border ${categoryColors[cert.category]}`}>
                                            {cert.category.charAt(0).toUpperCase() + cert.category.slice(1)}
                                        </span>
                                    </div>

                                    {/* Background Glow */}
                                    <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-primary" />

                                    {/* Certificate Image */}
                                    <motion.div
                                        animate={{ y: hoveredId === cert.id ? -8 : 0, rotate: hoveredId === cert.id ? 1 : 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="relative mb-6 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl group-hover:shadow-primary/30"
                                    >
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Verified Badge */}
                                        <div className="absolute top-3 right-3 bg-green-500/90 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 backdrop-blur-sm shadow-lg">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Verified
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">{cert.title}</h3>
                                            <p className="text-muted-foreground text-sm flex items-center gap-2">
                                                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                <span>{cert.issuer} • {cert.date}</span>
                                            </p>
                                        </div>

                                        <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>

                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-2">
                                            {cert.skills.map((skill, idx) => (
                                                <span key={idx} className="px-3 py-1.5 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors font-medium">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Competitions */}
                                        {cert.competitions && (
                                            <div className="pt-3 border-t border-border/30 space-y-2">
                                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">🏆 Achievements:</p>
                                                {cert.competitions.map((c, idx) => (
                                                    <a key={idx} href={c.link} target="_blank" rel="noopener noreferrer"
                                                        className="block text-sm text-primary hover:text-primary/80 font-semibold hover:translate-x-1 transition-all duration-200">
                                                        → {c.name} — {c.award} ({c.rank})
                                                    </a>
                                                ))}
                                            </div>
                                        )}

                                        {/* View Credential */}
                                        {cert.credentialUrl && (
                                            <motion.a
                                                href={cert.credentialUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ x: 5 }}
                                                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors pt-2"
                                            >
                                                <span>View Credential</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Show More/Less Button */}
                {filteredCertifications.length > INITIAL_DISPLAY_COUNT && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center mt-12"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                if (showAll) {
                                    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                }
                                setShowAll(!showAll)
                            }}
                            className="group px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300"
                        >
                            {showAll ? (
                                <>Show Less <svg className="inline-block ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg></>
                            ) : (
                                <>Show More ({filteredCertifications.length - INITIAL_DISPLAY_COUNT} more) <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></>
                            )}
                        </motion.button>
                    </motion.div>
                )}

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-muted-foreground text-sm">Continuously expanding knowledge through industry-recognized certifications</p>
                </motion.div>
            </div>
        </section>
    )
}

export default Certifications
