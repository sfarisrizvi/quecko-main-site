"use client"

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Link from "next/link";
import Aboutus from "@/components/sections/AboutUs";
import Stories from "@/components/sections/Stories";
import Footer from "@/components/layout/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Cnt from "@/components/sections/Cnt";

const AboutUsPage = () => {
  const textRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    // Hold the banner video off the network until the page has finished loading
    // its critical resources, so it never competes with above-the-fold content
    // for bandwidth. A timeout backstops the `load` event in case it already fired.
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

  useEffect(() => {
    if (!textRef.current) return;
    const element = textRef.current;
    const text = element.innerText;
    element.innerHTML = text.split("").map((char) => `<span class="char">${char === " " ? "&nbsp;" : char}</span>`).join("");
    import("gsap").then(({ gsap }) => {
      gsap.timeline()
        .set(".style-1 .char", { opacity: 0, y: 50 })
        .to(".style-1 .char", { y: 0, opacity: 1, duration: 1.8, ease: "power4.out", stagger: { amount: 1, ease: "power2.inOut" } });
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
      if (scrollY >= pageHeight - threshold) setDirection("up");
      else if (scrollY <= threshold) setDirection("down");
    };
    const smoothScroll = () => {
      if (!scrolling) return;
      window.scrollBy({ top: direction === "down" ? scrollSpeed : -scrollSpeed, behavior: "smooth" });
      scrollRef.current = requestAnimationFrame(smoothScroll);
    };
    if (scrolling) scrollRef.current = requestAnimationFrame(smoothScroll);
    window.addEventListener("scroll", checkScrollPosition);
    return () => { cancelAnimationFrame(scrollRef.current); window.removeEventListener("scroll", checkScrollPosition); };
  }, [scrolling, direction]);

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://quecko.com" },
        { name: "About Us", url: "https://quecko.com/about-us" },
      ]} />

      <Header />
      <div>
        <section className="main_banner1">
          <div className="inner_banner">
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
            <div className="textual_inner myinnner_data">
              <div className="animation-section style-1">
                <h1>About Us</h1>
                <p className="span_ptag newtagsss">At Quecko, we don&apos;t just provide solutions; we build them. We&apos;re actively involved in creating the foundation for a decentralized future, one block at a time.</p>
              </div>
            </div>
            <img loading="lazy" onClick={() => { const s = window.scrollY; window.scrollTo({ top: direction === "down" ? s + 700 : s - 700, behavior: "smooth" }); }} className={direction === "down" ? "downarrow" : "downarrow setarrowup"} src="/Assets/downarrow.svg" />
          </div>
        </section>
        <section className="goalss_side">
          <div className="goals_details">
            <h2 className="goaldiv">Our Goal</h2>
            <p>Our mission is to empower businesses, creators, and innovators with the tools, technology, and expertise they need to succeed in a decentralized world. The digital landscape is evolving, and blockchain is at the heart of this transformation. Yet, many struggle to navigate its complexities. Quecko bridges this gap by delivering secure, scalable, and innovative blockchain solutions that drive real-world impact.</p>
          </div>
        </section>
        <section className="tags_bar">
          <div className="developers_side"><p>Fullstack Developers</p><span className="numbersdiv">100+</span></div>
          <div className="developers_side"><p>Delivered Products</p><span className="numbersdiv">500+</span></div>
          <div className="developers_side"><p>Blockchain Developers</p><span className="numbersdiv">50+</span></div>
          <div className="developers_side"><p>Experience (Years)</p><span className="numbersdiv">10+</span></div>
        </section>
        <section className="collab1">
          <div className="inner_collab">
            <video className="main-banner-video" muted playsInline autoPlay loop width="100%" id="myVideo">
              <source src="/Assets/blackish.mp4" />
            </video>
            <div className="top_middle">
              <div className="middle_colab">
                <h2>Who we are?</h2>
                <p>We are a team of designers, developers and marketers that blend design, development, and strategy to bring bold Web3 ideas to life. From startups building their first smart contracts to established brands entering the blockchain space, we craft tailored solutions that are technically sound, creatively sharp, and strategically smart.</p>
              </div>
            </div>
          </div>
          <section className="goalss_side1">
            <div className="goals_details">
              <h2 className="goaldiv">Since 2020</h2>
              <div>
                <p>Our story began with a small, passionate team of four visionaries who believed in the transformative power of blockchain technology. From these humble beginnings, Quecko has grown into a powerhouse of over 100+ talented professionals. Each team member represents a unique building block, much like the individual blocks in a blockchain, contributing to the strength, resilience, and innovation of our company. Our commitment to pioneering Web3 solutions has enabled us to help businesses navigate the complexities of blockchain, creating decentralized applications and software that drive progress and innovation.</p>
              </div>
            </div>
          </section>
          <section className="videomainsite">
            <video className="main-banner-video" muted playsInline autoPlay loop poster="/Assets/banner-poster.jpg" width="100%">
              <source src="/Assets/queckov.mp4" type="video/mp4" />
            </video>
          </section>
        </section>

        <section className="blogs_divv myblogsss" id="stories">
          <div className="inner_bloggs">
            <div className="bottom_side">
              <div className="owl_option">
                <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 3000, disableOnInteraction: false }} spaceBetween={10} slidesPerView={1} loop>
                  <SwiperSlide>
                    <div className="cardss">
                      <div className="textual_div"><span className="teamss_head">TEAM</span><h2>Meet Our UI/UX Team</h2></div>
                      <div className="imgusers"><img src="/Assets/ux.png" /></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="cardss">
                      <div className="textual_div"><span className="teamss_head">TEAM</span><h2>Meet Our Frontend Developer Team</h2></div>
                      <div className="imgusers"><img src="/Assets/ui.png" /></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="cardss">
                      <div className="textual_div"><span className="teamss_head">TEAM</span><h2>Meet Our Mobile Application Team</h2></div>
                      <div className="imgusers"><img src="/Assets/reactnative.png" /></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="cardss">
                      <div className="textual_div"><span className="teamss_head">TEAM</span><h2>Meet Our QA Team</h2></div>
                      <div className="imgusers"><img src="/Assets/qa.png" /></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="cardss">
                      <div className="textual_div"><span className="teamss_head">TEAM</span><h2>Meet Our Integration Devs Team</h2></div>
                      <div className="imgusers"><img src="/Assets/usama.png" /></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="cardss">
                      <div className="textual_div"><span className="teamss_head">TEAM</span><h2>Meet Our Frontend Engineers Team</h2></div>
                      <div className="imgusers"><img src="/Assets/usmant.png" /></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="cardss">
                      <div className="textual_div"><span className="teamss_head">TEAM</span><h2>Meet Our Marketing Team</h2></div>
                      <div className="imgusers"><img src="/Assets/mark.png" /></div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Aboutus />
      <Stories />
      <Cnt />
      <Footer />
    </>
  );
};

export default AboutUsPage;
