import React from 'react'
import Header from './component/Landing/header'

import Footer from './component/Landing/footer';
import Uses from './uses';
import Projects from './component/Landing/projects';
import Faqscontract from './faqscontract';
import Work from './component/Landing/work';
import Usesdevelopment from './usesdevelopment';
import Aboutus from './component/Landing/aboutus';
import Stories from './component/Landing/stories';
import Faqswebdevelp from './faqswebdevelp';
import Link from 'next/link';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

const Portfolio = () => {
    return (
        <>
            <NextSeo
                title="Our Portfolio - Quecko"
                description="Explore Quecko’s diverse portfolio showcasing our top design, development, and marketing projects."
                openGraph={{
                    url: 'https://www.quecko.com/porfolio',
                    title: 'Our Portfolio - Quecko',
                    description:
                        'Explore Quecko’s diverse portfolio showcasing our top design, development, and marketing projects.',
                    site_name: 'Quecko',
                }}
            />


            <section className='smart_contract'>
                <Header />
                <div className='inner_data'>
                    <img className="downarrow" src="\Assets\downarrow.svg" />
                    <video className='main-banner-video'
                        muted="muted" playsinline="playsinline"
                        autoPlay
                        loop
                        width="100%"
                        id="myVideo">
                        <source src="\Assets\webdevelp.mp4" type="video/mp4" />
                    </video>
                    <div className='blogdetail'>
                        <div className='parenttext'>
                            <div className='twicebtn'>
                                <p className='hometexttt'>Home</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                    <path d="M5.25 11L8.75 7.5L5.25 4" stroke="#9D9D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span>Portfolio</span>
                            </div>
                            <h1 className='mainpara'>Our Portfolio</h1>
                            <p className='para'>Our portfolio is a reflection of our purpose. Every project we deliver is a building block in the decentralized future we're helping to shape. From blockchain innovations to Web3 ecosystems, we don’t just work on ideas — we bring them to life with precision, passion, and purpose.

                            </p>

                        </div>

                    </div>
                </div>


            </section>
            <div className='tabs_porfolio'>

                <div >

                    <nav className='navsectiontabs'>
                        {/* <span>Filters:</span> */}
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All</button>
                            {/* <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Design</button> */}
                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false"> Web3 Development </button>

                            <button className="nav-link " id="nav-home1-tab" data-bs-toggle="tab" data-bs-target="#nav-home1" type="button" role="tab" aria-controls="nav-home1" aria-selected="false"> Web3 Marketing</button>

                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <section className='projects_main' id="projects">
                                <div className='inner_projects'>

                                    <div className='parent_div'>
                                        <Link href='/launchpad'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\portnew.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* <button>Branding</button>
                                                    <button>Development</button>
                                                    <button>Marketing</button> */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/privacy-protocol'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\preview.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                    <div className='parent_div second_parent'>

                                        <Link href='/multi-chain'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\port22.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/quecko-exchange'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\exchangeimg.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div'>
                                        <Link href='/domain-name-system'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\port55.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/nft-gallery'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\port33.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div second_parent'>
                                        <Link href='/decentralized-options-market'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\domnew.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/reward-flow'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\port88.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div'>
                                        <Link href='/vion'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\vion.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/bluemoon'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\port101.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div second_parent'>
                                        <Link href='/vion-exchange'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\vionanother.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/high-yield-dollar-protocol'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\hybt.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div'>
                                        <Link href='/diet-and-cheat-meal-app'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\portdiet.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/golden-looni'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\lonihome.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div second_parent'>
                                        <Link href='/quick-grocery'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\port111.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>


                                        <Link href='/meme-coin-launchpad'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\portmeme1.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                    <div className='parent_div'>
                                        <Link href='/legion'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\port44.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/estate-slice'>
                                            <div className=' right_side hovercard'>
                                                <img src='\Assets\port77.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className='parent_div second_parent'>
                                        <Link href='/privacy-protocol-oracle'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\portorcale.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/tapspace'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\spacenew.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>

                                    </div>




                                </div>
                                <div className='inner_projectsphone d-none'>

                                    <div className='parent_div'>
                                        <Link href='/launchpad'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\lunchphone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* <button>Branding</button>
                <button>Development</button>
                <button>Marketing</button> */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/privacy-protocol'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\previewphone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                    <div className='parent_div second_parent'>

                                        <Link href='/multi-chain'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\multiphone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/quecko-exchange'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\exchangephonenew.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div'>
                                        <Link href='/domain-name-system'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\domainphone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/nft-gallery'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\galleryphone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div second_parent'>
                                        <Link href='/decentralized-options-market'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\domphonen.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/reward-flow'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\rewardphone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div'>
                                        <Link href='/vion'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\vionphone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/bluemoon'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\moonphone.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div second_parent'>
                                        <Link href='/vion-exchange'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\vionanother.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/high-yield-dollar-protocol'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\hybtphone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div second_parent'>
                                        <Link href='/quick-grocery'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\quickphone.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>


                                        <Link href='/meme-coin-launchpad'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\memephone.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>

                                    </div>

                                    <div className='parent_div'>
                                        <Link href='/diet-and-cheat-meal-app'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\dietphone.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/golden-looni'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\loniphone.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div second_parent'>
                                        <Link href='/privacy-protocol-oracle'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\oraclephone.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/tapspace'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\spacephonenew.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                    <div className='parent_div'>
                                        <Link href='/legion'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\legionphone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/estate-slice'>
                                            <div className=' right_side hovercard'>
                                                <img src='\Assets\estatephone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>



                                </div>
                                <div className='inner_projects'>

                                    <div className='parent_div'>
                                        <Link href='/legion-network'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\bgly.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* <button>Branding</button>
<button>Development</button>
<button>Marketing</button> */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/tapspace-marketing'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\phonetap.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>

                                    </div>


                                    <div className='parent_div second_parent'>
                                        <Link href='/syrupal-protocol'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\syn.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/memecoin-marketing'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\syyy.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>

                                    </div>


                                </div>
                                <div className='inner_projectsphone d-none'>

                                    <div className='parent_div'>
                                        <Link href='/legion-network'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\phonely.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* <button>Branding</button>
<button>Development</button>
<button>Marketing</button> */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/tapspace-marketing'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\phonetap.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>

                                    </div>

                                    <div className='parent_div second_parent'>
                                        <Link href='/syrupal-protocol'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\syn.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/memecoin-marketing'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\syyyphone.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>

                                    </div>


                                </div>

                            </section>
                        </div>

                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <section className='projects_main' id="projects">
                                <div className='inner_projects'>

                                    <div className='parent_div'>
                                        <Link href='/launchpad'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\portnew.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* <button>Branding</button>
                <button>Development</button>
                <button>Marketing</button> */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/privacy-protocol'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\preview.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                    <div className='parent_div second_parent'>

                                        <Link href='/multi-chain'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\port22.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/quecko-exchange'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\exchangeimg.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div'>
                                        <Link href='/domain-name-system'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\port55.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/nft-gallery'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\port33.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div second_parent'>
                                        <Link href='/decentralized-options-market'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\domnew.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/reward-flow'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\port88.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div'>
                                        <Link href='/vion'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\vion.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/bluemoon'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\port101.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div second_parent'>
                                        <Link href='/vion-exchange'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\vionanother.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/high-yield-dollar-protocol'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\hybt.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div'>
                                        <Link href='/diet-and-cheat-meal-app'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\portdiet.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/golden-looni'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\lonihome.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div second_parent'>
                                        <Link href='/quick-grocery'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\port111.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>


                                        <Link href='/meme-coin-launchpad'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\portmeme1.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                    <div className='parent_div'>
                                        <Link href='/legion'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\port44.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/estate-slice'>
                                            <div className=' right_side hovercard'>
                                                <img src='\Assets\port77.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className='parent_div second_parent'>
                                        <Link href='/privacy-protocol-oracle'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\portorcale.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/tapspace'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\spacenew.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>

                                    </div>




                                </div>
                                <div className='inner_projectsphone d-none'>

                                    <div className='parent_div'>
                                        <Link href='/launchpad'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\lunchphone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* <button>Branding</button>
<button>Development</button>
<button>Marketing</button> */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/privacy-protocol'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\previewphone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                    <div className='parent_div second_parent'>

                                        <Link href='/multi-chain'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\multiphone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/quecko-exchange'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\exchangephonenew.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div'>
                                        <Link href='/domain-name-system'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\domainphone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/nft-gallery'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\galleryphone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div second_parent'>
                                        <Link href='/decentralized-options-market'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\domphonen.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/reward-flow'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\rewardphone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div'>
                                        <Link href='/vion'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\vionphone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/bluemoon'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\moonphone.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div second_parent'>
                                        <Link href='/vion-exchange'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\vionanother.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/high-yield-dollar-protocol'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\hybtphone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div second_parent'>
                                        <Link href='/quick-grocery'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\quickphone.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>


                                        <Link href='/meme-coin-launchpad'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\memephone.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>

                                    </div>

                                    <div className='parent_div'>
                                        <Link href='/diet-and-cheat-meal-app'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\dietphone.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/golden-looni'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\loniphone.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='parent_div second_parent'>
                                        <Link href='/privacy-protocol-oracle'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\oraclephone.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/tapspace'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\spacephonenew.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                    <div className='parent_div'>
                                        <Link href='/legion'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\legionphone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/estate-slice'>
                                            <div className=' right_side hovercard'>
                                                <img src='\Assets\estatephone.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>



                                </div>
                            </section>
                        </div>
                        <div className="tab-pane fade  " id="nav-home1" role="tabpanel" aria-labelledby="nav-home1-tab">
                            <section className='projects_main' id="projects">
                                <div className='inner_projects'>

                                    <div className='parent_div'>
                                        <Link href='/legion-network'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\bgly.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* <button>Branding</button>
                <button>Development</button>
                <button>Marketing</button> */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/tapspace-marketing'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\phonetap.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>

                                    </div>

                                    <div className='parent_div second_parent'>
                                        <Link href='/syrupal-protocol'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\syn.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/memecoin-marketing'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\syyy.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>

                                    </div>



                                </div>
                                <div className='inner_projectsphone d-none'>

                                    <div className='parent_div'>
                                        <Link href='/legion-network'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\phonely.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* <button>Branding</button>
<button>Development</button>
<button>Marketing</button> */}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/tapspace-marketing'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\phonetap.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    {/* */}
                                                </div>
                                            </div>
                                        </Link>

                                    </div>

                                    <div className='parent_div second_parent'>
                                        <Link href='/syrupal-protocol'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\syn.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>
                                        <Link href='/memecoin-marketing'>
                                            <div className='right_side hovercard'>
                                                <img src='\Assets\syyyphone.png' className='imgport' />
                                                <div className='buttons_div'>

                                                </div>
                                            </div>
                                        </Link>

                                    </div>

                                </div>
                            </section>
                        </div>


                    </div>
                </div>
            </div>


            <Work />
            <Footer />
        </>
    )
}

export default Portfolio