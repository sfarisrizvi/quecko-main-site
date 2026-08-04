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
import "@/components/sections/CryptoBanking.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/* ── CONSTANTS / DATA ───────────────────────────────────────── */

const CAPABILITIES = [
  {
    title: "Neobank Engines & Card Issuance",
    desc: "White-label digital ledger engines, virtual and physical card issuance API integrations, multi-currency accounts, and Apple Pay/Google Pay provisioning built to fintech-grade reliability standards.",
    icon: "card"
  },
  {
    title: "Crypto Payment Gateways",
    desc: "Multi-chain merchant checkout APIs, automatic fiat-to-crypto FX settlement, invoicing, subscription billing, and merchant dashboards designed for genuine transaction-volume scale, not a demo integration.",
    icon: "gateway"
  },
  {
    title: "Stablecoin Reserves & Minting",
    desc: "Asset-backed custody models, reserve attestation reporting, peg deviation alerts, and GENIUS Act/MiCA-compliant redemption infrastructure engineered to satisfy both users and regulators simultaneously.",
    icon: "stablecoin"
  },
  {
    title: "Cross-Border Remittance",
    desc: "Stablecoin-powered corridors, bank deposit and mobile wallet payout integrations, and Travel Rule-compliant compliance routing designed around each corridor's specific local payout requirements.",
    icon: "remittance"
  },
  {
    title: "P2P Lending Engines",
    desc: "On-chain collateral vaults, automated liquidation triggers, credit scoring, and interest rate models based on real-time borrower demand rather than static, unresponsive rate tables.",
    icon: "lending"
  },
  {
    title: "CBDC National Infrastructure",
    desc: "Permissioned wholesale and retail CBDC ledger designs, tiered transaction privacy, and cross-border settlement rails designed for interoperability with platforms like mBridge.",
    icon: "cbdc"
  }
];

const TIMELINE_STEPS = [
  {
    num: "01",
    title: "Architecture & Compliance Mapping",
    desc: "Define banking cores, custody models, and compliance boundaries (MiCA, GENIUS Act, MSB/MTL licensing) with BaaS partners and regulators."
  },
  {
    num: "02",
    title: "Fintech Core & Ledger Integration",
    desc: "Build core databases, digital ledger cores, and robust API integration layers connecting traditional BaaS features with modern digital corridors."
  },
  {
    num: "03",
    title: "Web3 Rails & Stablecoin Minting",
    desc: "Develop and deploy custom smart contracts, conversion logic, mint/redeem mechanisms, and merchant/user app dashboards in parallel."
  },
  {
    num: "04",
    title: "Audit & Volatility Stress Testing",
    desc: "Run security penetration testing, smart contract audits, liquidation scenario stress testing, and partner bank validation."
  },
  {
    num: "05",
    title: "Launch & Live Reserve Monitoring",
    desc: "Mainnet deployment with real-time reserve, peg, and transaction monitoring, plus ongoing support as transaction volume grows."
  }
];

const BENCHMARKS = [
  { value: "MiCA / GENIUS", label: "Compliance mapped before any code is written" },
  { value: "Real-Time", label: "Continuous reserve attestation and peg monitoring" },
  { value: "Custom Payout", label: "Corridor-specific local remittance channel design" },
  { value: "6 Products", label: "Neobank, payments, stablecoin, lending & CBDC rails" }
];

const ECOSYSTEM_CHAINS = [
  {
    name: "Banking-as-a-Service Partners",
    desc: "Integration with licensed BaaS providers for regulated account and card issuance rails."
  },
  {
    name: "Stablecoin Networks",
    desc: "Multi-chain stablecoin deployment across Ethereum, major L2s, and Tron for payment use cases."
  },
  {
    name: "CBDC Interoperability",
    desc: "Design compatibility with cross-border CBDC settlement platforms such as mBridge."
  }
];

const TECH_STACK = [
  {
    category: "Regulatory Frameworks",
    items: ["US GENIUS Act", "EU MiCA (EMT/ART)", "FATF Travel Rule", "Regional VASP/MSB regimes"]
  },
  {
    category: "Core Banking",
    items: ["Ledger/accounting engines", "Card issuance APIs", "BaaS integrations"]
  },
  {
    category: "Blockchain",
    items: ["Solidity", "Multi-chain stablecoin standards", "Smart Contract Custody"]
  },
  {
    category: "Infrastructure",
    items: ["Kubernetes", "PostgreSQL", "Real-time monitoring/alerting stacks"]
  }
];

const BREAKS = [
  {
    title: "Reserve Attestation Treated as an Afterthought",
    desc: "Stablecoin products launched without automated, continuous reserve monitoring often discover reporting gaps only when a regulator or auditor asks a pointed question. We build attestation infrastructure as a core requirement from the architecture phase, not a reporting task assembled under deadline pressure.",
    icon: "reserve"
  },
  {
    title: "Remittance Corridors With No Local Payout Plan",
    desc: "A remittance product with no mapped local payout partner in the destination market simply can't deliver funds, regardless of how well the sending side works. We map payout partners and compliance requirements per corridor before development begins.",
    icon: "payout"
  },
  {
    title: "Ledger and Crypto Rail Desynchronization",
    desc: "Treating the fiat ledger and the crypto settlement layer as separate systems that reconcile periodically, rather than one coherent architecture, creates windows where balances can drift out of sync. We design these as one integrated system from day one.",
    icon: "sync"
  },
  {
    title: "Liquidation Logic That Breaks Under Real Volatility",
    desc: "P2P lending and collateral systems tested only under calm market conditions routinely fail during genuine volatility spikes when they're needed most. We stress-test liquidation logic against historical crisis-level volatility before launch.",
    icon: "liquidation"
  }
];

const WHY_QUECKO = [
  {
    num: "01",
    title: "Fintech-Grade Engineering",
    desc: "We build to the reliability standards expected by commercial partner banks and regulators, not MVP-grade code shipped to hit an arbitrary launch date."
  },
  {
    num: "02",
    title: "Compliance-Native Design",
    desc: "Reserve attestation, KYC routing, and Travel Rule checks are designed directly into the system logic from day one, not retrofitted after a compliance gap is discovered."
  },
  {
    num: "03",
    title: "Cross-Corridor Compatibility",
    desc: "Architecture built for multi-currency cross-border settlement, spanning everything from retail mobile apps to wholesale central bank settlement networks."
  },
  {
    num: "04",
    title: "Six Products, One Coordinated Practice",
    desc: "Neobank, payments, stablecoin, remittance, lending, and CBDC engineering handled as one integrated financial-rails practice with shared architecture standards, not six disconnected vendor relationships."
  }
];

const ENGAGEMENT_MODELS = [
  {
    title: "Custom Platform Build",
    badge: "4–9 months typical",
    desc: "A bespoke financial core engine designed and built specifically for your business model and target markets.",
    icon: "build"
  },
  {
    title: "White-Label Frameworks",
    badge: "6–12 weeks",
    desc: "Launch fast using custom-branded remittance, payment checkout, or card-issuance templates built on Quecko's existing framework.",
    icon: "template"
  },
  {
    title: "Dedicated Squad",
    badge: "Ongoing",
    desc: "Embed senior Web3 fintech engineers directly into your engineering team for continuous development across your financial product suite.",
    icon: "squad"
  }
];

const FAQS = [
  {
    q: "Do you support white-label neobank and payment gateway templates?",
    a: "Yes — we provide full custom branding and integration layers for fast rollouts on our pre-built neobanking and payment frameworks, which can meaningfully compress time-to-market compared to a fully bespoke build while still allowing substantial customization of features and user experience."
  },
  {
    q: "How is reserve auditing handled for stablecoins?",
    a: "We build automated attestation reporting dashboards that continuously track reserve composition and redemption capacity; our Compliance team supports audit-readiness and coordinates directly with licensed public auditors to produce the periodic attestation reports regulators and users expect."
  },
  {
    q: "Can remittance recipients receive funds without a crypto wallet?",
    a: "Yes — the platform handles conversion automatically behind the scenes, allowing payouts in local fiat currency via bank deposit, mobile wallet, or cash pickup, so recipients never need to understand or interact with the underlying stablecoin settlement layer at all."
  },
  {
    q: "How do you manage liquidation risk in lending products?",
    a: "Through automated margin call thresholds, collateral vaults, and liquidator engines that are explicitly stress-tested against market shocks and simulated volatility spikes before any mainnet rollout, rather than being validated only under calm, average market conditions."
  },
  {
    q: "Which CBDC models do you support?",
    a: "Both retail and wholesale CBDC platform architectures, incorporating tiered privacy models appropriate to each use case and interoperability design with international settlement networks such as mBridge, since cross-border compatibility is increasingly a core requirement rather than an optional feature for new CBDC pilots."
  },
  {
    q: "Do you handle banking licenses?",
    a: "We partner with licensed Banking-as-a-Service (BaaS) providers for the regulated account infrastructure itself, and support VASP registrations and MSB/MTL license applications through our Compliance & Legal Advisory team, coordinating the technical architecture and the licensing process as one connected workstream."
  }
];

/* ── ICONS HELPERS ─────────────────────────────────────────── */

function CapIcon({ type }) {
  const props = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (type) {
    case "card":
      return <svg {...props}><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>;
    case "gateway":
      return <svg {...props}><rect x="2" y="2" width="20" height="20" rx="2" ry="2"/><path d="M12 18V6"/><path d="M8 10l4-4 4 4"/></svg>;
    case "stablecoin":
      return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="M12 6v12"/><path d="M17 12H7"/></svg>;
    case "remittance":
      return <svg {...props}><path d="M17 3L21 7L17 11"/><path d="M3 14H18"/><path d="M7 21L3 17L7 13"/><path d="M21 10H6"/></svg>;
    case "lending":
      return <svg {...props}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
    case "cbdc":
      return <svg {...props}><path d="M3 22v-4h18v4H3z"/><path d="M5 18V9h2v9H5z"/><path d="M11 18V9h2v9H11z"/><path d="M17 18V9h2v9H17z"/><path d="M2 4l10-3 10 3v5H2V4z"/></svg>;
    default:
      return <svg {...props}><circle cx="12" cy="12" r="10"/></svg>;
  }
}

function BreakIcon({ type }) {
  const props = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (type) {
    case "reserve":
      return <svg {...props}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
    case "payout":
      return <svg {...props}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
    case "sync":
      return <svg {...props}><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>;
    case "liquidation":
      return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    default:
      return <svg {...props}><circle cx="12" cy="12" r="10"/></svg>;
  }
}

function EngIcon({ type }) {
  const props = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (type) {
    case "build":
      return <svg {...props}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
    case "template":
      return <svg {...props}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
    case "squad":
      return <svg {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    default:
      return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>;
  }
}

/* ── MAIN COMPONENT ────────────────────────────────────────── */

export default function CryptoBankingLandingClient() {
  const pageRef = useRef(null);
  const timelineTrackRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [expandedBreak, setExpandedBreak] = useState(null);

  // Dynamic Video Load
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

  // GSAP Horizontal Scroll for timelines
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

  // Scroll animations for sections
  useGSAP(() => {
    const sections = gsap.utils.toArray([
      ".cb-merging-section",
      ".cb-comparison-section",
      ".cb-capabilities-section",
      ".cb-benchmarks-section",
      ".cb-ecosystem-section",
      ".cb-tech-section",
      ".cb-breaks-section",
      ".cb-why-section",
      ".cb-engagement-section"
    ]);

    sections.forEach((sec) => {
      gsap.from(sec, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sec,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });
  }, { scope: pageRef });

  return (
    <div ref={pageRef} className="web3-service-page">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://quecko.com" },
          { name: "Services", url: "https://quecko.com/services" },
          { name: "Web3 & Blockchain Engineering", url: "https://quecko.com/services/web3" },
          { name: "Crypto Banking & Financial Rails", url: "https://quecko.com/services/web3/crypto-banking" }
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
              alt="Crypto Banking Banner"
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
                <span>Crypto Banking &amp; Rails</span>
              </div>
              <h1 className="mainpara">Where Fiat Rails and Crypto Rails Actually Meet.</h1>
              <p className="para">
                Quecko engineers secure, regulatory-compliant financial infrastructure connecting traditional fiat banking with decentralized crypto rails — neobank engines, payment gateways, stablecoin mint/redeem systems, remittance corridors, P2P lending markets, and CBDC networks.
              </p>
              <div className="twicebtn subhead-variant" style={{ margin: "20px 0 0", color: "#636366" }}>
                <span>Six Financial Products. One Coordinated Engineering Team.</span>
              </div>
              <div className="hero-ctas" style={{ marginTop: "30px" }}>
                <Link href="/contact" className="btn-primary">
                  Talk to a Banking Engineer
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
              <div className="trust-slide">
                <span className="slide-num">400+</span>
                <span className="slide-txt">clients across 20+ countries</span>
                <span className="slide-divider">•</span>
                <span className="slide-num">$300M+</span>
                <span className="slide-txt">in funds generated</span>
                <span className="slide-divider">•</span>
                <span className="slide-num">250+</span>
                <span className="slide-txt">products built</span>
                <span className="slide-divider">•</span>
                <span className="slide-num">150+</span>
                <span className="slide-txt">engineers worldwide</span>
              </div>
              {i < 3 && <div className="trust-slide-divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          3. MERGING RAILS SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="cb-merging-section">
        <div className="section-container">
          <div className="merging-split">
            <div className="merging-text">
              <h2>Traditional fiat and digital asset infrastructure are no longer separate ecosystems.</h2>
              <p>
                Financial rails are converging in a way that would have seemed implausible just a few years ago — banks are increasingly positioning themselves as reserve custodians for stablecoin issuers, regulated neobanks are embedding native crypto conversion directly into everyday accounts, and cross-border CBDC pilots are explicitly targeting the same remittance corridors that stablecoin-powered products already serve. The institutions and fintechs winning in this space aren't choosing between fiat and crypto infrastructure — they're the ones who've figured out how to engineer both as a single coherent system rather than two systems awkwardly bolted together.
              </p>
            </div>
            <div className="merging-graphic">
              <div className="graphic-fallback">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 20H4V4h16v16z"/>
                  <path d="M4 12h16"/>
                  <path d="M12 4v16"/>
                  <circle cx="12" cy="12" r="4" fill="#C1FF14" stroke="#000" strokeWidth="1"/>
                </svg>
                <p style={{ fontSize: "14px", fontWeight: "500", color: "#000", marginTop: "8px" }}>
                  Unified Banking Ledger
                </p>
                <span style={{ fontSize: "12px", color: "#636366" }}>
                  Fiat Core API ─── Stablecoin Corridor ─── Web3 Payout
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. COMPARISON SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="cb-comparison-section">
        <div className="section-container">
          <div className="comparison-header">
            <div className="comp-eyebrow">The Challenge</div>
            <h2>Why Banking Products Fail Where Apps Don't</h2>
            <p>
              Building modern crypto banking and financial rail products is a compliance, treasury, and engineering problem combined, in a way that most consumer app development simply isn't. Whether you're launching a cross-border remittance gateway, an institutional stablecoin reserve, a neobank card issuance service, or exploring central bank digital currency infrastructure, you need to solve ledger synchronization, banking-as-a-service integration, real-time liquidity management, and strict regulatory standards like the GENIUS Act, MiCA, and VASP licensing simultaneously — and get all of them right, since a financial product with a beautiful interface but an unreliable ledger or an unmanaged reserve isn't a product at all, it's a liability waiting to surface.
            </p>
          </div>

          <div className="comparison-grid">
            <div className="comparison-card old-way">
              <span className="card-label">The Old Way</span>
              <div className="comparison-list">
                <div className="comparison-item">
                  Treat crypto banking as a smart contract problem, bolt on compliance later
                </div>
                <div className="comparison-item">
                  Launch a payment gateway or neobank without a defined custody and reserve model
                </div>
                <div className="comparison-item">
                  Build remittance corridors without mapping local payout partner requirements upfront
                </div>
                <div className="comparison-item">
                  Handle six distinct financial products as six disconnected vendor relationships
                </div>
              </div>
            </div>

            <div className="comparison-card quecko-way">
              <span className="card-label">The Quecko Way</span>
              <div className="comparison-list">
                <div className="comparison-item">
                  Map architecture, custody model, and compliance boundaries together before development begins
                </div>
                <div className="comparison-item">
                  Define reserve attestation and redemption infrastructure as a core requirement, not a later feature
                </div>
                <div className="comparison-item">
                  Design remittance corridors around real local payout partner and compliance requirements from day one
                </div>
                <div className="comparison-item">
                  Deliver all six financial rail products as one coordinated engineering practice with shared architecture standards
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. STEP TIMELINE SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="cb-timeline-section">
        <div className="section-header">
          <div className="time-eyebrow">Execution Timeline</div>
          <h2>From Compliance Mapping to Live Reserve Monitoring</h2>
        </div>

        <div className="timeline-scroll-wrapper">
          <div className="timeline-pin-container">
            <div ref={timelineTrackRef} className="timeline-track">
              {TIMELINE_STEPS.map((step, idx) => (
                <div key={idx} className="timeline-step-card">
                  <span className="step-number">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  <div className="step-connector" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. CAPABILITIES SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="cb-capabilities-section">
        <div className="section-container">
          <div className="capabilities-header">
            <div className="cap-eyebrow">Core Capabilities</div>
            <h2>What We Deliver for Crypto Banking &amp; Financial Rails</h2>
          </div>

          <div className="capabilities-grid">
            {CAPABILITIES.map((cap, idx) => (
              <div key={idx} className="capability-card">
                <div className="cap-card-icon">
                  <CapIcon type={cap.icon} />
                </div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          7. BENCHMARKS SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="cb-benchmarks-section">
        <div className="section-container">
          <div className="benchmarks-header">
            <div className="bench-eyebrow">Fintech Standards</div>
            <h2>Financial Infrastructure Benchmarks We Build To</h2>
          </div>

          <div className="benchmarks-grid">
            {BENCHMARKS.map((bench, idx) => (
              <div key={idx} className="benchmark-card">
                <span className="step-number" style={{ display: "block", fontSize: "38px", color: "#000", marginBottom: "8px" }}>
                  {bench.value}
                </span>
                <p className="bench-label">{bench.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          8. ECOSYSTEM SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="cb-ecosystem-section">
        <div className="section-container">
          <div className="ecosystem-header">
            <h2>Ecosystem &amp; Chain Coverage</h2>
          </div>

          <div className="ecosystem-grid">
            {ECOSYSTEM_CHAINS.map((eco, idx) => (
              <div key={idx} className="ecosystem-card">
                <span className="eco-cat-name">
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#C1FF14", display: "inline-block" }} />
                  {eco.name}
                </span>
                <p className="eco-cat-desc">{eco.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          9. TECH STACK SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="cb-tech-section">
        <div className="section-container">
          <div className="tech-header">
            <h2>Technology Stack</h2>
          </div>

          <div className="tech-categories">
            {TECH_STACK.map((stack, idx) => (
              <div key={idx} className="tech-category">
                <span className="tech-cat-title">{stack.category}</span>
                <div className="tech-items">
                  {stack.items.map((item, itemIdx) => (
                    <span key={itemIdx} className="tech-item">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          10. WHERE PRODUCTS BREAK (Interactive Accordion)
          ══════════════════════════════════════════════════════ */}
      <section className="cb-breaks-section">
        <div className="section-container">
          <div className="breaks-header">
            <div className="breaks-eyebrow">Risk Mitigation</div>
            <h2>Where Crypto Banking Products Actually Break</h2>
          </div>

          <div className="breaks-stack">
            {BREAKS.map((brk, idx) => {
              const isOpen = expandedBreak === idx;
              return (
                <div
                  key={idx}
                  className={`break-item-card ${isOpen ? "is-expanded" : ""}`}
                  onClick={() => setExpandedBreak(isOpen ? null : idx)}
                >
                  <div className="break-header-row">
                    <span className="break-num">0{idx + 1}</span>
                    <div className="break-icon">
                      <BreakIcon type={brk.icon} />
                    </div>
                    <h3>{brk.title}</h3>
                    <span className="expand-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </div>
                  <div className="break-body-row">
                    <div className="break-inner">
                      <p>{brk.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          11. WHY CHOOSE QUECKO SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="cb-why-section">
        <div className="section-container">
          <div className="why-header">
            <h2>Why Fintechs &amp; Banks Choose Quecko</h2>
          </div>

          <div className="why-grid">
            {WHY_QUECKO.map((why, idx) => (
              <div key={idx} className="why-card">
                <span className="why-card-num">{why.num}</span>
                <h3>{why.title}</h3>
                <p>{why.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          12. ENGAGEMENT MODELS SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="cb-engagement-section">
        <div className="section-container">
          <div className="engagement-header">
            <h2>Engagement &amp; Delivery Models</h2>
          </div>

          <div className="engagement-cards">
            {ENGAGEMENT_MODELS.map((model, idx) => (
              <div key={idx} className="engagement-card">
                <div className="eng-icon">
                  <EngIcon type={model.icon} />
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
          13. PORTFOLIOS (Proof in Production)
          ══════════════════════════════════════════════════════ */}
      <Projects />

      {/* ══════════════════════════════════════════════════════
          14. TESTIMONIALS
          ══════════════════════════════════════════════════════ */}
      <Testimonials />

      {/* ══════════════════════════════════════════════════════
          15. FAQ ACCORDION SECTION
          ══════════════════════════════════════════════════════ */}
      <FAQAccordion faqs={FAQS} />

      {/* ══════════════════════════════════════════════════════
          16. CLOSING CTA BANNER
          ══════════════════════════════════════════════════════ */}
      <section className="cb-cta-section">
        <div className="cta-container">
          <h2>Ready to build financial rails engineered to bank-grade reliability standards, not startup-MVP ones?</h2>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-cta-primary">
              Talk to a Banking Engineer
            </Link>
            <Link href="/portfolio" className="btn-cta-secondary">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
