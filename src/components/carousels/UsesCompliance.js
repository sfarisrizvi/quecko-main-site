"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Usescompliance = () => {

return (
        <>
            <section className='uses_divv'>
                <div className='inner_bloggs'>
                    <div className='textual_div'>
                        <span className='story_div '>Use Cases</span>
                        <h2>Use Cases of Tokenomics & Compliance</h2>
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
                                        <div className="front">Fundraising & ICO/IDO Compliance</div>
                                        <div className="back"> Fundraising & ICO/IDO Compliance</div>
                                    </h3>

                                    <p>Projects raising capital through token sales (ICO, IDO, or STO) must adhere to legal requirements like KYC/AML regulations to prevent fraud and ensure investor protection.
                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                    <div className='blogs_img'>
                                        <img className='imginnner' src='/Assets/hometwo.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front">Play-to-Earn (P2E) & Gaming Economies</div>
                                        <div className="back">Play-to-Earn (P2E) & Gaming Economies</div>
                                    </h3>
                                    <p>Gaming platforms use tokenomics to structure in-game rewards, ensuring fair distribution while maintaining regulatory compliance in different jurisdictions.
                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                    <div className='blogs_img'>
                                        <img className='imginnner' src='/Assets/homethree.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front">DeFi Lending & Staking Models</div>
                                        <div className="back"> DeFi Lending & Staking Models</div>
                                    </h3>

                                    <p>Decentralized finance (DeFi) platforms require secure and compliant token models to manage staking rewards, yield farming, and interest-bearing assets without violating financial laws.
                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                    <div className='blogs_img'>
                                        <img className='imginnner' src='/Assets/homefour.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Governance & DAO Frameworks</div>
                                        <div className="back">Governance & DAO Frameworks</div>
                                    </h3>

                                    <p>Decentralized Autonomous Organizations (DAOs) utilize governance tokens to facilitate on-chain decision-making while ensuring compliance with securities laws and legal entity structuring.
                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                    <div className='blogs_img'>
                                        <img className='imginnner' src='/Assets/homeone.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front">Real World Asset (RWA) Tokenization</div>
                                        <div className="back">Real World Asset (RWA) Tokenization</div>
                                    </h3>

                                    <p>Projects tokenizing real-world assets like real estate, commodities, or equities must follow securities regulations to ensure legal ownership and investor rights.

                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                    <div className='blogs_img'>
                                        <img className='imginnner' src='/Assets/homeone.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Cross-Border Payments & Stablecoins</div>
                                        <div className="back"> Cross-Border Payments & Stablecoins</div>
                                    </h3>

                                    <p>Stablecoins and crypto payment networks require compliance with global financial regulations (FATF, MiCA, SEC) to prevent illicit transactions and ensure seamless cross-border transfers.

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

export default Usescompliance
