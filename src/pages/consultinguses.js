import React from 'react'
import dynamic from 'next/dynamic';
var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const Consultinguses = () => {
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
                        <span  className='story_div '>Use Cases</span>
                        <h2>Use Cases of Enterprise & Consulting Services
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
                                        <div className="front">Financial Services</div>
                                        <div className="back"> Financial Services</div>
                                    </div>

                                    <h3>We develop secure and automated smart contract solutions for banks, fintech companies, and asset managers, streamlining transactions, reducing fraud, and ensuring compliance.
                                    </h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\hometwo.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> Supply Chain & Logistics</div>
                                        <div className="back"> Supply Chain & Logistics</div>
                                    </div>

                                    <h3>Our solutions bring real-time tracking, automation, and transparency to supply chains, enabling efficient inventory management and seamless cross-border trade.
                                    </h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homethree.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front"> Healthcare & Pharmaceuticals</div>
                                        <div className="back"> Healthcare & Pharmaceuticals</div>
                                    </div>

                                    <h3>We provide data security and interoperability solutions that improve patient data sharing, automate claims processing, and enhance drug traceability.</h3>
                                </div>
                                <div className='cardss'>
                                <div className='blogs_img'>
                                    <img className='imginnner' src='\Assets\homefour.webp' />
                                    </div>
                                    <div className="btn-flip">
                                        <div className="front">Real Estate & Asset Management</div>
                                        <div className="back"> Real Estate & Asset Management</div>
                                    </div>
                                    <h3>Our smart contract solutions enable seamless property transactions, digital ownership verification, and automated lease agreements, reducing paperwork and fraud.

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

export default Consultinguses