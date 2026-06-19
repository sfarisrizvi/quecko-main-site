"use client"

import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";

const Lottie = dynamic(() => import("lottie-web"), { ssr: false });

function BlogFeatured() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            import("lottie-web").then((Lottie) => {
                const animation = Lottie.default.loadAnimation({
                    container: containerRef.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: require("../../public/blog-featured.json"),
                });

                return () => {
                    animation.destroy();
                };
            });
        }
    }, []);

    return (
        <div
            className="w-100 mainLoader"
        >
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div
                    className="d-flex flex-wrap align-items-center justify-content-center"
                    style={{ flexDirection: "column" }}
                >
                    <div ref={containerRef} style={{ width: "100%", height: "100%" }}></div>
                </div>
            </div>
        </div>
    );
}

export default BlogFeatured;
