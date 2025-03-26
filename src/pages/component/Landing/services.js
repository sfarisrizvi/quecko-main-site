import Link from 'next/link';
import React, { useState } from 'react';

const Services = () => {

    const [expanded, setExpanded] = useState(null);

    const handleExpand = (id) => {
        setExpanded(id === expanded ? null : id);
    };


    return (
        <>
            <section className='services_main'>
                <div className='inner_services'>
                    <h1>What we do</h1>
                    <h2>Our Services & Expertise</h2>
                    <div className={`thirple_divs ${expanded ? "expanded" : ""} card-${expanded}`}>
                        <div className='one_part' >
                            <h5>01</h5>
                            <Link href="/webdevelopment"><div>          <h3>Web3 Development</h3></div></Link>
                            <div className='smart_contracts'>
                                <div>
                                    <Link href="/smartcontract"><div><p>Blockchain Development</p></div></Link>
                                    <Link href="/webdefi"><div><p>Web3 & DeFi Solutions</p></div></Link>
                                    <Link href="/rawdetails"><div><p>RWA (Real World Assets) Tokenization</p></div></Link>
                                    <Link href="/nodeservice"><div><p>Infrastructure & Node Services</p></div></Link>

                                    <div className='view_moree' onClick={() => handleExpand(1)}>
                                        View More
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                            <path d="M15.75 9.6418L12 5.68347M15.75 9.6418L12 13.6001M15.75 9.6418H2.25" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='text_ual_div text_ual_div1'>
                                    <Link href="/consulting"><div><p>Enterprise & Consulting</p></div></Link>
                                    <Link href="/crosschain"><div><p>Interoperability & Cross-Chain Solutions</p></div></Link>
                                    <Link href="/compliance"><div><p>Tokenomics & Compliance</p></div></Link>
                                    <Link href="/mobileapp"><div><p>Mobile App Development</p></div></Link>
                                    <div className='view_moree less_div' onClick={() => handleExpand(1)}>
                                        View Less
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                            <path d="M2.25 9.64144L6 5.68311M2.25 9.64144L6 13.5998M2.25 9.64144H15.75" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>



                            </div>
                        </div>
                        <div className='one_part' >
                            <h5>02</h5>
                            <Link href="/resourcelanding"><div>
                            <h3>Resource Augmentation</h3>
                            </div></Link>
                            <div className='smart_contracts'>
                                <div>
                                    <Link href="/resource"><div><p>Mobile App</p></div></Link>
                                    <Link href="/uiuxdesigner">  <div><p>UI/UX Designers</p></div></Link>
                                    <Link href="/qaenginers">  <div><p>QA Engineers</p></div></Link>
                                    <Link href="/blockchaindev">   <div><p>Blockchain developers</p></div></Link>
                                    <div className='view_moree' onClick={() => handleExpand(2)}>
                                        View More
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                            <path d="M15.75 9.6418L12 5.68347M15.75 9.6418L12 13.6001M15.75 9.6418H2.25" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>

                                </div>
                                <div className='text_ual_div text_ual_div2'>
                                    <Link href="/backend"><div><p>Backend Developers</p></div></Link>
                                    <Link href="/frontend">   <div><p>Frontend Developers</p></div></Link>
                                    <Link href="/technical">   <div><p>Technical Writer</p></div></Link>
                                    <Link href="/marketingexpert">    <div><p> Marketing Expert</p></div></Link>
                                       <div className='view_moree less_div' onClick={() => handleExpand(2)}>
                                        View Less
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                            <path d="M2.25 9.64144L6 5.68311M2.25 9.64144L6 13.5998M2.25 9.64144H15.75" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='one_part' >
                            <h5>03</h5>
                            <Link href="/webmarketing"><div>
                            <h3>Web3 Marketing</h3>
                            </div>
                            </Link>
                            <div className='smart_contracts'>
                                <div>
                                    <Link href="/marketingdetail"><div><p>Social Media Management
                                    </p></div></Link>
                                    <Link href="/marketingwriting">      <div><p>Technical Writing</p></div></Link>
                                    <Link href="/marketingdigital">    <div><p>Digital Marketing</p></div></Link>
                                    <Link href="/marketingpr">       <div><p>PR & Influencer Marketing </p></div></Link>
                                    <div className='view_moree' onClick={() => handleExpand(3)}>
                                        View More
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                            <path d="M15.75 9.6418L12 5.68347M15.75 9.6418L12 13.6001M15.75 9.6418H2.25" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                                <div className='text_ual_div text_ual_div3'>
                                    <Link href="/marketingstrategy"><div><p>Strategy & Campaign Design </p></div></Link>
                                    <Link href="/marketingcreative">    <div><p>Creative Services 
                                    </p></div></Link>
                                    <Link href="/marketingcomunity">       <div><p>Community Management 
                                    </p></div></Link>
                                    <Link href="/marketingblog">        <div><p>Blog Writing</p></div></Link>
                                    <div className='view_moree less_div' onClick={() => handleExpand(3)}>
                                        View Less
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                            <path d="M2.25 9.64144L6 5.68311M2.25 9.64144L6 13.5998M2.25 9.64144H15.75" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;
