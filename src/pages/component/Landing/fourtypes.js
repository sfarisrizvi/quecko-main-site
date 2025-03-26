"use client";

import React, { useEffect, useRef } from "react";
import "odometer/themes/odometer-theme-minimal.css";

const Fourtypes = () => {
  const sectionRef = useRef(null);
  const numbersRef = useRef([]);
  const labelsRef = useRef([]);

  useEffect(() => {
    const loadOdometer = async () => {
      const Odometer = (await import("odometer"))?.default;
      numbersRef.current.forEach((num, index) => {
        if (!num) return;

        const finalText = num.dataset.value;
        const numericValue = finalText.replace(/[^0-9]/g, "");
        const prefix = finalText.match(/^[^0-9]+/)?.[0] || "";
        const suffix = finalText.match(/[^0-9]+$/)?.[0] || "";
        
        num.innerHTML = `<span class='odometer-wrapper'><span class='odometer-prefix'>${prefix}</span><span class='odometer-value'>0000000</span><span class='odometer-suffix'>${suffix}</span></span>`;
        const odometerSpan = num.querySelector(".odometer-value");
        
        const odometer = new Odometer({
          el: odometerSpan,
          value: 0,
          theme: "minimal",
        });

        odometer.render();

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                odometer.update(numericValue);
              }, 500);
              observer.disconnect();
            }
          },
          { threshold: 0.5 }
        );

        observer.observe(num);
      });
    };

    loadOdometer();
  }, []);

  return (
    <section ref={sectionRef} className="four_types">
      <div className="inner_types">
        {[
          { value: "$500M+", label: "Money Raised" },
          { value: "25+", label: "Global Client Base" },
          { value: "100+", label: "Company Strength" },
          { value: "500+", label: "Total Projects Delivered" },
        ].map((stat, index) => (
          <div key={index} className="inner_text">
            <h1
              ref={(el) => (numbersRef.current[index] = el)}
              data-value={stat.value}
              className="odometer"
            >
              <span className='odometer-wrapper'><span className='odometer-prefix'>{stat.value.replace(/[0-9]/g, "").charAt(0)}</span><span className='odometer-value'>{stat.value.replace(/[^0-9]/g, "0")}</span><span className='odometer-suffix'>{stat.value.replace(/[0-9]/g, "").slice(1)}</span></span>
            </h1>
            <p ref={(el) => (labelsRef.current[index] = el)}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fourtypes;