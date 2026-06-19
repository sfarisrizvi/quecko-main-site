import React from "react";
import Link from "next/link";
import LazyAutoVideo from "@/components/ui/LazyAutoVideo";

const Aboutus = () => {
  return (
    <>
      <section className="aboutus">
        <div className="aboutusbg">
          <div className="custom-container">
            <div className="aboutusinner">
              <div className="innerleft">
                <div className="toppara">
                  <p className="innerpara">About Us</p>
                </div>
                <h1 className="aboutushead">Building Blocks To Build On</h1>
                <div className="leftlower">
                  <h6 className="lowerpara">
                    Trusted by 400+ clients across 20+ countries — shipping AI
                    and Web3 products from idea to launch.
                  </h6>
                  <h1 className="lowerhead">400+</h1>
                </div>
              </div>
              <div className="innerright">
                <div className="righttop">
                  <span className="circle"></span>
                  <p className="toppara">
                    Working Across Time Zones Since Day One
                  </p>
                </div>
                <h4 className="righthead">
                  Built 250+ products. Learned something new every single time.
                </h4>
                <Link href="/contact" className="startbtn">
                  Start a Project{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M10.6667 11.3334L14 8.00008L10.6667 4.66675M14 8.00008H2"
                      stroke="white"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <LazyAutoVideo
                  className="aboutusvideo"
                  id="myVideo"
                  src="https://media.quecko.com/videos/aboutus.mp4"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
