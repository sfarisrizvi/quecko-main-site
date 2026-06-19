"use client"

import React, { useState, useEffect, useRef } from 'react';

const VideoWithFallback = ({
  videoSrc,
  thumbnailAlt = "Video thumbnail",
  thumbnail,
  height = '501px',
}) => {
  const [isInView, setIsInView] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef();
  const [currentHeight, setCurrentHeight] = useState(
    typeof height === 'object' ? height.default : height
  );

  useEffect(() => {
    const handleResize = () => {
      if (typeof height === 'object') {
        const isMobile = window.innerWidth <= 768;
        setCurrentHeight(isMobile ? height.responsive : height.default);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [height]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // only load once
        }
      },
      { threshold: 0.25 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="video-container" style={{ position: 'relative' }} ref={videoRef}>
      {!isVideoLoaded && (
        <img
          src={thumbnail}
          alt={thumbnailAlt}
          className="fallback-thumbnail"
          style={{
            position: 'absolute',
            width: '100%',
            height: currentHeight,
            objectFit: 'cover',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
      )}
      {isInView && (
        <video
          className="main-banner-video newbanner_videoss"
          muted
          playsInline
          autoPlay
          loop
          onCanPlay={() => setIsVideoLoaded(true)}
          preload="none"
          width="100%"
          style={{
            position: 'relative',
            height: currentHeight,
            zIndex: 2,
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default VideoWithFallback;
