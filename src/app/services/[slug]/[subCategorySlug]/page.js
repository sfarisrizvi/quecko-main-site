import React from "react";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Stories from "@/components/sections/Stories";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQAccordion from "@/components/sections/FAQAccordion";
import TechLogo from "@/components/sections/TechLogo";
import PublicChains from "@/components/sections/PublicChains";
import { getInternalPageData, getAllInternalPages } from "@/Utils/internalPagesParser";

export const dynamicParams = false;

// Dynamic SVG Icon Selector for Capabilities
function getIconForCapability(title = "") {
  const t = title.toLowerCase().trim();

  // Explicit overrides for Coin & Token Development to prevent duplicates
  if (t === "coin & token engineering") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8a2.5 2.5 0 0 1 2 1.5" />
        <path d="M12 12a2.5 2.5 0 0 0 0 5" />
        <path d="M12 6v12" />
      </svg>
    );
  }
  if (t === "ico fundraising infrastructure") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    );
  }
  if (t === "semi-fungible tokens (sfts)") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }
  if (t === "nft lending & collateral engines") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    );
  }
  if (t === "on-chain vesting & lockups") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    );
  }
  if (t === "liquidity bootstrapping & launch support") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
      </svg>
    );
  }

  // Explicit overrides for Web3 Enterprise Solutions to prevent duplicates
  if (t === "enterprise consortium & private networks") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="19" cy="5" r="3" />
        <circle cx="5" cy="19" r="3" />
        <circle cx="19" cy="19" r="3" />
        <circle cx="5" cy="5" r="3" />
        <line x1="12" y1="12" x2="19" y2="5" />
        <line x1="12" y1="12" x2="5" y2="19" />
        <line x1="12" y1="12" x2="19" y2="19" />
        <line x1="12" y1="12" x2="5" y2="5" />
      </svg>
    );
  }
  if (t === "government digital registries & citizen portals") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="22" x2="21" y2="22" />
        <line x1="6" y1="18" x2="6" y2="11" />
        <line x1="10" y1="18" x2="10" y2="11" />
        <line x1="14" y1="18" x2="14" y2="11" />
        <line x1="18" y1="18" x2="18" y2="11" />
        <polygon points="12 2 2 7 22 7 12 2" />
      </svg>
    );
  }
  if (t === "automated trade finance & settlement") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    );
  }
  if (t === "parametric insurance & oracle claims") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-3a4 4 0 0 0-4-4H5" />
        <path d="M3 12a9 9 0 0 1 18 0" />
      </svg>
    );
  }
  if (t === "on-chain kyc & aml compliance engines") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 11 2 2 4-4" />
      </svg>
    );
  }
  if (t === "carbon credit registries & esg tracking") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 2 2 4 0 4.25-5.66 7-8.5 8.5C11 16.5 11 20 11 20z" />
        <path d="M19 2c-2.26 4.33-5.27 7.14-8 8" />
      </svg>
    );
  }

  // Explicit overrides for DeFi Platforms to prevent duplicates
  if (t === "amm & concentrated liquidity pools") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
      </svg>
    );
  }
  if (t === "lending, borrowing & collateral rails") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    );
  }
  if (t === "yield farming & auto-compounding vaults") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 20h10" />
        <path d="M10 20V14a2 2 0 0 1 4 0v6" />
        <path d="M12 11a4 4 0 0 1 4-4h2" />
        <path d="M12 11a4 4 0 0 0-4-4H6" />
      </svg>
    );
  }
  if (t === "staking & liquid staking protocols") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    );
  }
  if (t === "on-chain lotteries & vrf draw games") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M13 5v2" />
        <path d="M13 17v2" />
        <path d="M13 11v2" />
      </svg>
    );
  }
  if (t === "cross-chain defi & bridge aggregations") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m16 3 4 4-4 4" />
        <path d="M20 7H4" />
        <path d="m8 21-4-4 4-4" />
        <path d="M4 17h16" />
      </svg>
    );
  }

  // Explicit overrides for Web3 Compliance & Legal Advisory to prevent duplicates
  if (t === "regulatory strategy & market entry consulting") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    );
  }
  if (t === "crypto licensing & registry support") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    );
  }
  if (t === "legal structuring & token launches") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="5" y1="7" x2="19" y2="7" />
        <path d="M5 7v10a7 7 0 0 0 14 0V7" />
      </svg>
    );
  }
  if (t === "aml/cft policies & travel rule protocols") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5V15a2 2 0 0 1 2-2h14" />
        <path d="M20 6v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
      </svg>
    );
  }
  if (t === "whitepaper & marketing legal reviews") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    );
  }
  if (t === "data privacy, tax & institutional frameworks") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <rect width="8" height="5" x="8" y="11" rx="1" />
        <path d="M10 11V9a2 2 0 1 1 4 0v2" />
      </svg>
    );
  }

  // 1. Agent / Bot / Assistant / AI
  if (t.includes("agent") || t.includes("copilot") || t.includes("assistant") || t.includes("chatbot") || t.includes("ai") || t.includes("machine") || t.includes("intelligence")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    );
  }

  // 2. Specific Financial Rails: Neobank / Payment / Stablecoin / Remittance / Lending / CBDC / ICO (Placed high to take precedence)
  if (t.includes("neobank") || t.includes("core banking") || t.includes("banking core")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="22" x2="21" y2="22" />
        <line x1="6" y1="18" x2="6" y2="11" />
        <line x1="10" y1="18" x2="10" y2="11" />
        <line x1="14" y1="18" x2="14" y2="11" />
        <line x1="18" y1="18" x2="18" y2="11" />
        <polygon points="12 2 2 7 22 7 12 2" />
      </svg>
    );
  }
  if (t.includes("gateway") || t.includes("checkout") || t.includes("payment")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    );
  }
  if (t.includes("stablecoin") || t.includes("minting") || t.includes("reserves") || t.includes("ico") || t.includes("tokenomics")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="6" />
        <circle cx="18" cy="18" r="4" />
        <path d="M12 18a6 6 0 0 0-6-6" />
      </svg>
    );
  }
  if (t.includes("remittance") || t.includes("cross-border") || t.includes("transfer")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m16 3 4 4-4 4" />
        <path d="M20 7H4" />
        <path d="m8 21-4-4 4-4" />
        <path d="M4 17h16" />
      </svg>
    );
  }
  if (t.includes("lending") || t.includes("yield") || t.includes("collateral") || t.includes("loan")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    );
  }
  if (t.includes("cbdc") || t.includes("national") || t.includes("wholesale")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  }

  // 3. Blockchain / Web3 / Crypto / Token / Smart Contract / Launchpad
  if (t.includes("blockchain") || t.includes("web3") || t.includes("crypto") || t.includes("token") || t.includes("smart contract") || t.includes("nft") || t.includes("defi") || t.includes("exchange") || t.includes("launchpad")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    );
  }

  // 4. Database / Memory / Vector Store / Ledger
  if (t.includes("database") || t.includes("memory") || t.includes("vector") || t.includes("storage") || t.includes("ledger") || t.includes("rwa") || t.includes("data") || t.includes("cms")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }

  // 5. API / Connection / Orchestration / Integration / Cloud
  if (t.includes("api") || t.includes("orchestration") || t.includes("integration") || t.includes("tool") || t.includes("bridge") || t.includes("cross-chain") || t.includes("cloud") || t.includes("saas") || t.includes("platform")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
        <path d="M8 20v-4" />
        <path d="M12 20v-8" />
        <path d="M16 20v-6" />
      </svg>
    );
  }

  // 6. Security / Audit / Shield / Guardrails / Governance / Compliance / Legal / Regulatory / Licensing / Tax
  if (t.includes("security") || t.includes("audit") || t.includes("shield") || t.includes("guardrail") || t.includes("governance") || t.includes("compliance") || t.includes("safety") || t.includes("trust") || t.includes("quality") || t.includes("qa") || t.includes("legal") || t.includes("regulatory") || t.includes("licensing") || t.includes("aml") || t.includes("kyc") || t.includes("cft") || t.includes("travel rule") || t.includes("tax") || t.includes("whitepaper") || t.includes("privacy")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6v7z" />
      </svg>
    );
  }

  // 7. Analytics / Chart / Dashboards / Prediction / Growth / SEO
  if (t.includes("analytics") || t.includes("predictive") || t.includes("charts") || t.includes("dashboard") || t.includes("market") || t.includes("conversion") || t.includes("growth") || t.includes("seo") || t.includes("performance") || t.includes("scale") || t.includes("optimization")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <polyline points="4 10 10 4 16 10 22 4" />
      </svg>
    );
  }

  // 8. Automation / Process / Workflow / Speed
  if (t.includes("automation") || t.includes("workflow") || t.includes("process") || t.includes("whatsapp") || t.includes("telegram") || t.includes("speed") || t.includes("efficiency") || t.includes("agile") || t.includes("ci/cd") || t.includes("devops")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    );
  }

  // 9. Design / Creative / Brand / UI / UX / Mobile / App
  if (t.includes("design") || t.includes("creative") || t.includes("brand") || t.includes("ui") || t.includes("ux") || t.includes("positioning") || t.includes("graphics") || t.includes("mobile") || t.includes("app") || t.includes("ios") || t.includes("android")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  // 10. Games / Gaming / Entertainment
  if (t.includes("game") || t.includes("gaming") || t.includes("play") || t.includes("metaverse") || t.includes("roblox") || t.includes("unity") || t.includes("entertainment")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 12h4" />
        <path d="M8 10v4" />
        <circle cx="15" cy="13" r="1" />
        <circle cx="18" cy="11" r="1" />
      </svg>
    );
  }

  // Default: Code Bracket / Development
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export async function generateStaticParams() {
  const pages = getAllInternalPages();
  return pages.map(p => ({
    slug: p.categorySlug,
    subCategorySlug: p.subCategorySlug
  }));
}

export async function generateMetadata({ params }) {
  const { slug, subCategorySlug } = await params;
  const pageData = getInternalPageData(slug, subCategorySlug);

  if (!pageData) {
    return {
      title: "Service – Quecko",
      description: "Explore Quecko's digital product engineering and Web3 services."
    };
  }

  const LEGACY_SLUGS = ["coin-token-dev", "crypto-banking", "web3-enterprise", "web3-compliance"];
  const BANKING_SLUGS = [
    "cbdc-development",
    "crypto-payment-gateway",
    "neobank-development",
    "p2p-lending-platforms",
    "stablecoin-infrastructure",
    "stablecoin-remittance-platforms"
  ];
  const TOKEN_SLUGS = [
    "ico-development",
    "semi-fungible-tokens",
    "nft-lending"
  ];

  const canonicalSlug = LEGACY_SLUGS.includes(slug) ? "web3" : slug;
  let canonicalSubCategory = subCategorySlug;
  if (BANKING_SLUGS.includes(subCategorySlug)) {
    canonicalSubCategory = "crypto-banking";
  } else if (TOKEN_SLUGS.includes(subCategorySlug)) {
    canonicalSubCategory = "coin-token-development";
  }

  return {
    title: `${pageData.frontmatter.title}`,
    description: pageData.frontmatter["seo-meta-description"] || pageData.frontmatter.goal || "",
    keywords: pageData.frontmatter["seo-primary-keywords"] || [],
    alternates: {
      canonical: `https://quecko.com/services/${canonicalSlug}/${canonicalSubCategory}`
    }
  };
}

// Helper to parse markdown links [Text](url) and return them styled as hyperlinks with domains prepended
function parseTextWithMarkdownLinks(text) {
  if (!text) return "";
  
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index;
    
    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }
    
    const linkText = match[1];
    let linkUrl = match[2];
    
    if (linkUrl.startsWith('/')) {
      linkUrl = `https://quecko.com${linkUrl}`;
    }
    
    parts.push(
      <a 
        key={matchIndex} 
        href={linkUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="not-a-fit-link"
      >
        {linkText}
      </a>
    );
    
    lastIndex = regex.lastIndex;
  }
  
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return parts.length > 0 ? parts : text;
}

// Helpers for Gantt timeline parser and rendering
function getTimelineMetrics(timeframe, index, totalPhases, defaultMax = 90) {
  if (!timeframe) {
    const step = defaultMax / totalPhases;
    return { start: Math.round(index * step) + 1, end: Math.round((index + 1) * step) };
  }
  const match = timeframe.match(/Day\s+(\d+)[\u2013-]\s*(\d+)/i) || timeframe.match(/Day\s+(\d+)\s*-\s*(\d+)/i);
  if (match) {
    return { start: parseInt(match[1]), end: parseInt(match[2]) };
  }
  const step = defaultMax / totalPhases;
  const start = Math.round(index * step) + 1;
  const end = Math.round((index + 1) * step);
  return { start, end };
}

function parsePhaseParts(timeframe) {
  if (!timeframe) {
    return { days: "Ongoing", title: "Execution Phase" };
  }
  const match = timeframe.match(/Day\s+(\d+)[\u2013-]\s*(\d+)(?:\s*\(([^)]+)\))?/i) || timeframe.match(/Day\s+(\d+)\s*-\s*(\d+)(?:\s*\(([^)]+)\))?/i);
  if (match) {
    return {
      days: `Day ${match[1]}–${match[2]}`,
      title: match[3] ? match[3].trim() : 'Execution Phase'
    };
  }
  return {
    days: timeframe,
    title: 'Execution Phase'
  };
}

function getTechLogoUrl(tech) {
  let normalized = tech.toLowerCase().replace(/[^a-z0-9]/g, '');
  const map = {
    'nodejs': 'nodedotjs', 'reactjs': 'react', 'vuejs': 'vuedotjs', 'nextjs': 'nextdotjs',
    'aws': 'amazonaws', 'gcp': 'googlecloud', 'azure': 'microsoftazure', 'csharp': 'csharp',
    'cpp': 'cplusplus', 'postgres': 'postgresql', 'mongo': 'mongodb', 'chatgpt': 'openai', 'gpt4': 'openai'
  };
  normalized = map[normalized] || normalized;
  return `https://cdn.simpleicons.org/${normalized}`;
}

function getIconForPhase(index) {
  switch (index) {
    case 0:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      );
    case 1:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
      );
    case 2:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      );
    case 3:
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
          <line x1="2" y1="20" x2="22" y2="20" />
          <line x1="12" y1="16" x2="12" y2="20" />
        </svg>
      );
  }
}

export default async function SubCategoryPage({ params }) {
  const { slug, subCategorySlug } = await params;
  
  const LEGACY_SLUGS = ["coin-token-dev", "crypto-banking", "web3-enterprise", "web3-compliance"];
  const BANKING_SLUGS = [
    "cbdc-development",
    "crypto-payment-gateway",
    "neobank-development",
    "p2p-lending-platforms",
    "stablecoin-infrastructure",
    "stablecoin-remittance-platforms"
  ];
  const TOKEN_SLUGS = [
    "ico-development",
    "semi-fungible-tokens",
    "nft-lending"
  ];
  const ENTERPRISE_SLUGS = [
    "enterprise-blockchain-solutions",
    "government-blockchain-solutions",
    "blockchain-trade-finance",
    "blockchain-insurance",
    "kyc-aml-platforms",
    "carbon-credit-platforms"
  ];
  const DEFI_SLUGS = [
    "defi-yield-farming",
    "defi-lottery"
  ];
  const COMPLIANCE_SLUGS = [
    "regulatory-compliance-consulting",
    "crypto-licensing-registration-support",
    "legal-structuring-token-launches",
    "aml-cft-policy-framework-design",
    "whitepaper-documentation-legal-review",
    "data-privacy-cross-border-compliance",
    "crypto-tax-advisory",
    "regulatory-framework-development-institutions"
  ];

  if (LEGACY_SLUGS.includes(slug)) {
    let targetSub = subCategorySlug;
    if (BANKING_SLUGS.includes(subCategorySlug)) {
      targetSub = "crypto-banking";
    } else if (TOKEN_SLUGS.includes(subCategorySlug) || subCategorySlug === "coin-token-development") {
      targetSub = "coin-token-development";
    } else if (ENTERPRISE_SLUGS.includes(subCategorySlug) || subCategorySlug === "web3-enterprise-solutions") {
      targetSub = "web3-enterprise-solutions";
    } else if (DEFI_SLUGS.includes(subCategorySlug) || subCategorySlug === "defi-platforms") {
      targetSub = "defi-platforms";
    } else if (COMPLIANCE_SLUGS.includes(subCategorySlug) || subCategorySlug === "web3-compliance-legal-advisory") {
      targetSub = "web3-compliance-legal-advisory";
    }
    redirect(`/services/web3/${targetSub}`);
  }

  if (slug === "web3" && BANKING_SLUGS.includes(subCategorySlug)) {
    redirect("/services/web3/crypto-banking");
  }

  if (slug === "web3" && TOKEN_SLUGS.includes(subCategorySlug)) {
    redirect("/services/web3/coin-token-development");
  }

  if (slug === "web3" && ENTERPRISE_SLUGS.includes(subCategorySlug)) {
    redirect("/services/web3/web3-enterprise-solutions");
  }

  if (slug === "web3" && DEFI_SLUGS.includes(subCategorySlug)) {
    redirect("/services/web3/defi-platforms");
  }

  if (slug === "web3" && COMPLIANCE_SLUGS.includes(subCategorySlug)) {
    redirect("/services/web3/web3-compliance-legal-advisory");
  }

  const pageData = getInternalPageData(slug, subCategorySlug);

  if (!pageData) {
    return (
      <div style={{ padding: "120px 20px", textAlign: "center", minHeight: "60vh", background: "#FFFFFF", color: "#000000" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>404 - Service Page Not Found</h1>
        <p style={{ marginBottom: "30px", color: "#666" }}>We couldn&apos;t find the subcategory page you were looking for.</p>
        <Link href="/services" style={{ background: "#C1FF14", color: "#000", padding: "12px 24px", borderRadius: "100px", textDecoration: "none", fontWeight: "500" }}>
          Return to Services
        </Link>
      </div>
    );
  }

  const { frontmatter, sections, categoryName } = pageData;
  const cleanCategoryName = categoryName
    .replace(" Copy", "")
    .replace(" Solutions", "")
    .replace(" Engineering", "")
    .replace(" Systems", "")
    .replace(" Teams", "")
    .replace(" & Go-To-Market", "");

  const cleanSubTitle = frontmatter.title.split("|")[0].trim();

  return (
    <div className="web3-service-page">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://quecko.com" },
          { name: "Services", url: "https://quecko.com/services" },
          { name: cleanCategoryName, url: `https://quecko.com/services/${slug}` },
          { name: cleanSubTitle, url: `https://quecko.com/services/${slug}/${subCategorySlug}` }
        ]}
      />

      {/* 1. HERO SECTION */}
      <section className="smart_contract">
        <Header />
        <div className="inner_data">
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
                <Link href="/services"><p>Services</p></Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                  <path d="M5.25 11L8.75 7.5L5.25 4" stroke="#9D9D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <Link href={`/services/${slug}`}><p>{cleanCategoryName}</p></Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                  <path d="M5.25 11L8.75 7.5L5.25 4" stroke="#9D9D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{cleanSubTitle}</span>
              </div>
              <h1 className="mainpara">
                {(sections.hero?.headline || "").split(/[|—–]|\s+-\s+/)[0].trim()}
              </h1>
              <p className="para">{sections.hero?.subhead}</p>
              <div className="hero-ctas">
                <Link href="/contact" className="btn-primary">
                  {frontmatter["primary-cta"] || "Talk to an Engineer"}
                </Link>
                {sections.hero?.ctas?.[1] && (
                  <Link href="#portfolio" className="btn-secondary">
                    {sections.hero.ctas[1]}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GLOBAL STAT STRIP TICKER (Consistent Numeric Stats) */}
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

      {/* 3 & 4. PROBLEM & SOLUTION SECTION (THE CHALLENGE) */}
      {sections.challenge && (
        <section className="service-section">
          <div className="section-container">
            <div className="problem-solution-grid">
              <div className="problem-side">
                <span className="tagline">The Challenge</span>
                <div className="problem-card">
                  <h3>{sections.challenge.headline}</h3>
                  <p>{sections.challenge.body}</p>
                </div>
              </div>

              <div className="solution-side">
                <span className="tagline">The Solution</span>
                <h3 className="section-head" style={{ fontSize: "28px", marginBottom: "30px", lineHeight: "1.25" }}>
                  {frontmatter["solution-heading"] || `Engineering Production-Grade ${cleanSubTitle} Infrastructure`}
                </h3>
                
                {sections.process?.steps && sections.process.steps.length > 0 ? (
                  <div className="solution-steps">
                    {sections.process.steps.map((step, idx) => (
                      <div key={idx} className="step-item">
                        <div className="step-num">{idx + 1}</div>
                        <div className="step-body">
                          <h4>{step.title}</h4>
                          <p>{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: "#3A3A3C", fontSize: "16px", lineHeight: "1.6" }}>
                    Quecko approaches subcategory product challenges with full lifecycle planning, rigorous testing, and strict compliance alignment to guarantee long-term stability and seamless operation under heavy production load.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. CORE CAPABILITIES SECTION */}
      {sections.capabilities?.items && sections.capabilities.items.length > 0 && (
        <section className="service-section light-bg">
          <div className="section-container">
            <span className="tagline">Capabilities</span>
            <h2 className="section-head" style={{ marginBottom: "15px" }}>{sections.capabilities.headline || "Our Core Capabilities"}</h2>
            <p className="section-desc" style={{ marginBottom: "50px" }}>
              Explore our technical specialties, engineering practices, and developer skills.
            </p>

            <div className="capabilities-grid">
              {sections.capabilities.items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(0,0,0,0.06)",
                    padding: "36px",
                    borderRadius: "28px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  className="capability-hover-card"
                >
                  <div
                    style={{
                      background: "#000000",
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px",
                      color: "#C1FF14"
                    }}
                  >
                    {getIconForCapability(item.title)}
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#000000", marginBottom: "12px", fontFamily: "Aeonik" }}>
                    {item.title || `Specialized Service ${idx + 1}`}
                  </h3>
                  <p style={{ fontSize: "15px", color: "#48484A", lineHeight: "1.5", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5.5. PUBLIC CHAINS SECTION */}
      {sections.publicChains?.chains && sections.publicChains.chains.length > 0 && (
        <PublicChains data={sections.publicChains} />
      )}



      {/* 7. PROJECT BLUEPRINT / TIMELINE */}
      {sections.blueprint?.timeline && sections.blueprint.timeline.length > 0 && (
        <section className="service-section light-bg">
          <div className="section-container">
            <span className="tagline">Execution Blueprint</span>
            <h2 className="section-head" style={{ marginBottom: "15px" }}>{sections.blueprint.headline || "Project Execution Timeline"}</h2>
            <p className="section-desc" style={{ marginBottom: "50px" }}>
              How we take your {cleanSubTitle} requirements from day 1 to production delivery.
            </p>

            {/* Horizontal Gantt chart layout replacing vertical timeline */}
            {(() => {
              const rawPhases = sections.blueprint.timeline.filter(
                (phase) => phase.timeframe || phase.desc
              );
              
              const rawEnds = rawPhases.map((phase) => {
                if (!phase.timeframe) return 0;
                const match = phase.timeframe.match(/Day\s+(\d+)[\u2013-]\s*(\d+)/i) || phase.timeframe.match(/Day\s+(\d+)\s*-\s*(\d+)/i);
                return match ? parseInt(match[2]) : 0;
              });
              const totalDays = Math.max(...rawEnds, 0) || 90;

              const parsedPhases = rawPhases.map((phase, idx) => {
                const metrics = getTimelineMetrics(phase.timeframe, idx, rawPhases.length, totalDays);
                return { ...phase, ...metrics };
              });

              return (
                <div className="gantt-timeline-container">
                  {/* Horizontal Gantt Board Grid for Desktop/Tablet */}
                  <div className="gantt-board-wrapper">
                    {/* Header Columns and Bracket braces */}
                    <div className="gantt-headers">
                      <div className="gantt-header-col group-discovery">
                        <span className="gantt-header-title">Discovery</span>
                        <div className="gantt-bracket-line" />
                      </div>
                      <div className="gantt-header-col group-design">
                        <span className="gantt-header-title">Design & Build</span>
                        <div className="gantt-bracket-line" />
                      </div>
                      <div className="gantt-header-col group-delivery">
                        <span className="gantt-header-title">Delivery & Launch</span>
                        <div className="gantt-bracket-line" />
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="gantt-chart-area">
                      {/* Grid Lines */}
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="gantt-grid-line"
                          style={{ left: `${(i + 1) * 11.1}%` }}
                        />
                      ))}

                      {/* Staggered Rows */}
                      <div className="gantt-rows-container">
                        {parsedPhases.map((phase, idx) => {
                          const { days, title } = parsePhaseParts(phase.timeframe);
                          const isLast = idx === parsedPhases.length - 1;
                          const left = ((phase.start - 1) / totalDays) * 100;
                          const width = ((phase.end - phase.start + 1) / totalDays) * 100;

                          return (
                            <div key={idx} className="gantt-row">
                              <div
                                className={`gantt-capsule ${isLast ? 'gantt-capsule-active' : ''}`}
                                style={{
                                  left: `${left}%`,
                                  width: `${width}%`
                                }}
                              >
                                <div className="gantt-capsule-content">
                                  <span className="gantt-capsule-title">{title}</span>
                                  <span className="gantt-capsule-days">{days}</span>
                                </div>
                                <div className="gantt-tooltip">
                                  <div className="gantt-tooltip-arrow" />
                                  <span className="gantt-tooltip-timeframe">{days} — {title}</span>
                                  <p className="gantt-tooltip-desc">{phase.desc}</p>
                                </div>
                                <div className="gantt-capsule-icon-circle">
                                  {getIconForPhase(idx)}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Accessible descriptive list (Visible on all viewports, becomes mobile fallback) */}
                  <div className="gantt-details-list">
                    {parsedPhases.map((phase, idx) => {
                      const { days, title } = parsePhaseParts(phase.timeframe);
                      return (
                        <div key={idx} className="gantt-details-item">
                          <div className="gantt-details-num">{idx + 1}</div>
                          <div className="gantt-details-body">
                            <h4>{days} — {title}</h4>
                            <p>{phase.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
      )}

      {/* 8. TECH STACK SECTION */}
      {sections.techStack?.categories && sections.techStack.categories.length > 0 && (
        <section className="service-section">
          <div className="section-container">
            <span className="tagline">Technology</span>
            <h2 className="section-head" style={{ marginBottom: "15px" }}>{sections.techStack.headline || "Our Tech Stack"}</h2>
            <p className="section-desc" style={{ marginBottom: "50px" }}>
              Tools, frameworks, and protocols we use to build secure and scalable solutions.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {sections.techStack.categories.map((cat, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#F4F4F4",
                    border: "1px solid rgba(0,0,0,0.03)",
                    padding: "30px",
                    borderRadius: "24px",
                  }}
                >
                  <h4 style={{ fontSize: "16px", fontWeight: "600", textTransform: "uppercase", color: "#8E8E93", marginBottom: "20px", letterSpacing: "0.05em", fontFamily: "Orbitron" }}>
                    {cat.name}
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {cat.items.map((tech, tIdx) => (
                      <div
                        key={tIdx}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid rgba(0,0,0,0.05)",
                          padding: "6px 12px",
                          borderRadius: "100px",
                          fontSize: "14px",
                          color: "#1C1C1E",
                          fontWeight: "500",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px"
                        }}
                      >
                        <TechLogo 
                          src={getTechLogoUrl(tech)} 
                          alt={tech}
                          fallback={getIconForCapability(tech)}
                        />
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. WHY CHOOSE QUECKO / DIFFERENTIATION (OUR EDGE) */}
      {sections.whyChoose && (
        <section className="service-section light-bg">
          <div className="section-container">
            {/* Header Layout */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "40px", flexWrap: "wrap", marginBottom: "50px" }}>
              <div style={{ flex: "1", minWidth: "280px" }}>
                <span className="tagline">Our Edge</span>
                <h2 className="section-head" style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: "1.1", margin: "0 0 20px 0" }}>
                  {sections.whyChoose.headline || "Why Choose Quecko"}
                </h2>
                <p style={{ fontSize: "17px", color: "#48484A", lineHeight: "1.5", maxWidth: "800px" }}>
                  {sections.whyChoose.subhead || sections.whyChoose.items?.[0]?.desc || "We apply traditional software engineering rigor to next-generation AI and blockchain solutions, creating resilient systems that scale."}
                </p>
              </div>
            </div>

            {/* Differentiators Cards Grid */}
            {sections.whyChoose.items && sections.whyChoose.items.length > 0 && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "24px" }}>
                {sections.whyChoose.items.map((diff, idx) => {
                  if (!diff.title && !diff.desc) return null;
                  return (
                    <div
                      key={idx}
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid #E5E5EA",
                        padding: "36px",
                        borderRadius: "28px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        transition: "border-color 0.3s ease",
                      }}
                      className="edge-hover-card"
                    >
                      <div style={{ background: "rgba(193, 255, 20, 0.08)", width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#000000" }}>
                        {getIconForCapability(diff.title)}
                      </div>
                      <div>
                        <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#000000", marginBottom: "8px", fontFamily: "Aeonik" }}>
                          {diff.title}
                        </h4>
                        <p style={{ fontSize: "14px", color: "#48484A", lineHeight: "1.55", margin: 0 }}>
                          {diff.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 10. PORTFOLIO SHOWCASE */}
      <div id="portfolio">
        <Projects />
      </div>

      {/* 11. SOCIAL PROOF / SERVICE-SPECIFIC SOCIAL PROOF */}
      {sections.socialProof?.quotes && sections.socialProof.quotes.length > 0 ? (
        <section className="service-section light-bg">
          <div className="section-container" style={{ maxWidth: "900px", textAlign: "center" }}>
            <span className="tagline">Social Proof</span>
            
            {sections.socialProof.quotes.map((q, idx) => (
              <div key={idx} style={{ marginTop: "30px" }}>
                <p style={{ fontSize: "clamp(18px, 3vw, 26px)", fontStyle: "italic", lineHeight: "1.45", color: "#000000", marginBottom: "30px" }}>
                  &ldquo;{q.quote}&rdquo;
                </p>
                <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center" }}>
                  <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#000", margin: "0 0 4px 0" }}>{q.author}</h4>
                  <span style={{ fontSize: "14px", color: "#636366" }}>{q.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <Testimonials />
      )}

      {/* 12. ENGAGEMENT MODELS */}
      {sections.engagement?.items && sections.engagement.items.length > 0 && (
        <section className="service-section">
          <div className="section-container">
            <span className="tagline">Engagement</span>
            <h2 className="section-head" style={{ marginBottom: "50px" }}>How We Collaborate</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {sections.engagement.items.map((model, idx) => {
                if (!model.name && !model.desc) return null;
                return (
                  <div
                    key={idx}
                    style={{
                      background: "#F4F4F4",
                      border: "1px solid rgba(0,0,0,0.03)",
                      padding: "36px",
                      borderRadius: "28px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#000", marginBottom: "16px", fontFamily: "Aeonik" }}>
                      {model.name}
                    </h3>
                    <p style={{ fontSize: "14px", color: "#48484A", lineHeight: "1.55", margin: 0 }}>
                      {model.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 13. OBJECTION HANDLING / FAQS */}
      {sections.faqs?.faqs && sections.faqs.faqs.length > 0 && (
        <section className="service-section light-bg">
          <div className="section-container">
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span className="tagline">FAQ</span>
              <h2 className="section-head" style={{ margin: "0 auto" }}>
                Frequently Asked Questions
              </h2>
            </div>

            <FAQAccordion faqs={sections.faqs.faqs} />
          </div>
        </section>
      )}

      {/* 14. BLOG & STORIES */}
      <Stories />

      {/* 15. FINAL CTA SECTION */}
      {sections.finalCta && (
        <section className="cta-section">
          <div className="section-container">
            <h2>{sections.finalCta.headline}</h2>
            <p>{sections.finalCta.body}</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn-primary">
                {frontmatter["primary-cta"] || "Talk to an Engineer"}
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View Our Portfolio
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
