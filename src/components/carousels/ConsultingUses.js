"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Consultinguses = () => {

return (
        <>
            <section className='uses_divv'>
                <div className='inner_bloggs'>
                    <div className='textual_div'>
                        <span  className='story_div '>Use Cases</span>
                        <h2>Use Cases of Enterprise & Consulting Services
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
                                    <div className="btn-flip">
                                        <div className="front">Financial Services</div>
                                        <div className="back"> Financial Services</div>
                                    </div>

                                    <h3>We develop secure and automated smart contract solutions for banks, fintech companies, and asset managers, streamlining transactions, reducing fraud, and ensuring compliance.
                                    </h3>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/hometwo.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> Supply Chain & Logistics</div>
                                        <div className="back"> Supply Chain & Logistics</div>
                                    </div>

                                    <h3>Our solutions bring real-time tracking, automation, and transparency to supply chains, enabling efficient inventory management and seamless cross-border trade.
                                    </h3>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/homethree.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> Healthcare & Pharmaceuticals</div>
                                        <div className="back"> Healthcare & Pharmaceuticals</div>
                                    </div>

                                    <h3>We provide data security and interoperability solutions that improve patient data sharing, automate claims processing, and enhance drug traceability.</h3>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='/Assets/homefour.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front">Real Estate & Asset Management</div>
                                        <div className="back"> Real Estate & Asset Management</div>
                                    </div>
                                    <h3>Our smart contract solutions enable seamless property transactions, digital ownership verification, and automated lease agreements, reducing paperwork and fraud.

</h3>
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

export default Consultinguses
