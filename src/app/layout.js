import "bootstrap/dist/css/bootstrap.min.css"
import "@/styles/app.scss"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Script from "next/script"
import AppShell from "@/components/ui/AppShell"

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://quecko.com"

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Quecko — Web3 & Blockchain Agency",
    template: "%s | Quecko",
  },
  description:
    "Quecko is a leading Web3 and blockchain development agency building DeFi protocols, NFT platforms, smart contracts, and decentralised applications.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Quecko",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Quecko — Web3 & Blockchain Agency",
      },
    ],
  },
  twitter: {
    handle: "@quecko_web3",
    site: "@quecko_web3",
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://media.quecko.com" />
        <link rel="preconnect" href="https://wp.quecko.com" />

        {/* Preload only the two primary Aeonik weights so they don't starve the
            LCP image for bandwidth. Medium/Light still load via @font-face
            (font-display: swap), just at normal priority after the hero paints. */}
        <link rel="preload" as="font" href="/Aeonik/Aeonik-Regular.ttf" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/Aeonik/Aeonik-Bold.ttf" type="font/ttf" crossOrigin="anonymous" />

        {/* Google Fonts — only Orbitron is used (decorative labels). Loaded
            non-render-blocking via the media="print" swap so it never delays
            first paint; a noscript fallback covers JS-disabled clients. */}
        <link
          id="gfonts"
          rel="stylesheet"
          media="print"
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          suppressHydrationWarning
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "var l=document.getElementById('gfonts');if(l){if(l.sheet){l.media='all'}else{l.addEventListener('load',function(){l.media='all'})}}",
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          />
        </noscript>

        {/* OG */}
        <meta property="og:updated_time" content="2025-07-16T00:00:00+00:00" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Quecko",
              url: "https://quecko.com/",
              logo: "https://www.quecko.com/Assets/navlogo.svg",
              description:
                "Quecko is a creative agency offering full-stack Web3 marketing, development, and design solutions for blockchain projects across the globe.",
              founder: {
                "@type": "Person",
                name: "Alee Abbasi",
                jobTitle: "Founder & CEO",
                sameAs: ["https://www.linkedin.com/in/alee-abbasi-32183069"],
              },
              sameAs: [
                "https://www.linkedin.com/company/quecko.web3",
                "https://www.instagram.com/quecko.web3",
                "https://twitter.com/@quecko_web3",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+971-50-740-0268",
                contactType: "Sales & Business",
                email: "info@quecko.com",
                areaServed: "Worldwide",
                availableLanguage: ["English", "Urdu"],
              },
            }),
          }}
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>

        {/* Analytics */}
        <Script
          id="clarity-script"
          strategy="lazyOnload"
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
          strategy="lazyOnload"
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
      </body>
    </html>
  )
}
