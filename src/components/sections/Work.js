"use client"

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const Work = () => {
    const sectionRef = useRef(null);
    const [videoSrc, setVideoSrc] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVideoSrc("https://media.quecko.com/videos/collabvideo.mp4");
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );
        const el = sectionRef.current;
        if (el) observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section className='works_main' ref={sectionRef}>
                <div className='inner_work'>
                    <img loading="lazy" src="/Assets/bgvideolayer.png" alt="img" className='img-fluid bgvideolayer' />
                    <video
                        className='main-banner-video'
                        muted
                        playsInline
                        autoPlay
                        loop
                        width="100%"
                    >
                        {videoSrc && <source src={videoSrc} type="video/mp4" />}
                    </video>

                    <div className='innner_text_div'>
                        <h2>Let&apos;s Build <span className='together'>Together</span></h2>

                        <Link href="/contact">
                            <span className="animated-button">
                                <div className="btn-flip" data-back="Est labore molestiae ex quos perspi sit commodi" data-front="Est labore molestiae ex quos perspi sit commodi">
                                    <div className="front">Start Now <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M17.5 9.99967L13.3333 5.83301M17.5 9.99967L13.3333 14.1663M17.5 9.99967H2.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg></div>
                                    <div className="back">Start Now <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M17.5 9.99967L13.3333 5.83301M17.5 9.99967L13.3333 14.1663M17.5 9.99967H2.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg></div>
                                </div>
                            </span>
                        </Link>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Work
