import React from 'react'
import Header from './component/Landing/header'

import Footer from './component/Landing/footer';
import Uses from './uses';
import Projects from './component/Landing/projects';
import Faqscontract from './faqscontract';
import Work from './component/Landing/work';
import Defiuses from './defiuses';
import Defifaqs from './defifaqs';
import Link from 'next/link';

const Webdefi = () => {
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
                        <source src="https://res.cloudinary.com/drt6vurtt/video/upload/v1742330989/queckosite%20%28new%29/videos/servicevieo_cujepj.mp4" type="video/mp4" />
                    </video>
                    <div className='blogdetail'>
                        <div className='parenttext'>
                            <div className='twicebtn'>
                                <h1>Services</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                    <path d="M5.25 11L8.75 7.5L5.25 4" stroke="#9D9D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <Link href="/webdevelopment">
                                <h1>Web3 Development</h1>
                                </Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                    <path d="M5.25 11L8.75 7.5L5.25 4" stroke="#9D9D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h2>Smart Contracts</h2>
                            </div>
                            <h3 className='mainpara'>Web3 & DeFi Solutions by Quecko</h3>
                            <p className='para'>At Quecko, we are at the forefront of Web3 and decentralized finance (DeFi) innovation, providing cutting-edge solutions that empower businesses and users to harness the full potential of blockchain technology. From decentralized exchanges (DEX) to NFT marketplaces, our Web3 and DeFi solutions are designed to drive innovation, security, and scalability across industries.
                            </p>

                        </div>

                    </div>
                </div>
                {/* <div className='solution'>
                    <div>
                        <h1>The Agile Web 3 Solution.</h1>
                        <p>A top-notch web3 platform with advanced and latest technology in designing and developing interactive web3 solutions using blockchain with 60+ blockchain developers. We cater to deliver our expertise in AI, NFTs, smart contracts and cryptography technologies..</p>
                    </div>
                    <div>
                        <h2>Smart contracts are innovating the future of several industries including supply chain, healthcare, telecommunication, real estate, and much more! Quecko Inc. has sheered expertise in smart contracts development, perfectly tailored to multiple industries and businesses. The process is backed by expert smart contract developers helping create top-trending machine-based protocols to innovate business agreements.</h2>
                    </div>
                </div> */}

                <div className='Development'>
                    <h2>Our Services in Web3 & DeFi Solutions </h2>
                    <div className='mains_cardss'>
                        <div className='card__one'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                <path d="M39.375 31.8749L35.3325 28.3724C35.1989 28.2458 35.0309 28.1612 34.8496 28.1294C34.6682 28.0975 34.4815 28.1198 34.3128 28.1934C34.144 28.267 34.0006 28.3886 33.9005 28.5432C33.8004 28.6977 33.7481 28.8783 33.75 29.0624V29.9999C33.75 30.4972 33.5525 30.9741 33.2008 31.3258C32.8492 31.6774 32.3723 31.8749 31.875 31.8749H28.125C27.6277 31.8749 27.1508 31.6774 26.7992 31.3258C26.4475 30.9741 26.25 30.4972 26.25 29.9999C26.25 25.2281 18.7669 22.5562 10.3125 22.4999C9.0693 22.4999 7.87701 22.9938 6.99794 23.8729C6.11886 24.752 5.625 25.9442 5.625 27.1874C5.625 28.4306 6.11886 29.6229 6.99794 30.502C7.87701 31.3811 9.0693 31.8749 10.3125 31.8749C18.0994 31.8749 19.2094 10.6968 21.015 6.56244C21.32 5.86455 21.7905 5.2515 22.3857 4.77633C22.981 4.30116 23.683 3.97819 24.4311 3.83536C25.1792 3.69253 25.9509 3.73415 26.6793 3.9566C27.4077 4.17906 28.071 4.57566 28.6116 5.11209C29.1523 5.64852 29.5541 6.30861 29.7823 7.03525C30.0105 7.76189 30.0582 8.5332 29.9213 9.28242C29.7844 10.0316 29.467 10.7362 28.9965 11.3352C28.526 11.9341 27.9167 12.4094 27.2212 12.7199" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.625 39.375H39.375" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h1>Decentralized Exchanges (DEX)
                            </h1>
                            <p> Quecko is redefining decentralized trading with cutting-edge DEX solutions that prioritize security, transparency, and user control.
                            </p>
                        </div>
                        <div className='card__one'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45" fill="none">
                                <path d="M28.875 22.5H19.5" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M28.875 15H19.5" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M36.375 31.875V9.375C36.375 8.38044 35.9799 7.42661 35.2766 6.72335C34.5734 6.02009 33.6196 5.625 32.625 5.625H8.25" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.75 39.375H38.25C39.2446 39.375 40.1984 38.9799 40.9016 38.2766C41.6049 37.5734 42 36.6196 42 35.625V33.75C42 33.2527 41.8025 32.7758 41.4508 32.4242C41.0992 32.0725 40.6223 31.875 40.125 31.875H21.375C20.8777 31.875 20.4008 32.0725 20.0492 32.4242C19.6975 32.7758 19.5 33.2527 19.5 33.75V35.625C19.5 36.6196 19.1049 37.5734 18.4016 38.2766C17.6984 38.9799 16.7446 39.375 15.75 39.375ZM15.75 39.375C14.7554 39.375 13.8016 38.9799 13.0983 38.2766C12.3951 37.5734 12 36.6196 12 35.625V9.375C12 8.38044 11.6049 7.42661 10.9016 6.72335C10.1984 6.02009 9.24456 5.625 8.25 5.625C7.25544 5.625 6.30161 6.02009 5.59835 6.72335C4.89509 7.42661 4.5 8.38044 4.5 9.375V13.125C4.5 13.6223 4.69754 14.0992 5.04917 14.4508C5.40081 14.8025 5.87772 15 6.375 15H12" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h1>AMM-Based DEX
                            </h1>
                            <p>Quecko specializes in building Automated Market Maker (AMM) platforms that enable seamless token swaps without the need for traditional order books. Our AMM-based DEX solutions offer high liquidity, low slippage, and user-friendly interfaces, making decentralized trading accessible to everyone.</p>
                        </div>
                        <div className='card__one'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45" fill="none">
                                <path d="M8 41.25H34.25C35.2446 41.25 36.1984 40.8549 36.9016 40.1516C37.6049 39.4484 38 38.4946 38 37.5V13.125L28.625 3.75H11.75C10.7554 3.75 9.80161 4.14509 9.09835 4.84835C8.39509 5.55161 8 6.50544 8 7.5V15" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M26.75 3.75V11.25C26.75 12.2446 27.1451 13.1984 27.8484 13.9017C28.5516 14.6049 29.5054 15 30.5 15H38" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.875 22.5L4.25 28.125L9.875 33.75" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.375 33.75L23 28.125L17.375 22.5" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h1>Order Book-Based DEX
                            </h1>
                            <p> For traders who prefer a traditional trading experience, Quecko’s order book-based DEX platforms provide transparency, control, and efficiency. Enjoy the benefits of decentralized trading with the familiarity of centralized systems.
                            </p>
                        </div>
                        <div className='card__one'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45" fill="none">
                                <path d="M26.5 3.75V11.25C26.5 12.2446 26.8951 13.1984 27.5984 13.9017C28.3016 14.6049 29.2554 15 30.25 15H37.75" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.25 24.1875L4.5625 23.4375" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.25 28.3125L4.5625 29.0625" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.01938 40.3125C9.69962 40.9124 10.5743 41.2455 11.4812 41.25H34C34.9946 41.25 35.9484 40.8549 36.6516 40.1516C37.3549 39.4484 37.75 38.4946 37.75 37.5V13.125L28.375 3.75H11.5C10.5054 3.75 9.55161 4.14509 8.84835 4.84835C8.14509 5.55161 7.75 6.50544 7.75 7.5V12.1875" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.4375 21L8.6875 19.3125" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.4375 31.5L8.6875 33.1875" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.3125 19.3125L13.5625 21" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.3125 33.1875L13.5625 31.5" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.4375 23.4375L16.75 24.1875" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.4375 29.0625L16.75 28.3125" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.5 31.875C14.6066 31.875 17.125 29.3566 17.125 26.25C17.125 23.1434 14.6066 20.625 11.5 20.625C8.3934 20.625 5.875 23.1434 5.875 26.25C5.875 29.3566 8.3934 31.875 11.5 31.875Z" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h1>Cross-Chain DEX
                            </h1>
                            <p>Quecko breaks down blockchain barriers with our cross-chain DEX solutions. Trade assets across multiple blockchains effortlessly, ensuring interoperability and expanding your trading opportunities.</p>
                        </div>
                    </div>
                </div>


                <div className='Application'>
                    <div className='inner__textt'>
                        <h1>Why Choose Quecko for Web3 & DeFi Solutions?

                        </h1>
                        <p>At Quecko, we don’t just build solutions—we craft experiences that redefine the future of finance. Here’s why we’re your ultimate partner for Web3 and DeFi innovation:
                        </p>
                    </div>
                    <div className='top_parents'>
                        <div className='parents_cards'>
                            <div className='cardee'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M9.33331 4.45337V6.6667C9.33331 7.72757 9.75474 8.74498 10.5049 9.49513C11.255 10.2453 12.2724 10.6667 13.3333 10.6667" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.6667 29.2668V24.0001C14.6667 23.2928 14.3857 22.6146 13.8856 22.1145C13.3855 21.6144 12.7072 21.3334 12 21.3334C11.2928 21.3334 10.6145 21.0525 10.1144 20.5524C9.61429 20.0523 9.33333 19.374 9.33333 18.6667V17.3334C9.33333 16.6262 9.05238 15.9479 8.55229 15.4478C8.05219 14.9477 7.37391 14.6667 6.66667 14.6667H2.73334" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M28.72 20H22.6667C21.9594 20 21.2811 20.281 20.781 20.781C20.281 21.2811 20 21.9594 20 22.6667V28.72" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 2.66675C13.5357 2.6669 11.1197 3.34998 9.02012 4.64017C6.92056 5.93035 5.21963 7.77716 4.10617 9.97555C2.9927 12.1739 2.51027 14.6379 2.71243 17.0939C2.91459 19.5499 3.79343 21.9018 5.25138 23.8885C6.70934 25.8752 8.68936 27.4191 10.9716 28.3486C13.2539 29.2781 15.7491 29.5569 18.1803 29.1541C20.6114 28.7513 22.8834 27.6826 24.7439 26.0667C26.6044 24.4508 27.9807 22.3509 28.72 20.0001" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M26.6666 8.00008V5.33341C26.6666 4.62617 26.3857 3.94789 25.8856 3.4478C25.3855 2.9477 24.7072 2.66675 24 2.66675C23.2927 2.66675 22.6145 2.9477 22.1144 3.4478C21.6143 3.94789 21.3333 4.62617 21.3333 5.33341V8.00008" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M28 8H20C19.2636 8 18.6667 8.59695 18.6667 9.33333V13.3333C18.6667 14.0697 19.2636 14.6667 20 14.6667H28C28.7364 14.6667 29.3334 14.0697 29.3334 13.3333V9.33333C29.3334 8.59695 28.7364 8 28 8Z" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h2> Innovation at Its Core</h2>
                                <p>Quecko thrives on pushing boundaries. We stay ahead of the curve with cutting-edge blockchain solutions that drive innovation and set new industry standards.
                                </p>
                            </div>
                            <div className='cardee'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 29.3334C23.3638 29.3334 29.3333 23.3639 29.3333 16.0001C29.3333 8.63628 23.3638 2.66675 16 2.66675C8.63616 2.66675 2.66663 8.63628 2.66663 16.0001C2.66663 23.3639 8.63616 29.3334 16 29.3334Z" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 18.6666C17.4728 18.6666 18.6667 17.4727 18.6667 15.9999C18.6667 14.5272 17.4728 13.3333 16 13.3333C14.5273 13.3333 13.3334 14.5272 13.3334 15.9999C13.3334 17.4727 14.5273 18.6666 16 18.6666Z" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h2>Unmatched Security
                                </h2>
                                <p>Your trust is our priority. With robust encryption, decentralized protocols, and multi-layered security measures, we ensure your assets and data are always protected.</p>
                            </div>
                        </div>
                        <div className='parents_cards'>
                            <div className='cardee'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M25.3334 6.66675C23.3334 6.66675 21.6 8.53341 21.3334 9.33341C16.6667 7.33341 6.66669 8.93341 6.66669 16.0001C6.66669 18.4001 6.66669 20.0001 9.33335 22.0001V26.6667H14.6667V24.0001H18.6667V26.6667H24V21.3334C25.3334 20.6667 26.2667 20.0001 26.6667 18.6667H29.3334V13.3334H26.6667C26.6667 12.0001 26 11.3334 25.3334 10.6667V6.66675Z" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.66669 12V13.3333C2.66669 14.8 3.86669 16 5.33335 16H6.66669" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21.3333 14.6667H21.3466" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h2> Built to Scale
                                </h2>
                                <p>Whether you’re a startup or an enterprise, our solutions are designed to grow with you. Quecko’s platforms handle high user demands and complex operations effortlessly.
                                </p>
                            </div>
                            <div className='cardee'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M12 4H6.66667C5.19391 4 4 5.19391 4 6.66667V12C4 13.4728 5.19391 14.6667 6.66667 14.6667H12C13.4728 14.6667 14.6667 13.4728 14.6667 12V6.66667C14.6667 5.19391 13.4728 4 12 4Z" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.33337 14.6667V20.0001C9.33337 20.7073 9.61433 21.3856 10.1144 21.8857C10.6145 22.3858 11.2928 22.6667 12 22.6667H17.3334" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25.3334 17.3333H20C18.5273 17.3333 17.3334 18.5272 17.3334 19.9999V25.3333C17.3334 26.806 18.5273 27.9999 20 27.9999H25.3334C26.8061 27.9999 28 26.806 28 25.3333V19.9999C28 18.5272 26.8061 17.3333 25.3334 17.3333Z" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h2>User-Centric Design

                                </h2>
                                <p> We believe technology should be intuitive, not intimidating. Quecko’s seamless interfaces and frictionless experiences make Web3 and DeFi accessible to everyone
                                .</p>
                            </div>
                        </div>
                        <div className='parents_cards'>
                            <div className='cardee'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M14.6667 22.6666L17.3334 25.3333C17.596 25.5959 17.9078 25.8042 18.251 25.9464C18.5941 26.0885 18.9619 26.1617 19.3334 26.1617C19.7048 26.1617 20.0726 26.0885 20.4157 25.9464C20.7589 25.8042 21.0707 25.5959 21.3334 25.3333C21.596 25.0706 21.8043 24.7588 21.9465 24.4156C22.0886 24.0725 22.1618 23.7047 22.1618 23.3333C22.1618 22.9618 22.0886 22.594 21.9465 22.2509C21.8043 21.9077 21.596 21.5959 21.3334 21.3333" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.6667 18.6666L22 21.9999C22.5304 22.5304 23.2499 22.8284 24 22.8284C24.7501 22.8284 25.4696 22.5304 26 21.9999C26.5304 21.4695 26.8284 20.7501 26.8284 19.9999C26.8284 19.2498 26.5304 18.5304 26 17.9999L20.8267 12.8266C20.0767 12.0775 19.06 11.6568 18 11.6568C16.94 11.6568 15.9233 12.0775 15.1733 12.8266L14 13.9999C13.4696 14.5304 12.7501 14.8284 12 14.8284C11.2499 14.8284 10.5304 14.5304 10 13.9999C9.46956 13.4695 9.17157 12.7501 9.17157 11.9999C9.17157 11.2498 9.46956 10.5304 10 9.99994L13.7467 6.25327C14.963 5.04013 16.5492 4.26734 18.2542 4.05724C19.9592 3.84713 21.6855 4.21171 23.16 5.09327L23.7867 5.46661C24.3544 5.80925 25.0294 5.9281 25.68 5.79994L28 5.33327" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M28 4L29.3334 18.6667H26.6667" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.00002 4L2.66669 18.6667L11.3334 27.3333C11.8638 27.8638 12.5832 28.1618 13.3334 28.1618C14.0835 28.1618 14.8029 27.8638 15.3334 27.3333C15.8638 26.8029 16.1618 26.0835 16.1618 25.3333C16.1618 24.5832 15.8638 23.8638 15.3334 23.3333" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 5.33325H14.6667" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h2> Tailored to Your Needs</h2>
                                <p>Your business is unique, and so are our solutions. Quecko delivers fully customizable platforms that align perfectly with your goals, ensuring you stand out in the digital landscape.
                                </p>
                            </div>
                            {/* <div className='cardee'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M2.74936 16.464C2.63824 16.1646 2.63824 15.8353 2.74936 15.536C3.83162 12.9118 5.66871 10.668 8.02772 9.08919C10.3867 7.51034 13.1614 6.66748 16 6.66748C18.8386 6.66748 21.6133 7.51034 23.9723 9.08919C26.3313 10.668 28.1684 12.9118 29.2507 15.536C29.3618 15.8353 29.3618 16.1646 29.2507 16.464C28.1684 19.0882 26.3313 21.3319 23.9723 22.9108C21.6133 24.4897 18.8386 25.3325 16 25.3325C13.1614 25.3325 10.3867 24.4897 8.02772 22.9108C5.66871 21.3319 3.83162 19.0882 2.74936 16.464Z" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h2>Transparency</h2>
                                <p>Transparency is the most entertaining feature of smart contracts. The information is visible to all the people throughout the blockchain network in this contract, hence ensuring a surrounding of trust.</p>
                            </div> */}
                        </div>
                    </div>
                </div>

            </section>
            <Defiuses />
            <Projects />
            <Defifaqs />
            <Work />
            <Footer />
        </>
    )
}

export default Webdefi