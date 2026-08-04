import CryptoBankingLandingClient from "./_client";

export const metadata = {
  title: "Crypto Banking & Financial Rails Development | Quecko",
  description:
    "Quecko builds compliant crypto banking infrastructure — neobank platforms, payment gateways, stablecoin reserves, remittance systems, P2P lending, and CBDC networks.",
  openGraph: {
    title: "Crypto Banking & Financial Rails Development | Quecko",
    description:
      "Quecko builds compliant crypto banking infrastructure — neobank platforms, payment gateways, stablecoin reserves, remittance systems, P2P lending, and CBDC networks.",
    url: "https://quecko.com/services/web3/crypto-banking",
    siteName: "Quecko",
    type: "website",
  },
  alternates: {
    canonical: "https://quecko.com/services/web3/crypto-banking",
  },
};

export default function CryptoBankingPage() {
  return <CryptoBankingLandingClient />;
}
