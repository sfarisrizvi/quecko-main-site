"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Offcanvas from 'react-bootstrap/Offcanvas';
import dynamic from "next/dynamic";
import { motion } from "framer-motion";


const gsapPromise = import("gsap");
const scrollTriggerPromise = import("gsap/ScrollTrigger");


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

  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const newLogoRef = useRef(null);
  const navLinksRef = useRef(null);
  const newLogoRefRotate = useRef(null);


  useEffect(() => {
    Promise.all([gsapPromise, scrollTriggerPromise]).then(([gsapModule, scrollTriggerModule]) => {
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.default;
      gsap.registerPlugin(ScrollTrigger);

      let ctx = gsap.context(() => {
        gsap.to(logoRef.current, {
          x: 200,
          opacity: 0,
          width: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: document.body,
            start: "top -50%",
            toggleActions: "play reverse play reverse",
          },
        });


        gsap.to(navbarRef.current, {
          width: "50vw",
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


        gsap.set(newLogoRef.current, {
          x: 40,
          opacity: 0,
          width: 0,
        });


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
          },
        });
      });

      return () => {
        ctx.revert();
      };
    });
  }, []);


  useEffect(() => {
    const updateRotation = () => {
      let theta = document.documentElement.scrollTop / 50 % Math.PI;
      if (newLogoRefRotate.current) {
        newLogoRefRotate.current.style.transform = `rotate(${theta}rad)`;
      }
    };


    window.addEventListener("scroll", updateRotation);

    return () => {
      window.removeEventListener("scroll", updateRotation);
    };
  }, []);



  return (
    <>
      <div className="mainnavbar" >
        <div className="inner_nav" ref={navbarRef}>
          <Link href="/" ref={logoRef} className="main-logo">
            <img src="/Assets/navlogo.svg" alt="Logo" className="navbar__logo" />
          </Link>

          <div className="left_side" ref={navLinksRef}>
            <Link href="/" ref={newLogoRef} className="newlogo"><img ref={newLogoRefRotate} src="/Assets/phonennav.svg" alt="img" className="img-fluid" /></Link>
            <Link href="/?section=services" scroll={false}>
              <p className="nav-link">Service</p>
            </Link>
            <Link href="/aboutdetail">
              <p className="nav-link">About Us</p>
            </Link>

            <Link href="/?section=projects" scroll={false} >
              <p className="nav-link">Portfolio</p>
            </Link>
            <Link href="/blog" scroll={false}>
              <p className="nav-link">Blogs</p>
            </Link>
            <Link href="/?section=faqs" scroll={false}>
              <p className="nav-link">FAQs</p>
            </Link>


            <button className="animated-button">
              <div className="btn-flip" data-back="Est labore molestiae ex quos perspi sit commodi" data-front="Est labore molestiae ex quos perspi sit commodi">
                <div className="front"> Start a Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M14 8.5L10.6667 5.16666M14 8.5L10.6667 11.8333M14 8.5H2" stroke="#C1FF14" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg></div>
                <div className="back"> Start a Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M14 8.5L10.6667 5.16666M14 8.5L10.6667 11.8333M14 8.5H2" stroke="#C1FF14" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="phone_nav d-none">
        <div className="inner_navv">
          <Link href="/">
            <img src="/Assets/phonennav.svg" alt="Phone Logo" />
          </Link>

          <div className="button_bar">
            <button>Start a Project</button>
            <img onClick={handleShow} src="/Assets/bar.svg" alt="Menu" />
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
          <motion.div
            initial="hidden"
            animate={show ? "visible" : "hidden"}
            custom={0}
            variants={menuVariants}
          >
            <Link href="/?section=services" scroll={false} onClick={handleClose}>
              <p  className="nav-link">Service</p>
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={show ? "visible" : "hidden"}
            custom={0.1}
            variants={menuVariants}
          >
            <Link href="/aboutdetail">
              <p onClick={handleClose} className="nav-link">About Us</p>
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={show ? "visible" : "hidden"}
            custom={0.2}
            variants={menuVariants}
          >
            <Link href="/?section=projects" scroll={false} onClick={handleClose}>
              <p className="nav-link">Portfolio</p>
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={show ? "visible" : "hidden"}
            custom={0.3}
            variants={menuVariants}
          >
            <Link href="/blogs" scroll={false} onClick={handleClose}>
              <p className="nav-link">Blogs</p>
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={show ? "visible" : "hidden"}
            custom={0.4}
            variants={menuVariants}
          >
            <Link href="/?section=faqs" scroll={false}>
              <p onClick={handleClose} className="nav-link">FAQs</p>
            </Link>
          </motion.div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
    </>
  );
};

export default Header;


