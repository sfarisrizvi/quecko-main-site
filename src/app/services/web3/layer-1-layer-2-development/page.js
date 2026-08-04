import L1L2LandingClient from "./_client";

export const metadata = {
  title: "Layer 1 & Layer 2 Blockchain Development Services | Quecko",
  description:
    "Quecko engineers sovereign Layer 1 chains and high-throughput Layer 2 networks — consensus design, validator infrastructure, and audited bridges, from whitepaper to mainnet.",
  openGraph: {
    title: "Layer 1 & Layer 2 Blockchain Development Services | Quecko",
    description:
      "Quecko engineers sovereign Layer 1 chains and high-throughput Layer 2 networks — consensus design, validator infrastructure, and audited bridges, from whitepaper to mainnet.",
    url: "https://quecko.com/services/web3/layer-1-layer-2-development",
    siteName: "Quecko",
    type: "website",
  },
  alternates: {
    canonical: "https://quecko.com/services/web3/layer-1-layer-2-development",
  },
};

export default function L1L2DevelopmentPage() {
  return <L1L2LandingClient />;
}
