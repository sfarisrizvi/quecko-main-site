export const metadata = { title: "Our Team – Quecko", description: "Meet the leadership team behind Quecko – the minds driving Web3 and blockchain innovation." }
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Work from "@/components/sections/Work";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const teamMembers = [
  {
    name: "Alee Abbasi",
    role: "CEO",
    href: "/about-us/team/alee",
    img: "/Assets/aleeprofile.png",
    bio: "Fintech and Blockchain Development consultant with a decade of experience.",
  },
  {
    name: "Fahad Suleman",
    role: "CMO",
    href: "/about-us/team/fahad",
    img: "/Assets/fahadprofile.png",
    bio: "Web3 marketer and blockchain development consultant.",
  },
];

const TeamPage = () => {
  return (
    <>
<BreadcrumbSchema items={[
        { name: "Home", url: "https://quecko.com" },
        { name: "About Us", url: "https://quecko.com/about-us" },
        { name: "Team", url: "https://quecko.com/about-us/team" },
      ]} />
      <Header />
      <section className="careeer_results" style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
        <div className="inner_carrer">
          <h1 style={{ marginBottom: "2rem" }}>Meet Our Team</h1>
          <div className="all_tab_Data" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "2rem" }}>
            {teamMembers.map((member) => (
              <Link key={member.href} href={member.href}>
                <div className="inner_tab_cards" style={{ textAlign: "center", padding: "2rem" }}>
                  <img src={member.img} alt={member.name} style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", marginBottom: "1rem" }} />
                  <h2>{member.name}</h2>
                  <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>{member.role} at Quecko</p>
                  <p>{member.bio}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Work />
      <Footer />
    </>
  );
};

export default TeamPage;
