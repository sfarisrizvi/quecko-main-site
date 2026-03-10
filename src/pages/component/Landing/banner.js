"use client";

import React, { useEffect, useState } from "react";

const Banner = () => {
  const [direction, setDirection] = useState("down");

  // Only load video after first render
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollY >= pageHeight - 50) setDirection("up");
      else if (scrollY <= 50) setDirection("down");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lazy-load the video for FCP/LCP improvement
  useEffect(() => {
    const timer = setTimeout(() => setVideoLoaded(true), 500); // Delay to prioritize FCP
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="main_banner" id="banner">
      <img className="upper_shadow d-none" src="\Assets\shadowupper.png" />
      <img className="lowershadow  d-none" src="\Assets\shadowlower.png" />
      <div className="inner_banner">
        {videoLoaded ? (
          <video
            className="main-banner-video"
            muted
            playsInline
            autoPlay
            loop
            poster="/Assets/banner-poster.jpg" 
            width="100%"
          >
            <source
              src="https://media.quecko.com/videos/bannervideo.mp4"
              type="video/mp4"
            />
          </video>
        ) : (
          <img
            src="/Assets/banner-poster.jpg"
            alt="Quecko Banner"
            style={{ width: "100%", height: "auto" }}
          />
        )}

        <div className="textual_inner">
          <span className="para_new">We’re the</span>
          <h1>Building Blocks</h1>
          <p>
            Quecko is a leading blockchain development & marketing company.
            We empower Web3 startups to turn ideas into reality by building
            scalable, secure solutions including L1/L2 chains, CEXs and DEXs,
            multichain wallets and all kinds of dApps.
          </p>
        </div>

        <img
          onClick={() => {
            const currentScroll = window.scrollY;
            const newScroll = direction === "down"
              ? currentScroll + 700
              : currentScroll - 700;
            window.scrollTo({ top: newScroll, behavior: "smooth" });
          }}
          className={direction === "down" ? "downarrow" : "downarrow setarrowup"}
          src="/Assets/downarrow.svg"
          alt="Scroll Arrow"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Banner;