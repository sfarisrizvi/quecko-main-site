import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Banner from "./Landing/banner";
import Services from "./Landing/services";
import Collabration from "./Landing/collabration";
import Fourtypes from "./Landing/fourtypes";
import Projects from "./Landing/projects";
import Aboutus from "./Landing/aboutus";
import Stories from "./Landing/stories";
import Faqs from "./Landing/faqs";
import Work from "./Landing/work";
import Footer from "./Landing/footer";
import Header from "./Landing/header";
import { useRouter } from "next/router";
import Usesdevelopmentlanding from "../usesdevelopmentlanding";
import { DefaultSeo } from "next-seo";

const FadeInSection = ({ children, disableAnimation = false }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (!disableAnimation) {
      if (inView) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: "easeOut" },
        });
      } else {
        controls.start({
          opacity: 0.2,
          y: 100,
          transition: { duration: 0.8, ease: "easeInOut" },
        });
      }
    }
  }, [controls, inView, disableAnimation]);

  return disableAnimation ? (
    <div ref={ref} style={{ marginBottom: "4rem" }}>{children}</div>
  ) : (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0.2, y: 40 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
      }}
      exit={{
        y: 40,
        opacity: 0.2,
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
      viewport={{ once: false, amount: 0.2 }}
      style={{ marginBottom: "4rem" }}
    >
      {children}
    </motion.div>
  );
};

const Landing = () => {
  const router = useRouter();
  const sectionRefs = {
    services: useRef(null),
    projects: useRef(null),
    stories: useRef(null),
    faqs: useRef(null),
    work: useRef(null),
  };

  useEffect(() => {
    if (router.query.section) {
      const sectionRef = sectionRefs[router.query.section];
      if (sectionRef?.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router.query.section]);

  const sections = [
    <FadeInSection disableAnimation={true}><Banner /></FadeInSection>,
    <div ref={sectionRefs.services}>
      <FadeInSection><Services /></FadeInSection>
    </div>,
    <FadeInSection><Collabration /></FadeInSection>,
    <FadeInSection><Fourtypes /></FadeInSection>,
    <div ref={sectionRefs.projects}>
      <FadeInSection><Projects /></FadeInSection>
    </div>,
    <FadeInSection><Aboutus /></FadeInSection>,
    <div ref={sectionRefs.stories}>
      <FadeInSection><Stories /></FadeInSection>
    </div>,
        <div ref={sectionRefs.usesdevelopmentlanding}>
        <FadeInSection><Usesdevelopmentlanding /></FadeInSection>
      </div>,
    <div ref={sectionRefs.faqs}>
      <FadeInSection><Faqs /></FadeInSection>
    </div>,
    <div ref={sectionRefs.work}>
      <FadeInSection><Work /></FadeInSection>
    </div>,
  ];

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
      <Header />
      {sections.map((Component, index) => (
        <React.Fragment key={index}>{Component}</React.Fragment>
      ))}
      <Footer />
    </>
  );
};

export default Landing;

