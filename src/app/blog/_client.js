"use client"

import Link from "next/link";
import React, { useEffect, useState, useMemo } from "react";
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

const BlogSkeletonHeader = () => {
  return (
    <div className="mainblog" style={{ background: "#f9f9f9" }}>
      <div className="parentboxxx">
        <div className="left skeleton-featured-left skeleton-shimmer">
          <div className="parenttext" style={{ position: "absolute", bottom: "30px", left: "30px", width: "calc(100% - 60px)" }}>
            <div className="twicebtn" style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
              <div className="skeleton-pill skeleton-shimmer" style={{ width: "90px", height: "30px", borderRadius: "15px", background: "#e5e7eb" }} />
              <div className="skeleton-pill skeleton-shimmer" style={{ width: "90px", height: "30px", borderRadius: "15px", background: "#e5e7eb" }} />
            </div>
            <div className="skeleton-title skeleton-shimmer" style={{ width: "70%", height: "30px", borderRadius: "6px", marginBottom: "12px", background: "#e5e7eb" }} />
            <div className="skeleton-desc skeleton-shimmer" style={{ width: "50%", height: "16px", borderRadius: "4px", background: "#e5e7eb" }} />
          </div>
        </div>
        <div className="right" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div className="firstbox skeleton-featured-right-box skeleton-shimmer" style={{ position: "relative" }}>
            <div style={{ position: "absolute", bottom: "25px", left: "25px", width: "calc(100% - 50px)" }}>
              <div className="skeleton-title skeleton-shimmer" style={{ width: "80%", height: "20px", borderRadius: "4px", background: "#e5e7eb" }} />
            </div>
          </div>
          <div className="secondbox skeleton-featured-right-box skeleton-shimmer" style={{ position: "relative" }}>
            <div style={{ position: "absolute", bottom: "25px", left: "25px", width: "calc(100% - 50px)" }}>
              <div className="skeleton-title skeleton-shimmer" style={{ width: "80%", height: "20px", borderRadius: "4px", background: "#e5e7eb" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogSkeletonCard = () => {
  return (
    <div className="innercard skeleton-card-wrap">
      <div className="mainimage blogs_img skeleton-card-image skeleton-shimmer" style={{ width: "100%", height: "200px", borderRadius: "20px", background: "#e5e7eb" }} />
      <div className="skeleton-card-tag skeleton-shimmer" style={{ width: "120px", height: "14px", borderRadius: "4px", marginTop: "20px", marginBottom: "10px", background: "#e5e7eb" }} />
      <div className="skeleton-card-title skeleton-shimmer" style={{ width: "90%", height: "22px", borderRadius: "4px", marginBottom: "8px", background: "#e5e7eb" }} />
      <div className="skeleton-card-title skeleton-shimmer" style={{ width: "70%", height: "22px", borderRadius: "4px", marginBottom: "15px", background: "#e5e7eb" }} />
      <div className="skeleton-card-date skeleton-shimmer" style={{ width: "80px", height: "12px", borderRadius: "4px", background: "#e5e7eb" }} />
    </div>
  );
};

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);
  const [posts, setPosts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortByDate, setSortByDate] = useState("newest");

  useEffect(() => {
    let isMounted = true;
    const loadAllData = async () => {
      try {
        const [postsRes, blogsRes] = await Promise.all([
          blogcategories(),
          getAllBlogs()
        ]);
        if (isMounted) {
          setPosts(postsRes || []);
          setBlogData(blogsRes || []);
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    loadAllData();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleLoadMore = () => {
    setIsMoreLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 4);
      setIsMoreLoading(false);
    }, 600);
  };

  const handleCategoryToggle = (catId) => {
    setSelectedCategories((prev) =>
      prev.includes(catId)
        ? prev.filter((id) => id !== catId)
        : [...prev, catId]
    );
    setVisibleCount(8); // Reset pagination view to initial count on filter change
  };

  const filteredAndSortedBlogs = useMemo(() => {
    let result = [...blogData];

    // Apply Category Filter
    if (selectedCategories.length > 0) {
      result = result.filter((item) =>
        item.categories.some((catId) => selectedCategories.includes(catId))
      );
    }

    // Apply Date Sort
    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortByDate === "newest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [blogData, selectedCategories, sortByDate]);

  const getFilterLabel = () => {
    if (selectedCategories.length === 0) {
      return "Filter by All";
    }
    if (selectedCategories.length === 1) {
      return `Filter by ${categories[selectedCategories[0]]}`;
    }
    return `Filter by (${selectedCategories.length})`;
  };

  return (
    <BlogLayout breadcrumbs={breadcrumbs}>
      <section className="parentblogss">
        {Loading ? (
          <BlogSkeletonHeader />
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
                    <div className="btn-flip" data-back={getFilterLabel()} data-front={getFilterLabel()}>
                      <div className="front">{getFilterLabel()} <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none"><path d="M6.99984 12.75L9.9165 9.83333M6.99984 12.75L4.08317 9.83333M6.99984 12.75L6.99984 2.25" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                      <div className="back">{getFilterLabel()} <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none"><path d="M6.99984 12.75L9.9165 9.83333M6.99984 12.75L4.08317 9.83333M6.99984 12.75L6.99984 2.25" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                    </div>
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", borderRadius: "16px", padding: "16px" }}>
                  <div className="outer_layer" style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "200px" }}>
                    <div>
                      <div style={{ fontWeight: "600", fontSize: "14px", marginBottom: "8px", color: "#000" }}>Sort by Date</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label style={{ display: "flex", gap: "8px", alignItems: "center", cursor: "pointer", fontSize: "14px", color: "#424242" }}>
                          <input
                            type="radio"
                            name="sortByDate"
                            checked={sortByDate === "newest"}
                            onChange={() => setSortByDate("newest")}
                          />
                          Newest First
                        </label>
                        <label style={{ display: "flex", gap: "8px", alignItems: "center", cursor: "pointer", fontSize: "14px", color: "#424242" }}>
                          <input
                            type="radio"
                            name="sortByDate"
                            checked={sortByDate === "oldest"}
                            onChange={() => setSortByDate("oldest")}
                          />
                          Oldest First
                        </label>
                      </div>
                    </div>

                    <div style={{ borderTop: "1px solid #eee", margin: "4px 0" }} />

                    <div>
                      <div style={{ fontWeight: "600", fontSize: "14px", marginBottom: "8px", color: "#000" }}>Categories</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {Object.entries(categories)
                          .filter(([id]) => {
                            const catId = parseInt(id);
                            return blogData.some((post) => post.categories?.includes(catId));
                          })
                          .map(([id, name]) => {
                            const catId = parseInt(id);
                            return (
                              <div key={id} style={{ display: "flex", alignItems: "center" }}>
                                <label className="custom-checkbox" style={{ display: "flex", gap: "8px", alignItems: "center", cursor: "pointer", fontSize: "14px", color: "#424242" }}>
                                  <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(catId)}
                                    onChange={() => handleCategoryToggle(catId)}
                                  />
                                  <span className="checkmark"></span>
                                  {name}
                                </label>
                              </div>
                            );
                          })}
                      </div>
                    </div>

                    <div style={{ borderTop: "1px solid #eee", margin: "4px 0" }} />

                    <button
                      onClick={() => {
                        setSelectedCategories([]);
                        setSortByDate("newest");
                        setVisibleCount(8);
                      }}
                      style={{
                        width: "100%",
                        padding: "8px",
                        background: "#000",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "12px",
                        cursor: "pointer",
                        fontWeight: "500"
                      }}
                    >
                      Reset Filters
                    </button>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          {Loading ? (
            <div className="parentcardsmain">
              {Array.from({ length: 8 }).map((_, i) => (
                <BlogSkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <>
              <div className="parentcardsmain">
                {filteredAndSortedBlogs?.slice(0, visibleCount).map((item, index) => (
                  <Link key={item.id || index} href={`/blog/${item?.slug}`}>
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
                {isMoreLoading && Array.from({ length: Math.min(4, (filteredAndSortedBlogs?.length || 0) - visibleCount) }).map((_, i) => (
                  <BlogSkeletonCard key={i} />
                ))}
              </div>
              {filteredAndSortedBlogs?.length > visibleCount && !isMoreLoading && (
                <div className="seemore">
                  <div className="see_more_botton" onClick={handleLoadMore}>
                    <button className="animated-button filter">
                      <div className="btn-flip" data-back="See More" data-front="See More" style={{ marginTop: "12px" }}>
                        <div className="front">See More</div>
                        <div className="back">See More</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
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
