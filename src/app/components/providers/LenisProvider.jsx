"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import { useEffect, useRef } from "react";

export default function LenisProvider({ children }) {
    const lenisRef = useRef();

    useEffect(() => {
        const lenis = lenisRef.current?.lenis;
        lenis?.on("scroll", ScrollTrigger.update);

        const updateGSAP = (time) => {
            lenis?.raf(time * 1000);
        };

        gsap.ticker.add(updateGSAP);

        return () => {
            gsap.ticker.remove(updateGSAP);
            lenis?.off("scroll", ScrollTrigger.update);
        };
    }, []);

    return (
        <ReactLenis root ref={lenisRef} options={{ lerp: 0.2, duration: 1.5 }}>
            {children}
        </ReactLenis>
    );
}
