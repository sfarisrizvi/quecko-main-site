"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Usesnode = () => {

return (
        <>
            <section className='uses_divv'>
                <div className='inner_bloggs'>
                    <div className='textual_div'>
                        <span  className='story_div '>Use Cases</span>
                        <h2>Uses of Smart Contracts
                        </h2>
                    </div>
                    <div className='bottom_side'>
                        <div className="owl_option">
                            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                    361: { slidesPerView: 1.1 },
                    700: { slidesPerView: 2 },
                    1000: { slidesPerView: 3 },
                    1200: { slidesPerView: 4.1 },
                }}
            >

                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/homeone.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Decentralized Finance (DeFi)</div>
                                        <div className="back"> Decentralized Finance (DeFi)</div>
                                    </h3>

                                    <p>Power lending, borrowing, and trading platforms by running full nodes for real-time transaction validation and data access. Enable validators to secure Proof-of-Stake (PoS) networks, earning rewards while maintaining network integrity.
                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/hometwo.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Supply Chain & Logistics</div>
                                        <div className="back">Supply Chain & Logistics</div>
                                    </h3>

                                    <p>Use nodes to track and verify product movements across the supply chain, ensuring transparency and reducing fraud. Build private blockchain networks with dedicated nodes for secure, tamper-proof record-keeping.</p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/homethree.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front">Healthcare</div>
                                        <div className="back"> Healthcare</div>
                                    </h3>

                                    <p>Securely store and share patient data across healthcare providers using decentralized node networks. Ensure compliance and data integrity with immutable blockchain records.</p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/homefour.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Gaming & NFTs</div>
                                        <div className="back"> Gaming & NFTs</div>
                                    </h3>

                                    <p>Support NFT marketplaces and blockchain-based games with scalable node infrastructure for fast, reliable transactions. Enable cross-chain interoperability for seamless asset transfers between gaming ecosystems.

                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/homeone.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front">Enterprise Solutions</div>
                                        <div className="back"> Enterprise Solutions</div>
                                    </h3>

                                    <p>Deploy private or consortium blockchains with custom node setups for secure, internal business operations. Use RPC & API services to integrate blockchain data into existing enterprise systems.

                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/homeone.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Telecommunications</div>
                                        <div className="back">Telecommunications</div>
                                    </h3>

                                    <p>Enhance data security and transparency in communication networks with decentralized node infrastructure. Enable micropayments and tokenized services using blockchain-powered solutions.

                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/homeone.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Real Estate</div>
                                        <div className="back"> Real Estate</div>
                                    </h3>

                                    <p>Streamline property transactions with transparent, tamper-proof records maintained by full nodes. Facilitate tokenized asset trading and fractional ownership through secure blockchain networks.

                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/homeone.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Cross-Chain Interoperability</div>
                                        <div className="back"> Cross-Chain Interoperability</div>
                                    </h3>

                                    <p>Connect multiple blockchain networks using nodes and bridges, enabling seamless asset and data transfers. Build multi-chain applications that leverage the strengths of different blockchains.


                                    </p>
                                </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/homeone.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front">Data Marketplaces</div>
                                        <div className="back"> Data Marketplaces</div>
                                    </h3>

                                    <p>Create decentralized data marketplaces where nodes ensure secure, transparent data sharing and monetization. Use validators to maintain trust and consensus in data exchange networks.



                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/homeone.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Government & Public Sector</div>
                                        <div className="back"> Government & Public Sector</div>
                                    </h3>

                                    <p>Implement blockchain-based voting systems with nodes ensuring transparency and preventing tampering. Use decentralized infrastructure for secure record-keeping, such as land registries or identity management.


                                    </p>
                                </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Usesnode
