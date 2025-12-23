import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

const useSmoothScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const locoScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true, 
        lerp: 0.1,
        multiplier: 0.8, 
      });

      
      locoScroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(scrollRef.current, {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });

      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();

      return () => {
        if (locoScroll) locoScroll.destroy();
      };
    }
  }, []);

  return scrollRef;
};

export default useSmoothScroll;
