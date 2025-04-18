import Link from 'next/link'
import React from 'react'

const Projects = () => {
    return (
        <>
            <section className='projects_main' id="projects">
                <div className='inner_projects mineprojects'>
                    {/* <span className='ourwork'>Our work</span> */}
                    <h2>Our Projects</h2>
                    <div className='parent_div'>
                        <Link href="/lunchpad">
                        <div className='left_side hovercard'>
                            <video className='main-banner-video'
                                muted="muted" playsinline="playsinline"
                                autoPlay
                                loop
                                width="100%"
                                id="myVideo">
                                <source src="https://media.quecko.com/videos/6.Launchpad.mp4" type="video/mp4" />
                            </video>
                            {/* <div className='buttons_div'>
                                <button>Branding</button>
                                <button>Development</button>
                                <button>Marketing</button>
                            </div> */}
                        </div>
                        </Link>
                        <Link href="/multichain">
                        <div className='right_side hovercard'>
                            <video className='main-banner-video'
                                muted="muted" playsinline="playsinline"
                                autoPlay
                                loop
                                width="100%"
                                id="myVideo">
                                <source src="https://media.quecko.com/videos/3.MultichainWallet.mp4" type="video/mp4" />
                            </video>
                            {/* <div className='buttons_div'>
                                <button>Branding</button>
                                <button>Development</button>
                                <button>Marketing</button>
                            </div> */}
                        </div>
                        </Link>
                    </div>
                    <div className='parent_div second_parent'>
                    <Link href="/estateslice">
                        <div className='left_side hovercard'>
                            <video className='main-banner-video'
                                muted="muted" playsinline="playsinline"
                                autoPlay
                                loop
                                width="100%"
                                id="myVideo">
                                <source src="https://media.quecko.com/videos/5.EstateSlice.mp4" />
                            </video>
                            {/* <div className='buttons_div'>
                                <button>Branding</button>
                                <button>Development</button>
                                <button>Marketing</button>
                            </div> */}
                        </div>
                        </Link>
                        <Link href="/legion">

                        <div className='right_side hovercard'>
                            <video className='main-banner-video'
                                muted="muted" playsinline="playsinline"
                                autoPlay
                                loop
                                width="100%"
                                id="myVideo">
                                <source src="https://media.quecko.com/videos/1.Legion.mp4" type="video/mp4" />
                            </video>
                            {/* <div className='buttons_div'>
                                <button>Branding</button>
                                <button>Development</button>
                                <button>Marketing</button>
                            </div> */}
                        </div>
                        </Link>
                    </div>
                    {/* <div className='parent_div'>
                        <div className='left_side hovercard'>
                            <video className='main-banner-video'
                                muted="muted" playsinline="playsinline"
                                autoPlay
                                loop
                                width="100%"
                                id="myVideo">
                                <source src="https://res.cloudinary.com/drt6vurtt/video/upload/v1742331034/queckosite%20%28new%29/videos/thrdleft_mfbaul.mp4" type="video/mp4" />
                            </video>
                            <div className='buttons_div'>
                                <button>Branding</button>
                                <button>Development</button>
                                <button>Marketing</button>
                            </div>
                        </div>
                        <div className='right_side hovercard'>
                            <video className='main-banner-video'
                                muted="muted" playsinline="playsinline"
                                autoPlay
                                loop
                                width="100%"
                                id="myVideo">
                                <source src="https://res.cloudinary.com/drt6vurtt/video/upload/v1742331017/queckosite%20%28new%29/videos/thrdright_obhwpr.mp4" type="video/mp4" />
                            </video>
                            <div className='buttons_div'>
                                <button>Branding</button>
                                <button>Development</button>
                                <button>Marketing</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Projects