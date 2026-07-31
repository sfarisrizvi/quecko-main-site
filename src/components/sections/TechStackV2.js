"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./TechStackV2.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

function getTechLogoUrl(tech) {
  const normalized = tech.toLowerCase().replace(/[^a-z0-9]/g, '');
  const techMap = {
    react: "react", nextjs: "nextjs", node: "nodejs", nodejs: "nodejs",
    python: "python", django: "django", postgresql: "postgresql",
    mongodb: "mongodb", aws: "aws", docker: "docker", kubernetes: "kubernetes",
    solidity: "solidity", rust: "rust", ethereum: "ethereum", polygon: "polygon",
    web3js: "web3js", ethersjs: "ethers", hardhat: "hardhat", truffle: "truffle",
    ipfs: "ipfs", filecoin: "filecoin", thegraph: "thegraph", chainlink: "chainlink",
    polkadot: "polkadot", cosmos: "cosmos", binance: "binance", avalanche: "avalanche",
    solana: "solana", cardano: "cardano", algorand: "algorand", near: "near",
    fantom: "fantom", harmony: "harmony", celo: "celo", hedera: "hedera",
    tezos: "tezos", eos: "eos", tron: "tron", neo: "neo", hyperledger: "hyperledger",
    corda: "corda", quorum: "quorum", stellar: "stellar", ripple: "ripple"
  };
  
  if (techMap[normalized]) {
    return `/Assets/tech/${techMap[normalized]}.svg`;
  }
  return `/Assets/tech/default-code.svg`;
}

export default function TechStackV2({ headline, categories = [] }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Continuous marquee animation
    const marquees = gsap.utils.toArray('.marquee-track');
    
    marquees.forEach((track, idx) => {
      // Alternate direction based on index
      const direction = idx % 2 === 0 ? -1 : 1;
      
      gsap.to(track, {
        xPercent: -50 * direction,
        ease: "none",
        duration: 20,
        repeat: -1
      });
    });

  }, { scope: containerRef });

  if (!categories || categories.length === 0) return null;

  // Flatten all tech items to create marquee rows
  const allTech = categories.reduce((acc, cat) => [...acc, ...(cat.items || [])], []);
  
  // Create 2 rows for the marquee by splitting the tech array
  const midpoint = Math.ceil(allTech.length / 2);
  const row1 = allTech.slice(0, midpoint);
  const row2 = allTech.slice(midpoint);

  // Helper to render a marquee track (duplicated for infinite effect)
  const renderMarquee = (items, reverse = false) => {
    if (!items || items.length === 0) return null;
    const content = (
      <div className="marquee-content">
        {items.map((tech, i) => (
          <div key={i} className="tech-marquee-pill">
            <div className="tech-icon">
              <Image 
                src={getTechLogoUrl(tech)} 
                alt={tech} 
                width={24} 
                height={24}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`;
                }}
              />
            </div>
            <span>{tech}</span>
          </div>
        ))}
      </div>
    );

    return (
      <div className={`marquee-row ${reverse ? 'reverse' : ''}`}>
        <div className="marquee-track">
          {content}
          {content}
          {content}
          {content}
        </div>
      </div>
    );
  };

  return (
    <section className="tech-stack-v2-section" ref={containerRef}>
      <div className="tech-header">
        <span className="tagline">Engineered With</span>
        <h2>{headline || "Our Tech Stack"}</h2>
      </div>

      <div className="marquee-container">
        {renderMarquee(row1)}
        {renderMarquee(row2, true)}
      </div>
    </section>
  );
}
