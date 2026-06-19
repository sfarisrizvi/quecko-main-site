// Scroll helpers that cooperate with Lenis smooth scrolling.
// Lenis (when active on desktop) owns the scroll position and is exposed on
// window.lenis by useLenisGsap. When Lenis is not running (mobile / before init),
// these fall back to native scrolling so behavior stays consistent.

// Smoothly scroll to an element matching the hash (e.g. "#services").
// Retries across a few frames because the target section may mount after
// navigation (route change + loader) before it exists in the DOM.
export function scrollToHash(hash) {
  if (typeof window === "undefined") return
  const id = (hash || "").replace(/^#/, "")
  if (!id) return

  let attempts = 0
  const tryScroll = () => {
    const el = document.getElementById(id)
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el)
      } else {
        el.scrollIntoView({ behavior: "smooth" })
      }
      return
    }
    if (attempts++ < 60) requestAnimationFrame(tryScroll)
  }
  requestAnimationFrame(tryScroll)
}

// Jump to the top of the page on navigation.
// Resets are deliberately layered because a single Lenis jump is unreliable when
// navigating away from the bottom of a long page: Lenis still holds the previous
// page's height/scroll until it resizes, so an `immediate` jump can fail to land
// at the top. We reset native scroll first (covers mobile / pre-init), then tell
// Lenis to re-measure before jumping, with `force` so it works even if stopped.
export function scrollToTop() {
  if (typeof window === "undefined") return

  // Native reset — covers mobile, the window before Lenis initialises, and keeps
  // the browser's own scroll position in sync with Lenis.
  window.scrollTo(0, 0)
  if (document.scrollingElement) document.scrollingElement.scrollTop = 0

  if (window.lenis) {
    // Re-measure so Lenis picks up the new page's height, then jump to the top.
    window.lenis.resize()
    window.lenis.scrollTo(0, { immediate: true, force: true })
  }
}
