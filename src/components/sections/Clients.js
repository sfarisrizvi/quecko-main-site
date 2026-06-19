"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// 6 clients — each one owns a fixed "home" slot in the scattered ring.
// The active client flies out of its slot into the center showcase.
const slides = [
  {
    id: 1,
    img: "/Assets/landing/clients/1.png",
    name: "Mateen O Dawood",
    who: "Stable33 Protocol",
    message:
      "I believe that with hard work, determination, and an amazing team of Quecko, we can overcome any obstacle and achieve anything we set our minds to. As we enter 2023, we&apos;re more committed than ever to finalizing the protocol and focusing on adding more and more utility to the STABL33 PROTOCOL Ecosystem.",
  },
  {
    id: 2,
    img: "/Assets/landing/clients/2.png",
    name: "Anonymous Client",
    who: "DAO Project",
    message:
      "Did everything we need. Will continue to work with them. Using again for next set of updates.",
  },
  {
    id: 3,
    img: "/Assets/landing/clients/3.png",
    name: "Anonymous Client",
    who: "NFT marketplace Project",
    message:
      "Quecko did a fantastic work right according to my requirements. They know what they&apos;re doing and did it perfectly. I definitely will work with them for all of my future projects. Thank you so much for this amazing product.",
  },
  {
    id: 4,
    img: "/Assets/landing/clients/4.png",
    name: "Anonymous Client",
    who: "UI/UX",
    message:
      "Attention to detail, very well thought of Line of blockchain business, project management skills, core strength. Good strategy. Altogether it was phenomenal to work. One challenge I find is that they are expecting you to test everything which I found a lot. Otherwise I&apos;m pleased.",
  },
  {
    id: 5,
    img: "/Assets/landing/clients/5.png",
    name: "Anonymous Client",
    who: "Decentralised DNS Project",
    message:
      "Amazing job. Excellent communication skills and very responsive. Would recommend this team to anyone looking.",
  },
];

// Fixed home slots in the scattered ring (styled in clients.scss).
const SLOT_CLASSES = ["imgone", "imgtwo", "imgthree", "imgfour", "imgfive", "imgsix"];

const Clients = () => {
  const [active, setActive] = useState(0);

  const containerRef = useRef(null); // .profileimages (positioning context)
  const landingRef = useRef(null); // invisible box marking the center showcase spot
  const [landing, setLanding] = useState(null); // { x, y } center, relative to container

  // Measure where the active avatar should land (center of the showcase).
  const measure = useCallback(() => {
    const container = containerRef.current;
    const target = landingRef.current;
    if (!container || !target) return;
    const c = container.getBoundingClientRect();
    const t = target.getBoundingClientRect();
    setLanding({
      x: t.left + t.width / 2 - c.left,
      y: t.top + t.height / 2 - c.top,
      w: t.width,
      h: t.height,
    });
  }, []);

  // Re-measure on mount, on active change (text height shifts the layout) and on resize.
  useEffect(() => {
    measure();
  }, [measure, active]);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  const go = (dir) =>
    setActive((prev) => (prev + dir + slides.length) % slides.length);

  const current = slides[active];

  return (
    <section className="clientsmain">
      <div className="clientsinner">
        <p className="toppara">Clients</p>
        <h1 className="clienthead">
          Built by experts. Used by millions. Trusted across industries.
        </h1>
        <div className="slidermain">
          <div className="profileimages" ref={containerRef}>
            {slides.map((s, i) => {
              const isActive = i === active;
              const style =
                isActive && landing
                  ? {
                      top: `${landing.y}px`,
                      left: `${landing.x}px`,
                      width: `${landing.w}px`,
                      height: `${landing.h}px`,
                    }
                  : undefined;
              return (
                <div
                  key={s.id}
                  className={`profileimg ${SLOT_CLASSES[i]} ${
                    isActive ? "active" : ""
                  }`}
                  style={style}
                >
                  <div className="floatwrap">
                    <div className="circle">
                      <img src={s.img} alt={s.name} className="innerimg" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <img src="/clientbg.png" alt="" className="clientbg" />

          <div className="fade-slider">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="30"
              viewBox="0 0 32 30"
              fill="none"
            >
              <path
                d="M14.6767 0L9.62406 16.0408C11.1479 16.449 12.3108 17.2653 13.1128 18.4898C13.995 19.6327 14.4361 21.0204 14.4361 22.6531C14.4361 24.1224 14.1153 25.4286 13.4737 26.5714C12.8321 27.6327 11.9499 28.4898 10.8271 29.1429C9.78446 29.7143 8.62155 30 7.33835 30C5.25313 30 3.48872 29.3469 2.04511 28.0408C0.681704 26.6531 0 24.9388 0 22.898C0 21.6735 0.160401 20.5306 0.481203 19.4694C0.882206 18.4082 1.32331 17.3878 1.80451 16.4082L9.86466 0H14.6767ZM32 0L26.9474 16.0408C28.4712 16.449 29.6341 17.2653 30.4361 18.4898C31.3183 19.6327 31.7594 21.0204 31.7594 22.6531C31.7594 24.1224 31.4386 25.4286 30.797 26.5714C30.1554 27.6327 29.2732 28.4898 28.1504 29.1429C27.1078 29.7143 25.9449 30 24.6617 30C22.5764 30 20.812 29.3469 19.3684 28.0408C18.005 26.6531 17.3233 24.9388 17.3233 22.898C17.3233 21.6735 17.4837 20.5306 17.8045 19.4694C18.2055 18.4082 18.6466 17.3878 19.1278 16.4082L27.188 0H32Z"
                fill="#D1D5DB"
              />
            </svg>

            <div className="slide">
              {/* invisible landing target — reserves the center spot and feeds JS measurement.
                  On mobile (scatter hidden) it shows the active image directly. */}
              <div className="slideimg" ref={landingRef}>
                <img
                  src={current.img}
                  alt={current.name}
                  className="innerimg mobileonly"
                />
              </div>
              <div className="slidetext" key={active}>
                <h2 className="slidepara">{current.message}</h2>
                <h2 className="namepara">{current.name}</h2>
                <p className="whopara">{current.who}</p>
              </div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="30"
              viewBox="0 0 32 30"
              fill="none"
            >
              <path
                d="M17.3233 0L22.3759 16.0408C20.8521 16.449 19.6892 17.2653 18.8872 18.4898C18.005 19.6327 17.5639 21.0204 17.5639 22.6531C17.5639 24.1224 17.8847 25.4286 18.5263 26.5714C19.1679 27.6327 20.0501 28.4898 21.1729 29.1429C22.2155 29.7143 23.3784 30 24.6617 30C26.7469 30 28.5113 29.3469 29.9549 28.0408C31.3183 26.6531 32 24.9388 32 22.898C32 21.6735 31.8396 20.5306 31.5188 19.4694C31.1178 18.4082 30.6767 17.3878 30.1955 16.4082L22.1353 0H17.3233ZM0 0L5.05264 16.0408C3.52882 16.449 2.36592 17.2653 1.56391 18.4898C0.681704 19.6327 0.240602 21.0204 0.240602 22.6531C0.240602 24.1224 0.561405 25.4286 1.20301 26.5714C1.84461 27.6327 2.72682 28.4898 3.84962 29.1429C4.89223 29.7143 6.05514 30 7.33835 30C9.42356 30 11.188 29.3469 12.6316 28.0408C13.995 26.6531 14.6767 24.9388 14.6767 22.898C14.6767 21.6735 14.5163 20.5306 14.1955 19.4694C13.7945 18.4082 13.3534 17.3878 12.8722 16.4082L4.81203 0H0Z"
                fill="#D1D5DB"
              />
            </svg>
          </div>

          <div className="controls">
            <button
              type="button"
              onClick={() => go(-1)}
              className="btn"
              aria-label="Previous client"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.00161 12H20.0016"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.99972 17C8.99972 17 3.99982 13.3176 3.99982 12C3.99982 10.6824 8.99982 7 8.99982 7"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => go(1)}
              className="btn"
              aria-label="Next client"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.9984 12H3.99841"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
