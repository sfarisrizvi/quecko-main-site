"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { getAllBlogs } from "@/Utils/Services/services"
import { getTimeInAges } from '@/Utils/helpers';
import { categories } from '@/Utils/constants';
import dynamic from "next/dynamic"
const Loader1 = dynamic(() => import("@/hooks/loader1"), { ssr: false })
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Stories = () => {
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);

        getAllBlogs(10)
            .then((data) => {
                if (!cancelled && Array.isArray(data)) {
                    setBlogData(data);
                }
            })
            .catch((err) => console.error('Stories fetch error:', err))
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => { cancelled = true; };
    }, []);

    return (
        <section className='blogs_divv' id="stories">
            <div className='inner_bloggs'>
                <div className='textual_div'>
                    <span className='blogstag'>Blogs</span>
                    <h2>Latest Stories from Quecko</h2>
                </div>
                <div className='bottom_side'>
                    <div className="owl_option">
                        {!loading && blogData.length > 0 ? (
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
                                {blogData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Link href={`/${item?.slug}`}>
                                            <div className='cardss'>
                                                <div className='blogs_img'>
                                                    <img
                                                        className='imginnner'
                                                        src={item?.jetpack_featured_media_url}
                                                        alt={item?.title?.rendered || 'Blog post'}
                                                        loading="lazy"
                                                        width={400}
                                                        height={250}
                                                    />
                                                </div>
                                                <span>
                                                    ARTICLE
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                                            <circle cx="1.5" cy="1.62158" r="1.5" fill="#9D9D9D" />
                                                        </svg>
                                                    </span>
                                                    <span>{categories[item?.categories?.[0]]}</span>
                                                </span>
                                                <h3 className="btn-flip">
                                                    <div className="front">{item?.title?.rendered}</div>
                                                    <div className="back">{item?.title?.rendered}</div>
                                                </h3>
                                                <span>{getTimeInAges(item?.date)}</span>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <Loader1 />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stories;
