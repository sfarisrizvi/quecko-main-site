"use client"

import useLenisGsap from "@/hooks/useLenis"
import { useEffect, useState } from "react"

export default function ClientEffects() {
  const [enableLenis, setEnableLenis] = useState(false)

  useEffect(() => {
    // Delay until after LCP / Speed Index
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setEnableLenis(true))
    } else {
      setTimeout(() => setEnableLenis(true), 1500)
    }
  }, [])

  useLenisGsap(enableLenis)

  return null
}