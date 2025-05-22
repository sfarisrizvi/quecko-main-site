import React, { useEffect, useRef, useState } from "react";
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
import { NextSeo } from 'next-seo';


const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });
const aboutdetail = () => {


    const textRef = useRef(null);

      useEffect(() => {
        if (!textRef.current) return;

        const element = textRef.current;
        const text = element.innerText;

        element.innerHTML = text
          .split("")
          .map(
            (char) =>
              `<span class="char">${char === " " ? "&nbsp;" : char}</span>`
          )
          .join("");


        gsap.timeline()
          .set(".style-1 .char", { opacity: 0, y: 50 })
          .to(".style-1 .char", {
            y: 0,
            opacity: 1,
            duration: 1.8,
            ease: "power4.out",
            stagger: {
              amount: 1,
              ease: "power2.inOut",
            },
          });

      }, []);


      const [scrolling, setScrolling] = useState(false);
      const [direction, setDirection] = useState("down");
      const scrollSpeed = 20;
      const threshold = 50;
      const scrollRef = useRef(null);

      useEffect(() => {
        const checkScrollPosition = () => {
          const scrollY = window.scrollY;
          const pageHeight = document.documentElement.scrollHeight - window.innerHeight;

          if (scrollY >= pageHeight - threshold) {
            setDirection("up");
          } else if (scrollY <= threshold) {
            setDirection("down");
          }
        };


        const smoothScroll = () => {
          if (!scrolling) return;
          window.scrollBy({
            top: direction === "down" ? scrollSpeed : -scrollSpeed,
            behavior: "smooth",
          });
          scrollRef.current = requestAnimationFrame(smoothScroll);
        };


        if (scrolling) {
          scrollRef.current = requestAnimationFrame(smoothScroll);
        }

        window.addEventListener("scroll", checkScrollPosition);

        return () => {
          cancelAnimationFrame(scrollRef.current);
          window.removeEventListener("scroll", checkScrollPosition);
        };
      }, [scrolling, direction]);

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
            {/* <Head>
                <title>About Us - Quecko</title>
                <meta property="og:title" content="About Us - Quecko" />
                <meta
                    property="og:description"
                    content="Learn more about Quecko, our mission, values, and the team behind our innovative digital solutions."
                />
                <meta property="og:url" content="https://quecko.com/about-us/" />
                <link
                    rel="canonical"
                    href={`${typeof window !== 'undefined' ? window.location.origin + window.location.pathname : ''}`}
                />
                <meta name="publisher" content="Quecko" />
                <meta name="robots" content="index, follow" />

                       </Head> */}
            <NextSeo
                title="About Us - Quecko"
                description="Learn more about Quecko – who we are, what we do, and why we're leading the blockchain revolution."
                openGraph={{
                    url: 'https://quecko.com/about-us',
                    title: 'About Us - Quecko',
                    description:
                        'Learn more about Quecko – who we are, what we do, and why we’re leading the blockchain revolution.',
                    site_name: 'Quecko',
                }}
            />

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
                                <p className='span_ptag newtagsss'>At Quecko, we don’t just provide solutions; we build them. We’re actively involved in creating the foundation for a decentralized future, one block at a time.</p>
                            </div>
                        </div>
                        <img
            onClick={() => {
              const currentScroll = window.scrollY;
              const newScroll = direction === "down"
                ? currentScroll + 700
                : currentScroll - 700;

              window.scrollTo({ top: newScroll, behavior: 'smooth' });
            }}
            className={direction === "down" ? "downarrow" : "downarrow setarrowup"}
            src="/Assets/downarrow.svg"
          />
                        {/* <img className="downarrow" src="\Assets\downarrow.svg" /> */}
                    </div>


                </section>
                <section className='goalss_side'>
                    <div className='goals_details'>
                        <h2 className='goaldiv'>Our Goal</h2>
                        <p>Our mission is to empower businesses, creators, and innovators with the tools, technology, and expertise they need to succeed in a decentralized world. The digital landscape is evolving, and blockchain is at the heart of this transformation. Yet, many struggle to navigate its complexities. Quecko bridges this gap by delivering secure, scalable, and innovative blockchain solutions that drive real-world impact.
                        </p>
                    </div>
                </section>
                <section className='tags_bar'>
                    <div className='developers_side'>
                        <p>Fullstack Developers</p>
                        <span className='numbersdiv'>100+</span>
                    </div>
                    <div className='developers_side'>
                        <p>Delivered Products</p>
                        <span className='numbersdiv'>500+</span>
                    </div>  <div className='developers_side'>
                        <p>Blockchain Developers</p>
                        <span className='numbersdiv'>50+ </span>
                    </div>
                    <div className='developers_side'>
                        <p>Experience (Years)</p>
                        <span className='numbersdiv'>10+</span>
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
                                <p>We are a team of designers, developers and marketers that blend design, development, and strategy to bring bold Web3 ideas to life. From startups building their first smart contracts to established brands entering the blockchain space, we craft tailored solutions that are technically sound, creatively sharp, and strategically smart.
                                </p>
                            </div>
                        </div> {/* Closing div for top_middle */}
                    </div> {/* Closing div for inner_collab */}
                    <section className='goalss_side1'>
                <div className='goals_details'>
                    <h2  className='goaldiv'>Since 2020</h2>
                    <div>
                    <p>Our story began with a small, passionate team of four visionaries who believed in the transformative power of blockchain technology. From these humble beginnings, Quecko. has grown into a powerhouse of over 100+ talented professionals. Each team member represents a unique building block, much like the individual blocks in a blockchain, contributing to the strength, resilience, and innovation of our company. Our commitment to pioneering Web3 solutions has enabled us to help businesses navigate the complexities of blockchain, creating decentralized applications and software that drive progress and innovation. We take pride in our role as the architects of a decentralized future, where every block—and every team member—plays a crucial part in building a more connected and empowered world.</p>

                    </div>

                </div>
            </section>
                </section>

                <section className='aboutus_main '>
                    <div className='inner_about meetusss'>
                        <div className='midle_class meetclass'>
                            <div className='midle_left'>
                                <span className='clientsname'>TEAM</span>
                                <h2 className='meetourteamtext'>Meet Our Team</h2>
                            </div>

                        </div>
                        <div className='meetourteams'>
                            <div className='teamone'>
                                <img src='\Assets\row1.png' className='teamsimg' />
                            </div>
                            <div className='teamone2'>
                                <img src='\Assets\row2.png' className='teamsimg' />
                                <img src='\Assets\row3.png' className='teamsimg' />
                            </div>
                            <div className='teamone3'>
                                <img src='\Assets\row4.png' className='teamsimg' />
                                <img src='\Assets\row5.png' className='teamsimg' />
                                <img src='\Assets\row6.png' className='teamsimg' />
                            </div>
                            <div className='teamone4'>
                                <img src='\Assets\IMG_5206.jpg' className='teamsimg' />
                                <img src='\Assets\DSC_3928.png' className='teamsimg' />

                            </div>
                            {/* <div className='teamone5'>
                                <img src='\Assets\team9.png' className='teamsimg' />
                                <img src='\Assets\team10.png' className='teamsimg' />
                                <img src='\Assets\team11.png' className='teamsimg' />
                            </div>
                            <div className='teamone6'>
                                <img src='\Assets\team12.png' className='teamsimg' />
                                <img src='\Assets\team13.png' className='teamsimg' />

                            </div> */}

                        </div>

                    </div>
                </section>



                {/* <section className='blogs_divv myblogsss' id="stories">
                    <div className='inner_bloggs'>
                        <div className='textual_div'>
                            <span className='teamss_head'>TEAM</span>
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
                                        <h3 className='name_cards'>Alee Abbasi</h3>
                                        <h4>CEO</h4>
                                    </div>

                                    <div className='cardss'>

                                        <img src='\Assets\walled.svg' />
                                        <h3 className='name_cards'>Waleed Qureshi</h3>
                                        <h4>Chief Technology Officer </h4>
                                    </div>
                                    <div className='cardss'>
                                        <img src='\Assets\shoaib.svg' />
                                        <h3 className='name_cards'>Shoaib Jabbar</h3>
                                        <h4>Director Sales </h4>
                                    </div>
                                    <div className='cardss'>
                                        <img src='\Assets\shajeel.svg' />
                                        <h3 className='name_cards'>Sharjeel Awan</h3>
                                        <h4>Chief Product Officer</h4>
                                    </div>
                                    <div className='cardss'>
                                        <img src='\Assets\fahad.png' />
                                        <h3 className='name_cards'>Fahad Suleman</h3>
                                        <h4>Chief Marketing Officer</h4>
                                    </div>
                                    <div className='cardss'>
                                        <img src='\Assets\faiza.png' />
                                        <h3 className='name_cards'>Faiza Minhas </h3>
                                        <h4>People Manager</h4>
                                    </div>
                                    <div className='cardss'>
                                        <img src='\Assets\usman.png' />
                                        <h3 className='name_cards'>Usman Malik</h3>
                                        <h4>Team Lead Front-End</h4>
                                    </div>
                                    <div className='cardss'>
                                        <img src='\Assets\jamal.png' />
                                        <h3 className='name_cards'>Jamal Waseem</h3>
                                        <h4>Team Lead UI/UX</h4>
                                    </div>
                                    <div className='cardss'>
                                        <img src='\Assets\osama.png' />
                                        <h3 className='name_cards'>Osama Chattha </h3>
                                        <h4>Team Lead QA</h4>
                                    </div>
                                    <div className='cardss'>
                                        <img src='\Assets\wasif.png' />
                                        <h3 className='name_cards'>Muhammad Wasif  </h3>
                                        <h4>Team Lead Blockchain</h4>
                                    </div>
                                    <div className='cardss'>
                                        <img src='\Assets\zia.svg' />
                                        <h3 className='name_cards'>M. Zia ul Rehman</h3>
                                        <h4>Team Lead React Native Developer</h4>
                                    </div>




                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
            <Aboutus />
            <Stories />
            <Work />
            <Footer />



        </>
    )
}

export default aboutdetail
