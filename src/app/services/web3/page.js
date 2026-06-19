export const metadata = { title: "Web3 & Blockchain Services – Quecko", description: "Quecko's Web3 and blockchain development services: smart contracts, DeFi, cross-chain solutions, RWA tokenization, and more." }
import Link from "next/link";
import Work from "@/components/sections/Work";
import ServiceLayout from "@/components/layouts/ServiceLayout";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Web3 & Blockchain" },
];

const web3Services = [
  { title: "Blockchain Development", href: "/blockchain-development", description: "Smart contracts, DApps, and full-stack blockchain engineering." },
  { title: "Web3 & DeFi Solutions", href: "/web3-and-defi-solutions", description: "Decentralized finance protocols, lending platforms, and token ecosystems." },
  { title: "Interoperability & Cross-Chain", href: "/interoperability-and-cross-chain-solutions", description: "Bridges, cross-chain protocols, and multi-chain architecture." },
  { title: "Prediction Markets", href: "/prediction-market", description: "Decentralized prediction market platforms built on-chain." },
  { title: "Real World Assets (RWA)", href: "/rwa", description: "Tokenization of real-world assets on public and private blockchains." },
  { title: "Tokenomics & Compliance", href: "/tokenomics-and-compliance", description: "Token design, economic modeling, and regulatory compliance." },
  { title: "Infrastructure", href: "/infrastructure", description: "Blockchain infrastructure, node operations, and protocol tooling." },
];

const Web3Services = () => {
  return (
    <ServiceLayout breadcrumbs={breadcrumbs}>
<section className="smart_contract">
        <div className="inner_data">
          <div className="blogdetail">
            <div className="parenttext">
              <div className="twicebtn">
                <p className="hometexttt">Services</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                  <path d="M5.25 11L8.75 7.5L5.25 4" stroke="#9D9D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Web3 & Blockchain</span>
              </div>
              <h1 className="mainpara">Web3 & Blockchain Services</h1>
              <p className="para">From DeFi protocols to cross-chain infrastructure — we build the decentralized future.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="careeer_results" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="inner_carrer">
          <div className="all_tab_Data" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2rem" }}>
            {web3Services.map((svc) => (
              <Link key={svc.href} href={svc.href}>
                <div className="inner_tab_cards" style={{ minHeight: "180px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div className="left_side">
                    <h2>{svc.title}</h2>
                    <p>{svc.description}</p>
                  </div>
                  <div className="right_side" style={{ marginTop: "1rem" }}>
                    <button>Learn More</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Work />
    </ServiceLayout>
  );
};


export default Web3Services;
