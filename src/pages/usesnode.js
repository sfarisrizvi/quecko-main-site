import React from 'react'
import dynamic from 'next/dynamic';
var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const Usesnode = () => {
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
                        <h2>Uses of Smart Contracts
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
                                        <div className="front"> Decentralized Finance (DeFi)</div>
                                        <div className="back"> Decentralized Finance (DeFi)</div>
                                    </div>
                            
                                    <h3>Power lending, borrowing, and trading platforms by running full nodes for real-time transaction validation and data access. Enable validators to secure Proof-of-Stake (PoS) networks, earning rewards while maintaining network integrity.
                                    </h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\hometwo.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> Supply Chain & Logistics</div>
                                        <div className="back">Supply Chain & Logistics</div>
                                    </div>
                                  
                                    <h3>Use nodes to track and verify product movements across the supply chain, ensuring transparency and reducing fraud. Build private blockchain networks with dedicated nodes for secure, tamper-proof record-keeping.</h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homethree.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front">Healthcare</div>
                                        <div className="back"> Healthcare</div>
                                    </div>
                           
                                    <h3>Securely store and share patient data across healthcare providers using decentralized node networks. Ensure compliance and data integrity with immutable blockchain records.</h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homefour.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> Gaming & NFTs</div>
                                        <div className="back"> Gaming & NFTs</div>
                                    </div>
                                  
                                    <h3>Support NFT marketplaces and blockchain-based games with scalable node infrastructure for fast, reliable transactions. Enable cross-chain interoperability for seamless asset transfers between gaming ecosystems.

                                    </h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front">Enterprise Solutions</div>
                                        <div className="back"> Enterprise Solutions</div>
                                    </div>
                                
                                    <h3>Deploy private or consortium blockchains with custom node setups for secure, internal business operations. Use RPC & API services to integrate blockchain data into existing enterprise systems.

                                    </h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> Telecommunications</div>
                                        <div className="back">Telecommunications</div>
                                    </div>
                                 
                                    <h3>Enhance data security and transparency in communication networks with decentralized node infrastructure. Enable micropayments and tokenized services using blockchain-powered solutions.

                                    </h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> Real Estate</div>
                                        <div className="back"> Real Estate</div>
                                    </div>
                               
                                    <h3>Streamline property transactions with transparent, tamper-proof records maintained by full nodes. Facilitate tokenized asset trading and fractional ownership through secure blockchain networks.

                                    </h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> Cross-Chain Interoperability</div>
                                        <div className="back"> Cross-Chain Interoperability</div>
                                    </div>
                                
                                    <h3>Connect multiple blockchain networks using nodes and bridges, enabling seamless asset and data transfers. Build multi-chain applications that leverage the strengths of different blockchains.


                                    </h3>
                                </div>

                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front">Data Marketplaces</div>
                                        <div className="back"> Data Marketplaces</div>
                                    </div>
                               
                                    <h3>Create decentralized data marketplaces where nodes ensure secure, transparent data sharing and monetization. Use validators to maintain trust and consensus in data exchange networks.



                                    </h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homeone.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> Government & Public Sector</div>
                                        <div className="back"> Government & Public Sector</div>
                                    </div>
                                 
                                    <h3>Implement blockchain-based voting systems with nodes ensuring transparency and preventing tampering. Use decentralized infrastructure for secure record-keeping, such as land registries or identity management.


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

export default Usesnode