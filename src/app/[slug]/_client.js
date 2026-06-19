"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Work from "@/components/sections/Work";
import Footer from "@/components/layout/Footer";
import { getBlogsdetails, RelatedBlogs } from "@/Utils/Services/services";
import { getTimeInAges } from "@/Utils/helpers";
import Link from "next/link";
import { categories as categoryMap } from "@/Utils/constants"; // Renamed to avoid conflict
import dynamic from "next/dynamic"
const Loader = dynamic(() => import("@/hooks/loader"), { ssr: false })

const Blogdetail = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);
    const [blogdetail, setBlogdetail] = useState([]);
    const [allcategories, setAllcategories] = useState([]);

    // Assuming index is always 0 for the main blog post
    const item = blogdetail?.[0] || null;
    const [isCopied, setIsCopied] = useState(false);
    const [currentUrl, setCurrentUrl] = useState("");

    // Effect to fetch the main blog content and related blogs based on the slug
    useEffect(() => {
        // Update current URL for sharing links
        if (typeof window !== "undefined") {
            setCurrentUrl(window.location.href);
        }

        if (!slug) {
            setBlogdetail([]);
            setLoading(false);
            return;
        }

        setLoading(true);
        getBlogsdetails(slug)
            .then(data => {
                const detail = data || [];
                setBlogdetail(detail);
                const firstCategoryId = detail?.[0]?.categories?.[0];
                if (firstCategoryId) {
                    RelatedBlogs(firstCategoryId)
                        .then(rel => setAllcategories(rel || []))
                        .catch(e => {
                            console.error("Client-side fetch for related blogs failed:", e);
                            setAllcategories([]);
                        });
                } else {
                    setAllcategories([]);
                }
            })
            .catch(e => {
                console.error("Client-side fetch for blog details failed:", e);
                setBlogdetail([]);
            })
            .finally(() => setLoading(false));
    }, [slug]);

    const copyToClipboard = () => {
        if (!currentUrl) return;
        navigator.clipboard.writeText(currentUrl)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 1000);
            })
            .catch(err => console.error("Failed to copy: ", err));
    };

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

    return (
        <>
            <section className="maindetailss">
                <Header />
                <>
                    {/* Main blog content */}
                    <div className="blogdetail">
                        <div className="parenttext">
                            <div className="twicebtn">
                                {/* TODO: Dynamically render categories if possible */}
                                {/* <button>Development</button>
                                <button>Product</button> */}
                            </div>
                            <h1 className="mainpara" dangerouslySetInnerHTML={{ __html: item.title?.rendered }} />
                            <div className="para">
                                <div dangerouslySetInnerHTML={{ __html: item.excerpt?.rendered }} />
                            </div>
                        </div>
                    </div>

                    <div className="bottomparent">
                        <div className="right">
                            {item.jetpack_featured_media_url && (
                                <div>
                                    <img className="img_top_Side" src={item.jetpack_featured_media_url} alt="Featured" />
                                </div>
                            )}
                            {/* {item.jetpack_featured_media_url && (
                                <div
                                    className="img_top_Side"
                                    style={{
                                        backgroundImage: `url(${item.jetpack_featured_media_url})`,
                                    }}
                                />
                            )} */}
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
                                            {item.authors[0].user_url && <a href={item.authors[0].user_url} target="_blank" rel="noopener noreferrer"><img src="/Assets/Frame2.png" alt="LinkedIn" /></a>}
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
