// hooks/useLenisGsap.js
import { useEffect } from "react";
import dynamic from "next/dynamic";

export default function useLenisGsap() {
  useEffect(() => {
    import("lenis").then(({ default: Lenis }) => {
      import("gsap").then(({ gsap }) => {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);

          const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
          const isMac = /Macintosh/i.test(navigator.userAgent);

         
          const duration = isMobile ? 3.5 : isMac ? 2.5 : 2;
          const touchMultiplier = isMobile ? 1.2 : 2;
          const easing = (t) => 1 - Math.pow(1 - t, isMobile ? 5 : (isMac ? 3.5 : 4)); 

          const lenis = new Lenis({
            duration,
            easing,
            smoothWheel: true,
            smoothTouch: true,
            touchMultiplier,
            infinite: false,
          });

          lenis.on("scroll", ScrollTrigger.update);

          gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
          });

          
          gsap.ticker.lagSmoothing(300); 

          return () => {
            lenis.destroy();
            gsap.ticker.remove(() => lenis.raf());
          };
        });
      });
    });
  }, []);
}
