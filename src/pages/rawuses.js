import React from 'react'
import dynamic from 'next/dynamic';
var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const Rawuses = () => {
    const owl_option = {
        nav: true,
        dots: false,
        dotsEach: false,
        loop: true,
        autoplay: false,
        navText: [
            "<img src='/Assets/leftarrow.svg' alt='img' />",
            "<img src='/Assets/rightarrow.svg' alt='img' />",
        ],
        responsive: {
            0: {
                items: 1,
                margin: 10,
            },
            361: {
                items: 1.1,
                margin: 10,
                loop: true,
                nav: false,
                dots: true,
                dotsEach: true
            },
            600: {
                items: 1.1,
                margin: 10,
                loop: true,
                nav: false,
                dots: true,
                dotsEach: true
            },
            700: {
                items: 2,
                margin: 10,
            },
            1000: {
                items: 3,
                margin: 10,
            },
            1200: {
                items: 4.1,
                margin: 10,
            },



        },
    };

    return (
        <>
            <section className='uses_divv'>
                <div className='inner_bloggs'>
                    <div className='textual_div'>
                        <h6  className='story_div '>Use Cases</h6>
                        <h2>Top Use Cases of  Real-World Asset (RWA) Tokenization
                        </h2>
                    </div>
                    <div className='bottom_side'>
                        <div className="owl_option">
                            <OwlCarousel
                                className="owl-theme"
                                {...owl_option}
                            >

                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front">Real Estate</div>
                                        <div className="back"> Real Estate</div>
                                    </div>

                                    <h3> Tokenized real estate enables fractional ownership, instant transfers, and improved liquidity in property investments.
                                    </h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\hometwo.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front">Supply Chain & Trade Finance</div>
                                        <div className="back"> Supply Chain & Trade Finance</div>
                                    </div>

                                    <h3>Tokenized invoices and trade documents streamline payments, improve transparency, and reduce fraud.
                                    </h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homethree.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> Private Equity & Venture Capital</div>
                                        <div className="back"> Private Equity & Venture Capital</div>
                                    </div>
                                    <h3> Tokenization democratizes access to private equity, allowing fractional investment in startups and funds.
                                    </h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homefour.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front">  Luxury Assets</div>
                                        <div className="back">  Luxury Assets</div>
                                    </div>

                                    <h3> High-value assets like art, watches, and collectibles can be tokenized for fractional ownership and efficient trading.
                                    </h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> Commodities</div>
                                        <div className="back"> Commodities</div>
                                    </div>

                                    <h3> Precious metals, oil, and agricultural goods can be tokenized for easier access, trading, and settlement.

                                    </h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> Debt & Fixed Income</div>
                                        <div className="back"> Debt & Fixed Income</div>
                                    </div>

                                    <h3>Tokenized bonds and loans enhance accessibility, automation, and liquidity in traditional debt markets.

                                    </h3>
                                </div>

                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Rawuses