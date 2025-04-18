import React from 'react'

const Projects = () => {
    return (
        <>
            <section className='projects_main' id="projects">
                <div className='inner_projects'>
                    {/* <span className='ourwork'>Our work</span> */}
                    <h2>Our Projects</h2>
                    <div className='parent_div'>
                        <div className='left_side hovercard'>
                            <video className='main-banner-video'
                                muted="muted" playsinline="playsinline"
                                autoPlay
                                loop
                                width="100%"
                                id="myVideo">
                                <source src="\Assets\6.Launch pad.mp4" type="video/mp4" />
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
                                <source src="\Assets\3. Multichain Wallet.mp4" type="video/mp4" />
                            </video>
                            <div className='buttons_div'>
                                <button>Branding</button>
                                <button>Development</button>
                                <button>Marketing</button>
                            </div>
                        </div>
                    </div>
                    <div className='parent_div second_parent'>
                        <div className='left_side hovercard'>
                            <video className='main-banner-video'
                                muted="muted" playsinline="playsinline"
                                autoPlay
                                loop
                                width="100%"
                                id="myVideo">
                                <source src="\Assets\5. Estate Slice.mp4" />
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
                                <source src="\Assets\1. Legion.mp4 " type="video/mp4" />
                            </video>
                            <div className='buttons_div'>
                                <button>Branding</button>
                                <button>Development</button>
                                <button>Marketing</button>
                            </div>
                        </div>
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