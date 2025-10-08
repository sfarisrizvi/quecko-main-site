/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const svgRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".inline-svgs",
        start: "top center",
        end: "bottom 0%",
        scrub: 3,
        // markers: true,
      },
    });

    tl.fromTo(
      svgRefs.current,
      { opacity: 0.1 },
      { opacity: 1, top: 0, duration: 5, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <section className="main-footer">
        <div className="inner_footer">
          <img
            src="\Assets\imgquecko.svg"
            alt="img"
            className="img-fluid d-none dblockinmobile"
          />
          <div
            className="inline-svgs"
            style={{ position: "relative", display: "grid" }}
          >
            <img
              src="\Assets\text\q.png"
              alt="img"
              className="img-fluid"
              ref={(el) => (svgRefs.current[0] = el)}
              style={{ position: "relative", top: "-20px" }}
            />
            <img
              src="\Assets\text\u.png"
              alt="img"
              className="img-fluid"
              ref={(el) => (svgRefs.current[1] = el)}
              style={{ position: "relative", top: "-40px" }}
            />
            <img
              src="\Assets\text\e.png"
              alt="img"
              className="img-fluid"
              ref={(el) => (svgRefs.current[2] = el)}
              style={{ position: "relative", top: "-60px" }}
            />
            <img
              src="\Assets\text\c.png"
              alt="img"
              className="img-fluid"
              ref={(el) => (svgRefs.current[3] = el)}
              style={{ position: "relative", top: "-80px" }}
            />
            <img
              src="\Assets\text\k.png"
              alt="img"
              className="img-fluid"
              ref={(el) => (svgRefs.current[4] = el)}
              style={{ position: "relative", top: "-100px" }}
            />
            <img
              src="\Assets\text\o.png"
              alt="img"
              className="img-fluid"
              ref={(el) => (svgRefs.current[5] = el)}
              style={{ position: "relative", top: "-120px" }}
            />
          </div>

          <div className="footer_middle">
            <div className="first_div">
              <Link href="/#services" scroll={false}>
                <h3 className="nav-link">Service</h3>
              </Link>
              <Link href="/about-us" scroll={false}>
                <h3 className="nav-link">About Us</h3>
              </Link>
              <Link href="/portfolio" scroll={false}>
                <h3 className="nav-link">Portfolio</h3>
              </Link>
              <Link href="/blog" scroll={false}>
                <h3 className="nav-link">Blogs</h3>
              </Link>
              <Link href="/#faqs" scroll={false}>
                <h3 className="nav-link">FAQs</h3>
              </Link>

              <Link href="/contact" scroll={false}>
                <h3 className="nav-link">Contact Us</h3>
              </Link>
            </div>

            <div className="midle_div">
              <div className="name_div">
                <h3>
                  <a href="mailto:info@quecko.com" target="blank">
                    info@quecko.com
                  </a>
                </h3>
              </div>
              <div className="name_div">
                <h3>
                  <a href="https://wa.me/971507400268" target="blank">
                    {" "}
                    <img
                      className="img_whatsapp"
                      src="\Assets\whatsappw.svg"
                    />{" "}
                    +971-50-740-0268
                  </a>
                </h3>
              </div>
              <div className="carrres_div">
                <Link href="/career">
                  <h3 className="connecttt">Careers</h3>
                </Link>

                {/* <h3 className="connecttt">Get Updates</h3> */}
                <a href="/privacypolicy">
                  <h3>
                    Privacy Policy{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M4.66669 4.86377H11.3334V11.5304"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.66669 11.5304L11.3334 4.86377"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </h3>
                </a>

                <a href="/termsconditions">
                  <h3>
                    Terms & Conditions{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M4.66669 4.86377H11.3334V11.5304"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.66669 11.5304L11.3334 4.86377"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </h3>
                </a>
              </div>
            </div>
            <div className="boootom_sec">
              <div className="bottom_div">
                <h3 className="connecttt">Connect</h3>
                {/* <a href="https://www.facebook.com/quecko.web3?mibextid=ZbWKwL" target="blank">
                <h3>Facebook</h3>
              </a> */}
                <a
                  href="https://youtube.com/@quecko.web3?si=7VNWIDtqY6xGvDup"
                  target="blank"
                >
                  <h3>Youtube</h3>
                </a>
                <a
                  href="https://pk.linkedin.com/company/queckoinc"
                  target="blank"
                >
                  <h3>LinkedIn</h3>
                </a>
                <a
                  href=" https://www.instagram.com/quecko.web3?igsh=ZHlqb3ZlMW02ZXdk"
                  target="blank"
                >
                  <h3>Instagram</h3>
                </a>
                <a href="https://x.com/quecko_web3" target="blank">
                  <h3>X (twitter)</h3>
                </a>
              </div>
              {/* <Link href="/cryptoconverter">
                <div className="bottom_div lasstside">
                  <h3>
                    Crypto Converter{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M4.6665 5.24268H11.3332V11.9093"
                        stroke="white"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.6665 11.9093L11.3332 5.24268"
                        stroke="white"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </h3>
                </div>
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
