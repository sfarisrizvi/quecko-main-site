export const metadata = { title: "Creative Services – Quecko", description: "Quecko's creative services: branding, UI/UX design, technical writing, and PR for Web3 and blockchain companies." }
import Link from "next/link";
import Work from "@/components/sections/Work";
import ServiceLayout from "@/components/layouts/ServiceLayout";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Creative" },
];

const creativeServices = [
  { title: "Creative Services", href: "/creative-services", description: "Branding, visual identity, motion graphics, and creative direction." },
  { title: "Technical Writing", href: "/technical-writing", description: "Whitepapers, documentation, API guides, and developer resources." },
  { title: "UI/UX Design", href: "/uiuxdesigner", description: "User research, wireframing, prototyping, and high-fidelity design." },
  { title: "Marketing PR", href: "/marketingpr", description: "Press coverage, influencer partnerships, and media relations." },
];

const CreativeServices = () => {
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
                <span>Creative</span>
              </div>
              <h1 className="mainpara">Creative Services</h1>
              <p className="para">Design, storytelling, and brand strategy that make Web3 projects stand out.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="careeer_results" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="inner_carrer">
          <div className="all_tab_Data" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2rem" }}>
            {creativeServices.map((svc) => (
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


export default CreativeServices;
