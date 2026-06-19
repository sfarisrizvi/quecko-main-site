export const metadata = { title: "Services – Quecko | Web3 & Blockchain Agency", description: "Explore Quecko's full suite of Web3, blockchain development, marketing, creative, and consulting services." }
import Link from "next/link";
import Work from "@/components/sections/Work";
import ServiceLayout from "@/components/layouts/ServiceLayout";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services" },
];

const servicesCategories = [
  {
    title: "Web3 & Blockchain",
    description: "DeFi protocols, smart contracts, tokenomics, and full-stack Web3 infrastructure.",
    href: "/services/web3",
    icon: "🔗",
  },
  {
    title: "Development",
    description: "Web, mobile, backend, and frontend engineering for modern products.",
    href: "/services/development",
    icon: "💻",
  },
  {
    title: "Marketing",
    description: "Digital marketing, community management, Web3 campaigns, and growth strategies.",
    href: "/services/marketing",
    icon: "📣",
  },
  {
    title: "Creative",
    description: "UI/UX design, technical writing, branding, and creative production.",
    href: "/services/creative",
    icon: "🎨",
  },
  {
    title: "Enterprise Consulting",
    description: "Strategic blockchain consulting and enterprise transformation.",
    href: "/services/consulting",
    icon: "🏢",
  },
];

const Services = () => {
  return (
    <ServiceLayout breadcrumbs={breadcrumbs}>
<BreadcrumbSchema items={[
        { name: "Home", url: "https://quecko.com" },
        { name: "Services", url: "https://quecko.com/services" },
      ]} />

      <section className="smart_contract">
        <div className="inner_data">
          <div className="blogdetail">
            <div className="parenttext">
              <div className="twicebtn">
                <p className="hometexttt">Home</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                  <path d="M5.25 11L8.75 7.5L5.25 4" stroke="#9D9D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Services</span>
              </div>
              <h1 className="mainpara">Our Services</h1>
              <p className="para">End-to-end Web3, development, marketing, and creative solutions built for the decentralized future.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="careeer_results" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="inner_carrer">
          <div className="all_tab_Data" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2rem" }}>
            {servicesCategories.map((cat) => (
              <Link key={cat.href} href={cat.href}>
                <div className="inner_tab_cards" style={{ minHeight: "200px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div className="left_side">
                    <h2>{cat.title}</h2>
                    <p>{cat.description}</p>
                  </div>
                  <div className="right_side" style={{ marginTop: "1rem" }}>
                    <button>Explore</button>
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


export default Services;
