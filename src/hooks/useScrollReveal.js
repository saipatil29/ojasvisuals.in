import { useEffect } from 'react';

/**
 * Global scroll-reveal system.
 *
 * Any element rendered anywhere in the tree with a `data-reveal` attribute
 * (optionally `data-reveal="scale"` or `data-reveal="line"`, and an optional
 * `data-reveal-delay="120"` in ms) will fade/translate/blur into view the
 * first time it enters the viewport. Actual visual treatment lives in
 * index.css so this hook only toggles the `is-revealed` class.
 *
 * Call this once near the root of the app (App.jsx). It re-scans the DOM
 * whenever the route-level content changes size, so it is safe to use with
 * conditionally rendered sections.
 */
export function useScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const elements = Array.from(document.querySelectorAll('[data-reveal]'));

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    elements.forEach((el) => {
      const delay = el.getAttribute('data-reveal-delay');
      if (delay) {
        el.style.setProperty('--reveal-delay', `${delay}ms`);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default useScrollReveal;
