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
                        <Link href="/launchpad">
                        <div className='left_side hovercard'>
                            <video className='main-banner-video'
                                muted="muted" playsinline="playsinline"
                                autoPlay
                                loop
                                width="100%"
                                id="myVideo">
                                <source src="https://media.quecko.com/videos/videolunchpad.mp4" type="video/mp4" />
                            </video>
                            {/* <div className='buttons_div'>
                                <button>Branding</button>
                                <button>Development</button>
                                <button>Marketing</button>
                            </div> */}
                        </div>
                        </Link>
                        <Link href="/multi-chain">
                        <div className='right_side hovercard'>
                            <video className='main-banner-video'
                                muted="muted" playsinline="playsinline"
                                autoPlay
                                loop
                                width="100%"
                                id="myVideo">
                                <source src="https://media.quecko.com/videos/videomultii.mp4" type="video/mp4" />
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
                                <source src="https://media.quecko.com/videos/videostate.mp4" />
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
                                <source src="https://media.quecko.com/videos/videolegion.mp4" type="video/mp4" />
                            </video>
                            {/* <div className='buttons_div'>
                                <button>Branding</button>
                                <button>Development</button>
                                <button>Marketing</button>
                            </div> */}
                        </div>
                        </Link>
                    </div>
                    <div className='parent_div'>
                        <Link href="/decentralizedoptionsmarket">
                        <div className='left_side hovercard'>
                            <video className='main-banner-video'
                                muted="muted" playsinline="playsinline"
                                autoPlay
                                loop
                                width="100%"
                                id="myVideo">
                                <source src="https://media.quecko.com/videos/videorain.mp4" type="video/mp4" />
                            </video>
                            {/* <div className='buttons_div'>
                                <button>Branding</button>
                                <button>Development</button>
                                <button>Marketing</button>
                            </div> */}
                        </div>
                        </Link>
                        <Link href="/dietandcheatmealapp">
                        <div className='right_side hovercard'>
                            <video className='main-banner-video'
                                muted="muted" playsinline="playsinline"
                                autoPlay
                                loop
                                width="100%"
                                id="myVideo">
                                <source src="https://media.quecko.com/videos/videodiet.mp4" type="video/mp4" />
                            </video>
                            {/* <div className='buttons_div'>
                                <button>Branding</button>
                                <button>Development</button>
                                <button>Marketing</button>
                            </div> */}
                        </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects