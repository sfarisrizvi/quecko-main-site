"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const [direction, setDirection] = useState("down");
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollY >= pageHeight - 50) setDirection("up");
      else if (scrollY <= 50) setDirection("down");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Hold the (4 MB+) hero video off the network until the page has finished
    // loading its critical resources, so it never competes with the LCP image
    // for bandwidth. A timeout backstops the `load` event in case it already
    // fired or is delayed.
    let t;
    const start = () => {
      t = setTimeout(() => setVideoReady(true), 600);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("load", start);
    };
  }, []);

  return (
    <section className="main_banner" id="banner">
      <div className="inner_banner">
        {/* Decorative overlay — low priority so it never becomes the LCP element */}
        <img
          src="/Assets/landing/banner/bannershadow.png"
          alt=""
          aria-hidden="true"
          className="img-fluid bannershadow"
          fetchPriority="low"
        />

        {videoReady ? (
          <video
            className="main-banner-video"
            muted
            playsInline
            autoPlay
            loop
            poster="/Assets/landing/banner/banner-preview.png"
            width="100%"
            style={{ display: "block" }}
          >
            <source
              src="https://media.quecko.com/videos/banner.mp4"
              type="video/mp4"
            />
          </video>
        ) : (
          <Image
            className="main-banner-video"
            src="/Assets/landing/banner/banner-preview.png"
            alt="Quecko Banner"
            priority
            fetchPriority="high"
            width={1920}
            height={1080}
            sizes="100vw"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        )}

        <div className="textual_inner">
          <p className="start-label">AI • Web3 • Mobile • Gaming • SaaS</p>
          <span className="para_new">We&apos;re the</span>
          <h1>Building Blocks</h1>
          <h2>Behind The Next Generation Of AI & Digital Products</h2>
          <p>
            From AI agents and intelligent automation to blockchain infrastructure and enterprise platforms, Quecko helps ambitious companies design, build, and scale category-defining products used by millions worldwide.
          </p>
          <div className="twice-btns">
            <Link href="/portfolio" className="btn-explore">Explore Our Work <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.6667 11.3334L14 8.00002L10.6667 4.66669M14 8.00002H2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg></Link>
            <Link href="/contact" className="btn-contact">Contact Us <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.6667 11.3334L14 8.00002L10.6667 4.66669M14 8.00002H2" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg></Link>
          </div>
        </div>

        <div className="right-side">
          {/* Above-fold visual — priority load so it doesn't delay LCP */}
          <Image
            src="/Assets/landing/banner/banner-grid-img.png"
            alt=""
            aria-hidden="true"
            className="banner-grid-img"
            priority
            fetchPriority="high"
            width={900}
            height={700}
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ width: "100%", height: "auto" }}
          />
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
          alt="Scroll"
          loading="lazy"
          width={40}
          height={40}
        />
      </div>
    </section>
  );
};

export default Banner;
