import React, { useEffect, useRef } from "react";

const initialTranslateLTR = -48 * 4; // -192px
const initialTranslateRTL = 36 * 4;  // 144px

const CompanyContainers = () => {
  // refs for three lines
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useEffect(() => {
    const observers = [];
    const scrollHandlers = new Map();

    const setupIntersectionObserver = (element, isLTR, speed, initial) => {
      if (!element) return;

      // initial transform set by JS so Tailwind translate utilities don't conflict
      element.style.transform = `translateX(${initial}px)`;

      let rafId = null;
      const scrollHandler = () => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          const rect = element.getBoundingClientRect();
          // You can tweak this formula to match the video exactly
          const translateX = (window.innerHeight - rect.top) * speed;
          let totalTranslate = isLTR ? (translateX + initialTranslateLTR) : -(translateX + initialTranslateRTL);
          element.style.transform = `translateX(${totalTranslate}px)`;
        });
      };

      // store to cleanup later
      scrollHandlers.set(element, scrollHandler);

      const intersectionCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.target !== element) return;
          if (entry.isIntersecting) {
            window.addEventListener("scroll", scrollHandler, { passive: true });
            // run once to position correctly on enter
            scrollHandler();
          } else {
            window.removeEventListener("scroll", scrollHandler);
          }
        });
      };

      const observer = new IntersectionObserver(intersectionCallback, {
        root: null,
        rootMargin: "0px",
        threshold: 0
      });

      observer.observe(element);
      observers.push(observer);
    };

    // setup on mount
    setupIntersectionObserver(line1Ref.current, true, 0.15, initialTranslateLTR);
    setupIntersectionObserver(line2Ref.current, false, 0.15, -initialTranslateRTL);
    setupIntersectionObserver(line3Ref.current, true, 0.15, initialTranslateLTR);

    // cleanup
    return () => {
      observers.forEach((o) => o.disconnect());
      scrollHandlers.forEach((handler, el) => {
        window.removeEventListener("scroll", handler);
      });
    };
  }, []);

  // small Item component
  const Item = () => (
    <div className="flex flex-col items-center justify-center gap-1 border border-gray-400 rounded-xl w-24 h-24 md:h-30 md:w-30">
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-pink-200" />
      <p className="text-xs font-semibold">Unbounce</p>
    </div>
  );

  return (
    <div className="flex flex-col gap-4">
      {/* NOTE: removed Tailwind translate-x utility to let JS control transform */}
      <div id="line1" ref={line1Ref} className="flex gap-4 overflow-visible transition-transform ease-linear">
        {Array.from({ length: 16 }).map((_, i) => <Item key={`l1-${i}`} />)}
      </div>

      <div id="line2" ref={line2Ref} className="flex gap-4 overflow-visible transition-transform ease-linear">
        {Array.from({ length: 16 }).map((_, i) => <Item key={`l2-${i}`} />)}
      </div>

      <div id="line3" ref={line3Ref} className="flex gap-4 md:hidden overflow-visible transition-transform ease-linear">
        {Array.from({ length: 16 }).map((_, i) => <Item key={`l3-${i}`} />)}
      </div>
    </div>
  );
};

export default CompanyContainers;
