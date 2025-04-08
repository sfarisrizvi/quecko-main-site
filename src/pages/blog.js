import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Header from './component/Landing/header'
import Work from './component/Landing/work'
import Footer from './component/Landing/footer'
import { getAllBlogs } from '@/Utils/Services/services'
import { categories } from '@/Utils/constants'
import { getTimeInAges } from '@/Utils/helpers'
const Blog = () => {
    const [blogData, setBlogData] = useState([]);


    const getAllData = async () => {
        try {
            const data = await getAllBlogs();
            setBlogData(data);
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getAllData();
    }, [])
    return (
        <>

            <section className='parentblogss'>
                <Header />
                <div className='mainblog'>

                    <div className='parentboxxx'>
                        <div className='left'>
                            <div className='mainarrowpic'>
                                <img src='\Assets\arrow.png' alt='img' className='img-fluid innerimg11' />
                            </div>
                            <div className='parenttext'>
                                <div className='twicebtn'>
                                    <button className="animated-button">
                                        <div className="btn-flip" data-back="Est labore molestiae ex quos perspi sit commodi" data-front="Est labore molestiae ex quos perspi sit commodi">
                                            <div className="front">Development</div>
                                            <div className="back">Development</div>
                                        </div>
                                    </button>
                                    <button className="animated-button">
                                        <div className="btn-flip" data-back="Est labore molestiae ex quos perspi sit commodi" data-front="Est labore molestiae ex quos perspi sit commodi">
                                            <div className="front">Product </div>
                                            <div className="back">Product</div>
                                        </div>
                                    </button>

                                </div>
                                <p className='mainpara'>How to improve your UI design skills: Quickly develop an “eye” for great design</p>
                                <p className='para'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>

                            </div>
                        </div>
                        <div className='right'>
                            <div className='firstbox'>
                                <div className='mainarrowpic'>
                                    <img src='\Assets\arrow.png' alt='img' className='img-fluid innerimg' />
                                </div>
                                <p className='innerpara'>How to improve your UI design skills: Quickly develop an “eye” for great design</p>
                            </div>
                            <div className='secondbox'>
                                <p className='innerpara'>How to improve your UI design skills: Quickly develop an “eye” for great design</p>
                                <div className='mainarrowpic'>
                                    <img src='\Assets\arrow.png' alt='img' className='img-fluid innerimg' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='latestblogmain'>
                    <div className='upperhead'>
                        <h1>Latest Blogs</h1>
                        <button className="animated-button filter">
                            <div className="btn-flip" data-back="Est labore molestiae ex quos perspi sit commodi" data-front="Est labore molestiae ex quos perspi sit commodi">
                                <div className="front">Filter by All <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                    <path d="M6.99984 12.75L9.9165 9.83333M6.99984 12.75L4.08317 9.83333M6.99984 12.75L6.99984 2.25" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></div>
                                <div className="back">Filter by All <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                    <path d="M6.99984 12.75L9.9165 9.83333M6.99984 12.75L4.08317 9.83333M6.99984 12.75L6.99984 2.25" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></div>
                            </div>
                        </button>

                    </div>
                     {/* <Link href={`/blogdetail?slug=${item?.slug}`}> */}
                    <div className='parentcardsmain'>
                        {blogData?.map((item, index) => {
                            return (
                                <>

                                    <Link href={`/${item?.slug}`}>


                                        <div key={index} className='innercard'>
                                            <div className='mainimage blogs_img'>
                                                <img src={item?.jetpack_featured_media_url} alt='img' className='img-fluid innerimg imginnner' />
                                            </div>
                                            <span className='upper'>ARTICLE <span><svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                                <circle cx="1.5" cy="2.32996" r="1.5" fill="#9D9D9D" />
                                            </svg></span> <span>{categories[item?.categories[0]]}</span></span>
                                            <h3 className="btn-flip">
                                                <div className="front">{item?.title?.rendered}</div>
                                                <div className="back">{item?.title?.rendered}</div>
                                            </h3>
                                            <p className='para'>{getTimeInAges(item?.date)}</p>
                                        </div></Link>
                                </>
                            )
                        })}
                    </div>

                    {/* <Link className='seemore' href='/blogdetail'>
                        <div className='see_more_botton'>
                            <button className="animated-button filter">
                                <div className="btn-flip" data-back="Est labore molestiae ex quos perspi sit commodi" data-front="Est labore molestiae ex quos perspi sit commodi">
                                    <div className="front">See More</div>
                                    <div className="back">See More</div>
                                </div>
                            </button>
                        </div>

                    </Link> */}

                </div>
            </section>

            <Work />
            <Footer />


        </>
    )
}

export default Blog