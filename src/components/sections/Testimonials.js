"use client";

import { useRef, useState } from "react";

const Testimonials = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="testimonials">
      <div className="custom-container">
        <p className="toppara">Our Clients</p>
        <h2 className="testimonialhead">Testimonials</h2>

        <div className="testimonialinner">
          <div className="videoside">
            <video
              ref={videoRef}
              className="testimonialvideo"
              src="https://media.quecko.com/videos/testimonial.mp4"
              preload="none"
              poster="/Assets/testimonial-preview.png"
              playsInline
              controls={playing}
              onPause={() => setPlaying(false)}
              onPlay={() => setPlaying(true)}
            />
            {!playing && (
              <button
                type="button"
                className="playbtn"
                aria-label="Play testimonial video"
                onClick={handlePlay}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <path d="M7.08333 7.08344C7.08319 6.5849 7.21458 6.09516 7.46425 5.66364C7.71392 5.23213 8.07303 4.87413 8.50531 4.6258C8.9376 4.37747 9.42775 4.24759 9.92628 4.24928C10.4248 4.25098 10.9141 4.38418 11.3447 4.63544L28.3404 14.5493C28.7693 14.7982 29.1254 15.1552 29.3731 15.5849C29.6207 16.0145 29.7513 16.5016 29.7518 16.9975C29.7522 17.4934 29.6225 17.9807 29.3755 18.4107C29.1286 18.8408 28.7731 19.1985 28.3447 19.4481L11.3447 29.3648C10.9141 29.616 10.4248 29.7492 9.92628 29.7509C9.42775 29.7526 8.9376 29.6227 8.50531 29.3744C8.07303 29.1261 7.71392 28.7681 7.46425 28.3366C7.21458 27.9051 7.08319 27.4153 7.08333 26.9168V7.08344Z" fill="white"/>
                </svg>
              </button>
            )}
          </div>

          <div className="textside">
            <h3 className="texthead">Brilliant work, fast and flexible</h3>
            <p className="textpara">
              The work Quecko has done has been absolutely brilliant. Extremely
              responsive, reliable, and fast, we can throw last minute requests
              in and they&apos;ll get them done by the end of the day.
            </p>
            <h4 className="name">Tom Blears</h4>
            <p className="who">Chief Executive Officer</p>
            <img src="/src/testimonial/bitcast_logo.svg" alt="bitcast_logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
