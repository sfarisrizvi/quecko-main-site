"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/sections/Projects";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { allServicesData } from "@/components/sections/allServicesData";

// Tab switcher inner component that reads URL parameters
const TabContentSection = ({ subServices, slug }) => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(subServices[0]?.slug || "");

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && subServices.some((s) => s.slug === tabParam)) {
      // Defer state update and scroll asynchronously to avoid synchronous setState warning inside effect
      const t = setTimeout(() => {
        setActiveTab((prev) => (prev !== tabParam ? tabParam : prev));
        const target = document.getElementById("sub-services-section");
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
      return () => clearTimeout(t);
    }
  }, [searchParams, subServices]);

  const handleTabChange = (tabSlug) => {
    setActiveTab(tabSlug);
    // Quietly update the URL without refreshing page state
    window.history.pushState(null, "", `/services/${slug}?tab=${tabSlug}`);
    // Scroll to the parent section so the full section is visible
    const target = document.getElementById("sub-services-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activeData = subServices.find((s) => s.slug === activeTab) || subServices[0];

  if (!activeData) return null;

  return (
    <div className="sub-services-tabs" id="sub-services">
      <div className="tabs-nav">
        {subServices.map((s) => (
          <button
            key={s.slug}
            className={`tab-pill ${activeTab === s.slug ? "active" : ""}`}
            onClick={() => handleTabChange(s.slug)}
          >
            <span>{s.title}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19" stroke={activeTab === s.slug ? "#000000" : "#8E8E93"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5L19 12L12 19" stroke={activeTab === s.slug ? "#000000" : "#8E8E93"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ))}
      </div>

      <div className="tab-content">
        <div className="content-shade" />
        <div className="tab-header">
          <h3>{activeData.headline}</h3>
          <p className="overview">{activeData.overview}</p>
        </div>

        <div className="capabilities-wrapper">
          <h4>Key Capabilities</h4>
          <div className="capabilities-grid">
            {activeData.capabilities.map((c, i) => (
              <div key={i} className="capability-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="#C1FF14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-group">
          <Link href="/contact" className="btn-cta">
            Start a Project
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href={`/services/${slug}/${activeData.slug}`} className="btn-cta-secondary">
            See More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

// FAQ Item component
const FAQAccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current?.scrollHeight || 0}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span className="faq-icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div
        className="faq-answer"
        style={{
          maxHeight: height,
        }}
      >
        <div ref={contentRef} className="faq-answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function Web3ClientPage({ slug }) {
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
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

  const handleScrollToTabs = (e) => {
    e.preventDefault();
    const target = document.getElementById("sub-services");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const serviceData = allServicesData[slug];

  if (!serviceData) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h1>404 - Service Not Found</h1>
        <Link href="/">Return to Home</Link>
      </div>
    );
  }

  // Format clean service title
  const cleanTitle = serviceData.title
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(" Landing Page", "")
    .replace(" Copy", "");

  const subServices = Object.values(serviceData.subServices);

  return (
    <div className="web3-service-page">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://quecko.com" },
          { name: "Services", url: "https://quecko.com/services" },
          { name: cleanTitle, url: `https://quecko.com/services/${slug}` }
        ]}
      />

      {/* 1. HERO SECTION */}
      <section className="smart_contract">
        <Header />
        <div className="inner_data">
          {videoReady ? (
            <video
              className="main-banner-video"
              muted
              playsInline
              autoPlay
              loop
              poster="/Assets/landing/banner/banner-preview.png"
              width="100%"
              id="myVideo"
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
              alt={`${cleanTitle} Banner Preview`}
              priority
              fetchPriority="high"
              width={1920}
              height={1080}
              sizes="100vw"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          )}

          <Image
            src="/Assets/landing/banner/bannershadow.png"
            alt=""
            aria-hidden="true"
            className="bannershadow"
            width={1920}
            height={1080}
            priority
          />

          <div className="blogdetail">
            <div className="parenttext">
              <div className="twicebtn">
                <p>Services</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                  <path d="M5.25 11L8.75 7.5L5.25 4" stroke="#9D9D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{cleanTitle}</span>
              </div>
              <h1 className="mainpara">{serviceData.hero.headline}</h1>
              <p className="para">{serviceData.hero.subhead}</p>
              <div className="hero-ctas">
                <Link href="/contact" className="btn-primary">
                  {serviceData.hero.ctaPrimary || "Start a Project"}
                </Link>
                {serviceData.hero.ctaSecondaryLink ? (
                  <a href={serviceData.hero.ctaSecondaryLink} className="btn-secondary" target="_blank" rel="noopener noreferrer">
                    {serviceData.hero.ctaSecondary || `Explore ${cleanTitle}`}
                  </a>
                ) : (
                  <a href="#sub-services" onClick={handleScrollToTabs} className="btn-secondary">
                    {serviceData.hero.ctaSecondary || `Explore ${cleanTitle}`}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR STAT STRIP */}
      <div className="trust-bar">
        <div className="trust-container">
          {/* Repeat 4x for seamless marquee — no gaps */}
          {[0, 1, 2, 3].map((i) => (
            <React.Fragment key={i}>
              <div className="trust-stat">
                <strong>400+</strong>
                <span>clients across 20+ countries</span>
              </div>
              <div className="trust-stat">
                <strong>$300M+</strong>
                <span>in funds generated</span>
              </div>
              <div className="trust-stat">
                <strong>250+</strong>
                <span>products built</span>
              </div>
              <div className="trust-stat">
                <strong>150+</strong>
                <span>engineers worldwide</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 3 & 4. PROBLEM & SOLUTION SECTION */}
      <section className="service-section">
        <div className="section-container">
          <div className="problem-solution-grid">
            <div className="problem-side">
              <span className="tagline">{serviceData.problem.tagline}</span>
              <div className="problem-card">
                <h3>{serviceData.problem.headline}</h3>
                <p>{serviceData.problem.body}</p>
              </div>
            </div>

            <div className="solution-side">
              <span className="tagline">The Solution</span>
              <h3 className="section-head" style={{ fontSize: "28px", marginBottom: "30px" }}>
                {serviceData.solution.headline}
              </h3>
              <div className="solution-steps">
                {serviceData.solution.steps.map((step, idx) => (
                  <div key={idx} className="step-item">
                    <div className="step-num">{idx + 1}</div>
                    <div className="step-body">
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SWITCHABLE SUB-SERVICES PILLS TABS SECTION */}
      <section className="service-section light-bg" id="sub-services-section">
        <div className="section-container">
          <span className="tagline">Specialized Solutions</span>
          <h2 className="section-head">Our {cleanTitle} Specialties</h2>
          <p className="section-desc">
            Select a sub-category below to view specialized solutions, developer skills, and capabilities.
          </p>

          <Suspense fallback={<div className="skeleton-row"><div className="skeleton-card" /></div>}>
            <TabContentSection subServices={subServices} slug={slug} />
          </Suspense>
        </div>
      </section>

      {/* 6. DIFFERENTIATION */}
      <section className="service-section">
        <div className="section-container">
          <div className="diff-box">
            <div className="diff-left">
              <span className="tagline">Why Quecko</span>
              <h3>{serviceData.differentiation.headline}</h3>
              <p>{serviceData.differentiation.body}</p>
            </div>
            <div className="diff-badge">
              <span>Builder Ecosystem</span>
              <strong>Full-Spectrum Partners</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS / SOCIAL PROOF */}
      <section className="service-section light-bg">
        <div className="section-container">
          <span className="tagline">Testimonials</span>
          <h2 className="section-head">Trusted by Industry Leaders</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>
                The work Quecko has done has been absolutely brilliant. Extremely responsive, reliable, and fast, we can throw last minute requests in and they&apos;ll get them done by the end of the day.
              </p>
              <div className="client-info">
                <div className="client-meta">
                  <h4>Tom Blears</h4>
                  <span>Chief Executive Officer (Bitcast)</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p>
                I believe that with hard work, determination, and an amazing team of Quecko, we can overcome any obstacle and achieve anything we set our minds to...
              </p>
              <div className="client-info">
                <div className="client-meta">
                  <h4>Mateen O Dawood</h4>
                  <span>Stable33 Protocol</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECURITY / TRUST */}
      <section className="service-section">
        <div className="section-container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <span className="tagline">Security-First</span>
              <h2 className="section-head">{serviceData.security.headline}</h2>
              <p className="section-desc" style={{ marginBottom: 0 }}>
                {serviceData.security.body}
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  padding: "40px",
                  borderRadius: "24px",
                  display: "inline-block",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#C1FF14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 11L11 13L15 9" stroke="#C1FF14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h4 style={{ marginTop: "20px", fontSize: "18px", fontWeight: "500" }}>Zero Vulnerabilities Policy</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FEATURED WORK */}
      <Projects />

      {/* 10. OBJECTION HANDLING / FAQS */}
      <section className="service-section light-bg">
        <div className="section-container">
          <span className="tagline">FAQ</span>
          <h2 className="section-head" style={{ textAlign: "center", margin: "0 auto 40px auto" }}>
            Frequently Asked Questions
          </h2>

          <div className="faq-accordion">
            {serviceData.faqs.map((faq, idx) => (
              <FAQAccordionItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. TEAM / BACKERS */}
      <section className="service-section">
        <div className="section-container text-center" style={{ maxWidth: "800px" }}>
          <span className="tagline">Our Scale</span>
          <h2 className="section-head" style={{ margin: "0 auto 20px auto" }}>
            Trusted by founders across 20+ countries
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            With 1,500+ engineers working across time zones, we have been building and launching modern applications, helping teams ship 250+ products securely.
          </p>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="cta-section">
        <div className="section-container">
          <h2>{serviceData.cta.headline || "Ready to launch your project?"}</h2>
          <p>{serviceData.cta.body || ""}</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">
              Start a Project
            </Link>
            {serviceData.hero.ctaSecondaryLink ? (
              <a href={serviceData.hero.ctaSecondaryLink} className="btn-secondary" target="_blank" rel="noopener noreferrer">
                {serviceData.hero.ctaSecondary || `Read ${cleanTitle} FAQs`}
              </a>
            ) : (
              <a href="#sub-services" onClick={handleScrollToTabs} className="btn-secondary">
                {serviceData.hero.ctaSecondary || `Read ${cleanTitle} FAQs`}
              </a>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
