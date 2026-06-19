"use client"

import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animationData from "../../public/queckoloader.json";

function Loader() {
    const containerRef = useRef(null);

    useEffect(() => {
        const animation = Lottie.loadAnimation({
            container: containerRef.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData,
        });

        return () => animation.destroy();
    }, []);

    return (
        <div
            className="position-fixed w-100 mainLoader"
            style={{
                zIndex: 999999999,
                height: "100%",
                background: "#F3F3F3",
                top: "0px",
                left: "0px",
                overflow: "hidden"
            }}
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

export default Loader;
