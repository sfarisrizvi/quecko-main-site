"use client";

import React, { useState } from "react";

export default function CapabilitiesAccordion({ items, headline }) {
  const [expandedCap, setExpandedCap] = useState(0);

  return (
    <section className="l1l2-capabilities-section" style={{ background: "#FFFFFF", padding: "100px 0" }}>
      <div className="capabilities-container" style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
        <div className="capabilities-header" style={{ marginBottom: "50px" }}>
          <span className="cap-eyebrow" style={{
            fontSize: "13px",
            fontFamily: "Orbitron, sans-serif",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#8E8E93",
            fontWeight: "700",
            display: "block",
            marginBottom: "12px"
          }}>What We Build</span>
          <h2 style={{ fontSize: "38px", fontWeight: "500", color: "#000000", margin: 0 }}>
            {headline || "Core Capabilities"}
          </h2>
        </div>

        <div className="capabilities-stack" style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          background: "#FFFFFF",
          borderRadius: "20px",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          overflow: "hidden"
        }}>
          {items.map((cap, idx) => (
            <div
              key={idx}
              className={`capability-expand-card ${expandedCap === idx ? "is-expanded" : ""}`}
              onClick={() => setExpandedCap(expandedCap === idx ? -1 : idx)}
              style={{
                borderTop: idx === 0 ? "none" : "1px solid rgba(0, 0, 0, 0.06)",
                cursor: "pointer",
                transition: "background 0.35s ease",
                background: expandedCap === idx ? "rgba(193, 255, 20, 0.08)" : "transparent"
              }}
            >
              <div className="cap-card-header" style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                padding: "28px 32px",
                userSelect: "none"
              }}>
                <span className="cap-num" style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: expandedCap === idx ? "#000000" : "#8E8E93",
                  minWidth: "32px",
                  fontFamily: "Orbitron, sans-serif"
                }}>
                  0{idx + 1}
                </span>
                <div className="cap-icon" style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "#C1FF14",
                  border: "1px solid #C1FF14",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
                <h3 style={{
                  flex: 1,
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "#000000",
                  margin: 0
                }}>{cap.title}</h3>
                <span className="expand-icon" style={{
                  transform: expandedCap === idx ? "rotate(45deg)" : "none",
                  transition: "transform 0.4s ease, color 0.3s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: expandedCap === idx ? "#000000" : "#8E8E93"
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </div>
              <div className="cap-card-body" style={{
                maxHeight: expandedCap === idx ? "300px" : "0",
                overflow: "hidden",
                transition: "max-height 0.5s ease"
              }}>
                <div className="cap-card-inner" style={{
                  padding: "0 32px 32px",
                  paddingLeft: "100px"
                }}>
                  <p style={{
                    fontSize: "15px",
                    lineHeight: "1.75",
                    color: "#48484A",
                    maxWidth: "680px",
                    margin: 0
                  }}>{cap.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
