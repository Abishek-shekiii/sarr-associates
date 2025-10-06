// src/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ selector = null }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // respect reduced motion preference
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia && window.matchMedia("(min-width: 768px)").matches;
    const behavior = prefersReduced ? "auto" : isDesktop ? "smooth" : "auto";

    const doScroll = () => {
      // Build list of potential scrollable elements (try main containers first)
      const targets = [];
      if (selector) {
        const el = document.querySelector(selector);
        if (el) targets.push(el);
      }
      // Common app roots / document elements
      targets.push(
        document.querySelector("main"),
        document.querySelector(".flex-1"),
        document.getElementById("root"),
        document.scrollingElement,
        document.documentElement,
        document.body
      );

      // Try each target, stop on the first that exists
      for (const t of targets) {
        if (!t) continue;
        try {
          if (typeof t.scrollTo === "function") {
            t.scrollTo({ top: 0, behavior });
          } else {
            t.scrollTop = 0;
          }
        } catch (e) {
          try { t.scrollTop = 0; } catch (_) {}
        }
      }
    };

    // Delay slightly so new route content has time to render (fixes mobile race conditions)
    const id = setTimeout(() => {
      requestAnimationFrame(doScroll);
    }, 40);

    return () => clearTimeout(id);
  }, [pathname, selector]);

  return null;
}
