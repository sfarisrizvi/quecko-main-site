
"use client"

import { useEffect, useState } from "react"
import Header from "./component/Landing/header"
import Work from "./component/Landing/work"
import Footer from "./component/Landing/footer"
import { getBlogsdetails, RelatedBlogs } from "@/Utils/Services/services"
import { getTimeInAges } from "@/Utils/helpers"
import Link from "next/link"
import { categories } from "@/Utils/constants"
import Head from "next/head"
import Loader from "@/hooks/loader"

// Server-side data fetching
export async function getServerSideProps(context) {
    const { slug } = context.params // Use params instead of query in getServerSideProps

    try {
        const blogdetail = (await getBlogsdetails(slug)) || []

        // If we have blog details, fetch related blogs
        let relatedBlogs = []
        if (blogdetail && blogdetail.length > 0 && blogdetail[0]?.categories?.length > 0) {
            relatedBlogs = await RelatedBlogs(blogdetail[0].categories[0])
        }

        return {
            props: {
                initialBlogDetail: blogdetail || [],
                initialRelatedBlogs: relatedBlogs || [],
                slug: slug || null,
            },
        }
    } catch (error) {
        console.error("Error fetching data:", error)
        return {
            props: {
                initialBlogDetail: [],
                initialRelatedBlogs: [],
                slug: slug || null,                                                                  
                error: true,
            },
        }
    }
}

const Blogdetail = ({ initialBlogDetail, initialRelatedBlogs, slug }) => {
    // Initialize state with server-side data
    const [blogdetail, setblogdetail] = useState(initialBlogDetail)
    const [allcategories, setallcategories] = useState(initialRelatedBlogs)
    const [index, setIndex] = useState(0)
    const item = blogdetail?.[index] || null;
    const [isCopied, setIsCopied] = useState(false);
    const [loading, setloading] = useState(false)


    const getAllDetails = async () => {

        try {
            setloading(true)
            const data = await getBlogsdetails(slug)
            setblogdetail(data)
        } catch (error) {
            console.error(error)
        }finally{
            setloading(false)
        }
    }
     const getAllcategories = async (id) => {
        try {
            const data = await RelatedBlogs(id)
            setallcategories(data)
        } catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
        if (slug && blogdetail.length === 0) {
            getAllDetails();
        }
    }, [slug]);

    const [relatedFetched, setRelatedFetched] = useState(false);

    useEffect(() => {
        if (blogdetail.length > 0 && blogdetail[0]?.categories?.length > 0 && !relatedFetched) {
            getAllcategories(blogdetail[0]?.categories[0]);
            setRelatedFetched(true);
        }
    }, [blogdetail]);




    // if (!item) {
    //     return (
    //         <>
    //             <Header />
    //             <div className="flex items-center justify-center min-h-[50vh]">
    //                 <div className="text-center">
    //                     <h2 className="text-2xl font-bold mb-4">Loading blog content...</h2>
    //                 </div>
    //             </div>
    //             <Footer />
    //         </>
    //     )
    // }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                setIsCopied(true);   
                setTimeout(() => {
                    setIsCopied(false);   
                }, 1000);
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    };

    return (
        <>
            <Head>
                <title>{item?.title?.rendered || "Blog Details | Quecko"}</title>
                <meta name="description" content={item?.yoast_head_json?.description || "Read the latest blogs on Quecko"} />
                <link rel="canonical" href={`https://www.quecko.com/${slug}` || "#"} />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={item?.title?.rendered || "Loading..."} />
                <meta property="og:description" content={item?.meta_desc || "No description available"} />
                <meta property="og:url" content={`https://www.quecko.com/${slug}`} />
                <meta property="og:site_name" content="Quecko" />

                <meta property="article:publisher" content="https://www.facebook.com/QueckoInc" />
                <meta property="article:published_time" content={item?.published_date_time || ""} />
                <meta property="article:modified_time" content={item?.modified_date_time || ""} />

                <meta property="og:image" content={item?.featured_image_url || "/default-image.jpg"} />
                <meta property="og:image:width" content="1600" />
                <meta property="og:image:height" content="900" />
                <meta property="og:image:type" content="image/png" />

                <meta name="author" content={item?.author_name || "Unknown"} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@Quecko_Inc" />
                <meta name="twitter:site" content="@Quecko_Inc" />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content={item?.author_name || "Unknown"} />
                <meta name="twitter:label2" content="Est. reading time" />
                <meta name="twitter:data2" content="2 minutes" />
                <meta name="twitter:title" content={item?.title?.rendered || "Loading..."} />
                <meta name="twitter:description" content={item?.meta_desc || "No description available"} />
                <meta name="twitter:image" content={item?.featured_image_url || "/default-image.jpg"} />
            </Head>

            <section className="maindetailss">
                <Header />

                <>
                 {loading ? <Loader/> : (
                    <> 
                            {item && (
                                <>
                                    <div className="blogdetail">
                                        <div className="parenttext">
                                            <div className="twicebtn">
                                                <button>Development</button>
                                                <button>Product</button>
                                            </div>
                                            <h1 className="mainpara">{item?.title?.rendered}</h1>
                                            <p className="para">
                                                <div dangerouslySetInnerHTML={{ __html: item?.excerpt?.rendered }} />
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bottomparent">
                                        <div className="right">
                                            <div
                                                className="img_top_Side"
                                                style={{
                                                    backgroundImage: `url(${item?.jetpack_featured_media_url})`,
                                                }}
                                            />
                                            <div dangerouslySetInnerHTML={{ __html: item?.content?.rendered }} />
                                        </div>
                                        <div className="left">
                                            <div className="author_Div">
                                                <h2>Author</h2>
                                                <div className="details_man">
                                                    <img src={item?.authors?.[0]?.avatar_url?.url} className="menimg_blog" alt="Author" />
                                                    {/* <img src="/Assets/manimg.svg" className="menimg_blog" alt="Author" /> */}

                                                    <div>
                                                        <h3>{item?.authors?.[0]?.display_name || "Unknown Author"}</h3>

                                                        <span>
                                                            {item?.authors?.[0]?.job_title || "No description available"}

                                                        </span>
                                                    </div>
                                                </div>
                                                <p
                                                    className="truncate-text"
                                                    dangerouslySetInnerHTML={{ __html: item?.authors?.[0]?.description }}
                                                />
                                                <div className="socialicons">
                                                    {item?.authors?.[0]?.linkedinl && (
                                                        <a href={item?.authors?.[0]?.linkedin} target="_blank" rel="noopener noreferrer">
                                                            <img src="/Assets/Frame.png" alt="social icon" className="img-fluid" />
                                                        </a>
                                                    )}
                                                    {item?.authors?.[0]?.twitter && (
                                                        <a href={item?.authors?.[0]?.twitter} target="_blank" rel="noopener noreferrer">
                                                            <img src="/Assets/Frame1.png" alt="social icon" className="img-fluid" />
                                                        </a>
                                                    )}
                                                    {item?.authors?.[0]?.user_url && (
                                                        <a href={item?.authors?.[0]?.user_url} target="_blank" rel="noopener noreferrer">
                                                            <img src="/Assets/Frame2.png" alt="social icon" className="img-fluid" />
                                                        </a>
                                                    )}
                                                    {item?.authors?.[0]?.facebook && (
                                                        <a href={item?.authors?.[0]?.facebook} target="_blank" rel="noopener noreferrer">
                                                            <img src="/Assets/Frame3.png" alt="social icon" className="img-fluid" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="top_date_div">
                                                <div className="date_side_div">
                                                    <p>Date</p>
                                                    <span>{getTimeInAges(item?.date)}</span>
                                                </div>

                                                <div>
                                                    <p className="para">Share on</p>
                                                    <div className="socialicons">

                                                        <div className="imggggfgg" onClick={copyToClipboard} style={{ cursor: 'pointer' }}>
                                                            {isCopied ? (
                                                                <img src="/Assets/check.svg" alt="Copied URL" className="img-fluid imgcopyyyy" />
                                                            ) : (
                                                                <img src="/Assets/copy.svg" alt="Copy URL" className="img-fluid imgcopyyyy"
                                                                />
                                                            )}
                                                        </div>

                                                        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Check%20this%20out!`}
                                                            target="_blank" rel="noopener noreferrer">
                                                            <img src="/Assets/Frame1.png" alt="Twitter/X" className="img-fluid" />
                                                        </a>

                                                        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}`}
                                                            target="_blank" rel="noopener noreferrer">
                                                            <img src="/Assets/Frame2.png" alt="LinkedIn" className="img-fluid" />
                                                        </a>

                                                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                                                            target="_blank" rel="noopener noreferrer">
                                                            <img src="/Assets/Frame3.png" alt="Facebook" className="img-fluid" />
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                    </div>
                                </>
                            )}</>
                 )}
                </>

                <div className="latestblogmain">
                    <div className="upperhead">
                        <h2>Related Blogs</h2>
                        <button className="filter">View All </button>
                    </div>
                    <div className="parentcardsmain">
                        {allcategories?.map((item, index) => (
                            <Link key={index} href={`/${item?.slug}`}>
                                <div className="innercard">
                                    <div className="mainimage blogs_img">
                                        <img
                                            src={item?.jetpack_featured_media_url || "/Assets/imgone.png"}
                                            alt="blog thumbnail"
                                            className="img-fluid innerimg imginnner"
                                        />
                                    </div>
                                    <span className="upper">
                                        ARTICLE
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                                <circle cx="1.5" cy="2.32996" r="1.5" fill="#9D9D9D" />
                                            </svg>
                                        </span>
                                        <span>{categories[item?.categories[0]]}</span>
                                    </span>
                                    <h3 className="btn-flip">
                                        <div className="front">{item?.title?.rendered}</div>
                                        <div className="back">{item?.title?.rendered}</div>
                                    </h3>
                                    <p className="para">{getTimeInAges(item?.date)}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Work />
            <Footer />
        </>
    )
}

export default Blogdetail



