"use client";

import React from "react";

export default function ChallengeComparison({ headline, body, oldWay, queckoWay }) {
  return (
    <section className="l1l2-comparison-section" style={{ background: "#FFFFFF", padding: "100px 0", borderBottom: "1px solid rgba(0, 0, 0, 0.05)" }}>
      <div className="section-container" style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
        <div className="comparison-header" style={{ marginBottom: "50px" }}>
          <span className="comp-eyebrow" style={{
            fontSize: "13px",
            fontFamily: "Orbitron, sans-serif",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#8E8E93",
            fontWeight: "700",
            display: "block",
            marginBottom: "12px"
          }}>The Challenge</span>
          <h2 style={{ fontSize: "38px", fontWeight: "500", color: "#000000", marginBottom: "20px", lineHeight: "1.2" }}>
            {headline || "Overcoming Development Bottlenecks"}
          </h2>
          <p style={{ fontSize: "16px", color: "#48484A", lineHeight: "1.65", maxWidth: "800px", margin: 0 }}>
            {body}
          </p>
        </div>

        {oldWay && oldWay.length > 0 && queckoWay && queckoWay.length > 0 && (
          <div className="comparison-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            marginTop: "40px"
          }}>
            <div className="comparison-card old-way" style={{
              background: "#F9F9FB",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              borderRadius: "20px",
              padding: "40px 32px",
              display: "flex",
              flexDirection: "column",
              gap: "24px"
            }}>
              <span className="card-label" style={{
                alignSelf: "flex-start",
                fontSize: "11px",
                fontFamily: "Orbitron, sans-serif",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "#FF453A",
                border: "1px solid rgba(255, 69, 58, 0.2)",
                padding: "4px 10px",
                borderRadius: "100px",
                background: "rgba(255, 69, 58, 0.05)"
              }}>The Old Way</span>
              <div className="comparison-list">
                {oldWay.map((item, idx) => (
                  <div key={idx} className="comparison-item">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="comparison-card quecko-way" style={{
              background: "#FFFFFF",
              border: "1px solid rgba(193, 255, 20, 0.4)",
              borderRadius: "20px",
              padding: "40px 32px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.02)"
            }}>
              <span className="card-label" style={{
                alignSelf: "flex-start",
                fontSize: "11px",
                fontFamily: "Orbitron, sans-serif",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "#000000",
                background: "#C1FF14",
                padding: "4px 12px",
                borderRadius: "100px"
              }}>The Quecko Way</span>
              <div className="comparison-list">
                {queckoWay.map((item, idx) => (
                  <div key={idx} className="comparison-item">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
