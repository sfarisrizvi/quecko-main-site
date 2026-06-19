export const metadata = { title: "Marketing Services – Quecko", description: "Quecko's marketing services: digital marketing, Web3 campaigns, community management, content, and PR." }
import Link from "next/link";
import Work from "@/components/sections/Work";
import ServiceLayout from "@/components/layouts/ServiceLayout";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Marketing" },
];

const marketingServices = [
  { title: "Digital Marketing", href: "/digital-marketing", description: "SEO, paid ads, email campaigns, and full-funnel digital growth." },
  { title: "Web3 Marketing", href: "/web3-marketing", description: "Crypto and blockchain brand marketing tailored for Web3 audiences." },
  { title: "Social Media Management", href: "/social-media-management", description: "Content strategy and community growth across all social platforms." },
  { title: "Community Management", href: "/community-management", description: "Discord, Telegram, and on-chain community building and moderation." },
  { title: "Blog & Article Writing", href: "/blog-and-article-writing", description: "SEO-optimized content, thought leadership, and technical articles." },
  { title: "Strategy & Campaign Design", href: "/strategy-and-campaign-design", description: "Go-to-market strategy and campaign execution for Web3 launches." },
  { title: "Marketing PR", href: "/marketingpr", description: "Press releases, media outreach, and PR for blockchain projects." },
];

const MarketingServices = () => {
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
                <span>Marketing</span>
              </div>
              <h1 className="mainpara">Marketing Services</h1>
              <p className="para">Web3-native marketing strategies that build communities, drive awareness, and convert users.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="careeer_results" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="inner_carrer">
          <div className="all_tab_Data" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2rem" }}>
            {marketingServices.map((svc) => (
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


export default MarketingServices;
