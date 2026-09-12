import { useEffect, useRef } from 'react';

/**
 * Subtle magnetic-button effect for premium CTAs.
 * Desktop / fine-pointer only — never active on touch devices.
 * Returns a ref to attach to the interactive element.
 */
export function useMagnetic(strength = 0.35) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isFinePointer =
      window.matchMedia && window.matchMedia('(pointer: fine)').matches;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) return;

    let frame = null;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);

      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
      });
    };

    const handleMouseLeave = () => {
      if (frame) cancelAnimationFrame(frame);
      el.style.transform = 'translate(0px, 0px)';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [strength]);

  return ref;
}

export default useMagnetic;
