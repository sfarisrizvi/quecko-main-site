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

      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      const isMac = /Macintosh/i.test(navigator.userAgent)

      const duration = isMobile ? 3.5 : isMac ? 2.5 : 2
      const touchMultiplier = isMobile ? 1.2 : 2
      const easing = (t) =>
        1 - Math.pow(1 - t, isMobile ? 5 : isMac ? 3.5 : 4)

      const lenis = new Lenis({
        duration,
        easing,
        smoothWheel: true,
        smoothTouch: true,
        touchMultiplier,
        infinite: false,
      })

      lenis.on("scroll", ScrollTrigger.update)

      const raf = (time) => {
        lenis.raf(time * 1000)
      }

      gsap.ticker.add(raf)
      gsap.ticker.lagSmoothing(300)

      lenisRef.current = lenis
      rafRef.current = raf
    })

    return () => {
      isMounted = false

      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
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