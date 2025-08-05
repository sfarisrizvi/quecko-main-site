import Link from 'next/link'
import React from 'react'

const Work = () => {
    return (
        <>
            <section className='works_main' >
                <div className='inner_work'>
                    <img loading="lazy" src="\Assets\bgvideolayer.png" alt="img" className='img-fluid bgvideolayer' />
                    <video className='main-banner-video'
                        muted="muted" playsinline="playsinline"
                        autoPlay
                        loop
                        width="100%"
                        id="myVideo">
                        <source src="\Assets\collabvideo.mp4" />
                    </video>

                    <div className='innner_text_div'>
                        <h2>Let’s Build <span className='together'>Together</span> </h2>

                        <Link href="/contact">
                            <button className="animated-button" >
                                <div className="btn-flip" data-back="Est labore molestiae ex quos perspi sit commodi" data-front="Est labore molestiae ex quos perspi sit commodi">
                                    <div className="front">Start Now <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M17.5 9.99967L13.3333 5.83301M17.5 9.99967L13.3333 14.1663M17.5 9.99967H2.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg></div>
                                    <div className="back">Start Now <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M17.5 9.99967L13.3333 5.83301M17.5 9.99967L13.3333 14.1663M17.5 9.99967H2.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg></div>
                                </div>
                            </button>
                        </Link>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Work