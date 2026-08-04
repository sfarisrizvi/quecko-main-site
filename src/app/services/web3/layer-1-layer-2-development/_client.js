"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import FAQAccordion from "@/components/sections/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import "@/components/sections/L1L2Landing.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/* ── DATA ──────────────────────────────────────────────────── */

const CAPABILITIES = [
  {
    title: "Custom Layer 1 Chain Development",
    desc: "Full-stack sovereign blockchain development — consensus mechanism design across PoS, PoA, and BFT variants, node architecture, genesis configuration, and validator tooling. We build chains purpose-fit for your specific transaction pattern and governance model, not a fork with a logo swap.",
    icon: "chain"
  },
  {
    title: "Layer 2 Rollup Engineering",
    desc: "Design and deployment of optimistic and zk-rollup solutions built on top of Ethereum, Polygon, or custom L1s, with careful attention to L1 settlement costs, sequencer decentralization roadmap, and withdrawal security.",
    icon: "layers"
  },
  {
    title: "Cross-Chain Bridge Development",
    desc: "Secure bridge infrastructure connecting your chain to major ecosystems, architected with relay mechanisms, validator sets, and liquidity routing secured by multi-signature and fraud-proof systems.",
    icon: "bridge"
  },
  {
    title: "Consensus Mechanism Design",
    desc: "Custom consensus protocol engineering from Proof-of-Stake and Delegated PoS to novel hybrid mechanisms, with full modeling of validator incentives, slashing conditions, and finality guarantees.",
    icon: "consensus"
  },
  {
    title: "Validator & Node Infrastructure",
    desc: "Full validator node deployment, monitoring dashboards, and staking infrastructure, with high-availability clusters, automated failover, and performance alerting built to keep validators online and slashing-free.",
    icon: "server"
  },
  {
    title: "Blockchain SDK & Developer Tooling",
    desc: "Custom SDKs, CLIs, and developer documentation so your ecosystem can onboard builders from day one — a chain without developer tooling is a chain nobody builds on.",
    icon: "code"
  }
];

const TIMELINE_STEPS = [
  {
    num: "01",
    title: "Protocol Architecture & Consensus Design",
    desc: "We assess your throughput, finality, and decentralization requirements to select or design the right consensus mechanism, then define the chain's economic model, governance parameters, and validator incentive structure."
  },
  {
    num: "02",
    title: "Core Development & Testnet",
    desc: "Our engineers build the node software, transaction processing layer, and networking stack, then deploy a private testnet for stress testing, validator onboarding rehearsal, and performance benchmarking."
  },
  {
    num: "03",
    title: "Security Audit & Bridge Engineering",
    desc: "Rigorous code audits, formal verification of consensus logic, and adversarial penetration testing. If cross-chain connectivity is needed, we build and independently audit bridge contracts."
  },
  {
    num: "04",
    title: "Public Testnet & Ecosystem Priming",
    desc: "A public testnet phase with external validator participation, bug bounty coverage, and developer tooling release — so builders and validators are onboarded before mainnet."
  },
  {
    num: "05",
    title: "Mainnet Launch & Ecosystem Support",
    desc: "Coordinated mainnet deployment with validator onboarding, block explorer setup, wallet integrations, and developer documentation, followed by post-launch monitoring and scaling support."
  }
];

const BENCHMARKS = [
  { value: "<2s", label: "Target finality for BFT-style consensus deployments" },
  { value: "99.9%", label: "Uptime SLA on validator infrastructure we operate" },
  { value: "100%", label: "Audit coverage before any mainnet deployment" },
  { value: "4–12mo", label: "Delivery range based on consensus complexity" }
];

const ECOSYSTEM_CHAINS = [
  { name: "Ethereum", desc: "Solidity/Vyper engineering, EVM-compatible dApps, gas optimization, ERC-20/721/1155 standards." },
  { name: "Solana", desc: "Rust-based program engineering, high-frequency DeFi protocols, Anchor framework audit-readiness." },
  { name: "BNB Smart Chain", desc: "High-performance BEP-20 tokens, BSC-optimized contracts, DeFi ecosystem hooks." },
  { name: "Polkadot", desc: "Substrate framework engineering, custom parachain development, cross-chain messaging (XCM)." },
  { name: "Cardano", desc: "Plutus & Haskell engineering, UTXO architecture security, sustainable tokenomics design." },
  { name: "SUI", desc: "Sui Move contract deployment, parallelized execution, object-based asset modeling." }
];

const TECH_STACK = [
  { category: "Languages", items: ["Rust", "Go", "Solidity", "C++"] },
  { category: "Frameworks", items: ["Substrate", "Cosmos SDK", "OP Stack", "Polygon CDK", "Arbitrum Orbit"] },
  { category: "Consensus", items: ["Tendermint BFT", "PBFT", "Proof-of-Stake", "Delegated PoS", "Custom Hybrid"] },
  { category: "ZK Tooling", items: ["Circom", "Halo2", "PLONK", "zkEVM"] },
  { category: "Infrastructure", items: ["Docker", "Kubernetes", "Terraform", "Grafana", "Prometheus"] },
  { category: "Bridges", items: ["LayerZero", "Wormhole", "Custom Relay Architectures"] }
];



const ENGAGEMENT_MODELS = [
  {
    title: "Dedicated Protocol Pod",
    badge: "Ongoing Engagement",
    desc: "A full-time cross-functional squad — protocol engineers, smart contract developers, DevOps, and QA — embedded directly in your workflow for the duration of the build and beyond."
  },
  {
    title: "Project-Based Delivery",
    badge: "4–12 Months",
    desc: "Fixed-scope, milestone-driven chain development from architecture through mainnet, with clearly defined deliverables and sign-off points at each phase."
  },
  {
    title: "Fractional Protocol Support",
    badge: "Part-time, Ongoing",
    desc: "Senior protocol engineers available part-time for architecture review, audit preparation, or specifically for testnet-to-mainnet transition support."
  }
];

const FAQS = [
  {
    q: "How long does it take to build a custom Layer 1 blockchain?",
    a: "A production-ready L1 with basic validator infrastructure typically takes 4–6 months from architecture workshop to mainnet. More complex chains involving custom consensus mechanisms, cross-chain bridges, and a full ecosystem tooling suite can extend to 6–12 months. The single biggest timeline variable is usually bridge complexity."
  },
  {
    q: "Can you build a Layer 2 on top of an existing chain like Ethereum?",
    a: "Yes. We build optimistic rollups, zk-rollups, and app-specific L2s using established frameworks like OP Stack, Arbitrum Orbit, and Polygon CDK when your requirements fit, or fully custom rollup implementations when the use case genuinely demands it."
  },
  {
    q: "How do you handle security for blockchain infrastructure?",
    a: "Every component undergoes formal verification of critical logic, automated static analysis, manual code review by engineers who didn't write the original code, and a third-party security audit before any mainnet deployment."
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. Post-launch, we offer ongoing validator monitoring and alerting, performance optimization as real transaction patterns emerge, upgrade engineering for protocol improvements, and ecosystem development support."
  },
  {
    q: "What happens if we need to change the consensus mechanism after launch?",
    a: "This is exactly why we build the governance and upgrade pathway into the protocol from day one. A well-designed chain includes a clear on-chain or coordinated off-chain upgrade process."
  },
  {
    q: "Do we need our own token to launch a Layer 1?",
    a: "In almost all cases yes, since the native token typically secures the network through staking and pays for transaction fees — but the tokenomics design needs the same rigor as the consensus mechanism itself."
  }
];


/* ── ICON HELPERS ──────────────────────────────────────────── */

function CapIcon({ type }) {
  const props = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (type) {
    case "chain":
      return <svg {...props}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
    case "layers":
      return <svg {...props}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
    case "bridge":
      return <svg {...props}><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>;
    case "consensus":
      return <svg {...props}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
    case "server":
      return <svg {...props}><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>;
    case "code":
      return <svg {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
    default:
      return <svg {...props}><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>;
  }
}



/* ── MAIN COMPONENT ────────────────────────────────────────── */

export default function L1L2LandingClient() {
  const pageRef = useRef(null);
  const timelineTrackRef = useRef(null);
  const [expandedCap, setExpandedCap] = useState(0);
  const [videoReady, setVideoReady] = useState(false);

  /* ── Deferred video load (matching global hero pattern) ── */
  useEffect(() => {
    let t;
    const start = () => {
      t = setTimeout(() => setVideoReady(true), 600);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("load", start);
    };
  }, []);

  /* ── Horizontal scroll timeline (desktop only) ── */
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 769px)", () => {
      const track = timelineTrackRef.current;
      if (!track) return;
      const totalScroll = track.scrollWidth - window.innerWidth + 120;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-scroll-wrapper",
          start: "center center",
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });
    });
  }, { scope: pageRef });

  /* ── Scroll-triggered fade-ins for sections ── */
  useGSAP(() => {
    const sections = gsap.utils.toArray([
      ".l1l2-context-section",
      ".l1l2-comparison-section",
      ".l1l2-benchmarks-section",
      ".l1l2-ecosystem-section",
      ".l1l2-tech-section",
      ".l1l2-engagement-section"
    ]);

    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

    // Stagger capability cards
    const capCards = gsap.utils.toArray(".capability-expand-card");
    if (capCards.length) {
      gsap.from(capCards, {
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".l1l2-capabilities-section",
          start: "top 75%"
        }
      });
    }

    // Stagger benchmark cards
    const benchCards = gsap.utils.toArray(".benchmark-card");
    if (benchCards.length) {
      gsap.from(benchCards, {
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".l1l2-benchmarks-section",
          start: "top 75%"
        }
      });
    }
  }, { scope: pageRef });

  return (
    <div ref={pageRef} className="web3-service-page">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://quecko.com" },
          { name: "Services", url: "https://quecko.com/services" },
          { name: "Web3 & Blockchain Engineering", url: "https://quecko.com/services/web3" },
          { name: "Layer 1 & Layer 2 Development", url: "https://quecko.com/services/web3/layer-1-layer-2-development" }
        ]}
      />

      {/* ══════════════════════════════════════════════════════
          1. HERO — Global template (matches all service pages)
          ══════════════════════════════════════════════════════ */}
      <section className="smart_contract">
        <Header />
        <div className="inner_data">
          {videoReady ? (
            <video
              className="main-banner-video"
              muted
              playsInline
              autoPlay
              loop
              poster="/Assets/landing/banner/banner-preview.png"
              width="100%"
              id="myVideo"
              style={{ display: "block" }}
            >
              <source
                src="https://media.quecko.com/videos/banner.mp4"
                type="video/mp4"
              />
            </video>
          ) : (
            <Image
              className="main-banner-video"
              src="/Assets/landing/banner/banner-preview.png"
              alt="Layer 1 & Layer 2 Development Banner"
              priority
              fetchPriority="high"
              width={1920}
              height={1080}
              sizes="100vw"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          )}

          <Image
            src="/Assets/landing/banner/bannershadow.png"
            alt=""
            aria-hidden="true"
            className="bannershadow"
            width={1920}
            height={1080}
            priority
          />

          <div className="blogdetail">
            <div className="parenttext">
              <div className="twicebtn">
                <p>Services</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                  <path d="M5.25 11L8.75 7.5L5.25 4" stroke="#9D9D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Layer 1 &amp; Layer 2 Development</span>
              </div>
              <h1 className="mainpara">Chains Built to Last Past Testnet.</h1>
              <p className="para">
                Quecko engineers production-grade Layer 1 and Layer 2 networks — consensus mechanisms,
                validator infrastructure, and audited bridge architecture — for teams who need infrastructure
                that survives real transaction volume, not a testnet demo.
              </p>
              <div className="hero-ctas">
                <Link href="/contact" className="btn-primary">
                  Talk to a Protocol Engineer
                </Link>
                <Link href="/portfolio" className="btn-secondary">
                  Explore Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. TRUST BAR — Global stat marquee
          ══════════════════════════════════════════════════════ */}
      <div className="trust-bar">
        <div className="trust-container">
          {[0, 1, 2, 3].map((i) => (
            <React.Fragment key={i}>
              <div className="trust-stat">
                <strong>400+</strong>
                <span>clients across 20+ countries</span>
              </div>
              <div className="trust-stat">
                <strong>$300M+</strong>
                <span>in funds generated</span>
              </div>
              <div className="trust-stat">
                <strong>250+</strong>
                <span>products built</span>
              </div>
              <div className="trust-stat">
                <strong>150+</strong>
                <span>engineers worldwide</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          3. THE MULTI-CHAIN REALITY
          ══════════════════════════════════════════════════════ */}
      <section className="l1l2-context-section">
        <div className="context-container">
          <div className="context-split">
            <div className="context-text-side">
              <span className="context-eyebrow">The Multi-Chain Reality</span>
              <h2>There Is No Longer a Single Dominant Chain Architecture</h2>
              <p>
                Ethereum L2s, Solana&apos;s monolithic throughput model, Cosmos app-chains, and Polkadot
                parachains are all competing approaches, each with genuinely different trade-offs in finality,
                decentralization, and cost. Teams launching new infrastructure today aren&apos;t choosing
                &quot;blockchain or not&quot; — they&apos;re choosing which architecture matches their actual
                transaction pattern, validator economics, and target user base.
              </p>
            </div>

            {/* Placeholder for image/Lottie — as per user request */}
            <div className="context-visual-side">
              <div className="visual-placeholder">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <p>Image / Lottie Animation Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. OLD WAY vs QUECKO WAY
          ══════════════════════════════════════════════════════ */}
      <section className="l1l2-comparison-section">
        <div className="comparison-container">
          <div className="comparison-header">
            <span className="comparison-eyebrow">Where Most Chains Die</span>
            <h2>Before Mainnet</h2>
            <p>
              Launching a Layer 1 or Layer 2 demands expertise across consensus algorithms, cryptographic
              primitives, validator economics, and network security — disciplines nearly impossible to
              hire for in-house at the depth required.
            </p>
          </div>

          <div className="comparison-grid">
            <div className="comparison-card old-way">
              <span className="card-label">The Old Way</span>
              <div className="comparison-list">
                <div className="comparison-item">Fork an existing client and hope the defaults fit your use case</div>
                <div className="comparison-item">Discover consensus trade-offs only after testnet performance problems appear</div>
                <div className="comparison-item">Bolt on a bridge late, audited under deadline pressure</div>
                <div className="comparison-item">Launch with a handful of validators and call it &quot;progressive decentralization&quot;</div>
              </div>
            </div>

            <div className="comparison-card quecko-way">
              <span className="card-label">The Quecko Way</span>
              <div className="comparison-list">
                <div className="comparison-item">Consensus mechanism selected and modeled against your actual requirements before any code is written</div>
                <div className="comparison-item">Validator economics and slashing conditions simulated under adversarial scenarios pre-launch</div>
                <div className="comparison-item">Bridge architecture designed and audited as a first-class component, not a bolt-on</div>
                <div className="comparison-item">Validator onboarding plan built into the mainnet launch sequence from day one</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. FROM WHITEPAPER TO GENESIS BLOCK (Horizontal Scroll)
          ══════════════════════════════════════════════════════ */}
      <section className="l1l2-timeline-section">
        <div className="timeline-header">
          <span className="timeline-eyebrow">Delivery Process</span>
          <h2>From Whitepaper to Genesis Block</h2>
        </div>

        <div className="timeline-scroll-wrapper">
          <div className="timeline-pin-container">
            <div className="timeline-track" ref={timelineTrackRef}>
              {TIMELINE_STEPS.map((step, idx) => (
                <div key={idx} className="timeline-step-card">
                  <span className="step-number">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  {idx < TIMELINE_STEPS.length - 1 && <div className="step-connector" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. CAPABILITIES (Expanding Accordion Cards)
          ══════════════════════════════════════════════════════ */}
      <section className="l1l2-capabilities-section">
        <div className="capabilities-container">
          <div className="capabilities-header">
            <span className="cap-eyebrow">What We Build</span>
            <h2>Core Capabilities</h2>
          </div>

          <div className="capabilities-stack">
            {CAPABILITIES.map((cap, idx) => (
              <div
                key={idx}
                className={`capability-expand-card ${expandedCap === idx ? "is-expanded" : ""}`}
                onClick={() => setExpandedCap(expandedCap === idx ? -1 : idx)}
              >
                <div className="cap-card-header">
                  <span className="cap-num">0{idx + 1}</span>
                  <div className="cap-icon">
                    <CapIcon type={cap.icon} />
                  </div>
                  <h3>{cap.title}</h3>
                  <span className="expand-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </div>
                <div className="cap-card-body">
                  <div className="cap-card-inner">
                    <p>{cap.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          7. ENGINEERING BENCHMARKS
          ══════════════════════════════════════════════════════ */}
      <section className="l1l2-benchmarks-section">
        <div className="benchmarks-container">
          <div className="benchmarks-header">
            <span className="bench-eyebrow">Production Standards</span>
            <h2>Engineering Benchmarks We Build To</h2>
          </div>

          <div className="benchmarks-grid">
            {BENCHMARKS.map((bench, idx) => (
              <div key={idx} className="benchmark-card">
                <div className="bench-value">{bench.value}</div>
                <div className="bench-label">{bench.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          8. ECOSYSTEM / CHAIN COVERAGE
          ══════════════════════════════════════════════════════ */}
      <section className="l1l2-ecosystem-section">
        <div className="ecosystem-container">
          <div className="ecosystem-header">
            <h2>Ecosystem &amp; Chain Coverage</h2>
          </div>

          <div className="ecosystem-grid">
            {ECOSYSTEM_CHAINS.map((chain, idx) => (
              <div key={idx} className="ecosystem-card">
                <div className="eco-chain-name">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                  {chain.name}
                </div>
                <div className="eco-chain-desc">{chain.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          9. TECHNOLOGY STACK
          ══════════════════════════════════════════════════════ */}
      <section className="l1l2-tech-section">
        <div className="tech-container">
          <div className="tech-header">
            <h2>Technology Stack</h2>
          </div>

          <div className="tech-categories">
            {TECH_STACK.map((cat, idx) => (
              <div key={idx} className="tech-category">
                <div className="tech-cat-title">{cat.category}</div>
                <div className="tech-items">
                  {cat.items.map((item, i) => (
                    <span key={i} className="tech-item">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ══════════════════════════════════════════════════════
          12. ENGAGEMENT MODELS
          ══════════════════════════════════════════════════════ */}
      <section className="l1l2-engagement-section">
        <div className="engagement-container">
          <div className="engagement-header">
            <h2>Engagement &amp; Delivery Models</h2>
            <p>Choose the model that aligns with your engineering capacity and launch goals.</p>
          </div>

          <div className="engagement-cards">
            {ENGAGEMENT_MODELS.map((model, idx) => (
              <div key={idx} className="engagement-card">
                <div className="eng-icon">
                  {idx === 0 && <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
                  {idx === 1 && <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>}
                  {idx === 2 && <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>}
                </div>
                <h3>{model.title}</h3>
                <span className="eng-badge">{model.badge}</span>
                <p>{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          13. PROOF IN PRODUCTION (Global Projects component)
          ══════════════════════════════════════════════════════ */}
      <Projects />

      {/* ══════════════════════════════════════════════════════
          14. TESTIMONIALS (Global Testimonials component)
          ══════════════════════════════════════════════════════ */}
      <Testimonials />

      {/* ══════════════════════════════════════════════════════
          15. FAQ
          ══════════════════════════════════════════════════════ */}
      <section className="service-section light-bg">
        <div className="section-container">
          <span className="tagline">FAQ</span>
          <h2 className="section-head" style={{ textAlign: "center", margin: "0 auto 40px auto" }}>
            Frequently Asked Questions
          </h2>
          <div className="faq-accordion">
            {FAQS.map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          16. CLOSING CTA
          ══════════════════════════════════════════════════════ */}
      <section className="l1l2-cta-section">
        <div className="cta-container">
          <h2>
            Whether you&apos;re building a sovereign Layer 1 or scaling with a custom Layer 2, Quecko&apos;s
            protocol engineers are ready.
          </h2>
          <p>From whitepaper to mainnet — without the guesswork.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-cta-primary">
              Talk to a Protocol Engineer
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10.6667 11.3334L14 8.00002L10.6667 4.66669M14 8.00002H2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/portfolio" className="btn-cta-secondary">
              View Our Portfolio
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10.6667 11.3334L14 8.00002L10.6667 4.66669M14 8.00002H2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}


/* ── FAQ Item (matching global pattern) ── */

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current?.scrollHeight || 0}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span className="faq-icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div
        className="faq-answer"
        style={{ maxHeight: height, transition: "max-height 0.3s ease-in-out", overflow: "hidden" }}
      >
        <div ref={contentRef} className="faq-answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
