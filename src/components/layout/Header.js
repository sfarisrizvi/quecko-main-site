"use client"

"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { scrollToHash } from "@/Utils/scroll";

const menuVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: (delay) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const newLogoRef = useRef(null);
  const navLinksRef = useRef(null);
  const newLogoRefRotate = useRef(null);

  useEffect(() => {
    if (!isDesktop) return;

    let ctx;
    let cancelled = false;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, scrollTriggerModule]) => {
      if (cancelled) return;
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.default;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Old logo: fade + slide out — opacity+transform only (no width change = no layout reflow)
        gsap.to(logoRef.current, {
          x: 200,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: document.body,
            start: "top -50%",
            toggleActions: "play reverse play reverse",
            onEnter: () => {
              if (logoRef.current) logoRef.current.style.pointerEvents = "none";
            },
            onLeaveBack: () => {
              if (logoRef.current) logoRef.current.style.pointerEvents = "";
            },
          },
        });

        gsap.to(navbarRef.current, {
          width: "60vw",
          left: "50%",
          x: "-50%",
          duration: 0.5,
          scrollTrigger: {
            trigger: document.body,
            start: "top -50%",
            toggleActions: "play reverse play reverse",
          },
        });

        gsap.to(navLinksRef.current, {
          justifyContent: "flex-start",
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: document.body,
            start: "top -50%",
            toggleActions: "play reverse play reverse",
          },
        });

        gsap.set(newLogoRef.current, { x: 40, opacity: 0, width: 0 });

        gsap.to(newLogoRef.current, {
          x: 0,
          opacity: 1,
          width: "auto",
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: document.body,
            start: "top -50%",
            toggleActions: "play reverse play reverse",
            onEnter: () => {
              if (newLogoRef.current) newLogoRef.current.style.visibility = "visible";
            },
            onLeaveBack: () => {
              if (newLogoRef.current) newLogoRef.current.style.visibility = "hidden";
            },
          },
        });
      });
    });

    return () => {
      cancelled = true;
      if (ctx) ctx.revert();
    };
  }, [isDesktop]);

  useEffect(() => {
    let rafId;
    const updateRotation = () => {
      if (newLogoRefRotate.current) {
        const theta = document.documentElement.scrollTop / 50 % Math.PI;
        newLogoRefRotate.current.style.transform = `rotate(${theta}rad)`;
      }
      rafId = null;
    };

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(updateRotation);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const pathname = usePathname();
  const isLanding = pathname === "/";

  // Same-page hash links (e.g. /#services while already on landing) don't fire a
  // route change or hashchange via Next's Link, so scroll manually here.
  // Cross-page navigation is handled by ScrollManager on the route change.
  const handleHashNav = (hash) => {
    if (pathname === "/") scrollToHash(hash);
  };

  return (
    <>
      {isDesktop && (
        <div className="mainnavbar">
          <div className={`inner_nav ${isLanding ? "landing-top" : ""}`} ref={navbarRef}>
            <Link href="/" ref={logoRef} className="main-logo">
              <Image src="/Assets/navlogo.svg" alt="Quecko Logo" className="navbar__logo" width={125} height={51} priority />
            </Link>

            <div className="left_side" ref={navLinksRef}>
              {/* New compact logo — hidden initially, visibility toggled by GSAP */}
              <Link
                href="/"
                ref={newLogoRef}
                className="newlogo"
                style={{ flexShrink: "0", visibility: "hidden" }}
              >
                <Image ref={newLogoRefRotate} src="/Assets/phonennav.svg" alt="Quecko Icon" className="img-fluid" width={36} height={36} />
              </Link>
              <Link href="/#services" scroll={false} onClick={() => handleHashNav("#services")}>
                <p className="nav-link">Service</p>
              </Link>
              <Link href="/about-us">
                <p className="nav-link">About Us</p>
              </Link>
              <Link href="/portfolio" scroll={false}>
                <p className="nav-link">Portfolio</p>
              </Link>
              <Link href="/blog" scroll={false}>
                <p className="nav-link">Blogs</p>
              </Link>
              <Link href="/careers">
                <p className="nav-link">Careers</p>
              </Link>
              <Link href="/contact">
                <span className="animated-button">
                  <div className="btn-flip" data-back="Start a Project" data-front="Start a Project">
                    <div className="front">
                      Start a Project
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path d="M14 8.5L10.6667 5.16666M14 8.5L10.6667 11.8333M14 8.5H2" stroke="#C1FF14" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="back">
                      Start a Project
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path d="M14 8.5L10.6667 5.16666M14 8.5L10.6667 11.8333M14 8.5H2" stroke="#C1FF14" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className={`phone_nav d-none ${!isLanding ? "landing-top-mbl" : ""}`}>
        <div className="inner_navv">
          <Link href="/">
            <Image src="/Assets/phonennav.svg" alt="Quecko Logo" width={36} height={36} />
          </Link>

          <div className="button_bar">
            <Link href="/contact">
              <span>Start a Project</span>
            </Link>
            <Image onClick={handleShow} src="/Assets/bar.svg" alt="Menu" width={35} height={35} />
          </div>
        </div>
      </div>

      <Offcanvas className="mainsidebar" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="mainsidebar-header">
          <Offcanvas.Title>
            <div className="header_text">
              Menu
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M16.0673 15.1828C16.1254 15.2409 16.1714 15.3098 16.2028 15.3857C16.2343 15.4616 16.2505 15.5429 16.2505 15.625C16.2505 15.7071 16.2343 15.7884 16.2028 15.8643C16.1714 15.9402 16.1254 16.0091 16.0673 16.0672C16.0092 16.1253 15.9403 16.1713 15.8644 16.2027C15.7885 16.2342 15.7072 16.2503 15.6251 16.2503C15.543 16.2503 15.4617 16.2342 15.3858 16.2027C15.3099 16.1713 15.241 16.1253 15.1829 16.0672L10.0001 10.8836L4.81729 16.0672C4.70002 16.1845 4.54096 16.2503 4.3751 16.2503C4.20925 16.2503 4.05019 16.1845 3.93292 16.0672C3.81564 15.9499 3.74976 15.7909 3.74976 15.625C3.74976 15.4591 3.81564 15.3001 3.93292 15.1828L9.11651 10L3.93292 4.81719C3.81564 4.69991 3.74976 4.54085 3.74976 4.375C3.74976 4.20915 3.81564 4.05009 3.93292 3.93281C4.05019 3.81554 4.20925 3.74965 4.3751 3.74965C4.54096 3.74965 4.70002 3.81554 4.81729 3.93281L10.0001 9.11641L15.1829 3.93281C15.3002 3.81554 15.4593 3.74965 15.6251 3.74965C15.791 3.74965 15.95 3.81554 16.0673 3.93281C16.1846 4.05009 16.2505 4.20915 16.2505 4.375C16.2505 4.54085 16.1846 4.69991 16.0673 4.81719L10.8837 10L16.0673 15.1828Z"
                  fill="white"
                />
              </svg>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="canvas_body">
            <motion.div initial="hidden" animate={show ? "visible" : "hidden"} custom={0} variants={menuVariants}>
              <Link href="/#services" scroll={false} onClick={() => { handleClose(); handleHashNav("#services"); }}>
                <p className="nav-link">Service</p>
              </Link>
            </motion.div>
            <motion.div initial="hidden" animate={show ? "visible" : "hidden"} custom={0.1} variants={menuVariants}>
              <Link href="/about-us">
                <p onClick={handleClose} className="nav-link">About Us</p>
              </Link>
            </motion.div>
            <motion.div initial="hidden" animate={show ? "visible" : "hidden"} custom={0.2} variants={menuVariants}>
              <Link href="/portfolio" scroll={false} onClick={handleClose}>
                <p className="nav-link">Portfolio</p>
              </Link>
            </motion.div>
            <motion.div initial="hidden" animate={show ? "visible" : "hidden"} custom={0.3} variants={menuVariants}>
              <Link href="/blog" scroll={false} onClick={handleClose}>
                <p className="nav-link">Blogs</p>
              </Link>
            </motion.div>
            <motion.div initial="hidden" animate={show ? "visible" : "hidden"} custom={0.4} variants={menuVariants}>
              <Link href="/#faqs" scroll={false} onClick={() => { handleClose(); handleHashNav("#faqs"); }}>
                <p className="nav-link">FAQs</p>
              </Link>
            </motion.div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
