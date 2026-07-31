"use client";

import React, { useEffect, useState } from "react";
import "./ThemeToggleV2.scss";

export default function ThemeToggleV2() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Note: The main layout defaults to a dark aesthetic. 
    // This toggle applies a data-theme="light" attribute to the document element,
    // which SCSS variables can use to invert colors for V2 components.
    if (isLightMode) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isLightMode]);

  return (
    <button 
      className={`theme-toggle-v2 ${isLightMode ? 'light' : 'dark'}`}
      onClick={() => setIsLightMode(!isLightMode)}
      aria-label="Toggle Theme"
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          {isLightMode ? '☀️' : '🌙'}
        </div>
      </div>
      <span className="toggle-label">{isLightMode ? 'Light' : 'Dark'}</span>
    </button>
  );
}
