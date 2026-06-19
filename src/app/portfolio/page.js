import { Suspense } from 'react'
import PageClient from "./_client"
export const metadata = { title: "Our Portfolio – Quecko", description: "Explore Quecko's diverse portfolio showcasing our top design, development, and marketing projects." }
export default function Page() { return <Suspense fallback={null}><PageClient /></Suspense> }
