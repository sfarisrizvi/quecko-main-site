"use client";
import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { services } from "./servicesData";

const Services = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [offset, setOffset] = useState(100);

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
    setInit(true);
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
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={16}
          slidesPerView={2.3}
          slidesOffsetBefore={offset}
          slidesOffsetAfter={offset}
          breakpoints={{
            100: { slidesPerView: 1.05 },
            768: { slidesPerView: 1.3 },
            900: { slidesPerView: 1.5 },
            1240: { slidesPerView: 2.3 },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="/cardshade.svg"
                      alt="cardshade"
                      className="cardshade"
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
                    <img
                      src="/carddetailshade.svg"
                      alt="carddetailshade"
                      className="carddetailshade"
                    />

                    <div className="detailtop">
                      <div className="topleft">
                        <h5 className="detailhead">{service.title}</h5>
                        <p className="detailpara">{service.description}</p>
                      </div>

                      <div className="rightnumber">{service.number}</div>
                    </div>

                    <div className="mainlinks">
                      {service.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.href || undefined}
                          className="innerlink"
                        >
                          {link.title}
                        </a>
                      ))}
                    </div>
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
