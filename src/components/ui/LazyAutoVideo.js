"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Autoplaying background video that defers its network request until the
 * element is about to enter the viewport. The <video> is always rendered so
 * layout (sizing from `className`) is reserved up front, but `src` is only
 * attached once in view — keeping multi-MB clips off the initial page load so
 * they don't compete with above-the-fold content for bandwidth.
 */
const LazyAutoVideo = ({
  src,
  className,
  poster,
  style,
  id,
  rootMargin = "300px",
}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <video
      ref={ref}
      id={id}
      className={className}
      poster={poster}
      style={style}
      muted
      playsInline
      autoPlay
      loop
      preload="none"
      {...(inView ? { src } : {})}
    />
  );
};

export default LazyAutoVideo;
