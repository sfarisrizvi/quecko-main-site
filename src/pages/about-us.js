import React from 'react'
import Header from './component/Landing/header'
import dynamic from 'next/dynamic';
var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from 'next/link';
import Aboutus from './component/Landing/aboutus';
import Stories from './component/Landing/stories';
import Work from './component/Landing/work';
import Footer from './component/Landing/footer';
import Head from 'next/head';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });
const aboutdetail = () => {
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
            <Head>
                <title>About Us - Quecko</title>
                <meta property="og:title" content="About Us - Quecko" />
                <meta
                    property="og:description"
                    content="Learn more about Quecko, our mission, values, and the team behind our innovative digital solutions."
                />
                <meta property="og:url" content="https://quecko.com/about-us/" />
                <link rel="canonical" href="https://quecko.com/about-us/" />
            </Head>
            <Header />
            <div>
                <section className="main_banner1" >
                    {/* <Header/> */}
                    <img className="upper_shadow d-none" src="\Assets\shadowupper.png" />
                    <img className="lowershadow  d-none" src="\Assets\shadowlower.png" />
                    <div className="inner_banner">
                        <video className='main-banner-video'
                            muted="muted" playsinline="playsinline"
                            autoPlay
                            loop
                            width="100%"
                            id="myVideo">
                            <source src="https://res.cloudinary.com/drt6vurtt/video/upload/v1742330920/queckosite%20(new)/videos/bannervideo_ns7oz8.mp4" type="video/mp4" />
                        </video>
                        <div className="textual_inner myinnner_data" >
                            {/* <h3 className="para_new11">We’re the</h3> */}
                            <div className="animation-section style-1">

                                <h1>About Us</h1>
                                <h2>At Quecko, we don’t just provide solutions; we build them. We’re actively involved in creating the foundation for a decentralized future, one block at a time.</h2>
                            </div>
                        </div>

                        <img className="downarrow" src="\Assets\downarrow.svg" />
                    </div>


                </section>
                <section className='goalss_side'>
                    <div className='goals_details'>
                        <h1>Our Goal</h1>
                        <p>Our mission is to empower businesses, creators, and innovators with the tools, technology, and expertise they need to succeed in a decentralized world. The digital landscape is evolving, and blockchain is at the heart of this transformation. Yet, many struggle to navigate its complexities. Quecko bridges this gap by delivering secure, scalable, and innovative blockchain solutions that drive real-world impact.
                        </p>
                    </div>
                </section>
                <section className='tags_bar'>
                    <div className='developers_side'>
                        <p>Fullstack Developers</p>
                        <h1>100+</h1>
                    </div>
                    <div className='developers_side'>
                        <p>Delivered Products</p>
                        <h1>500+</h1>
                    </div>  <div className='developers_side'>
                        <p>Blockchain Developers</p>
                        <h1>50+ </h1>
                    </div>
                    <div className='developers_side'>
                        <p>Experience (Years)</p>
                        <h1>10+</h1>
                    </div>
                </section>
                <section className='collab1'>
                    <div className='inner_collab'>
                        <video className='main-banner-video'
                            muted
                            playsInline
                            autoPlay
                            loop
                            width="100%"
                            id="myVideo">
                            <source src="\Assets\blackish.mp4" />
                        </video>

                        <div className='top_middle'>
                            <div className='middle_colab'>
                                <h2>Who we are?</h2>
                                <p>Our story began with a small, passionate team of four visionaries who believed in the transformative power of blockchain technology. From these humble beginnings, Quecko. has grown into a powerhouse of over 100+ talented professionals. Each team member represents a unique building block, much like the individual blocks in a blockchain, contributing to the strength, resilience, and innovation of our company. Our commitment to pioneering Web3 solutions has enabled us to help businesses navigate the complexities of blockchain, creating decentralized applications and software that drive progress and innovation. We take pride in our role as the architects of a decentralized future, where every block—and every team member—plays a crucial part in building a more connected and empowered world.
                                </p>
                            </div>
                        </div> {/* Closing div for top_middle */}
                    </div> {/* Closing div for inner_collab */}
                    {/* <section className='goalss_side1'>
                <div className='goals_details'>
                    <h1>Since 2020</h1>
                    <div>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
                    <p>Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
                    </div>

                </div>
            </section> */}
                </section>


                <section className='blogs_divv myblogsss' id="stories">
                    <div className='inner_bloggs'>
                        <div className='textual_div'>
                            <h1>TEAM</h1>
                            <h2>Meet Our Team</h2>
                        </div>
                        <div className='bottom_side'>
                            <div className="owl_option">
                                <OwlCarousel
                                    className="owl-theme"
                                    {...owl_option}
                                >

                                    <div className='cardss'>
                                        <img src='\Assets\ali.png' />
                                        <h1>Alee Abbasi</h1>
                                        <h2>CEO</h2>
                                    </div>

                                    <div className='cardss'>

                                        <img src='\Assets\walled.svg' />
                                        <h1>Waleed Qureshi</h1>
                                        <h2>Chief Technology Officer </h2>
                                    </div>
                                    <div className='cardss'>
                                        <img src='\Assets\shoaib.svg' />
                                        <h1>Shoaib Jabbar</h1>
                                        <h2>Director Sales </h2>
                                    </div>
                                    <div className='cardss'>
                                        <img src='\Assets\shajeel.svg' />
                                        <h1>Sharjeel Awan</h1>
                                        <h2>Chief Product Officer</h2>
                                    </div>
                                    <div className='cardss'>
                                        <img src='\Assets\fahad.png' />
                                        <h1>Fahad Suleman</h1>
                                        <h2>Chief Marketing Officer</h2>
                                    </div>
                                    <div className='cardss'>
                                        <img src='\Assets\faiza.png' />
                                        <h1>Faiza Minhas </h1>
                                        <h2>People Manager</h2>
                                    </div>
                                    <div className='cardss'>
                                        <img src='\Assets\usman.png' />
                                        <h1>Usman Malik</h1>
                                        <h2>Team Lead Front-End</h2>
                                    </div>
                                    <div className='cardss'>
                                        <img src='\Assets\jamal.png' />
                                        <h1>Jamal Waseem</h1>
                                        <h2>Team Lead UI/UX</h2>
                                    </div>
                                    <div className='cardss'>
                                        <img src='\Assets\osama.png' />
                                        <h1>Osama Chattha </h1>
                                        <h2>Team Lead QA</h2>
                                    </div>
                                    <div className='cardss'>
                                        <img src='\Assets\wasif.png' />
                                        <h1>Muhammad Wasif  </h1>
                                        <h2>Team Lead Blockchain</h2>
                                    </div>
                                    <div className='cardss'>
                                        <img src='\Assets\zia.svg' />
                                        <h1>M. Zia ul Rehman</h1>
                                        <h2>Team Lead React Native Developer</h2>
                                    </div>




                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Aboutus />
            <Stories />
            <Work />
            <Footer />



        </>
    )
}

export default aboutdetail
