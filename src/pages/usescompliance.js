import React from 'react'
import dynamic from 'next/dynamic';
var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const Usescompliance = () => {
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
                        <h1>Use Cases</h1>
                        <h2>Use Cases of Tokenomics & Compliance</h2>
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
                                        <div className="front">Fundraising & ICO/IDO Compliance</div>
                                        <div className="back"> Fundraising & ICO/IDO Compliance</div>
                                    </div>
                                
                                    <h3>Projects raising capital through token sales (ICO, IDO, or STO) must adhere to legal requirements like KYC/AML regulations to prevent fraud and ensure investor protection.
                                    </h3>
                                </div>
                                <div className='cardss'>
                                    <div className='blogs_img'>
                                        <img className='imginnner' src='\Assets\hometwo.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front">Play-to-Earn (P2E) & Gaming Economies</div>
                                        <div className="back">Play-to-Earn (P2E) & Gaming Economies</div>
                                    </div>
                                    <h3>Gaming platforms use tokenomics to structure in-game rewards, ensuring fair distribution while maintaining regulatory compliance in different jurisdictions.
                                    </h3>
                                </div>
                                <div className='cardss'>
                                    <div className='blogs_img'>
                                        <img className='imginnner' src='\Assets\homethree.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front">DeFi Lending & Staking Models</div>
                                        <div className="back"> DeFi Lending & Staking Models</div>
                                    </div>
                                    
                                    <h3>Decentralized finance (DeFi) platforms require secure and compliant token models to manage staking rewards, yield farming, and interest-bearing assets without violating financial laws.
                                    </h3>
                                </div>
                                <div className='cardss'>
                                    <div className='blogs_img'>
                                        <img className='imginnner' src='\Assets\homefour.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> Governance & DAO Frameworks</div>
                                        <div className="back">Governance & DAO Frameworks</div>
                                    </div>
                                  
                                    <h3>Decentralized Autonomous Organizations (DAOs) utilize governance tokens to facilitate on-chain decision-making while ensuring compliance with securities laws and legal entity structuring.
                                    </h3>
                                </div>
                                <div className='cardss'>
                                    <div className='blogs_img'>
                                        <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front">Real World Asset (RWA) Tokenization</div>
                                        <div className="back">Real World Asset (RWA) Tokenization</div>
                                    </div>
                                   
                                    <h3>Projects tokenizing real-world assets like real estate, commodities, or equities must follow securities regulations to ensure legal ownership and investor rights.

                                    </h3>
                                </div>
                                <div className='cardss'>
                                    <div className='blogs_img'>
                                        <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> Cross-Border Payments & Stablecoins</div>
                                        <div className="back"> Cross-Border Payments & Stablecoins</div>
                                    </div>
                              
                                    <h3>Stablecoins and crypto payment networks require compliance with global financial regulations (FATF, MiCA, SEC) to prevent illicit transactions and ensure seamless cross-border transfers.

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

export default Usescompliance