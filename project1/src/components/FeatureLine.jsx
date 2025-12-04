import { useRef, useEffect } from "react"

const initialTranslateLTR = -48 * 4; // -192px
const initialTranslateRTL = 36 * 4;  // 144px

const FeatureLine = () => {
    const line4Ref = useRef(null);

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
        setupIntersectionObserver(line4Ref.current, true, 0.6, initialTranslateLTR);
    
        // cleanup
        return () => {
          observers.forEach((o) => o.disconnect());
          scrollHandlers.forEach((handler, el) => {
            window.removeEventListener("scroll", handler);
          });
        };
      }, []);

    return( 
        <div className="border border-gray-400 p-6 m-6 rounded-xl overflow-x-hidden">
            <div id="line4" ref={line4Ref} className="flex items-center gap-6 -translate-x-full md:-translate-x-9/12 transition-transform ease-linear">
                <h4 className="text-2xl font-semibold whitespace-nowrap">Downlaod Analytics</h4>
                <span>●</span>
                <h4 className="text-2xl font-semibold whitespace-nowrap">Downlaod Analytics</h4>
                <span>●</span>
                <h4 className="text-2xl font-semibold whitespace-nowrap">Downlaod Analytics</h4>
                <span>●</span>
                <h4 className="text-2xl font-semibold whitespace-nowrap">Downlaod Analytics</h4>
                <span>●</span>
                <h4 className="text-2xl font-semibold whitespace-nowrap">Downlaod Analytics</h4>
                <span>●</span>
                <h4 className="text-2xl font-semibold whitespace-nowrap">Downlaod Analytics</h4>
                <span>●</span> 
                <h4 className="text-2xl font-semibold whitespace-nowrap">Downlaod Analytics</h4>
                <span>●</span>
                <h4 className="text-2xl font-semibold whitespace-nowrap">Downlaod Analytics</h4>
                <span>●</span>
                <h4 className="text-2xl font-semibold whitespace-nowrap">Downlaod Analytics</h4>
                <span>●</span>
                <h4 className="text-2xl font-semibold whitespace-nowrap">Downlaod Analytics</h4>
                <span>●</span>
                <h4 className="text-2xl font-semibold whitespace-nowrap">Downlaod Analytics</h4>
                <span>●</span>
            </div>
        </div>
    )
}

export default FeatureLine