import React, { useState } from 'react';

const VideoWithFallback = ({ videoSrc, thumbnailAlt = "Video thumbnail", thumbnail }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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
            height: '100%',
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
          height: '501px',
          zIndex: 2,

        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoWithFallback;
