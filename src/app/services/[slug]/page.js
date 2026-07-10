import { allServicesData } from "@/components/sections/allServicesData";
import Web3ClientPage from "./_client";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: "web3" },
    { slug: "ai-development" },
    { slug: "gaming-igaming" },
    { slug: "saas-platforms" },
    { slug: "mobile-app-development" },
    { slug: "ecommerce-cms" },
    { slug: "automation-engagement" },
    { slug: "dedicated-teams" },
    { slug: "growth-branding" }
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = allServicesData[slug];
  if (!service) {
    return {
      title: "Service – Quecko",
      description: "Explore Quecko's full suite of digital product engineering and Web3 services."
    };
  }

  // Format a premium, readable SEO title
  const cleanTitle = service.title
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(" Landing Page", "")
    .replace(" Copy", "");

  return {
    title: `${cleanTitle} – Quecko | Web3 & Blockchain Agency`,
    description: service.hero.subhead.substring(0, 160)
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <Web3ClientPage slug={slug} />;
}
