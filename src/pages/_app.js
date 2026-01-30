import "@/styles/app.scss"
import Script from "next/script"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// ---------------- Client-only dynamic imports ----------------

const PageTransition = dynamic(() => import("@/hooks/PageTransition"), {
  ssr: false,
})

const AnimatePresence = dynamic(
  () => import("framer-motion").then((mod) => mod.AnimatePresence),
  { ssr: false }
)

const Loader = dynamic(() => import("@/hooks/loader"), { ssr: false })
const TawkTo = dynamic(() => import("./component/Tawkto"), { ssr: false })
const ClientEffects = dynamic(() => import("./component/ClientEffects"), {
  ssr: false,
})

export default function App({ Component, pageProps }) {
  const router = useRouter()

  // 🚫 NO loader on first paint
  const [showLoader, setShowLoader] = useState(false)
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  // Detect first render
  useEffect(() => {
    setIsFirstLoad(false)
  }, [])

  // Loader ONLY during route changes
  useEffect(() => {
    const start = () => setShowLoader(true)
    const end = () => setShowLoader(false)

    router.events.on("routeChangeStart", start)
    router.events.on("routeChangeComplete", end)
    router.events.on("routeChangeError", end)

    return () => {
      router.events.off("routeChangeStart", start)
      router.events.off("routeChangeComplete", end)
      router.events.off("routeChangeError", end)
    }
  }, [router.events])

  return (
    <>
      {/* ---------------- SEO / Analytics ---------------- */}

      <Script
        id="ld-json-org"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Quecko",
            "url": "https://quecko.com/",
            "logo": "https://www.quecko.com/Assets/navlogo.svg",
            "description": "Quecko is a creative agency offering full-stack Web3 marketing and development.",
            "sameAs": [
              "https://www.linkedin.com/company/quecko.web3",
              "https://www.instagram.com/quecko.web3",
              "https://twitter.com/@quecko_web3"
            ]
          }`,
        }}
      />

      <Script
        id="clarity-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;
            t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "qq5oixz9lv");`,
        }}
      />

      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5NTG2D3Z');`,
        }}
      />

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5NTG2D3Z"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* ---------------- App Rendering ---------------- */}

      {isFirstLoad ? (
        // 🚀 FIRST LOAD — zero animation, zero blocking
        <Component {...pageProps} />
      ) : (
        // 🎬 Route changes only
        <AnimatePresence mode="wait">
          <PageTransition key={router.route}>
            <Component {...pageProps} />
          </PageTransition>
        </AnimatePresence>
      )}

      {showLoader && <Loader />}

      {/* Lenis + GSAP (delayed, safe) */}
      <ClientEffects />

      {/* Chat widget (lazy) */}
      <TawkTo />

      {/* Bootstrap JS */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        strategy="lazyOnload"
      />
    </>
  )
}