import React from "react";
import Link from "next/link";
import Image from "next/image";
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
import CoreCapabilitiesAnimated from "@/components/sections/CoreCapabilitiesAnimated";
import ThemeToggleV2 from "@/components/sections/ThemeToggleV2";
import ChallengeAnimatedV2 from "@/components/sections/ChallengeAnimatedV2";
import BlueprintAnimatedV2 from "@/components/sections/BlueprintAnimatedV2";
import TechStackV2 from "@/components/sections/TechStackV2";
import WhyChooseV2 from "@/components/sections/WhyChooseV2";
import EngagementV2 from "@/components/sections/EngagementV2";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";
import StatsTickerV2 from "@/components/sections/StatsTickerV2";
import FaqSectionV2 from "@/components/sections/FaqSectionV2";



// Dynamic SVG Icon Selector for Capabilities
function getIconForCapability(title = "") {
  const t = title.toLowerCase();

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

  // 3. Blockchain / Web3 / Crypto / Token / Smart Contract / Launchpad / Liquidity
  if (t.includes("blockchain") || t.includes("web3") || t.includes("crypto") || t.includes("token") || t.includes("smart contract") || t.includes("nft") || t.includes("defi") || t.includes("exchange") || t.includes("launchpad") || t.includes("launch") || t.includes("liquidity")) {
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

  // 6. Security / Audit / Shield / Guardrails / Governance / Compliance / Legal / Regulatory / Licensing / Tax / Vesting
  if (t.includes("security") || t.includes("audit") || t.includes("shield") || t.includes("guardrail") || t.includes("governance") || t.includes("compliance") || t.includes("safety") || t.includes("trust") || t.includes("quality") || t.includes("qa") || t.includes("legal") || t.includes("regulatory") || t.includes("licensing") || t.includes("aml") || t.includes("kyc") || t.includes("cft") || t.includes("travel rule") || t.includes("tax") || t.includes("whitepaper") || t.includes("privacy") || t.includes("vesting") || t.includes("lockup")) {
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



export async function generateMetadata() {
  const pageData = getInternalPageData("web3", "blockchain-trade-finance");
  if (!pageData) return { title: "V2 Page" };
  return {
    title: `${pageData.frontmatter.title} | V2`,
    description: pageData.frontmatter["seo-meta-description"] || "",
    keywords: pageData.frontmatter["seo-primary-keywords"] || []
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

export default async function BlockchainTradeFinanceV2Page() {
  const slug = "web3";
  const subCategorySlug = "blockchain-trade-finance";
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
    <div className="web3-service-page v2-redesign" style={{ "--section-padding": "0", "--header-padding": "120px 0 60px" }}>
      <ScrollProgress />
      <CustomCursor />
      <ThemeToggleV2 />
      
      

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

      {/* 2. STATS TICKER WITH COUNTING ANIMATION */}
      <StatsTickerV2 />

      {/* 3 & 4. PROBLEM & SOLUTION SECTION (THE CHALLENGE & PROCESS) */}
      <ChallengeAnimatedV2 
        headline={sections.challenge?.headline} 
        body={sections.challenge?.body} 
        solutionHeading={frontmatter["solution-heading"]}
        processHeadline={sections.process?.headline}
        processSteps={sections.process?.steps || []}
      />

      {/* 5. CORE CAPABILITIES SECTION */}
      <CoreCapabilitiesAnimated 
        title={sections.capabilities?.headline || "Core Capabilities"}
        subtitle="What Quecko Delivers"
        capabilities={sections.capabilities?.items || []}
      />

      {/* 5.5. PUBLIC CHAINS SECTION */}
      {sections.publicChains?.chains && sections.publicChains.chains.length > 0 && (
        <PublicChains data={sections.publicChains} />
      )}



      {/* 7. PROJECT BLUEPRINT / TIMELINE */}
      <BlueprintAnimatedV2 
        headline={sections.blueprint?.headline} 
        timeline={sections.blueprint?.timeline || []} 
      />

      {/* 8. TECH STACK SECTION */}
      <TechStackV2 
        headline={sections.techStack?.headline} 
        categories={sections.techStack?.categories || []} 
      />

      {/* 9. WHY CHOOSE QUECKO / DIFFERENTIATION (OUR EDGE) */}
      <WhyChooseV2 
        headline={sections.whyChoose?.headline}
        subhead={sections.whyChoose?.subhead}
        items={sections.whyChoose?.items || []} 
      />

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
      <EngagementV2 items={sections.engagement?.items || []} />

      {/* 13. OBJECTION HANDLING / FAQS WITH ROTATING GLOBE SVG */}
      <FaqSectionV2 faqs={sections.faqs?.faqs} />

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
