
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
      <DefaultSeo
        title="Quecko - Leading the Blockchain Revolution with Innovative Solutions"
        description="Quecko Inc. delivers innovative blockchain and Web3 solutions tailored to your needs. Empowering fintech with secure, scalable, and decentralized solutions."
        canonical={canonicalUrl}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://quecko.com/',
          site_name: 'Quecko',
          title: 'Quecko - Leading the Blockchain Revolution with Innovative Solutions',
          description:
            'Revolutionizing businesses with our cutting-edge blockchain solutions. Secure, decentralized, and scalable – transforming industries for a better, transparent future.',
          images: [
            {
              url: 'https://res.cloudinary.com/drt6vurtt/image/upload/c_pad,w_500/v1742572273/queckosite%20%28new%29/images/Untitled-1_rshcle.png',
              width: 1200,
              height: 630,
              alt: 'Quecko OG Image',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          title: 'Quecko - Leading the Blockchain Revolution with Innovative Solutions',
          description:
            'Revolutionizing businesses with our cutting-edge blockchain solutions. Secure, decentralized, and scalable – transforming industries for a better, transparent future.',
          site: '@Quecko_Inc',
        }}
        additionalMetaTags={[
          { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
          { name: 'publisher', content: 'Quecko' },
          { name: 'google-site-verification', content: 'qg-vlsl7xXj6TIgnIr47Pk9EjJYr272LdGlqNP6cTwM' },
        ]}
        additionalLinkTags={[
          { rel: 'profile', href: 'https://gmpg.org/xfn/11' },
          {
            rel: 'preload',
            as: 'video',
            href: 'https://res.cloudinary.com/drt6vurtt/video/upload/v1742330920/queckosite%20(new)/videos/bannervideo_ns7oz8.mp4',
            type: 'video/mp4',
          },
          {
            rel: 'stylesheet',
            href: 'https://db.onlinewebfonts.com/c/8f2a9d487bbbc60974cd132fc3a63862?family=Aeonik+Regular',
          },
        ]}
      />

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

















































