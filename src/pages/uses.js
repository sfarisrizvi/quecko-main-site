import React from 'react'
import dynamic from 'next/dynamic';
var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const Uses = () => {
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
                        <h5 className='story_div '>Use Cases</h5>
                        <h2>Top Use Cases of Blockchain Development Across Industries</h2>
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
                                        <div className="front"> Decentralized Finance (DeFi)</div>
                                        <div className="back"> Decentralized Finance (DeFi)</div>
                                    </div>

                                    <h3>Enables borderless financial services such as lending, staking, and yield farming.
                                        Eliminates intermediaries, reducing transaction fees and increasing financial inclusion.
                                        Provides instant settlements and transparency through smart contracts.</h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\hometwo.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front">Crypto Wallets & Payment Solutions</div>
                                        <div className="back"> Crypto Wallets & Payment Solutions</div>
                                    </div>
                                    <h3>Securely store and manage digital assets with non-custodial and custodial wallets.
                                        Facilitate seamless cross-border transactions with minimal fees and no central authority.
                                        Integrate multi-chain and Layer 2 solutions for scalability and low-cost transactions.</h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homethree.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> NFT Marketplaces & Digital Ownership</div>
                                        <div className="back"> NFT Marketplaces & Digital Ownership</div>
                                    </div>
                                    <h3>Empower creators and brands to tokenize assets like art, music, gaming items, and real estate.
                                        Ensure authenticity and provenance of digital assets using blockchain’s immutable ledger.
                                        Enable royalty payments through automated smart contracts.</h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homefour.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> Supply Chain & Logistics</div>
                                        <div className="back"> Supply Chain & Logistics</div>
                                    </div>
                                    <h3>Improve traceability with real-time tracking of goods from manufacturer to consumer.
                                        Prevent fraud and counterfeiting with immutable records of product origin and transactions.
                                        Optimize inventory management and reduce inefficiencies with automated contracts.
                                    </h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> Gaming & Metaverse</div>
                                        <div className="back"> Gaming & Metaverse</div>
                                    </div>
=                                    <h3>Enable play-to-earn (P2E) models where players earn crypto rewards.
                                        Offer interoperable digital assets that can be used across different games.
                                        Create decentralized virtual economies with NFT-based ownership and in-game currencies.
                                    </h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front">Enterprise Blockchain Solutions</div>
                                        <div className="back">Enterprise Blockchain Solutions</div>
                                    </div>


                                    <h3>Streamline operations with private and consortium blockchain networks.
                                        Enhance data security and compliance with industry regulations.
                                        Improve contract management and record-keeping with immutable ledgers.
                                    </h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front">Tokenization of Real-World Assets (RWA)</div>
                                        <div className="back"> Tokenization of Real-World Assets (RWA)</div>
                                    </div>

                                    <h3>Digitize real estate, stocks, bonds, and luxury goods into tradable digital tokens.
                                        Enable fractional ownership, making high-value assets accessible to a broader market.
                                        Improve liquidity and global investment opportunities.
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

export default Uses