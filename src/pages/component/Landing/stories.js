import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from 'next/link';
import { getAllBlogs } from "../../../Utils/Services/services"
import { getTimeInAges } from '@/Utils/helpers';
import { categories } from '@/Utils/constants';
import Loader1 from '@/hooks/loader1';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const Stories = () => {
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
    const [blogData, setBlogData] = useState([]);



    const getAllData = async () => {
        try {
            const data = await getAllBlogs();
            setBlogData([...data]);
        } catch (error) {
            console.error(error);
        }
    };





    useEffect(() => {
        getAllData();
    }, [])

    return (
        <>
            <section className='blogs_divv' id="stories">
                <div className='inner_bloggs'>
                    <div className='textual_div'>
                        <span className='blogstag'>Blogs</span>
                        <h2>Latest stories from Quecko</h2>
                    </div>
                    <div className='bottom_side'>
                        {/* ...
                        <div className="owl_option">
                            <OwlCarousel
                                className="owl-theme"
                                {...owl_option}
                            >
                                {blogData?.map((item, index) => {

                                    return (
                                        <>
                                            <Link key={index} href={`/blogdetail?slug=${item?.slug}`}>
                                                <div className='cardss'>
                                                    <div className='blogs_img'>
                                                        <img className='imginnner' src={item?.jetpack_featured_media_url} />

                                                    </div>
                                                    <h1>ARTICLE
                                                     <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                                        <circle cx="1.5" cy="1.62158" r="1.5" fill="#9D9D9D" />
                                                    </svg></span> <span>{categories[item?.categories[0]]}</span></h1>

                                                    <div className="btn-flip">
                                                        <div className="front">{item?.title?.rendered}</div>
                                                        <div className="back">{item?.title?.rendered}</div>
                                                    </div>

                                                    <h3>{getTimeInAges(item?.date)}</h3>
                                                </div></Link>
                                        </>
                                    )
                                })}

                            </OwlCarousel>
                        </div>
                        ... */}
                        <div className="owl_option">

                            {blogData.length > 0 ? (
                                <OwlCarousel className="owl-theme" {...owl_option}>
                                    {blogData.map((item, index) => (
                                        // <Link key={index} href={`/blogdetail?slug=${item?.slug}`}>
                                        <Link key={index} href={`/${item?.slug}`}>

                                            <div className='cardss'>
                                                <div className='blogs_img'>
                                                    <img className='imginnner' src={item?.jetpack_featured_media_url} />
                                                </div>
                                                {/* <h1>ARTICLE <span>•</span> <span>{categories[item?.categories[0]]}</span></h1> */}
                                                <span>ARTICLE
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                                            <circle cx="1.5" cy="1.62158" r="1.5" fill="#9D9D9D" />
                                                        </svg></span> <span>{categories[item?.categories[0]]}</span></span>
                                                <h3 className="btn-flip">
                                                    <div className="front">{item?.title?.rendered}</div>
                                                    <div className="back">{item?.title?.rendered}</div>
                                                </h3>
                                                <span>{getTimeInAges(item?.date)}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </OwlCarousel>
                            ) : (
                                // <p>Loading blogs...</p>
                                <Loader1 />
                            )}
                           

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Stories