"use client";

import React, { useEffect, useRef, useState } from "react";
import "./StatsTickerV2.scss";

const STATS = [
  { target: 400, prefix: "", suffix: "+", label: "clients across 20+ countries" },
  { target: 300, prefix: "$", suffix: "M+", label: "in funds generated" },
  { target: 250, prefix: "", suffix: "+", label: "products built worldwide" },
  { target: 150, prefix: "", suffix: "+", label: "senior blockchain engineers" }
];

export default function StatsTickerV2() {
  const containerRef = useRef(null);
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 50;
          const interval = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

            setCounts(STATS.map(s => Math.floor(s.target * easeProgress)));

            if (currentStep >= steps) {
              setCounts(STATS.map(s => s.target));
              clearInterval(timer);
            }
          }, interval);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div className="stats-ticker-v2" ref={containerRef}>
      <div className="stats-ticker-container">
        {STATS.map((stat, idx) => (
          <React.Fragment key={idx}>
            <div className="stat-ticker-item">
              <div className="stat-number">
                {stat.prefix}{counts[idx]}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
            {idx < STATS.length - 1 && <div className="stat-divider" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
