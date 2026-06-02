import type React from "react"
import type { Metadata } from "next"
import { Fraunces, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const display = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--ff-display",
  display: "swap",
})

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--ff-body",
  display: "swap",
})

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--ff-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Majd Zarai — AI Engineer & GenAI",
  description:
    "Editorial portfolio of Majd Zarai, AI Engineer building real-world intelligent systems — multi-agent AI, RAG pipelines, and NLP applications.",
  generator: "Next.js",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  )
}
