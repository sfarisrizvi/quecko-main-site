import React, { useEffect, useState } from "react";
import Work from "./component/Landing/work";
import Footer from "./component/Landing/footer";
import Header from "./component/Landing/header";
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from "react-bootstrap/Offcanvas";
import Table from 'react-bootstrap/Table';
const Cryptoconverter = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [direction, setDirection] = useState("down");
  const [coins, setCoins] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [openRight, setOpenRight] = useState(false);
  const [fromCoin, setFromCoin] = useState(null);
  const [toCoin, setToCoin] = useState(null);
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [prices, setPrices] = useState({});
  const [lastUpdate, setLastUpdate] = useState("");
  const [selectedConversion, setSelectedConversion] = useState(null);

  // ✅ Hardcoded fiat currencies
  const fiatCurrencies = [
    { id: "usd", symbol: "USD", name: "US Dollar", image: "/Assets/dollar.svg" },
    { id: "gbp", symbol: "GBP", name: "British Pound", image: "/Assets/gbp.svg" },
    { id: "eur", symbol: "EUR", name: "Euro", image: "/Assets/euro.svg" },
  ];

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        const data = await res.json();
        const allOptions = [...data, ...fiatCurrencies];

        setCoins(allOptions);
        setFromCoin(data[0]);
        setToCoin(fiatCurrencies[0]);
      } catch (err) {
        console.error("Error fetching coins:", err);
      }
    };
    fetchCoins();
  }, []);
  const fetchPrice = async (from, to) => {
    if (!from || !to) return null;

    try {
      const isFiat = fiatCurrencies.some(f => f.symbol.toLowerCase() === to.symbol.toLowerCase());

      if (isFiat) {
        const vsCurrency = to.symbol.toLowerCase();
        const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${from.id}&vs_currencies=${vsCurrency}`);
        const data = await res.json();
        const rate = data[from.id][vsCurrency];
        setPrices(prev => ({ ...prev, [`${from.id}_${to.symbol.toLowerCase()}`]: rate }));
        setLastUpdate(new Date().toLocaleTimeString());
        return rate;
      }
      const res1 = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${from.id}&vs_currencies=usd`);
      const fromData = await res1.json();
      const res2 = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${to.id}&vs_currencies=usd`);
      const toData = await res2.json();
      const rate = fromData[from.id].usd / toData[to.id].usd;
      setPrices(prev => ({ ...prev, [`${from.id}_${to.id}`]: rate }));
      setLastUpdate(new Date().toLocaleTimeString());
      return rate;
    } catch (err) {
      console.error(err);
      return null;
    }
  };
  const convert = async (value, type, from = fromCoin, to = toCoin) => {
    if (!from || !to) return;
    if (type === "from") {
      setFromValue(value);
      const rate = await fetchPrice(from, to);
      setToValue(rate ? (value * rate).toFixed(6) : "");
    } else {
      setToValue(value);
      const rate = await fetchPrice(to, from);
      setFromValue(rate ? (value * rate).toFixed(6) : "");
    }
  };
  const handleSwap = () => {
    const temp = fromCoin;
    setFromCoin(toCoin);
    setToCoin(temp);
    setFromValue("");
    setToValue("");
  };
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );
  const handlePopularClick = async (from, to) => {
    const fromSelected =
      coins.find((coin) => coin.symbol.toUpperCase() === from) ||
      fiatCurrencies.find((fiat) => fiat.symbol.toUpperCase() === from);

    const toSelected =
      coins.find((coin) => coin.symbol.toUpperCase() === to) ||
      fiatCurrencies.find((fiat) => fiat.symbol.toUpperCase() === to);

    if (fromSelected && toSelected) {
      setFromCoin(fromSelected);
      setToCoin(toSelected);
      setFromValue(1);
      setSelectedConversion({ from, to });

      const rate = await fetchPrice(fromSelected, toSelected);
      setToValue(rate ? (1 * rate).toFixed(6) : "");
    }
  };
  return (
    <>
      <Header />
      <div>
        <div>
          <section className="main_banner1 cryptomainnss" >
            {/* <Header/> */}
            <img loading="lazy" className="upper_shadow d-none" src="\Assets\shadowupper.png" alt="about-us" />
            <img loading="lazy" className="lowershadow  d-none" src="\Assets\shadowlower.png" alt="about-us" />
            <div className="inner_banner">
              <video className='main-banner-video'
                muted="muted" playsinline="playsinline"
                autoPlay
                loop
                width="100%"
                id="myVideo">
                <source src="https://media.quecko.com/videos/bannervideo.mp4" type="video/mp4" />
              </video>
              <div className="textual_inner myinnner_data" >
                {/* <h3 className="para_new11">We’re the</h3> */}
                <div className="animation-section style-1">
                  <span>Crypto Converter</span>
                  <h1>Cryptocurrency Converter</h1>
                  <p className='span_ptag newtagsss'>Easily convert crypto to fiat or between digital assets with real-time exchange rates and accurate calculations.</p>
                </div>
              </div>
              <img
                loading="lazy"
                onClick={() => {
                  const currentScroll = window.scrollY;
                  const newScroll = direction === "down"
                    ? currentScroll + 700
                    : currentScroll - 700;

                  window.scrollTo({ top: newScroll, behavior: 'smooth' });
                }}
                className={direction === "down" ? "downarrow" : "downarrow setarrowup"}
                src="/Assets/downarrow.svg"
              />
            </div>


          </section>
        </div>
        <section className="crypto_side_main">
          <div className="outer_crpto">
            <div className="top_crypto">
              {/* FROM INPUT */}
              <div
                className={`leftinput ${open ? "active-border" : ""}`} // 👈 dynamic class
              >
                <input
                  type="number"
                  placeholder="0"
                  value={fromValue}
                  onChange={(e) => convert(e.target.value, "from")}
                />
                <Dropdown show={open} onToggle={(isOpen) => setOpen(isOpen)}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {fromCoin ? (
                      <div className="innner_inputs" onClick={() => {
                        handleShow();    // first action
                        setOpen(!open);  // second action
                      }}>
                        <img
                          src={fromCoin.image}
                          alt={fromCoin.symbol}
                          width="20"
                          height="20"
                        />
                        <h3>{fromCoin.symbol.toUpperCase()}</h3>
                        <svg

                          className={`arrow-icon ${open ? "rotate" : ""}`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="14"
                          viewBox="0 0 13 14"
                          fill="none"
                        >
                          <path
                            d="M9.75 5.375L6.5 8.625L3.25 5.375"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      "Select Coin"
                    )}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropppmenu">
                    <div className="select_currency_div">
                      <span>Select Currency</span>
                      <div className="inpppput">
                        <input
                          placeholder="Search Currency"
                          type="text"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          className="form-control mb-2"
                        />
                      </div>

                      <div className="myflexxx">
                        {filteredCoins.map((coin) => (
                          <div
                            key={coin.id}
                            className="myydivv"
                            style={{ cursor: "pointer" }}
                            onClick={async () => {
                              setFromCoin(coin);
                              setSearch("");
                              setOpen(false); // ✅ dropdown close
                              await convert(fromValue, "from", coin, toCoin);
                            }}
                          >
                            <div className="unnnderside">
                              <img
                                src={coin.image}
                                alt={coin.symbol}
                                className="imggcoinnn"
                              />
                              <h6>{coin.name}</h6>
                              <span className="myyysppan">
                                ({coin.symbol.toUpperCase()})
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>

              </div>

              {/* SWAP BUTTON */}
              <div
                className="midddle_side"
                onClick={handleSwap}

              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.33317 2L2.6665 4.66667L5.33317 7.33333" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.6665 4.66669H13.3332" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10.6665 14L13.3332 11.3334L10.6665 8.66669" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M13.3332 11.3333H2.6665" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>


              <div className={`leftinput rightinput ${openRight ? "active-border" : ""}`}>
                <input
                  type="number"
                  placeholder="0"
                  value={toValue} // 👈 bind to state
                  onChange={(e) => convert(e.target.value, "to")}
                />

                <Dropdown show={openRight} onToggle={(isOpen) => setOpenRight(isOpen)}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {toCoin ? (
                      <div className="innner_inputs"
                      onClick={() => {
                        handleShow();    // first action
                       setOpenRight(!openRight);  // second action
                      }}
                    >
                        <img
                          src={toCoin.image}
                          alt={toCoin.symbol}
                          width="20"
                          height="20"
                        />
                        <h3>{toCoin.symbol.toUpperCase()}</h3>
                        <svg
                          className={`arrow-icon ${openRight ? "rotate" : ""}`} // 👈 rotate based on right dropdown state
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="14"
                          viewBox="0 0 13 14"
                          fill="none"
                        >
                          <path
                            d="M9.75 5.375L6.5 8.625L3.25 5.375"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      "Select Coin"
                    )}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropppmenu">
                    <div className="select_currency_div">
                      <span>Select Currency</span>
                      <div className="inpppput">
                        <svg
                          className="searchicon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M9.57429 9.57551L11.6654 11.6666L9.57429 9.57551ZM10.8169 6.57566C10.8169 8.91868 8.91752 10.8181 6.5745 10.8181C4.23144 10.8181 2.33203 8.91868 2.33203 6.57566C2.33203 4.23264 4.23144 2.33325 6.5745 2.33325C8.91752 2.33325 10.8169 4.23264 10.8169 6.57566Z"
                            stroke="#141519"
                            strokeWidth="1.33333"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <input
                          placeholder="Search Currency"
                          type="text"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          className="form-control mb-2"
                        />
                      </div>

                      <div className="myflexxx">
                        {filteredCoins.map((coin) => (
                          <div
                            key={coin.id}
                            className="myydivv"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setToCoin(coin);
                              setSearch("");
                              setOpenRight(false); // ✅ close dropdown on select
                            }}
                          >
                            <div className="unnnderside">
                              <img
                                src={coin.image}
                                alt={coin.symbol}
                                className="imggcoinnn"
                              />
                              <h6>{coin.name}</h6>
                              <span className="myyysppan">
                                ({coin.symbol.toUpperCase()})
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

            </div>

            {/* Rate info */}
            {fromCoin && toCoin && (
              <p className="mt-3">
                1 {fromCoin.symbol.toUpperCase()} ={" "}
                {prices[fromCoin?.id]?.[toCoin?.symbol?.toLowerCase()] || "…"}{" "}
                {toCoin.symbol.toUpperCase()} (as of {lastUpdate || "…"})
              </p>
            )}


            <div className="mainnnnnside">
              <h3>Popular Conversion</h3>
              <div className="popular_div">

                <div
                  className="outer_converstion"
                  onClick={() => handlePopularClick("BTC", "GBP")}
                >
                  <div className="innner_coversion">
                    <img src="\Assets\smallimgcoin.svg" alt="BTC" />
                    <h6>BTC</h6>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M5.83341 2L3.16675 4.66667L5.83341 7.33333" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.16675 4.66669H13.8334" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.1667 14L13.8334 11.3334L11.1667 8.66669" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.8334 11.3333H3.16675" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="innner_coversion">
                    <img src="\Assets\gbp.svg" alt="GBP" />
                    <h6>GBP</h6>
                  </div>
                </div>

                <div
                  className="outer_converstion"
                  onClick={() => handlePopularClick("BTC", "ETH")}
                >
                  <div className="innner_coversion">
                    <img src="\Assets\smallimgcoin.svg" alt="BTC" />
                    <h6>BTC</h6>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M5.83341 2L3.16675 4.66667L5.83341 7.33333" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.16675 4.66669H13.8334" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.1667 14L13.8334 11.3334L11.1667 8.66669" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.8334 11.3333H3.16675" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="innner_coversion">
                    <img src="\Assets\ethh.svg" alt="ETH" />
                    <h6>ETH</h6>
                  </div>
                </div>

                <div
                  className="outer_converstion"
                  onClick={() => handlePopularClick("XRP", "ETH")}
                >
                  <div className="innner_coversion">
                    <img src="\Assets\xrp.svg" alt="XRP" />
                    <h6>XRP</h6>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M5.83341 2L3.16675 4.66667L5.83341 7.33333" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.16675 4.66669H13.8334" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.1667 14L13.8334 11.3334L11.1667 8.66669" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.8334 11.3333H3.16675" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="innner_coversion">
                    <img src="\Assets\ethh.svg" alt="ETH" />
                    <h6>ETH</h6>
                  </div>
                </div>

                <div
                  className="outer_converstion"
                  onClick={() => handlePopularClick("ETH", "USD")}
                >
                  <div className="innner_coversion">
                    <img src="\Assets\ethh.svg" alt="ETH" />
                    <h6>ETH</h6>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M5.83341 2L3.16675 4.66667L5.83341 7.33333" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.16675 4.66669H13.8334" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.1667 14L13.8334 11.3334L11.1667 8.66669" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.8334 11.3333H3.16675" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="innner_coversion">
                    <img src="\Assets\dollar.svg" alt="USD" />
                    <h6>USD</h6>
                  </div>
                </div>

                <div
                  className="outer_converstion"
                  onClick={() => handlePopularClick("SOL", "USDT")}
                >
                  <div className="innner_coversion">
                    <img src="\Assets\sol.svg" alt="SOL" />
                    <h6>SOL</h6>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M5.83341 2L3.16675 4.66667L5.83341 7.33333" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.16675 4.66669H13.8334" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.1667 14L13.8334 11.3334L11.1667 8.66669" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.8334 11.3333H3.16675" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="innner_coversion">
                    <img src="\Assets\usdt.svg" alt="USDT" />
                    <h6>USDT</h6>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        <div className="bottom_converter">
          {/* <h4>Vel rerum dolor id pariatur cupiditate non minima perspiciatis vel sapiente magni est nihil nihil quo obcaecati iste</h4> */}
          {/* <p>Lorem ipsum dolor sit amet. Vel esse doloremque est quaerat commodi sit laudantium itaque qui rerum repellat in unde dolore. Sit facere veniam qui dolores autem aut nihil laborum. Vel molestiae ipsa est animi repudiandae et fugit quisquam. Ut rerum velit ab odio aliquid in perferendis consequatur a possimus consequatur qui mollitia saepe ut nostrum adipisci.</p> */}
          <h5>Why You Need a Crypto Rate Converter</h5>
          <p>Here’s why it’s essential:</p>
          <div className="ules">
            <ul>
              <li><span> Real-Time Price Tracking</span>Crypto markets never close. They operate 24/7. A crypto converter helps you keep up with price movements at any time, whether you’re in New York, London, or Mumbai.</li>
              <li><span>Smarter Trading Decisions
              </span>Even small price differences can impact profit margins. By knowing the exact conversion rate before you trade, you can avoid losses and make more profitable decisions.
              </li>
              <li><span>Global Accessibility
              </span>Crypto rate conversion breaks geographical barriers. You can easily find out how much your coins are worth in your local currency or any major fiat worldwide.
              </li>


              <li><span>Transparency and Convenience
              </span>Instead of checking multiple exchanges manually, you can use one converter to see combined, up-to-date rates all in one place.
              </li>
              <li><span>Portfolio Management
              </span>Investors often hold multiple cryptocurrencies. Conversion tools allow you to calculate your total holdings’ worth in one currency, giving you a complete financial overview.
              </li>
            </ul>
          </div>

          <h5 className="topppec">How Crypto Rate Conversion Works</h5>
          <p>Behind the scenes, a crypto rate converter uses sophisticated technology to deliver accurate and fast results. Here’s how it functions:
          </p>
          <div className="ules">
            <ul>
              <li><span>Data Aggregation </span>The converter collects live price feeds from multiple crypto exchanges.
              </li>
              <li><span>Average Calculation </span>It calculates an average price to balance out fluctuations across platforms.
              </li>
              <li><span>User Input </span> You enter the crypto amount and the currency you want to convert into.
              </li>
              <li><span>Instant Output  </span> The tool displays the converted value within seconds.
              </li>
              <p>For example:</p>
              <p> If Bitcoin (BTC) trades at $68,000 and you want to convert 0.05 BTC to USD, the converter instantly calculates:
                0.05 × 68,000 = $3,400 USD<br></br>
                That’s it , simple, fast, and always accurate.
              </p>

            </ul>
          </div>

          <h5 className="topppec">Conversion Tables; Get the Latest Crypto Rates
          </h5>
          <p>One of the most useful features of crypto converters is the conversion tables section. These tables show the latest exchange rates for popular cryptocurrencies and trading pairs, making it easy to see how the market is moving right this minute.
          </p>
          <p>You can track top cryptocurrencies like Bitcoin, Ethereum, Cardano, Solana, Dogecoin, Binance Coin, and many others, all in one place.
          </p>


          {/* <h5 className="topppec">Example: Popular Crypto Conversion Table
          </h5>
          <div>
            <Table responsive>
              <thead>
                <tr>
                  <th>Cryptocurrency</th>
                  <th>Symbol</th>
                  <th>USD Value</th>
                  <th>BTC Equivalent</th>
                  <th>24h Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bitcoin</td>
                  <td>BTC</td>
                  <td>$68,000</td>
                     <td>1 BTC </td>

                  <td>+1.8%</td>

                </tr>
                <tr>
                  <td>Ethereum</td>
                  <td>ETH</td>
                  <td>$2,450</td>
                     <td>0.036 BTC</td>

                  <td>+2.2%</td>





                </tr>
                <tr>

                  <td>Cardano</td>
                  <td>ADA</td>
                  <td>$0.42</td>
                    <td>0.000006 BTC</td>

                  <td>+0.6%</td>



                </tr>
                <tr>
                  <td>Solana</td>
  <td>SOL</td>
    <td>$158</td>
<td>0.0023 BTC</td>
   <td>+3.1%</td>






                </tr>
                <tr>

  <td>Dogecoin</td>
    <td>DOGE</td>




                  <td>Binance Coin</td>
                  <td>Tether</td>




                  <td>BNB</td>
                  <td>USDT</td>





                  <td>$0.13</td>
                  <td>$585</td>
                  <td>$1.00</td>

                  <td>0.0000019 BTC</td>
                  <td>0.0085 BTC</td>
                  <td>0.000015 BTC</td>


                  <td>+0.9%</td>
                  <td>+1.0%</td>
                </tr>
              </tbody>
            </Table>
          </div> */}

          <h5 className="topppec">Popular Crypto Conversion Pairs</h5>
          <p>While thousands of conversion combinations exist, some pairs are traded and tracked more frequently than others. The most common ones include:
          </p>
          <div className="ules">
            <ul>
              <li><span>BTC/USD -- </span> Bitcoin to US Dollar

              </li>
              <li><span>ETH/USD -- </span>Ethereum to US Dollar
              </li>
              <li><span>BTC/ETHt -- </span> Bitcoin to Ethereum
              </li>
              <li><span>BNB/USDT --  </span> Binance Coin to Tether
              </li>
              <li><span>ADA/INR -- </span> Cardano to Indian Rupee
              </li>
              <li><span>SOL/EUR -- </span> Solana to Euro

              </li>
              <li><span>DOGE/USD -- </span> Dogecoin to US Dollar


              </li>

            </ul>
          </div>
          <p>These pairs are useful for traders worldwide because they represent the most active and liquid markets.
          </p>
          <h5>Key Features of a Reliable Crypto Conversion Tool</h5>
          <p>When choosing a crypto conversion tool or calculator, look for these must-have features:
          </p>
          <div className="ules">
            <ul>
              <li><span>Live Data Updates </span> Prices should refresh in real time.


              </li>
              <li><span>Global Currency Support </span>Covering both crypto and fiat currencies.

              </li>
              <li><span>User-Friendly Interface </span> Simple, intuitive, and responsive across all devices.

              </li>
              <li><span>Historical Data </span> To view past price trends and performance.
              </li>
              <li><span>Security and Accuracy  </span> Sourced from reputable exchanges with verified APIs.
              </li>

            </ul>
          </div>
          <h5 className="topppec">Factors That Affect Crypto Conversion Rates</h5>
          <p>Understanding what influences crypto rates helps you interpret conversion data more effectively. Some key factors include:
          </p>
          <div className="ules">
            <ul>
              <li><span>Supply and Demand </span> The more people want a coin, the higher its price climbs.



              </li>
              <li><span>Exchange Volume </span> Markets with more trading activity often have more stable rates.


              </li>
              <li><span>News & Events </span>  Announcements, partnerships, or regulations can shift prices overnight.


              </li>
              <li><span>Global Economy </span> Inflation, interest rates, and political events affect investor confidence.
              </li>
              <li><span>Technology Upgrades </span> Network updates or hard forks can temporarily affect conversion values.

              </li>

            </ul>
          </div>
          <h5 className="topppec">Crypto Rate Conversion vs. Exchange Rate: What’s the Difference?
          </h5>
          <p>While both terms sound similar, they serve slightly different purposes.
          </p>
          <div className="ules">
            <ul>
              <li><span>Crypto Rate Conversion </span> Used for informational purposes, shows live market value of one crypto versus another.
              </li>
              <li><span>Exchange Rate </span> The exact rate you get when trading on an exchange, which may include transaction fees or small variations (slippage).



              </li>


            </ul>
          </div>
          <p>Conversion tools help you monitor prices; exchanges help you execute transactions.
          </p>
          <h5 className="topppec">How to Use a Crypto Rate Converter</h5>
          <div className="ules">
            <ul>
              <li><span>Select Your Currency Pair  </span>  Choose the crypto you have and the currency you want to convert to.
              </li>
              <li><span>Enter the Amount </span> Input your desired amount (e.g., 1 BTC or 100 DOGE).

              </li>
              <li><span>View Real-Time Results </span>  Instantly see how much your crypto is worth.



              </li>
              <li><span>Optional </span> Explore conversion tables or charts for deeper insights.
              </li>
              <li><span>Bookmark the Page </span>Check daily to stay updated with market movements.


              </li>

            </ul>
          </div>
          <h5 className="topppec">Real-World Example: Converting Ethereum to USD
          </h5>
          <p>Let’s say you own 3 ETH, and the current rate is $2,450 per Ethereum.</p>
          <p>3 × 2,450 = $7,350 USD
          </p>
          <p>Now, if Ethereum rises by 10% tomorrow, your holdings become worth $8,085 USD. This simple example shows why real-time conversion is crucial, the value of your assets can change within hours.
          </p>
          <h5 className="topppec">Benefits of Using a Crypto Conversion Tool
          </h5>
          <div className="ules">
            <ul>
              <li><span>Instant Access to Market Data  </span>
              </li>
              <li><span>Supports Dozens of Currencies and Trading Pairs
              </span>
              </li>
              <li><span>Completely Free to Use
              </span>
              </li>
              <li><span>Easy Portfolio Value Calculation
              </span>
              </li>
              <li><span>No Sign-Up Required
              </span>


              </li>
              <li><span>Works 24/7 Across All Devices

              </span>


              </li>

            </ul>
          </div>
          <p>With these advantages, crypto converters are an essential part of every trader’s toolkit.
          </p>
          <h5 className="topppec">Frequently Asked Questions (FAQ)
          </h5>
          <div className="ules">
            <ul>
              <li><span> How accurate are crypto conversion rates?
              </span>

              </li>
              <p>They’re very accurate if the converter pulls live data from reputable exchanges like Binance or Coinbase.
              </p>
              <li><span> How often do conversion rates change?

              </span>
              </li>
              <p>Prices update every few seconds to reflect real-time market conditions.</p>
              <li><span>Can I convert crypto to my local currency?

              </span>
              </li>
              <p>Yes, most tools support major global fiat currencies like USD, EUR, GBP, INR, AUD, and CAD.
              </p>
              <li><span>Are crypto converters free?
              </span>
              </li>
              <p>Yes. Crypto rate converters are free informational tools for quick calculations.
              </p>
              <li><span> Do converters include exchange fees?
              </span>


              </li>
              <p>No. Displayed rates are market prices. Actual trading may include small fees depending on the platform.
              </p>
              <li><span> How often do conversion rates change?


              </span>


              </li>
              <p> Crypto markets operate 24/7, and rates can change every second.</p>

            </ul>
          </div>
          <h5 className="topppec">Conclusion:
          </h5>
          <p>In the fast-paced world of digital currencies, information is power. A crypto rates conversion tool keeps you informed, accurate, and ready to make smart decisions.
          </p>
          <p>You can check live BTC/USD prices and compare dozens of coins in a conversion table. This lets you see how the market is moving right now. Whether you’re tracking your portfolio, exploring trading opportunities, or just watching crypto trends, a converter helps you stay one step ahead.
          </p>
          <p>Bookmark your favorite crypto converter page, check daily rates, and always stay updated. In crypto, timing isn’t just important; it’s everything.
          </p>
        </div>

      </div>

      <Offcanvas className="currency-offcanvas" show={show} onHide={handleClose} placement="bottom">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <div className="select_currency_div">
            <span>Select Currency</span>
            <div className="inpppput">
              <input
                placeholder="Search Currency"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-control mb-2"
              />
              <svg className="searchicon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9.57429 9.57551L11.6654 11.6666L9.57429 9.57551ZM10.8169 6.57566C10.8169 8.91868 8.91752 10.8181 6.5745 10.8181C4.23144 10.8181 2.33203 8.91868 2.33203 6.57566C2.33203 4.23264 4.23144 2.33325 6.5745 2.33325C8.91752 2.33325 10.8169 4.23264 10.8169 6.57566Z" stroke="#141519" stroke-width="1.33333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            <div className="myflexxx">
              {filteredCoins.map((coin) => (
                <div
                  key={coin.id}
                  className="myydivv"
                  style={{ cursor: "pointer" }}
                 onClick={async () => {
  setFromCoin(coin);
  setSearch("");
  await convert(fromValue, "from", coin, toCoin);
  handleClose(); // ✅ This will close the offcanvas
}}
                >
                  <div className="unnnderside">
                    <img
                      src={coin.image}
                      alt={coin.symbol}
                      className="imggcoinnn"
                    />
                    <h6>{coin.name}</h6>
                    <span className="myyysppan">
                      ({coin.symbol.toUpperCase()})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas className="currency-offcanvas" show={show1} onHide={handleClose1} placement="bottom">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <div className="select_currency_div">
            <span>Select Currency</span>
            <div className="inpppput">
              <svg
                className="searchicon"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M9.57429 9.57551L11.6654 11.6666L9.57429 9.57551ZM10.8169 6.57566C10.8169 8.91868 8.91752 10.8181 6.5745 10.8181C4.23144 10.8181 2.33203 8.91868 2.33203 6.57566C2.33203 4.23264 4.23144 2.33325 6.5745 2.33325C8.91752 2.33325 10.8169 4.23264 10.8169 6.57566Z"
                  stroke="#141519"
                  strokeWidth="1.33333"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                placeholder="Search Currency"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-control mb-2"
              />
            </div>

            <div className="myflexxx">
              {filteredCoins.map((coin) => (
                <div
                  key={coin.id}
                  className="myydivv"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
  setToCoin(coin);
  setSearch("");
  handleClose1(); // ✅ Close on click
}}
                >
                  <div className="unnnderside">
                    <img
                      src={coin.image}
                      alt={coin.symbol}
                      className="imggcoinnn"
                    />
                    <h6>{coin.name}</h6>
                    <span className="myyysppan">
                      ({coin.symbol.toUpperCase()})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Work />
      <Footer />
    </>
  );
};

export default Cryptoconverter;


