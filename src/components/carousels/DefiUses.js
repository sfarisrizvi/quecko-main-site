"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Defiuses = () => {

return (
        <>
            <section className='uses_divv'>
                <div className='inner_bloggs'>
                    <div className='textual_div'>
                        <span  className='story_div'>Use Cases</span>
                        <h2>Top Use Cases of How Quecko Drives Real-World Impact</h2>
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
                                        <div className="front">  Web3 Wallets & Digital Asset Management</div>
                                        <div className="back">  Web3 Wallets & Digital Asset Management</div>
                                    </h3>

                                    <p>Quecko's secure Web3 wallets empower users to manage cryptocurrencies, NFTs, and digital assets effortlessly. With multi-chain support and top-tier encryption, we ensure users have full control over their assets.
                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/hometwo.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Decentralized Finance (DeFi) Platforms</div>
                                        <div className="back"> Decentralized Finance (DeFi) Platforms</div>
                                    </h3>

                                    <p>From yield farming to staking, Quecko builds DeFi platforms that enable users to earn passive income securely. Our solutions integrate smart contracts for trustless transactions and real-time analytics.
                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/homethree.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front">  NFT Marketplaces</div>
                                        <div className="back">  NFT Marketplaces</div>
                                    </h3>

                                    <p>Quecko creates NFT marketplaces for art, gaming, and real estate, enabling seamless minting, trading, and auctions. Our platforms ensure creators and collectors thrive in the digital ownership economy.</p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/homefour.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Decentralized Exchanges (DEX)</div>
                                        <div className="back"> Decentralized Exchanges (DEX)</div>
                                    </h3>

                                    <p>Quecko's DEX solutions, including AMM-based and cross-chain platforms, allow users to trade assets securely and transparently without intermediaries.
                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/homeone.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Real-World Asset (RWA) Tokenization</div>
                                        <div className="back"> Real-World Asset (RWA) Tokenization</div>
                                    </h3>

                                    <p>Quecko brings real-world assets like real estate and commodities on-chain, enabling fractional ownership and seamless trading through blockchain-based tokenization.

                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/homeone.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Smart Contract-Based Identity Systems</div>
                                        <div className="back"> Smart Contract-Based Identity Systems</div>
                                    </h3>

                                    <p>Quecko develops decentralized identity management systems, ensuring privacy and security while reducing reliance on centralized databases.
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

export default Defiuses
