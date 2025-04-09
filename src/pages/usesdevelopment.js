import React from 'react'
import dynamic from 'next/dynamic';
var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const Usesdevelopment = () => {
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
                    <div className='textual_div new_texxxt_div'>
                        <span className='story_div'>Quecko Stories</span>
                        <h2>Quecko Stories</h2>
                    </div>
                    <div className='bottom_side'>
                        <div className="owl_option">
                            <OwlCarousel className="owl-theme" {...owl_option}>
                                <div className='cardss new_cardss'>
                                    <video className='videos_youtube' controls>
                                        <source src="https://res.cloudinary.com/drt6vurtt/video/upload/v1742330920/queckosite%20(new)/videos/bannervideo_ns7oz8.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className='cardss new_cardss'>
                                    <video  className='videos_youtube' controls>
                                        <source src="https://path-to-your-video2.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div  className='cardss new_cardss'>
                                    <video className='videos_youtube' controls>
                                        <source src="https://path-to-your-video3.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className='cardss new_cardss'>
                                    <video  className='videos_youtube' controls>
                                        <source src="https://path-to-your-video4.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className='cardss new_cardss'>
                                    <video  className='videos_youtube' controls>
                                        <source src="https://path-to-your-video5.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Usesdevelopment