"use client";

import React, { useState } from "react";
import "./EngagementV2.scss";

function cleanText(text = "") {
  if (typeof text !== "string") return "";
  return text.replace(/\*\*/g, "").replace(/^[:\s]+/, "").trim();
}

// Compact Vector Architecture Diagrams for each model tab (No black background blocks, no image text clutter)
function RenderModelVectorDiagram({ tabIndex }) {
  if (tabIndex === 0) {
    // Model 01: Pilot Corridor Vector Diagram (Supply Port -> Escrow Smart Contract -> Destination Port)
    return (
      <div className="model-vector-diagram pilot-diagram">
        <div className="diagram-header">
          <span className="diagram-tag">Single Trade Lane Flow</span>
        </div>

        <div className="diagram-flow-nodes">
          <div className="vector-node">
            <div className="node-icon-box">⚓</div>
            <span>Origin Port</span>
          </div>

          <div className="vector-connector">
            <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
              <path d="M0 8H32M32 8L24 2M32 8L24 14" stroke="var(--v2-accent)" strokeWidth="2" strokeDasharray="3 3" />
            </svg>
            <span className="conn-label">LC Escrow</span>
          </div>

          <div className="vector-node active-node">
            <div className="node-icon-box">📜</div>
            <span>Escrow Rails</span>
          </div>

          <div className="vector-connector">
            <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
              <path d="M0 8H32M32 8L24 2M32 8L24 14" stroke="var(--v2-accent)" strokeWidth="2" strokeDasharray="3 3" />
            </svg>
            <span className="conn-label">Release</span>
          </div>

          <div className="vector-node">
            <div className="node-icon-box">🏢</div>
            <span>Receiving Bank</span>
          </div>
        </div>

        <div className="diagram-status-footer">
          <span className="status-dot"></span>
          <span>Targeted Single Corridor Verification</span>
        </div>
      </div>
    );
  }

  if (tabIndex === 1) {
    // Model 02: Full Platform Vector Network Hub (Multi-Bank, Multi-Corridor Mesh)
    return (
      <div className="model-vector-diagram full-platform-diagram">
        <div className="diagram-header">
          <span className="diagram-tag">Multi-Bank Regional Network Mesh</span>
        </div>

        <div className="mesh-hub-container">
          <div className="hub-node center-hub">
            <span>Web3 Ledger Hub</span>
          </div>
          <div className="spoke-nodes">
            <div className="spoke-node">Bank A</div>
            <div className="spoke-node">Bank B</div>
            <div className="spoke-node">Customs</div>
            <div className="spoke-node">Suppliers</div>
          </div>
        </div>

        <div className="diagram-status-footer">
          <span className="status-dot"></span>
          <span>Multi-Corridor Production Network</span>
        </div>
      </div>
    );
  }

  // Model 03: Integration Layer Only (Legacy ERP -> API Gateway -> Settlement Rails)
  return (
    <div className="model-vector-diagram integration-diagram">
      <div className="diagram-header">
        <span className="diagram-tag">API Integration Adapter</span>
      </div>

      <div className="diagram-flow-nodes">
        <div className="vector-node">
          <div className="node-icon-box">💻</div>
          <span>Legacy ERP</span>
        </div>

        <div className="vector-connector">
          <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
            <path d="M0 8H32M32 8L24 2M32 8L24 14" stroke="var(--v2-accent)" strokeWidth="2" strokeDasharray="3 3" />
          </svg>
          <span className="conn-label">REST / gRPC</span>
        </div>

        <div className="vector-node active-node">
          <div className="node-icon-box">🔌</div>
          <span>API Gateway</span>
        </div>

        <div className="vector-connector">
          <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
            <path d="M0 8H32M32 8L24 2M32 8L24 14" stroke="var(--v2-accent)" strokeWidth="2" strokeDasharray="3 3" />
          </svg>
          <span className="conn-label">Settlement</span>
        </div>

        <div className="vector-node">
          <div className="node-icon-box">⛓️</div>
          <span>Chain Rails</span>
        </div>
      </div>

      <div className="diagram-status-footer">
        <span className="status-dot"></span>
        <span>Zero System Replacement Required</span>
      </div>
    </div>
  );
}

export default function EngagementV2({ items = [] }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!items || items.length === 0) return null;

  const parsedItems = items.map((item, idx) => {
    let title = "";
    let desc = "";

    if (typeof item === 'object' && item !== null) {
      title = item.title || `Model 0${idx + 1}`;
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
        title = `Model 0${idx + 1}`;
        desc = item;
      }
    }

    return {
      title: cleanText(title),
      desc: cleanText(desc)
    };
  });

  const currentItem = parsedItems[activeTab] || parsedItems[0];

  return (
    <section className="engagement-v2-section">
      <div className="engagement-v2-container">
        
        {/* Left-aligned header */}
        <div className="engagement-left-header">
          <span className="eyebrow-tag success-tag">Partnership Structures</span>
          <h2>Engagement & Delivery Models</h2>
          <p>Choose the model that aligns with your engineering capacity and launch goals.</p>
        </div>

        {/* Horizontal Tab Bar */}
        <div className="engagement-tabs-bar">
          {parsedItems.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                className={`engagement-tab ${isActive ? "active" : ""}`}
                onClick={() => setActiveTab(idx)}
              >
                <span className="tab-num">0{idx + 1}</span>
                <span className="tab-title">{item.title}</span>
                {isActive && <div className="tab-active-indicator" />}
              </button>
            );
          })}
        </div>

        {/* Detail Panel Split: Text Details on Left, Compact Vector Diagram on Right */}
        <div className="engagement-detail-panel">
          <div className="engagement-panel-grid">
            
            {/* Left Column: Text Specification & Features */}
            <div className="panel-text-side">
              <div className="panel-badge">
                <span>MODEL 0{activeTab + 1} SPECIFICATION</span>
              </div>
              
              <h3 className="panel-title">{currentItem.title}</h3>
              <p className="panel-desc">{currentItem.desc}</p>

              <div className="panel-footer">
                <div className="footer-feature">
                  <span className="feature-dot"></span>
                  <span>Dedicated Enterprise Engineers</span>
                </div>
                <div className="footer-feature">
                  <span className="feature-dot"></span>
                  <span>Transparent Milestone Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Column: Compact Vector Flow Architecture Diagram */}
            <div className="panel-diagram-side">
              <RenderModelVectorDiagram tabIndex={activeTab} />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
