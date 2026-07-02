"use client"

import React, { useEffect, useState, useMemo } from "react";

const Marquee = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    let timeoutId;
    let failCount = 0;
    const MAX_RETRIES = 3;

    const fetchPrices = async () => {
      try {
        const controller = new AbortController();
        const abortTimeout = setTimeout(() => controller.abort(), 8000);

        const res = await fetch("https://stg-api.price.agency/api/v1/markets-data/top", {
          cache: "no-store",
          signal: controller.signal,
        });
        clearTimeout(abortTimeout);

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();

        if (Array.isArray(data)) {
          setCoins(data);
          failCount = 0; // reset on success
        }
      } catch {
        failCount++;
        if (failCount >= MAX_RETRIES) return; // stop retrying
      }

      // Only schedule next fetch if we haven't exceeded retries
      if (failCount < MAX_RETRIES) {
        timeoutId = setTimeout(fetchPrices, 30000);
      }
    };

    fetchPrices();

    return () => clearTimeout(timeoutId);
  }, []);

  // PERFORMANCE: useMemo ensures we only recalculate this 
  // big array when 'coins' actually changes.
  const repeatedCoins = useMemo(() => {
    if (!coins.length) return [];
    return [...coins, ...coins, ...coins, ...coins];
  }, [coins]);

  return (
    <section>
      <div className="marquee">
        <div className="howworks_chains">
          <div className="howworks_chains_track">
            {repeatedCoins.map((coin, index) => {
              // SAFETY DEFAULTS: Fallbacks prevent crashes if a field is missing
              const symbol = coin?.symbol || "N/A";
              const price = coin?.price ?? 0;
              const change = coin?.change24h ?? 0;
              const isPositive = change >= 0;

              return (
                <div className="howworks_chain" key={`${coin?.id || 'coin'}-${index}`}>
                  <h3>{symbol.toUpperCase()}</h3>
                  <h4>${price.toLocaleString()}</h4>
                  <h5 style={{ color: isPositive ? "#38B550" : "#F32828" }}>
                    {change.toFixed(2)}%
                    {isPositive ? <ArrowUp /> : <ArrowDown />}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper Components for cleaner JSX
const ArrowUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
    <path d="M14 11.25L9.5 6.75L5 11.25" stroke="#38B550" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
    <path d="M14 6.75L9.5 11.25L5 6.75" stroke="#F32828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Marquee;