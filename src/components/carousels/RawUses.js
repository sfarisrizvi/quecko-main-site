"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Rawuses = () => {

return (
        <>
            <section className='uses_divv'>
                <div className='inner_bloggs'>
                    <div className='textual_div'>
                        <span  className='story_div '>Use Cases</span>
                        <h2>Top Use Cases of  Real-World Asset (RWA) Tokenization
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
                                        <div className="front">Real Estate</div>
                                        <div className="back"> Real Estate</div>
                                    </h3>

                                    <p> Tokenized real estate enables fractional ownership, instant transfers, and improved liquidity in property investments.
                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/hometwo.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front">Supply Chain & Trade Finance</div>
                                        <div className="back"> Supply Chain & Trade Finance</div>
                                    </h3>

                                    <p>Tokenized invoices and trade documents streamline payments, improve transparency, and reduce fraud.
                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/homethree.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Private Equity & Venture Capital</div>
                                        <div className="back"> Private Equity & Venture Capital</div>
                                    </h3>
                                    <p> Tokenization democratizes access to private equity, allowing fractional investment in startups and funds.
                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/homefour.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front">  Luxury Assets</div>
                                        <div className="back">  Luxury Assets</div>
                                    </h3>

                                    <p> High-value assets like art, watches, and collectibles can be tokenized for fractional ownership and efficient trading.
                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/homeone.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Commodities</div>
                                        <div className="back"> Commodities</div>
                                    </h3>

                                    <p> Precious metals, oil, and agricultural goods can be tokenized for easier access, trading, and settlement.

                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/homeone.webp' />
                                    </div>
                                    <h3 className="btn-flip">
                                        <div className="front"> Debt & Fixed Income</div>
                                        <div className="back"> Debt & Fixed Income</div>
                                    </h3>

                                    <p>Tokenized bonds and loans enhance accessibility, automation, and liquidity in traditional debt markets.

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

export default Rawuses
