"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "../styles/CustomScrollbar.css";

const MinThumbPX = 40;
const ElasticMaxPX = 28;
const ElasticResistance = 0.35;
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

const CustomScroll = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  const maxScrollRef = useRef(0);
  const maxThumbTravelRef = useRef(0);
  const thumbHeightRef = useRef(MinThumbPX);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const thumb = scrollRef.current;
    if (!container || !thumb) return;

    const getScroll = ScrollTrigger.getScrollFunc(window);
    const drag = {
      active: false,
      startY: 0,
      startScroll: 0,
      elasticSide: null,
    };

    const clearElastic = () => {
      if (!drag.elasticSide) return;
      drag.elasticSide = null;
      thumb.classList.remove("elastic");
      gsap.set(thumb, { height: thumbHeightRef.current });
      syncThumb();
    };

    const releaseElastic = () => {
      if (!drag.elasticSide) return;
      const elasticSide = drag.elasticSide;
      drag.elasticSide = null;
      thumb.classList.remove("elastic");

      gsap.to(thumb, {
        height: thumbHeightRef.current,
        y: elasticSide === "bottom" ? maxThumbTravelRef.current : 0,
        duration: 0.65,
        ease: "elastic.out(1, 0.45)",
        overwrite: true,
        onComplete: syncThumb,
      });
    };

    const syncThumb = () => {
      if (drag.elasticSide) return;
      const maxScroll = ScrollTrigger.maxScroll(window);
      maxScrollRef.current = maxScroll;
      const progress = maxScroll <= 0 ? 0 : getScroll() / maxScroll;
      gsap.set(thumb, {
        y: progress * maxThumbTravelRef.current,
        height: thumbHeightRef.current,
      });
    };

    const measureThumb = () => {
      const trackHeight = container.clientHeight;
      const doc = document.scrollingElement || document.documentElement;
      const documentHeight = doc.scrollHeight;
      const viewportHeight = window.innerHeight;

      const thumbHeight = clamp(
        (viewportHeight / Math.max(documentHeight, 1)) * trackHeight,
        MinThumbPX,
        trackHeight,
      );

      thumbHeightRef.current = thumbHeight;
      maxThumbTravelRef.current = Math.max(0, trackHeight - thumbHeight);

      if (!drag.elasticSide) {
        gsap.set(thumb, { height: thumbHeight });
      }
      syncThumb();
    };

    const ScrollToProgress = (progress) => {
      const maxScroll = ScrollTrigger.maxScroll(window);
      maxScrollRef.current = maxScroll;
      getScroll(clamp(progress, 0, 1) * maxScroll);
    };

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: syncThumb,
      onRefresh: measureThumb,
    });

    const onPointerMove = (e) => {
      if (!drag.active) return;

      const maxThumbTravel = maxThumbTravelRef.current;
      const maxScroll = maxScrollRef.current;
      if (maxThumbTravel <= 0 || maxScroll <= 0) return;

      const deltaY = e.clientY - drag.startY;
      const scrollDelta = (deltaY / maxThumbTravel) * maxScroll;
      const desiredScroll = drag.startScroll + scrollDelta;
      const nextScroll = clamp(desiredScroll, 0, maxScroll);
      const overscroll = desiredScroll - nextScroll;

      getScroll(nextScroll);

      if (overscroll === 0) {
        clearElastic();
        return;
      }

      const side = overscroll > 0 ? "bottom" : "top";
      const overscrollOnThumb =
        (Math.abs(overscroll) / maxScroll) * maxThumbTravel;
      const stretch = clamp(
        overscrollOnThumb * ElasticResistance,
        0,
        ElasticMaxPX,
      );
      const y = side === "bottom" ? maxThumbTravel : -stretch;

      drag.elasticSide = side;
      thumb.classList.add("elastic");
      gsap.set(thumb, {
        y,
        height: thumbHeightRef.current + stretch,
      });
    };

    const StopDrag = () => {
      if (!drag.active) return;
      drag.active = false;
      thumb.classList.remove("dragging");
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", StopDrag);
      window.removeEventListener("pointercancel", StopDrag);
      releaseElastic();
    };

    const onDown = (e) => {
      e.preventDefault();
      drag.active = true;
      drag.startY = e.clientY;
      drag.startScroll = getScroll();
      drag.elasticSide = null;
      thumb.classList.add("dragging");
      thumb.classList.remove("elastic");
      gsap.killTweensOf(thumb);
      syncThumb();

      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", StopDrag);
      window.addEventListener("pointercancel", StopDrag);
    };

    const onTrackDown = (e) => {
      if (e.target === thumb) return;

      const rect = container.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const thumbHeight = thumb.getBoundingClientRect().height;
      const maxThumbTravel = maxThumbTravelRef.current;

      const thumbY = clamp(clickY - thumbHeight / 2, 0, maxThumbTravel);
      const progress = maxThumbTravel > 0 ? thumbY / maxThumbTravel : 0;
      ScrollToProgress(progress);
    };

    const onResize = () => ScrollTrigger.refresh();

    thumb.addEventListener("pointerdown", onDown);
    container.addEventListener("pointerdown", onTrackDown);
    window.addEventListener("resize", onResize);

    measureThumb();
    ScrollTrigger.refresh();

    return () => {
      StopDrag();
      thumb.removeEventListener("pointerdown", onDown);
      container.removeEventListener("pointerdown", onTrackDown);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", StopDrag);
      window.removeEventListener("pointercancel", StopDrag);
      trigger.kill();
    };
  }, []);

  return (
    <div>
      <div className="scroll-container" ref={containerRef}>
        <div className="scroll-bar" ref={scrollRef}></div>
      </div>
    </div>
  );
};

export default CustomScroll;
