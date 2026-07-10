'use client';
import { useState, useEffect, useRef } from 'react';

export default function TechLogo({ src, alt, fallback }) {
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // If the browser already failed to load the image before hydration, catch it here
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth === 0) {
      setHasError(true);
    }
  }, [src]);

  if (hasError) {
    return (
      <div style={{ width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.8 }}>
        {fallback}
      </div>
    );
  }

  return (
    <img 
      ref={imgRef}
      src={src} 
      alt={alt} 
      width="22" 
      height="22" 
      style={{ display: "block" }}
      onError={() => setHasError(true)} 
    />
  );
}
