export const metadata = { title: "Enterprise & Consulting – Quecko", description: "Enhance Enterprise & Consulting Transforming Businesses with Quecko." }
import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer';
import Projects from '@/components/sections/Projects';
import Work from '@/components/sections/Work';
import Consultinguses from '@/components/carousels/ConsultingUses';
import Consultingfaqs from '@/components/faqs/ConsultingFaqs';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const ConsultingPage = () => {
    return (
        <>
<BreadcrumbSchema items={[
                { name: 'Home', url: 'https://quecko.com' },
                { name: 'Services', url: 'https://quecko.com/services' },
                { name: 'Enterprise & Consulting', url: 'https://quecko.com/services/consulting' },
            ]} />
            <section className='smart_contract'>
                <Header />
                <div className='inner_data'>
                    <video className='main-banner-video' muted playsInline autoPlay loop width="100%" id="myVideo">
                        <source src="https://res.cloudinary.com/drt6vurtt/video/upload/v1742330989/queckosite%20%28new%29/videos/servicevieo_cujepj.mp4" type="video/mp4" />
                    </video>
                    <div className='blogdetail'>
                        <div className='parenttext'>
                            <div className='twicebtn'>
                                <Link href="/services"><p>Services</p></Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                    <path d="M5.25 11L8.75 7.5L5.25 4" stroke="#9D9D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Enterprise & Consulting</span>
                            </div>
                            <h1 className='mainpara'>Enterprise & Consulting Transforming Businesses with Innovation!</h1>
                            <p className='para'>Empower your enterprise with cutting-edge blockchain and AI solutions. Our expert consulting services help businesses integrate Web3 technologies, optimize operations, and unlock new growth opportunities. Whether you&apos;re navigating digital transformation, implementing smart contracts, or leveraging decentralized finance (DeFi), we provide tailored strategies to drive efficiency, security, and scalability.</p>
                        </div>
                    </div>
                </div>

                <div className='Development'>
                    <h2>Our Expertise in Enterprise & Consulting</h2>
                    <div className='mains_cardss'>
                        <div className='card__one'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                <path d="M39.375 31.8749L35.3325 28.3724C35.1989 28.2458 35.0309 28.1612 34.8496 28.1294C34.6682 28.0975 34.4815 28.1198 34.3128 28.1934C34.144 28.267 34.0006 28.3886 33.9005 28.5432C33.8004 28.6977 33.7481 28.8783 33.75 29.0624V29.9999C33.75 30.4972 33.5525 30.9741 33.2008 31.3258C32.8492 31.6774 32.3723 31.8749 31.875 31.8749H28.125C27.6277 31.8749 27.1508 31.6774 26.7992 31.3258C26.4475 30.9741 26.25 30.4972 26.25 29.9999C26.25 25.2281 18.7669 22.5562 10.3125 22.4999C9.0693 22.4999 7.87701 22.9938 6.99794 23.8729C6.11886 24.752 5.625 25.9442 5.625 27.1874C5.625 28.4306 6.11886 29.6229 6.99794 30.502C7.87701 31.3811 9.0693 31.8749 10.3125 31.8749C18.0994 31.8749 19.2094 10.6968 21.015 6.56244C21.32 5.86455 21.7905 5.2515 22.3857 4.77633C22.981 4.30116 23.683 3.97819 24.4311 3.83536C25.1792 3.69253 25.9509 3.73415 26.6793 3.9566C27.4077 4.17906 28.071 4.57566 28.6116 5.11209C29.1523 5.64852 29.5541 6.30861 29.7823 7.03525C30.0105 7.76189 30.0582 8.5332 29.9213 9.28242C29.7844 10.0316 29.467 10.7362 28.9965 11.3352C28.526 11.9341 27.9167 12.4094 27.2212 12.7199" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.625 39.375H39.375" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3 className='names_tags'>Blockchain Strategy Consulting</h3>
                            <p>We provide expert guidance on EVM-based blockchain adoption, helping businesses choose the right Layer 1 or Layer 2 solutions while ensuring smooth integration with decentralized applications.</p>
                        </div>
                        <div className='card__one'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45" fill="none">
                                <path d="M28.875 22.5H19.5" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M28.875 15H19.5" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M36.375 31.875V9.375C36.375 8.38044 35.9799 7.42661 35.2766 6.72335C34.5734 6.02009 33.6196 5.625 32.625 5.625H8.25" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.75 39.375H38.25C39.2446 39.375 40.1984 38.9799 40.9016 38.2766C41.6049 37.5734 42 36.6196 42 35.625V33.75C42 33.2527 41.8025 32.7758 41.4508 32.4242C41.0992 32.0725 40.6223 31.875 40.125 31.875H21.375C20.8777 31.875 20.4008 32.0725 20.0492 32.4242C19.6975 32.7758 19.5 33.2527 19.5 33.75V35.625C19.5 36.6196 19.1049 37.5734 18.4016 38.2766C17.6984 38.9799 16.7446 39.375 15.75 39.375ZM15.75 39.375C14.7554 39.375 13.8016 38.9799 13.0983 38.2766C12.3951 37.5734 12 36.6196 12 35.625V9.375C12 8.38044 11.6049 7.42661 10.9016 6.72335C10.1984 6.02009 9.24456 5.625 8.25 5.625C7.25544 5.625 6.30161 6.02009 5.59835 6.72335C4.89509 7.42661 4.5 8.38044 4.5 9.375V13.125C4.5 13.6223 4.69754 14.0992 5.04917 14.4508C5.40081 14.8025 5.87772 15 6.375 15H12" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h5 className='names_tags'>Smart Contract Architecture & Development</h5>
                            <p>Our team specializes in building secure and scalable EVM-compatible smart contracts tailored for DeFi, NFTs, DAOs, and enterprise applications while ensuring compliance and security best practices.</p>
                        </div>
                        <div className='card__one'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45" fill="none">
                                <path d="M8 41.25H34.25C35.2446 41.25 36.1984 40.8549 36.9016 40.1516C37.6049 39.4484 38 38.4946 38 37.5V13.125L28.625 3.75H11.75C10.7554 3.75 9.80161 4.14509 9.09835 4.84835C8.39509 5.55161 8 6.50544 8 7.5V15" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M26.75 3.75V11.25C26.75 12.2446 27.1451 13.1984 27.8484 13.9017C28.5516 14.6049 29.5054 15 30.5 15H38" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.875 22.5L4.25 28.125L9.875 33.75" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.375 33.75L23 28.125L17.375 22.5" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3 className='names_tags'>Private & Consortium Blockchain Solutions</h3>
                            <p>We design custom EVM-compatible private and consortium blockchains, enabling enterprises to leverage permissioned networks for secure, scalable, and efficient business operations.</p>
                        </div>
                        <div className='card__one'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45" fill="none">
                                <path d="M26.5 3.75V11.25C26.5 12.2446 26.8951 13.1984 27.5984 13.9017C28.3016 14.6049 29.2554 15 30.25 15H37.75" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.5 31.875C14.6066 31.875 17.125 29.3566 17.125 26.25C17.125 23.1434 14.6066 20.625 11.5 20.625C8.3934 20.625 5.875 23.1434 5.875 26.25C5.875 29.3566 8.3934 31.875 11.5 31.875Z" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3 className='names_tags'>Tokenomics & Business Model Design</h3>
                            <p>From utility tokens to governance models, we develop sustainable token economies for various Web3 use cases, ensuring optimized smart contract logic and long-term economic viability.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Consultinguses />
            <Projects />
            <Consultingfaqs />
            <Work />
            <Footer />
        </>
    )
}

export default ConsultingPage
