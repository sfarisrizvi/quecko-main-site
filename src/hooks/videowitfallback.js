import React, { useState, useEffect } from 'react';

const VideoWithFallback = ({
  videoSrc,
  thumbnailAlt = "Video thumbnail",
  thumbnail,
  height = '501px', // default value
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
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

    handleResize(); // run once on load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [height]);

  return (
    <div className="video-container" style={{ position: 'relative' }}>
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
      <video
        className="main-banner-video newbanner_videoss"
        muted
        playsInline
        autoPlay
        loop
        onCanPlay={() => setIsVideoLoaded(true)}
        width="100%"
        style={{
          position: 'relative',
          height: currentHeight,
          zIndex: 2,
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoWithFallback;
