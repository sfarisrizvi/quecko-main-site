export const metadata = {
  title: "Quecko - Leading the Blockchain Revolution with Innovative Solutions",
  description:
    "Quecko delivers innovative blockchain and Web3 solutions tailored to your needs. Empowering fintech with secure, scalable, and decentralized solutions.",
  alternates: {
    canonical: "https://quecko.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quecko.com/",
    siteName: "Quecko",
    title: "Quecko - Leading the Blockchain Revolution with Innovative Solutions",
    description:
      "Revolutionizing businesses with our cutting-edge blockchain solutions. Secure, decentralized, and scalable – transforming industries for a better, transparent future.",
    images: [
      {
        url: "https://res.cloudinary.com/drt6vurtt/image/upload/c_pad,w_500/v1742572273/queckosite%20%28new%29/images/Untitled-1_rshcle.png",
        width: 1200,
        height: 630,
        alt: "Quecko OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Quecko",
    title: "Quecko - Leading the Blockchain Revolution with Innovative Solutions",
    description:
      "Revolutionizing businesses with our cutting-edge blockchain solutions. Secure, decentralized, and scalable – transforming industries for a better, transparent future.",
  },
}

import React from "react"
import Landing from "@/components/sections/Landing"

export default function Home() {

  return (
    <>
      <Landing />

    </>
  )
}
