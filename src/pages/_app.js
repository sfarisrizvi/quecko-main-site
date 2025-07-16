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
 // import { DefaultSeo } from "next-seo"

export default function App({ Component, pageProps }) {
    useLenisGsap()
    const router = useRouter()
    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
        const isNewUser = localStorage.getItem("visited") === null
         const minLoaderTime = isNewUser ? 1000 : 500
        const maxLoaderTime = 2000

        localStorage.setItem("visited", "true")

        let imagesLoaded = false
        let videosLoaded = false
        let stylesLoaded = false

        const checkAllLoaded = () => {
            if (imagesLoaded && videosLoaded ) {
                 setTimeout(() => setShowLoader(false), 300)
            }
        }
        const allImages = typeof window !== 'undefined' ? document.querySelectorAll("img") : [];
        let loadedImages = 0;
        if (allImages.length === 0) {
            imagesLoaded = true;
        } else {
            allImages.forEach((img) => {
                const imgElement = img;
                const handleLoad = () => {
                    loadedImages++;
                    if (loadedImages === allImages.length) {
                        imagesLoaded = true;
                        checkAllLoaded();
                    }
                    imgElement.removeEventListener('load', handleLoad);
                    imgElement.removeEventListener('error', handleError);
                };
                const handleError = () => {
                    loadedImages++;
                    if (loadedImages === allImages.length) {
                        imagesLoaded = true;
                        checkAllLoaded();
                    }
                    imgElement.removeEventListener('load', handleLoad);
                    imgElement.removeEventListener('error', handleError);
                };
                imgElement.addEventListener('load', handleLoad);
                imgElement.addEventListener('error', handleError);
                 if (imgElement.complete) {
                    handleLoad();
                }
            });
        }
        const allVideos = typeof window !== 'undefined' ? document.querySelectorAll("video") : [];
        let loadedVideos = 0;
        if (allVideos.length === 0) {
            videosLoaded = true;
        } else {
            allVideos.forEach((video) => {
                const vidElement = video;
                const handleVideoLoad = () => {
                    loadedVideos++;
                    if (loadedVideos === allVideos.length) {
                        videosLoaded = true;
                        checkAllLoaded();
                    }
                    vidElement.removeEventListener('loadeddata', handleVideoLoad);
                };
                vidElement.addEventListener('loadeddata', handleVideoLoad);
                 if (vidElement.readyState >= 2) {
                    handleVideoLoad();
                }
            });
        }


         const minLoaderTimer = setTimeout(() => {
             checkAllLoaded();
        }, minLoaderTime);

         const maxLoaderTimer = setTimeout(() => {
            setShowLoader(false);
        }, maxLoaderTime);

         checkAllLoaded();

        return () => {
            clearTimeout(minLoaderTimer);
            clearTimeout(maxLoaderTimer);
             allImages.forEach((img) => (img.onload = img.onerror = null));
            allVideos.forEach((video) => (video.onloadeddata = null));
        };
    }, [router.pathname]);

    useEffect(() => {
        const handleRouteChange = (url) => {
            const urlParams = new URLSearchParams(url.split("?")[1])
            const section = urlParams.get("section")

            if (!section) {
                 const scrollTimer = setTimeout(() => {
                    window.scrollTo(0, 0)
                }, PageTransition.duration ? PageTransition.duration * 1000 : 1000)
            }
        }

        router.events.on("routeChangeComplete", handleRouteChange)
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange)
        }
    }, [router.events])

    return (
        <>


             <Script
                id="ld-json-org" // Unique id for script
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
                strategy="afterInteractive" // Strategy define karein
            />
            <Script
                id="clarity-script" // Unique id
                dangerouslySetInnerHTML={{
                    __html: `(function(c,l,a,r,i,t,y){
              c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "qq5oixz9lv");`,
                }}
                strategy="afterInteractive"
            />
            <Script
                id="gtm-script" // Unique id
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5NTG2D3Z');`,
                }}
                strategy="afterInteractive"
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
                  <div key={router.route} style={{ position: 'relative', minHeight: '100vh' }}>
                     <PageTransition>
                        <Component {...pageProps} />
                    </PageTransition>

                     {showLoader && <Loader />}
                    <TawkTo />
                </div>
            </AnimatePresence>

            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
                crossOrigin="anonymous"
                strategy="lazyOnload"
            />
        </>
    )
}


