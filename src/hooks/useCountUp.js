import { useEffect, useRef, useState } from 'react';

/**
 * Animates a numeric value upward once its element enters the viewport.
 * Accepts strings like "50+", "8.5M", "98%", "4K UHD" — it extracts the
 * leading numeric portion, animates that, and re-attaches the original
 * prefix/suffix text so non-numeric stats (like "4K UHD") simply appear
 * without a broken count.
 */
export function useCountUp(rawValue, duration = 1400) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(rawValue);

  useEffect(() => {
    const match = String(rawValue).match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);

    if (!match) {
      setDisplay(rawValue);
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setDisplay(rawValue);
      return;
    }

    const el = ref.current;
    if (!el) {
      setDisplay(rawValue);
      return;
    }

    let animationFrame;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);

          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;

            setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);

            if (progress < 1) {
              animationFrame = requestAnimationFrame(tick);
            } else {
              setDisplay(rawValue);
            }
          };

          animationFrame = requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [rawValue, duration]);

  return [ref, display];
}

export default useCountUp;
