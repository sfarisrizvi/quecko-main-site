// import { Html, Head, Main, NextScript } from 'next/document'

// export default function Document() {
//   return (
//     <Html lang="en">
//      <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:updated_time" content="2025-07-16T00:00:00+00:00" />
        {/* <link rel="canonical" href="https://www.quecko.com/" /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
