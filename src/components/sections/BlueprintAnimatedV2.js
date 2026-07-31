"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./BlueprintAnimatedV2.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

function parsePhaseParts(timeframe) {
  if (!timeframe) return { days: "DAY 01", title: "Execution Phase" };
  const match = timeframe.match(/Day\s+(\d+)[\u2013-]\s*(\d+)(?:\s*\(([^)]+)\))?/i) || timeframe.match(/Day\s+(\d+)\s*-\s*(\d+)(?:\s*\(([^)]+)\))?/i);
  if (match) {
    return {
      days: `DAY ${match[1]}–${match[2]}`,
      title: match[3] ? match[3].trim() : 'Execution Phase'
    };
  }
  return { days: timeframe.toUpperCase(), title: 'Execution Phase' };
}

function cleanText(text = "") {
  if (typeof text !== "string") return "";
  return text.replace(/\*\*/g, "").trim();
}

export default function BlueprintAnimatedV2({ headline, timeline = [] }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Fill vertical progress line in sync with scroll
    ScrollTrigger.create({
      trigger: ".blueprint-timeline-track",
      start: "top 60%",
      end: "bottom 60%",
      scrub: 0.5,
      animation: gsap.to(".blueprint-timeline-progress", {
        height: "100%",
        ease: "none"
      })
    });

    // Active highlight trigger for each timeline card
    const cards = gsap.utils.toArray('.blueprint-timeline-card');
    cards.forEach((card) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top 65%",
        end: "bottom 65%",
        onEnter: () => card.classList.add("active"),
        onLeaveBack: () => card.classList.remove("active")
      });
    });
  }, { scope: containerRef });

  if (!timeline || timeline.length === 0) return null;

  return (
    <section className="blueprint-v2-section" ref={containerRef}>
      <div className="blueprint-v2-container">
        
        {/* Left-aligned header */}
        <div className="blueprint-left-header">
          <span className="eyebrow-tag success-tag">Execution Blueprint</span>
          <h2>{headline || "Project Timeline"}</h2>
          <p>A structured, milestone-driven delivery process with transparent progress tracking.</p>
        </div>

        <div className="blueprint-grid-split">
          
          {/* Left Column: Timeline list */}
          <div className="blueprint-timeline-wrapper">
            <div className="blueprint-timeline-track">
              <div className="blueprint-timeline-progress"></div>
            </div>
            
            <div className="blueprint-timeline-items">
              {timeline.map((phase, idx) => {
                const { days, title } = parsePhaseParts(phase.timeframe);

                return (
                  <div key={idx} className={`blueprint-timeline-card ${idx === 0 ? 'active' : ''}`}>
                    
                    {/* Glowing Node */}
                    <div className="timeline-node">
                      <div className="node-inner-dot"></div>
                    </div>

                    <div className="card-inner">
                      <div className="card-header">
                        <span className="phase-days-badge">{days}</span>
                        <h3 className="phase-title">{cleanText(title)}</h3>
                      </div>
                      
                      <ul className="phase-tasks">
                        {phase.tasks && phase.tasks.map((task, tIdx) => (
                          <li key={tIdx}>
                            <span className="task-bullet">✓</span>
                            <span>{cleanText(task)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Compact, Text-Free Vector Progress Diagram */}
          <div className="blueprint-vector-side">
            <div className="vector-card-container">
              <div className="vector-card-header">
                <span className="vector-badge">Milestone Progress Overview</span>
              </div>

              {/* Compact 4-phase vector milestone roadmap */}
              <div className="vector-roadmap-steps">
                <div className="roadmap-step-node active">
                  <div className="step-circle">01</div>
                  <span className="step-label">Process Mapping</span>
                </div>
                <div className="roadmap-line active"></div>

                <div className="roadmap-step-node active">
                  <div className="step-circle">02</div>
                  <span className="step-label">Platform Build</span>
                </div>
                <div className="roadmap-line"></div>

                <div className="roadmap-step-node">
                  <div className="step-circle">03</div>
                  <span className="step-label">Pilot Corridor</span>
                </div>
                <div className="roadmap-line"></div>

                <div className="roadmap-step-node">
                  <div className="step-circle">04</div>
                  <span className="step-label">Production Scale</span>
                </div>
              </div>

              <div className="vector-card-footer">
                <div className="footer-metric">
                  <strong>88 Days</strong>
                  <span>Target Execution Window</span>
                </div>
                <div className="footer-metric">
                  <strong>100% Audit</strong>
                  <span>Verified Milestones</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
