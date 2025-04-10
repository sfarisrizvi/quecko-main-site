import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Header from './component/Landing/header'
import Work from './component/Landing/work'
import Footer from './component/Landing/footer'
import { getAllBlogs } from '@/Utils/Services/services'
import { categories } from '@/Utils/constants'
import { getTimeInAges } from '@/Utils/helpers'
import Loader2 from '@/hooks/loader2'
import Usesdevelopment from './usesdevelopment'
const Blog = () => {
    const [blogData, setBlogData] = useState([]);
    const [Loading, setLoading] = useState(false)


    const getAllData = async () => {
        try {
            setLoading(true)
            const data = await getAllBlogs();
            setBlogData(data);
        }
        catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllData();
    }, [])
    const [showBlogs, setShowBlogs] = useState(false);

    const handleSeeMoreClick = () => {
        setShowBlogs(true);
    };

    const [visibleCount, setVisibleCount] = useState(8);

    return (
        <>

            <section className='parentblogss'>
                <Header />
                <div className='mainblog'>

                    <div className='parentboxxx'>
                        {blogData?.length >= 1 && (

                            <div className='left'
                                style={{
                                    backgroundImage: `url(${blogData[0]?.jetpack_featured_media_url})`,
                                }}
                            >
                                <Link href={`/${blogData[0]?.slug}`}>

                                <div className='mainarrowpic'>
                                    <img src='\Assets\arrow.png' alt='img' className='img-fluid innerimg11' />
                                </div>
                                </Link>


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
                                    <p className='mainpara'>{blogData[0]?.title?.rendered}</p>
                                    <p className='para'>{blogData[0]?.excerpt?.rendered?.replace(/<[^>]+>/g, '').slice(0, 120)}...</p>

                                </div>
                            </div>
                        )}
                        <div className='right'>
                            {blogData?.length >= 2 && (

                                <div className='firstbox'
                                    style={{
                                        backgroundImage: `url(${blogData[1]?.jetpack_featured_media_url})`,
                                    }} >
                                        <Link href={`/${blogData[1]?.slug}`}>

                                    <div className='mainarrowpic'>
                                        <img src='\Assets\arrow.png' alt='img' className='img-fluid innerimg' />
                                    </div>
                                        </Link>

                                    <p className='innerpara'>{blogData[1]?.title?.rendered}</p>

                                </div>
 
                            )}
                            {blogData?.length >= 3 && (

                                <div className='secondbox'
                                    style={{
                                        backgroundImage: `url(${blogData[2]?.jetpack_featured_media_url})`,
                                    }} >
                                    <p className='innerpara'>{blogData[2]?.title?.rendered}</p>
                                    <Link href={`/${blogData[2]?.slug}`}>

                                    <div className='mainarrowpic'>
                                        <img src='\Assets\arrow.png' alt='img' className='img-fluid innerimg' />
                                    </div>
                                    </Link>

                                </div>
                             )}

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
                    {/* <Loader2 /> */}
                    {/* {Loading ? <Loader2/> : (
                        <div className='parentcardsmain'>
                            {blogData.slice(0 , 8)?.map((item, index) => {
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
              )}

                    <div className='seemore' href='/blogdetail'>
                        <div className='see_more_botton'>
                            <button className="animated-button filter">
                                <div className="btn-flip" data-back="Est labore molestiae ex quos perspi sit commodi" data-front="Est labore molestiae ex quos perspi sit commodi">
                                    <div className="front">See More</div>
                                    <div className="back">See More</div>
                                </div>
                            </button>
                        </div>

                    </div> */}

                    {Loading ? <Loader2 /> : (
                        <>
                            {Array.from({ length: Math.ceil((visibleCount - 2) / 8) }).map((_, chunkIndex) => {
                                const start = chunkIndex * 8 + 2;   
                                const end = start + 8;
                                const chunk = blogData?.slice(start, end);

                                return (
                                    <div key={chunkIndex}>
                                        <div className='parentcardsmain'>
                                            {chunk.map((item, index) => (
                                                <Link key={`${chunkIndex}-${index}`} href={`/${item?.slug}`}>
                                                    <div className='innercard'>
                                                        <div className='mainimage blogs_img'>
                                                            <img
                                                                src={item?.jetpack_featured_media_url}
                                                                alt='img'
                                                                className='img-fluid innerimg imginnner'
                                                            />
                                                        </div>
                                                        <span className='upper'>
                                                            ARTICLE <span><svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                                                <circle cx="1.5" cy="2.32996" r="1.5" fill="#9D9D9D" />
                                                            </svg></span> <span>{categories[item?.categories[0]]}</span>
                                                        </span>
                                                        <h3 className="btn-flip">
                                                            <div className="front">{item?.title?.rendered}</div>
                                                            <div className="back">{item?.title?.rendered}</div>
                                                        </h3>
                                                        <p className='para'>{getTimeInAges(item?.date)}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>

                                        {/* Show See More after every 8 blogs if more exist */}
                                        {blogData?.length > end && chunkIndex === Math.floor((visibleCount - 1) / 8) && (
                                            <div className='seemore'>
                                                <div className='see_more_botton' onClick={() => setVisibleCount(prev => prev + 8)}>
                                                    <button className="animated-button filter">
                                                        <div
                                                            className="btn-flip"
                                                            data-back="Est labore molestiae ex quos perspi sit commodi"
                                                            data-front="Est labore molestiae ex quos perspi sit commodi"
                                                            style={{ marginTop: '12px' }}
                                                        >
                                                            <div className="front">See More</div>
                                                            <div className="back">See More</div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </>
                    )}


                </div>
            </section>
            <Usesdevelopment />
            <Work />
            <Footer />


        </>
    )
}

export default Blog