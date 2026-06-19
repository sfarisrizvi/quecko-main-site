"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import PortfolioLayout from '@/components/layouts/PortfolioLayout';
import Cnt from "@/components/sections/Cnt";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Portfolio" },
];

const Portfolio = () => {
    const textRef = useRef(null);

    useEffect(() => {
        if (!textRef.current) return;
        const element = textRef.current;
        const text = element.innerText;
        element.innerHTML = text.split("").map((char) => `<span class="char">${char === " " ? "&nbsp;" : char}</span>`).join("");
        import("gsap").then(({ gsap }) => {
            gsap.timeline()
                .set(".style-1 .char", { opacity: 0, y: 50 })
                .to(".style-1 .char", { y: 0, opacity: 1, duration: 1.8, ease: "power4.out", stagger: { amount: 1, ease: "power2.inOut" } });
        });
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 500);
        return () => clearTimeout(timer);
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
            if (scrollY >= pageHeight - threshold) setDirection("up");
            else if (scrollY <= threshold) setDirection("down");
        };
        const smoothScroll = () => {
            if (!scrolling) return;
            window.scrollBy({ top: direction === "down" ? scrollSpeed : -scrollSpeed, behavior: "smooth" });
            scrollRef.current = requestAnimationFrame(smoothScroll);
        };
        if (scrolling) scrollRef.current = requestAnimationFrame(smoothScroll);
        window.addEventListener("scroll", checkScrollPosition);
        return () => { cancelAnimationFrame(scrollRef.current); window.removeEventListener("scroll", checkScrollPosition); };
    }, [scrolling, direction]);

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const tab = searchParams.get("tab");
    const defaultTab = 'all';
    const [activeTab, setActiveTab] = useState(tab || defaultTab);

    useEffect(() => { if (tab) setActiveTab(tab); }, [tab]);

    const handleTabChange = (newTab) => {
        setActiveTab(newTab);
        const params = new URLSearchParams(searchParams.toString());
        params.set("tab", newTab);
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return (
        <PortfolioLayout breadcrumbs={breadcrumbs}>
            <BreadcrumbSchema items={[
                { name: "Home", url: "https://quecko.com" },
                { name: "Portfolio", url: "https://quecko.com/portfolio" },
            ]} />

            <section className="smart_contract">
                <div className="inner_data">
                    <img onClick={() => { const s = window.scrollY; window.scrollTo({ top: direction === "down" ? s + 700 : s - 700, behavior: 'smooth' }); }} className={direction === "down" ? "downarrow" : "downarrow setarrowup"} src="/Assets/downarrow.svg" />
                    <video className="main-banner-video" muted playsInline autoPlay loop width="100%" id="myVideo">
                        <source src="/Assets/webdevelp.mp4" type="video/mp4" />
                    </video>
                    <div className="blogdetail">
                        <div className="parenttext">
                            <div className="twicebtn">
                                <p className="hometexttt">Home</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                    <path d="M5.25 11L8.75 7.5L5.25 4" stroke="#9D9D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Portfolio</span>
                            </div>
                            <h1 className="mainpara">Our Portfolio</h1>
                            <p className="para">Our portfolio is a reflection of our purpose. Every project we deliver is a building block in the decentralized future we're helping to shape. From blockchain innovations to Web3 ecosystems, we don't just work on ideas — we bring them to life with precision, passion, and purpose.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="tabs_porfolio">
                <div>
                    <nav className="navsectiontabs">
                        <div className="nav nav-tabs" role="tablist">
                            <button className={`nav-link ${activeTab === 'all' ? 'active' : ''}`} onClick={() => handleTabChange('all')}>All</button>
                            <button className={`nav-link ${activeTab === 'web3' ? 'active' : ''}`} onClick={() => handleTabChange('web3')}>Web3 Development</button>
                            <button className={`nav-link ${activeTab === 'marketing' ? 'active' : ''}`} onClick={() => handleTabChange('marketing')}>Web3 Marketing</button>
                        </div>
                    </nav>

                    <div className="tab-content mt-3">
                        {activeTab === 'all' && (
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel">
                                <section className='projects_main' id="projects">
                                    <div className='inner_projects'>
                                        <div className='parent_div'>
                                            <Link href='/portfolio/launchpad' prefetch={false}><div className='left_side hovercard'><img src='/Assets/portnew.png' className='imgport' /></div></Link>
                                            <Link href='/portfolio/privacy-protocol' prefetch={false}><div className='right_side hovercard'><img src='/Assets/preview.png' className='imgport' /></div></Link>
                                        </div>
                                        <div className='parent_div second_parent'>
                                            <Link href='/portfolio/multi-chain' prefetch={false}><div className='right_side hovercard'><img src='/Assets/port22.png' className='imgport' /></div></Link>
                                            <Link href='/portfolio/quecko-exchange' prefetch={false}><div className='right_side hovercard'><img src='/Assets/exchangeimg.png' className='imgport' /></div></Link>
                                        </div>
                                        <div className='parent_div'>
                                            <Link href='/portfolio/domain-name-system' prefetch={false}><div className='left_side hovercard'><img src='/Assets/port55.png' className='imgport' /></div></Link>
                                            <Link href='/portfolio/nft-gallery' prefetch={false}><div className='left_side hovercard'><img src='/Assets/port33.png' className='imgport' /></div></Link>
                                        </div>
                                        <div className='parent_div second_parent'>
                                            <Link href='/portfolio/decentralized-options-market' prefetch={false}><div className='left_side hovercard'><img src='/Assets/domnew.png' className='imgport' /></div></Link>
                                            <Link href='/portfolio/reward-flow' prefetch={false}><div className='right_side hovercard'><img src='/Assets/port88.png' className='imgport' /></div></Link>
                                        </div>
                                        <div className='parent_div second_parent'>
                                            <Link href='/portfolio/vion' prefetch={false}><div className='left_side hovercard'><img src='/Assets/vionanother.png' className='imgport' /></div></Link>
                                            <Link href='/portfolio/high-yield-dollar-protocol' prefetch={false}><div className='right_side hovercard'><img src='/Assets/hybt.png' className='imgport' /></div></Link>
                                        </div>
                                        <div className='parent_div'>
                                            <Link href='/portfolio/diet-and-cheat-meal-app' prefetch={false}><div className='left_side hovercard'><img src='/Assets/portdiet.png' className='imgport' /></div></Link>
                                            <Link href='/portfolio/golden-looni' prefetch={false}><div className='right_side hovercard'><img src='/Assets/lonihome.png' className='imgport' /></div></Link>
                                        </div>
                                        <div className='parent_div second_parent'>
                                            <Link href='/portfolio/quick-grocery' prefetch={false}><div className='left_side hovercard'><img src='/Assets/port111.png' className='imgport' /></div></Link>
                                            <Link href='/portfolio/meme-coin-launchpad' prefetch={false}><div className='right_side hovercard'><img src='/Assets/portmeme1.png' className='imgport' /></div></Link>
                                        </div>
                                        <div className='parent_div'>
                                            <Link href='/portfolio/estate-slice' prefetch={false}><div className='right_side hovercard'><img src='/Assets/port77.png' className='imgport' /></div></Link>
                                            <Link href='/portfolio/tapspace' prefetch={false}><div className='right_side hovercard'><img src='/Assets/ptab.png' className='imgport' /></div></Link>
                                        </div>
                                        <div className='parent_div second_parent'>
                                            <Link href='/portfolio/privacy-protocol-oracle' prefetch={false}><div className='left_side hovercard'><img src='/Assets/portorcale.png' className='imgport' /></div></Link>
                                            <Link href='/portfolio/tapspace' prefetch={false}><div className='right_side hovercard'><img src='/Assets/spacenew.png' className='imgport' /></div></Link>
                                        </div>
                                    </div>
                                    <div className='inner_projects'>
                                        <div className="parent_div">
                                            <Link href="/portfolio/prodex" prefetch={false}><div className="right_side hovercard"><img src="/Assets/prodexd.png" className="imgport lassst_img" /></div></Link>
                                            <Link href="/portfolio/quick-marketing" prefetch={false}><div className="right_side hovercard"><img src="/Assets/smallquick.png" className="imgport lassst_img" /></div></Link>
                                        </div>
                                        <div className='parent_div second_parent'>
                                            <Link href='/portfolio/syrupal-protocol' prefetch={false}><div className='left_side hovercard'><img src='/Assets/syn.png' className='imgport' /></div></Link>
                                            <Link href='/services/marketing/memecoin-marketing' prefetch={false}><div className='right_side hovercard'><img src='/Assets/shyyy.png' className='imgport' /></div></Link>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )}
                        {activeTab === 'web3' && (
                            <section className='projects_main' id="projects">
                                <div className='inner_projects'>
                                    <div className='parent_div'>
                                        <Link href='/portfolio/launchpad' prefetch={false}><div className='left_side hovercard'><img src='/Assets/portnew.png' className='imgport' /></div></Link>
                                        <Link href='/portfolio/privacy-protocol' prefetch={false}><div className='right_side hovercard'><img src='/Assets/preview.png' className='imgport' /></div></Link>
                                    </div>
                                    <div className='parent_div second_parent'>
                                        <Link href='/portfolio/multi-chain' prefetch={false}><div className='right_side hovercard'><img src='/Assets/port22.png' className='imgport' /></div></Link>
                                        <Link href='/portfolio/quecko-exchange' prefetch={false}><div className='right_side hovercard'><img src='/Assets/exchangeimg.png' className='imgport' /></div></Link>
                                    </div>
                                    <div className='parent_div'>
                                        <Link href='/portfolio/domain-name-system' prefetch={false}><div className='left_side hovercard'><img src='/Assets/port55.png' className='imgport' /></div></Link>
                                        <Link href='/portfolio/nft-gallery' prefetch={false}><div className='left_side hovercard'><img src='/Assets/port33.png' className='imgport' /></div></Link>
                                    </div>
                                    <div className='parent_div second_parent'>
                                        <Link href='/portfolio/decentralized-options-market' prefetch={false}><div className='left_side hovercard'><img src='/Assets/domnew.png' className='imgport' /></div></Link>
                                        <Link href='/portfolio/reward-flow' prefetch={false}><div className='right_side hovercard'><img src='/Assets/port88.png' className='imgport' /></div></Link>
                                    </div>
                                    <div className='parent_div second_parent'>
                                        <Link href='/portfolio/vion' prefetch={false}><div className='left_side hovercard'><img src='/Assets/vionanother.png' className='imgport' /></div></Link>
                                        <Link href='/portfolio/high-yield-dollar-protocol' prefetch={false}><div className='right_side hovercard'><img src='/Assets/hybt.png' className='imgport' /></div></Link>
                                    </div>
                                    <div className='parent_div'>
                                        <Link href='/portfolio/diet-and-cheat-meal-app' prefetch={false}><div className='left_side hovercard'><img src='/Assets/portdiet.png' className='imgport' /></div></Link>
                                        <Link href='/portfolio/golden-looni' prefetch={false}><div className='right_side hovercard'><img src='/Assets/lonihome.png' className='imgport' /></div></Link>
                                    </div>
                                    <div className='parent_div second_parent'>
                                        <Link href='/portfolio/quick-grocery' prefetch={false}><div className='left_side hovercard'><img src='/Assets/port111.png' className='imgport' /></div></Link>
                                        <Link href='/portfolio/meme-coin-launchpad' prefetch={false}><div className='right_side hovercard'><img src='/Assets/portmeme1.png' className='imgport' /></div></Link>
                                    </div>
                                    <div className='parent_div second_parent'>
                                        <Link href='/portfolio/privacy-protocol-oracle' prefetch={false}><div className='left_side hovercard'><img src='/Assets/portorcale.png' className='imgport' /></div></Link>
                                        <Link href='/portfolio/tapspace' prefetch={false}><div className='right_side hovercard'><img src='/Assets/spacenew.png' className='imgport' /></div></Link>
                                    </div>
                                </div>
                            </section>
                        )}
                        {activeTab === 'marketing' && (
                            <section className="projects_main" id="projects">
                                <div className="inner_projects">
                                    <div className="parent_div">
                                        <Link href="/services/marketing/memecoin-marketing" prefetch={false}><div className="right_side hovercard"><img src="/Assets/shyyy.png" className="imgport" /></div></Link>
                                        <Link href="/portfolio/syrupal-protocol" prefetch={false}><div className="left_side hovercard"><img src="/Assets/syn.png" className="imgport" /></div></Link>
                                    </div>
                                    <div className="parent_div second_parent">
                                        <Link href="/portfolio/tapspace" prefetch={false}><div className="right_side hovercard"><img src="/Assets/ptab.png" className="imgport" /></div></Link>
                                        <Link href="/portfolio/quick-marketing" prefetch={false}><div className="left_side hovercard"><img src="/Assets/quicknewone.png" className="imgport" /></div></Link>
                                    </div>
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </div>

            <Cnt />
        </PortfolioLayout>
    );
};

export default Portfolio;
