"use client"

import React from "react"
import dynamic from "next/dynamic"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Banner from "@/components/sections/Banner"

const Services     = dynamic(() => import("@/components/sections/Services"))
const Fourtypes    = dynamic(() => import("@/components/sections/FourTypes"))
const Projects     = dynamic(() => import("@/components/sections/Projects"))
const Aboutus      = dynamic(() => import("@/components/sections/AboutUs"))
const Stories      = dynamic(() => import("@/components/sections/Stories"))
const Faqs         = dynamic(() => import("@/components/sections/Faqs"))
const Marquee      = dynamic(() => import("@/components/sections/Marquee"))
const Trusted      = dynamic(() => import("@/components/sections/Trusted"))
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"))
const Clients      = dynamic(() => import("@/components/sections/Clients"))
const Cnt          = dynamic(() => import("@/components/sections/Cnt"))

const Landing = () => {
  return (
    <>
      <Header />
      <Marquee />
      <Banner />
      <Trusted />
      <Fourtypes />
      <Services />
      <Aboutus />
      <Testimonials />
      <Projects />
      <Clients />
      <Stories />
      <Faqs />
      <Cnt />
      <Footer />
    </>
  )
}

export default Landing
