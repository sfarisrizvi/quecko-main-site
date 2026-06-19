"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { scrollToHash, scrollToTop } from "@/Utils/scroll"

// Owns scroll behavior across navigation, cooperating with Lenis:
//  - On route change: scroll to the hash target if present, else reset to top.
//  - On same-page hash navigation (e.g. clicking /#services while on /): the
//    `hashchange` event fires and we scroll to the target.
export default function ScrollManager() {
  const pathname = usePathname()
  const isFirst = useRef(true)

  useEffect(() => {
    if (window.location.hash) {
      // Direct load or navigation to a hash (e.g. /#services) — scroll to it.
      scrollToHash(window.location.hash)
      isFirst.current = false
      return
    }

    if (isFirst.current) {
      // First render — the page already loads at its natural position.
      isFirst.current = false
      return
    }

    // Navigating to a new page — start from the top. Re-assert across the
    // navigation settle window: the new page's content, async data and GSAP
    // ScrollTrigger.refresh() (Footer refreshes ~200ms in, route loader runs
    // ~400ms) can shift layout after the first jump, so once isn't enough.
    scrollToTop()
    const raf = requestAnimationFrame(scrollToTop)
    const timers = [120, 450].map((ms) => setTimeout(scrollToTop, ms))

    return () => {
      cancelAnimationFrame(raf)
      timers.forEach(clearTimeout)
    }
  }, [pathname])

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash) scrollToHash(window.location.hash)
    }
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  return null
}
