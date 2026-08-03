"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, FreeMode } from "swiper/modules";
import "swiper/css";
import { services } from "./servicesData";
import { allServicesData } from "./allServicesData";

const getSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[&\/\\#,+()$~%.'":*?<>{}[\]]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const CardBackCarousel = ({ service, getSlug }) => {
  const containerRef = useRef(null);
  const subServices = allServicesData[service.slug]?.subServices;
  const linksToRender = subServices 
    ? Object.values(subServices).map(sub => ({ title: sub.title, slug: sub.slug }))
    : service.links;

  // Chunk links into pages of 9 max
  const pages = [];
  const chunkSize = 9;
  for (let i = 0; i < linksToRender.length; i += chunkSize) {
    pages.push(linksToRender.slice(i, i + chunkSize));
  }

  const scrollLeft = (e) => {
    e.stopPropagation();
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -containerRef.current.clientWidth, behavior: "smooth" });
    }
  };

  const scrollRight = (e) => {
    e.stopPropagation();
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: containerRef.current.clientWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="card-back-carousel-wrapper">
      <div className="carousel-track" ref={containerRef}>
        {pages.map((pageLinks, pageIdx) => (
          <div key={pageIdx} className="carousel-page">
            {pageLinks.map((link, index) => {
              const href = service.slug
                ? `/services/${service.slug}/${link.slug || getSlug(link.title)}`
                : (link.href || "#");
              return (
                <Link
                  key={index}
                  href={href}
                  className="innerlink"
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      {pages.length > 1 && (
        <div className="carousel-controls">
          <button 
            type="button" 
            className="carousel-nav-btn prev" 
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          
          <button 
            type="button" 
            className="carousel-nav-btn next" 
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

const Services = () => {
  const router = useRouter();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [offset, setOffset] = useState(100);

  const handleCardClick = (e, href) => {
    // If the click is inside a pill link, let the link handle it
    if (e.target.closest('.innerlink')) {
      return;
    }
    router.push(href);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setOffset(20);
      } else {
        setOffset(100);
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [init, setInit] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setInit(true), 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (init && swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [init]);

  return (
    <section className="servicesmain" id="services">
      <div className="servicestopmain">
        <div className="topleft">
          <div className="toppara">
            <p className="innerpara">Services</p>
          </div>
          <h1 className="serviceshead">
            End-to-End Digital Product Engineering
          </h1>
          <p className="servicespara">
            We build the technologies shaping the next decade — from AI systems,
            blockchain infrastructure, SaaS platforms, mobile apps.
          </p>
        </div>
        <div className="topright">
          {/* <button className="viewallbtn">View All Services</button> */}
          <div className="sliderbtns">
            <button
              ref={prevRef}
              className="card-slider__btn card-slider__btn--prev"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.00161 12H20.0016"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.99972 17C8.99972 17 3.99982 13.3176 3.99982 12C3.99982 10.6824 8.99982 7 8.99982 7"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              ref={nextRef}
              className="card-slider__btn card-slider__btn--next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.9984 12H3.99841"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="card-slider">
        <Swiper
          modules={[Navigation, Mousewheel, FreeMode]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={16}
          slidesPerView={2.3}
          slidesOffsetBefore={offset}
          slidesOffsetAfter={offset}
          mousewheel={{ forceToAxis: true }}
          freeMode={true}
          breakpoints={{
            100: { slidesPerView: 1.05 },
            768: { slidesPerView: 1.3 },
            900: { slidesPerView: 1.5 },
            1240: { slidesPerView: 2.3 },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div
                className="flip-card"
                onClick={(e) => handleCardClick(e, service.href || "#")}
                style={{ cursor: "pointer" }}
              >
                <div className="flip-card-inner">
                  <div
                    className="flip-card-front"
                    style={{ textDecoration: "none", color: "inherit", display: "flex", width: "100%", height: "100%" }}
                  >
                    <Image
                      src="/cardshade.svg"
                      alt="cardshade"
                      className="cardshade"
                      width={400}
                      height={500}
                    />

                    {service.icon}

                    <div className="cardbottom">
                      <div className="cardtexts">
                        <h4 className="cardhead">{service.title}</h4>
                        <p className="cardpara">{service.description}</p>
                      </div>

                      <h6 className="cardnumber">{service.number}</h6>
                    </div>
                  </div>

                  <div className="flip-card-back">
                    <Image
                      src="/carddetailshade.svg"
                      alt="carddetailshade"
                      className="carddetailshade"
                      width={400}
                      height={500}
                    />

                    <div
                      className="detailtop"
                      style={{ textDecoration: "none", color: "inherit", display: "flex", width: "100%" }}
                    >
                      <div className="topleft">
                        <h5 className="detailhead">{service.title}</h5>
                        <p className="detailpara">{service.description}</p>
                      </div>

                      <div className="rightnumber">{service.number}</div>
                    </div>

                    <CardBackCarousel service={service} getSlug={getSlug} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
