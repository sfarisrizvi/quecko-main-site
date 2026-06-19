"use client"

import useLenisGsap from "@/hooks/useLenis"
import { useEffect, useState } from "react"

export default function ClientEffects() {
  const [enableLenis, setEnableLenis] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setEnableLenis(true), 1500)
    return () => clearTimeout(t)
  }, [])

  useLenisGsap(enableLenis)

  return null
}