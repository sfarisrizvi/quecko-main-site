import VideoWithFallback from '@/hooks/videowitfallback';
import Link from 'next/link'
import React from 'react'


const Projects = () => {
    return (
        <section className='projects_main' id="projects">
            <div className='inner_projects mineprojects'>
                <p className='ourwork'>Our Work</p>
                <h2>Our Projects</h2>

                <div className='parent_div second_parent'>
                    <Link href="/portfolio/launchpad">
                        <div className='left_side hovercard'>
                            <VideoWithFallback
                                videoSrc="https://media.quecko.com/videos/videolunchpad.mp4"
                                thumbnail="/Assets/thumbnails/launchh.webp"
                                height={{
                                    default: '501px',
                                    responsive: '255px'
                                }}
                            />
                        </div>
                    </Link>

                    <Link href="/portfolio/multi-chain">
                        <div className='right_side hovercard'>
                            <VideoWithFallback
                                videoSrc="https://media.quecko.com/videos/videomultii.mp4"
                                thumbnail="/Assets/thumbnails/multii.webp"
                                height={{
                                    default: '501px',
                                    responsive: '255px'
                                }}
                            />
                        </div>
                    </Link>
                </div>
{/* 
                <div className='parent_div second_parent'>
                    <Link href="/portfolio/estate-slice">
                        <div className='left_side hovercard'>
                            <VideoWithFallback
                                videoSrc="https://media.quecko.com/videos/videostate.mp4"
                                thumbnail="/Assets/thumbnails/estatee.webp"
                                height={{
                                    default: '501px',
                                    responsive: '255px'
                                }}
                            />
                        </div>
                    </Link>

                    <Link href="/portfolio/legion">
                        <div className='right_side hovercard'>
                            <VideoWithFallback
                                videoSrc="https://media.quecko.com/videos/videolegion.mp4"
                                thumbnail="/Assets/thumbnails/legionn.webp"
                                height={{
                                    default: '501px',
                                    responsive: '255px'
                                }}
                            />
                        </div>
                    </Link>
                </div> */}

                <div className='parent_div'>
                    <Link href="/portfolio/decentralized-options-market">
                        <div className='left_side hovercard'>
                            <VideoWithFallback
                                videoSrc="https://media.quecko.com/videos/videorain.mp4"
                                thumbnail="/Assets/thumbnails/domm.webp"
                                height={{
                                    default: '501px',
                                    responsive: '255px'
                                }}
                            />
                        </div>
                    </Link>

                    <Link href="/portfolio/diet-and-cheat-meal-app">
                        <div className='right_side hovercard'>
                            <VideoWithFallback
                                videoSrc="https://media.quecko.com/videos/videodiet.mp4"
                                thumbnail="/Assets/thumbnails/diett.webp"
                                height={{
                                    default: '501px',
                                    responsive: '255px'
                                }}
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
