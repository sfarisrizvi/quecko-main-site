"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "./header";
import gsap from "gsap";

const Banner = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    const text = element.innerText;

    element.innerHTML = text
      .split("")
      .map(
        (char) =>
          `<span class="char">${char === " " ? "&nbsp;" : char}</span>`
      )
      .join("");


    gsap.timeline()
      .set(".style-1 .char", { opacity: 0, y: 50 })
      .to(".style-1 .char", {
        y: 0,
        opacity: 1,
        duration: 1.8,
        ease: "power4.out",
        stagger: {
          amount: 1,
          ease: "power2.inOut",
        },
      });

  }, []);


  const [scrolling, setScrolling] = useState(false);
  const [direction, setDirection] = useState("down");
  const scrollSpeed = 20;
  const threshold = 50;
  const scrollRef = useRef(null);

  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollY >= pageHeight - threshold) {
        setDirection("up");
      } else if (scrollY <= threshold) {
        setDirection("down");
      }
    };


    const smoothScroll = () => {
      if (!scrolling) return;
      window.scrollBy({
        top: direction === "down" ? scrollSpeed : -scrollSpeed,
        behavior: "smooth",
      });
      scrollRef.current = requestAnimationFrame(smoothScroll);
    };


    if (scrolling) {
      scrollRef.current = requestAnimationFrame(smoothScroll);
    }

    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      cancelAnimationFrame(scrollRef.current);
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, [scrolling, direction]);


  return (
    <>
      <section className="main_banner" id="banner">
        {/* <Header/> */}
        <img className="upper_shadow d-none" src="\Assets\shadowupper.png" />
        <img className="lowershadow  d-none" src="\Assets\shadowlower.png" />
        <div className="inner_banner">
          <video className='main-banner-video'
            muted="muted" playsinline="playsinline"
            autoPlay
            loop
            width="100%"
            id="myVideo">
            <source src="https://res.cloudinary.com/drt6vurtt/video/upload/v1742330920/queckosite%20(new)/videos/bannervideo_ns7oz8.mp4" type="video/mp4" />
          </video>
          <div className="textual_inner">
            <span className="para_new">We’re the</span>
            <div className="animation-section style-1">
              <h1 ref={textRef}> Building Blocks</h1>
            </div>

            <p>Quecko is a leading blockchain development & marketing company. We empower Web3 startups to turn ideas into reality by building scalable, secure solutions including L1/L2 chains, CEXs and DEXs, multichain wallets and all kinds of dApps
            </p>
          </div>

          <img onMouseDown={() => setScrolling(true)}
        onMouseUp={() => setScrolling(false)}
        onMouseLeave={() => setScrolling(false)} className={direction === "down" ? "downarrow" : "downarrow setarrowup"} src="\Assets\downarrow.svg" />
        </div>


      </section>

    </>
  );
};

export default Banner;
