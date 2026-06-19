import React from "react";
import Link from "next/link";
import LazyAutoVideo from "@/components/ui/LazyAutoVideo";

const Cnt = () => {
  return (
    <section className="cnt">
      <div className="video_conatiner">
        <div className="cntinner">
          <LazyAutoVideo
            className="cntvideo"
            src="https://media.quecko.com/videos/cta.mp4"
          />
          <div className="cntcontent">
            <p className="toppara">Let&apos;s Build</p>
            <h2 className="cnthead">What&apos;s Next</h2>
            <p className="cntpara">
              Whether you&apos;re creating an AI platform, launching a Web3
              ecosystem, or scaling enterprise software, Quecko is ready to help
              you build the future.
            </p>
            <Link href="/contact" className="cntbtn">
              Start a Project
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13.3333 14.1663L17.5 9.99967L13.3333 5.83301M17.5 9.99967H2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cnt;
