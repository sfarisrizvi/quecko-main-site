import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";

// -------------------- Dynamic imports --------------------
// Critical content: SSR on
const Header = dynamic(() => import("./Landing/header"));
const Footer = dynamic(() => import("./Landing/footer"));
const Banner = dynamic(() => import("./Landing/banner"));

// Heavy/animated sections: SSR off & lazy load
const Services = dynamic(() => import("./Landing/services"), { ssr: false });
const Collabration = dynamic(() => import("./Landing/collabration"), { ssr: false });
const Fourtypes = dynamic(() => import("./Landing/fourtypes"), { ssr: false });
const Projects = dynamic(() => import("./Landing/projects"), { ssr: false });
const Aboutus = dynamic(() => import("./Landing/aboutus"), { ssr: false });
const Stories = dynamic(() => import("./Landing/stories"), { ssr: false });
const Faqs = dynamic(() => import("./Landing/faqs"), { ssr: false });
const Work = dynamic(() => import("./Landing/work"), { ssr: false });
const Usesdevelopmentlanding = dynamic(() => import("../usesdevelopmentlanding"), { ssr: false });
const Marquee = dynamic(() => import("./Landing/marquee"), { ssr: false });

// -------------------- FadeInSection (optimized) --------------------
const FadeInSection = ({ children, disableAnimation = false }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true, // animate only once
  });

  if (disableAnimation) return <div ref={ref}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.2, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 40 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// -------------------- Landing Page --------------------
const Landing = () => {
  const router = useRouter();

  // Canonical URL optimized for SSR
  const canonicalUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://www.quecko.com/";

  // Section refs for hash navigation
  const sectionRefs = {
    services: useRef(null),
    projects: useRef(null),
    stories: useRef(null),
    faqs: useRef(null),
    work: useRef(null),
  };

  // Scroll to hash sections
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const sectionRef = sectionRefs[hash];
    if (sectionRef?.current) {
      const timer = setTimeout(
        () => sectionRef.current.scrollIntoView({ behavior: "smooth" }),
        300
      );
      return () => clearTimeout(timer);
    }
  }, [router.asPath]);

  // -------------------- Section mapping --------------------
  const sectionComponents = [
    { component: Banner, ref: null, disableAnimation: true },
    { component: Services, ref: sectionRefs.services },
    { component: Collabration, ref: null },
    { component: Fourtypes, ref: null },
    { component: Projects, ref: sectionRefs.projects },
    { component: Aboutus, ref: null },
    { component: Stories, ref: sectionRefs.stories },
    { component: Usesdevelopmentlanding, ref: null },
    { component: Faqs, ref: sectionRefs.faqs },
    { component: Work, ref: sectionRefs.work },
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
          title:
            "Quecko - Leading the Blockchain Revolution with Innovative Solutions",
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
        }}
        twitter={{
          cardType: "summary_large_image",
          title:
            "Quecko - Leading the Blockchain Revolution with Innovative Solutions",
          description:
            "Revolutionizing businesses with our cutting-edge blockchain solutions. Secure, decentralized, and scalable – transforming industries for a better, transparent future.",
          site: "@Quecko",
        }}
        additionalMetaTags={[
          {
            name: "robots",
            content:
              "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
          { name: "publisher", content: "Quecko" },
          {
            name: "google-site-verification",
            content: "qg-vlsl7xXj6TIgnIr47Pk9EjJYr272LdGlqNP6cTwM",
          },
        ]}
        additionalLinkTags={[{ rel: "profile", href: "https://gmpg.org/xfn/11" }]}
      />

      {/* -------------------- Header & Marquee -------------------- */}
      <Header style={{ position: "relative", top: "60px" }} />
      <Marquee />

      {/* -------------------- Page Sections -------------------- */}
      {sectionComponents.map(({ component: Component, ref, disableAnimation }, idx) => (
        <div ref={ref} key={idx}>
          <FadeInSection disableAnimation={disableAnimation}>
            <Component />
          </FadeInSection>
        </div>
      ))}

      {/* -------------------- Footer -------------------- */}
      <Footer />
    </>
  );
};

export default Landing;