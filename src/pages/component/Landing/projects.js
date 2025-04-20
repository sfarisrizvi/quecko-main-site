import VideoWithFallback from '@/hooks/videowitfallback';
import Link from 'next/link'
import React from 'react'


const Projects = () => {
    return (
        <section className='projects_main' id="projects">
            <div className='inner_projects mineprojects'>
                <h2>Our Projects</h2>

                <div className='parent_div'>
                    <Link href="/launchpad">
                        <div className='left_side hovercard'>
                            <VideoWithFallback
                                videoSrc="https://media.quecko.com/videos/videolunchpad.mp4"
                                thumbnail="/Assets/thumbnails/launchh.png"
                            />
                        </div>
                    </Link>

                    <Link href="/multi-chain">
                        <div className='right_side hovercard'>
                            <VideoWithFallback
                                videoSrc="https://media.quecko.com/videos/videomultii.mp4"
                                thumbnail="/Assets/thumbnails/multii.png"
                            />
                        </div>
                    </Link>
                </div>

                <div className='parent_div second_parent'>
                    <Link href="/estate-slice">
                        <div className='left_side hovercard'>
                            <VideoWithFallback
                                videoSrc="https://media.quecko.com/videos/videostate.mp4"
                                thumbnail="/Assets/thumbnails/estatee.png"
                            />
                        </div>
                    </Link>

                    <Link href="/legion">
                        <div className='right_side hovercard'>
                            <VideoWithFallback
                                videoSrc="https://media.quecko.com/videos/videolegion.mp4"
                                thumbnail="/Assets/thumbnails/legionn.png"
                            />
                        </div>
                    </Link>
                </div>

                <div className='parent_div'>
                    <Link href="/decentralized-options-market">
                        <div className='left_side hovercard'>
                            <VideoWithFallback
                                videoSrc="https://media.quecko.com/videos/videorain.mp4"
                                thumbnail="/Assets/thumbnails/domm.png"
                            />
                        </div>
                    </Link>

                    <Link href="/diet-and-cheat-meal-app">
                        <div className='right_side hovercard'>
                            <VideoWithFallback
                                videoSrc="https://media.quecko.com/videos/videodiet.mp4"
                                thumbnail="/Assets/thumbnails/diett.png"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
