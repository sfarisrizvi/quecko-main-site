"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"
import ClientEffects from "@/components/ui/ClientEffects"
import ScrollManager from "@/components/ui/ScrollManager"

const Loader = dynamic(() => import("@/hooks/loader"), { ssr: false })
const TawkTo = dynamic(() => import("@/components/ui/TawkTo"), { ssr: false, loading: () => null })

export default function AppShell({ children }) {
  const pathname = usePathname()
  const [showLoader, setShowLoader] = useState(false)
  const [showTawkTo, setShowTawkTo] = useState(false)
  const [prevPath, setPrevPath] = useState(null)

  // Show loader on route change (pathname change = navigation)
  useEffect(() => {
    if (prevPath !== null && prevPath !== pathname) {
      setShowLoader(true)
      const t = setTimeout(() => setShowLoader(false), 400)
      return () => clearTimeout(t)
    }
    setPrevPath(pathname)
  }, [pathname])

  // Delay TawkTo to not block LCP
  useEffect(() => {
    const t = setTimeout(() => setShowTawkTo(true), 5000)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {children}
      {showLoader && <Loader />}
      <ScrollManager />
      <ClientEffects />
      {showTawkTo && <TawkTo />}
    </>
  )
}

//