"use client";

import { useRef, useState, useCallback } from "react";

const slides = [
  {
    videoSrc: "https://media.quecko.com/videos/testimonial.mp4",
    poster: "/Assets/testimonial-preview.png",
    heading: "Brilliant work, fast and flexible",
    para: "The work Quecko has done has been absolutely brilliant. Extremely responsive, reliable, and fast, we can throw last minute requests in and they'll get them done by the end of the day.",
    name: "Tom Blears",
    who: "Chief Executive Officer",
    logo: "/src/testimonial/bitcast_logo.svg",
    logoAlt: "Bitcast Logo",
    isImgLogo: false,
  },
  {
    videoSrc:
      "https://sfpxjfyzrifwgwpsiwgq.supabase.co/storage/v1/object/public/quecko-media/testimonial2.mp4",
    poster: null,
    heading: "Outstanding Crypto Game Development",
    para: "The client highly praises the developers for exceeding expectations while building a cryptocurrency slot game. They delivered exceptional post-launch support and bug fixes, leaving the client eager for future collaborations.",
    name: "CEO - Corsair Web3 Game",
    who: "",
    logo: "https://sfpxjfyzrifwgwpsiwgq.supabase.co/storage/v1/object/public/quecko-media/logo-corsair.png",
    logoAlt: "Corsair Web3 Game Logo",
    isImgLogo: true,
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);
  const [playingStates, setPlayingStates] = useState(
    slides.map(() => false)
  );

  const stopAllVideos = useCallback(() => {
    videoRefs.current.forEach((ref) => {
      if (ref) {
        ref.pause();
        ref.currentTime = 0;
      }
    });
    setPlayingStates(slides.map(() => false));
  }, []);

  const goTo = useCallback(
    (index) => {
      stopAllVideos();
      setCurrentSlide(index);
    },
    [stopAllVideos]
  );

  const goPrev = useCallback(() => {
    goTo((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goTo]);

  const goNext = useCallback(() => {
    goTo((currentSlide + 1) % slides.length);
  }, [currentSlide, goTo]);

  const handlePlay = (index) => {
    const ref = videoRefs.current[index];
    if (ref) {
      ref.play();
    }
  };

  return (
    <section className="testimonials">
      <div className="custom-container">
        <p className="toppara">Our Clients</p>
        <h2 className="testimonialhead">Testimonials</h2>

        <div className="carousel-wrapper">
          {/* Left Arrow */}
          <button
            type="button"
            className="carousel-arrow carousel-arrow--left"
            aria-label="Previous testimonial"
            onClick={goPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="testimonialinner">
                    {/* Video Side */}
                    <div className="videoside">
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        className="testimonialvideo"
                        src={slide.videoSrc}
                        preload="none"
                        {...(slide.poster ? { poster: slide.poster } : {})}
                        playsInline
                        controls={playingStates[index]}
                        onPause={() =>
                          setPlayingStates((prev) => {
                            const next = [...prev];
                            next[index] = false;
                            return next;
                          })
                        }
                        onPlay={() =>
                          setPlayingStates((prev) => {
                            const next = [...prev];
                            next[index] = true;
                            return next;
                          })
                        }
                      />
                      {!playingStates[index] && (
                        <button
                          type="button"
                          className="playbtn"
                          aria-label="Play testimonial video"
                          onClick={() => handlePlay(index)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                          >
                            <path
                              d="M7.08333 7.08344C7.08319 6.5849 7.21458 6.09516 7.46425 5.66364C7.71392 5.23213 8.07303 4.87413 8.50531 4.6258C8.9376 4.37747 9.42775 4.24759 9.92628 4.24928C10.4248 4.25098 10.9141 4.38418 11.3447 4.63544L28.3404 14.5493C28.7693 14.7982 29.1254 15.1552 29.3731 15.5849C29.6207 16.0145 29.7513 16.5016 29.7518 16.9975C29.7522 17.4934 29.6225 17.9807 29.3755 18.4107C29.1286 18.8408 28.7731 19.1985 28.3447 19.4481L11.3447 29.3648C10.9141 29.616 10.4248 29.7492 9.92628 29.7509C9.42775 29.7526 8.9376 29.6227 8.50531 29.3744C8.07303 29.1261 7.71392 28.7681 7.46425 28.3366C7.21458 27.9051 7.08319 27.4153 7.08333 26.9168V7.08344Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Text Side */}
                    <div className="textside">
                      <h3 className="texthead">{slide.heading}</h3>
                      <p className="textpara">{slide.para}</p>
                      <h4 className="name">{slide.name}</h4>
                      {slide.who && <p className="who">{slide.who}</p>}
                      {slide.isImgLogo ? (
                        <img
                          src={slide.logo}
                          alt={slide.logoAlt}
                          className="brand-logo"
                        />
                      ) : (
                        <img src={slide.logo} alt={slide.logoAlt} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            className="carousel-arrow carousel-arrow--right"
            aria-label="Next testimonial"
            onClick={goNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`carousel-dot${currentSlide === index ? " active" : ""}`}
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
