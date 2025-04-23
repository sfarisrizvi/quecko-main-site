
"use client"

import "@/styles/app.scss"
import Script from "next/script"
import useLenisGsap from "@/hooks/useLenis"
import { AnimatePresence } from "framer-motion"
import PageTransition from "@/hooks/PageTransition"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import TawkTo from "./component/Tawkto"
import Loader from "@/hooks/loader"
import { DefaultSeo } from "next-seo"

export default function App({ Component, pageProps }) {
  useLenisGsap()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const isNewUser = localStorage.getItem("visited") === null
    const minLoaderTime = isNewUser ? 8000 : 3000
    const maxLoaderTime = 15000

    localStorage.setItem("visited", "true")

    let imagesLoaded = false
    let videosLoaded = false
    let stylesLoaded = false

    const checkAllLoaded = () => {
      if (imagesLoaded && videosLoaded && stylesLoaded) {
        setTimeout(() => setLoading(false), 500)
      }
    }

    const allImages = document.querySelectorAll("img")
    let loadedImages = 0
    if (allImages.length === 0) {
      imagesLoaded = true
      checkAllLoaded()
    } else {
      allImages.forEach((img) => {
        img.onload = img.onerror = () => {
          loadedImages++
          if (loadedImages === allImages.length) {
            imagesLoaded = true
            checkAllLoaded()
          }
        }
      })
    }

    const allVideos = document.querySelectorAll("video")
    let loadedVideos = 0
    if (allVideos.length === 0) {
      videosLoaded = true
      checkAllLoaded()
    } else {
      allVideos.forEach((video) => {
        video.onloadeddata = () => {
          loadedVideos++
          if (loadedVideos === allVideos.length) {
            videosLoaded = true
            checkAllLoaded()
          }
        }
      })
    }

    setTimeout(() => {
      stylesLoaded = true
      checkAllLoaded()
    }, minLoaderTime)

    setTimeout(() => {
      setLoading(false)
    }, maxLoaderTime)

    return () => {
      allImages.forEach((img) => (img.onload = img.onerror = null))
      allVideos.forEach((video) => (video.onloadeddata = null))
    }
  }, [])

  useEffect(() => {
    const handleRouteChange = (url) => {
      const urlParams = new URLSearchParams(url.split("?")[1])
      const section = urlParams.get("section")

      if (!section) {
        setTimeout(() => {
          window.scrollTo(0, 0)
        }, 1000)
      }
    }

    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router])

  const [canonicalUrl, setCanonicalUrl] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCanonicalUrl(window.location.origin + window.location.pathname + window.location.search)
    }
  }, [router.asPath])

  return (
    <>
   

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Quecko",
              "url": "https://quecko.com/",
              "logo": "https://www.quecko.com/Assets/navlogo.svg",
              "description": "Quecko is a creative agency offering full-stack Web3 marketing, development, and design solutions for blockchain projects across the globe.",
              "founder": {
                "@type": "Person",
                "name": "Alee Abbasi",
                "jobTitle": "Founder & CEO",
                "sameAs": [
                  "https://www.linkedin.com/in/alee-abbasi-32183069"
                ]
              },
              "sameAs": [
                "https://www.linkedin.com/company/quecko.web3",
                "https://www.instagram.com/quecko.web3",
                "https://twitter.com/@quecko_web3"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971-50-740-0268",
                "contactType": "Sales & Business",
                "email": "info@quecko.com",
                "areaServed": "Worldwide",
                "availableLanguage": ["English", "Urdu"]
              }
            }`,
        }}
      />

      <Script
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
              c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "qq5oixz9lv");`,
        }}
      />

      <Script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5NTG2D3Z');`,
        }}
      />

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5NTG2D3Z"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      <AnimatePresence mode="wait">
        <PageTransition key={router.route}>
          {loading && <Loader />}
          {!loading && <Component {...pageProps} />}
          <TawkTo />
        </PageTransition>
      </AnimatePresence>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      />
    </>
  )
}


























































