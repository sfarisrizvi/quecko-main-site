"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./CoreCapabilitiesAnimated.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

function cleanText(text = "") {
  if (typeof text !== "string") return "";
  return text.replace(/\*\*/g, "").replace(/^[:\s]+/, "").trim();
}

export default function CoreCapabilitiesAnimated({ title = "Core Capabilities", subtitle = "What Quecko Delivers", capabilities = [] }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.asymmetric-cap-card');
    
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 75%",
      onEnter: () => {
        gsap.fromTo(cards, 
          { opacity: 0, rotateY: 10, y: 40 },
          { opacity: 1, rotateY: 0, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
        );
      }
    });
  }, { scope: containerRef });

  if (!capabilities || capabilities.length === 0) return null;

  return (
    <section className="capabilities-v2-section" ref={containerRef}>
      <div className="capabilities-v2-container">
        
        {/* Left-Aligned Editorial Section Header */}
        <div className="capabilities-left-header">
          <span className="eyebrow-tag">{subtitle}</span>
          <h2>{cleanText(title)}</h2>
          <p>Deep engineering expertise and production-grade Web3 infrastructure tailored for financial networks.</p>
        </div>

        {/* Capabilities Grid */}
        <div className="capabilities-asymmetric-grid">
          {capabilities.map((cap, index) => {
            let capTitle = "";
            let capDesc = "";

            if (typeof cap === "object" && cap !== null) {
              capTitle = cap.title || `Capability 0${index + 1}`;
              capDesc = cap.desc || "";
            } else if (typeof cap === "string") {
              if (cap.includes(":")) {
                const parts = cap.split(":");
                capTitle = parts[0];
                capDesc = parts.slice(1).join(":");
              } else {
                capTitle = `Capability 0${index + 1}`;
                capDesc = cap;
              }
            }

            capTitle = cleanText(capTitle);
            capDesc = cleanText(capDesc);

            const isSettlementCard = index === 0 || capTitle.toLowerCase().includes("settlement");

            return (
              <div key={index} className="asymmetric-cap-card">
                
                <div className="card-top">
                  <span className="card-num">0{index + 1}</span>
                  <div className="card-icon-bounce">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                </div>

                <h3>{capTitle}</h3>
                <p>{capDesc}</p>

                {/* Inline Visual Diagram per card */}
                {isSettlementCard ? (
                  /* Settlement Money Flow Diagram: Bank -> Escrow Smart Contract -> Trading Partner */
                  <div className="card-mini-diagram settlement-diagram">
                    <div className="diagram-node">
                      <div className="node-icon">🏦</div>
                      <span>Bank</span>
                    </div>

                    <div className="diagram-connector">
                      <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
                        <path d="M0 10H50M50 10L42 4M50 10L42 16" stroke="var(--v2-accent)" strokeWidth="2" strokeDasharray="3 3" />
                      </svg>
                      <span className="flow-badge">Escrow</span>
                    </div>

                    <div className="diagram-node escrow-highlight">
                      <div className="node-icon">📜</div>
                      <span>Escrow</span>
                    </div>

                    <div className="diagram-connector">
                      <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
                        <path d="M0 10H50M50 10L42 4M50 10L42 16" stroke="var(--v2-accent)" strokeWidth="2" strokeDasharray="3 3" />
                      </svg>
                      <span className="flow-badge">Release</span>
                    </div>

                    <div className="diagram-node">
                      <div className="node-icon">🤝</div>
                      <span>Partner</span>
                    </div>
                  </div>
                ) : (
                  /* Network & Integration Mesh Diagram: Bank ERP -> API Gateway -> Trading Partner */
                  <div className="card-mini-diagram network-diagram">
                    <div className="mesh-node">
                      <span>Bank ERP</span>
                    </div>
                    <div className="mesh-line line-1"></div>

                    <div className="mesh-node api-center">
                      <span>API Gateway</span>
                    </div>
                    <div className="mesh-line line-2"></div>

                    <div className="mesh-node">
                      <span>Trade Rails</span>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
