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

const LAYER1_CHAINS = [
  {
    id: "bnb",
    name: "BNB Chain Development",
    cardTitle: "BNB Chain",
    cardDesc: "Build scalable decentralized applications with BNB Chain’s EVM-compatible infrastructure.",
    accentColor: "#F3BA2F",
    accentRgb: "243, 186, 47",
    intro: "Build and deploy scalable blockchain solutions with BNB Chain. Its EVM compatibility, efficient transaction processing, and broad ecosystem make it suitable for decentralized applications, digital assets, DeFi platforms, and Web3 products.",
    queckoRole: "At Quecko, we develop custom BNB Chain solutions based on your business requirements, from smart contracts and token development to dApps, wallets, and decentralized exchanges.",
    servicesTitle: "Our BNB Chain Development Services",
    services: [
      {
        title: "BNB Chain Consulting",
        desc: "Get strategic guidance on blockchain architecture, technology selection, development planning, and BNB Chain integration based on your business requirements."
      },
      {
        title: "BNB Chain Token Development",
        desc: "Create and deploy custom tokens for payments, utility, governance, DeFi, gaming, and other Web3 applications with the required token standards and functionality."
      },
      {
        title: "BNB Chain Smart Contract Development",
        desc: "Develop, test, and deploy secure smart contracts to automate transactions, business processes, and digital asset management on BNB Chain."
      },
      {
        title: "BNB Chain Wallet Development",
        desc: "Build secure and user-friendly wallets for storing, transferring, and managing digital assets, with support for required tokens and transaction functionality."
      },
      {
        title: "BNB Chain NFT Marketplace Development",
        desc: "Develop scalable NFT marketplaces with features such as minting, buying, selling, bidding, royalties, and digital asset management."
      },
      {
        title: "BNB Chain DeFi Development",
        desc: "Build decentralized finance applications for use cases such as staking, lending, borrowing, liquidity management, and yield-based platforms."
      },
      {
        title: "BNB Chain dApp Development",
        desc: "Develop decentralized applications tailored to specific business use cases, with secure smart contract integration and intuitive user interfaces."
      },
      {
        title: "BNB Chain DEX Development",
        desc: "Build decentralized exchanges for token swaps and digital asset trading, with features such as liquidity pools, trading pairs, and automated transaction execution."
      }
    ]
  },
  {
    id: "solana",
    name: "Solana Blockchain Development",
    cardTitle: "Solana",
    cardDesc: "Build high-performance decentralized applications with Solana’s scalable blockchain infrastructure.",
    accentColor: "#14F195",
    accentRgb: "20, 241, 149",
    intro: "Develop fast, scalable, and cost-efficient Web3 applications on Solana. Its high-performance architecture and parallel transaction processing make it suitable for applications that require high throughput and low-latency transactions.",
    queckoRole: "At Quecko, we develop custom Solana solutions, including dApps, smart contracts, tokens, wallets, NFT marketplaces, DeFi platforms, and blockchain integrations.",
    servicesTitle: "Our Solana Development Services",
    services: [
      {
        title: "Custom Solana dApp Development",
        desc: "Build scalable decentralized applications for payments, trading, lending, gaming, digital assets, and other Web3 use cases."
      },
      {
        title: "Solana Smart Contract Development",
        desc: "Develop and audit Solana programs to automate transactions, enforce business logic, and support decentralized applications securely."
      },
      {
        title: "Solana Token Development",
        desc: "Create and deploy SPL tokens for DeFi, NFTs, gaming, loyalty programs, payments, and other digital asset use cases."
      },
      {
        title: "Solana Wallet Development",
        desc: "Develop secure, user-friendly wallets with features such as multi-asset support, transaction tracking, QR-based transfers, and digital asset management."
      },
      {
        title: "Solana AI Integration",
        desc: "Integrate AI capabilities into Solana applications for automation, analytics, recommendations, data processing, and intelligent decision-making."
      },
      {
        title: "Solana NFT Marketplace Development",
        desc: "Build NFT marketplaces with features including minting, trading, bidding, royalties, collections, and digital asset management."
      },
      {
        title: "Solana AI Project Consulting",
        desc: "Get technical guidance for Solana-based AI projects, including feasibility analysis, architecture planning, technology selection, integration, and optimization."
      },
      {
        title: "Solana DeFi Exchange Development",
        desc: "Develop decentralized trading platforms with features such as token swaps, liquidity pools, trading pairs, and automated transaction execution."
      },
      {
        title: "Solana Migration Services",
        desc: "Migrate existing blockchain applications from Ethereum or other compatible networks to Solana while adapting smart contracts, architecture, and functionality to the Solana ecosystem."
      }
    ],
    benefitsTitle: "Key Benefits of Solana",
    benefits: [
      { title: "High Throughput", desc: "Solana is designed to process a high volume of transactions, making it suitable for applications that require scalable blockchain infrastructure." },
      { title: "Low Transaction Costs", desc: "Solana supports low-cost transactions, making it practical for applications involving frequent on-chain interactions." },
      { title: "Scalable Architecture", desc: "Solana’s architecture supports parallel transaction processing, helping applications maintain performance as transaction volumes increase." },
      { title: "Fast Transaction Finality", desc: "Fast transaction confirmation enables responsive user experiences for trading, payments, gaming, and other real-time applications." },
      { title: "Energy Efficient", desc: "Solana uses a Proof-of-Stake-based consensus model combined with Proof of History to support efficient network operation." },
      { title: "Secure Development Environment", desc: "Solana programs can be developed using Rust and other supported technologies, enabling developers to build performance-focused and secure blockchain applications." }
    ],
    industriesTitle: "Industries We Serve",
    industries: [
      { title: "Banking & Finance", desc: "Develop DeFi platforms, payment solutions, tokenized assets, and financial applications with blockchain-based transaction infrastructure." },
      { title: "Healthcare", desc: "Build solutions for secure data management, medical records, data sharing, and healthcare asset tracking." },
      { title: "Real Estate", desc: "Enable property tokenization, automated agreements, digital ownership, and blockchain-based transaction management." },
      { title: "Transport & Logistics", desc: "Improve supply chain visibility with blockchain-based tracking, automated processes, and tamper-resistant transaction records." },
      { title: "Media & Entertainment", desc: "Build NFT platforms, digital ownership solutions, royalty management systems, and creator-focused Web3 applications." },
      { title: "Insurance", desc: "Develop blockchain solutions for claims automation, policy management, data verification, and fraud reduction." }
    ]
  },
  {
    id: "ethereum",
    name: "Ethereum Blockchain Development",
    cardTitle: "Ethereum",
    cardDesc: "Build secure and scalable decentralized applications with Ethereum blockchain solutions.",
    accentColor: "#627EEA",
    accentRgb: "98, 126, 234",
    intro: "Ethereum provides a mature infrastructure for decentralized applications, smart contracts, tokens, DeFi platforms, and digital assets.",
    queckoRole: "At Quecko, we develop customized Ethereum solutions based on your business requirements, from smart contracts and dApps to private blockchain networks and wallets.",
    servicesTitle: "Our Ethereum Development Services",
    services: [
      {
        title: "Ethereum dApp Development",
        desc: "Develop decentralized applications with smart contract integration for financial services, marketplaces, gaming, digital assets, and other business use cases."
      },
      {
        title: "Ethereum Smart Contract Development",
        desc: "Create, test, and deploy smart contracts that automate transactions, workflows, and business rules without relying on intermediaries."
      },
      {
        title: "Ethereum Token Development",
        desc: "Develop ERC-compatible tokens for utility, governance, payments, digital assets, and other blockchain applications."
      },
      {
        title: "Private Ethereum Blockchain Development",
        desc: "Build permissioned Ethereum networks for organizations requiring controlled access, private transactions, and enterprise-focused blockchain infrastructure."
      },
      {
        title: "Ethereum Node Development",
        desc: "Set up and configure Ethereum nodes to support network connectivity, application infrastructure, blockchain data access, and transaction processing."
      },
      {
        title: "Ethereum Wallet Development",
        desc: "Develop secure wallets for managing Ethereum-based assets, with features tailored to your application's requirements."
      }
    ]
  },
  {
    id: "polkadot",
    name: "Polkadot Blockchain Development",
    cardTitle: "Polkadot",
    cardDesc: "Connect applications and assets across multiple blockchain networks with Polkadot development solutions.",
    accentColor: "#E6007A",
    accentRgb: "230, 0, 122",
    intro: "Polkadot enables interoperability between independent blockchain networks, allowing applications to exchange data and assets across connected chains.",
    queckoRole: "At Quecko, we develop Polkadot-based solutions focused on interoperability, scalability, cross-chain communication, and decentralized application development.",
    servicesTitle: "Polkadot Development Services",
    services: [
      {
        title: "Polkadot dApp Development",
        desc: "Build decentralized applications designed for cross-chain functionality."
      },
      {
        title: "Parachain Development",
        desc: "Develop customized blockchain networks connected to the Polkadot ecosystem."
      },
      {
        title: "Cross-Chain Solutions",
        desc: "Enable secure communication and asset or data transfers between blockchain networks."
      },
      {
        title: "Smart Contract Development",
        desc: "Build and integrate smart contract functionality based on project requirements."
      },
      {
        title: "Polkadot Consulting",
        desc: "Plan blockchain architecture, network integration, technology selection, and development strategies."
      }
    ],
    benefitsTitle: "Key Benefits of Polkadot",
    benefits: [
      { title: "Interoperability", desc: "Connect different blockchain networks and enable cross-chain communication." },
      { title: "Scalability", desc: "Distribute workloads across connected networks to support scalable applications." },
      { title: "Shared Security", desc: "Leverage the Polkadot ecosystem’s shared security model for connected blockchain networks." },
      { title: "Cross-Chain Communication", desc: "Transfer data and digital assets between compatible blockchain networks." },
      { title: "Flexible Architecture", desc: "Develop customized blockchain solutions for specific application and business requirements." }
    ]
  },
  {
    id: "sui",
    name: "Sui Blockchain Development",
    cardTitle: "Sui",
    cardDesc: "Build scalable Web3 applications with Sui’s object-centric blockchain architecture.",
    accentColor: "#34A2E6",
    accentRgb: "52, 162, 230",
    intro: "Sui is a Layer 1 blockchain designed for scalable digital asset applications, decentralized finance, gaming, and Web3 platforms. Its object-centric data model and parallel transaction execution support efficient processing of independent transactions.",
    queckoRole: "At Quecko, we develop Sui-based solutions including dApps, smart contracts, NFTs, DeFi platforms, and blockchain integrations.",
    servicesTitle: "Our Sui Development Services",
    services: [
      {
        title: "Sui dApp Development",
        desc: "Develop scalable decentralized applications using Sui's architecture for gaming, DeFi, digital assets, payments, and other Web3 use cases."
      },
      {
        title: "Sui Smart Contract Development",
        desc: "Build and deploy secure smart contracts using Move, with functionality tailored to your application's requirements."
      },
      {
        title: "Sui NFT Development",
        desc: "Create NFT platforms and digital asset solutions with support for minting, ownership, trading, and marketplace functionality."
      },
      {
        title: "Sui DeFi Development",
        desc: "Develop decentralized financial applications for lending, borrowing, staking, asset management, and other DeFi use cases."
      },
      {
        title: "Sui Blockchain Consulting",
        desc: "Get technical guidance on Sui adoption, architecture, development strategy, security, and blockchain integration."
      },
      {
        title: "Sui Integration Services",
        desc: "Integrate Sui blockchain functionality with existing applications, databases, APIs, and business systems."
      }
    ],
    benefitsTitle: "Key Features of Sui",
    benefits: [
      { title: "Object-Centric Data Model", desc: "Sui represents digital assets as programmable objects with defined ownership and properties, supporting efficient asset management." },
      { title: "Parallel Transaction Processing", desc: "Independent transactions can be processed in parallel, helping applications improve transaction throughput and performance." },
      { title: "Move Programming Language", desc: "Sui uses Move, a programming language designed for secure digital asset management and smart contract development." },
      { title: "Fast Transaction Finality", desc: "Sui is designed to provide rapid transaction processing and confirmation for supported use cases." },
      { title: "On-Chain Asset Storage", desc: "Digital assets and their associated data can be managed directly on-chain, supporting transparent and verifiable ownership." },
      { title: "Programmable Transaction Blocks", desc: "Developers can combine multiple operations into programmable transaction blocks to execute complex blockchain interactions efficiently." }
    ],
    industriesTitle: "Industries We Serve",
    industries: [
      { title: "Healthcare", desc: "Develop secure solutions for patient data management, medical supply chains, and data verification." },
      { title: "Real Estate", desc: "Enable property tokenization, automated agreements, digital ownership, and transparent transaction management." },
      { title: "BFSI", desc: "Build blockchain-based payment systems, financial applications, fraud prevention solutions, and automated insurance workflows." },
      { title: "Agriculture", desc: "Improve supply chain traceability, product verification, sustainability tracking, and agricultural data management." },
      { title: "Logistics", desc: "Develop solutions for shipment tracking, supply chain visibility, automated agreements, and transaction management." },
      { title: "Retail", desc: "Enable product authentication, digital payments, asset tracking, and transparent supply chain management." },
      { title: "Entertainment", desc: "Build NFT platforms, digital ownership systems, royalty management solutions, and decentralized creator ecosystems." },
      { title: "Education", desc: "Develop blockchain-based credential verification, digital certificates, and secure academic record management." },
      { title: "Energy", desc: "Build solutions for energy tracking, digital asset management, peer-to-peer energy trading, and renewable energy data management." }
    ]
  }
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



function ChainBrandIcon({ id, isActive }) {
  const color = isActive ? "#000000" : "#636366";
  const props = { 
    width: 28, 
    height: 28, 
    viewBox: "0 0 24 24", 
    fill: "none", 
    stroke: color, 
    strokeWidth: 1.8, 
    strokeLinecap: "round", 
    strokeLinejoin: "round" 
  };
  switch (id) {
    case "bnb":
      return (
        <svg {...props}>
          <path d="M12 2L5 9l7 7 7-7-7-7z" fill={isActive ? color : "none"} fillOpacity={isActive ? 0.2 : 0} />
          <path d="M5 9l-4 4 4 4 4-4-4-4z" />
          <path d="M19 9l-4 4 4 4 4-4-4-4z" />
          <path d="M12 16l-7 7 7 7 7-7-7-7z" />
        </svg>
      );
    case "solana":
      return (
        <svg {...props}>
          <path d="M4 6h16l-3 4H1L4 6z" fill={color} fillOpacity={isActive ? 0.95 : 0.4} />
          <path d="M20 12H4l3 4h16l-3-4z" fill={color} fillOpacity={isActive ? 0.95 : 0.4} />
          <path d="M4 18h16l-3 4H1L4 18z" fill={color} fillOpacity={isActive ? 0.95 : 0.4} />
        </svg>
      );
    case "ethereum":
      return (
        <svg {...props}>
          <path d="M12 2L4 11.5L12 16L20 11.5L12 2Z" fill={isActive ? color : "none"} fillOpacity={isActive ? 0.25 : 0} />
          <path d="M12 16L4 11.5L12 22L20 11.5L12 16Z" fill={isActive ? color : "none"} fillOpacity={isActive ? 0.4 : 0} />
          <path d="M12 2V16" />
          <path d="M12 16V22" />
        </svg>
      );
    case "polkadot":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3.5" fill={isActive ? color : "none"} />
          <circle cx="5" cy="5" r="2" fill={isActive ? color : "none"} />
          <circle cx="19" cy="5" r="2" fill={isActive ? color : "none"} />
          <circle cx="5" cy="19" r="2" fill={isActive ? color : "none"} />
          <circle cx="19" cy="19" r="2" fill={isActive ? color : "none"} />
          <line x1="7.5" y1="7.5" x2="9.5" y2="9.5" />
          <line x1="16.5" y1="7.5" x2="14.5" y2="9.5" />
          <line x1="7.5" y1="16.5" x2="9.5" y2="14.5" />
          <line x1="16.5" y1="16.5" x2="14.5" y2="14.5" />
        </svg>
      );
    case "sui":
      return (
        <svg {...props}>
          <path d="M12 2c0 0-8 7-8 12 0 4.4 3.6 8 8 8s8-3.6 8-8c0-5-8-12-8-12z" fill={isActive ? color : "none"} fillOpacity={isActive ? 0.3 : 0} />
          <path d="M8 12.5c0 0 2-2 4-2s4 2 4 2" />
          <path d="M6 15.5c0 0 3-2.5 6-2.5s6 2.5 6 2.5" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
  }
}

/* ── MAIN COMPONENT ────────────────────────────────────────── */

export default function L1L2LandingClient() {
  const pageRef = useRef(null);
  const timelineTrackRef = useRef(null);
  const timelineWrapperRef = useRef(null);
  const l1PinnedWrapperRef = useRef(null);
  const l1ScrollTriggerRef = useRef(null);
  const [expandedCap, setExpandedCap] = useState(0);
  const [activeChainIndex, setActiveChainIndex] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState("services");
  const [videoReady, setVideoReady] = useState(false);
  const lottieContainerRef = useRef(null);
  const activeChainIndexRef = useRef(activeChainIndex);

  useEffect(() => {
    activeChainIndexRef.current = activeChainIndex;
  }, [activeChainIndex]);

  const scrollToChain = (idx) => {
    setActiveChainIndex(idx);
    setActiveSubTab("services");
    const st = l1ScrollTriggerRef.current;
    if (st && typeof window !== "undefined") {
      const step = 1 / (LAYER1_CHAINS.length - 1);
      const targetScroll = st.start + idx * step * (st.end - st.start);
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth"
      });
    }
  };

  /* ── Load green Lottie animation in context section ── */
  useEffect(() => {
    let anim;
    import("lottie-web").then((lottieModule) => {
      const Lottie = lottieModule.default || lottieModule;
      if (lottieContainerRef.current) {
        anim = Lottie.loadAnimation({
          container: lottieContainerRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "/DEFI-lottie-green.json"
        });
      }
    });

    return () => {
      if (anim) anim.destroy();
    };
  }, []);

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

  /* ── Pinned & Horizontal ScrollTriggers in DOM order ── */
  useGSAP(() => {
    const mm = gsap.matchMedia();

    /* 1. Pinned Layer 1 Showcase ScrollTrigger with Snap (First pinned section in DOM) */
    mm.add("(min-width: 900px)", () => {
      if (!l1PinnedWrapperRef.current) return;
      const pinTrigger = ScrollTrigger.create({
        trigger: l1PinnedWrapperRef.current,
        start: "top top",
        end: "+=2600",
        pin: true,
        scrub: 0.4,
        anticipatePin: 1,
        refreshPriority: 10,
        snap: {
          snapTo: (val) => {
            const step = 1 / (LAYER1_CHAINS.length - 1);
            return Math.round(val / step) * step;
          },
          duration: { min: 0.2, max: 0.5 },
          delay: 0.05,
          ease: "power2.out"
        },
        onUpdate: (self) => {
          const step = 1 / (LAYER1_CHAINS.length - 1);
          const rawIdx = Math.round(self.progress / step);
          const idx = Math.min(LAYER1_CHAINS.length - 1, Math.max(0, rawIdx));
          if (idx !== activeChainIndexRef.current) {
            setActiveChainIndex(idx);
            setActiveSubTab("services");
          }
        }
      });
      l1ScrollTriggerRef.current = pinTrigger;
    });

    /* 2. Horizontal scroll timeline (Lower pinned section in DOM) */
    mm.add("(min-width: 769px)", () => {
      const track = timelineTrackRef.current;
      const wrapper = timelineWrapperRef.current;
      if (!track || !wrapper) return;

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth + 140),
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "center center",
          end: () => `+=${track.scrollWidth - window.innerWidth + 140}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 5
        }
      });
    });

    // Sort and refresh triggers so all pin spacers and offsets calculate accurately
    ScrollTrigger.sort();
    ScrollTrigger.refresh();
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
              <h1 className="mainpara">Layer 1 Blockchain Development Services</h1>
              <p className="para">
                Build secure, scalable, and high-performance blockchain solutions with Layer 1 networks designed for decentralized applications, digital assets, financial platforms, and enterprise use cases.
              </p>
              <div className="hero-ctas">
                <Link href="/contact" className="btn-primary">
                  Talk to an Engineer
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
          3. PINNED LAYER 1 BLOCKCHAIN DEVELOPMENT SHOWCASE
          ══════════════════════════════════════════════════════ */}
      <section 
        className="l1-pinned-section" 
        ref={l1PinnedWrapperRef}
        id="layer-1-services"
      >
        <div className="l1-pinned-sticky-inner">
          <div className="l1-pinned-container">
            <div className="l1-pinned-body">
              {/* LEFT TIMELINE: ONLY ICONS VERTICALLY FROM TOP TO BOTTOM */}
              <div className="l1-timeline-col">
                <div className="l1-timeline-rail">
                  <div className="timeline-track-line" />
                  <div 
                    className="timeline-fill-line" 
                    style={{ 
                      height: `${(activeChainIndex / (LAYER1_CHAINS.length - 1)) * 100}%` 
                    }} 
                  />
                  <div className="timeline-nodes-list" role="tablist" aria-label="Layer 1 Blockchain Networks">
                    {LAYER1_CHAINS.map((chain, idx) => {
                      const isActive = activeChainIndex === idx;
                      return (
                        <button
                          key={chain.id}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          aria-label={`Switch to ${chain.cardTitle}`}
                          className={`timeline-node-btn ${isActive ? "active" : ""}`}
                          onClick={() => scrollToChain(idx)}
                        >
                          <ChainBrandIcon id={chain.id} isActive={isActive} />
                          <span className="node-tooltip">{chain.cardTitle}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* CENTERED RIGHT: EQUAL SPACING, CONTENT OF SPECIFIC SECTION */}
              <div className="l1-content-col">
                {(() => {
                  const currentChain = LAYER1_CHAINS[activeChainIndex] || LAYER1_CHAINS[0];
                  return (
                    <div 
                      className="l1-showcase-card"
                      key={currentChain.id}
                    >
                      {/* Card Header */}
                      <div className="card-top-bar">
                        <div className="card-title-meta">
                          <div className="chain-badge-pill">
                            <span className="lime-dot" />
                            <span>{currentChain.cardTitle}</span>
                          </div>
                          <h3 className="card-tagline">{currentChain.cardDesc}</h3>
                        </div>
                        <Link href="/contact" className="card-direct-cta">
                          <span>Talk to an Engineer</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </Link>
                      </div>

                      {/* Overview Paragraphs */}
                      <div className="card-overview-prose">
                        <h4 className="overview-headline">{currentChain.name} Services</h4>
                        <p>{currentChain.intro}</p>
                        <p className="quecko-role">{currentChain.queckoRole}</p>
                      </div>

                      {/* Sub-Tabs Selector */}
                      <div className="card-subtabs-nav">
                        <button
                          type="button"
                          className={`subtab-btn ${activeSubTab === "services" ? "active" : ""}`}
                          onClick={() => setActiveSubTab("services")}
                        >
                          <span>Our {currentChain.cardTitle} Services</span>
                          <span className="tab-count">{currentChain.services.length}</span>
                        </button>

                        {currentChain.benefits && (
                          <button
                            type="button"
                            className={`subtab-btn ${activeSubTab === "benefits" ? "active" : ""}`}
                            onClick={() => setActiveSubTab("benefits")}
                          >
                            <span>{currentChain.benefitsTitle}</span>
                            <span className="tab-count">{currentChain.benefits.length}</span>
                          </button>
                        )}

                        {currentChain.industries && (
                          <button
                            type="button"
                            className={`subtab-btn ${activeSubTab === "industries" ? "active" : ""}`}
                            onClick={() => setActiveSubTab("industries")}
                          >
                            <span>{currentChain.industriesTitle}</span>
                            <span className="tab-count">{currentChain.industries.length}</span>
                          </button>
                        )}
                      </div>

                      {/* Content Pane */}
                      <div className="card-subtab-pane">
                        {activeSubTab === "services" && (
                          <div className="services-grid-pane">
                            {currentChain.services.map((srv, sIdx) => (
                              <div key={sIdx} className="service-bubble">
                                <div className="bubble-icon">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </div>
                                <div className="bubble-text">
                                  <h5>{srv.title}</h5>
                                  <p>{srv.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {activeSubTab === "benefits" && currentChain.benefits && (
                          <div className="benefits-grid-pane">
                            {currentChain.benefits.map((ben, bIdx) => (
                              <div key={bIdx} className="benefit-bubble">
                                <span className="bubble-num">0{bIdx + 1}</span>
                                <h5>{ben.title}</h5>
                                <p>{ben.desc}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {activeSubTab === "industries" && currentChain.industries && (
                          <div className="industries-grid-pane">
                            {currentChain.industries.map((ind, iIdx) => (
                              <div key={iIdx} className="industry-bubble">
                                <div className="ind-header">
                                  <span className="ind-lime-dot" />
                                  <h5>{ind.title}</h5>
                                </div>
                                <p>{ind.desc}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </div>
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

            {/* Lottie Animation — recolored to branding green */}
            <div className="context-visual-side" ref={lottieContainerRef}>
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

        <div className="timeline-scroll-wrapper" ref={timelineWrapperRef}>
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
              Talk to an Engineer
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
