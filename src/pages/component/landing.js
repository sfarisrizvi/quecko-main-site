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
    <div ref={sectionRefs.faqs}>
      <FadeInSection><Faqs /></FadeInSection>
    </div>,
    <div ref={sectionRefs.work}>
      <FadeInSection><Work /></FadeInSection>
    </div>,
  ];

  return (
    <>
      <Header />
      {sections.map((Component, index) => (
        <React.Fragment key={index}>{Component}</React.Fragment>
      ))}
      <Footer />
    </>
  );
};

export default Landing;

