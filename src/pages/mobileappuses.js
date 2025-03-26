import React from 'react'
import dynamic from 'next/dynamic';
var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const Mobileappuses = () => {
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
                        <h2>Top Use Cases of Mobile App Development</h2>
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
                                        <div className="front"> Web3 Wallets & Digital Asset Management</div>
                                        <div className="back"> Web3 Wallets & Digital Asset Management</div>
                                    </div>
                               
                                    <h3>Our mobile Web3 wallets provide secure and seamless management of cryptocurrencies, NFTs, and other digital assets. With features like multi-chain support, private key security, and seamless DApp integration, we ensure users have full control over their assets.
                                    </h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\hometwo.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front">Decentralized Finance (DeFi) Apps</div>
                                        <div className="back"> Decentralized Finance (DeFi) Apps</div>
                                    </div>
                            
                                    <h3>We develop DeFi applications that enable lending, staking, and yield farming directly from mobile devices. Our solutions integrate smart contracts to provide trustless transactions, real-time analytics, and secure fund management.</h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homethree.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> NFT Marketplaces & Tokenization</div>
                                        <div className="back"> NFT Marketplaces & Tokenization</div>
                                    </div>
                                    <h3>Our NFT marketplace solutions offer minting, buying, and selling of digital collectibles through an intuitive mobile interface. We ensure seamless integration with blockchain networks for efficient trading and ownership verification.</h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homefour.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front">Decentralized Exchanges (DEX) & Trading Platforms</div>
                                        <div className="back">Decentralized Exchanges (DEX) & Trading Platforms</div>
                                    </div>
                                    <h3>We build DEX platforms that facilitate peer-to-peer trading of crypto assets, ensuring high security and transparency. Our mobile-friendly interfaces allow users to swap, stake, and provide liquidity without intermediaries.
                                    </h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> Real-World Asset (RWA) Tokenization</div>
                                        <div className="back">Real-World Asset (RWA) Tokenization</div>
                                    </div>
                                 
                                    <h3>Our mobile solutions bring real-world assets on-chain, enabling fractional ownership and seamless trading of physical assets like real estate, commodities, and fine art via blockchain-based tokenization.

                                    </h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front">Smart Contract-Based Identity & Security</div>
                                        <div className="back">Smart Contract-Based Identity & Security</div>
                                    </div>
                                
                                    <h3>We develop identity management systems leveraging blockchain to offer decentralized authentication, reducing reliance on centralized databases while ensuring privacy and security.
                                        Our Web3-focused mobile solutions are designed for scalability, security, and user experience, making decentralized applications more accessible to global users.

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

export default Mobileappuses