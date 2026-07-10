'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { services } from '@/components/sections/servicesData';
import { usePathname } from 'next/navigation';
import { scrollToHash } from '@/Utils/scroll';

export default function ServicesMegaMenu() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeService, setActiveService] = useState(services[0]);
  const pathname = usePathname();
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 250); // 250ms grace period to cross the gap
  };

  const handleHashNav = (e) => {
    if (pathname === "/") {
      scrollToHash("#services");
    }
  };

  return (
    <div 
      className="services-mega-menu-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Invisible SVG Filter for the gooey mitosis effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <filter id="mitosis-gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>

      {/* Background blobs layer that gets the filter */}
      <div className="mitosis-bg-layer" style={{ filter: "url('#mitosis-gooey')" }}>
        {/* The Mother Blob (sits perfectly behind the nav link) */}
        <div className="blob-mother"></div>
        {/* The Daughter Blob (animates down and expands to become the mega menu bg) */}
        <div className={`blob-daughter ${isHovered ? 'expanded' : ''}`}></div>
      </div>

      {/* Content Layer (z-index above backgrounds) */}
      <div className="mitosis-content-layer">
        <Link href="/#services" scroll={false} onClick={handleHashNav} className="mega-nav-trigger">
          <p className={`nav-link ${isHovered ? 'hovered' : ''}`}>Service</p>
        </Link>

        {/* The actual mega menu content */}
        <div className={`mega-menu-content ${isHovered ? 'visible' : ''}`}>
           <div className="mega-menu-left">
              {services.map(s => (
                <div 
                  key={s.id} 
                  className={`mega-category ${activeService.id === s.id ? 'active' : ''}`}
                  onMouseEnter={() => setActiveService(s)}
                >
                  <Link href={s.href} className="mega-category-content-wrap" style={{ textDecoration: 'none' }}>
                    <div className="mega-category-icon">{s.icon}</div>
                    <span className="mega-category-title">{s.title}</span>
                  </Link>
                  {activeService.id === s.id && (
                    <svg className="mega-active-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              ))}
           </div>
           <div className="mega-menu-right">
              <div className="mega-sub-grid">
                {activeService.links.map((link, idx) => {
                  // Convert old ?tab= format to new dynamic route format: /services/web3/slug
                  const newHref = link.href.replace('?tab=', '/');
                  return (
                    <Link key={idx} href={newHref} className="mega-sub-link">
                      {link.title}
                    </Link>
                  );
                })}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
