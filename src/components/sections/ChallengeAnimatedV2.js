"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./ChallengeAnimatedV2.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

function cleanText(text = "") {
  if (typeof text !== "string") return "";
  return text.replace(/\*\*/g, "").replace(/^[:\s]+/, "").trim();
}

// Step icons map
function getStepIcon(index) {
  switch (index) {
    case 0:
      // Magnifying glass / Process Mapping
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case 1:
      // Gear / Platform Build
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case 2:
      // Flag / Pilot Corridor
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      );
    case 3:
    default:
      // Scale Chart / Scale
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
  }
}

export default function ChallengeAnimatedV2({ headline, body, solutionHeading, processHeadline, processSteps = [] }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animate flow line connector
    ScrollTrigger.create({
      trigger: ".flow-connector-track",
      start: "top 80%",
      end: "bottom 70%",
      scrub: 0.5,
      animation: gsap.to(".flow-connector-fill", {
        height: "100%",
        ease: "none"
      })
    });
  }, { scope: containerRef });

  if (!headline && !body) return null;

  return (
    <section className="challenge-v2-section" ref={containerRef}>
      <div className="challenge-v2-container">
        
        <div className="challenge-asymmetric-layout">
          
          {/* Left Side: Un-boxed Editorial Problem Text + Paper-to-Blockchain Transformation Metaphor Graphic */}
          <div className="problem-editorial-side">
            <span className="eyebrow-tag warning-tag">The Challenge</span>
            
            {headline && (
              <h2 className="editorial-headline">
                {cleanText(headline)}
              </h2>
            )}

            {body && (
              <p className="editorial-body">
                {cleanText(body)}
              </p>
            )}

            {/* Metaphor Graphic: Paper Document transforming into Immutable Cryptographic Block */}
            <div className="paper-to-blockchain-metaphor">
              <div className="metaphor-node paper-node">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span>Paper Letter of Credit</span>
              </div>

              <div className="metaphor-arrow">
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                  <path d="M0 10H34M34 10L26 4M34 10L26 16" stroke="var(--v2-accent)" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
                <span className="digitize-label">Digitize</span>
              </div>

              <div className="metaphor-node block-node">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="7" width="20" height="14" rx="3" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                <span>Smart Contract Settlement</span>
              </div>
            </div>

          </div>

          {/* Right Side: Process Flow Diagram with Icons */}
          <div className="solution-glass-card">
            <span className="eyebrow-tag success-tag">The Solution</span>

            <h3 className="solution-card-title">
              {cleanText(processHeadline || solutionHeading || "Our Engineering Approach")}
            </h3>

            {processSteps && processSteps.length > 0 ? (
              <div className="solution-flow-diagram">
                <div className="flow-connector-track">
                  <div className="flow-connector-fill"></div>
                </div>

                <div className="flow-steps-list">
                  {processSteps.map((step, idx) => (
                    <div key={idx} className="flow-step-item">
                      <div className="flow-step-icon-wrapper">
                        {getStepIcon(idx)}
                      </div>
                      <div className="flow-step-body">
                        <span className="flow-step-num">STEP 0{idx + 1}</span>
                        {step.title && <h4>{cleanText(step.title)}</h4>}
                        {step.desc && <p>{cleanText(step.desc)}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="editorial-body">
                Quecko approaches enterprise engineering challenges with full lifecycle planning, rigorous testing, and compliance alignment.
              </p>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
