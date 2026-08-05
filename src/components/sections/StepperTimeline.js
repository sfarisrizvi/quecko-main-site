"use client";

import React from "react";

export default function StepperTimeline({ timeline, headline, cleanSubTitle }) {
  if (!timeline || timeline.length === 0) return null;

  return (
    <section className="l1l2-timeline-section" style={{ background: "#FFFFFF", padding: "100px 0", overflow: "hidden", borderBottom: "1px solid rgba(0, 0, 0, 0.05)" }}>
      <div className="timeline-header" style={{ textAlign: "center", marginBottom: "50px", padding: "0 24px" }}>
        <span className="timeline-eyebrow" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontSet: "12px",
          fontWeight: "700",
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#636366",
          marginBottom: "30px",
          padding: "6px 14px",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "100px",
          background: "rgba(0, 0, 0, 0.03)",
          fontFamily: "Orbitron, sans-serif"
        }}>Execution Blueprint</span>
        <h2 style={{ fontSize: "38px", fontWeight: "500", color: "#000000", margin: 0 }}>
          {headline || "Project Execution Timeline"}
        </h2>
      </div>

      <div className="timeline-scroll-wrapper" style={{
        position: "relative",
        width: "100%",
        padding: "20px 0 40px"
      }}>
        <div style={{
          display: "flex",
          gap: "32px",
          overflowX: "auto",
          padding: "0 40px",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE
          WebkitOverflowScrolling: "touch"
        }} className="custom-timeline-scroll">
          {timeline.map((step, idx) => {
            // Parse timeframe and title
            const parts = step.timeframe ? step.timeframe.match(/^([^(]+)(?:\(([^)]+)\))?$/) : null;
            const timeLabel = parts ? parts[1].trim() : (step.timeframe || `Phase 0${idx + 1}`);
            const titleLabel = parts && parts[2] ? parts[2].trim() : `Phase ${idx + 1}`;

            return (
              <div
                key={idx}
                className="timeline-step-card"
                style={{
                  minHeight: "280px",
                  background: "#F4F4F4",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  borderRadius: "20px",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "all 0.35s ease"
                }}
              >
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px"
                }}>
                  <span className="step-number" style={{
                    fontSize: "40px",
                    fontWeight: "800",
                    color: "rgba(0, 0, 0, 0.08)",
                    fontFamily: "Orbitron, sans-serif",
                    lineHeight: "1"
                  }}>
                    0{idx + 1}
                  </span>
                  <span style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    background: "#C1FF14",
                    color: "#000000",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontFamily: "Orbitron, sans-serif"
                  }}>
                    {timeLabel}
                  </span>
                </div>
                <h3 style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "#000000",
                  marginBottom: "12px",
                  lineHeight: "1.25",
                  fontFamily: "Aeonik, sans-serif"
                }}>{titleLabel}</h3>
                <p style={{
                  fontSize: "14px",
                  lineHeight: "1.65",
                  color: "#48484A",
                  margin: 0,
                  flex: 1
                }}>{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx global>{`
        .custom-timeline-scroll::-webkit-scrollbar {
          display: none;
        }
        .timeline-step-card {
          flex: 0 0 380px;
        }
        @media (min-width: 1024px) {
          .timeline-step-card {
            flex: 0 0 calc((100% - 64px) / 3) !important;
          }
        }
        .timeline-step-card:hover {
          border-color: rgba(0, 0, 0, 0.12) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
