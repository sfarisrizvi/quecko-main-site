import React from 'react'
import dynamic from 'next/dynamic';
var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });
const Aboutus = () => {

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
                items: 1.1,
                margin: 10,
            },
            361: {
                items: 1.2,
                margin: 10,
                loop: true,
                nav: false,
                dots: true,
                dotsEach: true
            },
            600: {
                items: 1.2,
                margin: 10,
                loop: true,
                nav: false,
                dots: true,
                dotsEach: true
            },
            700: {
                items: 1,
                margin: 10,
            },
            1000: {
                items: 1,
                margin: 10,
            },
            1200: {
                items: 1.1,
                margin: 10,
            },



        },
    };

    return (
        <>
            <section className='aboutus_main'>
                <div className='inner_about'>
                    <div className='midle_class'>
                        <div className='midle_left'>
                            <span className='clientsname'>Clients</span>
                            <h2>What people say about us?</h2>
                        </div>
                        <div className="owl_option">
                            <OwlCarousel
                                className="owl-theme"
                                {...owl_option}
                            >
                                <div className="cards">
                                    <div className="inner_cards">
                                        <img loading="lazy" alt='about-us' className="imgman" src="\Assets\mennimg.png" />
                                        <div>
                                            <h3 className='nameclient'>Mateen O Dawood</h3>
                                            <p>Stable33 Protocol</p>
                                        </div>
                                    </div>
                                    <p>I believe that with hard work, determination, and an amazing team of Quecko, we can overcome any obstacle and achieve anything we set our minds to. As we enter 2023, we&apos;re more committed than ever to finalizing the protocol and focusing on adding more and more utility to the STABL33 PROTOCOL Ecosystem.</p>
                                </div>
                                <div className="cards">
                                    <div className="inner_cards">
                                        <img loading="lazy" alt='about-us' className="imgman" src="\Assets\man.svg" />
                                        <div>
                                            <h3 className='crds_name'>Anonymous Client </h3>
                                            <p>DAO Project</p>
                                        </div>
                                    </div>
                                    <p>Did everything we need. Will continue to work with them. Using again for next set of updates.</p>
                                </div>
                                <div className="cards">
                                    <div className="inner_cards">
                                        <img loading="lazy" alt='about-us' className="imgman" src="\Assets\mennimg.png" />
                                        <div>
                                            <h3  className='crds_name'>Anonymous Client  </h3>
                                            <p> NFT marketplace Project</p>
                                        </div>
                                    </div>
                                    <p>Quecko did a fantastic work right according to my requirements. They know what they&apos;re doing and did it perfectly. I definitely will work with them for all of my future projects. Thank you so much for this amazing product. </p>
                                </div>
                                <div className="cards">
                                    <div className="inner_cards">
                                        <img loading="lazy" alt='about-us' className="imgman" src="\Assets\man.svg" />
                                        <div>
                                            <h3  className='crds_name'>Anonymous Client </h3>
                                            <p>UI/UX</p>
                                        </div>
                                    </div>
                                    <p>Attention to detail, very well thought of Line of blockchain business, project management skills, core strength. Good strategy. Altogether it was phenomenal to work. One challenge I find is that they are expecting you to test everything which I found a lot. Otherwise I&apos;m pleased.</p>
                                </div>
                                <div className="cards">
                                    <div className="inner_cards">
                                        <img loading="lazy" alt='about-us' className="imgman" src="\Assets\man.svg" />
                                        <div>
                                            <h3  className='crds_name'>Anonymous Client  </h3>
                                            <p>Decentralised DNS Project</p>
                                        </div>
                                    </div>
                                    <p>Amazing job. Excellent communication skills and very responsive. Would recommend this team to anyone looking.</p>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                    <div>
                        <div className="trendinganimations">

                            <div className="trendinganimationsright">
                                <div className="marquee">
                                    <div className="marquee__group">
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\Alchemy 1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\avalanche 1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy"  className='imgunder' src="\Assets\marqueeassets\aws-svgrepo-com 1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\azure 1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\band-svgrepo-com 1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\BNB (BNB) 1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\cdnlogo.com_ledger-new 1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\cdnlogo.com_the-graph 1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\cdnlogo.com_trezor 1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\Certik 1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\Chainalysis 1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\chainlink 1.svg"/>
                                    </div>




                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\ethereum (1) 1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\google-cloud-svgrepo-com 1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\idW_EOLSIp_logos 1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\Infura 1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\Layer_1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\metamask-grayscale-logo 1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\MoonPay 1.svg"/>
                                    </div>

                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\polkadot 1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\polygon 1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\Slowmist 1.svg"/>
                                    </div>  <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\solana (1) 1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\tether 1.svg"/>
                                    </div>
                                    </div>
                                    <div aria-hidden="true" className="marquee__group">
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\Alchemy 1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\avalanche 1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us'  className='imgunder' src="\Assets\marqueeassets\aws-svgrepo-com 1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\azure 1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\band-svgrepo-com 1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\BNB (BNB) 1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\cdnlogo.com_ledger-new 1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\cdnlogo.com_the-graph 1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\cdnlogo.com_trezor 1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\Certik 1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\Chainalysis 1.svg"/>
                                    </div>
                                    <div>
                                        <img loading="lazy" alt='about-us' className='imgunder' src="\Assets\marqueeassets\chainlink 1.svg"/>
                                    </div>




                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\ethereum (1) 1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\google-cloud-svgrepo-com 1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\idW_EOLSIp_logos 1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\Infura 1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\Layer_1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\metamask-grayscale-logo 1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\MoonPay 1.svg"/>
                                    </div>

                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\polkadot 1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\polygon 1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\Slowmist 1.svg"/>
                                    </div>  <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\solana (1) 1.svg"/>
                                    </div>
                                    <div>
                                        <img alt='about-us' loading="lazy" className='imgunder' src="\Assets\marqueeassets\tether 1.svg"/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutus