import React, { useEffect, useState } from "react";

const Marquee = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const coinIds = [
      "bitcoin",
      "ethereum",
      "dogecoin",
      "tron",
      "the-open-network", // TON
      "avalanche-2",      // AVAX
      "cardano",          // ADA
      "ripple"            // XRP
    ];

    const fetchPrices = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds.join(",")}`
        );
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        console.error("Error fetching coin data:", err);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 90000);
    return () => clearInterval(interval);
  }, []);


  const repeatedCoins = [...coins, ...coins, ...coins, ...coins];

  return (
    <section>
      <div>
        <div className="marquee">
          <div className="howworks_chains">
            <div className="howworks_chains_track">
              {repeatedCoins.map((coin, index) => (
                <div className="howworks_chain" key={coin.id + index}>
                  <h3>{coin.symbol.toUpperCase()}</h3>
                  <h4>${coin.current_price.toLocaleString()}</h4>
                  <h5
                    style={{
                      color: coin.price_change_percentage_24h >= 0 ? "#38B550" : "#F32828",
                    }}
                  >
                    {coin.price_change_percentage_24h?.toFixed(2)}%
                    {coin.price_change_percentage_24h >= 0 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                      >
                        <path
                          d="M14 11.25L9.5 6.75L5 11.25"
                          stroke="#38B550"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                      >
                        <path
                          d="M14 6.75L9.5 11.25L5 6.75"
                          stroke="#F32828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
