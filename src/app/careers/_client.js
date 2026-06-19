"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchAllJobs, JobBasedcategory } from "@/Utils/Services/services";
import JobLoader from "@/hooks/jobloader";
import CareerLayout from "@/components/layouts/CareerLayout";
import Cnt from "@/components/sections/Cnt";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Careers" },
];

const Careers = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [alljobs, setalljobs] = useState([]);
  const [designJobs, setDesignJobs] = useState([]);
  const [developmentJobs, setDevelopmentJobs] = useState([]);
  const [marketingJobs, setMarketingJobs] = useState([]);
  const [businessJobs, setBusinessJobs] = useState([]);
  const [loading, setloading] = useState(false);
  const [loading1, setloading1] = useState(false);

  const getAlljobs = async () => {
    try {
      setloading(true);
      const data = await fetchAllJobs();
      setalljobs(data);
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };

  const getSingleJob = async (id) => {
    try {
      setloading1(true);
      const data = await JobBasedcategory(id);
      setalljobs(data);
      if (id === 160) setDesignJobs(data);
      else if (id === 148) setDevelopmentJobs(data);
      else if (id === 151) setMarketingJobs(data);
      else if (id === 166) setBusinessJobs(data);
    } catch (error) {
      console.error(error);
    } finally {
      setloading1(false);
    }
  };

  useEffect(() => {
    getAlljobs();
    const timer = setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 500);
    return () => clearTimeout(timer);
  }, []);

  const JobCard = ({ item, href }) => (
    <Link href={href}>
      <div className="inner_tab_cards">
        <div className="left_side">
          <h2>{item?.title?.rendered}</h2>
          <p dangerouslySetInnerHTML={{ __html: item?.acf?.job_description?.replace(/&#8211;\s*/g, "")?.replace(/–\s*/g, "") }} />
          <div className="buttons_innner">
            <button className="full">Fulltime</button>
            <button className="remote">Remote</button>
          </div>
        </div>
        <div className="right_side">
          <button>Apply Now</button>
        </div>
      </div>
    </Link>
  );

  return (
    <CareerLayout breadcrumbs={breadcrumbs}>
      <section className="careeer_results">
        <div className="inner_carrer">
          <h1>Careers</h1>
          <nav className="navsectiontabs">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className={`nav-link ${activeTab === "all" ? "active" : ""}`} type="button" onClick={() => { setActiveTab("all"); getAlljobs(); }}>All</button>
              <button className={`nav-link ${activeTab === "design" ? "active" : ""}`} type="button" onClick={() => { setActiveTab("design"); getSingleJob(160); }}>Design</button>
              <button className={`nav-link ${activeTab === "development" ? "active" : ""}`} type="button" onClick={() => { setActiveTab("development"); getSingleJob(148); }}>Development</button>
              <button className={`nav-link ${activeTab === "marketing" ? "active" : ""}`} type="button" onClick={() => { setActiveTab("marketing"); getSingleJob(151); }}>Marketing</button>
              <button className={`nav-link ${activeTab === "business" ? "active" : ""}`} type="button" onClick={() => { setActiveTab("business"); getSingleJob(166); }}>Business Development</button>
            </div>
          </nav>

          <div className="tab-content" id="nav-tabContent">
            {activeTab === "all" && (
              <div className="tab-pane fade show active" role="tabpanel">
                {loading ? <JobLoader /> : (
                  <div className="all_tab_Data">
                    {alljobs.map((item, index) => (
                      <JobCard key={index} item={item} href={`/careers/${item?.slug}`} />
                    ))}
                  </div>
                )}
              </div>
            )}
            {activeTab === "design" && (
              <div className="tab-pane fade show active" role="tabpanel">
                {loading1 ? <JobLoader /> : (
                  <div className="all_tab_Data">
                    {designJobs.map((item, index) => <JobCard key={index} item={item} href={`/careers/${item?.slug}`} />)}
                  </div>
                )}
              </div>
            )}
            {activeTab === "development" && (
              <div className="tab-pane fade show active" role="tabpanel">
                <div className="all_tab_Data">
                  {loading1 ? <JobLoader /> : developmentJobs.map((item, index) => <JobCard key={index} item={item} href={`/careers/${item?.slug}`} />)}
                </div>
              </div>
            )}
            {activeTab === "marketing" && (
              <div className="tab-pane fade show active" role="tabpanel">
                <div className="all_tab_Data">
                  {loading1 ? <JobLoader /> : marketingJobs.map((item, index) => <JobCard key={index} item={item} href={`/careers/${item?.slug}`} />)}
                </div>
              </div>
            )}
            {activeTab === "business" && (
              <div className="tab-pane fade show active" role="tabpanel">
                <div className="all_tab_Data">
                  {loading1 ? <JobLoader /> : businessJobs.map((item, index) => <JobCard key={index} item={item} href={`/careers/${item?.slug}`} />)}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Cnt />
    </CareerLayout>
  );
};

export default Careers;
