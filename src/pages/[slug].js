 "use client";

import { useEffect, useState } from "react";
import Header from "./component/Landing/header";
import Work from "./component/Landing/work";
import Footer from "./component/Landing/footer";
import { getBlogsdetails, RelatedBlogs } from "@/Utils/Services/services";
import { getTimeInAges } from "@/Utils/helpers";
import Link from "next/link";
import { categories as categoryMap } from "@/Utils/constants"; // Renamed to avoid conflict
import Head from "next/head";
import Loader from "@/hooks/loader";

// Server-side data fetching (Unchanged, assumed to be working for direct loads/refreshes)
export async function getServerSideProps(context) {
    const { slug } = context.params;

    try {
        const blogdetailData = (await getBlogsdetails(slug)) || [];
        let relatedBlogsData = [];

        if (blogdetailData && blogdetailData.length > 0 && blogdetailData[0]?.categories?.length > 0) {
            relatedBlogsData = await RelatedBlogs(blogdetailData[0].categories[0]);
        }

        return {
            props: {
                initialBlogDetail: blogdetailData,
                initialRelatedBlogs: relatedBlogsData,
                slug: slug || null,
                key: slug, // Adding a key can help Next.js re-mount the component fully
            },
        };
    } catch (error) {
        console.error("Error fetching data in getServerSideProps:", error);
        return {
            props: {
                initialBlogDetail: [],
                initialRelatedBlogs: [],
                slug: slug || null,
                error: true, // Pass error state to component
                key: slug || Date.now(), // Provide a key even on error
            },
        };
    }
}

const Blogdetail = ({ initialBlogDetail, initialRelatedBlogs, slug, error }) => {
    // Initialize state from props. Loading is true if data isn't immediately available from props.
    const [loading, setLoading] = useState(() => {
        if (error) return false;
        return (!initialBlogDetail || initialBlogDetail.length === 0) && !!slug;
    });
    const [blogdetail, setBlogdetail] = useState(initialBlogDetail || []);
    const [allcategories, setAllcategories] = useState(initialRelatedBlogs || []);

    // Assuming index is always 0 for the main blog post
    const item = blogdetail?.[0] || null;
    const [isCopied, setIsCopied] = useState(false);
    const [currentUrl, setCurrentUrl] = useState("");

    // Effect to update main blog content when props change (due to navigation)
    useEffect(() => {
        // Update current URL for sharing links
        if (typeof window !== "undefined") {
            setCurrentUrl(window.location.href);
        }

        if (error) {
            setLoading(false);
            setBlogdetail([]);
            return;
        }

        if (initialBlogDetail && initialBlogDetail.length > 0) {
            setBlogdetail(initialBlogDetail);
            setLoading(false);
        } else if (slug) { // If no initial data but slug exists, try fetching
            setLoading(true);
            getBlogsdetails(slug)
                .then(data => setBlogdetail(data || []))
                .catch(e => {
                    console.error("Client-side fetch for blog details failed:", e);
                    setBlogdetail([]);
                })
                .finally(() => setLoading(false));
        } else { // No slug, no initial data
            setBlogdetail([]);
            setLoading(false);
        }
    }, [initialBlogDetail, slug, error]); // Key dependencies: props that change on navigation

    // Effect to update related blogs when props or main blog content change
    useEffect(() => {
        if (error) {
            setAllcategories([]);
            return;
        }

        if (initialRelatedBlogs && initialRelatedBlogs.length >= 0) { // Allow empty array from SSR
            setAllcategories(initialRelatedBlogs);
        } else {
            // Fetch related blogs if main blog item is available and has categories
            const mainBlogItem = blogdetail?.[0];
            const firstCategoryId = mainBlogItem?.categories?.[0];
            if (mainBlogItem && firstCategoryId) {
                // Consider a separate loading state for related blogs if needed
                RelatedBlogs(firstCategoryId)
                    .then(data => setAllcategories(data || []))
                    .catch(e => {
                        console.error("Client-side fetch for related blogs failed:", e);
                        setAllcategories([]);
                    });
            } else {
                setAllcategories([]); // No main blog or no categories
            }
        }
    }, [initialRelatedBlogs, blogdetail, error]); // Depend on initialRelatedBlogs and the resolved blogdetail

    const copyToClipboard = () => {
        if (!currentUrl) return;
        navigator.clipboard.writeText(currentUrl)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 1000);
            })
            .catch(err => console.error("Failed to copy: ", err));
    };


    console.log(blogdetail?.yoast_head_json?.description, 'yoast_head_json?.description')
    console.log(blogdetail, 'blogdetail')
    // if (error) {
    //     return (
    //         <>
    //             <Header />
    //             <div className="flex items-center justify-center min-h-[50vh] text-center">
    //                 <div>
    //                     <h2 className="text-2xl font-bold mb-4">Could not load blog post.</h2>
    //                     <Link href="/" className="text-blue-500 hover:underline">Go to Homepage</Link>
    //                 </div>
    //             </div>
    //             <Footer />
    //         </>
    //     );
    // }

    if (loading) {
        return (
            <>
                <Header />
                <div className="flex items-center justify-center min-h-[50vh]">
                    <Loader />
                </div>
                <Footer />
            </>
        );
    }

    // if (!item) {
    //     return (
    //         <>
    //             <Header />
    //             <div className="flex items-center justify-center min-h-[50vh] text-center">
    //                 <div>
    //                     <h2 className="text-2xl font-bold mb-4">Blog post not found.</h2>
    //                     <Link href="/" className="text-blue-500 hover:underline">Go to Homepage</Link>
    //                 </div>
    //             </div>
    //             <Footer />
    //         </>
    //     );
    // }
        
    return (
        <>
            <Head>
                <title>{item?.title?.rendered || "Blog Details | Quecko"}</title>
                <meta name="title" content={item?.yoast_head_json?.title || item?.title?.rendered || "Read the latest blogs on Quecko"} />
                <meta name="description" content={item?.yoast_head_json?.description} />
                <link rel="canonical" href={currentUrl || `https://www.quecko.com/${slug}`} />
                {/* ... other meta tags, ensure item?.property is checked ... */}
                <meta property="og:title" content={item?.title?.rendered || "Loading..."} />
                <meta property="og:url" content={currentUrl || `https://www.quecko.com/${slug}`} />
                <meta property="og:image" content={item?.jetpack_featured_media_url || item?.featured_image_url || "/default-image.jpg"} />
                <meta name="author" content={item?.authors?.[0]?.display_name || "Unknown"} />
                <meta name="twitter:data1" content={item?.authors?.[0]?.display_name || "Unknown"} />
                <meta name="twitter:title" content={item?.title?.rendered || "Loading..."} />
                <meta name="twitter:image" content={item?.jetpack_featured_media_url || item?.featured_image_url || "/default-image.jpg"} />
            </Head>

            <section className="maindetailss">
                <Header />
                <>
                    {/* Main blog content */}
                    <div className="blogdetail">
                        <div className="parenttext">
                            <div className="twicebtn">
                                {/* TODO: Dynamically render categories if possible */}
                                <button>Development</button>
                                <button>Product</button>
                            </div>
                            <h1 className="mainpara" dangerouslySetInnerHTML={{ __html: item.title?.rendered }} />
                            <p className="para">
                                <div dangerouslySetInnerHTML={{ __html: item.excerpt?.rendered }} />
                            </p>
                        </div>
                    </div>

                    <div className="bottomparent">
                        <div className="right">
                            {item.jetpack_featured_media_url && (
                                <div
                                    className="img_top_Side"
                                    style={{
                                        backgroundImage: `url(${item.jetpack_featured_media_url})`,
                                    }}
                                />
                            )}
                            <div dangerouslySetInnerHTML={{ __html: item.content?.rendered }} />
                        </div>
                        <div className="left">
                            <div className="author_Div">
                                <h2>Author</h2>
                                {item.authors?.[0] && (
                                    <>
                                        <div className="details_man">
                                            <img src={item.authors[0].avatar_url?.url || "/Assets/manimg.svg"} className="menimg_blog" alt="Author" />
                                            <div>
                                                <h3>{item.authors[0].display_name || "Unknown Author"}</h3>
                                                <span>{item.authors[0].job_title || "No description available"}</span>
                                            </div>
                                        </div>
                                        <p
                                            className="truncate-text" // Ensure this class handles potential long text
                                            dangerouslySetInnerHTML={{ __html: item.authors[0].description }}
                                        />
                                        <div className="socialicons">
                                            {item.authors[0].linkedinl && <a href={item.authors[0].linkedin} target="_blank" rel="noopener noreferrer"><img src="/Assets/Frame.png" alt="LinkedIn" /></a>}
                                            {/* ... other social icons for author ... */}
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="top_date_div">
                                <div className="date_side_div">
                                    <p>Date</p>
                                    <span>{getTimeInAges(item.date)}</span>
                                </div>
                                <div className="links_blogsss">
                                    <p className="para">Share on</p>
                                    <div className="socialicons">
                                        <div className="imggggfgg" onClick={copyToClipboard} style={{ cursor: 'pointer' }}>
                                            <img src={isCopied ? "/Assets/check.svg" : "/Assets/copy.svg"} alt="Copy URL" className="img-fluid imgcopyyyy" />
                                        </div>
                                        {currentUrl && (
                                            <>
                                                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(item.title?.rendered || "Check this out!")}`} target="_blank" rel="noopener noreferrer">
                                                    <img src="/Assets/Frame1.png" alt="Twitter/X" />
                                                </a>
                                                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer">
                                                    <img src="/Assets/Frame2.png" alt="LinkedIn" /> {/* Assuming Frame2 is LinkedIn */}
                                                </a>
                                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer">
                                                    <img src="/Assets/Frame3.png" alt="Facebook" /> {/* Assuming Frame3 is Facebook */}
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

                {/* Related Blogs Section */}
                {allcategories && allcategories.length > 0 && (
                    <div className="latestblogmain">
                        <div className="upperhead">
                            <h2>Related Blogs</h2>
                            {/* <button className="filter">View All </button> */}
                        </div>
                        <div className="parentcardsmain">
                            {allcategories.map((relatedItem, idx) => (
                                <Link key={idx} href={`/${relatedItem?.slug}`}>
                                    <div className="innercard">
                                        <div className="mainimage blogs_img">
                                            <img
                                                src={relatedItem?.jetpack_featured_media_url || "/Assets/imgone.png"}
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
                                            {/* Ensure categoryMap and relatedItem.categories are correct */}
                                            <span>{relatedItem?.categories?.[0] ? categoryMap[relatedItem.categories[0]] : 'General'}</span>
                                        </span>
                                        <h3 className="btn-flip" dangerouslySetInnerHTML={{ __html: relatedItem?.title?.rendered }} />
                                        <p className="para">{getTimeInAges(relatedItem?.date)}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </section>
            <Work />
            <Footer />
        </>
    );
};

export default Blogdetail;