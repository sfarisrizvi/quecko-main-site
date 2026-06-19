"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Work from "@/components/sections/Work";
import { blogcategories, getAllBlogs } from "@/Utils/Services/services";
import { categories } from "@/Utils/constants";
import { getTimeInAges } from "@/Utils/helpers";
import Loader2 from "@/hooks/loader2";
import Usesdevelopment from "@/components/carousels/UsesDevelopment";
import BlogFeatured from "@/hooks/blog-featured";
import Dropdown from "react-bootstrap/Dropdown";
import BlogLayout from "@/components/layouts/BlogLayout";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog" },
];

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);
  const [posts, setPosts] = useState([]);

  const getAllData = async () => {
    try {
      setLoading(true);
      const data = await getAllBlogs();
      setBlogData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getPosts = async () => {
    try {
      const response = await blogcategories();
      setPosts(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
    getAllData();
  }, []);

  return (
    <BlogLayout breadcrumbs={breadcrumbs}>
      <section className="parentblogss">
        {Loading ? (
          <BlogFeatured />
        ) : (
          <div className="mainblog">
            <div className="parentboxxx">
              {posts?.length >= 1 && (
                <div className="left" style={{ backgroundImage: `url(${posts[0]?.jetpack_featured_media_url})` }}>
                  <Link href={`/blog/${posts[0]?.slug}`}>
                    <div className="mainarrowpic">
                      <img src="/Assets/arrow.png" alt="img" className="img-fluid innerimg11" />
                    </div>
                  </Link>
                  <div className="parenttext">
                    <div className="twicebtn">
                      <button className="animated-button">
                        <div className="btn-flip" data-back="Development" data-front="Development">
                          <div className="front">Development</div>
                          <div className="back">Development</div>
                        </div>
                      </button>
                      <button className="animated-button">
                        <div className="btn-flip" data-back="Product" data-front="Product">
                          <div className="front">Product</div>
                          <div className="back">Product</div>
                        </div>
                      </button>
                    </div>
                    <p className="mainpara">{posts[0]?.title?.rendered}</p>
                    <p className="para">{posts[0]?.excerpt?.rendered?.replace(/<[^>]+>/g, "").slice(0, 120)}...</p>
                  </div>
                </div>
              )}
              <div className="right">
                {posts?.length >= 2 && (
                  <div className="firstbox" style={{ backgroundImage: `url(${posts[1]?.jetpack_featured_media_url})` }}>
                    <Link href={`/blog/${posts[1]?.slug}`}>
                      <div className="mainarrowpic">
                        <img src="/Assets/arrow.png" alt="img" className="img-fluid innerimg" />
                      </div>
                    </Link>
                    <p className="innerpara" style={{ color: "black" }}>{posts[1]?.title?.rendered}</p>
                  </div>
                )}
                {posts?.length >= 3 && (
                  <div className="secondbox" style={{ backgroundImage: `url(${posts[2]?.jetpack_featured_media_url})` }}>
                    <p className="innerpara" style={{ color: "black" }}>{posts[2]?.title?.rendered}</p>
                    <Link href={`/blog/${posts[2]?.slug}`}>
                      <div className="mainarrowpic">
                        <img src="/Assets/arrow.png" alt="img" className="img-fluid innerimg" />
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="latestblogmain">
          <div className="upperhead">
            <h1>Latest Blogs</h1>
            <div className="latestblogdropdown">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <span className="animated-button filter">
                    <div className="btn-flip" data-back="Filter by All" data-front="Filter by All">
                      <div className="front">Filter by All <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none"><path d="M6.99984 12.75L9.9165 9.83333M6.99984 12.75L4.08317 9.83333M6.99984 12.75L6.99984 2.25" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                      <div className="back">Filter by All <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none"><path d="M6.99984 12.75L9.9165 9.83333M6.99984 12.75L4.08317 9.83333M6.99984 12.75L6.99984 2.25" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                    </div>
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className="outer_layer">
                    {["Technology", "News", "Business", "Design"].map((cat) => (
                      <div key={cat} className="dropmeenu">
                        <label className="custom-checkbox">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                          {cat}
                        </label>
                      </div>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          {Loading ? (
            <Loader2 />
          ) : (
            <>
              {Array.from({ length: Math.ceil(visibleCount / 8) }).map((_, chunkIndex) => {
                const start = chunkIndex * 8;
                const end = start + 8;
                const chunk = blogData?.slice(start, end);
                return (
                  <div key={chunkIndex}>
                    <div className="parentcardsmain">
                      {chunk.map((item, index) => (
                        <Link key={`${chunkIndex}-${index}`} href={`/blog/${item?.slug}`}>
                          <div className="innercard">
                            <div className="mainimage blogs_img">
                              <img src={item?.jetpack_featured_media_url} alt="img" className="img-fluid innerimg imginnner" />
                            </div>
                            <span className="upper">
                              ARTICLE <span><svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none"><circle cx="1.5" cy="2.32996" r="1.5" fill="#9D9D9D" /></svg></span> <span>{categories[item?.categories[0]]}</span>
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
                    {blogData?.length > end && chunkIndex === Math.floor((visibleCount - 1) / 8) && (
                      <div className="seemore">
                        <div className="see_more_botton" onClick={() => setVisibleCount((prev) => prev + 8)}>
                          <button className="animated-button filter">
                            <div className="btn-flip" data-back="See More" data-front="See More" style={{ marginTop: "12px" }}>
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
    </BlogLayout>
  );
};

export default Blog;
