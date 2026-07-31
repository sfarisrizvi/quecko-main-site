"use client";

import React, { useState } from "react";
import "./WhyChooseV2.scss";

function cleanText(text = "") {
  if (typeof text !== "string") return "";
  return text.replace(/\*\*/g, "").replace(/^[:\s]+/, "").trim();
}

// Graphic SVGs for each differentiator type
function RenderDifferentiatorGraphic({ index, title }) {
  const t = title.toLowerCase();

  if (t.includes("fraud") || t.includes("immutable") || index === 0) {
    // Shield & Immutable Hash Lock Graphic
    return (
      <div className="dynamic-graphic-box fraud-graphic">
        <div className="shield-ring">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--v2-accent)" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" strokeWidth="2" />
          </svg>
        </div>
        <h4>Fraud-Resistant Ledger</h4>
        <p>Immutable cryptographic hashes eliminate document forgery and duplicate financing risk.</p>
        <div className="security-badge">
          <span>100% Cryptographic Verification</span>
        </div>
      </div>
    );
  }

  if (t.includes("onboard") || t.includes("gradual") || index === 1) {
    // API Bridge & Incremental Onboarding Graphic
    return (
      <div className="dynamic-graphic-box onboarding-graphic">
        <div className="bridge-visual">
          <div className="bridge-node">ERP System</div>
          <div className="bridge-arrow">
            <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
              <path d="M0 8H34M34 8L26 2M34 8L26 14" stroke="var(--v2-accent)" strokeWidth="2" strokeDasharray="3 3" />
            </svg>
          </div>
          <div className="bridge-node accent-node">API Gateway</div>
        </div>
        <h4>Gradual Integration Path</h4>
        <p>Participating banks and suppliers integrate via clean APIs without needing legacy replacement.</p>
        <div className="security-badge">
          <span>Zero Downtime Migration</span>
        </div>
      </div>
    );
  }

  // Default / Bank-grade reliability
  return (
    <div className="dynamic-graphic-box audit-graphic">
      <div className="vault-ring">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--v2-accent)" strokeWidth="1.5">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>
      <h4>Bank-Grade Reliability</h4>
      <p>Engineered to 99.99% availability standards required by global financial institutions.</p>
      <div className="security-badge">
        <span>SOC2 & ISO Compliant Architecture</span>
      </div>
    </div>
  );
}

export default function WhyChooseV2({ headline, subhead, items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const currentActiveItem = items[activeIndex >= 0 ? activeIndex : 0];
  const activeTitle = typeof currentActiveItem === 'object' ? currentActiveItem.title : String(currentActiveItem);

  return (
    <section className="why-choose-v2-section">
      <div className="why-choose-v2-container">
        
        {/* Left-aligned header */}
        <div className="why-left-header">
          <span className="eyebrow-tag warning-tag">Engineering Differentiators</span>
          <h2>{headline || "Why Choose Us"}</h2>
          {subhead && <p>{subhead}</p>}
        </div>

        <div className="why-2column-split">
          
          {/* Left Column: Accordion List */}
          <div className="why-accordion-list">
            {items.map((item, idx) => {
              let title = "";
              let desc = "";

              if (typeof item === 'object' && item !== null) {
                title = item.title || `Differentiator 0${idx + 1}`;
                desc = item.desc || "";
              } else if (typeof item === 'string') {
                const match = item.match(/\*\*(.*?)\*\*(.*)/);
                if (match) {
                  title = match[1];
                  desc = match[2];
                } else if (item.includes(":")) {
                  const parts = item.split(":");
                  title = parts[0];
                  desc = parts.slice(1).join(":");
                } else {
                  title = `Differentiator 0${idx + 1}`;
                  desc = item;
                }
              }

              title = cleanText(title);
              desc = cleanText(desc);

              const isActive = activeIndex === idx;

              return (
                <div 
                  key={idx} 
                  className={`why-accordion-card ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <div className="left-accent-rail"></div>

                  <div className="accordion-card-header">
                    <span className="accordion-num">0{idx + 1}</span>
                    <h3>{title}</h3>
                    <div className={`rotate-toggle-icon ${isActive ? 'open' : ''}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                  </div>

                  <div className={`accordion-grid-wrapper ${isActive ? 'expanded' : ''}`}>
                    <div className="accordion-grid-inner">
                      <p className="accordion-text-body">{desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Visual Panel (Responds to active accordion item) */}
          <div className="why-visual-side-panel">
            <RenderDifferentiatorGraphic index={activeIndex >= 0 ? activeIndex : 0} title={activeTitle} />
          </div>

        </div>

      </div>
    </section>
  );
}
