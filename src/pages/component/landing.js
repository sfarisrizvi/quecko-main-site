import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";

// -------------------- Dynamic imports --------------------
const Banner = dynamic(() => import("./Landing/banner"), { ssr: false });
const Services = dynamic(() => import("./Landing/services"), { ssr: false });
const Collabration = dynamic(() => import("./Landing/collabration"), { ssr: false });
const Fourtypes = dynamic(() => import("./Landing/fourtypes"), { ssr: false });
const Projects = dynamic(() => import("./Landing/projects"), { ssr: false });
const Aboutus = dynamic(() => import("./Landing/aboutus"), { ssr: false });
const Stories = dynamic(() => import("./Landing/stories"), { ssr: false });
const Faqs = dynamic(() => import("./Landing/faqs"), { ssr: false });
const Work = dynamic(() => import("./Landing/work"), { ssr: false });
const Usesdevelopmentlanding = dynamic(() => import("../usesdevelopmentlanding"), { ssr: false });
const Header = dynamic(() => import("./Landing/header"), { ssr: false });
const Footer = dynamic(() => import("./Landing/footer"), { ssr: false });
const Marquee = dynamic(() => import("./Landing/marquee"), { ssr: false });

// -------------------- FadeInSection (optimized) --------------------
const FadeInSection = ({ children, disableAnimation = false }) => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return disableAnimation ? (
    <div ref={ref} style={{ marginBottom: "4rem" }}>{children}</div>
  ) : (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.2, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 40 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ marginBottom: "4rem" }}
    >
      {children}
    </motion.div>
  );
};

// -------------------- Landing Page --------------------
const Landing = () => {
  const router = useRouter();
  const [canonicalUrl, setCanonicalUrl] = useState("");

  // Section refs for hash navigation
  const sectionRefs = {
    services: useRef(null),
    projects: useRef(null),
    stories: useRef(null),
    faqs: useRef(null),
    work: useRef(null),
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCanonicalUrl(window.location.origin + window.location.pathname + window.location.search);
    }
  }, [router.asPath]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const sectionRef = sectionRefs[hash];
    if (sectionRef?.current) {
      setTimeout(() => sectionRef.current.scrollIntoView({ behavior: "smooth" }), 500);
    }
  }, [router.asPath]);

  const sections = [
    <FadeInSection disableAnimation={true}><Banner /></FadeInSection>,
    <div ref={sectionRefs.services}><FadeInSection><Services /></FadeInSection></div>,
    <FadeInSection><Collabration /></FadeInSection>,
    <FadeInSection><Fourtypes /></FadeInSection>,
    <div ref={sectionRefs.projects}><FadeInSection><Projects /></FadeInSection></div>,
    <FadeInSection><Aboutus /></FadeInSection>,
    <div ref={sectionRefs.stories}><FadeInSection><Stories /></FadeInSection></div>,
    <FadeInSection><Usesdevelopmentlanding /></FadeInSection>,
    <div ref={sectionRefs.faqs}><FadeInSection><Faqs /></FadeInSection></div>,
    <div ref={sectionRefs.work}><FadeInSection><Work /></FadeInSection></div>,
  ];

  return (
    <>
      {/* -------------------- SEO -------------------- */}
      <DefaultSeo
        title="Quecko - Leading the Blockchain Revolution with Innovative Solutions"
        description="Quecko delivers innovative blockchain and Web3 solutions tailored to your needs. Empowering fintech with secure, scalable, and decentralized solutions."
        canonical={canonicalUrl}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://quecko.com/",
          site_name: "Quecko",
          title: "Quecko - Leading the Blockchain Revolution with Innovative Solutions",
          description: "Revolutionizing businesses with our cutting-edge blockchain solutions. Secure, decentralized, and scalable – transforming industries for a better, transparent future.",
          images: [
            {
              url: "https://res.cloudinary.com/drt6vurtt/image/upload/c_pad,w_500/v1742572273/queckosite%20%28new%29/images/Untitled-1_rshcle.png",
              width: 1200,
              height: 630,
              alt: "Quecko OG Image",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          title: "Quecko - Leading the Blockchain Revolution with Innovative Solutions",
          description: "Revolutionizing businesses with our cutting-edge blockchain solutions. Secure, decentralized, and scalable – transforming industries for a better, transparent future.",
          site: "@Quecko",
        }}
        additionalMetaTags={[
          { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
          { name: "publisher", content: "Quecko" },
          { name: "google-site-verification", content: "qg-vlsl7xXj6TIgnIr47Pk9EjJYr272LdGlqNP6cTwM" },
        ]}
        additionalLinkTags={[{ rel: "profile", href: "https://gmpg.org/xfn/11" }]}
      />

      {/* -------------------- Header & Marquee -------------------- */}
      <Header style={{ position: "relative", top: "60px" }} />
      <Marquee />

      {/* -------------------- Page Sections -------------------- */}
      {sections.map((Component, index) => (
        <React.Fragment key={index}>{Component}</React.Fragment>
      ))}

      {/* -------------------- Footer -------------------- */}
      <Footer />
    </>
  );
};

export default Landing;