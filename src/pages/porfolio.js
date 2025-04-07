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

const Portfolio = () => {
    return (
        <>
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

                                <h2>Portfolio</h2>
                            </div>
                            <h1 className='mainpara'>Our Portfolio</h1>
                            <p className='para'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.

                            </p>

                        </div>

                    </div>
                </div>


            </section>
            <div className='tabs_porfolio'>

                <div >

                    <nav className='navsectiontabs'>
                        <h4>Filters:</h4>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Design</button>
                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Development </button>

                            <button className="nav-link " id="nav-home1-tab" data-bs-toggle="tab" data-bs-target="#nav-home1" type="button" role="tab" aria-controls="nav-home1" aria-selected="false">Marketing</button>

                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <section className='projects_main' id="projects">
                                <div className='inner_projects'>

                                    <div className='parent_div'>
                                        <a href='/porfoliolunchpad'>
                                            <div className='left_side hovercard'>
                                                <img src='\Assets\portnew.png' className='imgport' />
                                                <div className='buttons_div'>
                                                    <button>Branding</button>
                                                    <button>Development</button>
                                                    <button>Marketing</button>
                                                </div>
                                            </div>
                                        </a>
                                        <a href='/porfoliomultichain'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port22.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                <button>Development</button>
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div second_parent'>
                                    <a href='/porfolionftgallery'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port33.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                <button>Development</button>
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfolioligion'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port44.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                <button>Development</button>
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div'>
                                    <a href='/porfoliotdns'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port55.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                <button>Development</button>
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfoliopriv'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port66.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                <button>Development</button>
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div second_parent'>
                                    <a href='/porfolioestate'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port77.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                <button>Development</button>
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfoliorewardflow'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port88.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                <button>Development</button>
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div'>
                                    <a href='/porfoliotreecoin'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port99.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                <button>Development</button>
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfoliobluemoon'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port101.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                <button>Development</button>
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div second_parent'>
                                    <a href='/porfolioquick'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port111.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                <button>Development</button>
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfoliotapspace'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port12.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                <button>Development</button>
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                    </div>




                                </div>
                            </section>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <section className='projects_main' id="projects">
                                <div className='inner_projects'>

                                    <div className='parent_div'>
                                    <a href='/porfoliolunchpad'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\portnew.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                {/* <button>Development</button>
                                                <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfoliomultichain'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port22.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                {/* <button>Development</button>
                                                <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div second_parent'>
                                    <a href='/porfolionftgallery'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port33.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                {/* <button>Development</button>
                                                <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfolioligion'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port44.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                {/* <button>Development</button>
                                                <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div'>
                                    <a href='/porfoliotdns'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port55.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                {/* <button>Development</button>
                                                <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfoliopriv'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port66.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                {/* <button>Development</button>
                                                <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div second_parent'>
                                    <a href='/porfolioestate'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port77.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                {/* <button>Development</button>
                                                <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfoliorewardflow'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port88.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                {/* <button>Development</button>
                                                <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div'>
                                    <a href='/porfoliotreecoin'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port99.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                {/* <button>Development</button>
                                                <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfoliobluemoon'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port101.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                {/* <button>Development</button>
                                                <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div second_parent'>
                                    <a href='/porfolioquick'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port111.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                {/* <button>Development</button>
                                                <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfoliotapspace'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port12.png' className='imgport' />
                                            <div className='buttons_div'>
                                                <button>Branding</button>
                                                {/* <button>Development</button>
                                                <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                    </div>




                                </div>
                            </section>
                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <section className='projects_main' id="projects">
                                <div className='inner_projects'>

                                    <div className='parent_div'>
                                    <a href='/porfoliolunchpad'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\portnew.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button> */}
                                                <button>Development</button>
                                                {/* <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfoliomultichain'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port22.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button> */}
                                                <button>Development</button>
                                                {/* <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div second_parent'>
                                    <a href='/porfolionftgallery'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port33.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button> */}
                                                <button>Development</button>
                                                {/* <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfolioligion'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port44.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button> */}
                                                <button>Development</button>
                                                {/* <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div'>
                                    <a href='/porfoliotdns'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port55.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button> */}
                                                <button>Development</button>
                                                {/* <button>Marketing</button> */}
                                            </div>
                                        </div>
</a>
<a href='/porfoliopriv'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port66.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button> */}
                                                <button>Development</button>
                                                {/* <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div second_parent'>
                                    <a href='/porfolioestate'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port77.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button> */}
                                                <button>Development</button>
                                                {/* <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfoliorewardflow'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port88.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button> */}
                                                <button>Development</button>
                                                {/* <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div'>
                                    <a href='/porfoliotreecoin'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port99.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button> */}
                                                <button>Development</button>
                                                {/* <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfoliobluemoon'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port101.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button> */}
                                                <button>Development</button>
                                                {/* <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div second_parent'>
                                    <a href='/porfolioquick'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port111.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button> */}
                                                <button>Development</button>
                                                {/* <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfoliotapspace'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port12.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button> */}
                                                <button>Development</button>
                                                {/* <button>Marketing</button> */}
                                            </div>
                                        </div>
                                        </a>
                                    </div>




                                </div>
                            </section>
                        </div>
                        <div className="tab-pane fade  " id="nav-home1" role="tabpanel" aria-labelledby="nav-home1-tab">
                            <section className='projects_main' id="projects">
                                <div className='inner_projects'>

                                    <div className='parent_div'>
                                    <a href='/porfoliolunchpad'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\portnew.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button>
                                                <button>Development</button> */}
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfoliomultichain'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port22.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button>
                                                <button>Development</button> */}
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div second_parent'>
                                    <a href='/porfolionftgallery'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port33.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button>
                                                <button>Development</button> */}
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfolioligion'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port44.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button>
                                                <button>Development</button> */}
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div'>
                                    <a href='/porfoliotdns'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port55.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button>
                                                <button>Development</button> */}
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfoliopriv'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port66.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button>
                                                <button>Development</button> */}
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div second_parent'>
                                    <a href='/porfolioestate'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port77.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button>
                                                <button>Development</button> */}
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfoliorewardflow'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port88.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button>
                                                <button>Development</button> */}
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div'>
                                    <a href='/porfoliotreecoin'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port99.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button>
                                                <button>Development</button> */}
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfoliobluemoon'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port101.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button>
                                                <button>Development</button> */}
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='parent_div second_parent'>
                                    <a href='/porfolioquick'>
                                        <div className='left_side hovercard'>
                                            <img src='\Assets\port111.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button>
                                                <button>Development</button> */}
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
                                        <a href='/porfoliotapspace'>
                                        <div className='right_side hovercard'>
                                            <img src='\Assets\port12.png' className='imgport' />
                                            <div className='buttons_div'>
                                                {/* <button>Branding</button>
                                                <button>Development</button> */}
                                                <button>Marketing</button>
                                            </div>
                                        </div>
                                        </a>
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