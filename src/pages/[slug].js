// import React, { useEffect, useState } from 'react'
// import Header from './component/Landing/header'
// import Work from './component/Landing/work'
// import Footer from './component/Landing/footer'
// import { useRouter } from 'next/router';
// import { getBlogsdetails, RelatedBlogs } from '@/Utils/Services/services';
// import { getTimeInAges } from '@/Utils/helpers';
// import Link from 'next/link';
// import { categories } from '@/Utils/constants';
// import Head from 'next/head';




// const Blogdetail = () => {

//     const router = useRouter();
//     const { slug } = router.query;
//     const [blogdetail, setblogdetail] = useState([]);
//     const [index, setIndex] = useState(0);
//     const item = blogdetail[index];
//     const getAllDetails = async () => {
//         try {
//             const data = await getBlogsdetails(slug);
//             setblogdetail(data);


//         }
//         catch (error) {
//             console.error(error)
//         }
//     }
//     const blogId = blogdetail[0]?.id;
//     const [allcategories, setallcategories] = useState([])
//     const getAllcategories = async (id) => {
//         try {

//             const data = await RelatedBlogs(id);
//             setallcategories(data);
//         }
//         catch (error) {
//             console.error(error)
//         }
//     }
//     useEffect(() => {
//         if (slug) {
//             getAllDetails();

//         }
//     }, [slug])

//     useEffect(() => {
//         if (blogdetail) {
//             getAllcategories(blogdetail[0]?.categories[0])
//         }
//     }, [blogdetail])


//     return (
//         <>
//             <Head>
//                 {console.log("Rendering Blog Detail:", item)}

//                 <title>{item?.title?.rendered || "Loading..."}</title>
//                 <meta name="description" content={item?.meta_desc || "No description available"} />
//                 <link rel="canonical" href={item?.url || "#"} />

//                 <meta property="og:locale" content="en_US" />
//                 <meta property="og:type" content="article" />
//                 <meta property="og:title" content={item?.title?.rendered || "Loading..."} />
//                 <meta property="og:description" content={item?.meta_desc || "No description available"} />
//                 <meta property="og:url" content={item?.url || "#"} />
//                 <meta property="og:site_name" content="Quecko" />

//                 <meta property="article:publisher" content="https://www.facebook.com/QueckoInc" />
//                 <meta property="article:published_time" content={item?.published_date_time || ""} />
//                 <meta property="article:modified_time" content={item?.modified_date_time || ""} />

//                 <meta property="og:image" content={item?.featured_image_url || "/default-image.jpg"} />
//                 <meta property="og:image:width" content="1600" />
//                 <meta property="og:image:height" content="900" />
//                 <meta property="og:image:type" content="image/png" />

//                 <meta name="author" content={item?.author_name || "Unknown"} />
//                 <meta name="twitter:card" content="summary_large_image" />
//                 <meta name="twitter:creator" content="@Quecko_Inc" />
//                 <meta name="twitter:site" content="@Quecko_Inc" />
//                 <meta name="twitter:label1" content="Written by" />
//                 <meta name="twitter:data1" content={item?.author_name || "Unknown"} />
//                 <meta name="twitter:label2" content="Est. reading time" />
//                 <meta name="twitter:data2" content="2 minutes" />
//             </Head>


//             <section className='maindetailss'>
//                 <Header />

//                 <>
//                     {item && (

//                         <>
//                             {/* <div className='blogdetail' key={index}>

//                                     <div className='parenttext'>
//                                         <div className='twicebtn'>
//                                             <button>Development</button>
//                                             <button>Product</button>
//                                         </div>
//                                         <h3 className='mainpara'>
//                                              {item?.title?.rendered}
//                                             </h3>
//                                         <p className='para'>

//                                             <div dangerouslySetInnerHTML={{ __html: item?.excerpt?.rendered }} />

//                                             </p>

//                                     </div>

//                                 </div> */}
//                             <div
//                                 className='blogdetail'
//                                 // key={index}
//                                 // style={{
//                                 //     backgroundImage: `url(${item?.jetpack_featured_media_url})`,
//                                 //     backgroundRepeat: 'no-repeat',
//                                 //     backgroundSize: 'cover',
//                                 //     backgroundPosition: 'center'
//                                 // }}
//                             >
//                                 <div className='parenttext'>
//                                     <div className='twicebtn'>
//                                         <button>Development</button>
//                                         <button>Product

//                                         </button>
//                                     </div>
//                                     <h2 className='mainpara'>
//                                         {item?.title?.rendered}
//                                     </h2>
//                                     <p className='para'>
//                                         <div dangerouslySetInnerHTML={{ __html: item?.excerpt?.rendered }} />
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className='bottomparent'>
//                                 <div className='left'>
//                                     <div className='author_Div'>
//                                         <h2>Author</h2>
//                                         <div className='details_man'>
//                                             <img src='\Assets\manimg.svg' className='menimg_blog' />
//                                             <div>
//                                                 <h3>John Doe</h3>
//                                                 <h4>UI/UX Designer</h4>
//                                             </div>
//                                         </div>
//                                         <p>Lorem ipsum dolor sit amet. Vel galisum quae est labore omnis et quibusdam explicabo non magnam corporis.</p>
//                                         <div className='socialicons'>
//                                             <img src='\Assets\Frame.png' alt='img' className='img-fluid' />
//                                             <img src='\Assets\Frame1.png' alt='img' className='img-fluid' />
//                                             <img src='\Assets\Frame2.png' alt='img' className='img-fluid' />
//                                             <img src='\Assets\Frame3.png' alt='img' className='img-fluid' />
//                                         </div>
//                                     </div>
//                                     <div className='top_date_div'>
//                                         <div className='date_side_div'>
//                                             <p>Date</p>
//                                             <h6>{getTimeInAges(item?.date)}</h6>
//                                         </div>

//                                         <div>
//                                             <p className='para'>Share on</p>
//                                             <div className='socialicons'>
//                                                 <img src='\Assets\Frame.png' alt='img' className='img-fluid' />
//                                                 <img src='\Assets\Frame1.png' alt='img' className='img-fluid' />
//                                                 <img src='\Assets\Frame2.png' alt='img' className='img-fluid' />
//                                                 <img src='\Assets\Frame3.png' alt='img' className='img-fluid' />
//                                             </div>
//                                         </div>

//                                     </div>

//                                 </div>

//                                 <div className='right'>
//                                 <div
//     className='img_top_Side'
//     style={{
//         backgroundImage: `url(${item?.jetpack_featured_media_url})`,
//     }}
// >
// </div>

//                                     <div dangerouslySetInnerHTML={{ __html: item?.content?.rendered }} />

//                                 </div>

//                             </div>
//                         </>
//                     )



//                     }

//                 </>

//                 <div className='latestblogmain'>
//                     <div className='upperhead'>
//                         <h2>Related Blogs</h2>
//                         <button className='filter'>View All </button>
//                     </div>
//                     {/* <div className='parentcardsmain'>
//                         <div className='innercard'>
//                             <div className='mainimage blogs_img'>
//                                 <img src='\Assets\imgone.png' alt='img' className='img-fluid innerimg imginnner' />
//                             </div>
//                             <h6 className='upper'>ARTICLE <span><svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
//                                 <circle cx="1.5" cy="2.32996" r="1.5" fill="#9D9D9D" />
//                             </svg></span> <span>NEWS</span></h6>
//                             <div className="btn-flip">
//                                 <div className="front">Est labore molestiae ex quos perspi sit commodi</div>
//                                 <div className="back">Est labore molestiae ex quos perspi sit commodi</div>
//                             </div>
//                             <p className='para'>June 27, 2023</p>
//                         </div>

//                     </div> */}
//                     <div className='parentcardsmain'>
//                         {allcategories?.map((item, index) => (
//                             // <Link key={index} href={`/blogdetail?slug=${item?.slug}`}>
//                             <Link key={index} href={`/${item?.slug}`}>

//                                 <div key={index} className='innercard'>
//                                     <div className='mainimage blogs_img'>
//                                         <img
//                                             src={item?.jetpack_featured_media_url || '/Assets/imgone.png'}
//                                             alt='img'
//                                             className='img-fluid innerimg imginnner'
//                                         />
//                                     </div>
//                                     <h6 className='upper'>
//                                         ARTICLE
//                                         <span>
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
//                                                 <circle cx="1.5" cy="2.32996" r="1.5" fill="#9D9D9D" />
//                                             </svg>
//                                         </span>
//                                         <span>{categories[item?.categories[0]]}</span>
//                                     </h6>
//                                     <h3 className="btn-flip">
//                                         <div className="front">{item?.title?.rendered}</div>
//                                         <div className="back">{item?.title?.rendered}</div>
//                                     </h3>
//                                     <p className='para'>{getTimeInAges(item?.date)}</p>
//                                 </div>
//                             </Link>
//                         ))}
//                     </div>

//                 </div>
//             </section>
//             <Work />
//             <Footer />
//         </>

//     )
// }

// export default Blogdetail




// "use client"

// import { useEffect, useState } from "react"
// import Header from "./component/Landing/header"
// import Work from "./component/Landing/work"
// import Footer from "./component/Landing/footer"
// import { useRouter } from "next/router"
// import { getBlogsdetails, RelatedBlogs } from "@/Utils/Services/services"
// import { getTimeInAges } from "@/Utils/helpers"
// import Link from "next/link"
// import { categories } from "@/Utils/constants"
// import Head from "next/head"

// // Server-side data fetching
// export async function getServerSideProps(context) {
//     const { slug } = context.query

//     try {
//         // Fetch blog details on the server
//         const blogdetail = await getBlogsdetails(slug)

//         // If we have blog details, fetch related blogs
//         let relatedBlogs = []
//         if (blogdetail && blogdetail.length > 0 && blogdetail[0]?.categories?.length > 0) {
//             relatedBlogs = await RelatedBlogs(blogdetail[0].categories[0])
//         }

//         return {
//             props: {
//                 initialBlogDetail: blogdetail || [],
//                 initialRelatedBlogs: relatedBlogs || [],
//                 slug: slug || null,
//             },
//         }
//     } catch (error) {
//         console.error("Error fetching data:", error)
//         return {
//             props: {
//                 initialBlogDetail: [],
//                 initialRelatedBlogs: [],
//                 slug: slug || null,
//                 error: true,
//             },
//         }
//     }
// }

// const Blogdetail = ({ initialBlogDetail, initialRelatedBlogs, slug, error }) => {
//     const router = useRouter()

//     // Initialize state with server-side data
//     const [blogdetail, setblogdetail] = useState(initialBlogDetail)
//     const [allcategories, setallcategories] = useState(initialRelatedBlogs)
//     const [index, setIndex] = useState(0)
//     const item = blogdetail[index]

//     // Function to refresh blog details if needed
//     const getAllDetails = async () => {
//         try {
//             const data = await getBlogsdetails(slug)
//             setblogdetail(data)
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     // Function to refresh related blogs if needed
//     const getAllcategories = async (id) => {
//         try {
//             const data = await RelatedBlogs(id)
//             setallcategories(data)
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     // If slug changes in the URL but we're not doing a full page refresh
//     useEffect(() => {
//         if (slug && (!blogdetail || blogdetail.length === 0)) {
//             getAllDetails()
//         }
//     }, [slug, blogdetail])

//     // Update related blogs if blog details change
//     useEffect(() => {
//         if (blogdetail && blogdetail[0]?.categories?.length > 0 && allcategories.length === 0) {
//             getAllcategories(blogdetail[0]?.categories[0])
//         }
//     }, [blogdetail, allcategories])

//     // Show loading state if we don't have data yet
//     if (!item) {
//         return (
//             <>
//                 <Header />
//                 <div className="flex items-center justify-center min-h-[50vh]">
//                     <div className="text-center">
//                         <h2 className="text-2xl font-bold mb-4">Loading blog content...</h2>
//                     </div>
//                 </div>
//                 <Footer />
//             </>
//         )
//     }

//     return (
//         <>

//             <Head>
//                 <title>{item?.title?.rendered || "Loading..."}</title>
//                 <meta name="description" content={item?.meta_desc || "No description available"} />
//                 <link rel="canonical" href={`https://www.quecko.com/${slug}` || "#"} />
//                 {console.log(item?.link, "dkjfg")}
//                 <meta property="og:locale" content="en_US" />
//                 <meta property="og:type" content="article" />
//                 <meta property="og:title" content={item?.title?.rendered || "Loading..."} />
//                 <meta property="og:description" content={item?.meta_desc || "No description available"} />
//                 <meta property="og:url" content={item?.url || "#"} />
//                 <meta property="og:site_name" content="Quecko" />

//                 <meta property="article:publisher" content="https://www.facebook.com/QueckoInc" />
//                 <meta property="article:published_time" content={item?.published_date_time || ""} />
//                 <meta property="article:modified_time" content={item?.modified_date_time || ""} />

//                 <meta property="og:image" content={item?.featured_image_url || "/default-image.jpg"} />
//                 <meta property="og:image:width" content="1600" />
//                 <meta property="og:image:height" content="900" />
//                 <meta property="og:image:type" content="image/png" />

//                 <meta name="author" content={item?.author_name || "Unknown"} />
//                 <meta name="twitter:card" content="summary_large_image" />
//                 <meta name="twitter:creator" content="@Quecko_Inc" />
//                 <meta name="twitter:site" content="@Quecko_Inc" />
//                 <meta name="twitter:label1" content="Written by" />
//                 <meta name="twitter:data1" content={item?.author_name || "Unknown"} />
//                 <meta name="twitter:label2" content="Est. reading time" />
//                 <meta name="twitter:data2" content="2 minutes" />
//             </Head>

//             <section className="maindetailss">
//                 <Header />

//                 <>
//                     {item && (
//                         <>
//                             <div className="blogdetail">
//                                 <div className="parenttext">
//                                     <div className="twicebtn">
//                                         <button>Development</button>
//                                         <button>Product</button>
//                                     </div>
//                                     <h2 className="mainpara">{item?.title?.rendered}</h2>
//                                     <p className="para">
//                                         <div dangerouslySetInnerHTML={{ __html: item?.excerpt?.rendered }} />
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="bottomparent">
//                                 <div className="left">
//                                     <div className="author_Div">
//                                         <h2>Author</h2>
//                                         <div className="details_man">
//                                             <img src="\Assets\manimg.svg" className="menimg_blog" alt="Author" />
//                                             <div>
//                                                 <h3>John Doe</h3>
//                                                 <h4>UI/UX Designer</h4>
//                                             </div>
//                                         </div>
//                                         <p>
//                                             Lorem ipsum dolor sit amet. Vel galisum quae est labore omnis et quibusdam explicabo non magnam
//                                             corporis.
//                                         </p>
//                                         <div className="socialicons">
//                                             <img src="\Assets\Frame.png" alt="social icon" className="img-fluid" />
//                                             <img src="\Assets\Frame1.png" alt="social icon" className="img-fluid" />
//                                             <img src="\Assets\Frame2.png" alt="social icon" className="img-fluid" />
//                                             <img src="\Assets\Frame3.png" alt="social icon" className="img-fluid" />
//                                         </div>
//                                     </div>
//                                     <div className="top_date_div">
//                                         <div className="date_side_div">
//                                             <p>Date</p>
//                                             <h6>{getTimeInAges(item?.date)}</h6>
//                                         </div>

//                                         <div>
//                                             <p className="para">Share on</p>
//                                             <div className="socialicons">
//                                                 <img src="\Assets\Frame.png" alt="social icon" className="img-fluid" />
//                                                 <img src="\Assets\Frame1.png" alt="social icon" className="img-fluid" />
//                                                 <img src="\Assets\Frame2.png" alt="social icon" className="img-fluid" />
//                                                 <img src="\Assets\Frame3.png" alt="social icon" className="img-fluid" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="right">
//                                     <div
//                                         className="img_top_Side"
//                                         style={{
//                                             backgroundImage: `url(${item?.jetpack_featured_media_url})`,
//                                         }}
//                                     />
//                                     <div dangerouslySetInnerHTML={{ __html: item?.content?.rendered }} />
//                                 </div>
//                             </div>
//                         </>
//                     )}
//                 </>

//                 <div className="latestblogmain">
//                     <div className="upperhead">
//                         <h2>Related Blogs</h2>
//                         <button className="filter">View All </button>
//                     </div>
//                     <div className="parentcardsmain">
//                         {allcategories?.map((item, index) => (
//                             <Link key={index} href={`/${item?.slug}`}>
//                                 <div className="innercard">
//                                     <div className="mainimage blogs_img">
//                                         <img
//                                             src={item?.jetpack_featured_media_url || "/Assets/imgone.png"}
//                                             alt="blog thumbnail"
//                                             className="img-fluid innerimg imginnner"
//                                         />
//                                     </div>
//                                     <h6 className="upper">
//                                         ARTICLE
//                                         <span>
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
//                                                 <circle cx="1.5" cy="2.32996" r="1.5" fill="#9D9D9D" />
//                                             </svg>
//                                         </span>
//                                         <span>{categories[item?.categories[0]]}</span>
//                                     </h6>
//                                     <h3 className="btn-flip">
//                                         <div className="front">{item?.title?.rendered}</div>
//                                         <div className="back">{item?.title?.rendered}</div>
//                                     </h3>
//                                     <p className="para">{getTimeInAges(item?.date)}</p>
//                                 </div>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//             <Work />
//             <Footer />
//         </>
//     )
// }

// export default Blogdetail

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

const Blogdetail = ({ initialBlogDetail, initialRelatedBlogs, slug, error }) => {
    // Initialize state with server-side data
    const [blogdetail, setblogdetail] = useState(initialBlogDetail)
    const [allcategories, setallcategories] = useState(initialRelatedBlogs)
    const [index, setIndex] = useState(0)
     const item = blogdetail?.[index] || null;

     const getAllDetails = async () => {
        try {
            const data = await getBlogsdetails(slug)
            setblogdetail(data)
        } catch (error) {
            console.error(error)
        }
    }
// console.log(blogdetail, "blogdetail")
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

     if (!item) {
        return (
            <>
                <Header />
                <div className="flex items-center justify-center min-h-[50vh]">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Loading blog content...</h2>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Head>
                <title>{item?.title?.rendered || "Blog Details | Quecko"}</title>
                <meta name="description" content={item?.meta_desc || "Read the latest blogs on Quecko"} />
                <link rel="canonical" href={`https://www.quecko.com/${slug}` || "#"} />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={item?.title?.rendered || "Loading..."} />
                <meta property="og:description" content={item?.meta_desc || "No description available"} />
                <meta property="og:url" content={item?.url || "#"} />
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
            </Head>

            <section className="maindetailss">
                <Header />

                <>
                    {item && (
                        <>
                            <div className="blogdetail">
                                <div className="parenttext">
                                    <div className="twicebtn">
                                        <button>Development</button>
                                        <button>Product</button>
                                    </div>
                                    <h2 className="mainpara">{item?.title?.rendered}</h2>
                                    <p className="para">
                                        <div dangerouslySetInnerHTML={{ __html: item?.excerpt?.rendered }} />
                                    </p>
                                </div>
                            </div>

                            <div className="bottomparent">
                                <div className="left">
                                    <div className="author_Div">
                                        <h2>Author</h2>
                                        <div className="details_man">
                                            <img src="/Assets/manimg.svg" className="menimg_blog" alt="Author" />
                                            <div>
                                                <h3>John Doe</h3>
                                                <h4>UI/UX Designer</h4>
                                            </div>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet. Vel galisum quae est labore omnis et quibusdam explicabo non magnam
                                            corporis.
                                        </p>
                                        <div className="socialicons">
                                            <img src="/Assets/Frame.png" alt="social icon" className="img-fluid" />
                                            <img src="/Assets/Frame1.png" alt="social icon" className="img-fluid" />
                                            <img src="/Assets/Frame2.png" alt="social icon" className="img-fluid" />
                                            <img src="/Assets/Frame3.png" alt="social icon" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="top_date_div">
                                        <div className="date_side_div">
                                            <p>Date</p>
                                            <h6>{getTimeInAges(item?.date)}</h6>
                                        </div>

                                        <div>
                                            <p className="para">Share on</p>
                                            <div className="socialicons">
                                                <img src="/Assets/Frame.png" alt="social icon" className="img-fluid" />
                                                <img src="/Assets/Frame1.png" alt="social icon" className="img-fluid" />
                                                <img src="/Assets/Frame2.png" alt="social icon" className="img-fluid" />
                                                <img src="/Assets/Frame3.png" alt="social icon" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="right">
                                    <div
                                        className="img_top_Side"
                                        style={{
                                            backgroundImage: `url(${item?.jetpack_featured_media_url})`,
                                        }}
                                    />
                                    <div dangerouslySetInnerHTML={{ __html: item?.content?.rendered }} />
                                </div>
                            </div>
                        </>
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
                                    <h6 className="upper">
                                        ARTICLE
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                                <circle cx="1.5" cy="2.32996" r="1.5" fill="#9D9D9D" />
                                            </svg>
                                        </span>
                                        <span>{categories[item?.categories[0]]}</span>
                                    </h6>
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



