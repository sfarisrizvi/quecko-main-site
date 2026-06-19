export const metadata = { title: "Development Services – Quecko", description: "Quecko's development services: web, mobile, backend, frontend, and technical writing for modern digital products." }
import Link from "next/link";
import Work from "@/components/sections/Work";
import ServiceLayout from "@/components/layouts/ServiceLayout";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Development" },
];

const devServices = [
  { title: "Web Development", href: "/web-development", description: "Full-stack web applications, dApps, and custom platforms." },
  { title: "Mobile App Development", href: "/mobile-app-development", description: "iOS and Android apps built with React Native and modern toolchains." },
  { title: "Backend Development", href: "/backend", description: "Scalable APIs, microservices, and server-side architecture." },
  { title: "Frontend Development", href: "/frontend", description: "Pixel-perfect UIs built for performance and accessibility." },
  { title: "Technical Writing", href: "/technical-writing", description: "Documentation, whitepapers, and developer guides." },
];

const DevelopmentServices = () => {
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
                <span>Development</span>
              </div>
              <h1 className="mainpara">Development Services</h1>
              <p className="para">End-to-end engineering for web, mobile, and backend products.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="careeer_results" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="inner_carrer">
          <div className="all_tab_Data" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2rem" }}>
            {devServices.map((svc) => (
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


export default DevelopmentServices;
