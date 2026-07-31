"use client";

import React from "react";
import FAQAccordion from "@/components/sections/FAQAccordion";
import "./FaqSectionV2.scss";

export default function FaqSectionV2({ faqs = [] }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="faq-v2-section">
      <div className="faq-v2-container">
        
        <div className="faq-grid-split">
          
          {/* Left Column: Interactive Rotating Globe SVG & Editorial Header */}
          <div className="faq-left-side">
            <span className="eyebrow-tag success-tag">FAQ & OBJECTIONS</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about enterprise trade finance deployment, compliance, and multi-bank interoperability.</p>

            {/* Interactive Rotating Globe SVG Container */}
            <div className="rotating-globe-wrapper">
              <div className="globe-graphic">
                <svg width="220" height="220" viewBox="0 0 200 200" fill="none" className="globe-svg">
                  {/* Outer Orbit Rings */}
                  <circle cx="100" cy="100" r="90" stroke="var(--v2-border)" strokeWidth="1" strokeDasharray="4 4" className="orbit-ring-outer" />
                  <circle cx="100" cy="100" r="75" stroke="var(--v2-accent)" strokeWidth="1.5" opacity="0.6" className="globe-sphere" />
                  
                  {/* Latitude Lines */}
                  <ellipse cx="100" cy="100" rx="75" ry="30" stroke="var(--v2-accent)" strokeWidth="1" opacity="0.4" className="lat-line-1" />
                  <ellipse cx="100" cy="100" rx="75" ry="55" stroke="var(--v2-accent)" strokeWidth="1" opacity="0.3" className="lat-line-2" />
                  <ellipse cx="100" cy="100" rx="75" ry="10" stroke="var(--v2-accent)" strokeWidth="1" opacity="0.5" className="lat-line-3" />
                  
                  {/* Longitude Lines */}
                  <ellipse cx="100" cy="100" rx="30" ry="75" stroke="var(--v2-accent)" strokeWidth="1" opacity="0.4" className="long-line-1" />
                  <ellipse cx="100" cy="100" rx="55" ry="75" stroke="var(--v2-accent)" strokeWidth="1" opacity="0.3" className="long-line-2" />

                  {/* Rotating Orbiting Node Dots */}
                  <circle cx="100" cy="25" r="4" fill="var(--v2-accent)" className="orbit-dot dot-1" />
                  <circle cx="175" cy="100" r="4" fill="var(--v2-accent)" className="orbit-dot dot-2" />
                  <circle cx="100" cy="175" r="4" fill="var(--v2-accent)" className="orbit-dot dot-3" />
                  <circle cx="25" cy="100" r="4" fill="var(--v2-accent)" className="orbit-dot dot-4" />
                </svg>

                <div className="globe-center-badge">
                  <span>Global Web3 Rails</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="faq-right-side">
            <FAQAccordion faqs={faqs} />
          </div>

        </div>

      </div>
    </section>
  );
}
