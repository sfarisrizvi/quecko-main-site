import React from 'react'
import dynamic from 'next/dynamic';
var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const Crossuses = () => {
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
                        <span className='story_div '>Use Cases</span>
                        <h2>Use Cases of Interoperability & Cross-Chain Solutions
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
                                    <h3 className="btn-flip">
                                        <div className="front"> Cross-Chain Asset Transfers</div>
                                        <div className="back"> Cross-Chain Asset Transfers</div>
                                    </h3>

                                    <p>We enable seamless transfer of cryptocurrencies, tokens, and NFTs between different blockchain networks. Our interoperability solutions eliminate reliance on centralized exchanges, enhancing liquidity and reducing transaction costs.
                                    </p>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\hometwo.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front">Decentralized Finance (DeFi) Expansion</div>
                                        <div className="back"> Decentralized Finance (DeFi) Expansion</div>
                                    </h3>

                                    <p>We build cross-chain DeFi solutions that allow users to lend, borrow, and stake assets across multiple blockchain networks. This enhances financial inclusivity and improves capital efficiency within decentralized ecosystems.</p>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homethree.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Multi-Chain dApps & Smart Contracts</div>
                                        <div className="back">Multi-Chain dApps & Smart Contracts</div>
                                    </h3>

                                    <p>Our multi-chain dApp development ensures decentralized applications operate efficiently across multiple blockchains. We implement smart contracts that trigger actions across networks, optimizing scalability, transaction speed, and cost-effectiveness.
                                    </p>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homefour.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Blockchain-Based Identity Management</div>
                                        <div className="back"> Blockchain-Based Identity Management</div>
                                    </h3>

                                    <p>We provide interoperable identity management solutions that allow individuals to use a single decentralized identity across various platforms. This enhances security, simplifies authentication, and eliminates redundant logins.

                                    </p>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front">Supply Chain & Logistics Optimization</div>
                                        <div className="back">Supply Chain & Logistics Optimization</div>
                                    </h3>

                                    <p>Our cross-chain blockchain solutions improve transparency and efficiency in supply chain operations. Businesses can track shipments, verify product authenticity, and ensure compliance across different blockchain networks.

                                    </p>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Cross-Chain NFT Marketplaces</div>
                                        <div className="back"> Cross-Chain NFT Marketplaces</div>
                                    </h3>

                                    <p>We enable NFT interoperability, allowing digital assets to be seamlessly traded, transferred, and utilized across multiple blockchains. This expands market opportunities for NFT creators and collectors while increasing liquidity.
                                    </p>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front">Layer 2 Scaling & Cost Reduction</div>
                                        <div className="back"> Layer 2 Scaling & Cost Reduction</div>
                                    </h3>

                                    <p> Our interoperability solutions integrate Layer 2 scaling technologies to reduce transaction fees and congestion on primary blockchains. This enhances network efficiency, making blockchain adoption more scalable and cost-effective.

                                    </p>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Gaming & Metaverse Integrationsn</div>
                                        <div className="back"> Gaming & Metaverse Integrationsn</div>
                                    </h3>

                                    <p>We develop interoperable gaming and metaverse solutions that allow users to transfer in-game assets, digital currencies, and virtual identities between different platforms, creating a truly connected and immersive experience.


                                    </p>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Crossuses