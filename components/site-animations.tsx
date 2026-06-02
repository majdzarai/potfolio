"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

/**
 * Global motion layer, mounted once at the app root.
 * - [data-reveal]        single element fade/rise on scroll (auto-staggered with siblings)
 * - [data-split]         SplitText line reveal for headings
 * - [data-parallax]      drift on scroll (value = strength, e.g. 0.08)
 * - [data-count]         count-up (data-suffix / data-prefix optional)
 * - [data-magnetic]      pointer-follow on fine pointers
 * - scroll progress bar
 */
const SiteAnimations = () => {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      const fine = window.matchMedia("(pointer: fine)").matches
      const cleanups: Array<() => void> = []

      /* ---------- Scroll reveals (per element, sibling-staggered) ---------- */
      const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]")
      if (reduce) {
        gsap.set(reveals, { opacity: 1, y: 0 })
      } else {
        reveals.forEach((el) => {
          const siblings = el.parentElement
            ? Array.from(el.parentElement.children).filter((c) => c.hasAttribute("data-reveal"))
            : [el]
          const idx = Math.max(0, siblings.indexOf(el))
          gsap.from(el, {
            opacity: 0,
            y: 46,
            duration: 1,
            ease: "power3.out",
            delay: Math.min(idx, 6) * 0.08,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          })
        })
      }

      /* ---------- SplitText headline reveals ---------- */
      if (!reduce) {
        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
          SplitText.create(el, {
            type: "lines",
            mask: "lines",
            linesClass: "split-line",
            autoSplit: true,
            onSplit(self) {
              return gsap.from(self.lines, {
                yPercent: 115,
                duration: 1.1,
                ease: "power4.out",
                stagger: 0.12,
                scrollTrigger: { trigger: el, start: "top 86%", once: true },
              })
            },
          })
        })
      }

      /* ---------- Parallax ---------- */
      if (!reduce) {
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const strength = parseFloat(el.dataset.parallax || "0.1")
          gsap.set(el, { scale: 1.16 })
          gsap.fromTo(
            el,
            { yPercent: -strength * 100 },
            {
              yPercent: strength * 100,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement || el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          )
        })
      }

      /* ---------- Count-up ---------- */
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseFloat(el.dataset.count || "0")
        const suffix = el.dataset.suffix || ""
        const prefix = el.dataset.prefix || ""
        if (reduce) {
          el.textContent = `${prefix}${target}${suffix}`
          return
        }
        const obj = { v: 0 }
        ScrollTrigger.create({
          trigger: el,
          start: "top 92%",
          once: true,
          onEnter: () =>
            gsap.to(obj, {
              v: target,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = `${prefix}${Math.round(obj.v)}${suffix}`
              },
            }),
        })
      })

      /* ---------- Scroll progress ---------- */
      if (!reduce) {
        gsap.to(".scroll-progress", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        })
      }

      /* ---------- Magnetic ---------- */
      if (fine && !reduce) {
        gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
          const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" })
          const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" })
          const onMove = (e: PointerEvent) => {
            const r = el.getBoundingClientRect()
            xTo((e.clientX - (r.left + r.width / 2)) * 0.35)
            yTo((e.clientY - (r.top + r.height / 2)) * 0.35)
          }
          const onLeave = () => {
            xTo(0)
            yTo(0)
          }
          el.addEventListener("pointermove", onMove)
          el.addEventListener("pointerleave", onLeave)
          cleanups.push(() => {
            el.removeEventListener("pointermove", onMove)
            el.removeEventListener("pointerleave", onLeave)
          })
        })
      }

      /* refresh once layout settles (fonts / images / preloader) */
      const refresh = () => ScrollTrigger.refresh()
      window.addEventListener("load", refresh)
      const t1 = window.setTimeout(refresh, 800)
      const t2 = window.setTimeout(refresh, 2600)
      cleanups.push(() => {
        window.removeEventListener("load", refresh)
        window.clearTimeout(t1)
        window.clearTimeout(t2)
      })

      return () => cleanups.forEach((fn) => fn())
    },
    { scope: root },
  )

  return (
    <div ref={root} aria-hidden="true">
      <div className="scroll-progress" />
    </div>
  )
}

export default SiteAnimations
