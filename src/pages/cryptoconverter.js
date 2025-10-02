import React, { useEffect, useState } from "react";
import Work from "./component/Landing/work";
import Footer from "./component/Landing/footer";
import Header from "./component/Landing/header";
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from "react-bootstrap/Offcanvas";
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
    { id: "usd", symbol: "USD", name: "US Dollar", image: "/assets/dollar.svg" },
    { id: "gbp", symbol: "GBP", name: "British Pound", image: "/assets/gbp.svg" },
    { id: "eur", symbol: "EUR", name: "Euro", image: "/assets/euro.svg" },
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
                  <h1>Cryptocurrency Converter & Calculator</h1>
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
                      <div className="innner_inputs" onClick={() => setOpen(!open)}>
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
        <div className="innner_inputs" onClick={() => setOpenRight(!openRight)}>
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
                    <img src="\assets\smallimgcoin.svg" alt="BTC" />
                    <h6>BTC</h6>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M5.83341 2L3.16675 4.66667L5.83341 7.33333" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.16675 4.66669H13.8334" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.1667 14L13.8334 11.3334L11.1667 8.66669" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.8334 11.3333H3.16675" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="innner_coversion">
                    <img src="\assets\gbp.svg" alt="GBP" />
                    <h6>GBP</h6>
                  </div>
                </div>

                <div
                  className="outer_converstion"
                  onClick={() => handlePopularClick("BTC", "ETH")}
                >
                  <div className="innner_coversion">
                    <img src="\assets\smallimgcoin.svg" alt="BTC" />
                    <h6>BTC</h6>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M5.83341 2L3.16675 4.66667L5.83341 7.33333" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.16675 4.66669H13.8334" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.1667 14L13.8334 11.3334L11.1667 8.66669" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.8334 11.3333H3.16675" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="innner_coversion">
                    <img src="\assets\ethh.svg" alt="ETH" />
                    <h6>ETH</h6>
                  </div>
                </div>

                <div
                  className="outer_converstion"
                  onClick={() => handlePopularClick("XRP", "ETH")}
                >
                  <div className="innner_coversion">
                    <img src="\assets\xrp.svg" alt="XRP" />
                    <h6>XRP</h6>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M5.83341 2L3.16675 4.66667L5.83341 7.33333" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.16675 4.66669H13.8334" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.1667 14L13.8334 11.3334L11.1667 8.66669" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.8334 11.3333H3.16675" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="innner_coversion">
                    <img src="\assets\ethh.svg" alt="ETH" />
                    <h6>ETH</h6>
                  </div>
                </div>

                <div
                  className="outer_converstion"
                  onClick={() => handlePopularClick("ETH", "USD")}
                >
                  <div className="innner_coversion">
                    <img src="\assets\ethh.svg" alt="ETH" />
                    <h6>ETH</h6>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M5.83341 2L3.16675 4.66667L5.83341 7.33333" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.16675 4.66669H13.8334" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.1667 14L13.8334 11.3334L11.1667 8.66669" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.8334 11.3333H3.16675" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="innner_coversion">
                    <img src="\assets\dollar.svg" alt="USD" />
                    <h6>USD</h6>
                  </div>
                </div>

                <div
                  className="outer_converstion"
                  onClick={() => handlePopularClick("SOL", "USDT")}
                >
                  <div className="innner_coversion">
                    <img src="\assets\sol.svg" alt="SOL" />
                    <h6>SOL</h6>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M5.83341 2L3.16675 4.66667L5.83341 7.33333" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.16675 4.66669H13.8334" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.1667 14L13.8334 11.3334L11.1667 8.66669" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.8334 11.3333H3.16675" stroke="#9D9D9D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="innner_coversion">
                    <img src="\assets\usdt.svg" alt="USDT" />
                    <h6>USDT</h6>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        <div className="bottom_converter">
          <h4>Vel rerum dolor id pariatur cupiditate non minima perspiciatis vel sapiente magni est nihil nihil quo obcaecati iste</h4>
          <p>Lorem ipsum dolor sit amet. Vel esse doloremque est quaerat commodi sit laudantium itaque qui rerum repellat in unde dolore. Sit facere veniam qui dolores autem aut nihil laborum. Vel molestiae ipsa est animi repudiandae et fugit quisquam. Ut rerum velit ab odio aliquid in perferendis consequatur a possimus consequatur qui mollitia saepe ut nostrum adipisci.</p>
          <h5>Eos voluptatem dolores id</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <div className="ules">
            <ul>
              <li><span>Integer vitae </span>dignissim natoque a egestas. Fames hendrerit lacus ad lacinia sociosqu nascetur nibh a dapibus leo dis vitae, tellus scelerisque mi. Sed praesent auctor</li>
              <li><span>Curabitur semper</span>magnis congue volutpat senectus, dictum egestas tortor. Metus facilisis facilisi nullam tempus, diam nascetur.</li>
              <li><span>Eu commodo </span>orci efficitur etiam quam sem tortor netus etiam viverra posuere. Netus donec suspendisse arcu fusce quisque leo.</li>
            </ul>
          </div>

          <h5 className="topppec">Et tempore mollitia nam molestias</h5>
          <p>Eros dictum ante class sagittis dolor suspendisse pretium. Rutrum amet penatibus velit amet arcu sociosqu vivamus id.</p>
          <div className="ules">
            <ul>
              <li><span>Accounts </span>Viverra habitant nisl aptent neque faucibus.</li>
              <li><span>Fee on Tomi </span>Integer quisque nisl fermentum mi at convallis quisque elementum.</li>
              <li><span>Transactions </span> Sem tortor netus etiam viverra posuere netus donec suspendisse.</li>
              <li><span>Programs Derived Address  </span> Metus aptent facilisi nullam nibh ante pharetra tortor.</li>
              <li><span>Fee on Tomi </span>Integer quisque nisl fermentum mi at convallis quisque elementum.</li>
              <li><span>Cross Program Invocation </span> Himenaeos vitae natoque class; elit malesuada maximus fringilla congue dictum scelerisque.</li>
            </ul>
          </div>

          <h5 className="topppec">Aut beatae nihil ex odit laudantium</h5>
          <p>At praesent consectetur elit etiam quam vitae. Morbi litora dictum iaculis enim lectus pretium. Dis hendrerit cras platea facilisis a rutrum. Tristique ligula vivamus habitasse imperdiet fringilla dapibus. Aliquet cursus convallis nisi rhoncus tortor neque. Placerat praesent maecenas; primis et eu tincidunt mattis. Aenean dis luctus magnis; potenti augue amet velit.</p>
          <p>usto molestie orci habitant vehicula sodales phasellus. Scelerisque ridiculus fusce nisi in platea. Sem conubia arcu eleifend aptent adipiscing.</p>
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
                    handleClose1
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


