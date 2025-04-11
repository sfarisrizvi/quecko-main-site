import React from 'react'
import dynamic from 'next/dynamic';
var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const Usesdevelopmentlanding = () => {
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
                items: 6.1,
                margin: 10,
            },



        },
    };

    return (
        <>
            <section className='uses_divv'>
                <div className='inner_bloggs'>
                    <div className='textual_div new_texxxt_div'>
                        <span className='story_div'>Quecko Studio</span>
                        <h2>Quecko Studio</h2>
                    </div>
                    <div className='bottom_side'>
                        <div className="owl_option">
                            <OwlCarousel
                                className="owl-theme"
                                {...owl_option}
                            >

                                <div className='cardss new_cardss11'>
                                    <a href='https://www.youtube.com/watch?v=NUOoiurGT2U' target='blank'>
                                    <svg className='imgplay' xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                                        <g clip-path="url(#clip0_969_2395)">
                                            <rect width="62" height="62" rx="31" fill="#C1FF14" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31 66.5588C48.6244 66.5588 62.9118 50.6386 62.9118 31C62.9118 11.3614 48.6244 -4.55884 31 -4.55884C13.3756 -4.55884 -0.911743 11.3614 -0.911743 31C-0.911743 50.6386 13.3756 66.5588 31 66.5588ZM25.0443 44.9925C23.0475 46.0247 20.6667 44.5753 20.6667 42.3275V21.1282C20.6667 18.8567 23.0932 17.4092 25.092 18.4884L45.1509 29.3185C47.2721 30.4637 47.2446 33.5163 45.1033 34.6233L25.0443 44.9925Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_969_2395">
                                                <rect width="62" height="62" rx="31" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    </a>
                                    <img src='\Assets\videoimg1.png'  className='img_cardsse_new'/>
                                </div>
                                <div className='cardss new_cardss11'>
                                <a href='https://www.youtube.com/shorts/qFUpxw1mcYk' target='blank'>
                                    <svg className='imgplay' xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                                        <g clip-path="url(#clip0_969_2395)">
                                            <rect width="62" height="62" rx="31" fill="#C1FF14" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31 66.5588C48.6244 66.5588 62.9118 50.6386 62.9118 31C62.9118 11.3614 48.6244 -4.55884 31 -4.55884C13.3756 -4.55884 -0.911743 11.3614 -0.911743 31C-0.911743 50.6386 13.3756 66.5588 31 66.5588ZM25.0443 44.9925C23.0475 46.0247 20.6667 44.5753 20.6667 42.3275V21.1282C20.6667 18.8567 23.0932 17.4092 25.092 18.4884L45.1509 29.3185C47.2721 30.4637 47.2446 33.5163 45.1033 34.6233L25.0443 44.9925Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_969_2395">
                                                <rect width="62" height="62" rx="31" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    </a>
                                    <img src='\Assets\videoimg2.png' className='img_cardsse_new' />
                                </div>
                                <div className='cardss new_cardss11'>
                                <a href='
https://www.youtube.com/shorts/hW7STeucGts' target='blank'>
                                    <svg className='imgplay' xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                                        <g clip-path="url(#clip0_969_2395)">
                                            <rect width="62" height="62" rx="31" fill="#C1FF14" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31 66.5588C48.6244 66.5588 62.9118 50.6386 62.9118 31C62.9118 11.3614 48.6244 -4.55884 31 -4.55884C13.3756 -4.55884 -0.911743 11.3614 -0.911743 31C-0.911743 50.6386 13.3756 66.5588 31 66.5588ZM25.0443 44.9925C23.0475 46.0247 20.6667 44.5753 20.6667 42.3275V21.1282C20.6667 18.8567 23.0932 17.4092 25.092 18.4884L45.1509 29.3185C47.2721 30.4637 47.2446 33.5163 45.1033 34.6233L25.0443 44.9925Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_969_2395">
                                                <rect width="62" height="62" rx="31" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    </a>
                                    <img src='\Assets\videoimg3.png' className='img_cardsse_new' />
                                </div>
                                <div className='cardss new_cardss11'>
                                <a href='
https://www.youtube.com/shorts/Sac7lR3x_So' target='blank'>
                                    <svg className='imgplay' xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                                        <g clip-path="url(#clip0_969_2395)">
                                            <rect width="62" height="62" rx="31" fill="#C1FF14" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31 66.5588C48.6244 66.5588 62.9118 50.6386 62.9118 31C62.9118 11.3614 48.6244 -4.55884 31 -4.55884C13.3756 -4.55884 -0.911743 11.3614 -0.911743 31C-0.911743 50.6386 13.3756 66.5588 31 66.5588ZM25.0443 44.9925C23.0475 46.0247 20.6667 44.5753 20.6667 42.3275V21.1282C20.6667 18.8567 23.0932 17.4092 25.092 18.4884L45.1509 29.3185C47.2721 30.4637 47.2446 33.5163 45.1033 34.6233L25.0443 44.9925Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_969_2395">
                                                <rect width="62" height="62" rx="31" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    </a>
                                    <img src='\Assets\videoimg4.png'  className='img_cardsse_new'/>
                                </div>
                                <div className='cardss new_cardss11'>
                                <a href='
https://www.youtube.com/shorts/cOIVVZRx2z4 66666' target='blank'>
                                    <svg className='imgplay' xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                                        <g clip-path="url(#clip0_969_2395)">
                                            <rect width="62" height="62" rx="31" fill="#C1FF14" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31 66.5588C48.6244 66.5588 62.9118 50.6386 62.9118 31C62.9118 11.3614 48.6244 -4.55884 31 -4.55884C13.3756 -4.55884 -0.911743 11.3614 -0.911743 31C-0.911743 50.6386 13.3756 66.5588 31 66.5588ZM25.0443 44.9925C23.0475 46.0247 20.6667 44.5753 20.6667 42.3275V21.1282C20.6667 18.8567 23.0932 17.4092 25.092 18.4884L45.1509 29.3185C47.2721 30.4637 47.2446 33.5163 45.1033 34.6233L25.0443 44.9925Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_969_2395">
                                                <rect width="62" height="62" rx="31" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    </a>
                                    <img src='\Assets\videoimg5.png'  className='img_cardsse_new'/>
                                </div>
                                <div className='cardss new_cardss11'>
                                <a href='https://www.youtube.com/shorts/gXBVxw1i7bY' target='blank'>
                                    <svg className='imgplay' xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                                        <g clip-path="url(#clip0_969_2395)">
                                            <rect width="62" height="62" rx="31" fill="#C1FF14" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31 66.5588C48.6244 66.5588 62.9118 50.6386 62.9118 31C62.9118 11.3614 48.6244 -4.55884 31 -4.55884C13.3756 -4.55884 -0.911743 11.3614 -0.911743 31C-0.911743 50.6386 13.3756 66.5588 31 66.5588ZM25.0443 44.9925C23.0475 46.0247 20.6667 44.5753 20.6667 42.3275V21.1282C20.6667 18.8567 23.0932 17.4092 25.092 18.4884L45.1509 29.3185C47.2721 30.4637 47.2446 33.5163 45.1033 34.6233L25.0443 44.9925Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_969_2395">
                                                <rect width="62" height="62" rx="31" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    </a>
                                    <img src='\Assets\videoimg6.png'  className='img_cardsse_new'/>
                                </div>
                                <div className='cardss new_cardss11'>
                                <a href='https://www.youtube.com/shorts/dzBMQoZmCNQ' target='blank'>
                                    <svg className='imgplay' xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                                        <g clip-path="url(#clip0_969_2395)">
                                            <rect width="62" height="62" rx="31" fill="#C1FF14" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31 66.5588C48.6244 66.5588 62.9118 50.6386 62.9118 31C62.9118 11.3614 48.6244 -4.55884 31 -4.55884C13.3756 -4.55884 -0.911743 11.3614 -0.911743 31C-0.911743 50.6386 13.3756 66.5588 31 66.5588ZM25.0443 44.9925C23.0475 46.0247 20.6667 44.5753 20.6667 42.3275V21.1282C20.6667 18.8567 23.0932 17.4092 25.092 18.4884L45.1509 29.3185C47.2721 30.4637 47.2446 33.5163 45.1033 34.6233L25.0443 44.9925Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_969_2395">
                                                <rect width="62" height="62" rx="31" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    </a>
                                    <img src='\Assets\videoimg7.png' className='img_cardsse_new' />
                                </div>
                                <div className='cardss new_cardss11'>
                                <a href='https://www.youtube.com/shorts/10Cfa9ZmkJs' target='blank'>
                                    <svg className='imgplay' xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                                        <g clip-path="url(#clip0_969_2395)">
                                            <rect width="62" height="62" rx="31" fill="#C1FF14" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31 66.5588C48.6244 66.5588 62.9118 50.6386 62.9118 31C62.9118 11.3614 48.6244 -4.55884 31 -4.55884C13.3756 -4.55884 -0.911743 11.3614 -0.911743 31C-0.911743 50.6386 13.3756 66.5588 31 66.5588ZM25.0443 44.9925C23.0475 46.0247 20.6667 44.5753 20.6667 42.3275V21.1282C20.6667 18.8567 23.0932 17.4092 25.092 18.4884L45.1509 29.3185C47.2721 30.4637 47.2446 33.5163 45.1033 34.6233L25.0443 44.9925Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_969_2395">
                                                <rect width="62" height="62" rx="31" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    </a>
                                    <img src='\Assets\videoimg8.png'  className='img_cardsse_new'/>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Usesdevelopmentlanding