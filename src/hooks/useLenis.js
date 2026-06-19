"use client"

// hooks/useLenisGsap.js
import { useEffect, useRef } from "react"

export default function useLenisGsap(enabled = true) {
  const lenisRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!enabled) return

    let isMounted = true

    Promise.all([
      import("lenis"),
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([{ default: Lenis }, { gsap }, { ScrollTrigger }]) => {
      if (!isMounted) return

      gsap.registerPlugin(ScrollTrigger)

      const isMobileUA = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      const isMobileViewport = window.innerWidth <= 768

      // Skip Lenis on real mobile OR DevTools mobile simulation (375px etc.)
      // smoothTouch:false + DevTools simulated touch = scroll gets stuck.
      // Mobile uses native scroll — matches the old site's feel.
      if (isMobileUA || isMobileViewport) {
        isMounted = false
        return
      }

      // Reduced durations: original Mac 2.5s caused heavy lag on MacBook trackpads.
      // Native-feeling target: 0.8–1.2s. smoothTouch disabled — overrides iOS momentum scroll.
      const duration = 1.0
      const easing = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))

      const lenis = new Lenis({
        duration,
        easing,
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        infinite: false,
      })

      lenis.on("scroll", ScrollTrigger.update)

      const raf = (time) => {
        lenis.raf(time * 1000)
      }

      gsap.ticker.add(raf)
      gsap.ticker.lagSmoothing(0)

      lenisRef.current = lenis
      rafRef.current = raf

      // Expose for scroll helpers (hash anchors, route-change reset).
      window.lenis = lenis

      // If the page loaded with a hash (e.g. /#services), scroll to it now
      // that Lenis controls the scroll position.
      if (window.location.hash) {
        import("@/Utils/scroll").then(({ scrollToHash }) => {
          scrollToHash(window.location.hash)
        })
      }
    })

    return () => {
      isMounted = false

      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
        if (typeof window !== "undefined") window.lenis = null
      }

      if (rafRef.current) {
        import("gsap").then(({ gsap }) => {
          gsap.ticker.remove(rafRef.current)
        })
        rafRef.current = null
      }
    }
  }, [enabled])
}
